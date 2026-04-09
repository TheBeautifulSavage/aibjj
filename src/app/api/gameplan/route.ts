import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db as prisma } from "@/lib/db";
import { anthropic } from "@/lib/anthropic";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;

    const gamePlans = await prisma.gamePlan.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(gamePlans);
  } catch (error) {
    console.error("Error fetching game plans:", error);
    return NextResponse.json(
      { error: "Failed to fetch game plans" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const body = await request.json();
    const { belt, weight, bodyType, style, focus } = body;

    if (!belt || !bodyType || !style) {
      return NextResponse.json(
        { error: "Belt, body type, and style are required" },
        { status: 400 }
      );
    }

    const prompt = `Create a detailed, personalized BJJ game plan for a practitioner with the following profile:

- Belt Level: ${belt}
- Weight: ${weight ? weight + " lbs" : "Not specified"}
- Body Type: ${bodyType}
- Preferred Style: ${style}
${focus ? `- Specific Focus Area: ${focus}` : ""}

Generate a comprehensive game plan organized into exactly these 5 sections. For each section, provide 4-6 specific, actionable techniques or strategies as bullet points. Each bullet should have a technique name followed by a brief tactical note.

Return the response as valid JSON with this exact structure:
{
  "name": "A short descriptive name for this game plan (e.g. 'Lanky Guard Player Blueprint')",
  "description": "A 1-2 sentence overview of the game plan philosophy",
  "standingGame": ["technique/strategy: tactical note", ...],
  "topGame": ["technique/strategy: tactical note", ...],
  "bottomGame": ["technique/strategy: tactical note", ...],
  "submissions": ["technique/strategy: tactical note", ...],
  "escapes": ["technique/strategy: tactical note", ...]
}

Make sure techniques are appropriate for the ${belt} belt level. Tailor recommendations to the ${bodyType} body type and ${style} style preference. Be specific with technique names - use real BJJ terminology.`;

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2048,
      system:
        "You are an expert BJJ black belt coach creating personalized game plans. You have deep knowledge of all positions, techniques, and strategies. Always respond with valid JSON only, no markdown formatting or code blocks. Tailor your recommendations to the practitioner's body type, belt level, and style preferences.",
      messages: [{ role: "user", content: prompt }],
    });

    const aiText =
      response.content[0].type === "text" ? response.content[0].text : "";

    let planData;
    try {
      // Strip any markdown code block formatting if present
      const cleaned = aiText.replace(/```json?\s*/g, "").replace(/```\s*/g, "").trim();
      planData = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse AI response:", aiText);
      return NextResponse.json(
        { error: "Failed to parse AI response" },
        { status: 500 }
      );
    }

    const gamePlan = await prisma.gamePlan.create({
      data: {
        userId,
        name: planData.name || `${style} Game Plan`,
        description: planData.description || null,
        standingGame: JSON.stringify(planData.standingGame),
        topGame: JSON.stringify(planData.topGame),
        bottomGame: JSON.stringify(planData.bottomGame),
        submissions: JSON.stringify(planData.submissions),
        escapes: JSON.stringify(planData.escapes),
        gameplanData: JSON.stringify(planData),
      },
    });

    return NextResponse.json({
      ...gamePlan,
      standingGame: planData.standingGame,
      topGame: planData.topGame,
      bottomGame: planData.bottomGame,
      submissions: planData.submissions,
      escapes: planData.escapes,
    });
  } catch (error) {
    console.error("Error generating game plan:", error);
    return NextResponse.json(
      { error: "Failed to generate game plan" },
      { status: 500 }
    );
  }
}
