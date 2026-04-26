import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Submission Only BJJ: Rules, Strategy, and Training | AIBJJ",
  description: "Everything about submission only BJJ competition — rules, strategy, overtime formats, and how to train for finishing matches rather than scoring points.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Submission Only BJJ: Rules, Strategy, and Training",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Submission Only BJJ: Rules, Strategy, and Training</h1>
        <p className="mt-4 text-xl text-zinc-400">Submission only BJJ strips away points and advantages, forcing competitors to finish or keep fighting — often indefinitely. It's the purest expression of martial arts intent and demands a completely different competitive mindset.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">How Submission Only Rules Work</h2>
            <p>In submission only competition, the match does not end until one competitor submits — taps or verbally yields — or the time limit expires. If the time limit expires without a submission, the outcome varies by organization: some declare a draw, others go to overtime, and some use sudden death extensions. EBI (Eddie Bravo Invitational) popularized overtime formats where competitors alternate starting in disadvantaged positions (back control or spider web) and attempt to escape or submit within a time limit. The competitor who escapes fastest, or submits their opponent in overtime, wins. This format eliminated draws entirely while rewarding both submission offense and escape ability — a more complete test of grappling than pure offense.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Strategy for Submission Only Competition</h2>
            <p>Without points, there's no reward for taking top position and stalling. Every scramble, every guard pull, every transition must be oriented toward submission. This shifts strategy significantly — leg lock entries become more viable because the positional exposure that would cost you points in IBJJF is irrelevant. Back takes become premium because back control offers the highest submission rate of any position. Guard players who normally sweep and accumulate points must instead develop sharp submission offense from the bottom. The psychological pressure of submission only is intense: there is no safe lead, no running out the clock. Every second of every minute you must be threatening or you're giving your opponent time to rest and reset.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Leg lock entries are higher risk/reward without point penalties</li><li>Back control has the highest submission conversion rate</li><li>Stalling is socially punished even without referee penalties</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Training for Submission Only Tournaments</h2>
            <p>To compete well in submission only formats, adjust your training immediately. Add overtime rounds — five-minute sparring sessions that go until a submission, not until time. Practice your escape game from disadvantaged positions: being in back control or spider web and escaping within 30 seconds requires specific drilling. Expand your submission vocabulary — competitors who only know a few submissions are predictable in overtime. Develop proficiency in at least one front headlock submission, one leg attack chain, one arm attack chain, and multiple chokes from back control. Your opponent in overtime will know your most common submission attempts; having a secondary and tertiary option is what separates consistent overtime winners from one-trick ponies.</p>
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
