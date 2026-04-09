import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Heel Hook BJJ: Inside, Outside & When to Use Them | AIBJJ',
  description: 'Complete guide to BJJ heel hooks — inside heel hook, outside heel hook, positions, finishing mechanics, injury risk, and when to use them in training and competition.',
}

export default function HeelHookPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Heel Hook BJJ: Inside, Outside & When to Use Them</h1>
        <p className="text-xl text-zinc-400 mb-8">Heel hooks have transformed modern grappling. Once considered forbidden territory, they are now standard tools in no-gi competition. Understanding both the inside and outside heel hook — their mechanics, risks, and strategic context — is essential for any serious practitioner.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Understanding Heel Hook Mechanics</h2>
          <p className="text-zinc-300 mb-4">A heel hook is a rotational leg lock that creates torsional stress on the knee joint. The attacker controls the heel and rotates the lower leg, which creates torque at the knee — specifically stressing the ACL, MCL, LCL, and meniscus depending on the rotation direction.</p>
          <p className="text-zinc-300 mb-4">Unlike the ankle lock (which applies force linearly to the Achilles), the heel hook creates rotation through the entire knee joint. This is why heel hooks are dangerous — the damage happens quickly and often before pain registers. Practitioners must learn to tap immediately when the position is established, not when they feel pain.</p>
          <p className="text-zinc-300"><strong>Critical rule:</strong> Tap to position, not to pain. By the time you feel a heel hook, damage may already be occurring.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Inside Heel Hook</h2>
          <p className="text-zinc-300 mb-4">The inside heel hook rotates the foot inward (toward the body&apos;s center), stressing the lateral structures of the knee — primarily the LCL and posterolateral corner. It&apos;s set up from inside positions: ashi garami (single leg X) and 50/50.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Inside Heel Hook from Ashi Garami</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Establish ashi garami: inside leg hooks their hip, outside leg hooks their far hip</li>
            <li>Trap the heel in your armpit (not in your hand — use your whole arm)</li>
            <li>Clamp your arm tight — close your elbow to your rib cage</li>
            <li>Rotate your body toward the heel, turning the foot inward</li>
            <li>Maintain pressure — don&apos;t yank; rotate steadily</li>
          </ul>
          <p className="text-zinc-300">The inside heel hook is considered less dangerous than the outside heel hook but still requires respect and controlled training methodology.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Outside Heel Hook</h2>
          <p className="text-zinc-300 mb-4">The outside heel hook rotates the foot outward, stressing the medial structures of the knee — primarily the ACL and MCL. It&apos;s considered the more dangerous heel hook because these structures are both more vulnerable and more commonly injured in sports.</p>
          <p className="text-zinc-300 mb-4">The outside heel hook is set up from outside positions: outside ashi garami, 50/50, and the crab ride. Gordon Ryan, Craig Jones, and the Danaher Death Squad brought this technique to mainstream prominence in the late 2010s.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Outside Heel Hook Setup</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Establish outside ashi: your outside foot hooks over their hip, inside foot hooks below their knee</li>
            <li>Heel goes in the armpit — wrap the arm around the Achilles (not the ankle)</li>
            <li>Rotate your torso away from them while pulling the heel in</li>
            <li>The rotation direction is opposite to the inside heel hook</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Positional Contexts: Where Heel Hooks Live</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Ashi Garami (Single Leg X)</h3>
          <p className="text-zinc-300 mb-4">Ashi garami is the primary platform for heel hooks. Your legs create a figure-four around their leg — inside leg across their hip, outside leg over their far hip. This position controls their entire leg and creates both inside and outside heel hook options.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">50/50</h3>
          <p className="text-zinc-300 mb-4">50/50 creates mutual heel hook threats. Both practitioners can attack simultaneously — whoever moves first often finishes first. This creates strategic battles where the person with better positional understanding wins, not necessarily the first to commit.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Saddle (4/11 Position)</h3>
          <p className="text-zinc-300 mb-4">The saddle (4/11, inside sankaku, or honeyhole) is considered the most dominant leg entanglement. It creates inside heel hook access with maximum control. John Danaher identified this as the single highest-percentage leg lock position.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Heel Hook Defenses and Leg Lock Defense Concepts</h2>
          <p className="text-zinc-300 mb-4">Heel hook defense begins before the submission — it&apos;s positional defense:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Never cross your feet in their guard:</strong> Crossed feet create leg lock entries</li>
            <li><strong>Don&apos;t ignore ashi garami:</strong> If they establish the position, escape or counter immediately</li>
            <li><strong>Heel hook counter (back step):</strong> When they reach for the heel, back step to remove the leg from their control</li>
            <li><strong>Knee alignment:</strong> Keep your knee pointing away from their body — a rotated knee is easier to heel hook</li>
            <li><strong>Engage or disengage:</strong> Either get into leg lock battles with knowledge or disengage — trying to pass through leg lock territory without understanding it leads to injury</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Heel Hook Rules and Competition Context</h2>
          <p className="text-zinc-300 mb-4">Heel hook rules vary significantly by competition format:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>IBJJF Gi:</strong> Heel hooks are illegal at all belt levels</li>
            <li><strong>IBJJF No-Gi:</strong> Inside heel hook is legal at brown and black belt; outside heel hook remains illegal</li>
            <li><strong>ADCC:</strong> All heel hooks legal</li>
            <li><strong>EBI/Submission Underground:</strong> All heel hooks legal</li>
            <li><strong>Polaris/Grapplefest:</strong> All heel hooks legal</li>
          </ul>
          <p className="text-zinc-300">If you train for IBJJF competition, you need to understand heel hooks for defense even if you won&apos;t be attacking with them. At brown/black belt no-gi, inside heel hooks are coming your way.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Training Heel Hooks Safely</h2>
          <p className="text-zinc-300 mb-4">Heel hooks require a specific training culture to practice safely:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Tap to position, not to pain — train yourself to recognize when the position is locked</li>
            <li>Practice positional drilling before adding finishing pressure</li>
            <li>Use slow, controlled pressure when finishing in training</li>
            <li>Establish clear communication with training partners — indicate when to release</li>
            <li>Learn the Danaher leg lock system or equivalent structured approach before free-rolling with heel hooks</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your Leg Lock System with AI Coaching</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on your leg lock game. Whether you&apos;re building your first heel hook system or refining your 50/50 strategy, the AI coach creates your curriculum.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Start Your Leg Lock Journey →</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Join AIBJJ and get a complete leg lock curriculum built around your current game and goals.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
