import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { db as prisma } from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (!user.stripeConnectId) {
      return NextResponse.json({
        connected: false,
        chargesEnabled: false,
        payoutsEnabled: false,
        accountId: null,
      });
    }

    const account = await stripe.accounts.retrieve(user.stripeConnectId);

    // Update status in DB if it changed
    const newStatus =
      account.charges_enabled && account.payouts_enabled
        ? "active"
        : account.details_submitted
          ? "pending_verification"
          : "pending";

    if (newStatus !== user.stripeConnectStatus) {
      await prisma.user.update({
        where: { id: user.id },
        data: { stripeConnectStatus: newStatus },
      });
    }

    return NextResponse.json({
      connected: account.details_submitted ?? false,
      chargesEnabled: account.charges_enabled ?? false,
      payoutsEnabled: account.payouts_enabled ?? false,
      accountId: user.stripeConnectId,
    });
  } catch (error) {
    console.error("[STRIPE_CONNECT_STATUS_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to check Connect status" },
      { status: 500 }
    );
  }
}
