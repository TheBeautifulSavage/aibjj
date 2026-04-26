import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Absolute Division: Open Weight Competition Guide | AIBJJ",
  description: "Everything about the BJJ absolute division — open weight competition where all weight classes compete together. Strategy, advantages, and how to succeed.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Absolute Division: Open Weight Competition Guide",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Absolute Division: Open Weight Competition Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">The absolute division pits every competitor regardless of weight class against each other in a single bracket — the ultimate test of technique over size. Winning absolute is considered the highest honor in tournament BJJ.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What Is the Absolute Division</h2>
            <p>In every major BJJ tournament, competitors first compete in their weight class bracket, then have the option to enter the absolute (open weight) division. In the absolute, a 60kg featherweight may face a 100kg heavyweight in the first round. The division celebrates the founding principle of Brazilian Jiu-Jitsu: that superior technique allows a smaller, weaker practitioner to defeat a larger, stronger one. Historically, many legendary absolute champions were not the heaviest competitors in the field — Marcelo Garcia dominated absolute divisions for years at middleweight by choking out athletes 30kg heavier. Winning absolute is a statement that your technique transcends the physical advantages of size and strength.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Strategy for Competing Absolute</h2>
            <p>If you're a smaller athlete in absolute, your strategy must revolve around guard and submission from bottom. Avoid takedown battles with heavy opponents; pull guard immediately and neutralize their size advantage by controlling the pace from the bottom. Your guard must be tight enough to survive top pressure from much heavier athletes — develop guard retention that works against grinding top pressure, not just technical pass attempts. Submission hunting from guard is your primary weapon. Triangles, omoplatas, and armbars allow you to attack without exposing yourself to weight-based smashing. If you're a larger athlete, use your weight advantage in top pressure, but never underestimate a technical guard player — sitting on a triangle specialist costs champions their titles.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Smaller athletes: pull guard immediately, avoid wrestling</li><li>Guard retention against heavy top pressure is a specific skill</li><li>Submission attempts equalize size — attack constantly</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Famous Absolute Champions and Their Lessons</h2>
            <p>Marcelo Garcia's multiple ADCC absolute titles at sub-80kg remain the gold standard for smaller-athlete absolute success. His guillotine and rear naked choke attacks neutralized larger opponents who never got to use their size. Roger Gracie dominated absolute at black belt for years using pristine cross-collar chokes from mount — proving that fundamental technique at the highest level beats athleticism and innovation. Buchecha Abreu won multiple absolute world championships using a blend of powerful takedowns, relentless guard passing pressure, and clean submission finishing. Each champion demonstrates a different approach: pure technique, timing, or overwhelming pressure. Study absolute finishes — they reveal what truly works under maximum physical adversity.</p>
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
