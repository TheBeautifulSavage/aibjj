import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "Renzo Gracie: The Fighter's Fighter | AIBJJ", description: "Renzo Gracie is one of the most beloved figures in martial arts history — a combat veteran who competed in vale tudo and early MMA, a master teacher, and a" };
export default function Page() {
  const tags = ["gracie-family", "mma", "bjj-history", "no-gi"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Renzo Gracie: The Fighter's Fighter</h1>
        <p className="mt-4 text-xl text-zinc-400">Renzo Gracie is one of the most beloved figures in martial arts history — a combat veteran who competed in vale tudo and early MMA, a master teacher, and a genuine personality who embodies the spirit of jiu-jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Gracie Heritage</h2><p>Renzo Gracie was born in 1967 in Rio de Janeiro, a grandson of Carlos Gracie Sr. and nephew of Hélio Gracie. He grew up surrounded by the family tradition of vale tudo challenge matches and competitive BJJ, developing a fearless competitive spirit that would define his career. He is widely considered the most charismatic and personable of the Gracie fighting generation.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Vale Tudo and Early MMA Career</h2><p>Renzo competed in vale tudo in Brazil and Japan throughout the 1990s, fighting in events like Martial Arts Reality Superfight and Pride FC. He compiled a strong record against legitimate competition and became known for his aggressive, entertaining style. He fought some of the best submission wrestlers and MMA fighters of his era.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">The Renzo Gracie Academy</h2><p>Renzo established his academy in New York City, which became one of the most famous martial arts schools in the world. His students have included celebrities, athletes, and police officers, as well as some of the most accomplished grapplers of their generation. John Danaher, Matt Serra, and Georges St-Pierre all trained under Renzo at various points in their careers.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Character and Legacy</h2>
            <p>Renzo is as famous for his personality as for his achievements. His warmth, humor, and genuine love of martial arts have made him an ambassador for BJJ worldwide. His philosophy — that jiu-jitsu should make you a better person, not just a better fighter — reflects the humanistic tradition of the art at its best.</p>
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
