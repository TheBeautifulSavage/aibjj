import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Submit Bigger Opponents in BJJ | AIBJJ",
  description: "BJJ was designed for smaller practitioners to defeat larger ones. Here is how to actually do it — the principles that make technique triumph over size.",
};

export default function Page() {
  const tags = ["submissions", "self-defense", "beginners"];
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
        <h1 className="text-4xl font-black sm:text-5xl">How to Submit Bigger Opponents in BJJ</h1>
        <p className="mt-4 text-xl text-zinc-400">BJJ was designed for smaller practitioners to defeat larger ones. Here is how to actually do it — the principles that make technique triumph over size.</p>
        <div className="mt-10 space-y-3">

          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Can technique really defeat size in BJJ?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Yes — with important caveats. Technique consistently defeats untrained size. Against a large, strong, but unskilled opponent, good BJJ works reliably. Against a large, strong, trained opponent, technique helps but size remains a significant factor. The gap closes substantially as technical level increases — at black belt level, a skilled smaller practitioner can regularly submit much larger opponents.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What are the best submissions against bigger opponents?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Chokes are generally more effective against larger opponents than joint locks because they attack the cardiovascular system rather than muscular strength. Rear naked choke from back control and triangles from guard are particularly effective because they use your entire body weight and leg strength against their neck. Joint locks work, but large opponents often have more resistance time before tapping.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What is the key principle for fighting bigger opponents in BJJ?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Never fight strength with strength. Use angles, leverage, and timing. Position before submission — get to a dominant position first, then hunt submissions. Fighting directly against a bigger, stronger opponent from neutral positions plays to their advantage. Take their back, get underneath them, use their weight against them.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What positions are best against bigger opponents?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Back control removes their strength advantage most completely. Guard from bottom is better than being pinned under mount by a much larger person. The key is staying mobile and avoiding flat on your back under heavy top pressure. Half guard, deep half, and leg entanglements can all work well against larger opponents because they use the opponent's weight against them.</p>
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
