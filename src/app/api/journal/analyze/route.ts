import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db as prisma } from "@/lib/db";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(_request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;

    // Get last 10 journal entries
    const entries = await prisma.journalEntry.findMany({
      where: { userId },
      orderBy: { date: "desc" },
      take: 10,
    });

    if (entries.length === 0) {
      return NextResponse.json({
        analysis: "No training sessions logged yet. Start logging your sessions to get AI analysis!",
      });
    }

    const entriesText = entries
      .map(
        (e) =>
          `Date: ${new Date(e.date).toLocaleDateString()}
Type: ${e.trainingType} | Duration: ${e.duration} min | Energy: ${e.energyLevel}/5 | Rating: ${e.rating}/5
Worked on: ${e.workedOn || "N/A"}
Went well: ${e.wentWell || "N/A"}
To improve: ${e.toImprove || "N/A"}
${e.injuryNotes ? `Injuries: ${e.injuryNotes}` : ""}`
      )
      .join("\n\n---\n\n");

    const response = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 1024,
      system:
        "You are a BJJ coach analyzing training logs. Identify patterns, strengths, areas to improve, and give 3 specific recommendations. Be concise, direct, and actionable. Format with clear sections.",
      messages: [
        {
          role: "user",
          content: `Analyze my last ${entries.length} BJJ training sessions:\n\n${entriesText}`,
        },
      ],
    });

    const analysis =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error("[JOURNAL_ANALYZE]", error);
    return NextResponse.json({ error: "Failed to analyze training" }, { status: 500 });
  }
}
