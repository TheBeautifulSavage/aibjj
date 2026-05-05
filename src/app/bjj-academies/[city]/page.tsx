import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

const cityPages: Record<string, { city: string; state?: string; country: string }> = {
  boise: { city: "Boise", state: "ID", country: "United States" },
  omaha: { city: "Omaha", state: "NE", country: "United States" },
  tulsa: { city: "Tulsa", state: "OK", country: "United States" },
  memphis: { city: "Memphis", state: "TN", country: "United States" },
  louisville: { city: "Louisville", state: "KY", country: "United States" },
  "new-orleans": { city: "New Orleans", state: "LA", country: "United States" },
  cincinnati: { city: "Cincinnati", state: "OH", country: "United States" },
  cleveland: { city: "Cleveland", state: "OH", country: "United States" },
  "oklahoma-city": { city: "Oklahoma City", state: "OK", country: "United States" },
  "virginia-beach": { city: "Virginia Beach", state: "VA", country: "United States" },
  "mexico-city": { city: "Mexico City", country: "Mexico" },
  vancouver: { city: "Vancouver", country: "Canada" },
  montreal: { city: "Montreal", country: "Canada" },
  calgary: { city: "Calgary", country: "Canada" },
  paris: { city: "Paris", country: "France" },
  berlin: { city: "Berlin", country: "Germany" },
  madrid: { city: "Madrid", country: "Spain" },
  lisbon: { city: "Lisbon", country: "Portugal" },
  amsterdam: { city: "Amsterdam", country: "Netherlands" },
  auckland: { city: "Auckland", country: "New Zealand" },
};

export function generateStaticParams() {
  return Object.keys(cityPages).map((city) => ({ city }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const page = cityPages[params.city];
  if (!page) return {};

  const place = page.state ? `${page.city}, ${page.state}` : page.city;
  return {
    title: `BJJ Academies in ${place} - Brazilian Jiu-Jitsu Classes | AIBJJ`,
    description: `Find Brazilian jiu-jitsu academies, BJJ classes, grappling gyms, and open mats in ${place}. Compare ratings and start training with AIBJJ.`,
    alternates: { canonical: `https://aibjj.com/bjj-academies/${params.city}` },
    openGraph: {
      title: `BJJ Academies in ${place}`,
      description: `Find BJJ schools and jiu-jitsu classes in ${place}.`,
      url: `https://aibjj.com/bjj-academies/${params.city}`,
    },
  };
}

export default async function CityAcademiesPage({ params }: { params: { city: string } }) {
  const page = cityPages[params.city];
  if (!page) notFound();

  const place = page.state ? `${page.city}, ${page.state}` : page.city;
  const { data: academies } = await supabase
    .from("Academy")
    .select("id, name, slug, city, country, rating, review_count, address")
    .ilike("city", `%${page.city}%`)
    .order("rating", { ascending: false })
    .limit(50);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `BJJ academies in ${place}`,
    url: `https://aibjj.com/bjj-academies/${params.city}`,
    numberOfItems: academies?.length ?? 0,
    itemListElement: (academies || []).slice(0, 10).map((academy, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SportsActivityLocation",
        name: academy.name,
        url: `https://aibjj.com/academies/${academy.slug}`,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="mx-auto max-w-5xl px-4 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
          BJJ Academy Guide
        </p>
        <h1 className="text-4xl font-black md:text-5xl">BJJ Academies in {place}</h1>
        <p className="mt-4 max-w-3xl text-lg text-zinc-400">
          Compare Brazilian jiu-jitsu schools, grappling gyms, and training options in {place}.
          Use the directory below to find a room, then use AIBJJ to build your training plan.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {(academies || []).map((academy) => (
            <Link
              key={academy.id}
              href={`/academies/${academy.slug}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-red-600/50"
            >
              <h2 className="truncate text-lg font-bold text-white">{academy.name}</h2>
              <p className="mt-1 text-sm text-zinc-500">
                {academy.address || `${academy.city}, ${academy.country}`}
              </p>
              {academy.rating ? (
                <p className="mt-3 text-sm text-zinc-400">
                  <span className="text-yellow-400">★</span> {Number(academy.rating).toFixed(1)}
                  {academy.review_count ? ` (${academy.review_count.toLocaleString()} reviews)` : ""}
                </p>
              ) : null}
            </Link>
          ))}
        </div>

        {(academies || []).length === 0 ? (
          <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-xl font-bold">No listed academies yet for {place}</h2>
            <p className="mt-2 text-zinc-400">
              The city page is ready for search, and the academy directory will populate as new listings are added.
              You can still use AIBJJ to build a beginner plan before your first class.
            </p>
          </div>
        ) : null}

        <div className="mt-12 rounded-xl border border-red-900/40 bg-red-950/20 p-6">
          <h2 className="text-2xl font-bold">Train smarter after you find a gym</h2>
          <p className="mt-2 text-zinc-300">
            Log classes, ask the AI coach questions, and build a game plan around the positions you actually hit in training.
          </p>
          <Link
            href="/auth/signup"
            className="mt-5 inline-block rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
          >
            Start Free
          </Link>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8">
          <h2 className="text-xl font-bold">More BJJ resources</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            <Link href="/academies" className="rounded-lg border border-zinc-800 p-3 text-sm text-zinc-300 hover:text-white">
              All Academies
            </Link>
            <Link href="/bjj-for-beginners" className="rounded-lg border border-zinc-800 p-3 text-sm text-zinc-300 hover:text-white">
              Beginner Guide
            </Link>
            <Link href="/bjj-techniques" className="rounded-lg border border-zinc-800 p-3 text-sm text-zinc-300 hover:text-white">
              Techniques
            </Link>
            <Link href="/pricing" className="rounded-lg border border-zinc-800 p-3 text-sm text-zinc-300 hover:text-white">
              Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
