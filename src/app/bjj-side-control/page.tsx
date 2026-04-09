import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Side Control: Pins, Transitions & Submissions | AIBJJ',
  description: 'Master BJJ side control with this complete guide — how to pin, maintain, attack, and transition from side control. Includes escapes from the bottom.',
}

export default function SideControlPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Side Control: Pins, Transitions & Submissions</h1>
        <p className="text-xl text-zinc-400 mb-8">Side control is the workhorse position of BJJ — it&apos;s where most guard passes end up and where most submission setups begin. Mastering side control means mastering the flow of the match.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Side Control Fundamentals</h2>
          <p className="text-zinc-300 mb-4">Side control (yokoshiho gatame in judo) positions you perpendicular to your opponent, controlling their upper body from the side. Unlike mount, your weight is distributed across their chest and shoulder — limiting their frames and movement.</p>
          <p className="text-zinc-300 mb-4">Side control earns three points in IBJJF competition and creates access to multiple submissions. The position is stable for the top player and uncomfortable for the bottom player — especially when weight is correctly applied.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Side Control Grip Variations</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Crossface and Underhook</h3>
          <p className="text-zinc-300 mb-4">The classic side control position: one arm goes across the face (crossface) pressing on the near cheek and jaw, the other arm goes under their arm to control the far shoulder. This creates a strong pin because they can&apos;t turn into you without fighting both the face pressure and the underhook.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Double Underhook (Kesa Gatame)</h3>
          <p className="text-zinc-300 mb-4">Both arms go under the opponent&apos;s arms. This creates a tight pin but limits your submission access. Good for beginners who struggle to maintain control.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Reverse Kesa Gatame</h3>
          <p className="text-zinc-300 mb-4">Facing their legs, with one arm under their head and your other arm controlling the near leg. Opens arm lock attacks from a different angle and transitions to north-south easily.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Side Control to Submissions</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Kimura from Side Control</h3>
          <p className="text-zinc-300 mb-4">When the opponent reaches across their body (grabbing your collar or hip), their far arm is exposed. Step over their head and take the kimura. Drive your weight down on the arm while rotating — this finishes many opponents who don&apos;t see it coming.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Americana from Side Control</h3>
          <p className="text-zinc-300 mb-4">The near arm is often exposed in side control. Pin their wrist to the mat, form the figure-four, and rotate toward their head. The Americana works especially well when they bridge into you.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Armbar from Side Control</h3>
          <p className="text-zinc-300 mb-4">The nearside armbar: pull their near arm across your body, step over their head, and sit back. The far-side armbar: step over their head when they reach their far arm toward you.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Arm Triangle (Side Control)</h3>
          <p className="text-zinc-300 mb-4">Trap their near arm next to their head, lock the arm triangle (your arm behind their neck, head alongside theirs), and transition to north-south or mount to finish. The arm triangle from side control is one of the most reliable submissions at all levels.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">North-South Choke</h3>
          <p className="text-zinc-300 mb-4">Transition to north-south position (facing their legs, head beside their head) and apply the north-south choke — a head-and-arm type choke using your shoulder and arm to compress the neck.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Side Control to Better Positions</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Side Control to Mount</h3>
          <p className="text-zinc-300 mb-4">When they turn away from you or create space with the elbow-knee frame, slide your knee across to mount. The knee slice to mount is one of the most common transitions in BJJ.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Side Control to Back Control</h3>
          <p className="text-zinc-300 mb-4">When they turn away to escape side control, take their back. Insert hooks while maintaining the underhook on their top side — this creates back control naturally from their escape attempt.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Side Control to Knee-on-Belly</h3>
          <p className="text-zinc-300 mb-4">Knee-on-belly creates pressure and additional submission threats while positioning you for a mobile attack game. When opponents frame against knee-on-belly, side control transitions and submissions become available.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Escaping Side Control</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Elbow-Knee Frame</h3>
          <p className="text-zinc-300 mb-4">Create a frame with your inside elbow against their hip and your knee across their hip. This prevents them from lying flat on you and creates space to shrimp and recover guard.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Shrimp to Guard Recovery</h3>
          <p className="text-zinc-300 mb-4">Hip escape (shrimp) toward your head, then use the frame to recover your guard. The most reliable side control escape at all levels — it requires timing and explosiveness, not strength.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Bridge to Return to Guard</h3>
          <p className="text-zinc-300 mb-4">When they establish side control and you&apos;ve lost your frames, a sharp bridge (upa) can disrupt their weight distribution and create space for the shrimp recovery.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Develop Your Side Control Game</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on your side control game — whether you need to maintain better, attack more effectively, or escape more reliably.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Side Control Plan →</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Build dominant top control and submission chains from side control with AIBJJ&apos;s AI coaching.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
