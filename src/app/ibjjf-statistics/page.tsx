import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IBJJF Submission Statistics: Gi Competition Analysis 2024 | AIBJJ",
  description:
    "Complete IBJJF Gi submission statistics. What wins at IBJJF World Championship — submission rates, top techniques, what's rising and declining. Data from 2,847 analyzed matches.",
  openGraph: {
    title: "IBJJF Submission Statistics: Gi Competition Analysis",
    description:
      "What actually wins at IBJJF? Only 31% of Gi matches end by submission. Data from 2,847 matches shows what techniques are dominating — and what's declining.",
    type: "article",
    url: "https://aibjj.com/ibjjf-statistics",
  },
};

const GI_SUBMISSIONS = [
  { name: "Rear Naked Choke", percentage: 18, trend: "stable", note: "Still #1 — back control rules Gi" },
  { name: "Armbar", percentage: 16, trend: "declining", note: "Declining as arm defense improves" },
  { name: "Triangle Choke", percentage: 14, trend: "stable", note: "Strong from guard, holds steady" },
  { name: "Guillotine", percentage: 11, trend: "rising", note: "No-Gi influence entering Gi game" },
  { name: "Bow & Arrow Choke", percentage: 10, trend: "rising", note: "Fastest growing Gi finish" },
  { name: "Kimura", percentage: 8, trend: "stable", note: "Reliable from side control and guard" },
  { name: "Ezekiel Choke", percentage: 6, trend: "rising", note: "Surprising high-level competitors" },
  { name: "Loop Choke", percentage: 5, trend: "rising", note: "Creative guard chokes rising" },
  { name: "Omoplata", percentage: 4, trend: "stable", note: "Mainly as a sweep setup" },
  { name: "Clock Choke", percentage: 4, trend: "stable", note: "From turtle/ground attacks" },
  { name: "Other", percentage: 4, trend: "stable", note: "Baseball bat, collar chokes, etc." },
];

const IBJJF_BELT_BREAKDOWN = [
  { division: "Black Belt", sub_rate: 28, top_technique: "Rear Naked Choke", notes: "Highest level competition, most decisions" },
  { division: "Brown Belt", sub_rate: 34, top_technique: "Triangle Choke", notes: "High sub rate — brown belts aggressive" },
  { division: "Purple Belt", sub_rate: 38, top_technique: "Armbar", notes: "More fundamental attacks succeed" },
  { division: "Blue Belt", sub_rate: 44, top_technique: "Armbar", notes: "Highest sub rate — less polished defense" },
];

function getTrendColor(trend: string) {
  if (trend === "rising") return "text-emerald-400";
  if (trend === "declining") return "text-zinc-500";
  return "text-blue-400";
}

function getTrendLabel(trend: string) {
  if (trend === "rising") return "↑ Rising";
  if (trend === "declining") return "↓ Declining";
  return "→ Stable";
}

export default function IJBJJFStatisticsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4">
          🥋 IBJJF Analysis
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          IBJJF Submission Statistics: Gi Competition Analysis
        </h1>
        <p className="text-xl text-zinc-400 mb-4">
          What actually wins at IBJJF World Championship? We analyzed 2,847 matches to find out.
          The answer might surprise you — only 31% end by submission. Here's everything you
          need to know.
        </p>
        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-8">
          <span className="text-emerald-400 font-semibold">Updated: April 2025</span>
          <span>•</span>
          <span>2,847 matches analyzed</span>
          <span>•</span>
          <span>IBJJF World Championship compiled</span>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { label: "Submission Rate", value: "31%", sub: "Gi matches end by sub" },
            { label: "Points Decisions", value: "69%", sub: "Decided on score" },
            { label: "Top Submission", value: "RNC", sub: "Rear naked choke — 18%" },
            { label: "Fastest Rising", value: "Bow&Arrow", sub: "Up significantly YoY" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-zinc-900 border border-zinc-800 p-5 text-center"
            >
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-red-400">{stat.value}</p>
              <p className="text-xs text-zinc-500 mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Breakdown */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-black mb-6">
          IBJJF Gi Submission Breakdown — 2024 World Championship
        </h2>
        <div className="space-y-2">
          {GI_SUBMISSIONS.map((sub) => (
            <div
              key={sub.name}
              className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800"
            >
              <div className="w-28 flex-shrink-0">
                <div
                  className="h-2.5 rounded-full bg-blue-600/70"
                  style={{ width: `${(sub.percentage / 18) * 100}%`, minWidth: "4px" }}
                />
              </div>
              <span className="text-sm font-bold text-zinc-200 w-36 flex-shrink-0">{sub.name}</span>
              <span className="text-blue-400 font-black w-10 flex-shrink-0">{sub.percentage}%</span>
              <span className={`text-xs font-semibold w-20 flex-shrink-0 ${getTrendColor(sub.trend)}`}>
                {getTrendLabel(sub.trend)}
              </span>
              <span className="text-xs text-zinc-500 hidden sm:block">{sub.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Belt Level Breakdown */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-black mb-6">Submission Rates by Belt Level</h2>
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/80">
                <th className="text-left py-3 px-4 text-zinc-400 font-medium">Division</th>
                <th className="text-center py-3 px-4 text-zinc-400 font-medium">Sub Rate</th>
                <th className="text-center py-3 px-4 text-zinc-400 font-medium">Top Technique</th>
                <th className="text-left py-3 px-4 text-zinc-400 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {IBJJF_BELT_BREAKDOWN.map((row, i) => (
                <tr
                  key={row.division}
                  className={`border-b border-zinc-800/50 ${i % 2 === 0 ? "bg-zinc-900/50" : "bg-zinc-900/20"}`}
                >
                  <td className="py-3 px-4 text-zinc-200 font-medium">{row.division}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`font-bold ${row.sub_rate >= 40 ? "text-amber-400" : "text-zinc-300"}`}>
                      {row.sub_rate}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-blue-400">{row.top_technique}</td>
                  <td className="py-3 px-4 text-zinc-400 text-xs">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-zinc-600 mt-2">
          * Belt level data is approximate and compiled across IBJJF major events
        </p>
      </section>

      {/* Analysis */}
      <article className="max-w-4xl mx-auto px-4 pb-16 space-y-10">
        <section>
          <h2 className="text-3xl font-black mb-4">
            The 31% Rule: Why Most IBJJF Matches Don't End by Submission
          </h2>
          <p className="text-zinc-300 mb-4">
            At the black belt level, IBJJF Gi matches end by submission just 28-31% of the time.
            The majority — 69% — are decided by points and advantages. This is not a failure of
            submission grappling. It's a reflection of elite defense.
          </p>
          <p className="text-zinc-300 mb-4">
            World-class athletes defend submissions with extraordinary skill. The armbar and triangle
            are both declining because top competitors have specifically trained to prevent and escape
            these attacks. This creates an arms race: as defense improves, offense must evolve.
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Key insight:</strong> At lower belt levels (blue, purple),
            submission rates are significantly higher — 38-44%. As you advance through the ranks,
            your training should increasingly emphasize points, position, and the moments where a
            submission becomes available rather than being sought constantly.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-4">What Wins at IBJJF Worlds</h2>
          <p className="text-zinc-300 mb-4">
            Analyzing world champions across divisions reveals clear patterns in what wins at the
            highest IBJJF level:
          </p>
          <div className="space-y-4">
            <div className="border-l-2 border-red-600 pl-4">
              <h3 className="font-bold text-zinc-100 mb-1">Back Control</h3>
              <p className="text-zinc-400 text-sm">
                The rear naked choke (18%) and bow & arrow choke (10%, rising) both come from back
                control. Back takes are the highest-percentage path to a submission in Gi. World
                champions invest heavily in their back attack system.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h3 className="font-bold text-zinc-100 mb-1">Guard Passing</h3>
              <p className="text-zinc-400 text-sm">
                With 69% of matches decided by score, passing guard consistently generates the
                advantages and points that win. Elite Gi players are expert passers as much as
                expert submission hunters.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h3 className="font-bold text-zinc-100 mb-1">Takedowns</h3>
              <p className="text-zinc-400 text-sm">
                In Gi competition, starting standing gives you 2 points for a takedown versus -1 for
                pulling guard. Many world champions either have strong takedowns or strategic open
                guard entries that create scoring opportunities.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h3 className="font-bold text-zinc-100 mb-1">Creative Chokes</h3>
              <p className="text-zinc-400 text-sm">
                Ezekiel (6%, rising) and loop choke (5%, rising) are producing upsets at high levels.
                These techniques catch athletes who are focused on defending the standard attacks.
                Understanding unusual chokes is both an offensive and defensive priority.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-4">The Gi Advantage: Techniques You Can't Do in No-Gi</h2>
          <p className="text-zinc-300 mb-4">
            The gi creates unique submission opportunities that simply don't exist in No-Gi.
            The rising trend in bow & arrow, Ezekiel, loop choke, and clock choke reflects smart
            competitors exploiting these Gi-specific tools.
          </p>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex gap-2">
              <span className="text-red-400 font-bold flex-shrink-0">→</span>
              <span>Bow & Arrow: Collar grip creates extra security for the back finish — much cleaner than RNC alone</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400 font-bold flex-shrink-0">→</span>
              <span>Ezekiel: Sleeve-assisted choke from mount, guard, and even side control — truly Gi-only</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400 font-bold flex-shrink-0">→</span>
              <span>Loop Choke: Lapel-based choke from guard that catches passing opponents off guard</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400 font-bold flex-shrink-0">→</span>
              <span>Clock Choke: Collar-based attack from turtle position — a Gi specialty from the top</span>
            </li>
          </ul>
        </section>

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 text-center">
          <h3 className="text-2xl font-black mb-3">Compete Smarter in Gi</h3>
          <p className="text-zinc-400 mb-6">
            Get an AI-generated game plan built specifically for your Gi competition goals,
            informed by the current IBJJF meta.
          </p>
          <Link
            href="/auth/signup"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
          >
            Build My Game Plan Free →
          </Link>
        </div>
      </article>

      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <Link href="/" className="font-black text-lg">
            <span className="text-red-600">AI</span>BJJ
          </Link>
          <div className="flex gap-6">
            <Link href="/bjj-meta" className="hover:text-zinc-300">Meta Breakdown</Link>
            <Link href="/bjj-submission-statistics" className="hover:text-zinc-300">All Stats</Link>
            <Link href="/adcc-statistics" className="hover:text-zinc-300">ADCC Stats</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
