import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IBJJF Rules: Complete Guide to BJJ Competition Rules | AIBJJ",
  description: "Master IBJJF rules for BJJ competition. Learn points, advantages, penalties, illegal moves, and time limits for every belt and age division.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IBJJF Rules: Complete Guide to BJJ Competition Rules",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">IBJJF Rules: Complete Guide to BJJ Competition Rules</h1>
        <p className="mt-4 text-xl text-zinc-400">The International Brazilian Jiu-Jitsu Federation (IBJJF) sets the standard ruleset for most gi BJJ competitions worldwide. Understanding every rule gives you a decisive edge before you ever step on the mat.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Points System and Scoring</h2>
            <p>IBJJF awards points for positional control and advancement. A takedown or throw to guard earns 2 points. A sweep from the bottom scores 2 points when the athlete achieves a top position and holds it for three seconds. Knee-on-belly holds score 2 points after a three-second stabilization. Mount and back control with hooks each earn 4 points — the highest positional scores in the ruleset. Passing the guard scores 3 points after a three-second hold in side control, north-south, or any stabilized top position. Points are only awarded once per position per sequence; you must return to neutral or advance further to score again. In the event of a tie, the athlete with more advantages wins; if still tied, the referee's decision based on aggressiveness and guard pulling behavior determines the outcome.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Illegal Techniques by Division</h2>
            <p>Technique legality in IBJJF varies by belt and age. White belts cannot attack heel hooks, knee reaping, or any spinal locks. Blue and purple belts gain access to straight foot locks but still cannot reap the knee. Brown and black belts unlock heel hooks in no-gi only; in gi they remain illegal at all levels. Slams, neck cranks, and any technique deemed potentially dangerous by the referee are prohibited at all levels.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Heel hooks: gi competition only — illegal at all belts</li><li>Knee reaping: illegal below brown/black no-gi</li><li>Slam defense escapes: always illegal regardless of belt</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Advantages, Penalties, and Referee Decisions</h2>
            <p>Advantages are scored when an athlete nearly completes a scoring action — a near sweep, near pass, or submission attempt that forces a defensive reaction. They serve as tiebreakers when points are equal. Penalties (called 'fouls') are given for stalling, fleeing the mat, pulling guard without attempting a takedown within 20 seconds, and unsportsmanlike conduct. Two penalties equal one advantage for the opponent; four fouls result in disqualification. Understanding how referees interpret stalling versus strategic positioning is crucial; active guard work, consistent submission hunting, and visible attempts to pass all demonstrate aggression and reduce penalty risk.</p>
          </section>
        </div>
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-3">Related Techniques</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/bjj-armbar" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Armbar</Link>
            <Link href="/bjj-triangle-choke" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Triangle</Link>
            <Link href="/bjj-guard-passing" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Guard Passing</Link>
            <Link href="/bjj-techniques" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1 text-red-400 hover:text-red-300">All Techniques →</Link>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master This Technique with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences and real-time feedback.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
