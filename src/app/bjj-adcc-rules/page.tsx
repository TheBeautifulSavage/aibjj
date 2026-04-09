import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ADCC Rules Explained: Complete Guide to ADCC Grappling | AIBJJ",
  description: "Master ADCC rules — the premier no-gi grappling competition. Learn the negative points system, overtime, technique legality, and what makes ADCC unique.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ADCC Rules Explained: Complete Guide to ADCC Grappling",
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
        <h1 className="text-4xl font-black">ADCC Rules Explained: Complete Guide to ADCC Grappling</h1>
        <p className="mt-4 text-xl text-zinc-400">ADCC (Abu Dhabi Combat Club) Submission Wrestling World Championship operates under a unique ruleset that rewards aggression and finishing while discouraging passive guard pulling and point farming. It's the most prestigious no-gi grappling competition in the world.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">How ADCC Scoring Works</h2>
            <p>ADCC uses a two-phase scoring system. For the first half of the match, points are only scored for submissions (which end the match immediately). Taking top position, sweeping, or passing guard in the first half earns no points. This forces competitors to attack submissions rather than accumulate safe positional leads. In the second half, points activate: takedowns earn 2 points, guard passes earn 3, sweeps earn 2, mount and back control earn 4. A negative point system discourages pulling guard — any athlete who pulls guard without scoring a submission within a set time period receives a negative point. This incentivizes takedown wrestling and punishes passive guard playing that dominated IBJJF competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Overtime and Referee Decision</h2>
            <p>If the match ends tied after regulation, a five-minute overtime period begins. In overtime, points are active from the start and the negative point penalty for guard pulling is more severe. If overtime ends tied, the referee makes a decision based on aggression, submission attempts, and forward pressure throughout the match. ADCC referees historically favor wrestlers and athletes who pushed the pace. The overtime format rewards competitors who maintained activity throughout regulation, as a ref decision after a passive five-round stalemate may go to neither fighter in a draw. Elite ADCC competitors train specifically to be dominant in overtime — fresh enough after regulation to push a decisive pace in the extra period.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>First half: submissions only — no points for position</li><li>Pulling guard without attacking earns a negative point</li><li>Overtime points activate immediately — no waiting period</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Technique Legality in ADCC</h2>
            <p>ADCC allows a broader range of leg attacks than IBJJF, making it technically the most complete test of no-gi grappling. Heel hooks, knee bars, calf slicers, and toe holds are all permitted at the elite level. Neck cranks and certain spinal locks remain prohibited. Slam defense is allowed — competitors may slam from certain guard positions to escape a submission, which is a major tactical variable not present in IBJJF. Upper body wrestling techniques are completely legal, making ADCC a true merger of wrestling, judo, sambo, and BJJ. Competitors who excel at ADCC typically have strong wrestling for the first half, diverse leg lock games, and excellent fitness — the format separates well-rounded grapplers from specialists.</p>
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
