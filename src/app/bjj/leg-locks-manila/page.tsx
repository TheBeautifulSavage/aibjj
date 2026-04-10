import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Leg Locks in Manila: Training Guide | AIBJJ",
  description: "Learn BJJ leg locks with top instructors in Manila. Find academies, classes, and AI-powered coaching to improve your leg locks game.",
};

export default function Page() {
  const tags = ["leg-locks", "competition", "beginners"];
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Leg Locks in Manila: Training Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn BJJ leg locks with top instructors in Manila. Find academies, classes, and AI-powered coaching to improve your leg locks game.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">BJJ Leg Locks Training in Manila</h2>
            <p>Brazilian jiu-jitsu has a thriving community in Manila, with numerous academies offering specialized instruction in leg locks. Whether you are a complete beginner or an advanced practitioner looking to sharpen your skills, Manila offers world-class BJJ training. The leg locks game is one of the most important aspects of modern Brazilian jiu-jitsu, and instructors in Manila represent some of the best teaching talent available anywhere in the world.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Finding the Right Leg Locks Coach in Manila</h2>
            <p>When looking for a leg locks specialist in Manila, consider the instructor&apos;s competition background, their ability to explain concepts clearly, and the overall culture of the academy. A good leg locks coach will not just show you techniques — they will help you understand the underlying principles that make those techniques work. Look for academies that structure their curriculum around systematic skill development rather than random technique of the day instruction.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Training Leg Locks with AI Coaching</h2>
            <p>AIBJJ&apos;s AI coaching platform allows Manila practitioners to get personalized leg locks instruction between mat sessions. Ask the AI coach about specific positions, get drilling recommendations, and track your progress over time. The combination of in-person training at a Manila academy with AI-powered coaching between sessions accelerates development significantly. Log your training sessions, note what you worked on, and let the AI identify patterns and recommend targeted practice.</p>
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
