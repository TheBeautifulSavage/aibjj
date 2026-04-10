import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Lucas Lepri: Alliance Lightweight Legend | AIBJJ", description: "Lucas Lepri is a six-time IBJJF World Champion in the lightweight division and one of the most technically complete practitioners in BJJ history. His blend" };
export default function Page() {
  const tags = ["lucas-lepri", "ibjjf-worlds", "gi-bjj", "competition"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Lucas Lepri: Alliance Lightweight Legend</h1>
        <p className="mt-4 text-xl text-zinc-400">Lucas Lepri is a six-time IBJJF World Champion in the lightweight division and one of the most technically complete practitioners in BJJ history. His blend of guard work, passing, and submission hunting made him nearly unstoppable.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Championship Dominance</h2><p>Lucas Lepri won six IBJJF World Championship gold medals in the lightweight division — among the most competitive weight classes in international BJJ. Lightweight competition features the highest density of elite technical practitioners, making Lepri&apos;s dominance even more remarkable. He also competed effectively in the absolute division against much heavier opponents.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Technical Foundation</h2><p>Lepri&apos;s game is built on a foundation of exceptional guard work — particularly closed guard and half guard — combined with elite guard passing ability. This two-way technical proficiency is relatively rare: most practitioners specialize in either guard or top game. Lepri&apos;s ability to threaten from both positions made him uniquely difficult to game plan against.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Alliance and Coaching</h2><p>Lepri affiliates with Alliance BJJ and has become one of the most respected coaches in American BJJ, running his academy in Charlotte, North Carolina. His teaching reflects the technical sophistication of his competition game, and his students regularly perform at high levels in national and international competition.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy at Lightweight</h2>
            <p>Lepri&apos;s contribution to lightweight BJJ technique is substantial. His guard passing innovations — particularly his modifications of the leg drag and knee slice — influenced how the top game is played at lighter weight classes globally.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Like the Pros</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
          <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Guide</Link>
          <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find Academy</Link>
        </div>
      </article>
    </div>
  );
}
