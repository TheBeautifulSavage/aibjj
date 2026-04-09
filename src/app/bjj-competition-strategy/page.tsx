import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Competition Strategy: How to Win BJJ Tournaments | AIBJJ",
  description: "Master BJJ competition strategy with game plans for points, submissions, and bracket navigation. Learn how elite grapplers plan and execute tournament wins.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Competition Strategy: How to Win Tournaments",
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
        <h1 className="text-4xl font-black">BJJ Competition Strategy: How to Win Tournaments</h1>
        <p className="mt-4 text-xl text-zinc-400">Winning a BJJ tournament requires more than skill — it demands a coherent game plan executed under pressure. Elite competitors don't just react; they force their preferred scenarios from the first grip fight.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Building Your A-Game for Competition</h2>
            <p>Your competition A-game should be a tight chain of techniques that flow from a single dominant position or guard. Most successful tournament competitors build their strategy around two or three high-percentage techniques they can hit on anyone at their level. Identify your best takedown or guard pull entry, your preferred guard, your two strongest sweeps, and your two highest-percentage submissions. Build links between these positions so that missing one leads naturally to the next. Drill this chain obsessively — competition is not the time to experiment. Your B-game exists to reset to your A-game. If you end up in a position outside your chain, your only job is to recover your preferred sequence, not to win from an unfamiliar spot. Simplicity under pressure is the hallmark of experienced competitors.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Points Strategy vs. Submission Hunting</h2>
            <p>Understanding when to hunt submissions versus accumulate points is a critical skill. Early in a match, favor position and point accumulation to create a lead that forces your opponent to open up. A 6-0 lead with three minutes remaining means your opponent must attack, giving you submission opportunities from a dominant position. However, if you're behind on points with little time remaining, submission hunting becomes necessary — holding position to stall a loss is a losing strategy mentally and often technically. Study the bracket: if you have multiple matches, conserving energy matters more than a flashy finish in early rounds. Finals are where you give everything.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Build a 4-6 point lead, then attack submissions from control</li><li>Avoid scrambles you haven't trained when ahead on points</li><li>Know the clock — check scoreboard every 90 seconds mentally</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Weight and Bracket Management</h2>
            <p>Competing at the right weight class dramatically affects your tournament results. Most elite competitors aim to be on the heavier end of their division — stronger, harder to move, and more explosive relative to lighter opponents. However, dangerous weight cuts that leave you dehydrated and weak are counterproductive. Aim for a natural weight cut of no more than 5% body weight. Study the bracket before you compete if it's published. Knowing your likely opponents allows you to tailor your warm-up, pacing, and game plan. Some brackets are loaded in one half; identify potential early-round dangerous opponents and prepare specifically. If you face a top seed early, have a specific counter-strategy ready rather than just playing your default game.</p>
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
