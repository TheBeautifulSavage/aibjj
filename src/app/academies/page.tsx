import { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "BJJ Academy Finder — Find Brazilian Jiu-Jitsu Schools Near You | AIBJJ",
  description:
    "Find the best BJJ academies and Brazilian jiu-jitsu schools near you. Search thousands of academies worldwide with ratings, reviews, and contact info.",
};

export const revalidate = 0; // Always fresh

export default async function AcademiesPage({
  searchParams,
}: {
  searchParams: { country?: string; q?: string };
}) {
  let query = supabase.from("Academy").select("*").order("rating", { ascending: false });

  if (searchParams.country) {
    query = query.eq("country", searchParams.country);
  }
  if (searchParams.q) {
    query = query.or(
      `name.ilike.%${searchParams.q}%,city.ilike.%${searchParams.q}%,country.ilike.%${searchParams.q}%`
    );
  }

  const { data: topAcademies } = await query.limit(60);

  const { data: countryCounts } = await supabase
    .from("Academy")
    .select("country")
    .order("country");

  const countries: Record<string, number> = {};
  for (const a of countryCounts || []) {
    if (a.country) countries[a.country] = (countries[a.country] || 0) + 1;
  }

  const { count: totalCount } = await supabase
    .from("Academy")
    .select("*", { count: "exact", head: true });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-black">BJJ Academy Finder</h1>
        <p className="mt-3 text-lg text-zinc-400">
          Find Brazilian jiu-jitsu schools and academies near you
        </p>

        {/* Search box */}
        <form className="mt-8 max-w-xl" method="GET">
          <div className="flex gap-2">
            <input
              type="text"
              name="q"
              defaultValue={searchParams.q}
              placeholder="Search by city, name, or country..."
              className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-red-600 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
            >
              Search
            </button>
          </div>
        </form>

        {/* Stats */}
        <div className="mt-6 flex gap-6 text-sm text-zinc-400">
          <span>
            <strong className="text-white">{totalCount?.toLocaleString() || "283"}+</strong>{" "}
            academies
          </span>
          <span>
            <strong className="text-white">{Object.keys(countries).length}+</strong> countries
          </span>
        </div>

        {/* Active filter pill */}
        {searchParams.country && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-zinc-400">Filtering by:</span>
            <span className="rounded-full bg-red-600/20 border border-red-600/40 px-3 py-1 text-sm text-red-400">
              {searchParams.country}
            </span>
            <Link href="/academies" className="text-sm text-zinc-500 hover:text-zinc-300">
              Clear
            </Link>
          </div>
        )}

        {/* Academy grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(topAcademies || []).map((academy) => (
            <Link
              key={academy.id}
              href={`/academies/${academy.slug}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-600 transition-colors"
            >
              <h3 className="font-semibold text-white truncate">{academy.name}</h3>
              <p className="mt-1 text-sm text-zinc-400 truncate">
                {academy.city}, {academy.country}
              </p>
              {academy.rating && (
                <div className="mt-2 flex items-center gap-1 text-sm">
                  <span className="text-yellow-400">★</span>
                  <span className="text-zinc-300">{Number(academy.rating).toFixed(1)}</span>
                  <span className="text-zinc-500">
                    ({academy.review_count?.toLocaleString()} reviews)
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>

        {(topAcademies || []).length === 0 && (
          <div className="mt-16 text-center text-zinc-500">
            No academies found. Try a different search term.
          </div>
        )}

        {/* Browse by country */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Browse by Country</h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(countries)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 40)
              .map(([country, count]) => (
                <Link
                  key={country}
                  href={`/academies?country=${encodeURIComponent(country)}`}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300 hover:border-zinc-600 transition-colors"
                >
                  {country} <span className="text-zinc-500">({count})</span>
                </Link>
              ))}
          </div>
        </div>

        {/* SEO content */}
        <div className="mt-20 border-t border-zinc-800 pt-12">
          <h2 className="text-xl font-bold mb-4">Find BJJ Academies Worldwide</h2>
          <p className="text-zinc-400 max-w-2xl text-sm leading-relaxed">
            AIBJJ maintains a comprehensive global directory of Brazilian jiu-jitsu academies,
            including Gracie Jiu-Jitsu schools, grappling gyms, and submission wrestling clubs.
            Each listing includes ratings, reviews, location, and contact information sourced from
            Google Maps. Whether you're a beginner looking for your first BJJ class or a
            traveling competitor, use this directory to find the best academies near you.
          </p>
        </div>
      </div>
    </div>
  );
}
