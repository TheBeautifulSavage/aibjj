import { Metadata } from "next";
import Link from "next/link";
import SubmissionStatsCharts from "./SubmissionStatsCharts";

export const metadata: Metadata = {
  title: "BJJ Submission Statistics: Complete Data Analysis 2024-2025 | AIBJJ",
  description:
    "Complete BJJ submission statistics from IBJJF, ADCC, EBI and Polaris. What percentage of BJJ matches end by submission? What submissions win most? Data from 4,770+ matches analyzed.",
  openGraph: {
    title: "BJJ Submission Statistics: Complete Data Analysis",
    description:
      "Complete submission statistics from top BJJ competitions. Gi vs No-Gi rates, technique breakdowns, and what the data means for your training.",
    type: "article",
    url: "https://aibjj.com/bjj-submission-statistics",
  },
};

const TOURNAMENT_COMPARISON = [
  { tournament: "IBJJF Worlds (Gi)", submission_rate: 31, heel_hooks: 0, leg_locks: 2, chokes: 67, armlocks: 31 },
  { tournament: "IBJJF No-Gi Worlds", submission_rate: 38, heel_hooks: 18, leg_locks: 24, chokes: 52, armlocks: 24 },
  { tournament: "ADCC", submission_rate: 52, heel_hooks: 35, leg_locks: 42, chokes: 41, armlocks: 17 },
  { tournament: "EBI/Overtime Format", submission_rate: 89, heel_hooks: 44, leg_locks: 52, chokes: 33, armlocks: 15 },
  { tournament: "Polaris/SUG", submission_rate: 61, heel_hooks: 38, leg_locks: 45, chokes: 38, armlocks: 17 },
];

export default function SubmissionStatisticsPage() {
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
          📊 Competition Data
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          BJJ Submission Statistics: Complete Data Analysis
        </h1>
        <p className="text-xl text-zinc-400 mb-4">
          What percentage of BJJ matches actually end by submission? Which techniques finish fights
          most often? We analyzed 4,770+ matches from the world's top competitions to find out.
        </p>
        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-8">
          <span className="text-emerald-400 font-semibold">Updated: April 2025</span>
          <span>•</span>
          <span>4,770 matches analyzed</span>
          <span>•</span>
          <span>IBJJF, ADCC, EBI, Polaris</span>
        </div>
      </section>

      {/* Charts */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <SubmissionStatsCharts />
      </section>

      {/* Tournament Table */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-black mb-6">Submission Rates by Tournament</h2>
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/80">
                <th className="text-left py-3 px-4 text-zinc-400 font-medium">Tournament</th>
                <th className="text-center py-3 px-4 text-zinc-400 font-medium">Sub Rate</th>
                <th className="text-center py-3 px-4 text-zinc-400 font-medium">Heel Hooks</th>
                <th className="text-center py-3 px-4 text-zinc-400 font-medium">Leg Locks</th>
                <th className="text-center py-3 px-4 text-zinc-400 font-medium">Chokes</th>
                <th className="text-center py-3 px-4 text-zinc-400 font-medium">Armlocks</th>
              </tr>
            </thead>
            <tbody>
              {TOURNAMENT_COMPARISON.map((row, i) => (
                <tr
                  key={row.tournament}
                  className={`border-b border-zinc-800/50 ${i % 2 === 0 ? "bg-zinc-900/50" : "bg-zinc-900/20"}`}
                >
                  <td className="py-3 px-4 text-zinc-200 font-medium">{row.tournament}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`font-bold ${row.submission_rate >= 60 ? "text-red-400" : row.submission_rate >= 40 ? "text-amber-400" : "text-zinc-300"}`}>
                      {row.submission_rate}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={row.heel_hooks > 0 ? "text-red-400 font-semibold" : "text-zinc-500"}>
                      {row.heel_hooks}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-zinc-300">{row.leg_locks}%</td>
                  <td className="py-3 px-4 text-center text-zinc-300">{row.chokes}%</td>
                  <td className="py-3 px-4 text-center text-zinc-300">{row.armlocks}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Analysis */}
      <article className="max-w-4xl mx-auto px-4 pb-16 space-y-10">
        <section>
          <h2 className="text-3xl font-black mb-4">What the Numbers Tell Us</h2>
          <p className="text-zinc-300 mb-4">
            The most striking finding from our analysis: ruleset determines submission rate more than
            athlete skill. EBI's overtime format — where a match cannot end in a draw — produces
            89% submission rates. IBJJF Gi, where points decide most matches, sees only 31% submission
            finishes.
          </p>
          <p className="text-zinc-300 mb-4">
            This has profound implications for how you should train. If you compete IBJJF, submission
            hunting without positional control is a recipe for losing on points. If you compete
            ADCC-style, your submission offense must be elite because you may face overtime.
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Overall average submission rate</strong> across all
            formats: approximately 46% — nearly half of all competitive BJJ matches end by submission
            at the elite level. That's why submission training remains central to competitive BJJ,
            regardless of format.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-4">Most Effective BJJ Submissions</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-red-600 pl-4">
              <h3 className="font-bold text-zinc-100 mb-1">
                1. Rear Naked Choke (18% Gi / 14% No-Gi)
              </h3>
              <p className="text-zinc-400 text-sm">
                Still the most reliable submission in BJJ. Once you have back control with the seatbelt,
                the RNC is a near-certain finish. The technique is declining in No-Gi as back defense
                improves, but remains dominant in Gi where the collar grip creates an additional threat.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h3 className="font-bold text-zinc-100 mb-1">
                2. Inside Heel Hook (28% No-Gi, N/A Gi)
              </h3>
              <p className="text-zinc-400 text-sm">
                The most explosive rise in BJJ competition history. From near-zero usage in 2013 to
                the single most common submission in No-Gi by 2024. The inside heel hook from ashi
                garami and single leg X is now the cornerstone of elite No-Gi attack systems.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h3 className="font-bold text-zinc-100 mb-1">3. Armbar (16% Gi / 6% No-Gi)</h3>
              <p className="text-zinc-400 text-sm">
                Declining in both formats but still relevant. The armbar is most effective from mount
                and guard in Gi. In No-Gi, improved arm defense has reduced its effectiveness significantly.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h3 className="font-bold text-zinc-100 mb-1">4. Triangle Choke (14% Gi / 5% No-Gi)</h3>
              <p className="text-zinc-400 text-sm">
                Much more effective in Gi where the collar provides additional gripping options and
                the kimono creates friction. In No-Gi, elite athletes are better at posturing and
                stacking, reducing triangle effectiveness.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h3 className="font-bold text-zinc-100 mb-1">5. Guillotine (11% Gi / 11% No-Gi)</h3>
              <p className="text-zinc-400 text-sm">
                Equally effective in both formats — one of the most format-agnostic submissions in BJJ.
                The arm-in guillotine and high elbow variation are becoming more prevalent at the elite level.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-4">Historical Trend: Submissions Are Rising</h2>
          <p className="text-zinc-300 mb-4">
            A decade ago, ADCC submission rates hovered around 40%. Today they exceed 52%. EBI
            competitions regularly see finish rates above 85%. This is not coincidence — it reflects
            the global systematization of submission grappling, driven by:
          </p>
          <ul className="space-y-2 text-zinc-300">
            <li>• Online instruction making elite techniques accessible worldwide</li>
            <li>• The Danaher leg lock system creating an entire new submission category</li>
            <li>• Overtime formats that mandate resolution</li>
            <li>• Professional athletes training full-time with cutting-edge methodology</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-4">What This Means for Your Training</h2>
          <p className="text-zinc-300 mb-4">
            Train submissions both offensively and defensively. The data shows that nearly half of
            elite matches end by submission — if you're not training to finish and to survive,
            you're training for half a fight.
          </p>
          <p className="text-zinc-300 mb-4">
            Prioritize the techniques most common in your target format. For Gi: back control, triangle,
            armbar, and chokes from the top. For No-Gi: leg locks, guillotine, and the RNC from back
            control.
          </p>
          <p className="text-zinc-300">
            Most importantly: understand what you're defending against. The data shows your
            opponent is most likely attacking a heel hook in No-Gi, or going to your back in Gi.
            Train accordingly.
          </p>
        </section>

        {/* CTA */}
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 text-center">
          <h3 className="text-2xl font-black mb-3">
            Build a Training Plan Around the Meta
          </h3>
          <p className="text-zinc-400 mb-6">
            Our AI Coach creates personalized training plans based on your goals and the current
            competition meta. Free to start.
          </p>
          <Link
            href="/auth/signup"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
          >
            Get Your Free Training Plan →
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
            <Link href="/bjj-heel-hook-statistics" className="hover:text-zinc-300">Heel Hook Data</Link>
            <Link href="/adcc-statistics" className="hover:text-zinc-300">ADCC Stats</Link>
            <Link href="/ibjjf-statistics" className="hover:text-zinc-300">IBJJF Stats</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
