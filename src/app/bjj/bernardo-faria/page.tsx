import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Bernardo Faria: The Over-Under Pass Master | AIBJJ", description: "Bernardo Faria is a five-time IBJJF World Champion best known for revolutionizing pressure passing with his body lock over-under system. His methodical, re" };
export default function Page() {
  const tags = ["bernardo-faria", "ibjjf-worlds", "gi-bjj", "guard-passing"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Bernardo Faria: The Over-Under Pass Master</h1>
        <p className="mt-4 text-xl text-zinc-400">Bernardo Faria is a five-time IBJJF World Champion best known for revolutionizing pressure passing with his body lock over-under system. His methodical, relentless passing game defeated every elite competitor he faced.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Five World Championships</h2><p>Bernardo Faria won five IBJJF World Championship gold medals in the ultra-heavy division, defeating the best heavyweight practitioners in the world over multiple years. His victories came against opponents who knew exactly what he was going to do — and still could not stop it. This is the hallmark of a truly systematic approach to technique.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">The Over-Under Pass</h2><p>Faria&apos;s primary weapon — the body lock over-under guard pass — is now one of the most studied passing systems in BJJ. He reaches one arm over his opponent&apos;s hip and one under the far leg, locks his hands together, drives his chest into the thigh, and walks around to side control. The technique looks simple but requires specific weight distribution and timing that take years to develop.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">BJJ Fanatics and Teaching</h2><p>After retiring from high-level competition, Faria built one of the most successful BJJ instructional businesses in the industry. His teaching methodology breaks techniques into digestible components with exceptional detail. He emphasizes that mastery of a few techniques executed perfectly beats superficial knowledge of many.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Character and Community</h2>
            <p>Faria is as well-known for his character as his technique. His humility, work ethic, and genuine passion for the art have made him one of the most respected figures in BJJ regardless of competitive achievement. His podcast and online presence reflect an authentic love for the sport that resonates with practitioners worldwide.</p>
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
