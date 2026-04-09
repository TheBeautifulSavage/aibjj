import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db as prisma } from "@/lib/db";

// GET /api/courses - List courses with filters
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const sort = searchParams.get("sort") || "popular";
    const creatorId = searchParams.get("creatorId");

    const where: Record<string, unknown> = {
      published: true,
    };

    if (category && category !== "All") {
      where.category = category;
    }

    if (creatorId) {
      where.creatorId = creatorId;
      // When filtering by creator, also show unpublished (draft) courses
      delete where.published;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { creator: { name: { contains: search, mode: "insensitive" } } },
      ];
    }

    let orderBy: Record<string, string> = {};
    switch (sort) {
      case "newest":
        orderBy = { createdAt: "desc" };
        break;
      case "price-low":
        orderBy = { price: "asc" };
        break;
      case "price-high":
        orderBy = { price: "desc" };
        break;
      case "popular":
      default:
        orderBy = { createdAt: "desc" };
        break;
    }

    const courses = await prisma.course.findMany({
      where,
      orderBy,
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            username: true,
            image: true,
            belt: true,
          },
        },
        lessons: {
          select: {
            id: true,
            title: true,
            duration: true,
            free: true,
            order: true,
          },
          orderBy: { order: "asc" },
        },
        _count: {
          select: {
            purchases: true,
            reviews: true,
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
      },
    });

    // Compute average ratings and student counts
    const coursesWithStats = courses.map((course: typeof courses[number]) => {
      const avgRating =
        course.reviews.length > 0
          ? course.reviews.reduce((sum: number, r: { rating: number }) => sum + r.rating, 0) /
            course.reviews.length
          : 0;

      return {
        ...course,
        averageRating: Math.round(avgRating * 10) / 10,
        studentCount: course._count.purchases,
        reviewCount: course._count.reviews,
        reviews: undefined as undefined,
        _count: undefined as undefined,
      };
    });

    // Sort by popularity (student count) if that was the requested sort
    if (sort === "popular") {
      coursesWithStats.sort((a: { studentCount: number }, b: { studentCount: number }) => b.studentCount - a.studentCount);
    }

    if (sort === "rating") {
      coursesWithStats.sort((a: { averageRating: number }, b: { averageRating: number }) => b.averageRating - a.averageRating);
    }

    return NextResponse.json(coursesWithStats);
  } catch (error) {
    console.error("[COURSES_GET]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/courses - Create a new course (creator only)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id?: string }).id;
    const userRole = (session.user as { role?: string }).role;

    if (!userId || userRole !== "CREATOR") {
      return NextResponse.json(
        { error: "Only creators can create courses" },
        { status: 403 }
      );
    }

    // Check Stripe Connect status before allowing course creation
    const creator = await prisma.user.findUnique({
      where: { id: userId },
      select: { stripeConnectId: true, stripeConnectStatus: true },
    });

    if (!creator?.stripeConnectId || creator.stripeConnectStatus !== "active") {
      return NextResponse.json(
        { error: "You must connect your bank account before publishing courses. Go to Creator Dashboard to set up payouts." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { title, description, price, category, beltLevel, coverImage, lessons, published } = body;

    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return NextResponse.json(
        { error: "Course title is required" },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      + "-" + Date.now().toString(36);

    const course = await prisma.course.create({
      data: {
        creatorId: userId,
        title: title.trim(),
        slug,
        description: description?.trim() || null,
        price: typeof price === "number" ? price : 0,
        category: category || null,
        beltLevel: beltLevel || null,
        coverImage: coverImage || null,
        published: published ?? false,
        lessons: lessons?.length
          ? {
              create: lessons.map(
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
                  title: lesson.title,
                  description: lesson.description || null,
                  videoUrl: lesson.videoUrl || null,
                  duration: lesson.duration || null,
                  order: lesson.order ?? index,
                  free: lesson.free ?? false,
                })
              ),
            }
          : undefined,
      },
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

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error("[COURSES_POST]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
