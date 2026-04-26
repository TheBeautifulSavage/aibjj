import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best BJJ Training App: Track Sessions, Techniques & Progress | AIBJJ",
  description: "The best BJJ training app tracks every session, builds your technique library, and uses AI to analyze your progress. Train smarter with AIBJJ.",
};

export default function BJJTrainingAppPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best BJJ Training App: Track Sessions, Techniques & Progress",
            description: "What to look for in a BJJ training app and how AIBJJ helps athletes track sessions, build technique libraries, and train with AI guidance.",
            author: { "@type": "Organization", name: "AIBJJ" },
            publisher: { "@type": "Organization", name: "AIBJJ", url: "https://aibjj.com" },
          }),
        }}
      />

      {/* Nav */}
{/* Hero */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-black sm:text-5xl">Best BJJ Training App: Track Sessions, Techniques & Progress</h1>
        <p className="mt-4 text-xl text-zinc-400">Most BJJ practitioners train for years without a system. They rely on memory, hope they're improving, and repeat the same mistakes. The right BJJ training app changes everything — giving you a structured way to log, review, and optimize every hour on the mats.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">What a Real BJJ Training App Should Do</h2>
        <p className="text-zinc-300">Generic fitness apps don't understand jiu-jitsu. Logging "60 minutes of cardio" doesn't capture that you spent 20 minutes drilling double-leg takedowns, got triangle-choked four times, and finally landed a kimura from mount. A real BJJ training app is built for the specifics of grappling.</p>
        <p className="text-zinc-300">Here's what actually matters in a BJJ training app:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Session logging:</strong> Quick entry for what you drilled, what you rolled, and what you noticed</li>
          <li><strong>Technique library:</strong> A searchable personal database of techniques you've learned and are working on</li>
          <li><strong>Progress tracking:</strong> Visualize improvement over weeks, months, and years</li>
          <li><strong>AI coaching:</strong> Analysis that turns your logs into actionable game plans</li>
          <li><strong>Competition tools:</strong> Prep plans and post-comp reviews</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">The Problem with Not Tracking Your Training</h2>
        <p className="text-zinc-300">Without a training app, you're flying blind. You might think you're improving in guard retention, but your memory is unreliable — you remember the wins more than the losses. A training app gives you honest, unbiased data about your game.</p>
        <p className="text-zinc-300">Common problems that tracking solves:</p>
        <ul className="text-zinc-300 space-y-2">
          <li>Repeating the same drilling without checking if it's transferring to live rolling</li>
          <li>Forgetting techniques you learned weeks ago before they're drilled enough to stick</li>
          <li>Not knowing which positions are your biggest weaknesses</li>
          <li>Going into competition without a clear, position-by-position game plan</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">How AIBJJ Works as Your Training App</h2>
        <p className="text-zinc-300">AIBJJ was built from the ground up for BJJ practitioners. The workflow is simple: after training, you log your session. What did you work on? What went well? Where did you struggle? Over time, these logs build a complete picture of your game.</p>
        <p className="text-zinc-300">AIBJJ's AI coach then analyzes this data and surfaces patterns you'd miss on your own. If you're consistently getting passed from a certain guard, the system flags it. If your training journal shows you haven't worked a certain position in weeks, it reminds you.</p>
        <p className="text-zinc-300">The <Link href="/bjj-techniques" className="text-red-400 hover:text-red-300">technique library</Link> lets you catalog every move you're learning, tag it by position, and add notes. Before your next session, you can review exactly what you were working on. This is how elite athletes train — with intentionality and review.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Features That Separate Good BJJ Apps from Great Ones</h2>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Offline capability:</strong> You should be able to log sessions without WiFi at the gym</li>
          <li><strong>Fast entry:</strong> Post-training, you're tired. Logging should take 2 minutes, not 20</li>
          <li><strong>Smart insights:</strong> Raw data isn't enough — you need AI analysis that tells you what it means</li>
          <li><strong>Game plan integration:</strong> Your <Link href="/bjj-game-plan" className="text-red-400 hover:text-red-300">BJJ game plan</Link> should be connected to your training data</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">Start Tracking Your BJJ Progress Today</h2>
        <p className="text-zinc-300">The athletes who improve fastest aren't always the most talented — they're the most intentional. They know what they worked last week, what they need to drill this week, and where they want to be in six months. A BJJ training app makes that kind of intentional practice accessible to everyone.</p>
        <p className="text-zinc-300">AIBJJ is free to start. Log your next session, build your technique library, and let the AI coach show you what your training data reveals about your game.</p>
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
