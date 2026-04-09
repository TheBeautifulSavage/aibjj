import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db as prisma } from "@/lib/db";

// GET /api/courses/[courseId]/reviews
export async function GET(
  _request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const reviews = await prisma.review.findMany({
      where: { courseId: params.courseId },
      include: {
        user: {
          select: { id: true, name: true, image: true, belt: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(reviews);
  } catch (error) {
    console.error("[REVIEWS_GET]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST /api/courses/[courseId]/reviews
export async function POST(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const { rating, comment } = await request.json();

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be 1-5" }, { status: 400 });
    }

    // Check if user has purchased or is creator
    const course = await prisma.course.findUnique({
      where: { id: params.courseId },
      select: { creatorId: true },
    });

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    if (course.creatorId === userId) {
      return NextResponse.json({ error: "Creators cannot review their own courses" }, { status: 403 });
    }

    const purchase = await prisma.purchase.findUnique({
      where: { userId_courseId: { userId, courseId: params.courseId } },
    });

    if (!purchase) {
      return NextResponse.json({ error: "You must purchase this course to leave a review" }, { status: 403 });
    }

    const review = await prisma.review.upsert({
      where: { userId_courseId: { userId, courseId: params.courseId } },
      create: {
        userId,
        courseId: params.courseId,
        rating,
        comment: comment || null,
      },
      update: {
        rating,
        comment: comment || null,
      },
      include: {
        user: {
          select: { id: true, name: true, image: true, belt: true },
        },
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("[REVIEWS_POST]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
