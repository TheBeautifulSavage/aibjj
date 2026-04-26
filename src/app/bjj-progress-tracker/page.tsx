import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Progress Tracker: Measure Your Growth from White to Black Belt | AIBJJ",
  description: "Track your BJJ progress with data. Measure technique mastery, submission rates, positional improvements, and belt readiness with AIBJJ's progress tracker.",
};

export default function BJJProgressTrackerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ Progress Tracker: Measure Your Growth from White to Black Belt",
            description: "How to track your BJJ progress systematically with data-driven tools to measure technique mastery and belt-level readiness.",
            author: { "@type": "Organization", name: "AIBJJ" },
            publisher: { "@type": "Organization", name: "AIBJJ", url: "https://aibjj.com" },
          }),
        }}
      />

      {/* Nav */}
{/* Hero */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Progress Tracker: Measure Your Growth from White to Black Belt</h1>
        <p className="mt-4 text-xl text-zinc-400">BJJ progress is notoriously hard to see. You're in the trenches every day — feeling every bad round, every submission you took. A BJJ progress tracker cuts through the noise and shows you the truth: you are improving, and here's the data to prove it.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">Why BJJ Progress Feels Invisible</h2>
        <p className="text-zinc-300">BJJ has a uniquely brutal feedback loop. Unlike weight lifting where you can add 5 lbs to the bar each week, or running where your mile time drops measurably, jiu-jitsu progress is hidden behind ego, emotion, and the constant reminder that someone always taps you.</p>
        <p className="text-zinc-300">New training partners join the gym and smash you. You hit a plateau at blue belt that lasts 8 months. You feel like you're going backwards. But you're probably not — you just don't have the data to see forward movement when it's happening.</p>
        <p className="text-zinc-300">A systematic BJJ progress tracker solves this by building an objective record of your training over time.</p>

        <h2 className="text-2xl font-bold text-white mt-10">What to Track to Measure Real BJJ Progress</h2>
        <p className="text-zinc-300">Not all metrics are equal. Here's what actually shows progress in BJJ:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Technique breadth:</strong> How many positions do you have reliable answers for?</li>
          <li><strong>Submission rate from specific positions:</strong> Are you finishing more from mount this month vs. last month?</li>
          <li><strong>Defensive improvement:</strong> How often are you getting submitted, and is it decreasing over time?</li>
          <li><strong>Positional control:</strong> How long are you holding dominant positions?</li>
          <li><strong>Session consistency:</strong> Are you actually showing up? Consistency is the #1 predictor of progress</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">Belt-Level Progress Tracking</h2>
        <p className="text-zinc-300">Each belt in BJJ represents a different set of competencies. A good progress tracker should map to these:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>White belt:</strong> Survival, basic escapes, fundamental positions (mount escape, guard, side control)</li>
          <li><strong>Blue belt:</strong> Solid guard game, 2-3 reliable submissions, basic guard passing</li>
          <li><strong>Purple belt:</strong> A-game defined, game plan for competition, teaching ability emerging</li>
          <li><strong>Brown belt:</strong> High-level understanding of all positions, beginning to dominate purple belts</li>
          <li><strong>Black belt:</strong> Complete, adaptable, able to shut down any position from any level</li>
        </ul>
        <p className="text-zinc-300">AIBJJ's progress tracker lets you benchmark yourself against these competency levels and see exactly where you stand. Your <Link href="/bjj-training-journal" className="text-red-400 hover:text-red-300">training journal</Link> data feeds directly into this analysis.</p>

        <h2 className="text-2xl font-bold text-white mt-10">How to Use Data to Accelerate Progress</h2>
        <p className="text-zinc-300">Tracking alone doesn't create progress — what you do with the data does. Here's how to use progress data effectively:</p>
        <ul className="text-zinc-300 space-y-2">
          <li>Review your logs weekly to identify recurring problems</li>
          <li>Set micro-goals for each 4-6 week period (e.g., "improve guard retention from standing passes")</li>
          <li>Compare your performance before and after working specific techniques</li>
          <li>Use AIBJJ's <Link href="/ai-bjj-coach" className="text-red-400 hover:text-red-300">AI coach</Link> to translate your data into training recommendations</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">Stop Training Blind</h2>
        <p className="text-zinc-300">The BJJ journey is 10+ years for most people. Without tracking, you're repeating experiments without keeping results. With a progress tracker, you build compound improvement — each month of data makes the next month's training smarter.</p>
        <p className="text-zinc-300">Start tracking today, and six months from now you'll have concrete evidence of your growth — even during the stretches where it didn't feel like progress was happening.</p>
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
