import { NextResponse } from "next/server";
import { authenticateApiKey } from "@/lib/api-auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

/** GET /api/v1/techniques — fetch bookmarked techniques */
export async function GET(req: Request) {
  const auth = await authenticateApiKey(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const bookmarks = await db.techniqueBookmark.findMany({
    where: { userId: auth.userId },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ techniques: bookmarks });
}

/** POST /api/v1/techniques/log — mark a technique as drilled */
export async function POST(req: Request) {
  const auth = await authenticateApiKey(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const { techniqueId, notes } = body;

  if (!techniqueId) return NextResponse.json({ error: "techniqueId required" }, { status: 400 });

  const bookmark = await db.techniqueBookmark.upsert({
    where: { userId_techniqueId: { userId: auth.userId, techniqueId } },
    create: { userId: auth.userId, techniqueId },
    update: { updatedAt: new Date() },
  });

  return NextResponse.json({ success: true, bookmark });
}
