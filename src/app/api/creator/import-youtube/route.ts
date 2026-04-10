import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  let body: { youtubeUrl?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { youtubeUrl } = body;

  if (!youtubeUrl || typeof youtubeUrl !== "string") {
    return NextResponse.json({ error: "YouTube URL is required" }, { status: 400 });
  }

  // Validate it looks like a YouTube URL
  const isYouTube =
    youtubeUrl.includes("youtube.com") || youtubeUrl.includes("youtu.be");

  if (!isYouTube) {
    return NextResponse.json(
      { error: "Please provide a valid YouTube URL" },
      { status: 400 }
    );
  }

  try {
    // Store as a pending course with a placeholder slug
    const slug = `yt-import-${userId.slice(0, 8)}-${Date.now().toString(36)}`;

    const course = await db.course.create({
      data: {
        creatorId: userId,
        title: `YouTube Import — Pending (${new Date().toLocaleDateString()})`,
        slug,
        description: `Imported from YouTube: ${youtubeUrl}`,
        price: 0,
        published: false,
        // Store URL in description for now until manual processing
      },
    });

    return NextResponse.json({
      courseId: course.id,
      message: "YouTube import queued. We'll process your content within 24 hours.",
      youtubeUrl,
    });
  } catch (err) {
    console.error("import-youtube error:", err);
    return NextResponse.json(
      { error: "Failed to queue YouTube import. Please try again." },
      { status: 500 }
    );
  }
}
