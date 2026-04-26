import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Points System Explained: How Scoring Works | AIBJJ",
  description: "Complete breakdown of the BJJ points system. Learn how takedowns, sweeps, passes, mount, back control, and advantages are scored in competition.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Points System Explained: How Scoring Works",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Points System Explained: How Scoring Works</h1>
        <p className="mt-4 text-xl text-zinc-400">The BJJ points system rewards positional dominance and meaningful advancement toward submission. Knowing exactly when points are awarded — and when they aren't — changes how you approach every match.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Core Point Values in IBJJF</h2>
            <p>Under IBJJF rules, every scoring action has a specific point value tied to a three-second stabilization requirement. Takedowns and throws to guard: 2 points — awarded when the attacking athlete puts their opponent on the ground and achieves a top position. Guard sweeps: 2 points — the bottom athlete must reverse position and hold top for three seconds. Guard passes: 3 points — transitioning from inside the guard to a stable side position (side control, north-south) and holding for three seconds. Knee on belly: 2 points, held for three seconds with proper form. Mount and rear mount (back control with hooks): 4 points each, the highest-value positions in the ruleset. Points are cumulative — you can score multiple times in a match — and there is no point cap.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Three-Second Rule and Position Stability</h2>
            <p>The three-second rule is the most misunderstood aspect of BJJ scoring. A position is not scored the moment it is achieved — the referee must confirm three seconds of stable control before awarding points. During those three seconds, the bottom athlete may legally defend, buck, turn, or attempt escapes. If they escape before the three-second count, no points are awarded. This creates important strategic decisions: should you stabilize and take guaranteed points, or immediately attack a submission before your opponent recovers? In high-level competition, many athletes forgo the points and attack immediately, accepting the positional risk in exchange for finish opportunities. Lower-level athletes should generally default to taking the points first.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Referee begins counting when judge identifies stable control</li><li>Scrambling resets the count — both athletes must reach neutral</li><li>Points for back control require both hooks to be properly placed</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Advantages and Tiebreaker Rules</h2>
            <p>Advantages are awarded for near-scoring actions: a sweep attempt that nearly works, a submission attempt that forces a defensive reaction, or a guard pass attempt that nearly completes. They do not change the score but serve as tiebreakers. If the match ends tied on points, the athlete with more advantages wins. If advantages are also tied, referee decision determines the winner based on which athlete was more aggressive and offensive throughout the match. In some organizations' rules, advantages have been eliminated entirely to force more decisive action. Understanding advantages matters most for close matches — a single near-guard-pass advantage in the final seconds can decide a tournament. Always be hunting, even when ahead.</p>
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
