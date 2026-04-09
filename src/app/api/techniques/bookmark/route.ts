import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db as prisma } from "@/lib/db";
import { authOptions } from "@/lib/auth";

async function getUserId() {
  const session = await getServerSession(authOptions);
  if (!session?.user || !(session.user as { id?: string }).id) return null;
  return (session.user as { id: string }).id;
}

export async function GET() {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const bookmarks = await prisma.techniqueBookmark.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(bookmarks);
  } catch (error) {
    console.error("Bookmark GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookmarks" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { techniqueId } = await req.json();
    if (!techniqueId) {
      return NextResponse.json(
        { error: "techniqueId is required" },
        { status: 400 }
      );
    }

    const bookmark = await prisma.techniqueBookmark.create({
      data: { userId, techniqueId },
    });

    return NextResponse.json(bookmark, { status: 201 });
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      error.message.includes("Unique constraint")
    ) {
      return NextResponse.json(
        { error: "Already bookmarked" },
        { status: 409 }
      );
    }
    console.error("Bookmark POST error:", error);
    return NextResponse.json(
      { error: "Failed to create bookmark" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const techniqueId = searchParams.get("techniqueId");

    if (!techniqueId) {
      return NextResponse.json(
        { error: "techniqueId is required" },
        { status: 400 }
      );
    }

    await prisma.techniqueBookmark.deleteMany({
      where: { userId, techniqueId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Bookmark DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to remove bookmark" },
      { status: 500 }
    );
  }
}
