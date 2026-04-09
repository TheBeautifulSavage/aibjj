import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Armbar: How to Hit the Armbar from Every Position | AIBJJ',
  description: 'Master the BJJ armbar from guard, mount, back control, and standing. Complete guide to setups, mechanics, defenses, and competition armbar finishes.',
}

export default function ArmbarPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Armbar: How to Hit the Armbar from Every Position</h1>
        <p className="text-xl text-zinc-400 mb-8">The armbar is one of the most fundamental and devastating submissions in BJJ. Available from virtually every position, the straight armbar hyperextends the elbow joint — a clean, mechanical submission that has ended countless matches from white belt to world championship finals.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Armbar Mechanics: Why It Works</h2>
          <p className="text-zinc-300 mb-4">The armbar (juji-gatame in judo) isolates the elbow joint and applies force against its natural range of motion. The elbow is a hinge joint — it bends one way and locks out. The armbar extends the joint past its natural limit, compressing the elbow joint and potentially hyperextending the ligaments.</p>
          <p className="text-zinc-300 mb-4">Proper armbar mechanics require three things: arm isolation, hip positioning, and lever application. Get all three right and the opponent has no choice but to tap.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>The arm must be isolated — both legs control one arm</li>
            <li>Hips must be elevated into the elbow crease, not below it</li>
            <li>Pull the arm thumb-up to align the elbow joint properly</li>
            <li>Knees pinched — don&apos;t let them pull the arm free</li>
            <li>Extend the hips slowly and consistently for a controlled finish</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Armbar from Closed Guard</h2>
          <p className="text-zinc-300 mb-4">The guard armbar is the most common entry for beginners and remains effective at all levels when set up correctly. The challenge is the movement required — you need to swing your leg over their head while they&apos;re resisting.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Setup and Execution</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Break their posture with a collar grip, pull their head down</li>
            <li>Secure a cross-grip on the target wrist (cross-sleeve grip)</li>
            <li>Place your foot on their same-side hip to create the angle</li>
            <li>Swing the far leg over their head (don&apos;t cross your ankles)</li>
            <li>Pinch your knees, elevate your hips, and pull the arm straight</li>
          </ul>
          <p className="text-zinc-300">The most common failure: swinging the leg before controlling the arm. If you don&apos;t have the arm, swinging the leg just opens your guard for a pass.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Armbar from Mount</h2>
          <p className="text-zinc-300 mb-4">The mount armbar is one of the highest-percentage submissions in combat sports. From high mount, the geometry is already in your favor.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">S-Mount Entry</h3>
          <p className="text-zinc-300 mb-4">The S-mount is the most reliable mount armbar setup. From high mount, slide one knee up near their shoulder on the target arm side, rotating to the &quot;S&quot; position. This isolates the arm naturally and creates the angle to swing your leg over.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>From high mount, control the wrist of the target arm</li>
            <li>Post your far foot near their hip for balance</li>
            <li>Rotate into S-mount — knee at their shoulder, body perpendicular</li>
            <li>Swing the far leg over the face while controlling the arm</li>
            <li>Finish with hips elevated and knees tight</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Armbar from Side Control</h2>
          <p className="text-zinc-300 mb-4">Side control armbars require transitional movement since you aren&apos;t surrounding the arm with your legs yet. The most common is the nearside armbar:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>From side control, isolate the near arm by pulling it across your body</li>
            <li>Step over their head while controlling the wrist</li>
            <li>Sit back and extend the arm for the finish</li>
          </ul>
          <p className="text-zinc-300 mb-4">The far-side armbar (kimura to armbar transition) is also powerful from side control — the far arm is already exposed when they reach across.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Armbar from Back Control</h2>
          <p className="text-zinc-300 mb-4">When an opponent defends the rear naked choke by crossing their arms, the back armbar becomes available. Control one arm, extend over their shoulder, and apply pressure to the elbow. This requires turning your body perpendicular to theirs while maintaining back control hooks.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Standing Armbar (Juji from Clinch)</h2>
          <p className="text-zinc-300 mb-4">The standing armbar is more common in judo and MMA but exists in BJJ competition. From a clinch, you control the wrist and turn under the arm while stepping in front, creating the lever position. This can be finished standing or used to take the opponent down into the armbar on the ground.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Defending the Armbar</h2>
          <p className="text-zinc-300 mb-4">Knowing how to defend the armbar makes your offense better — you know what your opponents will try. Primary defenses:</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Stack Defense</h3>
          <p className="text-zinc-300 mb-4">From guard armbar: stand up and stack them on their shoulders, bending them double. This takes the pressure off your elbow. From here, try to free the arm by rotating it.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Hitchhiker Escape</h3>
          <p className="text-zinc-300 mb-4">When the armbar is locked up, rotate your body in the direction of their legs (like a hitchhiking motion) to relieve pressure on the elbow while working to free the arm.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Early Prevention</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Never leave an arm isolated or extended</li>
            <li>When in guard, keep your elbows in and posture up</li>
            <li>In mount, protect your arms by keeping them close to your body</li>
            <li>When they swing their leg over, tuck your head and posture to disrupt the angle</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Common Armbar Mistakes</h2>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Crossing the ankles — reduces your control and allows them to pull the arm free</li>
            <li>Hips too low — puts pressure on the wrist instead of the elbow</li>
            <li>Not controlling the thumb-up position — the arm rotated wrong makes the elbow harder to finish</li>
            <li>Rushing the finish instead of securing first</li>
            <li>Letting go of the arm when they stack — hold on and adjust</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Perfect Your Armbar Technique</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on your armbar game. Identify which position your armbars are weakest from and get targeted drills to fix them.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Armbar Curriculum →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Armbar in Competition</h2>
          <p className="text-zinc-300 mb-4">The armbar is consistently one of the most common submissions in BJJ competition at all levels. It&apos;s allowed in all divisions including kids and beginners (though finishing pressure should be controlled). In the IBJJF, the armbar is legal from white belt onward.</p>
          <p className="text-zinc-300">Notable armbar specialists include Roger Gracie, who finished many matches with armbar from mount, and Ronda Rousey, who brought mainstream attention to the arm lock in MMA. At the highest level, a well-timed armbar from an unexpected position — like transition armbars during scrambles — is the signature of an elite practitioner.</p>
          <Link href="/bjj-competition" className="text-red-400 hover:text-red-300 font-semibold">→ Complete BJJ competition guide</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Build a complete submission game with AIBJJ&apos;s AI coaching system. Track your progress and drill with purpose.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
