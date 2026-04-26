import { Metadata } from "next";
import Link from "next/link";

// Article-tag index — add new articles here as they're created
const ALL_ARTICLES = [
  { slug: "gordon-ryan", title: "Gordon Ryan: The Greatest No-Gi Grappler", category: "athlete", tags: ["gordon-ryan", "no-gi", "leg-locks", "adcc", "b-team", "competition"] },
  { slug: "marcelo-garcia", title: "Marcelo Garcia: The Greatest Guard Player", category: "athlete", tags: ["marcelo-garcia", "guard-passing", "submissions", "adcc", "ibjjf-worlds", "gi-bjj"] },
  { slug: "roger-gracie", title: "Roger Gracie: Most Dominant BJJ Competitor Ever", category: "athlete", tags: ["roger-gracie", "gi-bjj", "ibjjf-worlds", "gracie-family", "submissions", "competition"] },
  { slug: "helio-gracie", title: "Hélio Gracie: Father of Brazilian Jiu-Jitsu", category: "athlete", tags: ["helio-gracie", "gracie-family", "bjj-history", "self-defense"] },
  { slug: "adcc", title: "ADCC: The World's Most Prestigious Grappling Tournament", category: "tournament", tags: ["adcc", "no-gi", "competition", "gordon-ryan", "marcelo-garcia", "andre-galvao"] },
  { slug: "ibjjf-world-championship", title: "IBJJF World Championship: BJJ's Biggest Stage", category: "tournament", tags: ["ibjjf-worlds", "gi-bjj", "competition", "roger-gracie", "buchecha", "leandro-lo"] },
];

const TAG_LABELS: Record<string, string> = {
  "gordon-ryan": "Gordon Ryan", "marcelo-garcia": "Marcelo Garcia", "roger-gracie": "Roger Gracie",
  "helio-gracie": "Hélio Gracie", "adcc": "ADCC", "ibjjf-worlds": "IBJJF Worlds",
  "no-gi": "No-Gi", "gi-bjj": "Gi BJJ", "leg-locks": "Leg Locks", "submissions": "Submissions",
  "gracie-family": "Gracie Family", "bjj-history": "BJJ History", "competition": "Competition",
  "self-defense": "Self-Defense", "beginners": "Beginners", "guard-passing": "Guard Passing",
  "back-control": "Back Control", "sweeps": "Sweeps", "b-team": "B-Team", "andre-galvao": "Andre Galvao",
  "buchecha": "Buchecha", "leandro-lo": "Leandro Lo",
};

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const label = TAG_LABELS[params.tag] || params.tag;
  return {
    title: `${label} — BJJ Articles | AIBJJ`,
    description: `Browse all AIBJJ articles tagged ${label}. Techniques, athletes, tournaments, and history.`,
  };
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = params.tag;
  const label = TAG_LABELS[tag] || tag;
  const articles = ALL_ARTICLES.filter(a => a.tags.includes(tag));

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<div className="mx-auto max-w-4xl px-6 py-12">
        <nav className="text-sm text-zinc-500 mb-6 flex gap-1 items-center">
          <Link href="/bjj" className="hover:text-zinc-300">BJJ Encyclopedia</Link>
          <span>›</span>
          <span className="text-zinc-300">#{tag}</span>
        </nav>
        <h1 className="text-3xl font-black">#{tag}</h1>
        <p className="mt-2 text-zinc-400">{articles.length} article{articles.length !== 1 ? "s" : ""} tagged <strong className="text-white">{label}</strong></p>

        {articles.length === 0 ? (
          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center">
            <p className="text-zinc-400">No articles yet for this tag. Check back soon — we publish weekly.</p>
            <Link href="/bjj" className="mt-3 inline-block text-red-400 hover:underline text-sm">← Back to all articles</Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {articles.map(article => (
              <Link key={article.slug} href={`/bjj/${article.slug}`}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-zinc-600 transition-colors">
                <span className="rounded-full bg-red-600/20 border border-red-700/30 px-2 py-0.5 text-[10px] font-semibold text-red-400 uppercase">{article.category}</span>
                <h2 className="mt-2 font-bold text-white group-hover:text-red-400 transition-colors">{article.title}</h2>
                <div className="mt-2 flex flex-wrap gap-1">
                  {article.tags.slice(0, 4).map(t => (
                    <span key={t} className={`rounded-full border px-2 py-0.5 text-[10px] ${t === tag ? "border-red-700/50 text-red-400" : "border-zinc-700/50 text-zinc-500"}`}>#{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-10 flex gap-3">
          <Link href="/bjj" className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500">← All Articles</Link>
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Training Free</Link>
        </div>
      </div>
    </div>
  );
}
