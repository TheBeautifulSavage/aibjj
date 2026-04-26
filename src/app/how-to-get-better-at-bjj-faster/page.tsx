import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Get Better at BJJ Faster: 10 Proven Methods | AIBJJ",
  description: "Most BJJ students progress much slower than necessary. These 10 evidence-based methods will accelerate your development and help you improve faster than tr",
};

export default function Page() {
  const tags = ["beginners", "competition", "bjj-history"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">How to Get Better at BJJ Faster: 10 Proven Methods</h1>
        <p className="mt-4 text-xl text-zinc-400">Most BJJ students progress much slower than necessary. These 10 evidence-based methods will accelerate your development and help you improve faster than training alone.</p>
        <div className="mt-10 space-y-3">

          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Should I drill or just roll to get better?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Both are essential but in different ways. Drilling builds the muscle memory needed to execute techniques under pressure — you cannot think your way through a technique in live rolling. Rolling tests and pressure-tests your techniques in real time. The ideal training session includes both: drill specific techniques you are working on, then roll to apply them.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">How often should I train BJJ to improve quickly?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Three to four times per week is the sweet spot for most practitioners. Fewer sessions slow progress significantly. More than five sessions per week risks overtraining and injury without proportional benefit, especially early in your journey. Consistency matters more than volume — showing up three times a week every week for a year beats training intensely for a month then burning out.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Is watching BJJ videos actually helpful?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Yes, but with caveats. Watching matches and instructionals can accelerate your conceptual understanding and expose you to techniques you would not otherwise encounter. The key is connecting what you watch to your mat work — drill what you watch, try to use it in rolling, get feedback on your attempts. Video without mat application is entertainment, not training.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">How do I know what to work on in BJJ?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Keep a training journal. After each session, write down what got you, what worked, and what you want to improve. Over time, patterns emerge — you will see the same positions appearing repeatedly as problems. These are your training priorities. AIBJJ's AI coach can analyze your journal entries and build a personalized study plan based on your actual training data.</p>
          </details>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Get AI BJJ Coaching</h2>
          <p className="mt-2 text-zinc-400">Ask your AI coach anything about BJJ — technique questions, game plans, drilling sequences.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
          <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
          <Link href="/coach" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1.5 text-sm text-red-400">AI Coach →</Link>
        </div>
      </article>
    </div>
  );
}
