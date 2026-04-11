import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabase } from "@/lib/supabase";
import { sendCoursePurchaseEmail, sendCreatorSaleEmail } from "@/lib/email";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getRawBody(req: NextRequest): Promise<Buffer> {
  const reader = req.body?.getReader();
  if (!reader) throw new Error("No request body");
  const chunks: Uint8Array[] = [];
  let done = false;
  while (!done) {
    const result = await reader.read();
    done = result.done;
    if (result.value) chunks.push(result.value);
  }
  return Buffer.concat(chunks);
}

// Direct Supabase helpers — bypasses db wrapper to avoid compound key / single() issues
async function updateUser(where: Record<string, string>, data: Record<string, unknown>) {
  let q = supabase.from("User").update(data);
  for (const [k, v] of Object.entries(where)) {
    q = q.eq(k, v) as typeof q;
  }
  const { error } = await q;
  if (error) console.error("[STRIPE_WEBHOOK] updateUser error:", error.message);
}

async function getUserByCustomerId(customerId: string) {
  const { data } = await supabase.from("User").select("id,email,name").eq("stripeCustomerId", customerId).limit(1);
  return data?.[0] ?? null;
}

async function getUserBySubscriptionId(subscriptionId: string) {
  const { data } = await supabase.from("User").select("id,email,name").eq("creatorStripeSubscriptionId", subscriptionId).limit(1);
  return data?.[0] ?? null;
}

async function upsertPurchase(userId: string, courseId: string, amount: number, paymentId: string) {
  // Check if purchase already exists
  const { data: existing } = await supabase
    .from("Purchase")
    .select("id")
    .eq("userId", userId)
    .eq("courseId", courseId)
    .limit(1);

  if (existing && existing.length > 0) {
    await supabase
      .from("Purchase")
      .update({ amount, stripePaymentId: paymentId })
      .eq("id", existing[0].id);
  } else {
    await supabase.from("Purchase").insert({ userId, courseId, amount, stripePaymentId: paymentId });
  }
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await getRawBody(req);
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing stripe-signature header." }, { status: 400 });
    }

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      console.error("[STRIPE_WEBHOOK_SIGNATURE_ERROR]", err);
      return NextResponse.json({ error: "Invalid webhook signature." }, { status: 400 });
    }

    console.log(`[STRIPE_WEBHOOK] Event: ${event.type}`);

    switch (event.type) {

      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        const planType = session.metadata?.planType;

        if (!userId) {
          console.error("[STRIPE_WEBHOOK] No userId in session metadata");
          break;
        }

        // Lifetime one-time payment
        if (planType === "LIFETIME") {
          await updateUser({ id: userId }, {
            subscriptionTier: "PRO",
            isLifetime: true,
            stripeCustomerId: session.customer as string,
          });
          break;
        }

        // Course purchase
        if (planType === "COURSE_PURCHASE") {
          const courseId = session.metadata?.courseId;
          const buyerEmail = session.customer_details?.email;
          const amount = (session.amount_total || 0) / 100;

          if (courseId) {
            await upsertPurchase(userId, courseId, amount, session.payment_intent as string);
          }

          // Send emails (non-blocking)
          if (courseId && buyerEmail) {
            try {
              const { data: courseRows } = await supabase
                .from("Course")
                .select("id,title,creatorId")
                .eq("id", courseId)
                .limit(1);
              const course = courseRows?.[0];
              if (course) {
                const { data: creatorRows } = await supabase
                  .from("User")
                  .select("id,name,email")
                  .eq("id", course.creatorId)
                  .limit(1);
                const { data: buyerRows } = await supabase
                  .from("User")
                  .select("id,name,email")
                  .eq("id", userId)
                  .limit(1);
                const creator = creatorRows?.[0];
                const buyer = buyerRows?.[0];
                if (creator) {
                  sendCoursePurchaseEmail(buyerEmail, buyer?.name || "Student", course.title, creator.name || "Instructor", amount).catch(console.error);
                  if (creator.email) {
                    sendCreatorSaleEmail(creator.email, creator.name || "Creator", course.title, buyer?.name || "Student", amount).catch(console.error);
                  }
                }
              }
            } catch (e) {
              console.error("[STRIPE_WEBHOOK] Email error:", e);
            }
          }
          break;
        }

        // Subscription-based plans
        const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
        const priceId = subscription.items.data[0]?.price.id;

        if (planType === "CREATOR_PRO" || planType === "CREATOR_ELITE") {
          const creatorTier = planType === "CREATOR_ELITE" ? "ELITE" : "PRO";
          await updateUser({ id: userId }, {
            creatorTier,
            creatorStripeSubscriptionId: subscription.id,
            stripeCustomerId: session.customer as string,
          });
          break;
        }

        const tier = priceId === process.env.STRIPE_ANNUAL_PRICE_ID ? "ANNUAL" : "PRO";
        await updateUser({ id: userId }, {
          subscriptionTier: tier,
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: session.customer as string,
        });
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata?.userId;
        const priceId = subscription.items.data[0]?.price.id;
        const tier = priceId === process.env.STRIPE_ANNUAL_PRICE_ID ? "ANNUAL" : "PRO";

        if (userId) {
          await updateUser({ id: userId }, { subscriptionTier: tier, stripeSubscriptionId: subscription.id });
        } else {
          const user = await getUserByCustomerId(subscription.customer as string);
          if (user) {
            await updateUser({ id: user.id }, { subscriptionTier: tier, stripeSubscriptionId: subscription.id });
          } else {
            console.error("[STRIPE_WEBHOOK] Cannot resolve user for subscription update");
          }
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata?.userId;

        // Check if this is a creator subscription
        const creatorUser = await getUserBySubscriptionId(subscription.id);
        if (creatorUser) {
          await updateUser({ id: creatorUser.id }, {
            creatorTier: "FREE",
            creatorStripeSubscriptionId: null,
          });
          break;
        }

        // Student subscription deletion
        if (userId) {
          await updateUser({ id: userId }, { subscriptionTier: "FREE", stripeSubscriptionId: null });
        } else {
          const user = await getUserByCustomerId(subscription.customer as string);
          if (user) {
            await updateUser({ id: user.id }, { subscriptionTier: "FREE", stripeSubscriptionId: null });
          } else {
            console.error("[STRIPE_WEBHOOK] Cannot resolve user for subscription deletion");
          }
        }
        break;
      }

      case "invoice.payment_succeeded":
      case "invoice.paid": {
        // Subscription renewal — ensure tier stays active
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id;
        if (customerId) {
          const user = await getUserByCustomerId(customerId);
          if (user) {
            // Just log — tier is already set, renewal doesn't need to change anything
            console.log(`[STRIPE_WEBHOOK] Invoice paid for user ${user.id}`);
          }
        }
        break;
      }

      default:
        console.log(`[STRIPE_WEBHOOK] Unhandled event type: ${event.type}`);
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[STRIPE_WEBHOOK_ERROR]", error);
    // Still return 200 to prevent Stripe from disabling the webhook
    // Log the error but don't let it kill the endpoint
    return NextResponse.json({ received: true, error: "Handler error logged" });
  }
}
