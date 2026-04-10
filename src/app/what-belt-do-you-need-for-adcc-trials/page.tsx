import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Belt Do You Need for ADCC Trials? | AIBJJ",
  description: "ADCC Trials are open to all skill levels. You do not need any particular belt to enter — but understanding the competition format and preparation requireme",
};

export default function Page() {
  const tags = ["adcc", "no-gi", "competition"];
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
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">What Belt Do You Need for ADCC Trials?</h1>
        <p className="mt-4 text-xl text-zinc-400">ADCC Trials are open to all skill levels. You do not need any particular belt to enter — but understanding the competition format and preparation requirements will help.</p>
        <div className="mt-10 space-y-3">

          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Do you need a BJJ black belt for ADCC?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">No — ADCC Trials are open to practitioners of all belt levels. Unlike IBJJF events which are divided by belt, ADCC uses only weight classes. A blue belt can technically enter trials and compete against black belts. In practice, competitors who advance far in trials are typically advanced practitioners, but there is no formal belt requirement.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">How competitive are ADCC Trials?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Extremely competitive. ADCC Trials attract elite competitors from around the world — many are world champions in both gi and no-gi. Even regional trials feature multiple professional grapplers and high-level competitors. Winning a trial spot is a major achievement in submission grappling and typically requires black belt or equivalent skill level.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What are ADCC Trials rules?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">ADCC Trials use the same ruleset as the main ADCC event: no points in the first half, points available in the second half for dominant positions. Submissions win immediately. Stalling is penalized. Matches go to referee decision if tied. No guard pulling scores points — the format rewards offensive grappling and submission hunting.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">How do I prepare for ADCC Trials?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Heavy no-gi training is essential — at least 4-5 times per week. Focus on leg lock entries and defense, wrestling-based takedowns, back takes, and submission hunting from all positions. Study the specific weight class you will enter and understand what techniques are winning at that level. Mental preparation and competition experience from smaller events are also valuable preparation tools.</p>
          </details>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Get AI BJJ Coaching</h2>
          <p className="mt-2 text-zinc-400">Ask your AI coach anything about BJJ — technique questions, game plans, drilling sequences.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
          <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
          <Link href="/coach" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1.5 text-sm text-red-400">AI Coach →</Link>
        </div>
      </article>
    </div>
  );
}
