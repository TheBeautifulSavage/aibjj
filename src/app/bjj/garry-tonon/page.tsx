import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "Garry Tonon: Submission Machine and MMA Fighter | AIBJJ", description: "Garry Tonon is one of the most exciting and technically gifted submission grapplers of the modern era. His seamless transitions between positions and relen" };
export default function Page() {
  const tags = ["no-gi", "leg-locks", "adcc", "mma"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Garry Tonon: Submission Machine and MMA Fighter</h1>
        <p className="mt-4 text-xl text-zinc-400">Garry Tonon is one of the most exciting and technically gifted submission grapplers of the modern era. His seamless transitions between positions and relentless submission hunting made him a fan favorite and an elite competitor.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Grappling Career</h2><p>Garry Tonon was born in 1993 in Long Island, New York, and trained under Tom Deblass and John Danaher. He became one of the core members of the Danaher Death Squad, winning multiple EBI tournaments and reaching the ADCC finals. His submission rate in competition is among the highest ever recorded at the elite level, reflecting an attacking philosophy that prioritizes finishing over points.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Transition to MMA</h2><p>Tonon transitioned to mixed martial arts, signing with ONE Championship in Asia. He compiled an impressive undefeated MMA record, showcasing how elite submission grappling translates to the cage. His submissions in MMA came from various positions — demonstrating the versatility of the DDS system outside of pure grappling contexts.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Style and Technique</h2><p>Tonon is known for flowing, dynamic grappling that links positions together seamlessly. Unlike practitioners who specialize in a single system, Tonon attacks from everywhere — leg locks, back takes, guillotines, and armbars all appear in his finishes. This unpredictability makes him difficult to prepare for and exciting to watch.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Community Impact</h2>
            <p>Tonon is one of the most respected figures in the global BJJ community for his genuine passion for the sport and his willingness to share knowledge. His work with the DDS system and his transition to MMA opened conversations about how elite grapplers can adapt their skills across contexts.</p>
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
