import { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Find BJJ Academies Near You — Global Directory | AIBJJ",
  description:
    "Find the best BJJ academies and Brazilian jiu-jitsu schools near you. Browse thousands of academies worldwide with ratings, reviews, and directions. Free global directory.",
  openGraph: {
    title: "Find BJJ Academies Near You — Global Directory",
    description:
      "Browse thousands of Brazilian jiu-jitsu academies worldwide. Compare ratings, read reviews, get directions.",
  },
};

export const revalidate = 86400;

const CITY_PAGES = [
  { slug: "los-angeles",   name: "Los Angeles",   state: "CA" },
  { slug: "new-york",      name: "New York",       state: "NY" },
  { slug: "miami",         name: "Miami",          state: "FL" },
  { slug: "houston",       name: "Houston",        state: "TX" },
  { slug: "chicago",       name: "Chicago",        state: "IL" },
  { slug: "phoenix",       name: "Phoenix",        state: "AZ" },
  { slug: "dallas",        name: "Dallas",         state: "TX" },
  { slug: "seattle",       name: "Seattle",        state: "WA" },
  { slug: "denver",        name: "Denver",         state: "CO" },
  { slug: "austin",        name: "Austin",         state: "TX" },
  { slug: "san-diego",     name: "San Diego",      state: "CA" },
  { slug: "san-francisco", name: "San Francisco",  state: "CA" },
  { slug: "boston",        name: "Boston",         state: "MA" },
  { slug: "atlanta",       name: "Atlanta",        state: "GA" },
  { slug: "las-vegas",     name: "Las Vegas",      state: "NV" },
  { slug: "portland",      name: "Portland",       state: "OR" },
  { slug: "nashville",     name: "Nashville",      state: "TN" },
  { slug: "orlando",       name: "Orlando",        state: "FL" },
  { slug: "london",        name: "London",         country: "UK" },
  { slug: "sydney",        name: "Sydney",         country: "AU" },
  { slug: "toronto",       name: "Toronto",        country: "CA" },
];

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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aibjj.com" },
      { "@type": "ListItem", position: 2, name: "BJJ Academies", item: "https://aibjj.com/academies" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black">
          <span className="text-red-600">AI</span>BJJ
        </Link>
        <Link
          href="/auth/signup"
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Start Free
        </Link>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-zinc-500 mb-6" aria-label="breadcrumb">
          <Link href="/" className="hover:text-zinc-300">Home</Link>{" "}›{" "}
          <span className="text-zinc-300">BJJ Academies</span>
        </nav>

        <h1 className="text-4xl font-black">Find BJJ Academies Near You — Global Directory</h1>
        <p className="mt-3 text-lg text-zinc-400 max-w-2xl">
          Discover Brazilian jiu-jitsu schools and academies worldwide. Compare ratings, read
          reviews, and find the perfect BJJ gym near you.
        </p>

        {/* Stats */}
        <div className="mt-5 flex gap-6 text-sm text-zinc-400">
          <span>
            <strong className="text-white">{totalCount?.toLocaleString() || "500"}+</strong>{" "}
            academies listed
          </span>
          <span>
            <strong className="text-white">{Object.keys(countries).length}+</strong> countries
          </span>
          <span>
            <strong className="text-white">{CITY_PAGES.length}</strong> city guides
          </span>
        </div>

        {/* Search box */}
        <form className="mt-8 max-w-xl" method="GET">
          <div className="flex gap-2">
            <input
              type="text"
              name="q"
              defaultValue={searchParams.q}
              placeholder="Search by city, academy name, or country..."
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

        {/* City guides section */}
        {!searchParams.q && !searchParams.country && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-2">BJJ Academy Guides by City</h2>
            <p className="text-sm text-zinc-500 mb-5">
              Browse curated lists of the best BJJ academies in major cities worldwide
            </p>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {CITY_PAGES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/bjj-academies-${city.slug}`}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 hover:border-zinc-600 hover:bg-zinc-900 transition-colors"
                >
                  <span className="font-semibold text-white text-sm">{city.name}</span>
                  {city.state && (
                    <span className="text-xs text-zinc-500 ml-1.5">{city.state}</span>
                  )}
                  {city.country && (
                    <span className="text-xs text-zinc-500 ml-1.5">{city.country}</span>
                  )}
                  <span className="block text-xs text-red-500 mt-0.5">View academies →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Academy grid */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-5">
            {searchParams.q
              ? `Search results for "${searchParams.q}"`
              : searchParams.country
              ? `BJJ Academies in ${searchParams.country}`
              : "Top-Rated BJJ Academies"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                      ({Number(academy.reviewCount || 0).toLocaleString()} reviews)
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>

          {(topAcademies || []).length === 0 && (
            <div className="mt-8 text-center text-zinc-500">
              No academies found. Try a different search term.
            </div>
          )}
        </div>

        {/* Browse by country */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Browse BJJ Academies by Country</h2>
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

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Found Your Academy?</h2>
          <p className="mt-2 text-zinc-400 max-w-md mx-auto">
            Track your training, get AI coaching feedback, and build your game plan with AIBJJ — free to start.
          </p>
          <Link
            href="/auth/signup"
            className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700"
          >
            Start Free → No Credit Card
          </Link>
        </div>

        {/* SEO content */}
        <div className="mt-20 border-t border-zinc-800 pt-12">
          <h2 className="text-xl font-bold mb-4">Find BJJ Academies Worldwide</h2>
          <p className="text-zinc-400 max-w-2xl text-sm leading-relaxed">
            AIBJJ maintains a comprehensive global directory of Brazilian jiu-jitsu academies,
            including Gracie Jiu-Jitsu schools, grappling gyms, and submission wrestling clubs.
            Each listing includes ratings, reviews, location, and contact information sourced from
            Google Maps. Whether you&apos;re a beginner looking for your first BJJ class or a
            traveling competitor, use this directory to find the best academies near you.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            {CITY_PAGES.slice(0, 10).map((city) => (
              <Link
                key={city.slug}
                href={`/bjj-academies-${city.slug}`}
                className="text-zinc-500 hover:text-red-400 transition-colors"
              >
                BJJ academies in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
