import { NextRequest, NextResponse } from "next/server";
import { db as prisma } from "@/lib/db";
import { TECHNIQUES } from "@/lib/technique-data";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const position = searchParams.get("position");
  const category = searchParams.get("category");
  const belt = searchParams.get("belt");
  const query = searchParams.get("q");

  try {
    // Try fetching from DB first
    const where: Record<string, unknown> = {};
    if (position && position !== "All") {
      where.position = position;
    }
    if (category && category !== "All") {
      where.category = category;
    }
    if (belt && belt !== "All") {
      where.beltLevel = belt;
    }
    if (query) {
      where.OR = [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ];
    }

    const dbTechniques = await prisma.technique.findMany({
      where,
      orderBy: { name: "asc" },
    });

    if (dbTechniques.length > 0) {
      // Parse the JSON steps field from DB
      const parsed = dbTechniques.map((t: Record<string, unknown>) => ({
        ...t,
        steps: t.steps ? JSON.parse(t.steps as string) : [],
        tips: t.tips ? (t.tips as string).split("\n").filter(Boolean) : [],
      }));
      return NextResponse.json(parsed);
    }
  } catch {
    // DB not available — fall through to hardcoded data
  }

  // Fallback: filter hardcoded techniques
  let filtered = [...TECHNIQUES];

  if (position && position !== "All") {
    filtered = filtered.filter((t) => t.position === position);
  }
  if (category && category !== "All") {
    filtered = filtered.filter((t) => t.category === category);
  }
  if (belt && belt !== "All") {
    filtered = filtered.filter((t) => t.beltLevel === belt);
  }
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    );
  }

  filtered.sort((a, b) => a.name.localeCompare(b.name));

  return NextResponse.json(filtered);
}
