import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "Marcus Almeida (Buchecha): 13-Time World Champion | AIBJJ",
  description: "Marcus 'Buchecha' Almeida holds the record for most IBJJF World Championship gold medals with 13 titles. His combination of wrestling, physical dominance, ",
};

export default function Page() {
  const tags = ["buchecha", "gi-bjj", "ibjjf-worlds", "competition"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">Marcus Almeida (Buchecha): 13-Time World Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Marcus 'Buchecha' Almeida holds the record for most IBJJF World Championship gold medals with 13 titles. His combination of wrestling, physical dominance, and technical jiu-jitsu made him virtually unbeatable in the gi.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Rise to Dominance</h2>
            <p>Marcus Almeida, nicknamed Buchecha, was born in 1990 in São Paulo, Brazil. He affiliated with Checkmat BJJ under Lucas Leite and rapidly rose through the competitive ranks. His nickname comes from a Brazilian slang term for a type of ear. Buchecha won his first world championship as a brown belt and then dominated the black belt divisions for nearly a decade.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">13 World Championships</h2>
            <p>Buchecha won 13 IBJJF World Championship gold medals — more than any competitor in history. He won in the super-heavyweight division and the absolute multiple times, defeating the best practitioners in the world with a combination of powerful wrestling-based takedowns and relentless top pressure. His matches against Roger Gracie in 2012 are considered among the greatest in worlds history.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Style and Game</h2>
            <p>Buchecha's game is built around explosive wrestling entries — particularly the double leg takedown — followed by crushing top pressure and guard passing. Once in top position, his physical power makes him nearly impossible to escape from. His guard is also highly effective when needed, featuring a strong open guard with leg lock threats. In later years, he developed dangerous leg lock attacks to complement his top game.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Transition to MMA</h2>
            <p>After his final IBJJF worlds title, Buchecha announced his retirement from jiu-jitsu competition to pursue MMA. He signed with ONE Championship and compiled an undefeated record in his debut MMA fights, showcasing his grappling in a new arena. His BJJ pedigree makes him one of the most technically accomplished fighters in MMA.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Like the Pros</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — everything to level up your BJJ.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
            <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
