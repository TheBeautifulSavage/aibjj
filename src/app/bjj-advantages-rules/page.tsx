import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Advantages Rules: How Advantages Work in Competition | AIBJJ",
  description: "Understand BJJ advantages rules — when they're awarded, how they break ties, and how to strategically earn advantages in close matches.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Advantages Rules: How Advantages Work in Competition",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Advantages Rules: How Advantages Work in Competition</h1>
        <p className="mt-4 text-xl text-zinc-400">Advantages are the fine print of BJJ scoring — often invisible to spectators but decisive in close matches. Understanding when and how they're awarded can be the difference between a gold medal and silver.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What Earns an Advantage</h2>
            <p>An advantage is awarded by the referee when an athlete nearly completes a scoring action. In guard passing, an advantage may be given when the passer reaches a knee-slide or headquarters position and the guard player is clearly struggling to maintain guard, even if the pass isn't completed. In sweeps, a near-reversal that forces the top athlete to post a hand and scramble earns an advantage. Submission attempts — armbars, chokes, leg locks — earn advantages when the opponent is forced to defend aggressively, even if the tap never comes. The referee's discretion is significant; advantage calls vary across referees and tournaments. Active guard work that threatens the top athlete, even without completing a sweep, signals aggression that referees reward with advantages.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Strategic Use of Advantages in Matches</h2>
            <p>If you're behind on points with time running out, earning advantages becomes critical. Push guard passes to near-completion, attack every submission from every position, and make the referee see your aggression. If you're ahead on points, be careful not to accidentally give your opponent advantages through careless attacks that put you in bad positions. A competitor who is ahead by 2 points but gives away 3 advantages and draws no advantages themselves could lose on tiebreakers after a frantic final minute. Track the score mentally every time you hear the referee intervene. If you know you're ahead on advantages, your strategy shifts to protecting position and avoiding scrambles.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Attack every submission — even failed attempts earn advantages</li><li>Near guard passes in scrambles show aggression to referees</li><li>Stalling forfeits advantages — always appear to be working</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Controversies and Organizational Differences</h2>
            <p>The advantages system is one of the most debated aspects of competitive BJJ. Critics argue that advantages encourage passive matches where competitors fish for near-scores without committing to genuine attacks. This is why several major organizations — including ADCC and most submission-only promotions — have eliminated advantages entirely, forcing competitors to either finish or accept draws. IBJJF has maintained advantages as a tiebreaker mechanism. The reality is that the advantages rule rewards relentless offensive pressure, which is good BJJ regardless of the rule set. Competitors who ignore advantages until the final minute often find themselves in a desperate scramble that could have been avoided with consistent submission hunting throughout the match.</p>
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
