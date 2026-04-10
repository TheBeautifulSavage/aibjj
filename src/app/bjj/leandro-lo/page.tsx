import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "Leandro Lo: 8-Time BJJ World Champion | AIBJJ", description: "Leandro Lo won 8 IBJJF World Championship titles across four weight classes, making him one of the most decorated competitors in the sport's history. His a" };
export default function Page() {
  const tags = ["leandro-lo", "ibjjf-worlds", "gi-bjj", "competition"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Leandro Lo: 8-Time BJJ World Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Leandro Lo won 8 IBJJF World Championship titles across four weight classes, making him one of the most decorated competitors in the sport's history. His aggressive guard passing and submission hunting defined an era.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Background and Rise</h2><p>Leandro Lo was born in 1990 in São Paulo, Brazil, and affiliated with NS Brotherhood and later his own association. He trained under a competitive system that emphasized points and positions, developing one of the most complete games ever seen. Lo won his first world title as a purple belt and continued winning at every belt level through black belt.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Eight World Titles</h2><p>Lo&apos;s eight world championship titles span the light, medium, light-heavy, and heavy divisions — an unprecedented feat that demonstrates elite technical proficiency across different competitive contexts. Competing against different body types and styles at each weight class required adaptability that most specialists cannot achieve. His finals performances at worlds are studied extensively by competitors worldwide.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Tragedy and Legacy</h2><p>Leandro Lo was tragically killed in August 2022 in São Paulo. His loss shocked the global BJJ community. He was 33 years old and had recently returned to competition. His legacy is preserved through his instructional content, his students, and the example he set of technical excellence combined with relentless competitive drive.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Style and Game</h2>
            <p>Lo&apos;s game was built around aggressive guard passing — particularly his knee slice and over-under systems — combined with a strong wrestling-based takedown game. His guard was also effective when needed, featuring De La Riva and spider guard variations. His ability to mix wrestling with guard work made him adaptable across gi and no-gi contexts.</p>
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
