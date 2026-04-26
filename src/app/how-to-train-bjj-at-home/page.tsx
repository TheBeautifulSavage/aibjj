import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Train BJJ at Home: Solo Drilling Guide | AIBJJ",
  description: "You cannot fully replace mat time, but smart home training between sessions significantly accelerates BJJ development. This guide covers what actually work",
};

export default function Page() {
  const tags = ["beginners", "bjj-history"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">How to Train BJJ at Home: Solo Drilling Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">You cannot fully replace mat time, but smart home training between sessions significantly accelerates BJJ development. This guide covers what actually works.</p>
        <div className="mt-10 space-y-3">

          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What BJJ techniques can you drill alone at home?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Hip escapes (shrimping) are the most important solo drill — they build the foundational movement of BJJ defense. Bridge and roll, technical standup, guard recovery movements, and sit-ups sweeps can all be drilled solo. Shadow drilling — visualizing an opponent and moving through technique sequences — builds mental muscle memory and is highly underrated.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">How should I structure a solo BJJ drilling session?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">A 20-30 minute home session might include: 5 minutes of hip mobility and bridge work, 10 minutes of solo technique drilling (hip escapes, rolls, breakfalls), 10 minutes of visualization and shadow drilling, 5 minutes of flexibility work targeting hips and shoulders. Consistency matters more than duration — 20 minutes daily is more valuable than 2 hours on weekends.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Can I use a grappling dummy for home BJJ training?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">A quality grappling dummy helps for positional drilling and specific technique repetition. However, dummies cannot replicate the dynamic resistance of a real training partner — they will not defend, move unpredictably, or create realistic pressure. Use a dummy for technique repetition, not as a substitute for partner drilling. Budget options work fine for basic positional work.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What is the most important thing to drill at home?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Hip escapes — without question. The ability to move your hips efficiently is the foundation of all BJJ ground movement. Shrimping and reverse shrimping should be second nature. Practitioners who do 100 hip escapes per day consistently develop noticeably better ground movement than those who drill only at the academy.</p>
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
