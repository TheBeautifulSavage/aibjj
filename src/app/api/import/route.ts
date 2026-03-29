import { NextResponse } from "next/server";
import { anthropic } from "@/lib/anthropic";

interface CourseData {
  title: string;
  description: string;
  price: string;
  thumbnail: string;
}

interface ImportResult {
  creatorName: string;
  bio: string;
  belt: string;
  profileImage: string;
  courses: CourseData[];
  source: "structured" | "ai";
}

function extractMetaContent(html: string, property: string): string {
  // Match both property="..." and name="..."
  const regex = new RegExp(
    `<meta[^>]*(?:property|name)=["']${property}["'][^>]*content=["']([^"']*)["']|<meta[^>]*content=["']([^"']*)["'][^>]*(?:property|name)=["']${property}["']`,
    "i"
  );
  const match = html.match(regex);
  return match?.[1] || match?.[2] || "";
}

function extractJsonLd(html: string): Record<string, unknown> | null {
  const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    try {
      return JSON.parse(match[1].trim());
    } catch {
      continue;
    }
  }
  return null;
}

function extractCourses(html: string): CourseData[] {
  const courses: CourseData[] = [];

  // Look for product/course-like patterns: heading + price nearby
  // Common pattern: card-like structures with h2/h3 + price
  const cardPatterns = [
    // Pattern: heading followed by price within a container
    /<(?:h[2-4]|div[^>]*class="[^"]*(?:title|name|heading)[^"]*")[^>]*>([\s\S]*?)<\/(?:h[2-4]|div)>[\s\S]*?\$(\d+(?:\.\d{2})?)/gi,
    // Pattern: product cards with data attributes
    /<[^>]*(?:data-product|data-course|class="[^"]*(?:product|course|item|card)[^"]*")[^>]*>[\s\S]*?<(?:h[2-6]|span[^>]*class="[^"]*(?:title|name)[^"]*")[^>]*>(.*?)<\/(?:h[2-6]|span)>[\s\S]*?\$(\d+(?:\.\d{2})?)/gi,
  ];

  for (const pattern of cardPatterns) {
    let match;
    while ((match = pattern.exec(html)) !== null) {
      const title = match[1]?.replace(/<[^>]*>/g, "").trim();
      const price = match[2];
      if (title && title.length > 3 && title.length < 200) {
        courses.push({
          title,
          description: "",
          price: `$${price}`,
          thumbnail: "",
        });
      }
    }
  }

  // Also look for structured price patterns like $XX.XX near headings
  if (courses.length === 0) {
    const priceBlocks =
      html.match(
        /(?:<[^>]*>)*([^<]{4,120})(?:<[^>]*>)*\s*(?:<[^>]*>)*\s*\$(\d+(?:\.\d{2})?)(?:<[^>]*>)*/g
      ) || [];
    for (const block of priceBlocks.slice(0, 20)) {
      const titleMatch = block.match(/>([^<]{4,120})</);
      const priceMatch = block.match(/\$(\d+(?:\.\d{2})?)/);
      if (titleMatch && priceMatch) {
        const title = titleMatch[1].trim();
        if (
          title.length > 5 &&
          !title.includes("{") &&
          !title.includes("function")
        ) {
          courses.push({
            title,
            description: "",
            price: `$${priceMatch[1]}`,
            thumbnail: "",
          });
        }
      }
    }
  }

  // Deduplicate by title
  const seen = new Set<string>();
  return courses.filter((c) => {
    const key = c.title.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function stripHtml(html: string): string {
  // Remove scripts, styles, and nav/footer
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "");
  // Replace tags with spaces
  text = text.replace(/<[^>]+>/g, " ");
  // Clean up whitespace
  text = text.replace(/\s+/g, " ").trim();
  return text;
}

function detectBelt(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes("coral belt")) return "CORAL";
  if (lower.includes("red belt")) return "RED";
  if (lower.includes("black belt")) return "BLACK";
  if (lower.includes("brown belt")) return "BROWN";
  if (lower.includes("purple belt")) return "PURPLE";
  if (lower.includes("blue belt")) return "BLUE";
  if (lower.includes("white belt")) return "WHITE";
  return "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "A valid URL is required" },
        { status: 400 }
      );
    }

    // Validate URL format
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        throw new Error("Invalid protocol");
      }
    } catch {
      return NextResponse.json(
        { error: "Invalid URL format. Please provide a valid HTTP or HTTPS URL." },
        { status: 400 }
      );
    }

    // Fetch the page
    let html: string;
    try {
      const response = await fetch(parsedUrl.toString(), {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
        },
        signal: AbortSignal.timeout(15000),
      });

      if (!response.ok) {
        return NextResponse.json(
          { error: `Failed to fetch page (HTTP ${response.status}). The page may be behind a login wall or unavailable.` },
          { status: 422 }
        );
      }

      html = await response.text();
    } catch (err) {
      const message =
        err instanceof Error && err.name === "TimeoutError"
          ? "The page took too long to respond. Please try again."
          : "Could not reach the URL. Please check the link and try again.";
      return NextResponse.json({ error: message }, { status: 422 });
    }

    // --- Structured extraction ---
    const ogTitle = extractMetaContent(html, "og:title");
    const ogDescription = extractMetaContent(html, "og:description");
    const ogImage = extractMetaContent(html, "og:image");
    const jsonLd = extractJsonLd(html);
    const courses = extractCourses(html);
    const belt = detectBelt(html);

    // Determine creator name from structured data
    const creatorName =
      (jsonLd?.name as string) ||
      (jsonLd?.author as string) ||
      ogTitle ||
      "";
    const bio = ogDescription || "";
    const profileImage = ogImage || "";

    // If we got good structured data with courses, return it
    if (courses.length > 0 && creatorName) {
      const result: ImportResult = {
        creatorName: creatorName.slice(0, 200),
        bio: bio.slice(0, 1000),
        belt,
        profileImage,
        courses: courses.slice(0, 50),
        source: "structured",
      };
      return NextResponse.json(result);
    }

    // --- AI fallback ---
    try {
      const pageText = stripHtml(html);
      // Limit text to ~8000 chars to stay within reasonable token limits
      const truncatedText = pageText.slice(0, 8000);

      const aiResponse = await anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2048,
        messages: [
          {
            role: "user",
            content: `Extract creator profile and course list from this BJJ platform page. The URL is: ${url}

Page content:
${truncatedText}

Return JSON with: { "creatorName": string, "bio": string, "belt": string (one of WHITE/BLUE/PURPLE/BROWN/BLACK/CORAL/RED or empty string), "profileImage": string (URL or empty), "courses": [{"title": string, "description": string, "price": string (e.g. "$49.99"), "thumbnail": string (URL or empty)}] }

Important:
- Extract ALL courses/instructionals/DVDs you can find
- For belt, infer from context clues if not explicitly stated
- For prices, include the dollar sign
- Return ONLY valid JSON, no markdown or explanations`,
          },
        ],
      });

      const aiText =
        aiResponse.content[0].type === "text" ? aiResponse.content[0].text : "";

      // Extract JSON from the response (handle potential markdown wrapping)
      const jsonMatch = aiText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        // Return whatever structured data we did find
        return NextResponse.json({
          creatorName: creatorName || "Unknown Creator",
          bio,
          belt,
          profileImage,
          courses: [],
          source: "structured",
        } as ImportResult);
      }

      const aiData = JSON.parse(jsonMatch[0]);

      const result: ImportResult = {
        creatorName: (aiData.creatorName || creatorName || "Unknown Creator").slice(0, 200),
        bio: (aiData.bio || bio).slice(0, 1000),
        belt: aiData.belt || belt || "",
        profileImage: aiData.profileImage || profileImage || "",
        courses: (aiData.courses || []).slice(0, 50).map(
          (c: Record<string, string>) => ({
            title: c.title || "",
            description: c.description || "",
            price: c.price || "",
            thumbnail: c.thumbnail || "",
          })
        ),
        source: "ai",
      };

      return NextResponse.json(result);
    } catch (aiError) {
      console.error("AI parsing failed:", aiError);

      // Return best-effort structured data
      return NextResponse.json({
        creatorName: creatorName || ogTitle || "Unknown Creator",
        bio: bio || ogDescription || "",
        belt,
        profileImage: profileImage || ogImage || "",
        courses: courses.slice(0, 50),
        source: "structured",
      } as ImportResult);
    }
  } catch (err) {
    console.error("Import error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
