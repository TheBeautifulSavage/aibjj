import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db as prisma } from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || !(session.user as { id?: string }).id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const sixtyDaysAgo = new Date(today);
    sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const [
      journalCount,
      techniqueCount,
      chatSessionCount,
      courseCount,
      recentJournals,
      streakEntries,
      trainingEntries,
    ] = await Promise.all([
      prisma.journalEntry.count({ where: { userId } }),
      prisma.technique.count(),
      prisma.chatSession.count({ where: { userId } }),
      prisma.purchase.count({ where: { userId } }),
      prisma.journalEntry.findMany({
        where: { userId },
        select: { id: true, date: true, trainingType: true, duration: true, workedOn: true, wentWell: true },
        orderBy: { date: "desc" },
        take: 5,
      }),
      prisma.journalEntry.findMany({
        where: { userId, date: { gte: sixtyDaysAgo } },
        select: { date: true },
        orderBy: { date: "desc" },
      }),
      prisma.journalEntry.findMany({
        where: { userId, date: { gte: thirtyDaysAgo } },
        select: { date: true, duration: true },
        orderBy: { date: "asc" },
      }),
    ]);

    // Calculate streak: consecutive days with at least one entry ending today (or yesterday)
    const entryDateSet = new Set<string>();
    for (const entry of streakEntries) {
      const d = new Date(entry.date);
      entryDateSet.add(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
    }

    let streak = 0;
    const cursor = new Date(today);
    const todayKey = `${cursor.getFullYear()}-${cursor.getMonth()}-${cursor.getDate()}`;

    // If no entry today, start from yesterday
    if (!entryDateSet.has(todayKey)) {
      cursor.setDate(cursor.getDate() - 1);
    }

    while (true) {
      const key = `${cursor.getFullYear()}-${cursor.getMonth()}-${cursor.getDate()}`;
      if (entryDateSet.has(key)) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        break;
      }
    }

    // Build trainingData: group by date and sum durations
    const trainingMap = new Map<string, number>();
    for (const entry of trainingEntries) {
      const d = new Date(entry.date);
      const dateStr = d.toISOString().split("T")[0];
      trainingMap.set(dateStr, (trainingMap.get(dateStr) || 0) + entry.duration);
    }

    const trainingData = Array.from(trainingMap.entries()).map(([date, duration]) => ({
      date,
      duration,
    }));

    return NextResponse.json({
      journalCount,
      techniqueCount,
      chatSessionCount,
      courseCount,
      streak,
      recentJournals,
      trainingData,
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json({ error: "Failed to fetch dashboard stats" }, { status: 500 });
  }
}
