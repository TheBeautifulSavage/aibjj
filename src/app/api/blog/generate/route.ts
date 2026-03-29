import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { anthropic } from "@/lib/anthropic";

const BJJ_BLOG_PROMPT = `You are an expert BJJ black belt and content writer who creates SEO-optimized blog posts about Brazilian Jiu-Jitsu. You write with authority, passion, and deep technical knowledge.

Your writing style:
- Confident, knowledgeable black belt voice
- Engaging hooks that draw readers in immediately
- Actionable, practical advice that readers can use on the mat
- Natural use of BJJ terminology without being exclusionary to newer practitioners
- SEO-optimized with keywords naturally woven into the content (3-5 times)

Structure every blog post with:
1. An engaging hook/intro paragraph (2-3 sentences that grab attention)
2. Proper H2 and H3 subheadings for sections
3. Numbered lists or bullet points for techniques and tips
4. Detailed explanations with common mistakes to avoid
5. A "Key Takeaways" section at the end with 3-5 bullet points
6. A closing CTA encouraging readers to check out the creator's courses

Format: Return a JSON object with these fields:
- title: SEO-friendly title (50-70 chars)
- excerpt: Compelling meta description (max 150 chars)
- content: Full markdown content (800-1200 words)
- keywords: Comma-separated suggested keywords
- coverImageTerm: A search term for finding a relevant cover image (e.g. "brazilian jiu jitsu guard")

IMPORTANT: Return ONLY valid JSON, no markdown code fences or extra text.`;

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { topic, keywords, tone } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    const keywordList = keywords?.length ? keywords.join(", ") : topic;
    const toneInstruction = tone ? `Write in a ${tone} tone.` : "";

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: BJJ_BLOG_PROMPT,
      messages: [
        {
          role: "user",
          content: `Write a blog post about: "${topic}"

Target keywords: ${keywordList}
${toneInstruction}

Remember: 800-1200 words, SEO-optimized, actionable BJJ content. Return as JSON.`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      // Try extracting JSON from the response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
      }
    }

    return NextResponse.json({
      title: parsed.title,
      excerpt: parsed.excerpt,
      content: parsed.content,
      keywords: parsed.keywords,
      coverImageTerm: parsed.coverImageTerm,
      coverImage: `https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80`,
    });
  } catch (error) {
    console.error("Blog generate error:", error);
    return NextResponse.json({ error: "Failed to generate blog post" }, { status: 500 });
  }
}
