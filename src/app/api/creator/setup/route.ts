import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const {
    username,
    templateId,
    academyName,
    bio,
    belt,
    socialInstagram,
    socialYoutube,
    socialTwitter,
  } = body;

  if (!username || username.length < 3) {
    return NextResponse.json({ error: "Invalid username" }, { status: 400 });
  }

  // Check if username is already taken by another user
  const existing = await prisma.user.findUnique({
    where: { username },
    select: { id: true, email: true },
  });

  if (existing && existing.email !== session.user.email) {
    return NextResponse.json({ error: "Username taken" }, { status: 409 });
  }

  // Update user profile
  const updatedUser = await prisma.user.update({
    where: { email: session.user.email },
    data: {
      username,
      templateId: templateId || "DARK_PRO",
      academyName: academyName || null,
      bio: bio || null,
      belt: belt || undefined,
      socialInstagram: socialInstagram || null,
      socialYoutube: socialYoutube || null,
      socialTwitter: socialTwitter || null,
      role: "CREATOR",
    },
  });

  return NextResponse.json({
    success: true,
    username: updatedUser.username,
    url: `https://${updatedUser.username}.aibjj.com`,
  });
}
