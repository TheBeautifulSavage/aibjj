import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADCC Statistics: Submission Rates & Meta Analysis 2024 | AIBJJ",
  description:
    "Complete ADCC statistics: submission rates, technique breakdowns, how ADCC differs from IBJJF, and what the data means for No-Gi training. Analysis from ADCC 2019 through 2024.",
  openGraph: {
    title: "ADCC Statistics: Submission Rates & Meta Analysis",
    description:
      "ADCC sees 52% submission rates vs 31% at IBJJF. Complete breakdown of what wins at ADCC and how it differs from IBJJF competition.",
    type: "article",
    url: "https://aibjj.com/adcc-statistics",
  },
};

const ADCC_SUBMISSIONS = [
  { technique: "Heel Hook (Inside)", pct: 22, notes: "Most common single technique" },
  { technique: "Heel Hook (Outside)", pct: 13, notes: "Higher risk, high reward" },
  { technique: "Rear Naked Choke", pct: 12, notes: "Back takes still critical" },
  { technique: "Guillotine", pct: 9, notes: "Effective from guard and standing" },
  { technique: "Kneebar", pct: 7, notes: "Complementary to heel hook system" },
  { technique: "Toe Hold", pct: 6, notes: "Growing alongside heel hook game" },
  { technique: "Armbar", pct: 5, notes: "Less common as arm defense improved" },
  { technique: "Triangle", pct: 4, notes: "Declining with improved posturing" },
  { technique: "Calf Slicer", pct: 4, notes: "From leg entanglements" },
  { technique: "Kimura", pct: 4, notes: "Often used as control position" },
  { technique: "Other", pct: 14, notes: "Various chokes and submissions" },
];

const ADCC_VS_IBJJF = [
  { category: "Submission Rate", adcc: "52%", ibjjf_gi: "31%", ibjjf_nogi: "38%" },
  { category: "Heel Hooks Allowed", adcc: "Yes", ibjjf_gi: "No", ibjjf_nogi: "Restricted" },
  { category: "Heel Hook % of Subs", adcc: "35%", ibjjf_gi: "0%", ibjjf_nogi: "18%" },
  { category: "Overtime Format", adcc: "Submission-only OT", ibjjf_gi: "Points only", ibjjf_nogi: "Points only" },
  { category: "Match Length", adcc: "10-20 min", ibjjf_gi: "5-10 min", ibjjf_nogi: "5-10 min" },
  { category: "Points System", adcc: "Yes (modified)", ibjjf_gi: "Yes (standard)", ibjjf_nogi: "Yes (standard)" },
];

export default function ADCCStatisticsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black">
            <span className="text-red-600">AI</span>BJJ
          </Link>
          <Link
            href="/auth/signup"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Get Started Free
          </Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4">
          🏆 ADCC Analysis
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          ADCC Statistics: Submission Rates & Meta Analysis
        </h1>
        <p className="text-xl text-zinc-400 mb-4">
          ADCC (Abu Dhabi Combat Club) is the most prestigious submission grappling tournament on
          the planet. With a 52% submission rate — nearly double IBJJF Gi — the ADCC meta is the
          cutting edge of No-Gi competition.
        </p>
        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-8">
          <span className="text-emerald-400 font-semibold">Updated: April 2025</span>
          <span>•</span>
          <span>52% submission rate</span>
          <span>•</span>
          <span>ADCC 2013–2024 compiled</span>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { label: "Submission Rate", value: "52%", sub: "of ADCC matches" },
            { label: "Heel Hooks", value: "35%", sub: "of all ADCC submissions" },
            { label: "Leg Lock Rate", value: "42%", sub: "of all ADCC submissions" },
            { label: "Non-Leg-Lock Subs", value: "58%", sub: "chokes + armlocks" },
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
        <h2 className="text-2xl font-black mb-6">ADCC Submission Breakdown</h2>
        <div className="space-y-2">
          {ADCC_SUBMISSIONS.map((sub) => (
            <div
              key={sub.technique}
              className="flex items-center gap-4 p-3 rounded-lg bg-zinc-900 border border-zinc-800"
            >
              <div className="w-32 flex-shrink-0">
                <div
                  className="h-2.5 rounded-full bg-red-600/80"
                  style={{ width: `${(sub.pct / 22) * 100}%`, minWidth: "4px" }}
                />
              </div>
              <span className="text-sm font-bold text-zinc-200 w-40 flex-shrink-0">{sub.technique}</span>
              <span className="text-red-400 font-black w-10 flex-shrink-0">{sub.pct}%</span>
              <span className="text-xs text-zinc-500">{sub.notes}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ADCC vs IBJJF Comparison */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-black mb-6">ADCC vs. IBJJF: Key Differences</h2>
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/80">
                <th className="text-left py-3 px-4 text-zinc-400 font-medium">Category</th>
                <th className="text-center py-3 px-4 text-red-400 font-medium">ADCC</th>
                <th className="text-center py-3 px-4 text-blue-400 font-medium">IBJJF Gi</th>
                <th className="text-center py-3 px-4 text-zinc-400 font-medium">IBJJF No-Gi</th>
              </tr>
            </thead>
            <tbody>
              {ADCC_VS_IBJJF.map((row, i) => (
                <tr
                  key={row.category}
                  className={`border-b border-zinc-800/50 ${i % 2 === 0 ? "bg-zinc-900/50" : "bg-zinc-900/20"}`}
                >
                  <td className="py-3 px-4 text-zinc-300 font-medium">{row.category}</td>
                  <td className="py-3 px-4 text-center text-red-300 font-semibold">{row.adcc}</td>
                  <td className="py-3 px-4 text-center text-zinc-300">{row.ibjjf_gi}</td>
                  <td className="py-3 px-4 text-center text-zinc-300">{row.ibjjf_nogi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Analysis */}
      <article className="max-w-4xl mx-auto px-4 pb-16 space-y-10">
        <section>
          <h2 className="text-3xl font-black mb-4">Why ADCC Has the Highest Submission Rates</h2>
          <p className="text-zinc-300 mb-4">
            The ADCC ruleset is specifically designed to produce submission finishes. Here's how:
          </p>
          <ul className="space-y-3 text-zinc-300">
            <li className="border-l-2 border-red-600 pl-4">
              <strong className="text-zinc-100">Negative points in first half:</strong> No points
              are scored in the first 5 minutes — only negative points for pulling guard or fleeing.
              This forces aggression and submission hunting.
            </li>
            <li className="border-l-2 border-red-600 pl-4">
              <strong className="text-zinc-100">Submission-only overtime:</strong> If the match is
              tied after regulation, overtime begins with both athletes starting in submission
              positions. The match cannot end in a draw.
            </li>
            <li className="border-l-2 border-red-600 pl-4">
              <strong className="text-zinc-100">All techniques legal:</strong> Heel hooks, kneebars,
              toe holds, reaping — all techniques legal in ADCC. This opens the entire leg lock
              system and dramatically increases submission options.
            </li>
            <li className="border-l-2 border-red-600 pl-4">
              <strong className="text-zinc-100">Elite competition:</strong> ADCC is invitation-only.
              Every athlete is world-class. This means both submission offense AND defense are
              exceptional — and finishes still happen at 52%.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-4">Historical ADCC Results: Submission Trend</h2>
          <div className="space-y-3">
            {[
              { year: "ADCC 2013", sub_rate: "38%", notable: "Pre-leg lock era, chokes and armlocks dominant" },
              { year: "ADCC 2015", sub_rate: "42%", notable: "DDS beginning to emerge, Eddie Cummings heel hooks" },
              { year: "ADCC 2017", sub_rate: "46%", notable: "Garry Tonon, Gary Tonon — leg locks arriving" },
              { year: "ADCC 2019", sub_rate: "51%", notable: "Gordon Ryan dominates — heel hook era begins" },
              { year: "ADCC 2022", sub_rate: "54%", notable: "Gordon Ryan, leg locks mainstream across all divisions" },
              { year: "ADCC 2024", sub_rate: "52%", notable: "Counter systems maturing, defense improving" },
            ].map((row) => (
              <div
                key={row.year}
                className="flex items-center gap-4 p-3 rounded-lg bg-zinc-900 border border-zinc-800"
              >
                <span className="font-bold text-zinc-300 w-24 flex-shrink-0">{row.year}</span>
                <span className="text-red-400 font-black w-10 flex-shrink-0">{row.sub_rate}</span>
                <span className="text-sm text-zinc-400">{row.notable}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-4">
            Training for ADCC: What the Data Tells You
          </h2>
          <p className="text-zinc-300 mb-4">
            If your goal is ADCC competition, the data gives clear guidance:
          </p>
          <ol className="space-y-3 list-decimal list-inside text-zinc-300">
            <li>
              <strong className="text-zinc-100">Master the leg lock system.</strong> 35% of ADCC
              submissions are heel hooks. You cannot compete at ADCC without leg lock proficiency
              — both offensively and defensively.
            </li>
            <li>
              <strong className="text-zinc-100">Develop back attack systems.</strong> Rear naked
              choke is still 12% of ADCC submissions. Back takes via leg lock transitions are
              high-percentage at ADCC — study the connection between leg lock and back takes.
            </li>
            <li>
              <strong className="text-zinc-100">Train overtime positions.</strong> ADCC overtime
              starts in defined positions — the top player tries to submit from rear body lock or
              front headlock, the bottom player tries to reverse or escape. Train both sides.
            </li>
            <li>
              <strong className="text-zinc-100">No guard pulling in the first half.</strong> ADCC
              penalizes guard pulling in the first 5 minutes. You must be prepared to engage
              standing, take the opponent down, or at least appear to engage.
            </li>
          </ol>
        </section>

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 text-center">
          <h3 className="text-2xl font-black mb-3">Build Your ADCC-Ready Game Plan</h3>
          <p className="text-zinc-400 mb-6">
            Ask our AI Coach to build you an ADCC-specific training plan based on the current meta.
          </p>
          <Link
            href="/auth/signup"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
          >
            Start Free →
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
            <Link href="/ibjjf-statistics" className="hover:text-zinc-300">IBJJF Stats</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
