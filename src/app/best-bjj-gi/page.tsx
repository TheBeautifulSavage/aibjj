import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Best BJJ Gi: Complete Buying Guide | AIBJJ", description: "Find the best BJJ gi for your training. We cover fit, weave type, durability, and the top brands for every budget." };
export default function Page() {
  const tags = ["gi-bjj", "beginners", "competition"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Best BJJ Gi: Complete Buying Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Find the best BJJ gi for your training. We cover fit, weave type, durability, and the top brands for every budget.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">What to Look for in a BJJ Gi</h2><p>The right BJJ gi fits snugly without restricting movement — your instructor should not be able to grab excessive fabric. Single weave gis are lighter and cooler; double weave gis are heavier, more durable, and harder to grip. Pearl weave is the most popular option, balancing weight and durability. IBJJF-legal gis must be white, blue, or black with no excessive patches. Shrinkage is significant: order one size larger than expected and pre-shrink in hot water.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Top BJJ Gi Brands</h2><p>Established brands include Shoyoroll (premium, limited drops), Fuji (reliable value), Tatami (excellent quality for price), Storm (competition focused), Scramble (European quality), and Mizuno (Japanese manufacturing). Beginners do well with Fuji or Tatami. Competitors often gravitate to lighter competition cuts. Personal fit matters more than brand — try before buying when possible.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Care and Maintenance</h2><p>Wash your gi after every session — no exceptions. Use cold water to minimize shrinkage. Never put in a dryer unless intentionally shrinking. Air dry instead. Wash with antimicrobial detergent to prevent odor and bacterial buildup. A gi that is never dried in a dryer will last many years longer than one regularly heat-dried.</p></section>
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
