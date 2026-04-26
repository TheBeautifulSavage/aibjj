import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ vs Wrestling: Which Is Better for Self-Defense? | AIBJJ",
  description: "The BJJ vs wrestling debate is one of martial arts' most enduring. Both are effective grappling systems with different strengths. Here is an honest compari",
};

export default function Page() {
  const tags = ["bjj-history", "self-defense", "takedowns"];
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ vs Wrestling: Which Is Better for Self-Defense?</h1>
        <p className="mt-4 text-xl text-zinc-400">The BJJ vs wrestling debate is one of martial arts' most enduring. Both are effective grappling systems with different strengths. Here is an honest comparison.</p>
        <div className="mt-10 space-y-3">

          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Is BJJ or wrestling better for self-defense?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Both have significant self-defense value, but they address different aspects of a confrontation. Wrestling provides superior takedown offense and defense — controlling whether a fight goes to the ground. BJJ provides superior ground control and finishing — what happens once a fight is on the ground. Ideally, a complete self-defense practitioner trains both.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Which is harder to learn, BJJ or wrestling?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Both have steep learning curves but in different ways. Wrestling requires explosive athleticism and is often taught at a young age through school programs. BJJ has a longer technical curriculum with a formalized belt system that takes 10+ years to complete. Wrestling techniques are generally simpler but require exceptional physical conditioning. BJJ rewards technical finesse more than pure athleticism.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Do wrestlers have an advantage in BJJ?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Wrestlers often have significant early advantages in BJJ, particularly in takedowns and top control. Their athletic base, comfort being physical, and ground work familiarity translates well. However, wrestlers typically struggle initially with guard — both playing it and passing it — and submission defense. Many elite BJJ competitors have wrestling backgrounds.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Should I do BJJ or wrestling first?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">If you are a complete beginner to grappling, either is an excellent starting point. Wrestling is more commonly available through school programs at younger ages. BJJ academies are widely available globally for adults. Many practitioners train both simultaneously or add wrestling to their BJJ training specifically to improve their takedown game and top pressure.</p>
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
