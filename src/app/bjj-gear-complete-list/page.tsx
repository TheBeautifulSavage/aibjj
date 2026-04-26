import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Complete BJJ Equipment List for Beginners | AIBJJ", description: "Everything you need to start training BJJ — what to buy, what to skip, and in what order to invest your gear budget." };
export default function Page() {
  const tags = ["beginners", "gi-bjj", "no-gi"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Complete BJJ Equipment List for Beginners</h1>
        <p className="mt-4 text-xl text-zinc-400">Everything you need to start training BJJ — what to buy, what to skip, and in what order to invest your gear budget.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Essential Gear to Start</h2><p>You can start BJJ with minimal investment: a gi (or shorts and rash guard for no-gi), and a mouthguard. Ear guards are optional but recommended for those who train regularly and want to prevent cauliflower ear. Everything else — grappling shorts, spats, competition gear — can wait until you are sure you will continue training.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Gis vs No-Gi: What to Buy First</h2><p>If your academy primarily trains gi, buy a gi first. If no-gi focused, invest in rash guards and grappling shorts. Many academies train both — check what your classmates typically wear. A single gi is sufficient to start; buy a second once you are training regularly enough that the first gi cannot dry between sessions.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Gear Progression as You Advance</h2><p>As your training becomes more serious, your gear investment grows appropriately. Competitors need IBJJF-legal gis in white, blue, or black. Regular no-gi training justifies multiple rash guards. High-level practitioners often invest in specialized equipment for conditioning, injury prevention, and recovery. Start minimal; add gear only when you have identified specific needs.</p></section>
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
