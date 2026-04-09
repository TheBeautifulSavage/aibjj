import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db as prisma } from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const queue = await prisma.blogQueue.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ queue });
  } catch (error) {
    console.error("Blog queue GET error:", error);
    return NextResponse.json({ error: "Failed to fetch queue" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const { topics, frequency } = await req.json();

    if (!topics || !Array.isArray(topics) || topics.length === 0) {
      return NextResponse.json({ error: "Topics array is required" }, { status: 400 });
    }

    // Upsert: delete old queue, create new one
    await prisma.blogQueue.deleteMany({ where: { userId } });

    const queue = await prisma.blogQueue.create({
      data: {
        userId,
        topics: JSON.stringify(topics),
        frequency: frequency || "daily",
        active: true,
      },
    });

    return NextResponse.json({ queue }, { status: 201 });
  } catch (error) {
    console.error("Blog queue POST error:", error);
    return NextResponse.json({ error: "Failed to save queue" }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    await prisma.blogQueue.deleteMany({ where: { userId } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Blog queue DELETE error:", error);
    return NextResponse.json({ error: "Failed to delete queue" }, { status: 500 });
  }
}
