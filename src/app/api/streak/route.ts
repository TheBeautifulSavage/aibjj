import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

function calcStreak(dates: string[]): { streak: number; longestStreak: number } {
  if (dates.length === 0) return { streak: 0, longestStreak: 0 };

  // Sort descending
  const sorted = [...dates].sort((a, b) => (a > b ? -1 : 1));
  const unique = Array.from(new Set(sorted));

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  // Current streak
  let streak = 0;
  let checkDate = unique[0] === today || unique[0] === yesterday ? unique[0] : null;

  if (checkDate) {
    for (const d of unique) {
      if (d === checkDate) {
        streak++;
        const prev = new Date(checkDate);
        prev.setDate(prev.getDate() - 1);
        checkDate = prev.toISOString().split("T")[0];
      } else {
        break;
      }
    }
  }

  // Longest streak
  let longest = 0;
  let current = 1;
  for (let i = 0; i < unique.length - 1; i++) {
    const d1 = new Date(unique[i]);
    const d2 = new Date(unique[i + 1]);
    const diff = Math.round((d1.getTime() - d2.getTime()) / 86400000);
    if (diff === 1) {
      current++;
      longest = Math.max(longest, current);
    } else {
      current = 1;
    }
  }
  longest = Math.max(longest, current, streak);

  return { streak, longestStreak: longest };
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = (session.user as { id: string }).id;

    const logs = await db.trainingLog.findMany({
      where: { userId },
      orderBy: { date: "desc" },
    });

    const totalSessions = logs.length;
    const lastTraining = logs[0]?.date ? new Date(logs[0].date).toISOString().split("T")[0] : "";
    const dates = logs.map((l: { date: string | Date }) => new Date(l.date).toISOString().split("T")[0]);
    const { streak, longestStreak } = calcStreak(dates);

    return NextResponse.json({ streak, lastTraining, totalSessions, longestStreak });
  } catch (error) {
    console.error("Streak GET error:", error);
    return NextResponse.json({ error: "Failed to fetch streak" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = (session.user as { id: string }).id;

    const body = await req.json().catch(() => ({}));
    const dateStr = body.date || new Date().toISOString().split("T")[0];
    const date = new Date(dateStr);

    // Check if already logged today
    const startOfDay = new Date(dateStr);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(dateStr);
    endOfDay.setHours(23, 59, 59, 999);

    const existing = await db.trainingLog.findFirst({
      where: {
        userId,
        date: { gte: startOfDay.toISOString(), lte: endOfDay.toISOString() },
      },
    });

    if (existing) {
      return NextResponse.json({ message: "Already logged today", alreadyLogged: true });
    }

    await db.trainingLog.create({
      data: {
        userId,
        date: date.toISOString(),
        trainingType: "General",
        duration: 60,
        notes: "Logged via streak tracker",
      },
    });

    return NextResponse.json({ message: "Training logged!", alreadyLogged: false });
  } catch (error) {
    console.error("Streak POST error:", error);
    return NextResponse.json({ error: "Failed to log training" }, { status: 500 });
  }
}
