import { db as prisma } from "@/lib/db";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BJJ Blog — Technique Guides, Training Tips & Competition Analysis",
  description:
    "The best BJJ blog on the internet. Technique breakdowns, competition analysis, training tips, injury prevention, and expert guides written by black belts and experienced grapplers.",
  keywords: [
    "bjj blog",
    "brazilian jiu jitsu blog",
    "bjj articles",
    "bjj training tips",
    "bjj technique guides",
    "grappling blog",
    "jiu jitsu blog",
    "bjj competition analysis",
    "bjj news",
  ],
  openGraph: {
    title: "BJJ Blog — Technique Guides, Training Tips & Competition Analysis",
    description:
      "Technique breakdowns, competition analysis, and training guides from the BJJ community.",
    url: "https://aibjj.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://aibjj.com/blog",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "AIBJJ BJJ Blog",
  description:
    "Brazilian Jiu-Jitsu articles, technique breakdowns, competition analysis, and training guides written by experienced grapplers.",
  url: "https://aibjj.com/blog",
  publisher: {
    "@type": "Organization",
    name: "AIBJJ",
    url: "https://aibjj.com",
    logo: "https://aibjj.com/og-image.jpg",
  },
};

async function getPublishedPosts() {
  try {
    return await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        keywords: true,
        publishedAt: true,
        user: {
          select: { name: true, username: true, belt: true },
        },
      },
      take: 100,
    });
  } catch {
    return [];
  }
}

function beltBadge(belt: string | null) {
  const b = belt?.toLowerCase() || "white";
  const colors: Record<string, string> = {
    black: "bg-zinc-800 text-white border border-zinc-600",
    brown: "bg-amber-900 text-amber-100",
    purple: "bg-purple-800 text-purple-100",
    blue: "bg-blue-700 text-blue-100",
    white: "bg-zinc-200 text-zinc-800",
  };
  return colors[b] || colors.white;
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="max-w-5xl mx-auto px-4 pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-black mb-4">BJJ Blog</h1>
        <p className="text-xl text-zinc-400 mb-4 max-w-2xl">
          Technique breakdowns, training tips, competition analysis, and expert
          guides — written by grapplers who actually train.
        </p>
      </section>

      {posts.length > 0 ? (
        <section className="max-w-5xl mx-auto px-4 pb-16">
          {/* Featured post */}
          {posts[0] && (
            <article className="mb-10 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition group">
              <Link href={`/blog/${posts[0].slug}`}>
                {posts[0].coverImage && (
                  <img src={posts[0].coverImage} alt={posts[0].title}
                    className="w-full h-64 object-cover group-hover:opacity-90 transition" loading="eager" />
                )}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${beltBadge(posts[0].user.belt)}`}>
                      {posts[0].user.belt || "White"} Belt
                    </span>
                    <span className="text-sm text-zinc-500">{posts[0].user.name}</span>
                    {posts[0].publishedAt && (
                      <time className="text-sm text-zinc-600" dateTime={new Date(posts[0].publishedAt).toISOString()}>
                        {new Date(posts[0].publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </time>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black mb-3 text-white group-hover:text-red-400 transition">
                    {posts[0].title}
                  </h2>
                  {posts[0].excerpt && (
                    <p className="text-zinc-400 text-lg line-clamp-3">{posts[0].excerpt}</p>
                  )}
                </div>
              </Link>
            </article>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id}
                className="border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition group">
                <Link href={`/blog/${post.slug}`}>
                  {post.coverImage && (
                    <img src={post.coverImage} alt={post.title}
                      className="w-full h-40 object-cover group-hover:opacity-90 transition" loading="lazy" />
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${beltBadge(post.user.belt)}`}>
                        {post.user.belt || "White"}
                      </span>
                      <span className="text-xs text-zinc-500">{post.user.name}</span>
                    </div>
                    <h2 className="text-lg font-bold mb-2 text-white group-hover:text-red-400 transition line-clamp-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-zinc-400 text-sm line-clamp-3">{post.excerpt}</p>
                    )}
                    {post.publishedAt && (
                      <time className="block mt-3 text-xs text-zinc-600" dateTime={new Date(post.publishedAt).toISOString()}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </time>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <p className="text-zinc-500 text-lg mb-8">
            Fresh content coming soon. In the meantime, explore our technique library.
          </p>
        </section>
      )}

      {/* SEO internal links */}
      <section className="max-w-5xl mx-auto px-4 py-12 border-t border-zinc-800">
        <h2 className="text-2xl font-bold mb-6">Popular Technique Guides</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <Link href="/bjj-armbar" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Armbar Complete Guide</Link>
          <Link href="/bjj-rear-naked-choke" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Rear Naked Choke</Link>
          <Link href="/bjj-guard-passing" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Guard Passing</Link>
          <Link href="/bjj-half-guard" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Half Guard</Link>
          <Link href="/bjj-leg-locks" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Leg Locks</Link>
          <Link href="/bjj-closed-guard" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Closed Guard</Link>
          <Link href="/bjj-takedowns" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Takedowns</Link>
          <Link href="/bjj-triangle-choke" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Triangle Choke</Link>
          <Link href="/bjj-kimura" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Kimura</Link>
          <Link href="/bjj-mount" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Mount Position</Link>
          <Link href="/bjj-side-control" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Side Control</Link>
          <Link href="/bjj-back-control" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Back Control</Link>
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-12">BJJ Athletes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <Link href="/bjj/gordon-ryan" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Gordon Ryan</Link>
          <Link href="/bjj/marcelo-garcia" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Marcelo Garcia</Link>
          <Link href="/bjj/roger-gracie" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Roger Gracie</Link>
          <Link href="/bjj/john-danaher" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">John Danaher</Link>
          <Link href="/bjj/mikey-musumeci" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Mikey Musumeci</Link>
          <Link href="/bjj/craig-jones" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Craig Jones</Link>
          <Link href="/bjj/helio-gracie" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Helio Gracie</Link>
          <Link href="/bjj/rickson-gracie" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Rickson Gracie</Link>
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-12">More Resources</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <Link href="/bjj-for-beginners" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">BJJ for Beginners</Link>
          <Link href="/bjj-competition" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Competition Prep</Link>
          <Link href="/bjj-belt-system" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Belt System</Link>
          <Link href="/bjj-gi-vs-no-gi" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Gi vs No-Gi</Link>
          <Link href="/bjj-strength-training" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Strength Training</Link>
          <Link href="/bjj-injury-prevention" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Injury Prevention</Link>
          <Link href="/academies" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Find Academies</Link>
          <Link href="/pricing" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Start Training Free</Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 text-center border-t border-zinc-800">
        <h2 className="text-2xl font-black mb-3">Write for AIBJJ</h2>
        <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
          Share your BJJ knowledge with the community. AI-powered blog tools, 85-92% revenue on courses. Free to start.
        </p>
        <Link href="/sell-bjj-instructionals"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Become a Creator
        </Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/bjj-techniques">Techniques</Link> · <Link href="/academies">Academies</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  );
}
