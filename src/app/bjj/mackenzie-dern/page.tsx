import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Mackenzie Dern: From World Champion to UFC Fighter | AIBJJ", description: "Mackenzie Dern is a former BJJ world champion who transitioned to MMA and became a top UFC strawweight contender, demonstrating how elite submission grappl" };
export default function Page() {
  const tags = ["mma", "ibjjf-worlds", "gi-bjj", "self-defense"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">Mackenzie Dern: From World Champion to UFC Fighter</h1>
        <p className="mt-4 text-xl text-zinc-400">Mackenzie Dern is a former BJJ world champion who transitioned to MMA and became a top UFC strawweight contender, demonstrating how elite submission grappling translates to professional fighting.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">BJJ Heritage</h2><p>Mackenzie Dern was born in 1993 and is the daughter of Wellington Megaton Dern, a well-known BJJ black belt. She began training as a child and developed into one of the most accomplished female grapplers of her generation, winning multiple world championships and becoming one of the most recognized names in the sport before transitioning to MMA.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">World Championship Career</h2><p>Dern won multiple IBJJF World Championship titles and performed at the highest levels of international competition. Her guard work — particularly her open guard systems and submission hunting — reflected sophisticated technical development. She competed through early pregnancy and returned to competition, demonstrating extraordinary dedication to the sport.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">MMA Transition</h2><p>Dern signed with the UFC and rapidly climbed the strawweight rankings with an aggressive, submission-oriented fighting style. Her ground game in MMA is exceptional, with multiple submission finishes in professional competition. She has also developed her striking to become a more complete fighter, though her competitive advantage remains on the ground.</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Cultural Impact</h2>
            <p>Dern has become one of the most visible figures in both BJJ and women&apos;s MMA. Her journey from competitive BJJ champion to professional fighter has inspired practitioners worldwide and helped mainstream awareness of both sports.</p>
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
