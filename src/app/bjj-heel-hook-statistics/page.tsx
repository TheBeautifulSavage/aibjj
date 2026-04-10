import { Metadata } from "next";
import Link from "next/link";
import HeelHookTrendChart from "./HeelHookTrendChart";

export const metadata: Metadata = {
  title: "Heel Hook Statistics: The Rise of Leg Locks in BJJ Competition | AIBJJ",
  description:
    "Data analysis of heel hook statistics in BJJ competition. From 8% in 2015 to 40% by 2024 — how the Danaher system and Gordon Ryan changed No-Gi forever. How to defend and learn heel hooks.",
  openGraph: {
    title: "Heel Hook Statistics: The Rise of Leg Locks in BJJ Competition",
    description:
      "Heel hooks rose from 8% to 40% of No-Gi submissions in 9 years. The complete data story, how it happened, and what to do about it.",
    type: "article",
    url: "https://aibjj.com/bjj-heel-hook-statistics",
  },
};

const HEEL_HOOK_TREND = [
  { year: 2015, percentage: 8, context: "Pre-leg lock era" },
  { year: 2016, percentage: 11, context: "John Danaher system emerges" },
  { year: 2017, percentage: 16, context: "DDS dominates" },
  { year: 2018, percentage: 22, context: "Leg locks mainstream" },
  { year: 2019, percentage: 28, context: "ADCC 2019 — Gordon Ryan era" },
  { year: 2020, percentage: 32, context: "Pandemic year, online competition boom" },
  { year: 2021, percentage: 34, context: "Heel hooks normalized" },
  { year: 2022, percentage: 37, context: "ADCC 2022 — heel hooks everywhere" },
  { year: 2023, percentage: 39, context: "Counter systems developing" },
  { year: 2024, percentage: 40, context: "Current — heel hook defense improving" },
];

export default function HeelHookStatisticsPage() {
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
          📊 Leg Lock Statistics
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          Heel Hook Statistics: The Rise of Leg Locks in BJJ Competition
        </h1>
        <p className="text-xl text-zinc-400 mb-4">
          In 2015, heel hooks accounted for 8% of No-Gi submissions. By 2024: 40%. This is the
          single largest shift in competitive BJJ history. Here's the complete data story.
        </p>
        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-8">
          <span className="text-emerald-400 font-semibold">Updated: April 2025</span>
          <span>•</span>
          <span>400% increase in 9 years</span>
        </div>
      </section>

      {/* Trend Chart */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <HeelHookTrendChart />
      </section>

      {/* Key Stats */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: "2015 baseline", value: "8%", sub: "of No-Gi submissions" },
            { label: "2024 current", value: "40%", sub: "of No-Gi submissions" },
            { label: "Growth", value: "+400%", sub: "in 9 years" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-zinc-900 border border-zinc-800 p-5 text-center"
            >
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-red-400">{stat.value}</p>
              <p className="text-xs text-zinc-500 mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-black mb-6">The Timeline: How Heel Hooks Took Over</h2>
        <div className="space-y-3">
          {HEEL_HOOK_TREND.map((entry) => (
            <div
              key={entry.year}
              className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800"
            >
              <div className="flex-shrink-0 w-12 text-center">
                <span className="text-sm font-bold text-zinc-400">{entry.year}</span>
              </div>
              <div className="flex-shrink-0 w-16">
                <span className="text-lg font-black text-red-400">{entry.percentage}%</span>
              </div>
              <div
                className="h-2 rounded-full bg-red-600/80 flex-shrink-0"
                style={{ width: `${(entry.percentage / 40) * 100}%`, maxWidth: "200px", minWidth: "4px" }}
              />
              <p className="text-sm text-zinc-400">{entry.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Analysis */}
      <article className="max-w-4xl mx-auto px-4 pb-16 space-y-10">
        <section>
          <h2 className="text-3xl font-black mb-4">Why Did This Happen?</h2>
          <p className="text-zinc-300 mb-4">
            The heel hook revolution didn't happen by accident. It was the result of systematic
            development by a specific team under a specific coach — and it changed the sport forever.
          </p>

          <h3 className="text-xl font-bold text-zinc-100 mb-3 mt-6">John Danaher: The Architect</h3>
          <p className="text-zinc-300 mb-4">
            John Danaher, a philosophy PhD turned BJJ black belt under Renzo Gracie, began developing
            a systematic approach to leg locks around 2011-2013. Unlike the scattered leg lock
            knowledge that existed before, Danaher created a complete system: specific entries, leg
            entanglement positions (ashi garami, outside ashi, 50/50), and finishing mechanics for
            inside and outside heel hooks, kneebars, and toe holds.
          </p>
          <p className="text-zinc-300 mb-4">
            The system's genius was treating leg locks the same way top-level players treated arm
            locks and chokes — as a complete positional system with defined entry chains, not isolated
            techniques.
          </p>

          <h3 className="text-xl font-bold text-zinc-100 mb-3 mt-6">
            The Danaher Death Squad: Proof of Concept
          </h3>
          <p className="text-zinc-300 mb-4">
            Gordon Ryan, Gary Tonon, Nicky Ryan, Craig Jones, and Eddie Cummings proved the system
            worked at the highest level. At EBI and major ADCC events from 2015-2019, DDS athletes
            used heel hooks to submit world-class grapplers who had no defense to the position.
          </p>
          <p className="text-zinc-300 mb-4">
            ADCC 2019 was the tipping point. Gordon Ryan submitted every opponent — multiple via heel
            hook. The world watched and recognized: leg locks were no longer optional for serious
            No-Gi competitors.
          </p>

          <h3 className="text-xl font-bold text-zinc-100 mb-3 mt-6">
            Online Instruction: Democratization of the System
          </h3>
          <p className="text-zinc-300 mb-4">
            The release of Danaher's instructional series on platforms like BJJ Fanatics brought
            the entire system to anyone willing to study. Thousands of gyms worldwide began drilling
            ashi garami entries. The technique that once required training with the DDS was now
            accessible globally.
          </p>
          <p className="text-zinc-300">
            By 2021, heel hook usage was so widespread that the question shifted from "should I
            learn heel hooks?" to "how do I defend them?"
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-4">
            Inside vs. Outside Heel Hook: Which Is More Common?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-5">
              <h3 className="font-bold text-zinc-100 mb-2">Inside Heel Hook</h3>
              <p className="text-3xl font-black text-red-400 mb-2">28%</p>
              <p className="text-sm text-zinc-400">of all No-Gi submissions (2024)</p>
              <p className="text-xs text-zinc-500 mt-3">
                Set up from ashi garami (single leg X), more accessible entry, still extremely dangerous.
              </p>
            </div>
            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-5">
              <h3 className="font-bold text-zinc-100 mb-2">Outside Heel Hook</h3>
              <p className="text-3xl font-black text-red-400 mb-2">12%</p>
              <p className="text-sm text-zinc-400">of all No-Gi submissions (2024)</p>
              <p className="text-xs text-zinc-500 mt-3">
                From outside ashi and 50/50. More dangerous to the knee — stresses ACL and medial structures.
              </p>
            </div>
          </div>
          <p className="text-zinc-300">
            Combined, heel hooks account for 40% of all No-Gi submissions. Inside heel hooks lead
            because the entry positions (ashi garami, single leg X) are more commonly reached in the
            flow of a match. Outside heel hooks are less frequent but carry higher injury risk.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-4">How to Defend Heel Hooks</h2>
          <p className="text-zinc-300 mb-4">
            The good news in the data: heel hook defense is improving. Counter-systems are developing
            as the technique becomes mainstream. Here are the core defensive principles:
          </p>
          <div className="space-y-4">
            {[
              {
                title: "1. Tap to position, not to pain",
                desc: "The most critical rule. Heel hook damage happens before pain registers. If the position is locked — tap immediately. Do not wait to feel it.",
              },
              {
                title: "2. Protect your knee alignment",
                desc: 'Keep your toes pointed toward your opponent\'s hip (not at the ceiling). The "knee line" must stay protected — toes up create vulnerability.',
              },
              {
                title: "3. Hip escape before fighting the grip",
                desc: "When caught in ashi garami, focus on removing your hip from their control before addressing the heel. Escaping the hip destroys the position.",
              },
              {
                title: "4. Avoid the 50/50 without knowledge",
                desc: "50/50 is a high-risk entanglement for untrained practitioners. Learn the position before entering it — both offense and defense.",
              },
              {
                title: "5. Counter-leg lock when trapped",
                desc: "Elite defense includes counter-leg locks. When caught in ashi, you may be able to establish your own ashi on the outside leg — creating a mutual threat.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-red-600 pl-4">
                <h3 className="font-bold text-zinc-100 mb-1">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black mb-4">How to Learn Heel Hooks</h2>
          <p className="text-zinc-300 mb-4">
            Approach heel hook learning systematically. Don't start with the finish — start with
            the positions.
          </p>
          <ol className="space-y-3 list-decimal list-inside text-zinc-300">
            <li>
              <strong className="text-zinc-100">Learn ashi garami first.</strong> Understand single
              leg X and outside ashi as positions — how to enter, how to hold, what they threaten.
            </li>
            <li>
              <strong className="text-zinc-100">Study the knee alignment principles</strong> — both
              how to expose and how to protect. These are two sides of the same understanding.
            </li>
            <li>
              <strong className="text-zinc-100">Drill the inside heel hook slowly</strong> with a
              consenting partner. Learn the grip (arm-wrap of the heel in the armpit), the body
              rotation, the finish mechanics.
            </li>
            <li>
              <strong className="text-zinc-100">Add the outside heel hook</strong> from outside ashi
              garami. Understand why it's more dangerous and train it with extreme care.
            </li>
            <li>
              <strong className="text-zinc-100">Train positional rounds from leg lock positions</strong>
              {" "}— starting in ashi garami, one person attacks, one person defends.
            </li>
          </ol>
        </section>

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 text-center">
          <h3 className="text-2xl font-black mb-3">Master the Leg Lock Meta</h3>
          <p className="text-zinc-400 mb-6">
            Get a personalized leg lock training plan from our AI Coach based on your current level
            and competition goals.
          </p>
          <Link
            href="/auth/signup"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
          >
            Get Started Free →
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
