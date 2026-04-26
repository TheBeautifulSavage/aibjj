import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Escapes: How to Escape Every Bad Position | AIBJJ',
  description: 'Master BJJ escapes from mount, back mount, side control, knee on belly and more. Learn the mechanics of every major escape in BJJ and drill them effectively.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Escapes: How to Escape Every Bad Position</h1>
        <p className="text-xl text-zinc-400 mb-8">Good BJJ is about never staying in a bad position. This complete escape guide covers every major pin — mount, back, side control, and more — with the mechanics that make escapes work even against bigger, stronger opponents.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Philosophy of Escaping</h2>
        <p>Royce Gracie built BJJ's reputation on escaping bad positions against larger opponents. The underlying principle: technique and leverage should overcome size and strength. But escaping requires more than technique — it requires the right mental approach. Most beginners make the mistake of panicking when pinned, which leads to explosive, energy-wasting attempts that fail. Good escapers are calm, methodical, and patient. They create frames, re-establish posture, and look for leverage before attempting to move.</p>
        <p>The most important escape principle: escape early, before the position is fully established. Defending a half-established mount is far easier than escaping a tight, high mount. Train yourself to recognize the moment a position is being established and respond immediately.</p>

        <h2>Mount Escapes</h2>
        <h3>Bridge and Roll (Upa)</h3>
        <p>The foundational mount escape. When your opponent's hand is on the mat (or captured), bridge your hips explosively while rolling toward the trapped arm. The physics: your bridge creates vertical force that makes the opponent's base unstable, and the direction of the roll capitalizes on that instability. The bridge must be explosive and all-in — half-bridges fail.</p>
        <p>The trap-and-roll variation requires securing the opponent's arm and ankle on the same side before bridging. Without trapping, good mount holders will post and reset easily.</p>

        <h3>Elbow-Knee Escape (Hip Escape from Mount)</h3>
        <p>The most versatile and universally applicable mount escape. From underneath mount, you create a frame against the opponent's hip with your elbow and knee, hip-escape to create space, and recover to half guard or full guard. The key: the frame protects you from submission attacks while creating the space necessary to move. Many practitioners learn this as their primary mount escape because it works against high mount, low mount, and everything in between.</p>

        <h3>Trap the Arm (Kimura Trap)</h3>
        <p>From mount, if your opponent posts their hand on your chest or bicep, you can trap it with a figure-four grip (kimura grip) and bridge into them. This either completes the bridge and roll or forces them to posture back, creating space for a hip escape. The kimura threat from bottom mount is under-utilized at most belt levels.</p>

        <h2>Back Mount Escapes</h2>
        <h3>Seat Belt Escape</h3>
        <p>The primary back mount escape is the "roll to guard" technique. You grab their top (over) arm, bring your chin to their arm to prevent the rear naked choke, hip-escape away from their body, and roll forward to guard recovery or a roll-through to top position. The key: you must address the choking arm first. No other back escape is possible while the rear naked choke is being completed.</p>

        <h3>The "Elbow to the Mat" Counter</h3>
        <p>When the opponent has a body triangle rather than hooks, you can slide down toward their locked leg, bring your elbow to the mat, and rotate. This technique requires practice to feel the mechanical leverage, but it's highly effective against the body triangle when executed with correct body positioning.</p>

        <h2>Side Control Escapes</h2>
        <h3>Hip Escape to Guard Recovery</h3>
        <p>The most reliable side control escape. You create a frame against the opponent's hip and neck/chin, explosively hip-escape toward them, bring your inside knee up, and recover guard. The frame is critical — without it, you're pushing against a heavy top player with insufficient leverage. The frames buy you the millisecond of space that the hip escape needs.</p>

        <h3>Sit-Up to Knees (Wrestling Up)</h3>
        <p>Against side control, you can also "sit up" away from the opponent and get to your knees. This works best when the top player is applying chest-to-chest pressure without controlling your near hip. It transitions to wrestling positions (turtle, single leg) rather than guard, which is useful for wrestlers or athletes who prefer scramble-based escapes.</p>

        <h3>Underhook to Half Guard or Single Leg</h3>
        <p>When you're able to establish an underhook in side control, you can fight to your knees (against the far armpit) or create half guard by re-inserting your bottom leg. The underhook battle is central to side control — losing the underhook battle means losing the escape battle. Drill underhook entry from side control against opponents who are actively defending it.</p>

        <h2>Knee on Belly Escapes</h2>
        <p>Knee on belly is uncomfortable but escapable. Primary options: (1) create a frame against the knee to push it off, then hip escape to guard or reverse; (2) pull the opponent's foot toward you to destabilize them; (3) attempt a single leg on the posted leg while they're elevated. The worst response to knee on belly is to stay flat — movement is your friend.</p>

        <h2>Escape Drilling</h2>
        <p>Positional sparring from bad positions is the best way to develop escapes. Ask training partners to start with you in mount, side control, or back mount and work only on escapes for 5-minute rounds. This focused drilling gives you more escape reps in one session than weeks of free rolling. AIBJJ's training journal helps you track which escape drills you've been doing and note what's working versus what needs more attention.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Escape Progress in AIBJJ →</Link>

        <h2>The Mental Side of Escaping</h2>
        <p>Escaping is as much mental as physical. The best thing you can do for your escape game is train with higher belts who mount and hold you without submission hunting. This teaches you to be comfortable in bad positions, to breathe, to wait for your moment, and to execute your escape mechanics without panic. Panic is the enemy of escaping. Calmness — combined with solid mechanical fundamentals — is the key.</p>
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
