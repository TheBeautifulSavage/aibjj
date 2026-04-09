import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ White Belt Tips: Survive, Learn, and Progress Faster | AIBJJ",
  description: "The best BJJ white belt tips from experienced practitioners: what to focus on, what to ignore, and how to progress faster through the hardest phase of jiu-jitsu.",
};

export default function BJJWhiteBeltTipsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "BJJ White Belt Tips: Survive, Learn, and Progress Faster",
            description: "Practical BJJ white belt advice covering what to prioritize, common mistakes to avoid, and how to build the right foundation from day one.",
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ White Belt: Survive, Learn, and Progress Faster</h1>
        <p className="mt-4 text-xl text-zinc-400">The white belt phase is the hardest in BJJ — and also the most important. The habits and mindset you build in your first two years will determine everything that follows. These are the white belt tips that actually accelerate progress.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">Try AIBJJ Free</Link>
          <Link href="/pricing" className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-300 hover:border-zinc-500">See Pricing</Link>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 pb-20 prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-white">Tip #1: Survival First, Offense Never</h2>
        <p className="text-zinc-300">As a white belt, your first goal is not to submit people — it's to not get submitted. When you can survive a round without tapping, you're learning. When you spend energy trying to attack from bad positions, you're wasting it and reinforcing poor habits.</p>
        <p className="text-zinc-300">Master these escapes before anything else: mount escape (elbow-knee or bridge-and-roll), side control escape, and back defense. When you own these, you can play from behind and learn from everyone on the mat.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Tip #2: Tap Early, Tap Often</h2>
        <p className="text-zinc-300">Ego is the number one cause of injuries at white belt. Learn to tap before it's a crisis. Tapping doesn't mean you lost — it means you recognized a submission and lived to train tomorrow. Injuries cost you weeks or months of mat time. Pride costs you progress.</p>
        <p className="text-zinc-300">The fastest white belt progressors tap constantly and ask questions immediately after: "How did you get that? What was I doing wrong?" That feedback loop is gold.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Tip #3: Focus on Positions, Not Submissions</h2>
        <p className="text-zinc-300">New white belts want to learn guillotines and heel hooks they saw on YouTube. That's understandable but backwards. Understanding positional hierarchy first makes everything else make sense:</p>
        <ul className="text-zinc-300 space-y-2">
          <li>Back control &gt; Mount &gt; Side control &gt; Knee on belly &gt; Guard</li>
          <li>Dominant positions create submission opportunities — not the other way around</li>
          <li>Learn to hold positions before you learn to submit from them</li>
        </ul>
        <p className="text-zinc-300">When you truly understand why mount is dominant, armbar setups become obvious. You don't need to memorize techniques — you need to understand positions.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Tip #4: Be a Good Training Partner</h2>
        <p className="text-zinc-300">Your long-term growth depends on access to good training partners. Be the person everyone wants to train with:</p>
        <ul className="text-zinc-300 space-y-2">
          <li>Control your intensity — don't spaz out and injure people</li>
          <li>Communicate: "I'm feeling my shoulder, can we avoid crank pressure today?"</li>
          <li>Help new students when asked</li>
          <li>Be reliable — show up consistently</li>
        </ul>
        <p className="text-zinc-300">Blue and purple belts will seek you out for rounds if you're a quality partner. That's the fastest path to improvement.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Tip #5: Track Your Training from Day One</h2>
        <p className="text-zinc-300">Start a training journal now, not later. Log what you drilled, what you noticed, what confused you, what clicked. The practitioners who progress fastest are the ones who are intentional about their learning.</p>
        <p className="text-zinc-300">AIBJJ is built for exactly this. Log your sessions, track the techniques you're learning, and let the <Link href="/ai-bjj-coach" className="text-red-400 hover:text-red-300">AI coach</Link> help you identify patterns and prioritize what to work on. You don't need to figure out your <Link href="/bjj-game-plan-builder" className="text-red-400 hover:text-red-300">game plan</Link> yet — just build the habit of reflection.</p>

        <h2 className="text-2xl font-bold text-white mt-10">Tip #6: Show Up Consistently</h2>
        <p className="text-zinc-300">Talent is irrelevant at white belt. The practitioners who reach blue belt fastest are the ones who show up most consistently. Three sessions per week for two years beats sporadic heroic training blocks every time.</p>
        <p className="text-zinc-300">BJJ is a long game. The athletes you'll eventually surpass are the ones who quit at blue belt because it got hard. Commit to the process and the belt takes care of itself. Check out our <Link href="/bjj-for-beginners" className="text-red-400 hover:text-red-300">complete beginners guide</Link> for more on starting strong.</p>
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
