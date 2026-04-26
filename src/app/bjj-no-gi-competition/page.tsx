import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "No-Gi BJJ Competition: Rules, Strategy, and Training | AIBJJ",
  description: "Complete guide to no-gi BJJ competition. Learn the rules, optimal techniques, leg lock strategies, and how to train specifically for no-gi tournaments.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "No-Gi BJJ Competition: Complete Guide",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">No-Gi BJJ Competition: Complete Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">No-gi BJJ competition removes the kimono and with it many of the grip-based control systems that define the gi game. What remains is faster, more explosive, and demands a different technical vocabulary to win.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Differences from Gi Competition</h2>
            <p>Without the gi, friction-based control systems change completely. Collar drags, cross-collar chokes, and sleeve-based guard systems disappear. Competitors must control with clinch grips, underhooks, overhooks, and wrist control. Guard retention without fabric grips relies more on hip movement, framing, and positional sensitivity — the margin for error is smaller. Passing is faster because guards are harder to maintain without gi friction. Takedowns from wrestling and judo become more important because grip fighting doesn't favor one system as clearly. Leg locks become dramatically more available — the absence of the gi makes heel hook entries, ashi garami positions, and leg entanglement systems more accessible from almost every position in the match.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">No-Gi Submission Strategy</h2>
            <p>The submission hierarchy in no-gi differs from the gi. Collar chokes are eliminated, making rear naked choke from back control, guillotines from front headlock, and D'arce and anaconda chokes from top position the primary choking attacks. Heel hooks — inside and outside — are the dominant submission threat in modern no-gi competition. Understanding leg lock entries and defensive leg lock positioning is not optional at any competitive level above beginner. Arm attacks remain highly effective: kimuras from top position, armbars from guard, and triangle-armbar combinations all convert at high rates in no-gi because grip breaks are harder to defend without the gi reinforcing defensive frames.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Rear naked choke is the highest-percentage no-gi submission</li><li>Inside heel hook entries from ashi garami are the elite leg attack</li><li>Guillotine from arm-in or high-elbow works without gi friction</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Training for No-Gi Competition</h2>
            <p>If you primarily train in the gi, transitioning to no-gi competition requires specific preparation. Drill grip-independent guard retention — replace sleeve grips with wrist control and hip movement. Develop your front headlock game, as the head snap and hip-level entries create guillotines and D'arce opportunities that don't exist in the gi. Invest significant time in leg lock offense and defense — competitors who ignore this area will be submitted repeatedly by leg lock specialists. In no-gi sparring, train actively in scrambles rather than resetting to guard. No-gi matches often determine winners in chaotic scramble sequences that reward athletes who can function under positional stress without the control that gi fabric provides.</p>
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
