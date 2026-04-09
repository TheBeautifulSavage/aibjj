import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/meta?category=gi&year=2024
 * Returns submission stats for given category/year.
 *
 * Query params:
 *   category  — "gi" | "nogi" (required)
 *   year      — e.g. 2024 (optional, defaults to latest)
 *   type      — "submissions" | "trend" (optional, defaults to "submissions")
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const category = searchParams.get("category");
    const yearParam = searchParams.get("year");
    const type = searchParams.get("type") ?? "submissions";

    if (!category || !["gi", "nogi"].includes(category)) {
      return NextResponse.json(
        { error: "category must be 'gi' or 'nogi'" },
        { status: 400 }
      );
    }

    if (type === "trend") {
      // Return heel hook trend across years
      const trend = await prisma.metaSnapshot.findMany({
        where: {
          category: "nogi",
          submissionType: "Heel Hook (All)",
        },
        orderBy: { year: "asc" },
        select: {
          year: true,
          percentage: true,
          source: true,
        },
      });
      return NextResponse.json({ trend });
    }

    // Resolve year
    let year: number;
    if (yearParam) {
      year = parseInt(yearParam, 10);
      if (isNaN(year)) {
        return NextResponse.json({ error: "Invalid year" }, { status: 400 });
      }
    } else {
      // Get latest year available
      const latest = await prisma.metaSnapshot.findFirst({
        where: { category },
        orderBy: { year: "desc" },
        select: { year: true },
      });
      year = latest?.year ?? 2024;
    }

    const submissions = await prisma.metaSnapshot.findMany({
      where: {
        category,
        year,
        submissionType: { not: "Heel Hook (All)" }, // exclude trend rows
      },
      orderBy: { percentage: "desc" },
      select: {
        submissionType: true,
        percentage: true,
        matchCount: true,
        source: true,
        tournament: true,
      },
    });

    if (!submissions.length) {
      return NextResponse.json(
        { error: `No data found for category=${category} year=${year}` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      category,
      year,
      source: submissions[0].source,
      matchCount: submissions[0].matchCount,
      submissions: submissions.map((s) => ({
        name: s.submissionType,
        percentage: s.percentage,
      })),
    });
  } catch (error) {
    console.error("[meta/route] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
