import { Metadata } from "next";
import Link from "next/link";
export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = { title: "Xande Ribeiro: The Defensive Genius | AIBJJ", description: "Xande Ribeiro is a multiple world champion known as one of the most technically sophisticated defenders in BJJ history. His ability to survive and escape f" };
export default function Page() {
  const tags = ["xande-ribeiro", "ibjjf-worlds", "gi-bjj", "competition"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Xande Ribeiro: The Defensive Genius</h1>
        <p className="mt-4 text-xl text-zinc-400">Xande Ribeiro is a multiple world champion known as one of the most technically sophisticated defenders in BJJ history. His ability to survive and escape from seemingly impossible positions inspired a generation of practitioners.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Background</h2><p>Xande Ribeiro was born in 1980 in Rio de Janeiro, Brazil, and trained under Royler Gracie and Fabio Gurgel before developing his own competitive identity. He is the brother of Saulo Ribeiro, another multiple world champion, and the two developed their games together in one of the most successful sibling partnerships in BJJ history.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Defensive Mastery</h2><p>Xande&apos;s greatest contribution to BJJ is demonstrating the value of defensive excellence. His escapes from mount, back control, and side control are considered some of the best ever recorded. He has survived positions that would submit most black belts, using precise framing, weight distribution, and timing to create opportunities from hopeless-seeming situations.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">SAS BJJ</h2><p>Xande and Saulo founded SAS BJJ (Saulo and Xande System) and the University of Jiu-Jitsu in San Diego, one of the most respected academies in the United States. Their teaching methodology emphasizes defensive fundamentals before offensive technique — a philosophy that produces practitioners with complete, resilient games.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Legacy</h2>
            <p>Xande won multiple world championships across weight classes and was one of the most feared competitors of his era. His match against Roger Gracie at ADCC 2009 — where Roger submitted him with a rear naked choke — is considered one of the most significant performances in submission grappling history, demonstrating both the quality of the competition and Roger&apos;s exceptional finishing ability.</p>
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
