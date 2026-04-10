import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Improve Guard Retention: 5 Key Principles | AIBJJ",
  description: "Guard retention is one of the most important skills in BJJ. If your guard gets passed repeatedly, you spend all your time in inferior positions. Fix it wit",
};

export default function Page() {
  const tags = ["guard-retention", "guard-passing", "beginners"];
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
        <h1 className="text-4xl font-black sm:text-5xl">How to Improve Guard Retention: 5 Key Principles</h1>
        <p className="mt-4 text-xl text-zinc-400">Guard retention is one of the most important skills in BJJ. If your guard gets passed repeatedly, you spend all your time in inferior positions. Fix it with these fundamentals.</p>
        <div className="mt-10 space-y-3">

          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What is guard retention in BJJ?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Guard retention is the ability to keep your guard — to prevent your opponent from passing to a dominant position. Good guard retention means you can maintain threatening positions even against competent passers. Poor retention means you spend rounds recovering guard and fighting from inferior positions rather than attacking.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What is the most important guard retention principle?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Hip movement is the foundation of all guard retention. The ability to shrimp, hip escape, and reposition efficiently determines how effective your retention will be. Practitioners who have excellent hip escape mechanics can recover guard from almost any passing attempt. Those without it struggle regardless of what guard they play.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">How do frames help guard retention?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Frames create space between you and your opponent when they are close to passing. The knee-elbow frame (knee on hip, elbow in line) prevents your opponent from closing the distance for side control. A frame does not create a submission or sweep — it creates a moment to re-establish position. Frames must be strong enough to withstand pressure but flexible enough to transition into attacks.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What is the difference between active and passive guard retention?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Active retention attacks the passing attempt — threading your legs back, creating frames, and immediately threatening submissions or sweeps when the guard is disturbed. Passive retention tries to hold position statically, which eventually fails against good passers. Active retention is significantly more effective because it makes passing costly for the top player.</p>
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
