import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function GET(_request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;

    // Get last 3 journal entries and game plan
    const [entries, gamePlan] = await Promise.all([
      prisma.journalEntry.findMany({
        where: { userId },
        orderBy: { date: "desc" },
        take: 3,
      }),
      prisma.gamePlan.findFirst({
        where: { userId },
        orderBy: { updatedAt: "desc" },
      }),
    ]);

    const entriesText =
      entries.length > 0
        ? entries
            .map(
              (e) =>
                `${new Date(e.date).toLocaleDateString()} - ${e.trainingType} (${e.duration}min): Worked on: ${e.workedOn || "general training"}. To improve: ${e.toImprove || "N/A"}`
            )
            .join("\n")
        : "No recent sessions logged.";

    const gamePlanText = gamePlan
      ? `Game Plan: Top game: ${gamePlan.topGame || "N/A"} | Bottom game: ${gamePlan.bottomGame || "N/A"} | Submissions: ${gamePlan.submissions || "N/A"}`
      : "No game plan set.";

    const response = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 400,
      system:
        "You are a BJJ coach giving a short daily training focus. Based on recent training and game plan, give exactly 3-5 bullet points for today's training focus. Each bullet should be specific and actionable. Format as bullet points starting with •. Be concise.",
      messages: [
        {
          role: "user",
          content: `Recent training:\n${entriesText}\n\n${gamePlanText}\n\nWhat should I focus on today?`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    // Parse bullets
    const bullets = text
      .split("\n")
      .filter((line) => line.trim().startsWith("•") || line.trim().startsWith("-") || line.trim().match(/^\d+\./))
      .map((line) => line.replace(/^[•\-\d\.]+\s*/, "").trim())
      .filter((line) => line.length > 0)
      .slice(0, 5);

    return NextResponse.json({
      bullets: bullets.length > 0 ? bullets : [text.trim()],
    });
  } catch (error) {
    console.error("[DASHBOARD_SUGGESTION]", error);
    return NextResponse.json({
      bullets: [
        "Drill your A-game sweeps from closed guard",
        "Focus on hip escapes and defensive guard recovery",
        "Work on finishing submissions — don't settle for position",
      ],
    });
  }
}
