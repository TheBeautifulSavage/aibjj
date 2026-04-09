import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      journalEntries: {
        orderBy: { date: "desc" },
        take: 100,
      },
      competitions: {
        orderBy: { date: "desc" },
      },
    },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const totalSessions = user.journalEntries.length;
  const totalMinutes = user.journalEntries.reduce((s, e) => s + e.duration, 0);
  const totalHours = Math.round(totalMinutes / 60);

  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const recentSessions = user.journalEntries.filter(
    (e) => new Date(e.date) >= thirtyDaysAgo
  ).length;

  const compRecord = user.competitions.reduce(
    (acc, c) => {
      acc.wins += c.wins;
      acc.losses += c.losses;
      acc.total++;
      return acc;
    },
    { wins: 0, losses: 0, total: 0 }
  );

  const body = await req.json().catch(() => ({}));
  const { belt, stripes, monthsAtBelt } = body;

  const prompt = `You are an expert BJJ coach. Write a personalized progress report for a student with the following stats:

Belt: ${belt || user.belt} (${stripes || user.stripes} stripes)
Months at current belt: ${monthsAtBelt || "unknown"}
Total training sessions logged: ${totalSessions}
Total training hours: ${totalHours}
Sessions in last 30 days: ${recentSessions}
Competition record: ${compRecord.total} competitions, ${compRecord.wins} wins, ${compRecord.losses} losses

Write a 3-4 paragraph progress report in a direct, coach-to-student style. Include:
1. Overall assessment of their training commitment
2. What the stats suggest about their progress
3. Specific recommendations for improvement
4. Belt promotion timeline estimate if applicable

Be honest but encouraging. Use "you" directly. Keep it under 400 words.`;

  try {
    const response = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 600,
      messages: [{ role: "user", content: prompt }],
    });

    const report = (response.content[0] as { text: string }).text;
    return NextResponse.json({ report });
  } catch (error) {
    console.error("AI progress report error:", error);
    return NextResponse.json(
      { error: "Failed to generate report" },
      { status: 500 }
    );
  }
}
