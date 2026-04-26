import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Competition Weight Cutting: Safe Strategies | AIBJJ",
  description: "Weight cutting is common in BJJ competition but can be dangerous. Learn the safe methods, the risks, and how to optimize performance on competition day.",
};

export default function Page() {
  const tags = ["competition", "beginners"];
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Competition Weight Cutting: Safe Strategies</h1>
        <p className="mt-4 text-xl text-zinc-400">Weight cutting is common in BJJ competition but can be dangerous. Learn the safe methods, the risks, and how to optimize performance on competition day.</p>
        <div className="mt-10 space-y-3">

          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Should you cut weight for BJJ competition?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Cutting weight is common in BJJ but not always advisable, especially for beginners. A small cut — losing 2-3% of body weight through water manipulation in the final 24 hours — is generally considered safe and manageable. Larger cuts (5%+) impair performance significantly and increase injury risk. Many top practitioners compete at their natural weight after years of experimentation with cutting.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">What is the safest way to cut weight for BJJ?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Gradual weight loss in the weeks before competition — through diet and training — is safer than last-minute water cutting. In the final 24-48 hours, reduce sodium and carbohydrate intake to reduce water retention. Light sweating the night before is manageable for most people. Avoid extreme sauna sessions, diuretics, or complete dehydration — these impair mental and physical performance significantly.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">How do you rehydrate after a weight cut for BJJ?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">After weigh-ins (for competitions with same-day weigh-ins, this is limited), consume electrolyte-rich fluids — sports drinks, coconut water, or oral rehydration solutions — over 1-2 hours rather than drinking as much as possible immediately. Eat easily digestible carbohydrates. Avoid heavy meals that cause sluggishness. Complete rehydration after significant water cutting requires 24+ hours, which is why same-day weigh-in competitions are harder to recover for.</p>
          </details>
          <details className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-zinc-700">
            <summary className="font-bold text-white cursor-pointer">Is IBJJF weigh-in on the same day?</summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Yes — IBJJF weigh-ins are typically on the same day as competition, often just hours before your first match. This limits the window for rehydration and makes large weight cuts particularly risky. Other organizations have moved to next-day weigh-ins to reduce weight cutting risks. Always confirm the weigh-in format for specific events.</p>
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
