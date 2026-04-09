import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const academies = await prisma.user.findMany({
    where: {
      role: "CREATOR",
      academyName: { not: null },
    },
    select: {
      username: true,
      name: true,
      academyName: true,
      profilePhoto: true,
      academyLogo: true,
      bio: true,
      belt: true,
      verified: true,
      socialInstagram: true,
      socialYoutube: true,
      _count: {
        select: { courses: true },
      },
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json({ academies });
}
