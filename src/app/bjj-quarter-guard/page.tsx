import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Quarter Guard: Escapes, Sweeps, and Leg Locks | AIBJJ",
  description: "Understand BJJ quarter guard — the transitional position between half guard and full guard pass. Learn escapes, leg lock opportunities, and survival tactics.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Quarter Guard: The Danger Zone and How to Survive",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Quarter Guard: The Danger Zone and How to Survive</h1>
        <p className="mt-4 text-xl text-zinc-400">Quarter guard occurs when only one of your legs is trapped between the opponent's legs — a dangerous transitional state that often precedes a guard pass or submission. Knowing how to escape or attack from quarter guard is essential for complete BJJ.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What Is Quarter Guard and Why It's Dangerous</h2>
            <p>Quarter guard, sometimes called 'getting one leg out,' happens when a passer successfully traps your knee between their knees but has not yet completed a full pass to side control. You maintain some guard connection but far less than half guard or full guard. From the top, the passer has several options: the standard guard pass by walking around the trapped leg, a leg lock entry by stepping over and attacking the knee, or transitioning directly to side control by pulling the knee free. The danger of quarter guard is that it often leads to compromised half guard if not addressed immediately — an opponent with strong hip control can collapse your half guard frame and achieve a pass without a visible transition, catching referees and even athletes off guard.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Escapes and Recovery from Quarter Guard</h2>
            <p>From quarter guard, your priority is recovering to half guard or better. The reguard option — spinning under the opponent and re-establishing guard — works when the top player is not actively smashing. Use a shrimp movement toward the trapped leg side, insert your free knee between you and the opponent, and reclaim half guard connection. Alternatively, convert quarter guard to deep half guard by pulling the trapped leg into a deep half configuration — this actually creates offensive opportunity from what appeared to be a passing position. When the top player drives forward aggressively, use their momentum to roll under to the single-leg takedown. Quarter guard is not a position to hold — it must be resolved immediately in one direction or another.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Shrimp toward the trapped leg to reclaim half guard</li><li>Deep half conversion turns quarter guard into an offensive position</li><li>Never hold quarter guard static — commit to a direction immediately</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Leg Lock Entries from Quarter Guard</h2>
            <p>Modern leg lock specialists have turned quarter guard into an offensive position rather than a defensive one. When the top player passes your knee between their legs, you can attack an outside heel hook by controlling their heel with your hands and engaging the knee with your hip. The 50/50 entry from quarter guard occurs when you hook around their passing leg as they step over, creating a mutual entanglement. Inside heel hook entries from quarter guard require quick hip movement to engage the correct leg and establish ashi garami. These attacks require significant no-gi or leg lock training to execute safely, as the positions move fast and the margin between attack and counter-attack is narrow. If your leg lock game is advanced, quarter guard becomes a trap rather than a problem.</p>
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
