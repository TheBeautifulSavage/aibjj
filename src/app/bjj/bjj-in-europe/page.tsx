import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "BJJ in Europe: The Continent Embraces the Gentle Art | AIBJJ", description: "European BJJ has grown from a small number of academies in the 1990s to one of the most developed regional scenes in the world, producing world champions a" };
export default function Page() {
  const tags = ["bjj-history", "competition", "ibjjf-worlds", "beginners"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">BJJ in Europe: The Continent Embraces the Gentle Art</h1>
        <p className="mt-4 text-xl text-zinc-400">European BJJ has grown from a small number of academies in the 1990s to one of the most developed regional scenes in the world, producing world champions and hosting major international tournaments.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Early Development</h2><p>BJJ arrived in Europe in the 1990s, initially through Gracie family connections and early UFC popularity. The UK, Germany, Netherlands, Spain, and Portugal developed active scenes earliest, partly due to proximity to Brazilian immigrant communities and strong interest from combat sports practitioners. Early European academies were small and often isolated from each other.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">IBJJF European Championships</h2><p>The IBJJF European Open, held annually in Lisbon, Portugal, has become one of the largest and most prestigious tournaments on the international calendar. European practitioners now regularly place and win at IBJJF Worlds and ADCC, demonstrating the development depth of the regional scene. Countries like the UK, France, Germany, and Portugal have produced world champions.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Notable European Champions</h2><p>Ffion Davies of Wales became an ADCC champion. British practitioners have won multiple world championships. Scandinavian and Eastern European countries have developed rapidly in recent years with dedicated academies and active local competition circuits. The breadth of European BJJ talent has expanded substantially in the past decade.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Current State</h2>
            <p>European BJJ now includes thousands of academies, active national federations in most countries, and regular international competition calendars. The European scene is distinct from American and Brazilian BJJ in some ways — it tends to emphasize technical development and has produced practitioners with exceptional conceptual understanding of the art.</p>
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
