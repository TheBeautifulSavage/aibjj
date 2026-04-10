import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Alliance BJJ: Building World Champions | AIBJJ", description: "Alliance BJJ is one of the most successful competition teams in BJJ history, producing dozens of world champions and representing the pinnacle of competiti" };
export default function Page() {
  const tags = ["gracie-family", "bjj-history", "competition", "ibjjf-worlds"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Alliance BJJ: Building World Champions</h1>
        <p className="mt-4 text-xl text-zinc-400">Alliance BJJ is one of the most successful competition teams in BJJ history, producing dozens of world champions and representing the pinnacle of competitive technical development.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Foundation</h2><p>Alliance was founded in 1993 by Romero Cavaca and Fabio Gurgel in São Paulo, Brazil. The team developed a competition-focused training culture that emphasized technical development and consistent mat time. Their early success in Brazilian competition established a reputation that attracted elite talent.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">World Championship Record</h2><p>Alliance has won more IBJJF World Championship team titles than any other organization — a record that reflects exceptional competitive depth across weight classes and belt levels. Individual Alliance champions include Marcelo Garcia, Romulo Barral, Bernardo Faria, Lucas Lepri, and many others. This concentration of champions reflects exceptional coaching quality and a competitive culture that elevates everyone.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Training Culture</h2><p>Alliance academies emphasize drilling, positional training, and regular competition. The training culture is serious and competitive without being exclusionary — recreational practitioners train alongside competitors. The technical standards are exceptionally high, and Alliance black belts are among the most sought-after instructors globally.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy</h2>
            <p>Alliance&apos;s influence on BJJ technique and culture extends far beyond its direct membership. The competitive standard they set has raised the level of the entire sport. Their approach to technical development — systematic, competition-tested, demanding but respectful — has been adopted and adapted by teams worldwide.</p>
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
