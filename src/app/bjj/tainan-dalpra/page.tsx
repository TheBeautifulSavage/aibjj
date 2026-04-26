import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "Tainan Dalpra: The Undefeated Prodigy | AIBJJ", description: "Tainan Dalpra entered the black belt division and dominated immediately, compiling an undefeated record against elite competition. His technical sophistica" };
export default function Page() {
  const tags = ["ibjjf-worlds", "gi-bjj", "competition", "gracie-family"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Tainan Dalpra: The Undefeated Prodigy</h1>
        <p className="mt-4 text-xl text-zinc-400">Tainan Dalpra entered the black belt division and dominated immediately, compiling an undefeated record against elite competition. His technical sophistication at a young age has drawn comparisons to the greatest champions in BJJ history.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Early Career</h2><p>Tainan Dalpra was born in Brazil and affiliated with Alliance BJJ under André Galvão at Atos for a period before developing his own association. He won world championships at every belt level before reaching black belt, creating enormous expectations for his senior career. His technical development was accelerated by high-level coaching and constant competition.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Black Belt Dominance</h2><p>Dalpra entered the black belt division and immediately established himself as one of the best in the world, winning the IBJJF World Championship and other major titles without losing matches. An undefeated record in BJJ is extraordinary rare — the competition depth at black belt means virtually every practitioner loses eventually. Dalpra has maintained his record through a combination of technical excellence and strategic competition selection.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Technical Style</h2><p>Dalpra is known for dynamic guard work, particularly his back take chains from guard positions. His back takes are fluid and creative — he finds angles that practitioners do not typically see coming. From back control, his finishing is precise and methodical. His overall game reflects modern Alliance technical development combined with natural creativity.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Future Trajectory</h2>
            <p>At his current age, Dalpra is positioned to potentially become one of the most decorated champions in BJJ history if he continues competing at the same level. The question is whether any practitioner can maintain an undefeated record at the highest level indefinitely — history suggests it becomes increasingly difficult as the field adjusts.</p>
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
