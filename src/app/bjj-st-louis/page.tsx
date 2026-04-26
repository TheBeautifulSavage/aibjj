import { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "BJJ in St. Louis — Best Brazilian Jiu-Jitsu Academies & Classes | AIBJJ",
  description: "Find the best Brazilian jiu-jitsu academies and classes in St. Louis, MO. Compare ratings, read reviews, and start training BJJ today. Complete directory of St. Louis BJJ schools.",
  keywords: ["bjj st louis", "brazilian jiu jitsu st louis", "bjj classes st louis", "bjj academies st louis", "jiu jitsu st louis"],
  openGraph: {
    title: "BJJ in St. Louis — Best Academies & Classes",
    description: "Find the best BJJ academies in St. Louis, MO. Ratings, reviews, and directions.",
    url: "https://aibjj.com/bjj-st-louis",
  },
  alternates: {
    canonical: "https://aibjj.com/bjj-st-louis",
  },
};

export default async function BJJStLouisPage() {
  const { data: academies } = await supabase
    .from("Academy")
    .select("id, name, slug, city, country, rating, review_count, address")
    .ilike("city", "%St. Louis%")
    .order("rating", { ascending: false })
    .limit(50);

  const count = academies?.length || 0;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BJJ Academies in St. Louis",
    description: "Brazilian jiu-jitsu schools and academies in St. Louis, MO",
    url: "https://aibjj.com/bjj-st-louis",
    numberOfItems: count,
    itemListElement: (academies || []).slice(0, 10).map((a: any, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SportsActivityLocation",
        name: a.name,
        url: `https://aibjj.com/academies/${a.slug}`,
        address: { "@type": "PostalAddress", addressLocality: "St. Louis", addressCountry: "US" },
        ...(a.rating ? { aggregateRating: { "@type": "AggregateRating", ratingValue: a.rating, reviewCount: a.review_count } } : {}),
      },
    })),
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-4">BJJ in St. Louis</h1>
        <p className="text-xl text-zinc-400 mb-8">
          Find the best Brazilian jiu-jitsu academies and classes in St. Louis, MO.
          {count > 0 ? ` ${count}+ academies listed with ratings and reviews.` : ""}
        </p>

        {count > 0 ? (
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {(academies || []).map((academy: any) => (
              <Link key={academy.id} href={`/academies/${academy.slug}`}
                className="border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition group">
                <h2 className="text-lg font-bold text-white group-hover:text-red-400 transition truncate">
                  {academy.name}
                </h2>
                <p className="text-sm text-zinc-500 mt-1">{academy.address || `${academy.city}, ${academy.country}`}</p>
                {academy.rating && (
                  <p className="text-sm text-zinc-400 mt-2">
                    <span className="text-yellow-400">★</span> {Number(academy.rating).toFixed(1)} ({academy.review_count} reviews)
                  </p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-zinc-500 mb-12">No academies listed yet for St. Louis. Know one? Let us know.</p>
        )}

        <div className="border-t border-zinc-800 pt-12">
          <h2 className="text-2xl font-bold mb-4">About BJJ in St. Louis</h2>
          <p className="text-zinc-400 mb-6">
            Brazilian jiu-jitsu is one of the fastest growing martial arts in St. Louis, MO.
            Whether you are a complete beginner looking for your first class or an experienced
            competitor searching for a new training home, AIBJJ helps you find the right academy.
            Compare ratings, check reviews, and use our AI coach to accelerate your training.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Start Training BJJ</h2>
          <p className="text-zinc-400 mb-6">
            New to jiu-jitsu? AIBJJ gives you everything you need: an AI coach that answers
            your questions, a training journal to track progress, and a technique library with
            hundreds of breakdowns. Start free today.
          </p>
          <Link href="/auth/signup"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Start Training Free
          </Link>
        </div>

        <div className="border-t border-zinc-800 pt-12 mt-12">
          <h2 className="text-xl font-bold mb-4">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <Link href="/academies" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800">All Academies</Link>
            <Link href="/bjj-for-beginners" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800">Beginner Guide</Link>
            <Link href="/bjj-techniques" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800">Techniques</Link>
            <Link href="/pricing" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800">Pricing</Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/academies">Academies</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  );
}
