import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Competition Prep: AI-Powered Training Plans for Tournament Success | AIBJJ",
  description: "Prepare for BJJ competition with AI-powered training plans, game plan builders, and mental prep tools. Walk into every tournament ready to perform your best.",
};

export default function BJJCompetitionPrepPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ Competition Prep: AI-Powered Training Plans for Tournament Success",
            description: "How to prepare for BJJ competition using structured training plans, game plan development, and AI-driven analysis to peak on tournament day.",
            author: { "@type": "Organization", name: "AIBJJ" },
            publisher: { "@type": "Organization", name: "AIBJJ", url: "https://aibjj.com" },
          }),
        }}
      />

      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>

      {/* Hero */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Competition Prep: AI-Powered Training Plans for Tournament Success</h1>
        <p className="mt-4 text-xl text-zinc-400">Competition separates what you think you know from what you actually own. The athletes who perform best aren't the most talented — they're the most prepared. AI-powered competition prep gives you the structured approach to walk in confident and execute your game plan.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">The 8-Week Competition Prep Framework</h2>
        <p className="text-zinc-300">Eight weeks out from a tournament is the sweet spot to start structured prep. Here's how to structure it:</p>
        <ul className="text-zinc-300 space-y-3">
          <li>
            <strong className="text-white">Weeks 8-6: Game Plan Solidification</strong>
            <p className="text-zinc-400">Identify your primary game plan using your training data. Which submissions do you hit most? Which guard works best for your body type? Use AIBJJ's <Link href="/bjj-game-plan-builder" className="text-red-400 hover:text-red-300">game plan builder</Link> to lock in your position-by-position strategy.</p>
          </li>
          <li>
            <strong className="text-white">Weeks 5-3: High-Volume Drilling</strong>
            <p className="text-zinc-400">Drill your game plan sequences to automatic. The goal is to make your first 3-4 moves reflexive so you don't have to think in competition. Focus on the techniques in your game plan only — this is not the time to experiment.</p>
          </li>
          <li>
            <strong className="text-white">Weeks 2-1: Hard Sparring + Sharpening</strong>
            <p className="text-zinc-400">Increase sparring intensity. Train with higher-level partners to stress-test your game plan. Identify any remaining holes. The week before competition, reduce volume but maintain intensity — stay sharp, not fatigued.</p>
          </li>
          <li>
            <strong className="text-white">Tournament Week: Recovery and Mental Prep</strong>
            <p className="text-zinc-400">Light drilling only. Review your game plan mentally. Handle weight management carefully. Sleep well. Trust your preparation.</p>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">Why Most Competitors Underperform</h2>
        <p className="text-zinc-300">Most practitioners train the same way whether they have a competition in 8 weeks or 8 months. They don't periodize. They don't drill their competition game plan specifically. They walk in hoping to improvise and wonder why they freeze when it matters.</p>
        <p className="text-zinc-300">Competition performance is almost entirely mental when two athletes are at similar skill levels. And mental performance is dramatically improved by preparation. When you've drilled your game plan 200 times, you don't freeze — you execute.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Using AI to Build Your Competition Strategy</h2>
        <p className="text-zinc-300">AIBJJ's AI coach analyzes your training journal data to identify your highest-percentage techniques and most reliable positions. Before a tournament, you can ask the AI to generate a competition game plan based on your actual training data — not generic advice.</p>
        <p className="text-zinc-300">This means your competition strategy is built on evidence: these are the submissions I actually land, this is the guard that works for my body, these are the passes I complete consistently. That kind of data-driven prep is previously reserved for well-funded competitors with dedicated coaches.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Post-Competition Review</h2>
        <p className="text-zinc-300">The competition doesn't end when you step off the mat. The most valuable part of competing is the review. Log your matches in AIBJJ immediately after the tournament while the details are fresh:</p>
        <ul className="text-zinc-300 space-y-2">
          <li>What did you attempt from your game plan? What landed?</li>
          <li>Where did your game plan break down and why?</li>
          <li>What did your opponents do that you weren't prepared for?</li>
          <li>What would you drill for 8 weeks to be better prepared next time?</li>
        </ul>
        <p className="text-zinc-300">This post-comp data feeds back into your <Link href="/bjj-training-journal" className="text-red-400 hover:text-red-300">training journal</Link> and makes your next competition prep cycle smarter. Each tournament you enter should be better prepared than the last.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Compete to Grow</h2>
        <p className="text-zinc-300">Even one local tournament per year is enough to dramatically accelerate your growth. The feedback is immediate, honest, and unlike anything you get in practice. Use AIBJJ to prepare properly, compete with confidence, and learn from every match.</p>
      </article>

      {/* Bottom CTA */}
      <div className="bg-zinc-900 border-t border-zinc-800 py-16 text-center">
        <h2 className="text-3xl font-black">Ready to level up your jiu-jitsu?</h2>
        <p className="mt-3 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
        <Link href="/auth/signup" className="mt-6 inline-block rounded-lg bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free Today</Link>
      </div>
    </div>
  );
}
