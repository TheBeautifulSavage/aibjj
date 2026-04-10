import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rear Naked Choke: The Ultimate BJJ Submission | AIBJJ',
  description: 'Master the rear naked choke — the most effective submission in BJJ and MMA. Learn proper mechanics, back control setups, seat belt grip, and finishing details.',
}

export default function RearNakedChokePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Rear Naked Choke: The Ultimate BJJ Submission</h1>
        <p className="text-xl text-zinc-400 mb-8">The rear naked choke is the most reliable submission in combat sports. From back control, it's a blood choke that shuts off consciousness in seconds when applied correctly. Learning to take the back and finish the RNC is essential for every BJJ practitioner.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Why the Back Is the King Position</h2>
          <p className="text-zinc-300 mb-4">Back control is the highest-value position in BJJ. The person on the back can see everything; the person on the bottom can see nothing behind them. You can attack freely while they can only defend. And the rear naked choke — the primary attack from back control — is one of the few submissions you can apply with dominant body positioning.</p>
          <p className="text-zinc-300 mb-4">In MMA, the RNC finishes more fights than any other submission. In BJJ competition, back control with hooks is four points — the highest positional score. The back is where the match ends.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Back Control Mechanics</h2>
          <p className="text-zinc-300 mb-4">Before the RNC comes back control. Proper back control requires:</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Hooks vs. Seatbelt</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Both heels hooked inside the opponent's thighs — this is back control with hooks</li>
            <li>Hooks prevent them from sitting out or rolling away</li>
            <li>Seat belt grip: one arm over the shoulder, one arm under the armpit, hands clasped at the chest</li>
            <li>The seat belt prevents them from pulling the choking arm down</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Back Control Principles</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Stay on the top or side of their back — never flat on your own back</li>
            <li>If on your back, stay on the seatbelt-arm side (don't give them the roll)</li>
            <li>Control the upper body first — without seatbelt, they escape</li>
            <li>Don't rush the choke at the cost of losing back control</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Rear Naked Choke Mechanics</h2>
          <p className="text-zinc-300 mb-4">The RNC is a blood choke — it compresses both carotid arteries simultaneously. Unconsciousness comes in 5-8 seconds when applied correctly.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Step-by-Step Execution</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>From seatbelt, sneak the top arm under their chin (not over the chin)</li>
            <li>Bring your choking arm across their neck so the crook of your elbow is at their throat centerline</li>
            <li>Grab your own bicep with the support arm (not their shoulder)</li>
            <li>Place your support-arm hand on the back of their head</li>
            <li>Squeeze your elbows together while pushing the head forward with your hand</li>
          </ul>
          <p className="text-zinc-300 mb-4">The "push the head forward" detail is critical. Simply squeezing is often not enough — the hand on the back of the head pushing creates the final tightening that finishes the choke.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Chin Tuck Defense and Counter</h3>
          <p className="text-zinc-300 mb-4">Your opponent will tuck their chin to prevent the arm from getting under. To counter: use your bottom arm to frame, create a gap, or use the seatbelt to tilt their head to the choking side before sliding the arm under. Patience here — don't force it.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Taking the Back: Entries to Back Control</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">From Turtle Position</h3>
          <p className="text-zinc-300 mb-4">The turtle is the most common path to the back. When your opponent turtles (hands and knees), insert your hooks from the side and take the back. Establish seatbelt first, then work your hooks in one at a time.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">From Guard (Back Take)</h3>
          <p className="text-zinc-300 mb-4">Half guard underhook back takes, DLR back takes, and spider guard back takes all lead to back control. The guard is a back take machine when used offensively.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">From Takedown</h3>
          <p className="text-zinc-300 mb-4">When you take someone down and they turtle, take the back immediately. Many BJJ practitioners drill guard pulls but neglect this highly common pathway to back control.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">From Mount</h3>
          <p className="text-zinc-300 mb-4">When opponents try to escape mount by turning to their stomach, follow them and take the back. This requires anticipating the roll and moving with them.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Defending the Rear Naked Choke</h2>
          <p className="text-zinc-300 mb-4">Defense begins before the choke is set — it's about preventing back control and protecting the neck when the arm reaches:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Chin tuck:</strong> Tuck your chin to your chest the moment they reach for the neck</li>
            <li><strong>Two-hands on the choking arm:</strong> Grab the choking arm with both hands to create space</li>
            <li><strong>Don't cross-grip:</strong> Two hands on same arm is better than grabbing both arms</li>
            <li><strong>Create a frame:</strong> Use your elbow as a frame against their forearm to prevent them getting under the chin</li>
            <li><strong>Escape the back:</strong> Roll toward the hook side while pulling the choking arm down — this is your primary escape route</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Back Control When They Defend Well</h2>
          <p className="text-zinc-300 mb-4">Against experienced defenders, the chin tuck defense will make the RNC difficult. Alternative attacks from back control:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Bow and arrow choke (gi): grab the lapel from behind for a devastating gi choke</li>
            <li>Back armbar: when they grab the choking arm with both hands, take the armbar</li>
            <li>Mata leão (no-gi): attack from a slightly different angle when standard RNC is blocked</li>
            <li>Transition to mount: if they escape a hook, transition to mount rather than lose everything</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Improve Your Back Game with AI Coaching</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on taking the back and finishing the rear naked choke. The AI builds a complete back control curriculum based on your current game.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Build Your Back Game →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">RNC in MMA vs. BJJ</h2>
          <p className="text-zinc-300 mb-4">In MMA, the RNC finishes more fights than any other technique. The same mechanics apply, but back control in MMA includes additional considerations: striking defense from the bottom, positional stability, and the fence in cage-based promotions.</p>
          <p className="text-zinc-300">In BJJ competition, the RNC is the signature finish from back control. Understanding the relationship between back control, hooks, and the seat belt grip creates a complete system that translates to any ruleset.</p>
          <Link href="/bjj-for-mma" className="text-red-400 hover:text-red-300 font-semibold">→ How BJJ translates to MMA</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Join AIBJJ and develop a complete back control system with personalized AI coaching.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
