import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { anthropic } from "@/lib/anthropic";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

/**
 * POST /api/journal/rewrite
 * Takes raw training notes and rewrites them into structured, insightful entries
 * Pro only — used as a conversion hook for free users
 */
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { subscriptionTier: true, isLifetime: true },
    });

    // Gate: Pro+ only
    const isPro = user && (["PRO", "ANNUAL"].includes(user.subscriptionTier) || user.isLifetime);
    if (!isPro) {
      return NextResponse.json(
        {
          error: "AI Journal Rewriter is a Pro feature. Upgrade to unlock.",
          upgradeUrl: "/pricing",
          feature: "journal_rewriter",
        },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { workedOn, wentWell, toImprove, notes, trainingType, duration } = body;

    if (!workedOn && !notes) {
      return NextResponse.json({ error: "No content to rewrite" }, { status: 400 });
    }

    const rawContent = [
      trainingType && `Training type: ${trainingType}`,
      duration && `Duration: ${duration} minutes`,
      workedOn && `Worked on: ${workedOn}`,
      wentWell && `What went well: ${wentWell}`,
      toImprove && `To improve: ${toImprove}`,
      notes && `Notes: ${notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    const response = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 1000,
      system: `You are an expert BJJ coach helping a student improve their training journal. 
Your job is to take their raw training notes and rewrite them into clear, structured, insightful journal entries.

Rules:
- Keep their original observations but make them more specific and actionable
- Add technical BJJ terminology where appropriate
- Structure the response as JSON with these exact fields: workedOn, wentWell, toImprove
- Each field should be 1-3 concise sentences
- Focus on the technical details that will help them improve
- Don't add fake details — only expand on what they gave you
- Keep it honest and practical, like a coach reviewing their notes`,
      messages: [
        {
          role: "user",
          content: `Please rewrite my training notes into a structured journal entry:\n\n${rawContent}\n\nReturn ONLY valid JSON with fields: workedOn, wentWell, toImprove`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";

    // Parse the JSON response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
    }

    const rewritten = JSON.parse(jsonMatch[0]);

    return NextResponse.json({ rewritten });
  } catch (error) {
    console.error("Journal rewrite error:", error);
    return NextResponse.json({ error: "Failed to rewrite journal entry" }, { status: 500 });
  }
}
