import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const country = searchParams.get("country") || "";
  const limit = Math.min(parseInt(searchParams.get("limit") || "20"), 100);
  const offset = parseInt(searchParams.get("offset") || "0");

  let query = supabase
    .from("Academy")
    .select("id, name, slug, city, state, country, rating, reviewCount, lat, lng, address", {
      count: "exact",
    })
    .order("rating", { ascending: false })
    .range(offset, offset + limit - 1);

  if (q) {
    query = query.or(
      `name.ilike.%${q}%,city.ilike.%${q}%,country.ilike.%${q}%,address.ilike.%${q}%`
    );
  }

  if (country) {
    query = query.eq("country", country);
  }

  const { data, error, count } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    academies: data,
    total: count,
    limit,
    offset,
  });
}
