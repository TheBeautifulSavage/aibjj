import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { db as prisma } from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.redirect(
        `${"https://aibjj.com"}/auth/signin`
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user?.stripeConnectId) {
      return NextResponse.redirect(
        `${"https://aibjj.com"}/creator?connect=error`
      );
    }

    // Check the account status from Stripe
    const account = await stripe.accounts.retrieve(user.stripeConnectId);

    const status =
      account.charges_enabled && account.payouts_enabled
        ? "active"
        : account.details_submitted
          ? "pending_verification"
          : "pending";

    await prisma.user.update({
      where: { id: user.id },
      data: { stripeConnectStatus: status },
    });

    const message =
      status === "active"
        ? "connect_success"
        : status === "pending_verification"
          ? "connect_pending"
          : "connect_incomplete";

    return NextResponse.redirect(
      `${"https://aibjj.com"}/creator-setup?${message}=true`
    );
  } catch (error) {
    console.error("[STRIPE_CONNECT_RETURN_ERROR]", error);
    return NextResponse.redirect(
      `${"https://aibjj.com"}/creator?connect=error`
    );
  }
}
