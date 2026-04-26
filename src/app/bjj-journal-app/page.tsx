import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Training Journal App: Log Sessions, Track Wins, Identify Gaps | AIBJJ",
  description: "A dedicated BJJ journal app helps you log every training session, track what works, and identify gaps in your game. Build faster with structured reflection.",
};

export default function BJJJournalAppPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ Training Journal App: Log Sessions, Track Wins, Identify Gaps",
            description: "Why keeping a BJJ training journal accelerates progress and how a dedicated journal app makes consistent logging easy and actionable.",
            author: { "@type": "Organization", name: "AIBJJ" },
            publisher: { "@type": "Organization", name: "AIBJJ", url: "https://aibjj.com" },
          }),
        }}
      />

      {/* Nav */}
{/* Hero */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Training Journal App: Log Sessions, Track Wins, Identify Gaps</h1>
        <p className="mt-4 text-xl text-zinc-400">The best BJJ practitioners are also students of their own game. A training journal is the tool that turns every session into data — and data into progress. Stop letting your training disappear into memory and start building a permanent record of your growth.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">Why Every Serious BJJ Practitioner Should Keep a Journal</h2>
        <p className="text-zinc-300">Top athletes in every sport keep journals. They track workouts, review performances, and document what's working. In BJJ, where the learning curve spans a decade, a training journal is even more critical — you need institutional memory of your own development.</p>
        <p className="text-zinc-300">Without a journal, three months from now you won't remember:</p>
        <ul className="text-zinc-300 space-y-2">
          <li>What you were drilling in January and whether it worked</li>
          <li>Which training partners exposed specific weaknesses in your guard</li>
          <li>The detail your professor showed you that fixed your triangle setup</li>
          <li>Why you started avoiding leg locks and whether that was the right call</li>
        </ul>
        <p className="text-zinc-300">A journal remembers everything. Your brain doesn't.</p>

        <h2 className="text-2xl font-bold text-white mt-10">What to Log After Every BJJ Session</h2>
        <p className="text-zinc-300">Effective journaling doesn't mean writing novels. A structured 2-minute entry after training captures everything that matters:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>What was drilled:</strong> The techniques taught in class or practiced during drilling</li>
          <li><strong>Sparring notes:</strong> What worked, what didn't, who gave you trouble and from where</li>
          <li><strong>Insights:</strong> Any "aha" moments, technical corrections, or things to remember</li>
          <li><strong>Goals for next session:</strong> What you want to work or try next time</li>
          <li><strong>Physical/mental state:</strong> Were you tired? Distracted? Feeling sharp? Context matters for interpreting results</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">How a Digital BJJ Journal App Beats Paper</h2>
        <p className="text-zinc-300">Paper notebooks work, but they have limits. A dedicated BJJ journal app adds capabilities that paper can't match:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Searchability:</strong> Find every entry where you worked on back control in seconds</li>
          <li><strong>Pattern recognition:</strong> The app surfaces trends you'd miss reading entries one by one</li>
          <li><strong>AI analysis:</strong> AIBJJ's <Link href="/ai-bjj-coach" className="text-red-400 hover:text-red-300">AI coach</Link> reads your journal and generates personalized training recommendations</li>
          <li><strong>Cross-referencing:</strong> Connect journal entries to your <Link href="/bjj-technique-tracker" className="text-red-400 hover:text-red-300">technique tracker</Link> and <Link href="/bjj-progress-tracker" className="text-red-400 hover:text-red-300">progress metrics</Link></li>
          <li><strong>Anywhere access:</strong> Log on your phone immediately after class while it's fresh</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">The Review Habit That Accelerates Progress</h2>
        <p className="text-zinc-300">Logging alone isn't enough — you need to review. Set a weekly habit of reading your last 7 days of entries before training. Ask yourself: Did I follow through on last session's goals? What pattern am I noticing? What should I focus on this week?</p>
        <p className="text-zinc-300">This review loop is where the real learning happens. AIBJJ makes this easy by surfacing your recent entries and AI-generated insights on your dashboard. Before training, you see exactly what you've been working on and what needs attention.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Build Your Training Journal Today</h2>
        <p className="text-zinc-300">The best time to start a BJJ journal was your first day on the mat. The second best time is today. Start with your next training session — log what you drilled, what you rolled, and one thing you want to work on next time. That's it.</p>
        <p className="text-zinc-300">Over weeks and months, you'll build the most detailed record of your BJJ development that exists. And that data, combined with AIBJJ's AI coaching, will help you improve faster than you ever have before.</p>
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
