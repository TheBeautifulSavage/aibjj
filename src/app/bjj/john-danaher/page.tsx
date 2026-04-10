import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "John Danaher: The Professor Who Changed Leg Locks | AIBJJ", description: "John Danaher is widely considered the greatest BJJ coach in history. His systematic approach to leg locks and back control revolutionized submission grappl" };
export default function Page() {
  const tags = ["gordon-ryan", "no-gi", "leg-locks", "adcc"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">John Danaher: The Professor Who Changed Leg Locks</h1>
        <p className="mt-4 text-xl text-zinc-400">John Danaher is widely considered the greatest BJJ coach in history. His systematic approach to leg locks and back control revolutionized submission grappling and produced the most dominant competitive team of the modern era.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Background and Philosophy</h2><p>John Danaher was born in New Zealand and educated at Columbia University, where he earned a philosophy degree before discovering Brazilian jiu-jitsu. He began training under Renzo Gracie and quickly developed a reputation for extraordinary analytical depth. His philosophical background manifests in his approach to BJJ: he seeks to understand the principles underlying techniques rather than memorize movements.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Building the Danaher Death Squad</h2><p>Danaher assembled a group of elite athletes in New York City — including Garry Tonon, Gordon Ryan, Craig Jones, and others — and applied his systematic methodology to their training. The result was the Danaher Death Squad, which dominated no-gi submission grappling for nearly a decade. DDS athletes won multiple ADCC titles and championship events using Danaher's leg lock system.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">The Leg Lock Revolution</h2><p>Before Danaher, leg locks were considered secondary submissions in most BJJ systems. He systematized the entire lower body attack game — creating a hierarchical framework of positions (ashi garami entanglements), entries, and finishes that could be learned progressively. His work made leg locks not just dangerous but teachable, and his influence is now felt throughout the grappling world.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Teaching and Legacy</h2>
            <p>Danaher produces exceptionally detailed instructional content that has sold millions of dollars and influenced hundreds of thousands of practitioners worldwide. His ability to explain complex mechanical principles in accessible language is unmatched in martial arts instruction. He relocated to Austin, Texas with the B-Team and continues coaching elite athletes.</p>
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
