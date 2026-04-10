import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "What Does BJJ Stand For? | AIBJJ", description: "BJJ stands for Brazilian jiu-jitsu — a ground-based martial art and grappling sport that focuses on submission techniques, takedowns, and positional contro" };
export default function Page() {
  const tags = ["beginners", "bjj-history"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">What Does BJJ Stand For?</h1>
        <p className="mt-4 text-xl text-zinc-400">BJJ stands for Brazilian jiu-jitsu — a ground-based martial art and grappling sport that focuses on submission techniques, takedowns, and positional control.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">BJJ: Brazilian Jiu-Jitsu</h2><p>BJJ is the abbreviation for Brazilian jiu-jitsu — a martial art, combat sport, and self-defense system that developed in Brazil from Japanese judo techniques brought by Mitsuyo Maeda in the early 20th century. The Gracie family refined these techniques into a distinct art emphasizing ground fighting, leverage-based submissions, and the principle that smaller, weaker practitioners can defeat larger opponents through superior technique.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Jiu-Jitsu vs Jiu-Jitsu vs Jujutsu</h2><p>The spelling varies: jiu-jitsu, jujitsu, and jujutsu all refer to related arts. Japanese jujutsu (and its derivative judo) are the direct ancestors of Brazilian jiu-jitsu. The Brazilian variant is typically written as jiu-jitsu or jiu jitsu. In common usage, BJJ refers specifically to the Brazilian sport and self-defense system developed by the Gracie family.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Why It Is Called Brazilian</h2><p>The Brazilian designation distinguishes the Gracie family system from other jiu-jitsu variants. While the techniques came from Japan, the Gracies — particularly Hélio Gracie — modified and developed them substantially over decades. The resulting system is distinct enough from its Japanese origins to warrant its own name, and its Brazilian heritage is central to its identity and culture.</p></section>
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
