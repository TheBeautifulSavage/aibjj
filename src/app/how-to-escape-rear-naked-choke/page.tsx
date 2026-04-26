import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Escape the Rear Naked Choke | AIBJJ",
  description: "The rear naked choke is the most common submission from back control. Learn the mechanics of why it works and the exact steps to escape before it is fully ",
};

export default function Page() {
  const tags = ["back-control", "submissions", "beginners"];
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
        <h1 className="text-4xl font-black sm:text-5xl">How to Escape the Rear Naked Choke</h1>
        <p className="mt-4 text-xl text-zinc-400">The rear naked choke is the most common submission from back control. Learn the mechanics of why it works and the exact steps to escape before it is fully locked in.</p>
        <div className="mt-10 space-y-3">

          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Why is the rear naked choke so effective?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">The rear naked choke cuts off blood flow to the brain by compressing the carotid arteries on both sides of the neck simultaneously. When applied correctly, it causes unconsciousness in 3-5 seconds. The choke works regardless of strength difference because it targets the cardiovascular system, not muscular resistance.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What is the first step to escape the rear naked choke?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">The first priority is preventing the choke from being locked in fully. The moment you feel an arm come around your neck, tuck your chin aggressively and bring your shoulder up to block. Use both hands to grip the choking arm — one hand on the wrist, one on the elbow — and pull it down while turning into your opponent.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">How do you escape back control to prevent the choke?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Escaping back control removes the threat entirely. The seat belt escape involves sliding down and turning into your opponent when they have the body triangle or when you can create space. The elbow-knee escape uses framing to create space and recover guard. Work consistently on these escapes in drilling so they become automatic under pressure.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Can you tap to a rear naked choke before passing out?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Yes — and you should. There is no benefit to holding out until unconsciousness. Tap early, signal clearly with your hand or verbal tap, and acknowledge the submission. Tapping is not weakness in BJJ — it is smart training practice that allows both partners to continue learning.</p>
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
