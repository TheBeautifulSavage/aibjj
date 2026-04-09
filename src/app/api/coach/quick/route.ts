import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { anthropic, BJJ_SYSTEM_PROMPT } from "@/lib/anthropic";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Enforce monthly limit for FREE users (shared with main coach endpoint)
    const user = await db.user.findUnique({ where: { id: userId }, select: { subscriptionTier: true } });

    if (user?.subscriptionTier === "FREE") {
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);

      const allMessages = await db.chatMessage.findMany({ where: { userId, role: "user" } });
      const monthCount = allMessages.filter(
        (m: { createdAt: string }) => new Date(m.createdAt) >= startOfMonth
      ).length;

      if (monthCount >= 5) {
        return NextResponse.json(
          { error: "You've used your 5 free AI messages this month. Upgrade to Pro for unlimited access.", upgradeUrl: "/pricing" },
          { status: 429 }
        );
      }

      // Log this message so it counts toward the limit
      // Find or create a "quick" chat session
      let quickSession = await db.chatSession.findFirst({ where: { userId, title: "Quick AI Coach" } });
      if (!quickSession) {
        quickSession = await db.chatSession.create({ data: { userId, title: "Quick AI Coach" } });
      }
      await db.chatMessage.create({
        data: { chatSessionId: quickSession.id, userId, role: "user", content: message },
      });
    }

    const messages = [
      ...(history || []).map((msg: { role: string; content: string }) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      { role: "user" as const, content: message },
    ];

    const response = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 512,
      system: BJJ_SYSTEM_PROMPT,
      messages,
    });

    const assistantContent =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ message: assistantContent });
  } catch (error) {
    console.error("Quick coach API error:", error);
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
