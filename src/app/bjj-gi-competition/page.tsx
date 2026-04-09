import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gi BJJ Competition: Rules, Strategy, and Tournament Prep | AIBJJ",
  description: "Master gi BJJ competition with this complete guide. Learn IBJJF gi rules, grip fighting strategy, collar chokes, and how to dominate in kimono tournaments.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Gi BJJ Competition: Rules, Strategy, and Tournament Prep",
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
        <h1 className="text-4xl font-black">Gi BJJ Competition: Rules, Strategy, and Tournament Prep</h1>
        <p className="mt-4 text-xl text-zinc-400">Gi Brazilian Jiu-Jitsu competition is the traditional form of sport BJJ, where the kimono creates unique control systems, grip strategies, and submission opportunities unavailable in any other grappling art.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Role of the Gi in Competition</h2>
            <p>The gi kimono fundamentally changes every aspect of the match. Grip fighting becomes a technical discipline in itself — winning the initial grip fight often determines who dictates the opening exchanges. Collar grips allow the guard player to initiate chokes and sweeps that would be impossible without fabric control. Lapel-based guards (spider guard, lasso guard, De La Riva with collar) create defensive systems far stronger than no-gi equivalents because the friction and fabric manipulation add another dimension of mechanical advantage. Top players use cross-collar grips for passes, chokes from mount, and steering attacks. The gi also slows the game slightly, rewarding timing and technique over raw explosiveness — making it a purer technical environment in some respects.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Grip Fighting and Guard Pulling Strategy</h2>
            <p>In gi competition, the first 10-15 seconds — the grip fight — often decide who controls the match. Establish your preferred grip before your opponent establishes theirs, or immediately break grips that threaten your game plan. Most elite gi competitors have a dominant opening: whether it's a collar-sleeve combination that feeds their guard, a grip that sets up a Seoi Nage throw, or a lapel grab that initializes a guard pull into De La Riva. Know your preferred opening sequence and drill it thousands of times. When guard pulling, immediately establish a controlling grip before sitting — pulling without grips gives the top player a free pass attempt. The guard pull itself should be the beginning of a sweep or submission attack, not a defensive retreat.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Collar-sleeve grip dominates most open guard systems</li><li>Break opponent's grips within 3 seconds or change strategy</li><li>Guard pull without grips is a defensive failure — always grip first</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Preparing for Gi Tournaments</h2>
            <p>Tournament preparation for gi competition differs from general training. Simulate competition rounds: five-minute rounds (white/blue) or six-minute rounds (purple and above) with a fresh opponent every match. Practice your warm-up routine — gi competition often involves standing around waiting, which cools muscles. Have a specific physical warm-up protocol you can execute in a hallway with limited space. Know your bracket rules: gi competition under IBJJF has specific time limits by division, age, and belt. Understand exactly how much time you'll have and train for that duration. Compete in the gi regularly — even if you prefer no-gi — because gi competition builds patience, technical precision, and the ability to perform under the slower, more methodical pressure that defines championship gi grappling.</p>
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
