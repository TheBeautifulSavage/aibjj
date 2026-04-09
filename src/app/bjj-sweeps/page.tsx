import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Sweeps: Best Sweeps from Every Guard Position | AIBJJ',
  description: 'Master BJJ sweeps from closed guard, half guard, butterfly, De La Riva, and more. Learn the mechanics and setups behind the most effective sweeps in grappling.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Sweeps: Best Sweeps from Every Guard Position</h1>
        <p className="text-xl text-zinc-400 mb-8">Sweeps are the engine of bottom-game BJJ. A strong sweeping game creates points, reversals, and dominant positions — making you dangerous from anywhere on the mat. Here's the complete guide to sweeping from every major guard position.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>What Makes a Sweep Work</h2>
        <p>Every effective sweep shares two mechanical requirements: you must break your opponent's base, and you must move them in the direction they're least able to resist. Base-breaking is about making them commit weight, create imbalance, or reach in a way that overextends them. Sweep direction is about exploiting the gap in their base — not sweeping into their strong side. Understanding these two principles lets you analyze any sweep and adapt when the basic mechanics don't land.</p>

        <h2>Closed Guard Sweeps</h2>
        <h3>Hip Bump Sweep (Sit-Up Sweep)</h3>
        <p>The most fundamental closed guard sweep. When your opponent posts up to pass or posture, you sit up, grab their wrist, and drive your hip into them as you fall to the side. The hip bump forces them to post their hand — setting up the kimura and guillotine — or dumps them directly if their base is weak. This sweep teaches the fundamental principle: sit up, break posture, sweep.</p>

        <h3>Scissor Sweep</h3>
        <p>A classic that appears at every belt level. From closed guard, you open your guard, place one shin across the opponent's hip and the other behind their knee, and scissor your legs while breaking their posture. The mechanics require good timing and hip extension, but the sweep is reliable against opponents who don't stay tight. Pairs beautifully with the armbar and triangle.</p>

        <h3>Flower Sweep (Pendulum Sweep)</h3>
        <p>When your opponent postures back and pushes on your hips or knees to pass, grip their sleeve and ankle. Pendulum your hips to generate momentum and roll them over your body. The flower sweep requires flexibility and timing but is extremely effective when set up correctly from the basic closed guard grip fight.</p>

        <h2>Half Guard Sweeps</h2>
        <h3>Old School Sweep (Half Guard Underhook Sweep)</h3>
        <p>The fundamental half guard sweep. When you have an underhook and your opponent's weight is loaded forward, you hip-escape to create space and sweep them in the direction of the underhook. Tom DeBlass and Bernardo Faria are both excellent resources for this sweep and its variations.</p>

        <h3>Electric Chair</h3>
        <p>From the lockdown position (a leg entanglement variation of half guard), the electric chair uses a controlled stretch of the opponent's leg to force them to roll. It's simultaneously a submission threat (inner thigh stretch) and a sweep entry. Eddie Bravo developed this system and it remains uniquely effective for those who develop the lockdown mechanics.</p>

        <h3>Deep Half Sweep</h3>
        <p>From deep half guard — where you've pushed your head through and are under the opponent's hips — the primary sweep is a simple lift-and-roll. The position requires getting your head under their center of gravity and using your legs to elevate. Jeff Glover and Bernardo Faria are masters of deep half whose instructionals are worth studying.</p>

        <h2>Butterfly Guard Sweeps</h2>
        <h3>Basic Butterfly Sweep</h3>
        <p>With both butterfly hooks in and an underhook on one side, you load your weight to one side and sweep to the hook side. The key is breaking their posture before sweeping — reaching in for the underhook, pulling them toward you, then elevating. Marcelo Garcia's butterfly sweep mechanics are the gold standard.</p>

        <h3>Arm Drag to Back Take</h3>
        <p>Technically not a sweep (you take the back rather than reversing position), but functionally similar in how it ends top-game dominance. From butterfly guard, arm drag the opponent's arm past your body, follow with your hips, and take the back. Garcia used this to dominate opponents 50+ pounds heavier with remarkable consistency.</p>

        <h2>De La Riva Guard Sweeps</h2>
        <h3>De La Riva Sweep to X-Guard</h3>
        <p>From De La Riva hook, you can transition to X-guard by sliding your second foot underneath the opponent's far leg and elevating from below. From X-guard, both legs elevate the opponent to knock them off balance. Marcelo Garcia's X-guard system is the most developed version of this sweep sequence.</p>

        <h3>Berimbolo Back Take</h3>
        <p>From De La Riva guard, the berimbolo is an inversion-based back-take that bypasses traditional sweeping. While technically complex, it's devastatingly effective when developed. The Miyao brothers and Leandro Lo made this technique famous at the highest competitive levels.</p>

        <h2>X-Guard Sweeps</h2>
        <p>X-guard has two primary sweeps: the shin sweep (hook the near ankle with your top foot and extend) and the back step sweep (remove your bottom foot and step around). Both are mechanical, reliable, and work well at all sizes. X-guard is particularly valuable against standing opponents who've broken your guard and are trying to complete a pass.</p>

        <h2>Building Your Sweep Game with AIBJJ</h2>
        <p>A complete sweep game has at least one reliable sweep from your primary guard, one from your secondary guard, and one emergency option when you're being passed. AIBJJ's technique library lets you catalog your sweeps by guard position and track which ones you're actively drilling versus which you've learned conceptually. This organized approach accelerates your sweep development by keeping your drilling focused.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Build Your Sweep Library in AIBJJ →</Link>

        <h2>The Sweep-Submission Connection</h2>
        <p>The most effective guard players use sweeps and submissions as threats to each other. The scissor sweep sets up the triangle; the hip bump sets up the kimura; the single leg X sets up heel hooks. When your opponent defends a sweep by posting their hand, that hand becomes available for a submission. When they defend the submission by pulling their arm back, they create the imbalance your sweep needs. Building your game around these connections — rather than isolated techniques — is what separates good guard players from great ones.</p>
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
