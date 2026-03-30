import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user || user.role !== "CREATOR") {
      return NextResponse.json(
        { error: "Creator account required" },
        { status: 403 }
      );
    }

    let connectAccountId = user.stripeConnectId;

    // Create a new Express account if they don't have one
    if (!connectAccountId) {
      const account = await stripe.accounts.create({
        type: "express",
        email: user.email ?? undefined,
        metadata: { userId: user.id },
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
      });

      connectAccountId = account.id;

      await prisma.user.update({
        where: { id: user.id },
        data: {
          stripeConnectId: connectAccountId,
          stripeConnectStatus: "pending",
        },
      });
    }

    // Generate an account link for onboarding
    const accountLink = await stripe.accountLinks.create({
      account: connectAccountId,
      refresh_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/stripe/connect/onboard`,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/stripe/connect/return`,
      type: "account_onboarding",
    });

    return NextResponse.json({ url: accountLink.url });
  } catch (error) {
    console.error("[STRIPE_CONNECT_ONBOARD_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to start Stripe Connect onboarding" },
      { status: 500 }
    );
  }
}
