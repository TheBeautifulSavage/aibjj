import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { anthropic, BJJ_SYSTEM_PROMPT } from "@/lib/anthropic";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const { message, chatSessionId } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Get or create chat session
    let sessionId = chatSessionId;

    if (!sessionId) {
      // Create a new chat session with the first message as a truncated title
      const title =
        message.length > 50 ? message.substring(0, 50) + "..." : message;

      const chatSession = await prisma.chatSession.create({
        data: {
          userId,
          title,
        },
      });
      sessionId = chatSession.id;
    }

    // Verify the chat session belongs to the user
    const chatSession = await prisma.chatSession.findFirst({
      where: { id: sessionId, userId },
    });

    if (!chatSession) {
      return NextResponse.json(
        { error: "Chat session not found" },
        { status: 404 }
      );
    }

    // Save user message
    await prisma.chatMessage.create({
      data: {
        chatSessionId: sessionId,
        userId,
        role: "user",
        content: message,
      },
    });

    // Fetch previous messages for context
    const previousMessages = await prisma.chatMessage.findMany({
      where: { chatSessionId: sessionId },
      orderBy: { createdAt: "asc" },
    });

    // Build messages array for Claude
    const claudeMessages = previousMessages.map((msg: { role: string; content: string }) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    }));

    // Call Claude API
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: BJJ_SYSTEM_PROMPT,
      messages: claudeMessages,
    });

    const assistantContent =
      response.content[0].type === "text" ? response.content[0].text : "";

    // Save assistant response
    await prisma.chatMessage.create({
      data: {
        chatSessionId: sessionId,
        userId,
        role: "assistant",
        content: assistantContent,
      },
    });

    // Update session timestamp
    await prisma.chatSession.update({
      where: { id: sessionId },
      data: { updatedAt: new Date() },
    });

    return NextResponse.json({
      message: assistantContent,
      chatSessionId: sessionId,
    });
  } catch (error) {
    console.error("Coach API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
