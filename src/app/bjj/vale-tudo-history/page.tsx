import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Vale Tudo: The Proving Ground of Brazilian Jiu-Jitsu | AIBJJ", description: "Vale tudo — Portuguese for anything goes — was the no-rules fighting system that the Gracie family used to test and prove their jiu-jitsu. Understanding va" };
export default function Page() {
  const tags = ["bjj-history", "gracie-family", "mma", "self-defense"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Vale Tudo: The Proving Ground of Brazilian Jiu-Jitsu</h1>
        <p className="mt-4 text-xl text-zinc-400">Vale tudo — Portuguese for anything goes — was the no-rules fighting system that the Gracie family used to test and prove their jiu-jitsu. Understanding vale tudo is essential to understanding BJJ's development.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Origins in Brazil</h2><p>Vale tudo fighting has roots in Brazilian circus performances and street fighting traditions from the early 20th century. The Gracie family adopted and formalized it as a method for testing their jiu-jitsu against all martial arts challenges. Their philosophy was simple: if your art does not work against a fully resisting opponent with no rules, it does not work at all.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">The Gracie Challenge</h2><p>The Gracie challenge — issuing open invitations to practitioners of any martial art to fight — was vale tudo in practice. Carlos and Hélio Gracie and later their sons and students fought hundreds of these matches over decades. The matches validated their system against boxers, wrestlers, capoeiristas, and others, building the body of evidence that made BJJ credible internationally.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Vale Tudo Goes Global</h2><p>Brazilian fighters took vale tudo international in the 1990s, participating in events in Japan and eventually the United States. The UFC was essentially a formalized vale tudo tournament — same concept, slightly more commercial presentation. The performances of Royce Gracie at early UFC events demonstrated vale tudo principles to millions of people simultaneously.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy in Modern MMA</h2>
            <p>Vale tudo evolved into modern MMA as organizations added rules for safety and broadcasting. The core principle — testing techniques against fully resisting opponents with minimal restrictions — remains the philosophical foundation of MMA. Every BJJ technique used in MMA today has been pressure-tested through decades of vale tudo competition.</p>
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
