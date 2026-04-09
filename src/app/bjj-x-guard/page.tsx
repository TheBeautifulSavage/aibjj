import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'X-Guard BJJ: Marcelo Garcia\'s System Explained | AIBJJ',
  description: 'Master X-guard BJJ. Learn Marcelo Garcia\'s X-guard system — entries from butterfly and standing, sweeps, back takes, and how to use X-guard at any level.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">X-Guard BJJ: Marcelo Garcia&apos;s System Explained</h1>
        <p className="text-xl text-zinc-400 mb-8">X-guard is one of the most reliable sweeping positions in all of grappling. Marcelo Garcia used it to dominate opponents twice his size. Here's the complete breakdown of X-guard mechanics, entries, and sweeps.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>What Is X-Guard?</h2>
        <p>X-guard is an open guard position where the bottom player is underneath a standing opponent with two legs engaged on the opponent's legs. One foot is on the opponent's hip and the other leg goes between the opponent's legs and hooks around the far leg at the knee or thigh — creating an "X" shape with your legs. From this position, you control the opponent's entire base, making them extremely susceptible to sweeps.</p>
        <p>The position was systematized and popularized by Marcelo Garcia — a four-time ADCC champion and five-time world champion who used X-guard to sweep much larger opponents with remarkable consistency. His 2003 ADCC performance, where he defeated multiple heavier opponents with the position, introduced it to the wider grappling world.</p>

        <h2>Why X-Guard Works</h2>
        <p>X-guard's mechanical advantage is that it controls the opponent's center of gravity from below. When you're in X-guard, your legs are positioned under the opponent's hips — the heaviest part of their body. By elevating with both legs simultaneously and directing their weight in any direction, you can create sweeps that require almost no strength. The physics of the position create leverage that negates size differences, which is why Garcia could sweep 220-pound opponents at 170 pounds.</p>

        <h2>X-Guard Entries</h2>
        <h3>Entry from Butterfly Guard</h3>
        <p>The most common X-guard entry. From butterfly guard, when your opponent stands or leans forward, you shoot one leg underneath their hips (the X-guard bottom leg) and hook their far leg with the other. The butterfly to X-guard transition requires a simultaneous hip escape and leg insertion — timing this with the opponent's weight transfer makes it effortless.</p>

        <h3>Entry from Single Leg</h3>
        <p>When you've got a leg in the air (from a failed guard pass or a standing wrestling position), you can shoot into X-guard by sitting under the opponent and inserting both legs into the X configuration. This entry is particularly useful in no-gi when guard openings create brief single-leg opportunities.</p>

        <h3>Entry from De La Riva Guard</h3>
        <p>From De La Riva guard, when the opponent tries to clear your DLR hook by stepping their leg through, you can transition into X-guard by following their leg movement with your hip insertion. This makes X-guard a natural landing spot when De La Riva sweeps are defended.</li>

        <h2>X-Guard Sweeps</h2>
        <h3>Shin Sweep (Primary Sweep)</h3>
        <p>The most fundamental X-guard sweep. With X-guard established, you hook your top foot behind the opponent's near ankle and push/kick forward while elevating their hip with your lower leg. The opponent falls backward. This sweep requires coordinating the push of the top foot with the elevation of the bottom leg — when both happen simultaneously, the sweep is extremely strong.</p>

        <h3>Back Step Sweep</h3>
        <p>When the opponent leans forward to resist the shin sweep, you remove your bottom leg and swing it back, taking away your support of their hips. Without the elevation support, their forward lean causes them to fall. The backstep sweep often creates a scramble that can be resolved into the top position or back take.</p>

        <h3>Stand Up to Single Leg</h3>
        <p>Rather than completing a floor sweep, you can use X-guard elevation to stand up with one of their legs, converting to a single leg takedown. This is particularly effective in wrestling-oriented no-gi competition where getting to standing from bottom is valued.</p>

        <h2>X-Guard Back Takes</h2>
        <p>When opponents defend X-guard sweeps by sprawling, posting, or leaning forward, the back take becomes available. Garcia's preferred back-take from X-guard involves releasing one leg, hooking the opponent's near leg with your outside arm, and rotating under and through to emerge behind the opponent. This transition is one of the most fluid back-take sequences in BJJ and is worth studying extensively from Garcia's match footage.</p>

        <h2>Single Leg X-Guard</h2>
        <p>Single leg X (also called "ashi garami" in the leg lock context) is a related position where you only engage one leg in an X configuration. It's used both as a sweep-centric guard position and as the foundational leg lock position. Understanding the relationship between sweep-focused single leg X and leg-lock-focused ashi garami is important for developing a complete bottom game that connects sweeps and submissions.</p>

        <h2>Training X-Guard</h2>
        <p>X-guard is accessible to blue belts and above who have existing butterfly guard foundations. Key development steps:</p>
        <ol>
          <li>Drill the butterfly-to-X entry 50+ times with a cooperative partner before attempting in live rolling</li>
          <li>Work X-guard positional sparring — start in X-guard and sweep from there</li>
          <li>Develop the shin sweep mechanics before adding the backstep or back take</li>
          <li>Study Marcelo Garcia's competition footage extensively — watching mastery at speed programs your movement pattern faster than any instructional</li>
        </ol>
        <p>Log your X-guard drilling progress in AIBJJ — tracking which entry is working, which sweep you're finishing, and where you're losing position helps you structure your drilling focus for maximum development speed.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Build Your X-Guard Game with AIBJJ →</Link>

        <h2>X-Guard Resources</h2>
        <p>Marcelo Garcia's instructional on X-guard (available on BJJ Fanatics) is the definitive resource. His competition footage is freely available and shows the system applied against elite opponents at speed. For a more analytical breakdown, Stephan Kesting has produced detailed free content on X-guard mechanics that pairs well with Garcia's instruction.</p>
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
