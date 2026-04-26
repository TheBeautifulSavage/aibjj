import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Half Guard BJJ: The Complete Half Guard System | AIBJJ',
  description: 'Master BJJ half guard with this complete guide to deep half, lockdown, Z-guard, and K-guard. Learn sweeps, submissions, and back takes from half guard.',
}

export default function HalfGuardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Half Guard BJJ: The Complete Half Guard System</h1>
        <p className="text-xl text-zinc-400 mb-8">Half guard started as a guard that was being passed. Today it's one of the deepest positional systems in BJJ — with entire competition careers built around it. From the lockdown to deep half, this position is far from desperate.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">The Evolution of Half Guard</h2>
          <p className="text-zinc-300 mb-4">For the first decade of BJJ's spread in the West, half guard was considered a failed guard. You ended up there when someone passed your closed guard halfway. The goal was simply to recover full guard or escape to your feet.</p>
          <p className="text-zinc-300 mb-4">Roberto "Gordo" Correa changed everything. After a knee injury forced him to stay in half guard during recovery, he developed an entire attacking system from the position. Today, players like Jeff Glover, Tom DeBlass, and Lucas Leite have built entire championship game plans around half guard variations.</p>
          <p className="text-zinc-300">Half guard is now recognized as one of the most legitimate guard positions in the sport — offensive, creative, and full of surprises.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Half Guard Fundamentals</h2>
          <p className="text-zinc-300 mb-4">Basic half guard positions one of your legs between both of the opponent's legs, typically controlling their bottom leg with your inner knee and outer leg. The challenges are:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Opponent will try to flatten you out — killing your hip movement</li>
            <li>They'll fight for the cross-face to break your defensive frame</li>
            <li>They'll look to establish the underhook to take your back</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Defensive Priorities in Half Guard</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Fight for the underhook — the side with the underhook controls the direction of the match</li>
            <li>Use your near-side elbow as a frame against the cross-face</li>
            <li>Stay on your side, never let them flatten you to your back</li>
            <li>Keep your head close to their body to prevent the underhook from being cleared</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Underhook Game from Half Guard</h2>
          <p className="text-zinc-300 mb-4">Half guard with the underhook is one of the most dangerous positions in BJJ. Once you have the underhook, you can:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Stand up to your knees and take a single or double leg</li>
            <li>Take the back by walking your feet to the far side</li>
            <li>Sweep to the top by driving through the underhook</li>
            <li>Transition to knee shield and then to butterfly or closed guard</li>
          </ul>
          <p className="text-zinc-300">The underhook is so important that some practitioners build their entire half guard strategy around the single goal of achieving it. Once it's yours, the opponent is in serious trouble.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Deep Half Guard</h2>
          <p className="text-zinc-300 mb-4">Deep half guard occurs when you slide completely under the opponent's leg, placing their weight on your body while you control their leg. This is an advanced position that Jeff Glover popularized in competition.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Getting to Deep Half</h3>
          <p className="text-zinc-300 mb-4">From standard half guard, you dive under by swimming your outside arm under their far leg, positioning your shoulder under their thigh. Your head is between their legs, their weight sits on your body.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Attacks from Deep Half</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Back roll sweep: roll backward to elevate them and come on top</li>
            <li>Waiter sweep: use your inside leg to drive their far leg while rolling</li>
            <li>Homer Simpson sweep: when they try to step over, you sweep to top</li>
            <li>Back take: when they reach for your near leg, take their back</li>
          </ul>
          <p className="text-zinc-300">Deep half guard is particularly effective against people who sit heavy in your half guard — the deeper they sink, the more leverage you have.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Lockdown</h2>
          <p className="text-zinc-300 mb-4">The lockdown is a leg entanglement from half guard where you wrap their lower leg with both your legs in a figure-four position — your top foot hooked behind your knee, your lower leg under their calf. Eddie Bravo popularized this from his 10th Planet system.</p>
          <p className="text-zinc-300 mb-4">The lockdown immobilizes the trapped leg and creates mechanical leverage for sweeps. The electric chair (leg stretch forcing a sweep) is the signature attack from lockdown and can generate enormous pressure on the hip and knee.</p>
          <p className="text-zinc-300">Note: The lockdown is primarily useful for beginners to intermediate players and very flexible individuals. High-level players often escape the lockdown, but it remains a legitimate tool in the right matchup.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Z-Guard (Knee Shield Half Guard)</h2>
          <p className="text-zinc-300 mb-4">Z-guard puts your knee across the opponent's hip as a frame while your feet control their thigh. This creates distance — preventing them from establishing the cross-face and flattening you. The Z-guard knee shield is an intermediate position that protects you while you work for the underhook or transition to other guards.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Knee shield blocks cross-face and maintains space</li>
            <li>From here you can transition to butterfly guard or closed guard</li>
            <li>The knee can be repositioned to create a leg frame for sweeps</li>
            <li>Kimura attacks open up from Z-guard when they try to remove the frame</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">K-Guard and Modern Half Guard Variations</h2>
          <p className="text-zinc-300 mb-4">K-guard (knee shield with the leg hooked inside the far thigh) connects half guard to the modern leg lock system. From K-guard, ashi garami and back takes become available — making this one of the more dangerous half guard positions in contemporary no-gi grappling.</p>
          <p className="text-zinc-300">The modern grappling game has made half guard a gateway to leg locks. This is why no-gi competitors increasingly use half guard as an entry point into heel hooks and knee bars.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Half Guard Passing Concepts (for the Top Player)</h2>
          <p className="text-zinc-300 mb-4">Understanding half guard passing makes your bottom game better. The top player wants to:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Establish cross-face to flatten the bottom person and kill their frames</li>
            <li>Achieve the underhook to threaten the back</li>
            <li>Pressure down to prevent the bottom person from recovering to full guard</li>
            <li>Slide the knee out of the entanglement to achieve side control</li>
          </ul>
          <p className="text-zinc-300">If you're the top player and your opponent has the underhook, be careful — they're about to threaten a back take or sweep. Address the underhook immediately.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your Half Guard System</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on your half guard game. Whether you're a guard passer who keeps ending up in half guard or a dedicated half guard player looking to add depth, the AI coach builds your curriculum.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Start Your Half Guard Journey →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Half Guard in Competition</h2>
          <p className="text-zinc-300 mb-4">Half guard is one of the most common positions in competition — it happens constantly as guards get half-passed and players scramble. Having a developed half guard system means every failed pass attempt converts into an offensive opportunity rather than giving up position.</p>
          <p className="text-zinc-300">Notable competitors known for world-class half guard include Tom DeBlass, Lucas Leite, Jeff Glover, and Bernardo Faria (who built an entire black belt world championship game around deep half guard).</p>
          <Link href="/bjj-competition" className="text-red-400 hover:text-red-300 font-semibold">→ Complete BJJ competition guide</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Join AIBJJ and get an AI coach that builds your half guard into a complete system.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
