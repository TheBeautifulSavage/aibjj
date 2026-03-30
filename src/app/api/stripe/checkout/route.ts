import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe, PLANS } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "You must be signed in to subscribe." },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { priceId, planType } = body as {
      priceId?: string;
      planType?: "PRO" | "ANNUAL" | "CREATOR_PRO" | "CREATOR_ELITE";
    };

    // Resolve the Stripe price ID
    let resolvedPriceId = priceId;
    if (!resolvedPriceId && planType) {
      switch (planType) {
        case "ANNUAL":
          resolvedPriceId = PLANS.ANNUAL.stripePriceId;
          break;
        case "CREATOR_PRO":
          resolvedPriceId = PLANS.CREATOR_PRO.stripePriceId;
          break;
        case "CREATOR_ELITE":
          resolvedPriceId = PLANS.CREATOR_ELITE.stripePriceId;
          break;
        default:
          resolvedPriceId = PLANS.PRO.stripePriceId;
          break;
      }
    }

    if (!resolvedPriceId) {
      return NextResponse.json(
        { error: "Invalid plan selected." },
        { status: 400 }
      );
    }

    const isCreatorPlan = planType === "CREATOR_PRO" || planType === "CREATOR_ELITE";

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found." },
        { status: 404 }
      );
    }

    // Create or retrieve Stripe customer
    let stripeCustomerId = user.stripeCustomerId;

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email ?? undefined,
        name: user.name ?? undefined,
        metadata: {
          userId: user.id,
        },
      });

      stripeCustomerId = customer.id;

      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId },
      });
    }

    // Create Stripe checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: resolvedPriceId,
          quantity: 1,
        },
      ],
      success_url: isCreatorPlan
        ? `${process.env.NEXT_PUBLIC_APP_URL}/creator-setup?session_id={CHECKOUT_SESSION_ID}`
        : `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      subscription_data: {
        metadata: {
          userId: user.id,
        },
        ...(isCreatorPlan ? {} : { trial_period_days: 7 }),
      },
      metadata: {
        userId: user.id,
        planType: planType ?? "PRO",
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("[STRIPE_CHECKOUT_ERROR]", error);
    return NextResponse.json(
      { error: "Something went wrong creating the checkout session." },
      { status: 500 }
    );
  }
}
