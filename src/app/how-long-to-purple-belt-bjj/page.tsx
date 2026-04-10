import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "How Long Does It Take to Get a BJJ Purple Belt? | AIBJJ", description: "The purple belt is the most significant step in the BJJ journey — marking the transition from learning the basics to developing your own game. Here is what" };
export default function Page() {
  const tags = ["beginners", "competition"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">{tags.map(tag => (<Link key={tag} href={`/bjj/tag/${tag}`} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:text-red-400">#{tag}</Link>))}</div>
        <h1 className="text-4xl font-black sm:text-5xl">How Long Does It Take to Get a BJJ Purple Belt?</h1>
        <p className="mt-4 text-xl text-zinc-400">The purple belt is the most significant step in the BJJ journey — marking the transition from learning the basics to developing your own game. Here is what to expect.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">
          <section><h2 className="text-2xl font-bold text-white mb-3">Average Time to Purple Belt</h2><p>Most practitioners spend 3-5 years at blue belt before receiving their purple belt. Total training time from white to purple typically ranges from 5-7 years for consistent practitioners. The range is wide because belt promotions in BJJ depend entirely on demonstrated skill and time on the mat — there are no formal tests and no guaranteed timelines.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">What Purple Belt Represents</h2><p>The purple belt signals that a practitioner has moved beyond foundational techniques and is developing personal technical identity. Purple belts can recognize patterns, chain techniques together, and adapt their game to different opponents. They typically have a developing A-game and understand how to improve through deliberate practice. Many purple belts can teach beginners effectively.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">How to Accelerate Purple Belt Progress</h2><p>Consistent training (3+ times per week), deliberate focus on weaknesses, regular competition, keeping a training journal, and actively seeking feedback from instructors accelerates development. The practitioners who receive purple belt fastest combine high mat hours with intelligent, goal-directed training rather than simply logging time.</p></section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI</h2>
          <p className="mt-2 text-zinc-400">AI coaching, training journal, technique library — all free to start.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
          <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find Academy</Link>
          <Link href="/coach" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1.5 text-sm text-red-400">AI Coach →</Link>
        </div>
      </article>
    </div>
  );
}
