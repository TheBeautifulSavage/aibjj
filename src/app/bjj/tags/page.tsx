import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "BJJ Tags: Browse by Topic | AIBJJ",
  description: "Browse all BJJ articles by tag — athletes, tournaments, techniques, history, and more.",
};

const ALL_TAGS = [
  // Athletes
  { name: "gordon-ryan", label: "Gordon Ryan", category: "athlete", count: 1 },
  { name: "marcelo-garcia", label: "Marcelo Garcia", category: "athlete", count: 1 },
  { name: "roger-gracie", label: "Roger Gracie", category: "athlete", count: 1 },
  { name: "helio-gracie", label: "Hélio Gracie", category: "athlete", count: 1 },
  { name: "royce-gracie", label: "Royce Gracie", category: "athlete", count: 0 },
  { name: "rickson-gracie", label: "Rickson Gracie", category: "athlete", count: 0 },
  { name: "buchecha", label: "Marcus Buchecha", category: "athlete", count: 0 },
  { name: "bernardo-faria", label: "Bernardo Faria", category: "athlete", count: 0 },
  { name: "keenan-cornelius", label: "Keenan Cornelius", category: "athlete", count: 0 },
  { name: "leandro-lo", label: "Leandro Lo", category: "athlete", count: 0 },
  { name: "andre-galvao", label: "Andre Galvao", category: "athlete", count: 1 },
  { name: "mikey-musumeci", label: "Mikey Musumeci", category: "athlete", count: 0 },
  { name: "craig-jones", label: "Craig Jones", category: "athlete", count: 0 },
  { name: "nicky-ryan", label: "Nicky Ryan", category: "athlete", count: 0 },
  // Tournaments
  { name: "adcc", label: "ADCC", category: "tournament", count: 2 },
  { name: "ibjjf-worlds", label: "IBJJF Worlds", category: "tournament", count: 2 },
  { name: "ibjjf-europeans", label: "IBJJF Europeans", category: "tournament", count: 0 },
  { name: "ibjjf-pans", label: "IBJJF Pan Championship", category: "tournament", count: 0 },
  { name: "who-is-number-one", label: "Who's Number One", category: "tournament", count: 0 },
  { name: "fight-to-win", label: "Fight to Win", category: "tournament", count: 0 },
  { name: "competition", label: "Competition", category: "tournament", count: 2 },
  // Techniques
  { name: "leg-locks", label: "Leg Locks", category: "technique", count: 1 },
  { name: "guard-passing", label: "Guard Passing", category: "technique", count: 1 },
  { name: "back-control", label: "Back Control", category: "technique", count: 0 },
  { name: "submissions", label: "Submissions", category: "technique", count: 2 },
  { name: "sweeps", label: "Sweeps", category: "technique", count: 0 },
  { name: "guard-retention", label: "Guard Retention", category: "technique", count: 0 },
  { name: "takedowns", label: "Takedowns", category: "technique", count: 0 },
  { name: "no-gi", label: "No-Gi", category: "technique", count: 2 },
  { name: "gi-bjj", label: "Gi BJJ", category: "technique", count: 2 },
  { name: "beginners", label: "Beginners", category: "technique", count: 0 },
  { name: "self-defense", label: "Self-Defense", category: "technique", count: 1 },
  // History
  { name: "bjj-history", label: "BJJ History", category: "history", count: 1 },
  { name: "gracie-family", label: "Gracie Family", category: "history", count: 2 },
  { name: "mma", label: "MMA", category: "history", count: 0 },
  // Academies
  { name: "b-team", label: "B-Team Jiu-Jitsu", category: "academy", count: 1 },
  { name: "atos-jiu-jitsu", label: "Atos Jiu-Jitsu", category: "academy", count: 0 },
  { name: "alliance-bjj", label: "Alliance BJJ", category: "academy", count: 0 },
  { name: "checkmat", label: "Checkmat BJJ", category: "academy", count: 0 },
  { name: "gracie-humaita", label: "Gracie Humaita", category: "academy", count: 0 },
];

const CATEGORY_COLORS: Record<string, string> = {
  athlete: "border-blue-700/40 text-blue-400",
  tournament: "border-yellow-700/40 text-yellow-400",
  technique: "border-red-700/40 text-red-400",
  history: "border-purple-700/40 text-purple-400",
  academy: "border-green-700/40 text-green-400",
};

const CATEGORIES = ["athlete", "tournament", "technique", "history", "academy"];

export default function TagsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<div className="mx-auto max-w-4xl px-6 py-12">
        <nav className="text-sm text-zinc-500 mb-6 flex gap-1 items-center">
          <Link href="/bjj" className="hover:text-zinc-300">BJJ Encyclopedia</Link>
          <span>›</span>
          <span className="text-zinc-300">All Tags</span>
        </nav>

        <h1 className="text-3xl font-black">Browse by Tag</h1>
        <p className="mt-2 text-zinc-400">{ALL_TAGS.length} tags across athletes, tournaments, techniques, history, and academies.</p>

        <div className="mt-10 space-y-10">
          {CATEGORIES.map(cat => {
            const catTags = ALL_TAGS.filter(t => t.category === cat);
            const colorClass = CATEGORY_COLORS[cat];
            return (
              <div key={cat}>
                <h2 className="text-lg font-bold text-white capitalize mb-4 flex items-center gap-2">
                  <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${colorClass}`}>{cat}</span>
                  <span className="text-zinc-500 text-sm font-normal">{catTags.length} tags</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {catTags.map(tag => (
                    <Link key={tag.name} href={`/bjj/tag/${tag.name}`}
                      className={`rounded-full border bg-zinc-900 px-3 py-1.5 text-sm transition-colors hover:bg-zinc-800 ${colorClass}`}>
                      #{tag.name}
                      {tag.count > 0 && <span className="ml-1.5 text-xs opacity-60">({tag.count})</span>}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex gap-3">
          <Link href="/bjj" className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500">← All Articles</Link>
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Training Free</Link>
        </div>
      </div>
    </div>
  );
}
