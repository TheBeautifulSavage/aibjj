import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best BJJ Instructionals of 2025: Expert Reviews | AIBJJ',
  description: 'The best BJJ instructionals of 2025 reviewed by experts. Gordon Ryan, John Danaher, Bernardo Faria & more. Find the right instructional for your game.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Best BJJ Instructionals of 2025: Expert Reviews</h1>
        <p className="text-xl text-zinc-400 mb-8">The BJJ instructional market is massive. We cut through the noise and rank the best instructionals across every position, skill level, and budget — so you can invest in the right knowledge.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>Why BJJ Instructionals Matter</h2>
        <p>Drilling at your academy is irreplaceable — but instructionals give you something your coach often can't: focused, in-depth breakdowns of a single system. The best instructionals compress years of trial and error into structured, digestible lessons. Athletes who supplement mat time with quality video study progress measurably faster than those who don't.</p>
        <p>The challenge? There are thousands of instructionals out there, ranging from world-class to complete garbage. Price doesn't always equal quality. Name recognition helps but isn't everything. This guide cuts through the noise.</p>

        <h2>Best Overall: Gordon Ryan — Guard Passing & Back Takes</h2>
        <p>Gordon Ryan is arguably the greatest no-gi grappler of all time, and his instructionals reflect that mastery. His series on guard passing — particularly his pressure passing system and leg weave variations — are considered essential viewing for anyone serious about no-gi. His back-take and back-control series are equally exceptional, breaking down the body triangle, seatbelt control, and finishing mechanics with exhaustive detail.</p>
        <p><strong>Best for:</strong> Intermediate to advanced no-gi grapplers looking to dominate positional control.</p>

        <h2>Best System: John Danaher — Enter the System Series</h2>
        <p>John Danaher's "Enter the System" series remains one of the most comprehensive instructional projects in grappling history. Each volume focuses on a single system — legs, back attacks, pins — and breaks it down from first principles. Danaher's analytical approach, while verbose, rewards patient students with genuine conceptual understanding rather than just technique collection.</p>
        <p>Key volumes include: <em>Leg Lock Anthology</em>, <em>Back Attacks</em>, <em>Kimura</em>, and <em>Triangle Chokes</em>. If you want to understand the "why" behind every move, Danaher delivers.</p>
        <p><strong>Best for:</strong> Serious students who want conceptual depth and systematic understanding.</p>

        <h2>Best for Beginners: Bernardo Faria — Foundations of Brazilian Jiu-Jitsu</h2>
        <p>Five-time world champion Bernardo Faria created one of the most beginner-accessible instructionals ever made. His "Foundations of Brazilian Jiu-Jitsu" covers escapes, sweeps, passes, and submissions with a clear, methodical approach. Faria's teaching style is warm and practical — he teaches what works, not what looks fancy.</p>
        <p><strong>Best for:</strong> White and early blue belts building their fundamentals.</p>

        <h2>Best Guard: Lachlan Giles — High Percentage Guard Retention</h2>
        <p>Australian black belt and ADCC absolute medalist Lachlan Giles produces some of the most analytically rigorous instructionals on the market. His guard retention series is considered the gold standard. He breaks down hip movement, frames, and reactive guard recovery in ways that immediately translate to live rolling.</p>
        <p>His leg lock instructionals (produced around his famous ADCC 2019 performance where he submitted three heavyweights) are equally essential for the heel hook game.</p>
        <p><strong>Best for:</strong> Blue through purple belts who want to stop getting their guard passed.</p>

        <h2>Best Gi: Buchecha — Complete Gi Grappling</h2>
        <p>Marcus "Buchecha" Almeida is the greatest gi grappler of his generation — a 13-time world champion with a pressure-based top game that is both simple and devastating. His instructional focuses on guard passing pressure, smash passing, and finishing from dominant positions. If you train gi, Buchecha's work is essential.</p>
        <p><strong>Best for:</strong> Gi-focused competitors at blue belt and above.</p>

        <h2>Best Value: Stephan Kesting — Grapplearts</h2>
        <p>Stephan Kesting has been creating BJJ instructional content longer than almost anyone. His instructionals on Grapplearts are thorough, well-organized, and significantly more affordable than the big platforms. His "Roadmap for BJJ" and "Guard Retention Blueprint" are particularly strong. For budget-conscious students, Kesting delivers excellent value.</p>
        <p><strong>Best for:</strong> Anyone on a budget who wants quality fundamentals instruction.</p>

        <h2>Best Leg Locks: Craig Jones — Z-Guard & Leg Attacks</h2>
        <p>Craig Jones brings an Australian directness to leg lock instruction that makes complex entries feel surprisingly accessible. His Z-guard series is outstanding — explaining how to use the position to set up heel hooks, kneebars, and straight ankle locks with clean transitions. His humor and casual teaching style make dense material easier to absorb.</p>
        <p><strong>Best for:</strong> No-gi grapplers ready to build a serious leg lock game.</p>

        <h2>How to Get the Most from BJJ Instructionals</h2>
        <p>Buying an instructional is just the first step. Here's how to actually extract value from them:</p>
        <ul>
          <li><strong>Watch once without pausing</strong> to understand the system conceptually</li>
          <li><strong>Re-watch with a notebook</strong> — write down positions, entries, and key details</li>
          <li><strong>Drill the first technique</strong> until it's reflexive before moving on</li>
          <li><strong>Test in live rolling</strong> — immediately. Don't wait until you've "mastered" it</li>
          <li><strong>Return to the instructional</strong> after rolling to fill gaps</li>
        </ul>
        <p>AIBJJ's technique library lets you log the techniques you're studying, track your drilling progress, and connect instructional concepts to your live rolling notes — so nothing slips through the cracks.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Instructional Progress Free →</Link>

        <h2>Platform Breakdown: Where to Buy</h2>
        <p><strong>BJJ Fanatics</strong> — largest selection, frequent sales, wide quality range. Best place to find most major instructionals.</p>
        <p><strong>Digitsu</strong> — strong catalog, occasionally exclusive content, good streaming interface.</p>
        <p><strong>Grapplearts</strong> — Stephan Kesting's platform, excellent fundamentals, very affordable.</p>
        <p><strong>Submission Shark / Atos Online</strong> — team/school-based platforms with consistent quality control.</p>
        <p>Watch for BJJ Fanatics sales — they regularly discount 50%+ and email lists get early access. There's no reason to pay full price for most instructionals.</p>

        <h2>How to Choose the Right Instructional for You</h2>
        <p>Ask yourself these questions before buying:</p>
        <ul>
          <li>What position do I consistently lose from?</li>
          <li>What technique am I trying to add to my game?</li>
          <li>Do I train gi, no-gi, or both?</li>
          <li>What's my current belt level?</li>
          <li>Do I compete, or am I recreational?</li>
        </ul>
        <p>The best instructional is the one that solves your current biggest problem. A white belt buying Gordon Ryan's advanced guard passing system is wasting money — the concepts won't click without foundational mat time. Match the instructional to your actual training needs.</p>

        <h2>Final Verdict</h2>
        <p>For most grapplers in 2025, the highest-ROI purchases are: a Danaher volume in your primary area of focus, a Bernardo Faria fundamentals series if you're still early in your journey, and a Lachlan Giles defensive series. Those three cover theory, fundamentals, and defense — the cornerstones of a complete game.</p>
        <p>Use AIBJJ to structure your study sessions, log what you're working on from each instructional, and build a personalized curriculum around the techniques that matter most to your game.</p>
      </section>
      <section className="bg-zinc-900 border-t border-zinc-800 px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Take your BJJ to the next level</h2>
        <p className="text-zinc-400 mb-8">AI coach, training journal, technique library — all in one platform.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free →</Link>
      </section>
      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        © 2025 AIBJJ · <Link href="/terms" className="hover:text-zinc-300">Terms</Link> · <Link href="/privacy" className="hover:text-zinc-300">Privacy</Link>
      </footer>
    </div>
  )
}
