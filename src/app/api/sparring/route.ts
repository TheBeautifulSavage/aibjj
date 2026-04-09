import { NextResponse } from "next/server";
import { anthropic } from "@/lib/anthropic";

const SPARRING_SYSTEM_PROMPT = `You are a BJJ black belt sparring partner AI. Ask scenario-based questions about BJJ technique, respond to answers with detailed feedback, corrections, and follow-up questions. Keep responses focused and under 150 words. Start each session with a specific scenario.`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message && (!history || history.length === 0)) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const messages = [
      ...(history || []),
      ...(message ? [{ role: "user" as const, content: message }] : []),
    ];

    // If starting fresh (no history and no message), generate initial scenario
    if (messages.length === 0) {
      messages.push({
        role: "user" as const,
        content: "Start a new BJJ scenario for me.",
      });
    }

    const response = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 300,
      system: SPARRING_SYSTEM_PROMPT,
      messages,
    });

    const reply =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Sparring API error:", error);
    return NextResponse.json({ error: "Failed to get response" }, { status: 500 });
  }
}
