import { notFound } from "next/navigation";
import { db as prisma } from "@/lib/db";
import { getTemplate } from "@/lib/creator-templates";
import { BJJ_FANATICS_CREATORS } from "@/lib/bjj-fanatics-creators";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ username: string }>;
}

async function getCreatorWithPosts(username: string) {
  const dbUser = await prisma.user.findUnique({
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
      bio: true,
      socialInstagram: true,
      socialYoutube: true,
      socialTwitter: true,
      verified: true,
      blogPosts: {
        where: { published: true },
        orderBy: { publishedAt: "desc" },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          coverImage: true,
          publishedAt: true,
        },
      },
    },
  });

  if (dbUser) return { source: "db" as const, ...dbUser };

  const prebuilt = BJJ_FANATICS_CREATORS.find((c) => c.username === username);
  if (prebuilt) {
    return {
      source: "prebuilt" as const,
      id: prebuilt.username,
      name: prebuilt.name,
      username: prebuilt.username,
      belt: prebuilt.belt,
      templateId: prebuilt.templateId,
      academyName: null,
      profilePhoto: null,
      academyLogo: null,
      bio: prebuilt.bio,
      socialInstagram: prebuilt.socialInstagram || null,
      socialYoutube: prebuilt.socialYoutube || null,
      socialTwitter: prebuilt.socialTwitter || null,
      verified: false,
      blogPosts: [] as Array<{
        id: string;
        title: string;
        slug: string;
        excerpt: string | null;
        coverImage: string | null;
        publishedAt: Date | null;
      }>,
    };
  }

  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const creator = await getCreatorWithPosts(username);
  if (!creator) return {};
  return {
    title: `${creator.name} BJJ Blog | AIBJJ`,
    description: `Read the latest BJJ articles, tips, and techniques from ${creator.name}.`,
    openGraph: {
      title: `${creator.name} BJJ Blog`,
      description: `BJJ tips and techniques from ${creator.name}`,
    },
  };
}

export default async function CreatorBlogPage({ params }: Props) {
  const { username } = await params;
  const creator = await getCreatorWithPosts(username);

  if (!creator) notFound();

  const template = getTemplate(creator.templateId);
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

  return (
    <div className={`min-h-screen ${pageBg} ${headingColor}`}>
      {/* Nav */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b ${navBg}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            {creator.academyLogo ? (
              <img src={creator.academyLogo} alt="" className="h-8 w-8 rounded-lg object-cover" />
            ) : (
              <div className={`h-8 w-8 rounded-lg ${accentBg} flex items-center justify-center text-sm font-bold`}>
                {creator.name?.charAt(0) || "?"}
              </div>
            )}
            <Link href={`/s/${username}`} className="text-lg font-bold tracking-tight">
              {creator.academyName || creator.name}
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

      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Blog</h1>
        <p className={`mt-2 text-lg ${mutedText}`}>
          BJJ tips, techniques, and insights from {creator.name}
        </p>
      </section>

      {/* Posts Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        {creator.blogPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creator.blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/s/${username}/blog/${post.slug}`}
                className={`rounded-xl overflow-hidden ${cardBg} ${cardBorder} transition-transform hover:scale-[1.02] block`}
              >
                <div className={`aspect-video ${isLight ? "bg-gray-100" : "bg-zinc-800"} flex items-center justify-center`}>
                  {post.coverImage ? (
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                  ) : (
                    <BookOpen className={`h-10 w-10 ${mutedText}`} />
                  )}
                </div>
                <div className="p-5 space-y-2">
                  <h2 className="font-bold text-lg leading-tight line-clamp-2">{post.title}</h2>
                  {post.excerpt && (
                    <p className={`text-sm ${mutedText} line-clamp-2`}>{post.excerpt}</p>
                  )}
                  {post.publishedAt && (
                    <p className={`text-xs ${mutedText}`}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <BookOpen className={`h-12 w-12 ${mutedText} mx-auto mb-4`} />
            <h2 className="text-xl font-bold mb-2">No blog posts yet</h2>
            <p className={mutedText}>Check back soon for BJJ articles and insights.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className={`border-t ${isLight ? "border-gray-200 bg-gray-50" : isBold ? "border-yellow-500/10 bg-black" : "border-zinc-800 bg-[#0a0a0a]"}`}>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${mutedText}`}>
            &copy; {new Date().getFullYear()} {creator.academyName || creator.name}
          </p>
          <p className={`text-xs ${mutedText}`}>
            Powered by <a href="https://aibjj.com" className={`${accentText} hover:underline font-medium`}>AIBJJ</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
