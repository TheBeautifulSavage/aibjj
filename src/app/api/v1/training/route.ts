import { NextResponse } from "next/server";
import { authenticateApiKey } from "@/lib/api-auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

/**
 * GET /api/v1/training
 * Returns training logs, streak, and stats for the authenticated user
 */
export async function GET(req: Request) {
  const auth = await authenticateApiKey(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized. Include Authorization: Bearer aibjj_YOUR_KEY" }, { status: 401 });

  const { userId } = auth;

  const logs = await db.trainingLog.findMany({
    where: { userId },
    orderBy: { date: "desc" },
  });

  const user = await db.user.findUnique({
    where: { id: userId },
    select: { belt: true, stripes: true, name: true },
  });

  // Calculate streak
  const dates = Array.from(new Set(logs.map((l: { date: string }) => l.date.toString().split("T")[0]))).sort().reverse();
  let streak = 0;
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  let checkDate = dates[0] === today || dates[0] === yesterday ? dates[0] : null;
  if (checkDate) {
    for (const d of dates) {
      if (d === checkDate) {
        streak++;
        const prev = new Date(new Date(checkDate).getTime() - 86400000).toISOString().split("T")[0];
        checkDate = prev;
      } else break;
    }
  }

  return NextResponse.json({
    user: { belt: user?.belt, stripes: user?.stripes, name: user?.name },
    stats: {
      totalSessions: logs.length,
      currentStreak: streak,
      thisWeek: logs.filter((l: { date: string }) => new Date(l.date) > new Date(Date.now() - 7 * 86400000)).length,
      thisMonth: logs.filter((l: { date: string }) => new Date(l.date) > new Date(Date.now() - 30 * 86400000)).length,
    },
    recentLogs: logs.slice(0, 10),
  });
}

/**
 * POST /api/v1/training
 * Log a training session
 * Body: { date?: string, duration?: number, notes?: string, techniques?: string[] }
 */
export async function POST(req: Request) {
  const auth = await authenticateApiKey(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { userId } = auth;
  const body = await req.json().catch(() => ({}));

  const date = body.date || new Date().toISOString().split("T")[0];
  const duration = body.duration || 60;
  const notes = body.notes || "";

  const log = await db.trainingLog.create({
    data: { userId, date, duration, notes },
  });

  return NextResponse.json({ success: true, log }, { status: 201 });
}
