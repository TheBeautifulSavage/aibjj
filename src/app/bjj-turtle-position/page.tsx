import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Turtle Position: Attacks & Escapes | AIBJJ',
  description: 'Complete guide to the BJJ turtle position — how to attack the turtle, take the back, and escape from turtle position when you\'re the one turtled.',
}

export default function TurtlePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Turtle Position: Attacks & Escapes</h1>
        <p className="text-xl text-zinc-400 mb-8">The turtle position is a neutral defensive shell — hands and knees, head tucked. It&apos;s neither a winning position nor an immediate losing one. What matters is what you do next. From the top, the turtle is a back take opportunity. From the bottom, it&apos;s your escape launchpad.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">When Does the Turtle Occur?</h2>
          <p className="text-zinc-300 mb-4">The turtle position happens in several common scenarios:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Guard is being passed — you turtle to avoid giving up side control</li>
            <li>After a failed takedown attempt — you end up on hands and knees</li>
            <li>When escaping from bottom positions — rolling to turtle before recovering</li>
            <li>After being taken down defensively</li>
          </ul>
          <p className="text-zinc-300">The turtle is often a transitional position — a momentary defensive shell while you reorganize. The problem is when practitioners stall in turtle rather than moving through it.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Attacking the Turtle: Top Position</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Taking the Back from Turtle</h3>
          <p className="text-zinc-300 mb-4">The back take is the primary goal when your opponent turtles. Approach from the side — never from directly behind initially, as they can roll you over. Insert one hook first, establish the seatbelt, then insert the second hook.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Approach from the side (about 3 o&apos;clock to their 12)</li>
            <li>Post your head on their back and insert the near hook</li>
            <li>Establish seatbelt over their shoulder/under their arm</li>
            <li>Insert the far hook as you pull them back</li>
            <li>Roll to back control with both hooks</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Clock Choke (Gi)</h3>
          <p className="text-zinc-300 mb-4">The clock choke is a devastating gi choke directly from the turtle. One hand grips the collar behind their neck; your body is to their side. Walk your feet clockwise while pulling the collar — the neck compression creates an immediate choke threat.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Guillotine from Turtle</h3>
          <p className="text-zinc-300 mb-4">When they lift their head in turtle, the guillotine becomes available. Wrap around their neck from the top, clasp your hands, and pull them backward into a sitting guillotine or roll to guard with the choke locked.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Darce/Anaconda Choke</h3>
          <p className="text-zinc-300 mb-4">The Darce choke (or no-gi clock choke variant) works from the turtle top position. Thread your arm through the near side of their neck and arm, lock the triangle grip behind their head, and apply compression. This is one of the most powerful no-gi chokes from turtle top.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Kimura from Turtle Top</h3>
          <p className="text-zinc-300 mb-4">Reach for the near arm and establish a kimura grip. Use the kimura to flatten them, take their back, or finish the shoulder lock directly. The kimura from turtle is a high-percentage technique with multiple outcomes.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Escaping Turtle: Bottom Position</h2>
          <p className="text-zinc-300 mb-4">Being in turtle is not bad if you know what to do. The key principle: move before they establish position. A static turtle is dangerous; a dynamic turtle gives you options.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Stand Up</h3>
          <p className="text-zinc-300 mb-4">The simplest escape: use the turtle position to stand up and reset. If their hooks aren&apos;t in, there&apos;s no reason to stay on the ground. Post a foot, drive up, and come to your feet. This is especially effective in competition where returning to standing neutralizes their top pressure.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Roll to Guard</h3>
          <p className="text-zinc-300 mb-4">When they approach from the side, roll toward them and pull them into your closed guard or half guard. This requires timing — roll as they reach over your back before they establish the seatbelt.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Switch to Single Leg</h3>
          <p className="text-zinc-300 mb-4">From turtle, grab one of their legs and drive into a single leg takedown. This requires explosiveness but turns a defensive position into an immediate reversal.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Granby Roll</h3>
          <p className="text-zinc-300 mb-4">The Granby roll is a guard recovery technique used in wrestling and BJJ. Roll over the shoulder away from the attacker, using the momentum to recover guard or come to standing. It&apos;s a high-skill technique that requires practice but is very effective once learned.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Turtle in Competition Rules</h2>
          <p className="text-zinc-300 mb-4">In IBJJF competition, stalling in turtle is penalized. Referees will instruct turtled practitioners to move, and repeated stalling results in advantages or points for the opponent. You must actively work to escape turtle — staying static is not a strategy.</p>
          <p className="text-zinc-300">In submission-only formats, there are no points or stalling penalties in the traditional sense, but turtling indefinitely doesn&apos;t score anything and allows your opponent to work methodically for submissions.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Get Turtle Position Guidance from AI</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on attacking the turtle and escaping from it. Whether you keep getting stuck in turtle or want better back take entries, the AI coach has your plan.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Turtle Game Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Turtle as Part of a Larger System</h2>
          <p className="text-zinc-300 mb-4">Smart practitioners use the turtle strategically — not as a final position but as a transitional one. Rolling to turtle from a bad guard pass allows you to come to your feet or take a more favorable scramble position.</p>
          <p className="text-zinc-300">The best guard passers anticipate the turtle and have their back take already prepared. The best guard players know how to roll through the turtle quickly before the top person can establish control. Understanding both sides of this position makes you more complete.</p>
          <Link href="/bjj-back-control" className="text-red-400 hover:text-red-300 font-semibold">→ Complete back control guide</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Turn the turtle position from a liability to an asset with AIBJJ&apos;s AI coaching system.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
