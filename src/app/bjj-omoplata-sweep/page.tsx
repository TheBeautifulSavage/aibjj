import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Omoplata Sweep: Convert to Points | AIBJJ",
  description: "Learn to convert the omoplata into a sweep when the opponent defends. Master the forward roll prevention and transition to top position in BJJ competition.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Omoplata Sweep: Convert to Points",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" },
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <nav className="text-sm text-zinc-500 mb-6">
          <Link href="/" className="hover:text-zinc-300">Home</Link> ›
          <Link href="/bjj-techniques" className="hover:text-zinc-300 ml-1">Techniques</Link> ›
          <span className="ml-1 text-zinc-300">Omoplata Sweep</span>
        </nav>
        <h1 className="text-4xl font-black">Omoplata Sweep: Convert to Points</h1>
        <p className="mt-4 text-xl text-zinc-400">The omoplata sweep is one of the most reliable ways to score points in BJJ competition — when your opponent defends the submission by rolling forward or posturing up, you convert directly into a sweep to take top position.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Reading the Defense for the Sweep</h2>
            <p>When your opponent feels the omoplata shoulder pressure, their two common defenses are rolling forward over their shoulder to escape or posturing upright to reduce leverage. Both defenses create sweep opportunities. If they roll forward, you can follow them over to maintain control and end up on top for 2 points. If they posture upright and resist, the forward momentum they create as they resist your pressure can be redirected — pushing them over onto their back as they posture away from the pressure. Understanding this relationship between their defense and your sweep makes the omoplata a dual-threat attack every time you hit the position.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Executing the Roll-Over Sweep</h2>
            <p>When they initiate a forward roll to escape, immediately follow them by turning your body in the same direction. Keep their arm trapped between your legs throughout the roll. As they complete the roll, you should land in side control or mount with their arm still controlled. The key is to begin turning before they complete the roll, not after. Your waist wrap with your free arm helps you stay connected through the transition.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Start turning with them before the roll is complete</li>
              <li>Maintain the arm trap through the entire rotation</li>
              <li>End in side control or mount — immediately settle for the 3 seconds</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Omoplata as a Complete System</h2>
            <p>The omoplata's value in competition comes from its dual nature — submission threat that becomes a sweep, or sweep attempt that opens the submission. Experienced BJJ competitors who become proficient at the omoplata position are difficult to deal with because every defensive reaction opens a new avenue of attack. Combining the omoplata with the armbar and triangle from guard creates an interlocking web of submissions from the closed guard that is the hallmark of high-level guard play.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-omoplata-setup" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Omoplata Setup</Link>
            <Link href="/bjj-triangle-setup" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Triangle Setup</Link>
            <Link href="/bjj-closed-guard-attacks" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Closed Guard Attacks</Link>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master This Technique with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences from your AI BJJ coach.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
