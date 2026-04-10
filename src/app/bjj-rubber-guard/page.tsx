import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rubber Guard BJJ: Eddie Bravo\'s System Explained | AIBJJ',
  description: 'Complete guide to rubber guard BJJ — Eddie Bravo\'s 10th Planet system. Learn the Meathook, Mission Control, New York, Zombie, and submission chains.',
}

export default function RubberGuardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Rubber Guard BJJ: Eddie Bravo's System Explained</h1>
        <p className="text-xl text-zinc-400 mb-8">Eddie Bravo built a complete no-gi grappling system around flexibility and non-traditional guard positions. Rubber guard sits at the center of it — a closed guard variation where the leg pins the arm, creating control that traditional closed guard can't match.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">What Is Rubber Guard?</h2>
          <p className="text-zinc-300 mb-4">Rubber guard is a closed guard variation where you push your leg over the opponent's shoulder — pinning their arm against their body and limiting their posture options. Unlike traditional closed guard (which relies primarily on leg lock and grip combinations), rubber guard uses hip flexibility to create control with a single leg position.</p>
          <p className="text-zinc-300 mb-4">The system was developed by Eddie Bravo of 10th Planet Jiu-Jitsu, who famously beat Royler Gracie using it at ADCC 2003. Since then, the system has evolved into a comprehensive chain of positions, each with its own name and attack options.</p>
          <p className="text-zinc-300">The key requirement: significant hip flexibility. Without the ability to push your shin above the opponent's shoulder, rubber guard isn't accessible. This is why it works better for some practitioners than others.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Rubber Guard Positions</h2>

          <h3 className="text-xl font-bold mb-2 text-red-400">Mission Control</h3>
          <p className="text-zinc-300 mb-4">Mission Control is the entry point to rubber guard. From closed guard, you open your guard and push one leg up to pin their arm. Your hand grabs your own shin to hold the position. This creates the frame that everything else builds from.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">The Meathook</h3>
          <p className="text-zinc-300 mb-4">From Mission Control, you switch your grip from your shin to behind their head — the Meathook. This is a significant control upgrade because now you're pulling their posture down with arm and leg simultaneously. They can't posture up against both your leg on their shoulder and your arm pulling their head.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">New York</h3>
          <p className="text-zinc-300 mb-4">The New York position occurs when the opponent reaches their arm up to fight the leg. You transition from the Meathook to a position where your hand grips their wrist instead of behind their head. This sets up the Omoplata or transitions to other submission chains.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">The Zombie</h3>
          <p className="text-zinc-300 mb-4">When the opponent pushes their arm into your body to defend the leg position, you extend your arm toward them — hence "Zombie." This transitions to the Invisible Collar and Chill Dog positions which set up triangle and omoplata attacks.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Invisible Collar</h3>
          <p className="text-zinc-300 mb-4">The Invisible Collar is a deep arm/neck entanglement where your arm wraps behind their neck. Combined with the leg on shoulder, this creates a vice-like control that sets up the Gogoplata submission — a foot-in-throat choke that is nearly impossible to defend when set up correctly.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Submissions from Rubber Guard</h2>

          <h3 className="text-xl font-bold mb-2 text-red-400">Gogoplata</h3>
          <p className="text-zinc-300 mb-4">The Gogoplata is a choke using the shin across the throat. From the Invisible Collar position, you walk your shin under their chin and choke with the lower shin/instep. It requires substantial hip flexibility to lock in, but once in place, it's very difficult to escape.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Omoplata from Rubber Guard</h3>
          <p className="text-zinc-300 mb-4">The arm-over-the-shoulder position in rubber guard is a natural setup for the omoplata. From New York, you can swing the leg over and convert directly to an omoplata submission or use it as a sweep.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Triangle from Rubber Guard</h3>
          <p className="text-zinc-300 mb-4">When opponents defend the rubber guard by pulling their arm out, they often create the opening for a triangle. The leg position above the shoulder means one arm is already isolated — adding the triangle is a natural flow.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Armbar from Rubber Guard</h3>
          <p className="text-zinc-300 mb-4">The immobilized arm from rubber guard creates direct armbar opportunities. When they leave their arm extended, the armbar becomes available without the usual setup required from traditional closed guard.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Full 10th Planet System</h2>
          <p className="text-zinc-300 mb-4">Rubber guard is the centerpiece of Eddie Bravo's 10th Planet system, but it's part of a larger no-gi framework that includes:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Twister system: a series of spine locks accessible from back control</li>
            <li>Lockdown half guard: the figure-four leg entanglement from half guard</li>
            <li>Electric Chair: a leg stretch and sweep from lockdown</li>
            <li>Truck position: a crab ride-like position that sets up the Twister</li>
            <li>Calf slicer sequences: available from various top positions</li>
          </ul>
          <p className="text-zinc-300">The 10th Planet system creates a complete no-gi grappling game built around flexibility, non-traditional positions, and submission chains that most opponents haven't trained to defend.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Flexibility Requirements</h2>
          <p className="text-zinc-300 mb-4">Rubber guard isn't for everyone. The position demands significant hip flexibility — specifically external hip rotation. Here are the flexibility benchmarks:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Can you bring your shin above your opponent's shoulder from closed guard?</li>
            <li>Can you hold that position without using your hand for more than 5 seconds?</li>
            <li>Can you transition from Mission Control to Meathook smoothly?</li>
          </ul>
          <p className="text-zinc-300 mb-4">If you can't yet reach these positions, hip flexibility training will get you there. Consistent hip stretching, yoga, and practice will improve your range of motion over months.</p>
          <p className="text-zinc-300">10th Planet schools often include flexibility training as part of their warm-up specifically to develop rubber guard ability.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Is Rubber Guard Effective at High Levels?</h2>
          <p className="text-zinc-300 mb-4">This is a common question, especially among skeptics. The honest answer: rubber guard is a legitimate system that works at high levels, but it has prerequisites and limitations.</p>
          <p className="text-zinc-300 mb-4"><strong>What works:</strong> Against opponents who haven't trained rubber guard defense, the positions create genuine control issues. The Gogoplata and omoplata setups are legitimate submission threats. The system forces opponents into unfamiliar territory.</p>
          <p className="text-zinc-300 mb-4"><strong>Limitations:</strong> High-level grapplers who understand rubber guard can escape the positions. Maintaining Mission Control against a very strong, tall opponent is physically demanding. Without the flexibility, you can't access the system at all.</p>
          <p className="text-zinc-300">Rubber guard is most effective as a complementary system — not a replacement for fundamental closed guard. Use it as a surprise weapon and a flexibility tool.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Explore Rubber Guard with AI Coaching</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on whether rubber guard fits your game, how to develop the flexibility needed, and which positions to start with.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Started Free →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Rubber Guard vs. Traditional Guard Systems</h2>
          <p className="text-zinc-300 mb-4">Should you spend time on rubber guard or traditional open guard systems? Both have merit — here's how to think about it:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>If you compete in gi, invest your time in spider/DLR/lasso first</li>
            <li>If you're no-gi focused with good flexibility, rubber guard is a legitimate investment</li>
            <li>If flexibility is a limitation, butterfly guard and closed guard are higher-percentage</li>
            <li>Rubber guard is excellent for MMA where the opponent can't easily posture with cage assistance</li>
          </ul>
          <p className="text-zinc-300 mt-4">Many <Link href="/bjj-for-mma" className="text-red-400 hover:text-red-300">MMA practitioners</Link> use rubber guard specifically because the cage and fence create a natural pressure that makes the positions easier to maintain.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Join AIBJJ and build a personalized training plan that integrates rubber guard into your complete bottom game.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
