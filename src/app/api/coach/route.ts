import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { anthropic, BJJ_SYSTEM_PROMPT } from "@/lib/anthropic";

// Best model for real-time BJJ coaching chat:
// claude-3-5-haiku-20241022 — fast (<1s), cheap, excellent conversational quality
// Use claude-sonnet-4-5 for deep analysis (game plan builder, progress reports)
const COACH_MODEL = "claude-3-5-haiku-20241022";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const { message, chatSessionId } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Enforce subscription limits: FREE users get 5 messages/month
    const user = await db.user.findUnique({ where: { id: userId }, select: { subscriptionTier: true } });

    if (user?.subscriptionTier === "FREE") {
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);

      const allMessages = await db.chatMessage.findMany({
        where: { userId, role: "user" },
      });
      const monthCount = allMessages.filter(
        (m: { createdAt: string }) => new Date(m.createdAt) >= startOfMonth
      ).length;

      if (monthCount >= 5) {
        return NextResponse.json(
          { error: "You've used your 5 free AI messages this month. Upgrade to Pro for unlimited coaching.", upgradeUrl: "/pricing" },
          { status: 429 }
        );
      }
    }

    // Get or create chat session
    let sessionId = chatSessionId;

    if (!sessionId) {
      const title = message.length > 50 ? message.substring(0, 50) + "..." : message;
      const chatSession = await db.chatSession.create({
        data: { userId, title },
      });
      sessionId = chatSession.id;
    }

    // Verify session belongs to user
    const chatSession = await db.chatSession.findFirst({
      where: { id: sessionId, userId },
    });

    if (!chatSession) {
      return NextResponse.json({ error: "Chat session not found" }, { status: 404 });
    }

    // Save user message
    await db.chatMessage.create({
      data: { chatSessionId: sessionId, userId, role: "user", content: message },
    });

    // Fetch previous messages for context (last 20 to keep tokens reasonable)
    const previousMessages = await db.chatMessage.findMany({
      where: { chatSessionId: sessionId },
      orderBy: { createdAt: "asc" },
    });

    const claudeMessages = previousMessages.slice(-20).map((msg: { role: string; content: string }) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    }));

    // Call Claude — Haiku for speed, Sonnet for depth
    const response = await anthropic.messages.create({
      model: COACH_MODEL,
      max_tokens: 1024,
      system: BJJ_SYSTEM_PROMPT,
      messages: claudeMessages,
    });

    const assistantContent =
      response.content[0].type === "text" ? response.content[0].text : "";

    // Save assistant response
    await db.chatMessage.create({
      data: { chatSessionId: sessionId, userId, role: "assistant", content: assistantContent },
    });

    // Update session timestamp
    await db.chatSession.update({
      where: { id: sessionId },
      data: { updatedAt: new Date() },
    });

    return NextResponse.json({ message: assistantContent, chatSessionId: sessionId });
  } catch (error) {
    console.error("Coach API error:", error);
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
