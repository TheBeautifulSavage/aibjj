import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db as prisma } from "@/lib/db";

// GET /api/courses/[courseId] - Get single course with lessons and reviews
export async function GET(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: params.courseId },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            username: true,
            image: true,
            belt: true,
            bio: true,
          },
        },
        lessons: {
          orderBy: { order: "asc" },
          select: {
            id: true,
            title: true,
            description: true,
            duration: true,
            order: true,
            free: true,
            // Only include videoUrl for free lessons (protect paid content)
            videoUrl: true,
          },
        },
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
                belt: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
        },
        _count: {
          select: {
            purchases: true,
            reviews: true,
          },
        },
      },
    });

    if (!course) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    // Compute average rating
    const avgRating =
      course.reviews.length > 0
        ? course.reviews.reduce((sum: number, r: { rating: number }) => sum + r.rating, 0) /
          course.reviews.length
        : 0;

    // Strip videoUrl from paid lessons for non-purchasers
    const session = await getServerSession(authOptions);
    const userId = (session?.user as { id?: string })?.id;

    let hasPurchased = false;
    const isCreator = userId === course.creatorId;

    if (userId && !isCreator) {
      const purchase = await prisma.purchase.findUnique({
        where: {
          userId_courseId: {
            userId,
            courseId: course.id,
          },
        },
      });
      hasPurchased = !!purchase;
    }

    // Protect video URLs for non-purchasers
    const lessons = course.lessons.map((lesson: typeof course.lessons[number]) => ({
      ...lesson,
      videoUrl:
        lesson.free || hasPurchased || isCreator ? lesson.videoUrl : null,
    }));

    return NextResponse.json({
      ...course,
      lessons,
      averageRating: Math.round(avgRating * 10) / 10,
      studentCount: course._count.purchases,
      reviewCount: course._count.reviews,
      hasPurchased,
      isCreator,
      _count: undefined,
    });
  } catch (error) {
    console.error("[COURSE_GET]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/courses/[courseId] - Update course (creator only)
export async function PUT(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id?: string }).id;

    // Verify ownership
    const existingCourse = await prisma.course.findUnique({
      where: { id: params.courseId },
      select: { creatorId: true },
    });

    if (!existingCourse) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    if (existingCourse.creatorId !== userId) {
      return NextResponse.json(
        { error: "You can only edit your own courses" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { title, description, price, category, beltLevel, coverImage, published, lessons } = body;

    // Build update data
    const updateData: Record<string, unknown> = {};
    if (title !== undefined) updateData.title = title.trim();
    if (description !== undefined) updateData.description = description?.trim() || null;
    if (price !== undefined) updateData.price = typeof price === "number" ? price : 0;
    if (category !== undefined) updateData.category = category || null;
    if (beltLevel !== undefined) updateData.beltLevel = beltLevel || null;
    if (coverImage !== undefined) updateData.coverImage = coverImage || null;
    if (published !== undefined) updateData.published = published;

    // If lessons are provided, replace them
    if (lessons !== undefined && Array.isArray(lessons)) {
      // Delete existing lessons and recreate
      await prisma.lesson.deleteMany({
        where: { courseId: params.courseId },
      });

      if (lessons.length > 0) {
        await prisma.lesson.createMany({
          data: lessons.map(
            (
              lesson: {
                title: string;
                description?: string;
                videoUrl?: string;
                duration?: number;
                order?: number;
                free?: boolean;
              },
              index: number
            ) => ({
              courseId: params.courseId,
              title: lesson.title,
              description: lesson.description || null,
              videoUrl: lesson.videoUrl || null,
              duration: lesson.duration || null,
              order: lesson.order ?? index,
              free: lesson.free ?? false,
            })
          ),
        });
      }
    }

    const updatedCourse = await prisma.course.update({
      where: { id: params.courseId },
      data: updateData,
      include: {
        lessons: {
          orderBy: { order: "asc" },
        },
        creator: {
          select: {
            id: true,
            name: true,
            username: true,
          },
        },
      },
    });

    return NextResponse.json(updatedCourse);
  } catch (error) {
    console.error("[COURSE_PUT]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/courses/[courseId] - Delete course (creator only)
export async function DELETE(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id?: string }).id;

    // Verify ownership
    const existingCourse = await prisma.course.findUnique({
      where: { id: params.courseId },
      select: { creatorId: true },
    });

    if (!existingCourse) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    if (existingCourse.creatorId !== userId) {
      return NextResponse.json(
        { error: "You can only delete your own courses" },
        { status: 403 }
      );
    }

    // Delete course (cascades to lessons, purchases, reviews via schema)
    await prisma.course.delete({
      where: { id: params.courseId },
    });

    return NextResponse.json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("[COURSE_DELETE]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
