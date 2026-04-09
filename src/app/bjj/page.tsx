import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Encyclopedia: Athletes, Tournaments, Techniques & History | AIBJJ",
  description: "The most comprehensive BJJ content library. Athletes, tournaments, techniques, history — all interlinked and searchable by topic.",
};

const ARTICLES = [
  { slug: "gordon-ryan", title: "Gordon Ryan: The Greatest No-Gi Grappler", category: "athlete", tags: ["gordon-ryan", "no-gi", "leg-locks", "adcc"] },
  { slug: "marcelo-garcia", title: "Marcelo Garcia: The Greatest Guard Player", category: "athlete", tags: ["marcelo-garcia", "adcc", "submissions"] },
  { slug: "roger-gracie", title: "Roger Gracie: Most Dominant BJJ Competitor Ever", category: "athlete", tags: ["roger-gracie", "ibjjf-worlds", "gracie-family"] },
  { slug: "helio-gracie", title: "Hélio Gracie: Father of Brazilian Jiu-Jitsu", category: "athlete", tags: ["helio-gracie", "gracie-family", "bjj-history"] },
  { slug: "adcc", title: "ADCC: The World's Most Prestigious Grappling Tournament", category: "tournament", tags: ["adcc", "no-gi", "competition"] },
  { slug: "ibjjf-world-championship", title: "IBJJF World Championship: BJJ's Biggest Stage", category: "tournament", tags: ["ibjjf-worlds", "gi-bjj", "competition"] },
];

const CATEGORIES = [
  { id: "all", label: "All", emoji: "🥋" },
  { id: "athlete", label: "Athletes", emoji: "🏆" },
  { id: "tournament", label: "Tournaments", emoji: "🎖️" },
  { id: "technique", label: "Techniques", emoji: "⚔️" },
  { id: "history", label: "History", emoji: "📚" },
  { id: "academy", label: "Academies", emoji: "🏫" },
];

const FEATURED_TAGS = [
  "gordon-ryan", "adcc", "leg-locks", "ibjjf-worlds", "marcelo-garcia",
  "gracie-family", "no-gi", "gi-bjj", "bjj-history", "competition",
  "submissions", "guard-passing", "beginners", "self-defense",
];

export default function BJJHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "BJJ Encyclopedia",
    "description": "Comprehensive BJJ content covering athletes, tournaments, techniques, and history.",
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">BJJ Encyclopedia</span>
          <h1 className="mt-2 text-4xl font-black sm:text-5xl">Everything Jiu-Jitsu</h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Athletes, tournaments, techniques, and history — the most comprehensive BJJ content library on the internet.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map(cat => (
            <Link key={cat.id} href={cat.id === "all" ? "/bjj" : `/bjj/category/${cat.id}`}
              className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 hover:border-red-600/50 hover:text-red-400 transition-colors">
              {cat.emoji} {cat.label}
            </Link>
          ))}
        </div>

        {/* Tag Cloud */}
        <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h2 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wide">Browse by Tag</h2>
          <div className="flex flex-wrap gap-2">
            {FEATURED_TAGS.map(tag => (
              <Link key={tag} href={`/bjj/tag/${tag}`}
                className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300 hover:border-red-600/50 hover:text-red-400 transition-colors">
                #{tag}
              </Link>
            ))}
            <Link href="/bjj/tags" className="rounded-full border border-red-700/30 bg-red-600/10 px-3 py-1 text-xs text-red-400 hover:text-red-300">
              View all tags →
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map(article => (
            <Link key={article.slug} href={`/bjj/${article.slug}`}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-zinc-600 transition-all hover:bg-zinc-900">
              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-full bg-red-600/20 border border-red-700/30 px-2 py-0.5 text-[10px] font-semibold text-red-400 uppercase">
                  {article.category}
                </span>
              </div>
              <h2 className="font-bold text-white group-hover:text-red-400 transition-colors leading-snug">{article.title}</h2>
              <div className="mt-3 flex flex-wrap gap-1">
                {article.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="rounded-full border border-zinc-700/50 px-2 py-0.5 text-[10px] text-zinc-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* More coming */}
        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 text-center">
          <p className="text-zinc-400 text-sm">More articles added weekly — athletes, tournaments, technique breakdowns, and BJJ history.</p>
          <Link href="/auth/signup" className="mt-3 inline-block text-sm text-red-400 hover:text-red-300">
            Get notified + track your training free →
          </Link>
        </div>

        {/* Cross-links */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <Link href="/brazilian-jiu-jitsu" className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-600 transition-colors">
            <div className="text-2xl mb-2">📖</div>
            <h3 className="font-bold text-white">Complete BJJ Guide</h3>
            <p className="text-xs text-zinc-500 mt-1">Everything about the gentle art in one place</p>
          </Link>
          <Link href="/academies" className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-600 transition-colors">
            <div className="text-2xl mb-2">🏫</div>
            <h3 className="font-bold text-white">Find an Academy</h3>
            <p className="text-xs text-zinc-500 mt-1">283+ academies worldwide</p>
          </Link>
          <Link href="/bjj-techniques" className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-600 transition-colors">
            <div className="text-2xl mb-2">⚔️</div>
            <h3 className="font-bold text-white">Technique Library</h3>
            <p className="text-xs text-zinc-500 mt-1">Every BJJ technique with breakdowns</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
