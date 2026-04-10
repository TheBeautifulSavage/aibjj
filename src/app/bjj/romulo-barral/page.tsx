import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "Romulo Barral: Alliance's Consistent Champion | AIBJJ", description: "Romulo Barral is a six-time IBJJF World Champion and one of the most technically refined guard players in BJJ history. His ability to work from both gi and" };
export default function Page() {
  const tags = ["romulo-barral", "ibjjf-worlds", "gi-bjj", "guard-passing"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Romulo Barral: Alliance's Consistent Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Romulo Barral is a six-time IBJJF World Champion and one of the most technically refined guard players in BJJ history. His ability to work from both gi and no-gi contexts made him an unusually versatile champion.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Training Background</h2><p>Romulo Barral was born in 1983 in Minas Gerais, Brazil, and moved to the United States to compete and teach, eventually establishing Gracie Barra Northridge in California. He trained under Carlos Gracie Jr. and developed his game in the competitive Alliance and Gracie Barra ecosystems. His technical development over two decades is evident in the sophistication of his modern teaching.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Championship Record</h2><p>Barral won six IBJJF World Championship gold medals in the medium-heavy division, demonstrating extraordinary consistency at the highest level over multiple years. Championship consistency requires not just technical skill but also competitive intelligence, physical conditioning, and the ability to perform under pressure — all of which Barral demonstrated repeatedly across his competitive career.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Teaching and Legacy</h2><p>Barral is widely regarded as one of the best teachers in BJJ. His instructional videos and seminar curriculum are known for exceptional conceptual clarity. He focuses on the underlying principles of position and movement rather than just technique demonstration, producing students who understand why techniques work rather than just how to execute them.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Guard Game</h2>
            <p>Barral&apos;s guard work — particularly his De La Riva, spider, and X-guard systems — influenced an entire generation of guard players. His approach to guard retention uses active framing and hip movement rather than passive gripping, making it adaptable to both gi and no-gi contexts.</p>
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
