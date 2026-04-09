import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { data: academy } = await supabase
    .from("Academy")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!academy) return { title: "Academy Not Found | AIBJJ" };

  return {
    title: `${academy.name} — BJJ Academy in ${academy.city} | AIBJJ`,
    description: `${academy.name} is a Brazilian jiu-jitsu academy in ${academy.city}, ${academy.country}.${academy.rating ? ` Rated ${academy.rating}/5 from ${academy.review_count} reviews.` : ""} Find directions, contact info, and more.`,
    openGraph: {
      title: `${academy.name} — BJJ Academy in ${academy.city}`,
      description: `Find ${academy.name} in ${academy.city}, ${academy.country}. Brazilian jiu-jitsu training near you.`,
    },
  };
}

export default async function AcademyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: academy } = await supabase
    .from("Academy")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!academy) notFound();

  // Nearby academies (same city)
  const { data: nearby } = await supabase
    .from("Academy")
    .select("id, name, slug, city, country, rating, review_count")
    .eq("city", academy.city)
    .neq("slug", academy.slug)
    .limit(6);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black">
          <span className="text-red-600">AI</span>BJJ
        </Link>
        <Link href="/academies" className="text-sm text-zinc-400 hover:text-white">
          ← All Academies
        </Link>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-zinc-500">
          <Link href="/academies" className="hover:text-zinc-300">
            Academies
          </Link>
          {" / "}
          <Link
            href={`/academies?country=${encodeURIComponent(academy.country)}`}
            className="hover:text-zinc-300"
          >
            {academy.country}
          </Link>
          {academy.city && (
            <>
              {" / "}
              <span className="text-zinc-400">{academy.city}</span>
            </>
          )}
        </nav>

        <h1 className="text-4xl font-black">{academy.name}</h1>
        <p className="mt-2 text-lg text-zinc-400">{academy.address}</p>

        {academy.rating && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-xl font-bold">{Number(academy.rating).toFixed(1)}</span>
            <span className="text-zinc-500">
              ({academy.review_count?.toLocaleString()} reviews)
            </span>
          </div>
        )}

        {/* Details chips */}
        <div className="mt-6 flex flex-wrap gap-3">
          {academy.city && (
            <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
              📍 {academy.city}, {academy.country}
            </span>
          )}
          {academy.phone && (
            <a
              href={`tel:${academy.phone}`}
              className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:border-zinc-500"
            >
              📞 {academy.phone}
            </a>
          )}
          {academy.website && (
            <a
              href={academy.website}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:border-zinc-500"
            >
              🌐 Website
            </a>
          )}
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={academy.google_maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
          >
            View on Google Maps
          </a>
          <Link
            href="/auth/signup"
            className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
          >
            Track Your Training Here →
          </Link>
        </div>

        {/* Map embed */}
        {academy.place_id && (
          <div className="mt-10 overflow-hidden rounded-xl border border-zinc-800">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=place_id:${academy.place_id}`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}

        {/* SEO description block */}
        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-lg font-bold mb-3">About {academy.name}</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {academy.name} is a Brazilian jiu-jitsu academy located in {academy.city},{" "}
            {academy.country}.{" "}
            {academy.rating
              ? `The academy holds a ${Number(academy.rating).toFixed(1)}-star rating based on ${academy.review_count?.toLocaleString()} Google reviews.`
              : ""}{" "}
            Use AIBJJ to track your training sessions, log techniques learned, and monitor your
            progress as a student at {academy.name}.
          </p>
        </div>

        {/* Nearby academies */}
        {nearby && nearby.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">
              Other BJJ Academies in {academy.city}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {nearby.map((a) => (
                <Link
                  key={a.id}
                  href={`/academies/${a.slug}`}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-600 transition-colors"
                >
                  <h3 className="font-medium text-white truncate">{a.name}</h3>
                  <p className="text-sm text-zinc-500 mt-1">
                    {a.city}, {a.country}
                  </p>
                  {a.rating && (
                    <p className="text-sm text-zinc-400 mt-1">
                      ★ {Number(a.rating).toFixed(1)} ({a.review_count} reviews)
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
