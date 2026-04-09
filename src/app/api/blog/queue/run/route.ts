import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db as prisma } from "@/lib/db";
import { anthropic } from "@/lib/anthropic";

const BJJ_BLOG_PROMPT = `You are an expert BJJ black belt and content writer who creates SEO-optimized blog posts about Brazilian Jiu-Jitsu. You write with authority, passion, and deep technical knowledge.

Your writing style:
- Confident, knowledgeable black belt voice
- Engaging hooks that draw readers in immediately
- Actionable, practical advice that readers can use on the mat
- Natural use of BJJ terminology
- SEO-optimized with keywords naturally woven in (3-5 times)

Structure every blog post with:
1. An engaging hook/intro paragraph
2. Proper H2 and H3 subheadings
3. Numbered lists or bullet points for techniques
4. Detailed explanations with common mistakes to avoid
5. A "Key Takeaways" section at the end with 3-5 bullet points
6. A closing CTA encouraging readers to explore more content

Return ONLY valid JSON with: title, excerpt (max 150 chars), content (800-1200 words markdown), keywords (comma-separated), coverImageTerm`;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 80);
}

export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;

    const queue = await prisma.blogQueue.findFirst({
      where: { userId, active: true },
      orderBy: { createdAt: "desc" },
    });

    if (!queue) {
      return NextResponse.json({ error: "No active queue found" }, { status: 404 });
    }

    const topics: string[] = JSON.parse(queue.topics);
    if (topics.length === 0) {
      return NextResponse.json({ error: "No topics in queue" }, { status: 400 });
    }

    // Pick the next topic (rotate through the list)
    const postCount = await prisma.blogPost.count({ where: { userId } });
    const topicIndex = postCount % topics.length;
    const topic = topics[topicIndex];

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: BJJ_BLOG_PROMPT,
      messages: [
        {
          role: "user",
          content: `Write a blog post about: "${topic}"\n\nReturn as JSON.`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
      }
    }

    const cuid = Math.random().toString(36).substring(2, 8);
    const slug = `${slugify(parsed.title)}-${cuid}`;

    const post = await prisma.blogPost.create({
      data: {
        userId,
        title: parsed.title,
        slug,
        content: parsed.content,
        excerpt: parsed.excerpt || null,
        coverImage: `https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80`,
        keywords: parsed.keywords || null,
        published: true,
        publishedAt: new Date(),
      },
    });

    // Update queue last run time
    await prisma.blogQueue.update({
      where: { id: queue.id },
      data: { lastRunAt: new Date() },
    });

    return NextResponse.json({ post });
  } catch (error) {
    console.error("Blog queue run error:", error);
    return NextResponse.json({ error: "Failed to run queue" }, { status: 500 });
  }
}
