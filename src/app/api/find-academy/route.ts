import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

/**
 * POST /api/find-academy
 * No auth required — public endpoint for the homepage search
 * Body: { query: string, lat?: number, lng?: number }
 */
export async function POST(req: Request) {
  try {
    const { query, lat, lng } = await req.json();
    if (!query?.trim()) return NextResponse.json({ error: "Query required" }, { status: 400 });

    const q = query.toLowerCase().trim();

    // Detect if it's an academy/location search
    const isLocationSearch =
      q.includes("near me") || q.includes("near ") ||
      q.includes("academ") || q.includes("gym") || q.includes("school") ||
      q.includes("class") || q.includes("find") || q.includes("where") ||
      q.includes("location") || q.includes("studio") || q.includes("dojo") ||
      /in [a-z\s]+$/.test(q);

    if (isLocationSearch) {
      // If we have coordinates, find nearest academies by distance
      if (lat && lng) {
        // Use PostGIS-style distance via Supabase RPC or just filter by nearby coords
        // Simple approach: fetch all with lat/lng and sort by distance in JS
        const { data: allAcademies } = await supabase
          .from("Academy")
          .select("id, name, city, country, rating, review_count, slug, google_maps_url, address, lat, lng")
          .not("lat", "is", null)
          .not("lng", "is", null);

        if (allAcademies && allAcademies.length > 0) {
          // Calculate distance (Haversine formula)
          const withDistance = allAcademies.map((a) => {
            const R = 6371; // km
            const dLat = ((a.lat - lat) * Math.PI) / 180;
            const dLng = ((a.lng - lng) * Math.PI) / 180;
            const aa =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos((lat * Math.PI) / 180) *
                Math.cos((a.lat * Math.PI) / 180) *
                Math.sin(dLng / 2) *
                Math.sin(dLng / 2);
            const distance = R * 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
            return { ...a, distance };
          });

          withDistance.sort((a, b) => a.distance - b.distance);
          const nearest = withDistance.slice(0, 8);

          return NextResponse.json({
            type: "academies",
            academies: nearest,
            location: "your location",
            locationDetected: true,
            count: nearest.length,
          });
        }
      }

      // No coordinates — extract location text from query
      const location = q
        .replace(/bjj|jiu.?jitsu|brazilian|academy|academies|gym|school|classes|near me|near|find|where|in |the best|top/gi, "")
        .trim();

      if (!location || location.length < 2) {
        // No location — ask for it or show top rated
        if (q.includes("near me")) {
          return NextResponse.json({
            type: "location_required",
            message: "Please allow location access to find academies near you, or type your city name.",
          });
        }

        const { data: academies } = await supabase
          .from("Academy")
          .select("id, name, city, country, rating, review_count, slug, google_maps_url, address")
          .order("rating", { ascending: false })
          .limit(6);
        return NextResponse.json({ type: "academies", academies: academies || [], location: "worldwide" });
      }

      // Search by city or country
      const { data: academies } = await supabase
        .from("Academy")
        .select("id, name, city, country, rating, review_count, slug, google_maps_url, address")
        .or(`city.ilike.%${location}%,country.ilike.%${location}%,name.ilike.%${location}%`)
        .order("rating", { ascending: false })
        .limit(8);

      return NextResponse.json({
        type: "academies",
        academies: academies || [],
        location,
        count: academies?.length || 0,
      });
    }

    // It's a BJJ question — use AI
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 300,
        system: "You are an expert BJJ coach. Answer jiu-jitsu questions concisely and helpfully in 2-3 sentences. End with a relevant tip or encouragement. Never mention being an AI.",
        messages: [{ role: "user", content: query }],
      }),
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || "Great question! Sign up for AIBJJ to get full AI coaching.";

    return NextResponse.json({ type: "ai", reply });
  } catch (error) {
    console.error("Find academy error:", error);
    return NextResponse.json({ error: "Failed to search" }, { status: 500 });
  }
}
