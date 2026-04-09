import { NextRequest, NextResponse } from "next/server";
import metaData from "@/data/bjj-meta-data.json";

/**
 * GET /api/meta?category=gi|nogi|all&type=submissions|trend
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const category = searchParams.get("category") ?? "all";
    const type = searchParams.get("type") ?? "submissions";

    if (type === "trend") {
      return NextResponse.json({ data: metaData.heelHookTrend });
    }

    if (category === "gi") {
      return NextResponse.json({
        data: metaData.gi,
        tournamentComparison: metaData.tournamentComparison,
        insights: metaData.metaInsights.gi_2024,
      });
    } else if (category === "nogi") {
      return NextResponse.json({
        data: metaData.nogi,
        tournamentComparison: metaData.tournamentComparison,
        insights: metaData.metaInsights.nogi_2025,
      });
    }

    return NextResponse.json(metaData);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
