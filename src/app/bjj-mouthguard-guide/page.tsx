import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ Mouthguard: Why You Need One and How to Choose | AIBJJ", description: "A mouthguard is one of the most important and overlooked pieces of equipment in BJJ. Protect your teeth and jaw with this essential guide." };
export default function Page() {
  const tags = ["beginners", "self-defense"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Mouthguard: Why You Need One and How to Choose</h1>
        <p className="mt-4 text-xl text-zinc-400">A mouthguard is one of the most important and overlooked pieces of equipment in BJJ. Protect your teeth and jaw with this essential guide.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Why BJJ Requires a Mouthguard</h2><p>Accidental elbows, knees, and head collisions happen in BJJ even in controlled training. Without a mouthguard, a sudden impact can chip or break teeth, damage dental work, or cause jaw injuries. A quality mouthguard absorbs and distributes impact force, significantly reducing injury risk. The cost of a single dental repair vastly exceeds the cost of good mouthguard protection.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Types of Mouthguards</h2><p>Boil-and-bite mouthguards are the most common option — affordable, available at sporting goods stores, and fit reasonably well. Custom mouthguards from a dentist fit precisely and are more comfortable but cost significantly more. For BJJ, a mouthguard that does not interfere with breathing is important — avoid bulky designs that cause mouth breathing during rolling.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Top Mouthguard Options for BJJ</h2><p>Shock Doctor, Battle, and SISU are popular options. SISU thin guards in particular have become popular in BJJ and grappling because they allow normal breathing and speech while providing adequate protection. Custom guards from your dentist are the gold standard but represent a significant investment that becomes worthwhile for regular training.</p></section>
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
