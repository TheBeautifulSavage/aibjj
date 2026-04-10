import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Gabi Garcia: The Most Dominant Female Grappler | AIBJJ", description: "Gabi Garcia is considered by many to be the greatest female grappler in history — a six-time world champion and multiple ADCC champion whose physical and t" };
export default function Page() {
  const tags = ["ibjjf-worlds", "adcc", "gi-bjj", "no-gi"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Gabi Garcia: The Most Dominant Female Grappler</h1>
        <p className="mt-4 text-xl text-zinc-400">Gabi Garcia is considered by many to be the greatest female grappler in history — a six-time world champion and multiple ADCC champion whose physical and technical dominance made her virtually unbeatable during her prime.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Unprecedented Dominance</h2><p>Gabi Garcia won six IBJJF World Championship titles and multiple ADCC championships with a level of dominance that has few parallels in the sport. Her combination of exceptional size — she competed in the absolute (open weight) — combined with legitimate technical skill made her virtually unbeatable during her competitive peak. She regularly submitted practitioners significantly smaller than herself.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Physical and Technical Profile</h2><p>Garcia&apos;s game is built on powerful pressure passing, clinch control, and upper body submission hunting. Her size advantage is substantial, but she also possesses genuine technical sophistication that would make her dangerous regardless of physical attributes. Her guard passing in particular has been studied extensively as a model for heavyweight techniques.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Transition to MMA and Combat Sports</h2><p>Garcia transitioned to mixed martial arts and K-1 kickboxing, bringing her grappling reputation to combat sports contexts. Her MMA career demonstrated both the value of elite grappling and the challenges of adapting submission grappling for contexts with striking. She remains one of the most recognizable figures in female combat sports globally.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy in Women's BJJ</h2>
            <p>Garcia&apos;s dominance elevated the profile of heavyweight women&apos;s BJJ and demonstrated that female practitioners could achieve the same level of technical sophistication as their male counterparts. Her legacy includes inspiring a generation of larger female practitioners who saw championship success as achievable.</p>
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
