import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db as prisma } from "@/lib/db";
import { sendCoursePurchaseEmail, sendCreatorSaleEmail } from "@/lib/email";
import Stripe from "stripe";

export const runtime = "nodejs";

// Disable Next.js body parsing so we can access the raw body for signature verification
export const dynamic = "force-dynamic";

async function getRawBody(req: NextRequest): Promise<Buffer> {
  const reader = req.body?.getReader();
  if (!reader) throw new Error("No request body");

  const chunks: Uint8Array[] = [];
  let done = false;

  while (!done) {
    const result = await reader.read();
    done = result.done;
    if (result.value) {
      chunks.push(result.value);
    }
  }

  return Buffer.concat(chunks);
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await getRawBody(req);
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe-signature header." },
        { status: 400 }
      );
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
      return NextResponse.json(
        { error: "Invalid webhook signature." },
        { status: 400 }
      );
    }

    switch (event.type) {
      // -----------------------------------------------------------------
      // Checkout completed -- activate subscription
      // -----------------------------------------------------------------
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        const planType = session.metadata?.planType;

        if (!userId) {
          console.error("[STRIPE_WEBHOOK] No userId in session metadata");
          break;
        }

        // Handle lifetime one-time payment
        if (planType === "LIFETIME") {
          await prisma.user.update({
            where: { id: userId },
            data: {
              subscriptionTier: "PRO",
              isLifetime: true,
              stripeCustomerId: session.customer as string,
            },
          });
          break;
        }

        // Handle course purchase (one-time payment, no subscription)
        if (planType === "COURSE_PURCHASE") {
          const courseId = session.metadata?.courseId;
          const buyerEmail = session.customer_details?.email;
          const amount = (session.amount_total || 0) / 100;

          // Create purchase record
          if (courseId) {
            await prisma.purchase.upsert({
              where: { userId_courseId: { userId, courseId } },
              update: { amount, stripePaymentId: session.payment_intent as string },
              create: {
                userId,
                courseId,
                amount,
                stripePaymentId: session.payment_intent as string,
              },
            });
          }

          // Send emails
          if (courseId && buyerEmail) {
            const course = await prisma.course.findUnique({
              where: { id: courseId },
              include: { creator: { select: { name: true, email: true } } }
            });
            if (course) {
              const buyer = await prisma.user.findUnique({ where: { id: userId }, select: { name: true, email: true } });
              sendCoursePurchaseEmail(buyerEmail, buyer?.name || "Student", course.title, course.creator?.name || "Instructor", amount).catch(console.error);
              if (course.creator?.email) {
                sendCreatorSaleEmail(course.creator.email, course.creator.name || "Creator", course.title, buyer?.name || "Student", amount).catch(console.error);
              }
            }
          }
          break;
        }

        // For subscription-based plans, retrieve the subscription
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        );
        const priceId = subscription.items.data[0]?.price.id;

        // Handle creator plans
        if (planType === "CREATOR_PRO" || planType === "CREATOR_ELITE") {
          const creatorTier = planType === "CREATOR_ELITE" ? "ELITE" : "PRO";
          await prisma.user.update({
            where: { id: userId },
            data: {
              creatorTier,
              creatorStripeSubscriptionId: subscription.id,
              stripeCustomerId: session.customer as string,
            },
          });
          break;
        }

        // Handle student plans
        const tier =
          priceId === process.env.STRIPE_ANNUAL_PRICE_ID ? "ANNUAL" : "PRO";

        await prisma.user.update({
          where: { id: userId },
          data: {
            subscriptionTier: tier,
            stripeSubscriptionId: subscription.id,
            stripeCustomerId: session.customer as string,
          },
        });

        break;
      }

      // -----------------------------------------------------------------
      // Subscription updated (upgrade / downgrade / renewal)
      // -----------------------------------------------------------------
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata?.userId;

        if (!userId) {
          // Fallback: look up user by stripeCustomerId
          const user = await prisma.user.findFirst({
            where: { stripeCustomerId: subscription.customer as string },
          });
          if (!user) {
            console.error(
              "[STRIPE_WEBHOOK] Cannot resolve user for subscription update"
            );
            break;
          }

          const priceId = subscription.items.data[0]?.price.id;
          const tier =
            priceId === process.env.STRIPE_ANNUAL_PRICE_ID ? "ANNUAL" : "PRO";

          await prisma.user.update({
            where: { id: user.id },
            data: {
              subscriptionTier: tier,
              stripeSubscriptionId: subscription.id,
            },
          });
          break;
        }

        const priceId = subscription.items.data[0]?.price.id;
        const tier =
          priceId === process.env.STRIPE_ANNUAL_PRICE_ID ? "ANNUAL" : "PRO";

        await prisma.user.update({
          where: { id: userId },
          data: {
            subscriptionTier: tier,
            stripeSubscriptionId: subscription.id,
          },
        });

        break;
      }

      // -----------------------------------------------------------------
      // Subscription deleted / cancelled
      // -----------------------------------------------------------------
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata?.userId;

        // Check if this is a creator subscription
        const isCreatorSub = await prisma.user.findFirst({
          where: { creatorStripeSubscriptionId: subscription.id },
        });

        if (isCreatorSub) {
          await prisma.user.update({
            where: { id: isCreatorSub.id },
            data: {
              creatorTier: "FREE",
              creatorStripeSubscriptionId: null,
            },
          });
          break;
        }

        // Handle student subscription deletion
        if (userId) {
          await prisma.user.update({
            where: { id: userId },
            data: {
              subscriptionTier: "FREE",
              stripeSubscriptionId: null,
            },
          });
        } else {
          const user = await prisma.user.findFirst({
            where: { stripeCustomerId: subscription.customer as string },
          });

          if (user) {
            await prisma.user.update({
              where: { id: user.id },
              data: {
                subscriptionTier: "FREE",
                stripeSubscriptionId: null,
              },
            });
          } else {
            console.error(
              "[STRIPE_WEBHOOK] Cannot resolve user for subscription deletion"
            );
          }
        }

        break;
      }

      default:
        // Unhandled event type -- acknowledge receipt
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[STRIPE_WEBHOOK_ERROR]", error);
    return NextResponse.json(
      { error: "Webhook handler failed." },
      { status: 500 }
    );
  }
}
