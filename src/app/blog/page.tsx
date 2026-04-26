import { db as prisma } from "@/lib/db";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BJJ Blog — Brazilian Jiu-Jitsu Articles, Guides & Training Tips | AIBJJ",
  description:
    "Read the latest Brazilian Jiu-Jitsu articles, technique breakdowns, competition analysis, training tips, and expert guides from the AIBJJ community. Written by black belts and experienced grapplers.",
  keywords: [
    "bjj blog",
    "brazilian jiu jitsu articles",
    "bjj training tips",
    "bjj technique guides",
    "grappling blog",
    "jiu jitsu news",
    "bjj competition analysis",
  ],
  openGraph: {
    title: "BJJ Blog — Articles, Guides & Training Tips | AIBJJ",
    description:
      "The latest BJJ articles, technique breakdowns, and training guides from the AIBJJ community.",
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
  name: "AIBJJ Blog",
  description:
    "Brazilian Jiu-Jitsu articles, technique breakdowns, competition analysis, and training guides.",
  url: "https://aibjj.com/blog",
  publisher: {
    "@type": "Organization",
    name: "AIBJJ",
    url: "https://aibjj.com",
  },
};

async function getPublishedPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
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
          select: {
            name: true,
            username: true,
            belt: true,
            profilePhoto: true,
          },
        },
      },
      take: 50,
    });
    return posts;
  } catch {
    return [];
  }
}

function beltColor(belt: string | null) {
  switch (belt?.toLowerCase()) {
    case "black": return "bg-zinc-900 text-white border border-zinc-700";
    case "brown": return "bg-amber-900 text-amber-100";
    case "purple": return "bg-purple-800 text-purple-100";
    case "blue": return "bg-blue-700 text-blue-100";
    default: return "bg-zinc-200 text-zinc-800";
  }
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          BJJ Blog
        </h1>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
          Technique breakdowns, training tips, competition analysis, and expert
          guides — written by real grapplers.
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg mb-6">
              No articles published yet. Be the first to contribute.
            </p>
            <Link
              href="/auth/signup"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Become a Creator
            </Link>

            {/* Internal links for SEO even when no posts exist */}
            <div className="mt-16 border-t border-zinc-800 pt-12">
              <h2 className="text-2xl font-bold mb-6">
                Explore BJJ Content
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link href="/bjj-techniques" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Technique Library</Link>
                <Link href="/bjj-armbar" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Armbar Guide</Link>
                <Link href="/bjj-closed-guard" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Closed Guard</Link>
                <Link href="/bjj-half-guard" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Half Guard</Link>
                <Link href="/bjj-leg-locks" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Leg Locks</Link>
                <Link href="/bjj-guard-passing" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Guard Passing</Link>
                <Link href="/bjj-takedowns" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Takedowns</Link>
                <Link href="/bjj-for-beginners" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Beginner Guide</Link>
                <Link href="/bjj/gordon-ryan" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Gordon Ryan</Link>
                <Link href="/bjj/marcelo-garcia" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Marcelo Garcia</Link>
                <Link href="/bjj-competition" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Competition Prep</Link>
                <Link href="/academies" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Find Academies</Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Featured / latest post */}
            {posts[0] && (
              <article className="mb-12 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition">
                <Link href={`/s/${posts[0].user.username}/blog/${posts[0].slug}`}>
                  {posts[0].coverImage && (
                    <img
                      src={posts[0].coverImage}
                      alt={posts[0].title}
                      className="w-full h-64 object-cover"
                      loading="eager"
                    />
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${beltColor(posts[0].user.belt)}`}>
                        {posts[0].user.belt || "White"} Belt
                      </span>
                      <span className="text-sm text-zinc-500">
                        {posts[0].user.name}
                      </span>
                      {posts[0].publishedAt && (
                        <time className="text-sm text-zinc-600" dateTime={new Date(posts[0].publishedAt).toISOString()}>
                          {new Date(posts[0].publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </time>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black mb-3 text-white">
                      {posts[0].title}
                    </h2>
                    {posts[0].excerpt && (
                      <p className="text-zinc-400 text-lg line-clamp-3">
                        {posts[0].excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              </article>
            )}

            {/* Post grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition"
                >
                  <Link href={`/s/${post.user.username}/blog/${post.slug}`}>
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-40 object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${beltColor(post.user.belt)}`}>
                          {post.user.belt || "White"}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {post.user.name}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold mb-2 text-white line-clamp-2">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-zinc-400 text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
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

            {/* Internal links for SEO */}
            <div className="mt-16 border-t border-zinc-800 pt-12">
              <h2 className="text-2xl font-bold mb-6">More BJJ Resources</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link href="/bjj-techniques" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Technique Library</Link>
                <Link href="/academies" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Find Academies</Link>
                <Link href="/bjj" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">BJJ Encyclopedia</Link>
                <Link href="/pricing" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Start Training</Link>
              </div>
            </div>
          </>
        )}
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 text-center border-t border-zinc-800">
        <h2 className="text-2xl font-black mb-3">Write for AIBJJ</h2>
        <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
          Share your BJJ knowledge. Creators keep 85-92% of course revenue and
          get their own AI-powered blog. Free to start.
        </p>
        <Link
          href="/sell-bjj-instructionals"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Become a Creator
        </Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  );
}
