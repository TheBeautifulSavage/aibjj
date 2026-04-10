import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ Stripes: What Do They Mean? | AIBJJ", description: "The stripe system in BJJ provides intermediate milestones between belt promotions. Understanding what stripes represent helps practitioners gauge their pro" };
export default function Page() {
  const tags = ["beginners", "competition"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Stripes: What Do They Mean?</h1>
        <p className="mt-4 text-xl text-zinc-400">The stripe system in BJJ provides intermediate milestones between belt promotions. Understanding what stripes represent helps practitioners gauge their progress.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">What Belt Stripes Represent</h2><p>Each BJJ belt has up to four stripes that mark progress toward the next belt. Stripes are awarded at instructor discretion and represent continued development — more mat time, technical improvement, and readiness for the next promotion. There is no universal standard for when stripes are awarded; each instructor uses their own criteria. Some award stripes regularly; others promote directly to the next belt.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Are Stripes Required for Belt Promotion</h2><p>No — stripes are not universally required for belt promotions. Some instructors use the stripe system regularly; others do not use it at all. The only consistent requirement for belt promotion in BJJ is demonstrated skill and appropriate mat time as judged by your instructor. The IBJJF sets minimum age requirements for some belt levels but does not mandate stripe systems.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">How to Earn Stripes Faster</h2><p>The factors that earn stripes are the same ones that earn belt promotions: mat time, technical improvement, competition results, attitude, and contribution to the academy community. Attending class consistently, drilling diligently, competing when appropriate, and being a positive training partner all contribute to faster progression through both stripes and belts.</p></section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI</h2>
          <p className="mt-2 text-zinc-400">AI coaching, training journal, technique library — all free to start.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
          <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find Academy</Link>
          <Link href="/coach" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1.5 text-sm text-red-400">AI Coach →</Link>
        </div>
      </article>
    </div>
  );
}
