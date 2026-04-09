import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IBJJF World Championship: BJJ's Biggest Stage | AIBJJ",
  description: "The IBJJF World Championship in Long Beach, California is the largest and most prestigious gi jiu-jitsu tournament in the world. A worlds gold medal is the",
};

export default function Page() {
  const tags = ["ibjjf-worlds", "gi-bjj", "competition", "roger-gracie", "buchecha", "leandro-lo"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">IBJJF World Championship: BJJ's Biggest Stage</h1>
        <p className="mt-4 text-xl text-zinc-400">The IBJJF World Championship in Long Beach, California is the largest and most prestigious gi jiu-jitsu tournament in the world. A worlds gold medal is the ultimate achievement in sport BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">History and Growth</h2>
            <p>The IBJJF was founded by Carlos Gracie Jr. to govern competitive BJJ globally. Worlds has been held since 1996, growing from a small regional event to a massive international competition drawing thousands of competitors from over 100 countries. The event moved to Long Beach and has remained there, becoming one of the most-attended martial arts events in the United States.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Format and Rules</h2>
            <p>The IBJJF World Championship uses a bracket format sorted by belt, weight class, and age division. Points reward: guard passes, takedowns, sweeps (2 points each), mount (4), back control (4). Matches end by submission or points at time. The black belt absolute — open weight — is the most prestigious event and draws the best practitioners worldwide.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">All-Time Records</h2>
            <p>Marcus Buchecha Almeida holds the record with 13 world championship gold medals. Roger Gracie won 10. Leandro Lo won 8. Bernardo Faria and Lucas Lepri each won 6. On the women&apos;s side, Beatriz Mesquita has 8 gold medals. These records may never be broken as the depth of international competition increases every year.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What It Takes to Win</h2>
            <p>A worlds medal requires years of preparation. Athletes compete through regional and national qualifiers. At the event itself, competitors face 4-6 matches in a single day to reach finals — requiring exceptional fitness, mental fortitude, and a complete game plan with no exploitable weaknesses. A single bad decision or moment of hesitation can end a year of preparation.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Track your training, get personalized coaching, and build your game plan — free to start.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
            <Link href="/bjj-techniques" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Technique Library</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
