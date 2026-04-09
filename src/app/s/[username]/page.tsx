import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getTemplate } from "@/lib/creator-templates";
import { BJJ_FANATICS_CREATORS } from "@/lib/bjj-fanatics-creators";
import { ShoppingCart, Play, Star, BookOpen, MapPin, Mail, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;

  const dbUser = await prisma.user.findUnique({
    where: { username },
    select: { name: true, bio: true, belt: true },
  });

  const prebuilt = !dbUser
    ? BJJ_FANATICS_CREATORS.find((c) => c.username === username)
    : null;

  const name = dbUser?.name || prebuilt?.name || username;
  const belt = dbUser?.belt || prebuilt?.belt || 'Black Belt';
  const bio = dbUser?.bio || prebuilt?.bio || `BJJ instructionals and content by ${name}.`;

  return {
    title: `${name} — BJJ Instructionals`,
    description: `${name} (${belt}) on AIBJJ. ${bio?.slice(0, 120) ?? ''}`,
    openGraph: {
      title: `${name} | AIBJJ Creator`,
      description: `${name} (${belt}) on AIBJJ. Browse instructionals, game plans, and more.`,
      url: `https://aibjj.com/s/${username}`,
    },
  };
}

async function getCreatorData(username: string) {
  // Try real DB user first
  const dbUser = await prisma.user.findUnique({
    where: { username },
    include: {
      courses: {
        where: { published: true },
        include: {
          lessons: { select: { id: true, duration: true } },
          reviews: { select: { rating: true } },
          purchases: { select: { id: true } },
        },
        orderBy: { createdAt: "desc" },
      },
      blogPosts: {
        where: { published: true },
        orderBy: { publishedAt: "desc" },
        take: 3,
        select: { id: true, title: true, slug: true, excerpt: true, publishedAt: true, coverImage: true },
      },
    },
  });

  if (dbUser) {
    return {
      source: "db" as const,
      name: dbUser.name || username,
      email: dbUser.email,
      academyName: dbUser.academyName,
      bio: dbUser.bio,
      belt: dbUser.belt,
      templateId: dbUser.templateId,
      profilePhoto: dbUser.profilePhoto,
      academyLogo: dbUser.academyLogo,
      socialInstagram: dbUser.socialInstagram,
      socialYoutube: dbUser.socialYoutube,
      socialTwitter: dbUser.socialTwitter,
      verified: dbUser.verified,
      courses: dbUser.courses.map((c) => ({
        id: c.id,
        title: c.title,
        slug: c.slug,
        description: c.description,
        price: c.price,
        coverImage: c.coverImage,
        category: c.category,
        beltLevel: c.beltLevel,
        lessonCount: c.lessons.length,
        totalDuration: c.lessons.reduce((sum, l) => sum + (l.duration || 0), 0),
        avgRating:
          c.reviews.length > 0
            ? c.reviews.reduce((sum, r) => sum + r.rating, 0) / c.reviews.length
            : 0,
        studentCount: c.purchases.length,
      })),
      blogPosts: dbUser.blogPosts,
    };
  }

  // Check pre-built creators
  const prebuilt = BJJ_FANATICS_CREATORS.find((c) => c.username === username);
  if (prebuilt) {
    return {
      source: "prebuilt" as const,
      name: prebuilt.name,
      academyName: null,
      bio: prebuilt.bio,
      belt: prebuilt.belt,
      templateId: prebuilt.templateId,
      profilePhoto: null,
      academyLogo: null,
      socialInstagram: prebuilt.socialInstagram || null,
      socialYoutube: prebuilt.socialYoutube || null,
      socialTwitter: prebuilt.socialTwitter || null,
      email: null,
      verified: false,
      courses: [] as Array<{
        id: string;
        title: string;
        slug: string;
        description: string | null;
        price: number;
        coverImage: string | null;
        category: string | null;
        beltLevel: string | null;
        lessonCount: number;
        totalDuration: number;
        avgRating: number;
        studentCount: number;
      }>,
      blogPosts: [] as Array<{
        id: string;
        title: string;
        slug: string;
        excerpt: string | null;
        publishedAt: Date | null;
        coverImage: string | null;
      }>,
      specialties: prebuilt.specialties,
    };
  }

  return null;
}

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function BeltBadge({ belt }: { belt: string }) {
  const colors: Record<string, string> = {
    WHITE: "bg-white text-black border border-gray-300",
    BLUE: "bg-blue-600 text-white",
    PURPLE: "bg-purple-700 text-white",
    BROWN: "bg-amber-800 text-white",
    BLACK: "bg-black text-white border border-zinc-600",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[belt] || colors.WHITE}`}>
      {belt.charAt(0) + belt.slice(1).toLowerCase()} Belt
    </span>
  );
}

export default async function CreatorPage({ params }: Props) {
  const { username } = await params;
  const creator = await getCreatorData(username);

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

  return (
    <>
      {/* Creator Nav */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b ${navBg}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            {creator.academyLogo ? (
              <img src={creator.academyLogo} alt="" className="h-8 w-8 rounded-lg object-cover" />
            ) : (
              <div className={`h-8 w-8 rounded-lg ${accentBg} flex items-center justify-center text-sm font-bold`}>
                {creator.name.charAt(0)}
              </div>
            )}
            <span className="text-lg font-bold tracking-tight">
              {creator.academyName || creator.name}
            </span>
            {creator.verified && (
              <svg className={`h-5 w-5 ${accentText}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a href={`/s/${username}/blog`} className={`text-sm font-medium ${accentText} hover:opacity-80`}>
              Blog
            </a>
            {creator.socialInstagram && (
              <a href={`https://instagram.com/${creator.socialInstagram}`} target="_blank" rel="noopener noreferrer" className={`${mutedText} hover:opacity-80 text-sm font-medium`} title="Instagram">
                📸 Instagram
              </a>
            )}
            {creator.socialYoutube && (
              <a href={`https://youtube.com/@${creator.socialYoutube}`} target="_blank" rel="noopener noreferrer" className={`${mutedText} hover:opacity-80 text-sm font-medium`} title="YouTube">
                ▶️ YouTube
              </a>
            )}
            {creator.socialTwitter && (
              <a href={`https://x.com/${creator.socialTwitter}`} target="_blank" rel="noopener noreferrer" className={`${mutedText} hover:opacity-80 text-sm font-medium`} title="X / Twitter">
                𝕏 Twitter
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className={`relative overflow-hidden ${template.bgColorSecondary}`}>
        <div className="pointer-events-none absolute inset-0">
          {isBold && <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-yellow-500/10 blur-[120px]" />}
          {!isLight && !isBold && <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-red-600/10 blur-[120px]" />}
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-col items-center text-center gap-6">
            {creator.profilePhoto ? (
              <img src={creator.profilePhoto} alt={creator.name} className="h-28 w-28 rounded-full object-cover ring-4 ring-white/10" />
            ) : (
              <div className={`h-28 w-28 rounded-full ${accentBg} flex items-center justify-center text-4xl font-bold`}>
                {creator.name.charAt(0)}
              </div>
            )}

            <div>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                {creator.name}
              </h1>
              <div className="mt-3 flex items-center justify-center gap-3">
                <BeltBadge belt={creator.belt} />
                {creator.source === "prebuilt" && (
                  <span className={`text-xs ${mutedText}`}>Profile pending claim</span>
                )}
              </div>
            </div>

            <p className={`max-w-2xl text-lg leading-relaxed ${mutedText}`}>
              {creator.bio}
            </p>

            {"specialties" in creator && creator.specialties && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                {creator.specialties.map((s: string) => (
                  <span key={s} className={`px-3 py-1 rounded-full text-sm font-medium ${isLight ? "bg-gray-100 text-zinc-700" : isBold ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" : "bg-zinc-800 text-zinc-300"}`}>
                    {s}
                  </span>
                ))}
              </div>
            )}

            {/* Academy Info */}
            {creator.academyName && (
              <div className={`flex flex-col items-center gap-2 rounded-xl border px-6 py-4 ${isLight ? "border-gray-200 bg-gray-50" : "border-zinc-800 bg-zinc-900/60"}`}>
                <p className={`text-sm font-semibold ${accentText}`}>{creator.academyName}</p>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(creator.academyName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-sm ${mutedText} hover:opacity-80`}
                >
                  <MapPin className="h-4 w-4" />
                  Find us on Google Maps
                </a>
              </div>
            )}

            {/* Contact + Stats */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {creator.email && (
                <a
                  href={`mailto:${creator.email}`}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${isLight ? "border-gray-200 hover:bg-gray-50 text-zinc-700" : "border-zinc-700 hover:bg-zinc-800 text-zinc-300"}`}
                >
                  <Mail className="h-4 w-4" />
                  Message Creator
                </a>
              )}
              {creator.socialInstagram && (
                <a href={`https://instagram.com/${creator.socialInstagram}`} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${isLight ? "border-gray-200 hover:bg-gray-50 text-zinc-700" : "border-zinc-700 hover:bg-zinc-800 text-zinc-300"}`}>
                  📸 Instagram
                </a>
              )}
              {creator.socialYoutube && (
                <a href={`https://youtube.com/@${creator.socialYoutube}`} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${isLight ? "border-gray-200 hover:bg-gray-50 text-zinc-700" : "border-zinc-700 hover:bg-zinc-800 text-zinc-300"}`}>
                  ▶️ YouTube
                </a>
              )}
            </div>

            {creator.courses.length > 0 && (
              <div className="flex items-center gap-6 mt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold">{creator.courses.length}</div>
                  <div className={`text-sm ${mutedText}`}>Courses</div>
                </div>
                <div className={`w-px h-8 ${isLight ? "bg-gray-200" : "bg-zinc-800"}`} />
                <div className="text-center">
                  <div className="text-2xl font-bold">{creator.courses.reduce((s, c) => s + c.studentCount, 0)}</div>
                  <div className={`text-sm ${mutedText}`}>Students</div>
                </div>
                <div className={`w-px h-8 ${isLight ? "bg-gray-200" : "bg-zinc-800"}`} />
                <div className="text-center">
                  <div className="text-2xl font-bold">{creator.courses.reduce((s, c) => s + c.lessonCount, 0)}</div>
                  <div className={`text-sm ${mutedText}`}>Lessons</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {creator.courses.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold mb-8">Courses</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {creator.courses.map((course) => (
                <div key={course.id} className={`rounded-xl overflow-hidden ${cardBg} ${cardBorder} transition-transform hover:scale-[1.02]`}>
                  {/* Cover */}
                  <div className={`aspect-video ${isLight ? "bg-gray-100" : "bg-zinc-800"} flex items-center justify-center`}>
                    {course.coverImage ? (
                      <img src={course.coverImage} alt={course.title} className="h-full w-full object-cover" />
                    ) : (
                      <Play className={`h-12 w-12 ${mutedText}`} />
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg leading-tight">{course.title}</h3>

                    {course.description && (
                      <p className={`text-sm ${mutedText} line-clamp-2`}>{course.description}</p>
                    )}

                    <div className={`flex items-center gap-3 text-sm ${mutedText}`}>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        {course.lessonCount} lessons
                      </span>
                      {course.totalDuration > 0 && (
                        <span>{formatDuration(course.totalDuration)}</span>
                      )}
                      {course.avgRating > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                          {course.avgRating.toFixed(1)}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-black">
                        {course.price === 0 ? "Free" : `$${course.price}`}
                      </span>
                      <Link
                        href={course.price === 0
                          ? `/dashboard/courses/${course.id}`
                          : `/checkout/${course.id}`}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${accentBg} inline-flex items-center`}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1.5" />
                        {course.price === 0 ? "Enroll Free" : "Buy Now"}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className={`mx-auto h-20 w-20 rounded-full ${isLight ? "bg-gray-100" : "bg-zinc-800"} flex items-center justify-center mb-6`}>
              <BookOpen className={`h-10 w-10 ${mutedText}`} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Courses Coming Soon</h2>
            <p className={`${mutedText} max-w-md mx-auto`}>
              {creator.name} is preparing their courses. Check back soon for world-class BJJ instruction.
            </p>
          </div>
        )}
      </section>

      {/* Blog Posts */}
      {"blogPosts" in creator && creator.blogPosts && creator.blogPosts.length > 0 && (
        <section className={`border-t ${isLight ? "border-gray-200" : "border-zinc-800"} mx-auto max-w-6xl px-4 py-16 sm:px-6`}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Latest Posts</h2>
            <Link href={`/s/${username}/blog`} className={`text-sm font-medium ${accentText} hover:opacity-80`}>
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creator.blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/s/${username}/blog/${post.slug}`}
                className={`rounded-xl overflow-hidden ${cardBg} ${cardBorder} transition-transform hover:scale-[1.02] block`}
              >
                {post.coverImage && (
                  <div className="aspect-video overflow-hidden">
                    <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold leading-snug mb-2">{post.title}</h3>
                  {post.excerpt && (
                    <p className={`text-sm ${mutedText} line-clamp-2`}>{post.excerpt}</p>
                  )}
                  {post.publishedAt && (
                    <p className={`text-xs ${mutedText} mt-3`}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short", day: "numeric", year: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className={`border-t ${isLight ? "border-gray-200 bg-gray-50" : isBold ? "border-yellow-500/10 bg-black" : "border-zinc-800 bg-[#0a0a0a]"}`}>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${mutedText}`}>
            &copy; {new Date().getFullYear()} {creator.academyName || creator.name}. All rights reserved.
          </p>
          <p className={`text-xs ${mutedText}`}>
            Powered by <a href="https://aibjj.com" className={`${accentText} hover:underline font-medium`}>AIBJJ</a> — 15% platform fee, keep 85% of your sales
          </p>
        </div>
      </footer>
    </>
  );
}
