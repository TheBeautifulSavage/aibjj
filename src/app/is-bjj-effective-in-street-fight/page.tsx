import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Is BJJ Effective in a Street Fight? | AIBJJ", description: "BJJ is widely considered one of the most effective martial arts for real confrontations. Here is an honest analysis of its strengths and limitations." };
export default function Page() {
  const tags = ["self-defense", "mma", "beginners"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Is BJJ Effective in a Street Fight?</h1>
        <p className="mt-4 text-xl text-zinc-400">BJJ is widely considered one of the most effective martial arts for real confrontations. Here is an honest analysis of its strengths and limitations.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">What BJJ Does Well in Real Confrontations</h2><p>BJJ is specifically designed to control and neutralize opponents without necessarily causing serious harm. The ability to take someone to the ground and control them — preventing further attack — is extremely practical in real situations. Unlike striking arts, BJJ gives you options: you can restrain, escape, or submit without requiring lethal force.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">What BJJ Does Not Cover</h2><p>BJJ training in most academies does not include striking defense, multiple opponent scenarios, or weapons defense. These gaps matter in real confrontations. Pure sport BJJ practitioners who have never trained with striking awareness may find themselves unprepared for the standup phase of a real altercation. The best self-defense BJJ includes some awareness of the striking threat.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Realistic Self-Defense BJJ</h2><p>The most effective BJJ for self-defense combines ground fighting with clinch control, takedown defense, and awareness of environmental factors (walls, floors, objects). Gracie self-defense systems specifically address real-world scenarios. The fundamental BJJ skills of takedown defense, clinch control, and ground control remain highly valuable regardless of which specific system you train.</p></section>
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
