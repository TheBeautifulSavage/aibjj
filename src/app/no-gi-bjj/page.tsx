import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'No-Gi BJJ: How It Differs & What to Focus On | AIBJJ',
  description: 'Complete guide to no-gi BJJ — how it differs from gi, what techniques translate, grip changes, leg locks, and how to build a complete no-gi game.',
}

export default function NoGiBJJPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">No-Gi BJJ: How It Differs & What to Focus On</h1>
        <p className="text-xl text-zinc-400 mb-8">No-gi BJJ removes the uniform — and with it, many of the control and submission options that define gi training. What remains is faster, more athletic, and increasingly dominant in modern competition. Understanding no-gi is essential for any complete grappler.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Gi vs. No-Gi: The Core Differences</h2>
          <p className="text-zinc-300 mb-4">The most fundamental difference is grip. In the gi, collar grips, sleeve grips, and lapel grips create friction and control that slow the match down and create submission opportunities unavailable in no-gi. Remove the gi and that entire game disappears.</p>
          <p className="text-zinc-300 mb-4">No-gi is faster. Without friction grips, transitions happen quicker, positions slip more easily, and the match pace increases. Athletic attributes like speed, explosiveness, and strength play a larger role relative to pure technique.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>No collar, sleeve, or lapel grips — only body grips</li>
            <li>Faster pace — sweaty bodies and no friction</li>
            <li>Leg locks more prominent and legal at higher belt levels</li>
            <li>Wrestling and body lock takedowns replace collar-and-sleeve throws</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Grip Changes in No-Gi</h2>
          <p className="text-zinc-300 mb-4">Every grip in the gi has a no-gi equivalent:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Collar grip → Neck tie or head control</strong></li>
            <li><strong>Sleeve grip → Wrist control or two-on-one</strong></li>
            <li><strong>Belt grip → Body lock or underhook</strong></li>
            <li><strong>Lapel guard → Leg pummeling or butterfly hooks</strong></li>
          </ul>
          <p className="text-zinc-300">The grip changes require deliberate practice — a gi player who transitions to no-gi often finds their game collapses because they've been relying on gi grips without realizing it. The solution is intentional no-gi drilling to rebuild the grip vocabulary.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">What Translates from Gi to No-Gi</h2>
          <p className="text-zinc-300 mb-4">Many fundamental techniques translate directly:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Armbar mechanics are identical</li>
            <li>Triangle choke is identical (set up differently without sleeve grips)</li>
            <li>Rear naked choke and back control are pure no-gi</li>
            <li>Butterfly guard, closed guard, and half guard all work</li>
            <li>Mount and side control principles are identical</li>
            <li>Hip escapes, bridges, and fundamental movements are universal</li>
          </ul>
          <p className="text-zinc-300 mb-4">What doesn't translate as directly: spider guard, lasso guard, DLR entries that rely on collar grips, cross collar chokes, and collar-based passing systems. These require adaptation.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">No-Gi Guard Systems</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Butterfly Guard</h3>
          <p className="text-zinc-300 mb-4">Butterfly guard is the king of no-gi guards. Double underhooks or overhook/underhook combinations replace sleeve grips. Marcelo Garcia built his entire game around butterfly guard in both gi and no-gi — evidence that this guard is equally effective in both contexts.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Closed Guard</h3>
          <p className="text-zinc-300 mb-4">Closed guard in no-gi relies on body grips — neck ties, overhooks, wrist control. The submissions and sweeps work identically, but the setups require more explosive hip movement without the friction of gi grips to hold posture down.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Leg Lock Guards (Ashi Garami, Single Leg X, 50/50)</h3>
          <p className="text-zinc-300 mb-4">No-gi has increasingly become a leg lock game. Ashi garami systems, K-guard, and 50/50 set up heel hooks and knee bars. Understanding the leg lock game in no-gi is no longer optional for serious competitors — it's required to compete at intermediate levels and above.</p>
          <Link href="/bjj-heel-hook" className="text-red-400 hover:text-red-300 font-semibold">→ Complete heel hook guide</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">No-Gi Passing</h2>
          <p className="text-zinc-300 mb-4">Without collar grips, the passing game changes. Effective no-gi passes:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Torreando:</strong> Grip the legs and swing them aside — works in both gi and no-gi</li>
            <li><strong>Knee slice:</strong> Knee slides through the guard — works with body grips</li>
            <li><strong>Body lock pass:</strong> Control the hips, remove the legs — more relevant in no-gi without collar grips to create pressure</li>
            <li><strong>Over/under pass:</strong> Classic wrestling pass — one arm over the hip, one under the leg</li>
            <li><strong>Double unders:</strong> Control both legs in your armpits and stack or pass</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">No-Gi Takedowns</h2>
          <p className="text-zinc-300 mb-4">No-gi takedowns are wrestling-based. BJJ practitioners who add wrestling dramatically improve their no-gi game:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Double leg takedown</li>
            <li>Single leg takedown</li>
            <li>Arm drag to single leg or back take</li>
            <li>Body lock trips and throws</li>
            <li>Snap-down to guillotine or back take</li>
          </ul>
          <p className="text-zinc-300">Guard pulling is still common in no-gi competition, but wrestlers who engage in takedown battles often win the position game before it even reaches the ground.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Modern No-Gi Game: John Danaher's Influence</h2>
          <p className="text-zinc-300 mb-4">John Danaher and the Danaher Death Squad (Gordon Ryan, Garry Tonon, Craig Jones) have arguably had the biggest influence on modern no-gi competition. Their system emphasizes:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Back control as the highest-value position</li>
            <li>Leg lock system centered on ashi garami and the saddle</li>
            <li>Kimura trap system for upper body control</li>
            <li>Systematic positional approach vs. improvisation</li>
          </ul>
          <p className="text-zinc-300">Their approach has influenced no-gi competition globally — understanding their positional concepts makes you a more complete no-gi grappler.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your No-Gi Game with AI</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on your no-gi game. Whether you're transitioning from gi or building your no-gi from scratch, the AI coach creates your complete curriculum.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your No-Gi Game Plan →</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Build a complete no-gi game with AIBJJ's AI coaching system.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
