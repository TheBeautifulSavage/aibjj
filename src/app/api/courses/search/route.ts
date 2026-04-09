import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/courses/search?q=&category=&beltLevel=&sort=&featured=true
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";
    const category = searchParams.get("category") || "";
    const beltLevel = searchParams.get("beltLevel") || "";
    const sort = searchParams.get("sort") || "popular";
    const featuredOnly = searchParams.get("featured") === "true";

    const where: Record<string, unknown> = { published: true };

    if (category && category !== "All") {
      where.category = category;
    }

    if (beltLevel && beltLevel !== "All") {
      where.beltLevel = beltLevel;
    }

    if (featuredOnly) {
      where.featured = true;
    }

    if (q.trim()) {
      where.OR = [
        { title: { contains: q.trim(), mode: "insensitive" } },
        { description: { contains: q.trim(), mode: "insensitive" } },
        { creator: { name: { contains: q.trim(), mode: "insensitive" } } },
      ];
    }

    let orderBy: Record<string, string> = { createdAt: "desc" };
    if (sort === "newest") orderBy = { createdAt: "desc" };
    else if (sort === "price-low") orderBy = { price: "asc" };
    else if (sort === "price-high") orderBy = { price: "desc" };

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
            bio: true,
            socialInstagram: true,
            socialYoutube: true,
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
          select: { purchases: true, reviews: true },
        },
        reviews: {
          select: { rating: true },
        },
      },
    });

    const coursesWithStats = courses.map((course) => {
      const avgRating =
        course.reviews.length > 0
          ? course.reviews.reduce((sum, r) => sum + r.rating, 0) / course.reviews.length
          : 0;
      const isNew =
        new Date(course.createdAt).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000;

      return {
        ...course,
        averageRating: Math.round(avgRating * 10) / 10,
        studentCount: course._count.purchases,
        reviewCount: course._count.reviews,
        isNew,
        reviews: undefined,
        _count: undefined,
      };
    });

    if (sort === "popular") {
      coursesWithStats.sort((a, b) => b.studentCount - a.studentCount);
    } else if (sort === "highest-rated") {
      coursesWithStats.sort((a, b) => b.averageRating - a.averageRating);
    } else if (sort === "most-students") {
      coursesWithStats.sort((a, b) => b.studentCount - a.studentCount);
    }

    return NextResponse.json(coursesWithStats);
  } catch (error) {
    console.error("[COURSES_SEARCH]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
