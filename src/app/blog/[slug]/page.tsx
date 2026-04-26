import { db as prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  try {
    return await prisma.blogPost.findFirst({
      where: { slug, published: true },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        excerpt: true,
        coverImage: true,
        keywords: true,
        publishedAt: true,
        createdAt: true,
        user: {
          select: { name: true, username: true, belt: true, profilePhoto: true },
        },
      },
    });
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found | AIBJJ" };

  const keywords = post.keywords
    ? post.keywords.split(",").map((k: string) => k.trim())
    : ["bjj", "brazilian jiu jitsu"];

  return {
    title: post.title,
    description: post.excerpt || post.content.slice(0, 160),
    keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.content.slice(0, 160),
      url: `https://aibjj.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      authors: [post.user.name || "AIBJJ"],
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
    },
    alternates: {
      canonical: `https://aibjj.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.content.slice(0, 160),
    url: `https://aibjj.com/blog/${post.slug}`,
    datePublished: post.publishedAt?.toISOString() || post.createdAt.toISOString(),
    author: {
      "@type": "Person",
      name: post.user.name,
      url: `https://aibjj.com/s/${post.user.username}`,
    },
    publisher: {
      "@type": "Organization",
      name: "AIBJJ",
      url: "https://aibjj.com",
      logo: "https://aibjj.com/og-image.jpg",
    },
    ...(post.coverImage ? { image: post.coverImage } : {}),
    mainEntityOfPage: `https://aibjj.com/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "AIBJJ", item: "https://aibjj.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://aibjj.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://aibjj.com/blog/${post.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition">AIBJJ</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-zinc-300">{post.title}</span>
        </nav>

        {post.coverImage && (
          <img src={post.coverImage} alt={post.title}
            className="w-full rounded-xl mb-8 max-h-96 object-cover" />
        )}

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span>By <Link href={`/s/${post.user.username}`} className="text-zinc-300 hover:text-white transition font-medium">{post.user.name}</Link></span>
            {post.user.belt && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                {post.user.belt} Belt
              </span>
            )}
            {post.publishedAt && (
              <time dateTime={post.publishedAt.toISOString()}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
            )}
          </div>
        </header>

        <div className="prose prose-invert prose-zinc prose-lg max-w-none
          prose-headings:font-black prose-h2:text-2xl prose-h3:text-xl
          prose-a:text-red-400 prose-a:no-underline hover:prose-a:text-red-300
          prose-img:rounded-xl prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Keywords as tags */}
        {post.keywords && (
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-zinc-800">
            {post.keywords.split(",").map((kw: string, i: number) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                {kw.trim()}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-6 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
          <h2 className="text-xl font-bold mb-2">Train smarter with AI</h2>
          <p className="text-zinc-400 mb-4">Get personalized coaching, build game plans, and track your progress.</p>
          <Link href="/auth/signup"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Start Free
          </Link>
        </div>
      </article>

      {/* Related links */}
      <section className="max-w-3xl mx-auto px-4 py-12 border-t border-zinc-800">
        <h2 className="text-xl font-bold mb-4">Keep Reading</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <Link href="/blog" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">All Articles</Link>
          <Link href="/bjj-techniques" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Technique Library</Link>
          <Link href="/bjj" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">BJJ Encyclopedia</Link>
          <Link href="/academies" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Find Academies</Link>
          <Link href="/bjj-for-beginners" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Beginner Guide</Link>
          <Link href="/pricing" className="text-zinc-400 hover:text-white transition p-3 rounded-lg border border-zinc-800 hover:border-zinc-700">Start Training</Link>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/blog">Blog</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  );
}
