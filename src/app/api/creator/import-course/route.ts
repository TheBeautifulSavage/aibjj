import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  let body: {
    title?: string;
    description?: string;
    coverImage?: string;
    price?: number | string;
    category?: string;
    lessons?: string[];
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { title, description, coverImage, price, category, lessons } = body;

  if (!title || typeof title !== "string" || title.trim().length === 0) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const parsedPrice = parseFloat(String(price ?? 0));
  const safePrice = isNaN(parsedPrice) ? 0 : Math.max(0, parsedPrice);

  // Build a unique slug
  const baseSlug = slugify(title.trim());
  const uniqueSuffix = Date.now().toString(36);
  const slug = `${baseSlug}-${uniqueSuffix}`;

  try {
    // Create the course
    const course = await db.course.create({
      data: {
        creatorId: userId,
        title: title.trim(),
        slug,
        description: description ?? null,
        coverImage: coverImage ?? null,
        price: safePrice,
        category: category ?? null,
        published: false,
      },
    });

    // Create lessons if provided
    if (Array.isArray(lessons) && lessons.length > 0) {
      const lessonData = lessons
        .map((t, i) => (typeof t === "string" && t.trim() ? {
          courseId: course.id,
          title: t.trim(),
          order: i,
        } : null))
        .filter(Boolean) as { courseId: string; title: string; order: number }[];

      if (lessonData.length > 0) {
        await db.lesson.createMany({ data: lessonData });
      }
    }

    const courseUrl = `/courses/${slug}`;

    return NextResponse.json({
      courseId: course.id,
      courseUrl,
      slug,
      message: "Course imported successfully",
    });
  } catch (err) {
    console.error("import-course error:", err);
    return NextResponse.json(
      { error: "Failed to create course. Please try again." },
      { status: 500 }
    );
  }
}
