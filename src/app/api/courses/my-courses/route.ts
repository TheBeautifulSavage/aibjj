import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id?: string }).id;
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get purchased courses
    const purchases = await prisma.purchase.findMany({
      where: { userId },
      select: { courseId: true },
    });
    const purchasedIds = purchases.map((p) => p.courseId);

    // Get created courses
    const createdCourses = await prisma.course.findMany({
      where: { creatorId: userId },
      include: {
        creator: { select: { id: true, name: true } },
        lessons: { select: { id: true } },
      },
    });

    // Get purchased courses
    const purchasedCourses = purchasedIds.length
      ? await prisma.course.findMany({
          where: { id: { in: purchasedIds } },
          include: {
            creator: { select: { id: true, name: true } },
            lessons: { select: { id: true } },
          },
        })
      : [];

    // Get progress for all courses
    const allCourseIds = [
      ...createdCourses.map((c) => c.id),
      ...purchasedCourses.map((c) => c.id),
    ];

    const progressRecords = await prisma.lessonProgress.findMany({
      where: { userId, courseId: { in: allCourseIds }, completed: true },
      select: { courseId: true, lessonId: true },
    });

    const progressMap: Record<string, number> = {};
    progressRecords.forEach((p) => {
      progressMap[p.courseId] = (progressMap[p.courseId] || 0) + 1;
    });

    const result = [
      ...purchasedCourses.map((c) => ({
        id: c.id,
        title: c.title,
        coverImage: c.coverImage,
        category: c.category,
        beltLevel: c.beltLevel,
        creator: c.creator,
        lessons: c.lessons,
        completedLessons: progressMap[c.id] || 0,
        totalLessons: c.lessons.length,
        isOwned: false,
      })),
      ...createdCourses.map((c) => ({
        id: c.id,
        title: c.title,
        coverImage: c.coverImage,
        category: c.category,
        beltLevel: c.beltLevel,
        creator: c.creator,
        lessons: c.lessons,
        completedLessons: progressMap[c.id] || 0,
        totalLessons: c.lessons.length,
        isOwned: true,
      })),
    ];

    return NextResponse.json(result);
  } catch (error) {
    console.error("[MY_COURSES_GET]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
