import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ in Australia: The Southern Hemisphere Powerhouse | AIBJJ", description: "Australia has developed one of the strongest BJJ scenes outside of Brazil and the United States, producing world champions and hosting elite international " };
export default function Page() {
  const tags = ["bjj-history", "competition", "adcc", "beginners"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">BJJ in Australia: The Southern Hemisphere Powerhouse</h1>
        <p className="mt-4 text-xl text-zinc-400">Australia has developed one of the strongest BJJ scenes outside of Brazil and the United States, producing world champions and hosting elite international competition.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Development of Australian BJJ</h2><p>BJJ arrived in Australia in the 1990s and grew rapidly due to strong interest from the existing martial arts and grappling communities. Australian practitioners benefited from geographic isolation that encouraged self-reliance and technical innovation rather than dependency on visiting Brazilian instructors. The result is a distinct Australian approach that blends global best practices with local competitive culture.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">World-Class Competitors</h2><p>Australia has produced multiple ADCC and IBJJF world champions. Craig Jones — one of the most accomplished leg lock specialists in history — is Australian. The depth of Australian competition, particularly in submission grappling, reflects decades of quality coaching and active competition calendars.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Competition Scene</h2><p>Australian nationals and open tournaments draw hundreds of competitors. Organizations like Grappling Industries and local federations have created robust competition pathways from beginner to elite. Australian practitioners regularly travel internationally for competition and bring international practitioners to Australia for major events.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Academy Culture</h2>
            <p>Australian BJJ academies tend to emphasize functional, competition-tested technique. The culture values rolling and testing technique against resistance more than theoretical knowledge. This pragmatic approach has produced practitioners who perform well in international competition despite geographic disadvantage in terms of training partner availability.</p>
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
