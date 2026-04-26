import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "Gracie Barra: The World's Largest BJJ Organization | AIBJJ", description: "Gracie Barra, founded by Carlos Gracie Jr., has grown from a single academy in Rio de Janeiro to over 1,000 schools worldwide — making it the largest BJJ o" };
export default function Page() {
  const tags = ["gracie-family", "bjj-history", "beginners", "competition"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Gracie Barra: The World's Largest BJJ Organization</h1>
        <p className="mt-4 text-xl text-zinc-400">Gracie Barra, founded by Carlos Gracie Jr., has grown from a single academy in Rio de Janeiro to over 1,000 schools worldwide — making it the largest BJJ organization on the planet.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Founding and Early Growth</h2><p>Gracie Barra was founded by Carlos Gracie Jr. in 1986 in the Barra da Tijuca neighborhood of Rio de Janeiro — giving the organization its name. Carlos Gracie Jr. is a son of Carlos Gracie Sr. and a black belt under his father and uncle Hélio. He envisioned a structured, curriculum-based approach to BJJ teaching that could scale globally.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Global Expansion</h2><p>Gracie Barra expanded first throughout Brazil, then internationally as practitioners emigrated and the UFC generated global interest in BJJ. The organization developed a standardized curriculum, teaching certification program, and franchise model that allowed quality-controlled expansion. Today Gracie Barra has over 1,000 academies in more than 40 countries.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Competitive Legacy</h2><p>Gracie Barra has produced numerous world champions, including multiple IBJJF and ADCC champions. The organization's competitive emphasis — particularly at the team level — has driven technical development across its global network. Team Gracie Barra has won the IBJJF team championship multiple times.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Structure and Philosophy</h2>
            <p>Gracie Barra emphasizes uniform standards, professional instruction, and a welcoming environment for all levels of practitioner. Their belt curriculum is codified and their instructor certification process maintains quality across global locations. This institutional approach has been both celebrated for enabling growth and criticized for potentially prioritizing franchise standards over individual technical development.</p>
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
