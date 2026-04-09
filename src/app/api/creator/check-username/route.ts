import { NextRequest, NextResponse } from "next/server";
import { db as prisma } from "@/lib/db";
import { BJJ_FANATICS_CREATORS } from "@/lib/bjj-fanatics-creators";

const RESERVED = new Set([
  "www", "app", "api", "admin", "mail", "smtp", "support", "help",
  "blog", "docs", "status", "billing", "settings", "dashboard",
]);

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username")?.toLowerCase();

  if (!username || username.length < 3) {
    return NextResponse.json({ available: false, reason: "Too short" });
  }

  if (RESERVED.has(username)) {
    return NextResponse.json({ available: false, reason: "Reserved" });
  }

  // Check if a prebuilt creator has this username (still available for claiming)
  const prebuilt = BJJ_FANATICS_CREATORS.find((c) => c.username === username);

  // Check DB
  const existing = await prisma.user.findUnique({
    where: { username },
    select: { id: true },
  });

  if (existing) {
    return NextResponse.json({ available: false, reason: "Taken" });
  }

  // If prebuilt but not claimed in DB, it's available for the real person to claim
  return NextResponse.json({
    available: true,
    prebuilt: !!prebuilt,
  });
}
