import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "Beatriz Mesquita: The Greatest Female BJJ Competitor | AIBJJ", description: "Beatriz Mesquita is the most decorated female BJJ competitor in history with eight world championship gold medals, multiple ADCC titles, and a complete gam" };
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
        <h1 className="text-4xl font-black sm:text-5xl">Beatriz Mesquita: The Greatest Female BJJ Competitor</h1>
        <p className="mt-4 text-xl text-zinc-400">Beatriz Mesquita is the most decorated female BJJ competitor in history with eight world championship gold medals, multiple ADCC titles, and a complete game that has dominated every level of international competition.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Eight World Championships</h2><p>Beatriz Mesquita won eight IBJJF World Championship gold medals — the most by any female practitioner in history. Her titles span multiple weight classes and the absolute, demonstrating unusual versatility and technical adaptability. Competing against different body types and game styles at each weight class requires adjustments that most specialists cannot make.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Complete Technical Game</h2><p>Mesquita is known for an exceptionally complete game — effective from guard, capable of passing, and dangerous with multiple submissions. This two-way proficiency at the highest level is what separates the all-time greats from merely excellent practitioners. Her guard passing and guard retention are both elite, making her difficult to game plan against.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">ADCC Success</h2><p>Mesquita also performed at the highest levels in no-gi competition, winning ADCC titles and demonstrating that her gi-based skills translate effectively to submission wrestling contexts. The ability to win in both gi and no-gi requires technical depth that transcends gi-specific technique — genuine understanding of body mechanics and positional control.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy</h2>
            <p>Mesquita has become an ambassador for women's BJJ globally. Her teaching, competitive legacy, and persona as an authentic practitioner who loves the art for itself have made her one of the most respected figures in the sport regardless of gender.</p>
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
