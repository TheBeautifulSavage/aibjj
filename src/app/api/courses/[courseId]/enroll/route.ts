import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function POST(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id?: string }).id;
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const course = await prisma.course.findUnique({
      where: { id: params.courseId },
      include: {
        creator: { select: { id: true, name: true, stripeConnectId: true } },
      },
    });

    if (!course || !course.published) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    // Check if already purchased
    const existingPurchase = await prisma.purchase.findUnique({
      where: { userId_courseId: { userId, courseId: course.id } },
    });

    if (existingPurchase) {
      return NextResponse.json({
        success: true,
        redirect: `/courses/${course.id}`,
        message: "Already enrolled",
      });
    }

    // Creator can always access their own course
    if (course.creatorId === userId) {
      return NextResponse.json({
        success: true,
        redirect: `/courses/${course.id}`,
        message: "You are the creator",
      });
    }

    // Free course: instant access
    if (course.price === 0) {
      await prisma.purchase.create({
        data: {
          userId,
          courseId: course.id,
          amount: 0,
        },
      });

      return NextResponse.json({
        success: true,
        redirect: `/courses/${course.id}`,
      });
    }

    // Paid course: create Stripe checkout session
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { email: true, stripeCustomerId: true },
    });

    const unitAmount = Math.round(course.price * 100);

    // Build checkout session options
    const checkoutParams: Stripe.Checkout.SessionCreateParams = {
      mode: "payment",
      customer_email: user?.stripeCustomerId ? undefined : (user?.email || undefined),
      customer: user?.stripeCustomerId || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: course.title,
              description: `BJJ Course by ${course.creator.name}`,
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
        courseId: course.id,
        planType: "COURSE_PURCHASE",
      },
      success_url: `${process.env.NEXTAUTH_URL}/courses/${course.id}?enrolled=true`,
      cancel_url: `${process.env.NEXTAUTH_URL}/marketplace`,
    };

    // If creator has Stripe Connect, use transfer with 15% platform fee
    if (course.creator.stripeConnectId) {
      const applicationFee = Math.round(unitAmount * 0.15);
      checkoutParams.payment_intent_data = {
        application_fee_amount: applicationFee,
        transfer_data: {
          destination: course.creator.stripeConnectId,
        },
      };
    }

    const checkoutSession = await stripe.checkout.sessions.create(checkoutParams);

    return NextResponse.json({ checkoutUrl: checkoutSession.url });
  } catch (error) {
    console.error("[ENROLL_POST]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
