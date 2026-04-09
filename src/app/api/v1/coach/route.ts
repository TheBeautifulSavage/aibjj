import { NextResponse } from "next/server";
import { authenticateApiKey } from "@/lib/api-auth";
import { anthropic, BJJ_SYSTEM_PROMPT } from "@/lib/anthropic";

export const dynamic = "force-dynamic";

/**
 * POST /api/v1/coach
 * Send a message to the AIBJJ coach from any external LLM or app
 * Body: { message: string, history?: {role: "user"|"assistant", content: string}[] }
 * Returns: { reply: string }
 */
export async function POST(req: Request) {
  const auth = await authenticateApiKey(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const { message, history = [] } = body;

  if (!message) return NextResponse.json({ error: "message is required" }, { status: 400 });

  const messages = [
    ...history.slice(-20),
    { role: "user" as const, content: message },
  ];

  const response = await anthropic.messages.create({
    model: "claude-3-5-haiku-20241022",
    max_tokens: 1024,
    system: BJJ_SYSTEM_PROMPT,
    messages,
  });

  const reply = response.content[0].type === "text" ? response.content[0].text : "";

  return NextResponse.json({ reply });
}
