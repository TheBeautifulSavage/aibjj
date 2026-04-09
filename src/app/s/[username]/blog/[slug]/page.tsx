import { notFound } from "next/navigation";
import { db as prisma } from "@/lib/db";
import { getTemplate } from "@/lib/creator-templates";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ username: string; slug: string }>;
}

async function getPostData(username: string, slug: string) {
  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      name: true,
      username: true,
      belt: true,
      templateId: true,
      academyName: true,
      profilePhoto: true,
      academyLogo: true,
      verified: true,
    },
  });

  if (!user) return null;

  const post = await prisma.blogPost.findFirst({
    where: { userId: user.id, slug, published: true },
  });

  if (!post) return null;

  const relatedPosts = await prisma.blogPost.findMany({
    where: { userId: user.id, published: true, id: { not: post.id } },
    orderBy: { publishedAt: "desc" },
    take: 3,
    select: { id: true, title: true, slug: true, excerpt: true, coverImage: true, publishedAt: true },
  });

  return { user, post, relatedPosts };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username, slug } = await params;
  const data = await getPostData(username, slug);
  if (!data) return {};

  return {
    title: `${data.post.title} | ${data.user.name} BJJ`,
    description: data.post.excerpt || `BJJ article by ${data.user.name}`,
    openGraph: {
      title: data.post.title,
      description: data.post.excerpt || undefined,
      images: data.post.coverImage ? [data.post.coverImage] : undefined,
      type: "article",
    },
  };
}

function BeltLabel({ belt }: { belt: string }) {
  return (
    <span className="text-xs opacity-70">
      {belt.charAt(0) + belt.slice(1).toLowerCase()} Belt
    </span>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { username, slug } = await params;
  const data = await getPostData(username, slug);

  if (!data) notFound();

  const { user, post, relatedPosts } = data;
  const template = getTemplate(user.templateId);
  const isLight = template.id === "LIGHT_CLEAN";
  const isBold = template.id === "BOLD_SPORT";

  const accentText = isBold ? "text-yellow-500" : isLight ? "text-zinc-900" : "text-red-500";
  const accentBg = isBold ? "bg-yellow-500 hover:bg-yellow-600 text-black" : isLight ? "bg-zinc-900 hover:bg-zinc-800 text-white" : "bg-red-600 hover:bg-red-700 text-white";
  const cardBorder = isLight ? "border border-gray-200" : isBold ? "border border-yellow-500/20" : "border border-zinc-800";
  const cardBg = isLight ? "bg-white" : "bg-zinc-900";
  const mutedText = isLight ? "text-zinc-500" : "text-zinc-400";
  const navBg = isLight ? "bg-white/80 border-gray-200" : isBold ? "bg-black/80 border-yellow-500/20" : "bg-[#0a0a0a]/80 border-zinc-800";
  const pageBg = isLight ? "bg-gray-50" : isBold ? "bg-black" : "bg-[#0a0a0a]";
  const headingColor = isLight ? "text-zinc-900" : "text-white";
  const bodyText = isLight ? "text-zinc-700" : "text-zinc-300";

  // Schema.org Article JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || undefined,
    image: post.coverImage || undefined,
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: {
      "@type": "Person",
      name: user.name,
    },
    publisher: {
      "@type": "Organization",
      name: "AIBJJ",
      url: "https://aibjj.com",
    },
  };

  return (
    <div className={`min-h-screen ${pageBg} ${headingColor}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b ${navBg}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            {user.academyLogo ? (
              <img src={user.academyLogo} alt="" className="h-8 w-8 rounded-lg object-cover" />
            ) : (
              <div className={`h-8 w-8 rounded-lg ${accentBg} flex items-center justify-center text-sm font-bold`}>
                {user.name?.charAt(0) || "?"}
              </div>
            )}
            <Link href={`/s/${username}`} className="text-lg font-bold tracking-tight">
              {user.academyName || user.name}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href={`/s/${username}`} className={`text-sm ${mutedText} hover:opacity-80`}>
              Courses
            </Link>
            <Link href={`/s/${username}/blog`} className={`text-sm font-medium ${accentText}`}>
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="w-full aspect-[3/1] max-h-[400px] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            <Link
              href={`/s/${username}/blog`}
              className={`inline-flex items-center gap-1.5 text-sm ${mutedText} hover:opacity-80 mb-6`}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl mb-4">
              {post.title}
            </h1>

            <div className={`flex items-center gap-3 mb-8 ${mutedText}`}>
              <div className="flex items-center gap-2">
                {user.profilePhoto ? (
                  <img src={user.profilePhoto} alt={user.name || ""} className="h-8 w-8 rounded-full object-cover" />
                ) : (
                  <div className={`h-8 w-8 rounded-full ${accentBg} flex items-center justify-center text-xs font-bold`}>
                    {user.name?.charAt(0) || "?"}
                  </div>
                )}
                <div>
                  <span className="text-sm font-medium block">{user.name}</span>
                  <BeltLabel belt={user.belt} />
                </div>
              </div>
              <span className="text-sm">·</span>
              {post.publishedAt && (
                <span className="text-sm">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
            </div>

            <div className={`leading-relaxed space-y-1 ${bodyText}`}>
              <MarkdownRenderer content={post.content} isLight={isLight} />
            </div>

            {/* CTA */}
            <div className={`mt-12 p-6 rounded-xl ${cardBg} ${cardBorder}`}>
              <h3 className="text-lg font-bold mb-2">
                Learn more from {user.name}
              </h3>
              <p className={`text-sm ${mutedText} mb-4`}>
                View their courses and take your BJJ to the next level.
              </p>
              <Link
                href={`/s/${username}`}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${accentBg}`}
              >
                View Courses
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          {relatedPosts.length > 0 && (
            <aside className="lg:w-80 flex-shrink-0">
              <h3 className="text-lg font-bold mb-4">More from {user.name}</h3>
              <div className="space-y-4">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/s/${username}/blog/${rp.slug}`}
                    className={`block rounded-lg overflow-hidden ${cardBg} ${cardBorder} transition-transform hover:scale-[1.02]`}
                  >
                    {rp.coverImage && (
                      <div className="aspect-video">
                        <img src={rp.coverImage} alt={rp.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-4">
                      <h4 className="font-semibold text-sm leading-tight line-clamp-2">{rp.title}</h4>
                      {rp.publishedAt && (
                        <p className={`text-xs ${mutedText} mt-1`}>
                          {new Date(rp.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className={`border-t ${isLight ? "border-gray-200 bg-gray-50" : isBold ? "border-yellow-500/10 bg-black" : "border-zinc-800 bg-[#0a0a0a]"}`}>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${mutedText}`}>
            &copy; {new Date().getFullYear()} {user.academyName || user.name}
          </p>
          <p className={`text-xs ${mutedText}`}>
            Powered by <a href="https://aibjj.com" className={`${accentText} hover:underline font-medium`}>AIBJJ</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function MarkdownRenderer({ content, isLight }: { content: string; isLight: boolean }) {
  const h2Class = isLight ? "text-zinc-900" : "text-zinc-100";
  const h3Class = isLight ? "text-zinc-800" : "text-zinc-200";
  const strongClass = isLight ? "text-zinc-900" : "text-zinc-100";

  const html = content
    .replace(/### (.+)/g, `<h3 class="text-lg font-semibold ${h3Class} mt-6 mb-2">$1</h3>`)
    .replace(/## (.+)/g, `<h2 class="text-xl font-bold ${h2Class} mt-8 mb-3">$1</h2>`)
    .replace(/# (.+)/g, `<h1 class="text-2xl font-bold ${h2Class} mt-8 mb-3">$1</h1>`)
    .replace(/\*\*(.+?)\*\*/g, `<strong class="${strongClass}">$1</strong>`)
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal">$1</li>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
