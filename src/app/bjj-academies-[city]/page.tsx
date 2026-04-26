import { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export const revalidate = 3600; // Re-fetch from DB hourly

const CITY_DATA: Record<string, { name: string; state?: string; country: string; searchTerms: string[] }> = {
  "los-angeles":   { name: "Los Angeles",   state: "CA", country: "United States", searchTerms: ["bjj academies los angeles", "jiu jitsu los angeles", "bjj gym LA"] },
  "new-york":      { name: "New York",       state: "NY", country: "United States", searchTerms: ["bjj academies new york", "jiu jitsu new york city", "bjj gym NYC"] },
  "miami":         { name: "Miami",          state: "FL", country: "United States", searchTerms: ["bjj academies miami", "jiu jitsu miami", "bjj gym miami florida"] },
  "houston":       { name: "Houston",        state: "TX", country: "United States", searchTerms: ["bjj academies houston", "jiu jitsu houston", "bjj gym houston texas"] },
  "chicago":       { name: "Chicago",        state: "IL", country: "United States", searchTerms: ["bjj academies chicago", "jiu jitsu chicago", "bjj gym chicago illinois"] },
  "phoenix":       { name: "Phoenix",        state: "AZ", country: "United States", searchTerms: ["bjj academies phoenix", "jiu jitsu phoenix", "bjj gym phoenix arizona"] },
  "dallas":        { name: "Dallas",         state: "TX", country: "United States", searchTerms: ["bjj academies dallas", "jiu jitsu dallas", "bjj gym dallas texas"] },
  "seattle":       { name: "Seattle",        state: "WA", country: "United States", searchTerms: ["bjj academies seattle", "jiu jitsu seattle", "bjj gym seattle washington"] },
  "denver":        { name: "Denver",         state: "CO", country: "United States", searchTerms: ["bjj academies denver", "jiu jitsu denver", "bjj gym denver colorado"] },
  "austin":        { name: "Austin",         state: "TX", country: "United States", searchTerms: ["bjj academies austin", "jiu jitsu austin", "bjj gym austin texas"] },
  "san-diego":     { name: "San Diego",      state: "CA", country: "United States", searchTerms: ["bjj academies san diego", "jiu jitsu san diego", "bjj gym san diego california"] },
  "san-francisco": { name: "San Francisco",  state: "CA", country: "United States", searchTerms: ["bjj academies san francisco", "jiu jitsu san francisco", "bjj gym SF bay area"] },
  "boston":        { name: "Boston",         state: "MA", country: "United States", searchTerms: ["bjj academies boston", "jiu jitsu boston", "bjj gym boston massachusetts"] },
  "atlanta":       { name: "Atlanta",        state: "GA", country: "United States", searchTerms: ["bjj academies atlanta", "jiu jitsu atlanta", "bjj gym atlanta georgia"] },
  "las-vegas":     { name: "Las Vegas",      state: "NV", country: "United States", searchTerms: ["bjj academies las vegas", "jiu jitsu las vegas", "bjj gym las vegas nevada"] },
  "portland":      { name: "Portland",       state: "OR", country: "United States", searchTerms: ["bjj academies portland", "jiu jitsu portland", "bjj gym portland oregon"] },
  "nashville":     { name: "Nashville",      state: "TN", country: "United States", searchTerms: ["bjj academies nashville", "jiu jitsu nashville", "bjj gym nashville tennessee"] },
  "orlando":       { name: "Orlando",        state: "FL", country: "United States", searchTerms: ["bjj academies orlando", "jiu jitsu orlando", "bjj gym orlando florida"] },
  "london":        { name: "London",         country: "United Kingdom",             searchTerms: ["bjj academies london", "jiu jitsu london", "bjj gym london england"] },
  "sydney":        { name: "Sydney",         country: "Australia",                  searchTerms: ["bjj academies sydney", "jiu jitsu sydney", "bjj gym sydney australia"] },
  "toronto":       { name: "Toronto",        country: "Canada",                     searchTerms: ["bjj academies toronto", "jiu jitsu toronto", "bjj gym toronto canada"] },
};

export async function generateStaticParams() {
  return Object.keys(CITY_DATA).map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = CITY_DATA[params.city];
  if (!city) return {};
  const location = city.state ? `${city.name}, ${city.state}` : `${city.name}, ${city.country}`;
  return {
    title: `Best BJJ Academies in ${city.name}${city.state ? `, ${city.state}` : ""} (2026) | AIBJJ`,
    description: `Find the top Brazilian jiu-jitsu academies in ${location}. Compare ratings, read reviews, and find the perfect BJJ school near you. Updated 2026.`,
    openGraph: {
      title: `Best BJJ Academies in ${city.name} (2026)`,
      description: `Discover top-rated Brazilian jiu-jitsu schools in ${location}. Compare gyms, ratings, and find your perfect training home.`,
    },
  };
}

export default async function CityAcademiesPage({ params }: { params: { city: string } }) {
  const city = CITY_DATA[params.city];
  if (!city) notFound();

  const { data: academies } = await supabase
    .from("Academy")
    .select("*")
    .ilike("city", `%${city.name}%`)
    .order("rating", { ascending: false })
    .limit(20);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best BJJ Academies in ${city.name}`,
    description: `Top-rated Brazilian jiu-jitsu academies in ${city.name}${city.state ? `, ${city.state}` : ""}`,
    numberOfItems: academies?.length || 0,
    itemListElement: (academies || []).map((academy, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SportsActivityLocation",
        name: academy.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: academy.address,
          addressLocality: academy.city,
          addressRegion: academy.state,
          addressCountry: academy.country,
        },
        ...(academy.rating
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: academy.rating,
                reviewCount: academy.reviewCount || 1,
              },
            }
          : {}),
        ...(academy.googleMapsUrl ? { url: academy.googleMapsUrl } : {}),
      },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aibjj.com" },
      { "@type": "ListItem", position: 2, name: "BJJ Academies", item: "https://aibjj.com/academies" },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://aibjj.com/bjj-academies-${params.city}` },
    ],
  };

  const otherCities = Object.entries(CITY_DATA).filter(([slug]) => slug !== params.city);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Nav */}
<div className="mx-auto max-w-5xl px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-zinc-500 mb-6" aria-label="breadcrumb">
          <Link href="/academies" className="hover:text-zinc-300">
            BJJ Academies
          </Link>{" "}
          ›{" "}
          <span className="text-zinc-300">{city.name}</span>
        </nav>

        {/* Hero */}
        <h1 className="text-4xl font-black leading-tight">
          Best BJJ Academies in {city.name} (2026)
        </h1>
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
          Find the top Brazilian jiu-jitsu schools and academies in{" "}
          {city.state ? `${city.name}, ${city.state}` : `${city.name}, ${city.country}`}.{" "}
          {(academies?.length ?? 0) > 0
            ? `We found ${academies!.length} academies`
            : "Browse our directory"}{" "}
          — compare ratings and find your perfect training home.
        </p>

        {/* Keyword pills (SEO) */}
        <div className="mt-4 flex flex-wrap gap-2">
          {city.searchTerms.map((term) => (
            <span
              key={term}
              className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-500"
            >
              {term}
            </span>
          ))}
        </div>

        {/* Academy list */}
        <div className="mt-10 space-y-4">
          {(academies?.length ?? 0) === 0 ? (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center">
              <p className="text-zinc-400">Academy data loading for {city.name}. Check back soon!</p>
              <p className="mt-2 text-sm text-zinc-500">
                Meanwhile,{" "}
                <Link href="/auth/signup" className="text-red-400 hover:underline">
                  sign up free
                </Link>{" "}
                to track your training.
              </p>
            </div>
          ) : (
            academies!.map((academy, i) => (
              <div
                key={academy.id}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-zinc-500">#{i + 1}</span>
                      <h2 className="font-bold text-white text-lg">{academy.name}</h2>
                    </div>
                    <p className="mt-1 text-sm text-zinc-400">
                      {academy.address || `${academy.city}, ${academy.country}`}
                    </p>
                    {academy.rating && (
                      <div className="mt-2 flex items-center gap-2 text-sm flex-wrap">
                        <span className="text-yellow-400">
                          {"★".repeat(Math.min(5, Math.round(academy.rating)))}
                          {"☆".repeat(Math.max(0, 5 - Math.round(academy.rating)))}
                        </span>
                        <span className="font-semibold text-white">
                          {Number(academy.rating).toFixed(1)}
                        </span>
                        {academy.reviewCount && (
                          <span className="text-zinc-500">
                            ({Number(academy.reviewCount).toLocaleString()} reviews)
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {academy.googleMapsUrl && (
                    <a
                      href={academy.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-500 transition-colors"
                    >
                      View Map →
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Inline CTA after list */}
        {(academies?.length ?? 0) > 5 && (
          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-semibold text-white">Training at a {city.name} BJJ academy?</p>
              <p className="text-sm text-zinc-400 mt-0.5">
                Log your sessions and track progress with the{" "}
                <Link href="/ai-bjj-coach" className="text-red-400 hover:underline">
                  AIBJJ coach
                </Link>
                .
              </p>
            </div>
            <Link
              href="/auth/signup"
              className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 whitespace-nowrap"
            >
              Start Free →
            </Link>
          </div>
        )}

        {/* SEO body copy */}
        <div className="mt-16 space-y-6 text-zinc-400 text-sm leading-relaxed max-w-3xl">
          <h2 className="text-xl font-bold text-white">
            Jiu-Jitsu Academies in {city.name} — What to Look For
          </h2>
          <p>
            Whether you're a complete beginner or a seasoned competitor, finding the right BJJ
            academy in {city.name} is one of the most important decisions in your training journey.{" "}
            {city.state
              ? `${city.name}, ${city.state} has a thriving grappling scene`
              : `${city.name} has a thriving grappling scene`}{" "}
            with academies ranging from competition-focused teams to beginner-friendly schools.
          </p>
          <p>
            When choosing a jiu-jitsu gym near {city.name}, consider the instructor's
            credentials, class schedule, culture, and whether they offer no-gi in addition to gi
            training. Read reviews, watch trial classes, and trust your gut — the best BJJ academy
            is the one you'll actually show up to.
          </p>
          <p>
            AIBJJ helps you track your training no matter which {city.name} academy you train at.
            Log sessions, identify weaknesses, and get personalized feedback from our{" "}
            <Link href="/ai-bjj-coach" className="text-red-400 hover:underline">
              AI BJJ coach
            </Link>
            .
          </p>
        </div>

        {/* Main CTA block */}
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Training at a {city.name} Academy?</h2>
          <p className="mt-2 text-zinc-400 max-w-md mx-auto">
            Use AIBJJ to track your progress, get AI coaching, and build your game plan — works
            with any academy.
          </p>
          <Link
            href="/auth/signup"
            className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 transition-colors"
          >
            Start Free → No Credit Card
          </Link>
          <p className="mt-3 text-xs text-zinc-600">
            Join thousands of grapplers tracking their BJJ progress
          </p>
        </div>

        {/* Related cities */}
        <div className="mt-12">
          <h3 className="text-lg font-bold mb-4">BJJ Academies in Other Cities</h3>
          <div className="flex flex-wrap gap-2">
            {otherCities.slice(0, 15).map(([slug, data]) => (
              <Link
                key={slug}
                href={`/bjj-academies-${slug}`}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-12 border-t border-zinc-800 pt-8 flex flex-wrap gap-4 text-sm text-zinc-500">
          <Link href="/academies" className="hover:text-zinc-300">
            All BJJ Academies
          </Link>
          <Link href="/ai-bjj-coach" className="hover:text-zinc-300">
            AI BJJ Coach
          </Link>
          <Link href="/bjj-belt-system" className="hover:text-zinc-300">
            Belt System Guide
          </Link>
          <Link href="/auth/signup" className="hover:text-zinc-300">
            Sign Up Free
          </Link>
        </div>
      </div>
    </div>
  );
}
