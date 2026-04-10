import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Mount Position: Control, Attacks & How to Escape | AIBJJ',
  description: 'Master the BJJ mount position — high mount, S-mount, attacks from mount, and mount escapes. Complete guide to controlling and submitting from mount.',
}

export default function MountPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Mount Position: Control, Attacks & How to Escape</h1>
        <p className="text-xl text-zinc-400 mb-8">Mount is one of the most dominant positions in BJJ — four points in competition, and a launching pad for some of the sport's most reliable submissions. Mastering both the offensive and defensive side of mount is essential at every level.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Why Mount Is So Valuable</h2>
          <p className="text-zinc-300 mb-4">Mount places you directly on top of your opponent's torso. In a self-defense context, you can strike without restriction. In competition, mount earns four points — the highest single-position score — and creates submission opportunities from multiple angles.</p>
          <p className="text-zinc-300 mb-4">The person on the bottom has limited movement options, limited visibility, and limited options for offense. The person on top can see everything, use gravity and body weight, and attack at will. This positional asymmetry is what makes mount so dominant.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Mount Positions</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Low Mount</h3>
          <p className="text-zinc-300 mb-4">Low mount sits on the opponent's hips or stomach. It's easier to maintain but provides fewer submission options. Experienced opponents can often use the upa escape from here.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">High Mount</h3>
          <p className="text-zinc-300 mb-4">High mount positions your knees at or above their shoulders. This dramatically limits their ability to upa (bridge escape) and creates excellent armbar and choke access. Walk your knees up whenever possible.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">S-Mount</h3>
          <p className="text-zinc-300 mb-4">S-mount positions one knee at the shoulder level and the other foot posted outside their hip — creating an "S" shape. This is the ideal position for armbars and creates a natural entry to triangle or mounted triangle.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Maintaining Mount: The Key Details</h2>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Hooks:</strong> Keep your toes hooked under their thighs (grapevines) to resist the upa</li>
            <li><strong>Base:</strong> Wide base prevents rolls; narrow base allows knee-walking higher</li>
            <li><strong>Weight distribution:</strong> Keep weight on your hips, not your hands</li>
            <li><strong>Anticipate escapes:</strong> When they upa, post a hand; when they elbow-knee escape, switch to technical mount or follow</li>
            <li><strong>Technical mount:</strong> Sit to the side with one foot hooked when they try to turn into you</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Submissions from Mount</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Armbar from Mount</h3>
          <p className="text-zinc-300 mb-4">The mounted armbar is a high-percentage submission. From S-mount or high mount, control the wrist, swing your leg over the face while maintaining weight pressure, and extend the arm for the finish. Roger Gracie finished multiple world championship matches with this technique.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Ezekiel Choke (Gi)</h3>
          <p className="text-zinc-300 mb-4">The Ezekiel choke uses a sleeve grip to choke from mount — thread your hand through your own sleeve and press the forearm against the throat. Unique because you can finish it even from a bad mount position.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Americana from Mount</h3>
          <p className="text-zinc-300 mb-4">When opponents defend their neck by grabbing your collar or creating frames, their arms become vulnerable. The Americana (keylock) pins their wrist and rotates the elbow — effective from low and high mount.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Triangle from Mount</h3>
          <p className="text-zinc-300 mb-4">When they reach up to push you off, take the triangle from mount. Swing your leg over their arm and lock the triangle — the mounted position gives you leverage to complete the setup faster than from guard.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Arm Triangle (Kata Gatame)</h3>
          <p className="text-zinc-300 mb-4">The arm triangle choke pins one arm against the neck and uses your shoulder to complete the choke on the other side. Available when they frame with the near arm — simply pin it next to their head and lock the arm triangle.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Mount Escapes</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">Upa (Bridge and Roll)</h3>
          <p className="text-zinc-300 mb-4">The upa is the fundamental mount escape. Trap one arm and the opposite leg, bridge explosively, and roll them over. It requires catching them off-balance — most effective from low mount when they're not posting correctly. Against high mount, the upa is much harder.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Elbow-Knee Escape (Shrimping)</h3>
          <p className="text-zinc-300 mb-4">The elbow-knee escape (also called the shrimp escape or hip escape) creates space under the opponent. Shrimp away while pushing their knee with your elbow, creating enough space to insert your knee guard and recover half guard or closed guard.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Frame first: hands on their hips to prevent them riding higher</li>
            <li>Shrimp: hip escape toward the target side</li>
            <li>Insert the knee: knee goes in front of their hip</li>
            <li>Recover guard: pull them into half guard or closed guard</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Combining Both Escapes</h3>
          <p className="text-zinc-300 mb-4">Advanced mount escapes chain both — upa attempt forces them to post, creating space for the elbow-knee escape. The combination makes both more effective.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Improve Your Mount Game</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on mount control and attacks. Whether you struggle to maintain mount or want to add submissions, the AI coach builds your curriculum.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Mount Training Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Getting to Mount</h2>
          <p className="text-zinc-300 mb-4">The best mount is one that comes naturally from your passing game or from transitions. Common mount entries:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>From knee-on-belly: when they push your knee, slip to mount</li>
            <li>From side control: knee slide to mount when they turn away</li>
            <li>When they give their back from mount escape: follow them and take technical mount</li>
            <li>After a guard pass: don't stop at side control — progress to mount</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Develop dominant mount control and submissions with AIBJJ's AI coaching system.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
