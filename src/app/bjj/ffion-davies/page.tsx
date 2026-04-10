import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Ffion Davies: ADCC Champion and Welsh Phenom | AIBJJ", description: "Ffion Davies is a multiple ADCC World Champion and one of the most accomplished female grapplers in history. The Welsh practitioner dominated no-gi competi" };
export default function Page() {
  const tags = ["adcc", "no-gi", "competition", "ibjjf-worlds"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Ffion Davies: ADCC Champion and Welsh Phenom</h1>
        <p className="mt-4 text-xl text-zinc-400">Ffion Davies is a multiple ADCC World Champion and one of the most accomplished female grapplers in history. The Welsh practitioner dominated no-gi competition with relentless athleticism and technical excellence.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Background</h2><p>Ffion Davies was born in Wales and began training jiu-jitsu in her teens. She rapidly became one of the most accomplished female grapplers in British and eventually global history. Her competitive record spans both gi and no-gi, with particular excellence in no-gi submission grappling at the ADCC level.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">ADCC Championships</h2><p>Davies won the ADCC World Championship in her weight class, defeating elite international competition and becoming the first Welsh grappler to win an ADCC title. Her performances demonstrated world-class submission hunting ability combined with exceptional defensive skills. She competes in the 60kg and under division.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Style and Technique</h2><p>Davies is known for explosive, athletic grappling with a strong leg lock game and excellent back control. Her transitions between positions are fast and fluid. She competes with an attacking mentality that prioritizes submissions over points — a philosophy well-suited to the ADCC format where the first half rewards only submission finishing.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Impact and Legacy</h2>
            <p>Davies has become one of the most prominent figures in European BJJ and has helped raise the profile of female grappling globally. Her success demonstrates that world-class female grappling exists outside of traditional BJJ powerhouses in Brazil and the United States, and her accomplishments have inspired practitioners across Europe.</p>
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
