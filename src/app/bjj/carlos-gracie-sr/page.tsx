import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Carlos Gracie Sr: The Founder Who Started Everything | AIBJJ", description: "Carlos Gracie Sr. brought jiu-jitsu from Mitsuyo Maeda to the Gracie family and spent his life developing and spreading the art that would become Brazilian" };
export default function Page() {
  const tags = ["gracie-family", "bjj-history", "self-defense", "beginners"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Carlos Gracie Sr: The Founder Who Started Everything</h1>
        <p className="mt-4 text-xl text-zinc-400">Carlos Gracie Sr. brought jiu-jitsu from Mitsuyo Maeda to the Gracie family and spent his life developing and spreading the art that would become Brazilian jiu-jitsu. His vision shaped everything that followed.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Learning from Maeda</h2><p>Carlos Gracie was born in 1902 in Belém, Pará, Brazil. As a teenager, he became a student of Mitsuyo Maeda — a world-traveling judoka from Japan who had settled in Brazil. Carlos trained under Maeda for several years, absorbing ground fighting techniques that would form the foundation of BJJ. He then taught his brothers, most notably Hélio.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Building the System</h2><p>Carlos dedicated his life to developing, teaching, and proving his family&apos;s jiu-jitsu. He organized the challenge match tradition, developed the early curriculum, and created a distinctive philosophy around the art that emphasized its self-defense utility and its capacity to equalize physical disadvantages. His seven children and numerous students became champions and teachers.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">The Gracie Diet</h2><p>Carlos was also famous for developing the Gracie Diet — a nutritional system based on his beliefs about food combining and health. He practiced it religiously and attributed his longevity partly to its principles. Whether or not the diet&apos;s specific claims are scientifically validated, it reflects Carlos&apos;s holistic approach to the art — jiu-jitsu was not just physical technique but a complete approach to life.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy</h2>
            <p>Carlos Gracie died in 1994 at age 91. His legacy is the global BJJ phenomenon that billions of people around the world have been touched by — whether through martial arts, MMA, or self-defense. Every BJJ practitioner today trains in a system that traces directly to Carlos Gracie&apos;s vision and work.</p>
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
