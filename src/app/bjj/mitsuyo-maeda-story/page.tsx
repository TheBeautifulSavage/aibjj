import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "Mitsuyo Maeda: The Japanese Judoka Who Started It All | AIBJJ", description: "Mitsuyo Maeda is the direct ancestor of Brazilian jiu-jitsu. His decision to teach Carlos Gracie launched a chain of transmission that would change martial" };
export default function Page() {
  const tags = ["bjj-history", "gracie-family", "beginners"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Mitsuyo Maeda: The Japanese Judoka Who Started It All</h1>
        <p className="mt-4 text-xl text-zinc-400">Mitsuyo Maeda is the direct ancestor of Brazilian jiu-jitsu. His decision to teach Carlos Gracie launched a chain of transmission that would change martial arts globally.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Early Life and Kodokan Training</h2><p>Mitsuyo Maeda was born in 1878 in Aomori Prefecture, Japan. He trained at the Kodokan under Jigoro Kano — judo's founder — becoming one of the top students of that era. Kano selected Maeda as one of several judoka to travel internationally and demonstrate judo's effectiveness, a project Kano used to spread his art globally.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">World Tour and Challenge Matches</h2><p>Maeda traveled through Europe, the Americas, and eventually South America engaging in demonstration matches and challenge contests. He demonstrated judo against wrestlers, boxers, and local fighters in country after country, compiling a remarkable record and building a reputation as one of the most effective fighters of his era. His ground fighting was particularly advanced for the time.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Arrival in Brazil</h2><p>Maeda arrived in Brazil in 1914 and eventually settled in Belém, Pará, where he became a circus performer and martial arts demonstrator. Through a connection with local businessman Gastão Gracie, he agreed to teach Carlos Gracie the techniques he had refined over his career. This transmission changed martial arts history.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy</h2>
            <p>Maeda died in 1941 in Brazil, never knowing the magnitude of what he had set in motion. The art his student Carlos Gracie developed — Brazilian jiu-jitsu — would eventually reach every country on earth and influence virtually every fighting system that came after it.</p>
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
