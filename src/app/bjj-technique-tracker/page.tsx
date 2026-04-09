import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Technique Tracker: Build Your A-Game Systematically | AIBJJ",
  description: "A BJJ technique tracker helps you catalog every move, track what transfers to live rolling, and build a systematic A-game. Stop forgetting what you learn.",
};

export default function BJJTechniqueTrackerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ Technique Tracker: Build Your A-Game Systematically",
            description: "How to use a BJJ technique tracker to catalog techniques, track drilling, and build a reliable A-game through systematic practice.",
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Technique Tracker: Build Your A-Game Systematically</h1>
        <p className="mt-4 text-xl text-zinc-400">You've learned thousands of techniques over your BJJ career. How many can you actually hit under pressure? A BJJ technique tracker helps you identify which moves are truly in your arsenal — and which ones are just "gym knowledge" you've never used live.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">The Technique Acquisition Problem in BJJ</h2>
        <p className="text-zinc-300">In a typical BJJ class, you learn a technique, drill it for 15 minutes, and then spar. If you're lucky, you remember to try it in sparring that day. But by next week, you've been shown 3 more techniques, and the first one is already fading.</p>
        <p className="text-zinc-300">This is the fundamental problem with how most practitioners approach technique learning: they accumulate without retention. A BJJ technique tracker solves this by creating a persistent, organized record of everything you're learning — so nothing gets lost.</p>

        <h2 className="text-2xl font-bold text-white mt-10">How to Categorize Your Techniques</h2>
        <p className="text-zinc-300">An effective technique tracker organizes moves by position and type. Here's a framework that works:</p>
        <ul className="text-zinc-300 space-y-2">
          <li><strong>Guard (closed, half, open, butterfly, De La Riva, etc.):</strong> Sweeps, submissions, transitions</li>
          <li><strong>Passing:</strong> Pressure passes, speed passes, leg drag, knee slice, torreando</li>
          <li><strong>Top positions (mount, side control, back):</strong> Submissions, controls, transitions</li>
          <li><strong>Takedowns and trips:</strong> Standing wrestling, judo entries, leg attacks</li>
          <li><strong>Leg locks:</strong> Inside heel hooks, outside heel hooks, kneebars, ankle locks</li>
        </ul>
        <p className="text-zinc-300">For each technique, track: date learned, how many times drilled, how many times attempted live, and success rate. This tells you at a glance what's in your A-game versus what's theoretical knowledge.</p>

        <h2 className="text-2xl font-bold text-white mt-10">The Drilling vs. Live Rolling Gap</h2>
        <p className="text-zinc-300">One of the most valuable things a technique tracker reveals is the gap between drilling performance and live application. You might drill a technique perfectly 50 times, but never hit it in sparring. That's crucial information — it means you need to work specific entries or setups, not just the finish itself.</p>
        <p className="text-zinc-300">Conversely, you might attempt a technique live that you've barely drilled and hit it naturally. Your tracker tells you: this move has high natural success for you — double down on it. This is how you build your A-game efficiently instead of randomly.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Building Your A-Game with Data</h2>
        <p className="text-zinc-300">Your A-game isn't what you think looks cool — it's what actually works for your body type, athleticism, and natural movement patterns. Tracking techniques over time reveals this truth.</p>
        <p className="text-zinc-300">AIBJJ's technique library lets you log every technique you're working on, tag it by position, and track your success rate. Combined with the <Link href="/ai-bjj-coach" className="text-red-400 hover:text-red-300">AI coach</Link>, the system recommends which techniques to prioritize based on your actual data.</p>
        <p className="text-zinc-300">If you're building a <Link href="/bjj-game-plan" className="text-red-400 hover:text-red-300">BJJ game plan</Link>, your technique tracker becomes the foundation — you build your strategy around the moves you've proven you can land.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Start Building Your Technique Database</h2>
        <p className="text-zinc-300">Elite BJJ practitioners don't have more techniques than you — they have better-organized ones. They know their A-game cold, they know their backup options, and they know exactly what to work when they have a tournament in 8 weeks.</p>
        <p className="text-zinc-300">Start your technique tracker today. Log the five techniques you're currently drilling. Note how many times you've attempted them live. You'll immediately see which ones are real and which ones are still theoretical. That clarity alone is worth it.</p>
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
