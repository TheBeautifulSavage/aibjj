import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Omoplata BJJ: The Shoulder Lock System | AIBJJ',
  description: 'Complete guide to the BJJ omoplata — setups from guard, finishing mechanics, sweeps from omoplata, and how to chain the omoplata into other attacks.',
}

export default function OmoplataPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Omoplata BJJ: The Shoulder Lock System</h1>
        <p className="text-xl text-zinc-400 mb-8">The omoplata is the most underrated weapon in Brazilian Jiu-Jitsu. Equal parts submission, sweep, and back take — when you understand the omoplata as a system rather than a single technique, it becomes one of your most dangerous offensive tools from guard.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Omoplata Mechanics</h2>
          <p className="text-zinc-300 mb-4">The omoplata is a shoulder lock applied with your leg rather than your arm. Your leg wraps around the opponent&apos;s arm from behind their shoulder, and by rotating your body perpendicular and sitting up, you create a rotational force on the shoulder joint — the same joint targeted by the kimura and Americana, but from a completely different direction.</p>
          <p className="text-zinc-300 mb-4">What makes the omoplata uniquely powerful is that the leg provides more leverage than an arm. Your entire hip and core power goes into the lock, and when you sit up, the leverage multiplies.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Setting Up the Omoplata from Closed Guard</h2>
          <p className="text-zinc-300 mb-4">The classic omoplata setup: from closed guard with a sleeve grip or wrist control, swing your leg over the arm to the outside, placing your leg behind their shoulder. Sit up and rotate your body perpendicular to apply the lock.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Step-by-Step Setup</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Control their sleeve with a cross-grip or same-side grip</li>
            <li>Create an angle by opening your guard and placing a foot on their hip</li>
            <li>Swing the far leg over their arm — your leg goes outside their shoulder from behind</li>
            <li>Lock your legs together (your inside leg over your outside leg)</li>
            <li>Sit up and rotate 90 degrees, bringing your body perpendicular to theirs</li>
            <li>Both hands on their back/lower back — prevent them from rolling through</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Omoplata from Spider Guard</h2>
          <p className="text-zinc-300 mb-4">Spider guard creates a natural omoplata setup. When you have a foot on their bicep (spider position), simply swing that leg from the bicep to behind their shoulder. The spider guard foot placement already positions you perfectly for the omoplata swing.</p>
          <p className="text-zinc-300">This is one reason spider guard is so dangerous — the threat of the omoplata is constant whenever your foot is on their bicep.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Finishing the Omoplata Submission</h2>
          <p className="text-zinc-300 mb-4">The omoplata is frequently set up but rarely finished by intermediate practitioners. The finish requires specific details:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Sit up tall — your weight should be on your sit bones, not leaning back</li>
            <li>Walk your hips away from them to increase the rotation on the shoulder</li>
            <li>Keep their arm locked against your inner thigh — don&apos;t let it slide out</li>
            <li>Their elbow should point toward the ceiling</li>
            <li>Prevent the roll: grip their belt with near hand or post on their back</li>
          </ul>
          <p className="text-zinc-300">The most common defense is rolling forward through the omoplata. You must control their back to prevent this. When they try to roll, either hold them down or use the roll to transition to another position.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Omoplata as a Sweep</h2>
          <p className="text-zinc-300 mb-4">If your opponent defends the omoplata submission by posturing or pulling their arm, convert to a sweep:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>When they posture up against the omoplata, grab their far leg (ankle or pants)</li>
            <li>Pull the leg while pushing with your hips — this sweeps them to your top</li>
            <li>You end up in top side control or in a scramble where you&apos;re ahead</li>
          </ul>
          <p className="text-zinc-300 mb-4">The omoplata sweep is one of the highest-percentage sweeps in competition BJJ. Many practitioners set up the omoplata specifically for the sweep rather than the submission.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Omoplata Back Take</h2>
          <p className="text-zinc-300 mb-4">When the opponent rolls through your omoplata to escape, they often expose their back. Follow the roll while maintaining your leg grip around their arm — as they come up, you establish back control. The back take from a rolled omoplata is one of the most elegant transitions in BJJ.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Omoplata Combinations</h2>
          <p className="text-zinc-300 mb-4">The omoplata connects to nearly every other guard attack:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Triangle → Omoplata:</strong> When the triangle is defended (they pull the arm out), the omoplata is immediately available</li>
            <li><strong>Omoplata → Triangle:</strong> When they posture to defend the omoplata, the triangle opens</li>
            <li><strong>Armbar → Omoplata:</strong> Failed armbar creates omoplata opportunity</li>
            <li><strong>Omoplata → Kimura:</strong> Transition between shoulder locks</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Omoplata in Gi vs. No-Gi</h2>
          <p className="text-zinc-300 mb-4">The omoplata works in both gi and no-gi, but with differences. In the gi, sleeve grips make the setup easier. In no-gi, you rely on wrist control or overhooks to create the entry. The finish is identical — the leg position doesn&apos;t change based on whether gi grips are available.</p>
          <p className="text-zinc-300">In no-gi, the omoplata is slightly harder to maintain because there&apos;s nothing to grab on their back. Use two hands on their lower back or one hand on the back and one hand blocking their hip.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your Omoplata Game</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on developing the omoplata as a primary weapon. The AI coach creates a custom omoplata system curriculum based on your current guard game.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Omoplata Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Why Every BJJ Practitioner Should Know the Omoplata</h2>
          <p className="text-zinc-300 mb-4">Even if you don&apos;t specialize in the omoplata, understanding it makes your entire guard game better. It&apos;s the connecting tissue between many attacks — understanding how the omoplata flows into and from other techniques deepens your comprehension of guard as a whole.</p>
          <p className="text-zinc-300">Practitioners who ignore the omoplata have a predictable guard that can be defended by anyone who trains specifically for their submission preference. Adding omoplata threats makes your game multi-dimensional.</p>
          <Link href="/bjj-guard" className="text-red-400 hover:text-red-300 font-semibold">→ Complete BJJ guard guide</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Add the omoplata to your complete submission arsenal with AIBJJ&apos;s AI coaching system.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
