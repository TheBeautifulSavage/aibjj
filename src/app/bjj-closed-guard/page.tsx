import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Closed Guard BJJ: Attacks, Sweeps & Submissions | AIBJJ',
  description: 'Complete closed guard BJJ guide covering attacks, sweeps, submissions, and posture control. Master the armbar, triangle, kimura, and sweeps from closed guard.',
}

export default function ClosedGuardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Closed Guard BJJ: Attacks, Sweeps & Submissions</h1>
        <p className="text-xl text-zinc-400 mb-8">The closed guard is where BJJ was built. Every practitioner — from white belt to black belt world champion — must have a functional closed guard. It's not a beginner position. It's a lifelong study.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">What Makes Closed Guard So Effective</h2>
          <p className="text-zinc-300 mb-4">When your legs are locked around your opponent's waist, you've created a positional constraint that limits their base, their posture, and their ability to generate power. You're on your back, and yet you control the fight.</p>
          <p className="text-zinc-300 mb-4">This is why Royce Gracie dominated the early UFCs. His closed guard was a trap — once inside it, his opponents had no frame of reference for how to escape. Most martial artists had never been there before.</p>
          <p className="text-zinc-300">Today's closed guard is more sophisticated. The threat surface has expanded dramatically: armbars, triangles, omoplatas, kimuras, cross collars, sweeps in every direction. Understanding the full attack tree is what separates good closed guard players from elite ones.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The First Priority: Breaking Posture</h2>
          <p className="text-zinc-300 mb-4">Everything in closed guard starts with posture control. An opponent with a straight back, head up, and elbows in is almost impossible to submit. Your first job is always to compromise their posture.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Posture Breaking Methods</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Double collar grip — pull down while crunching with your hips</li>
            <li>Overhook one arm + collar grip on the same side</li>
            <li>Cross-sleeve grip to prevent their posting arm</li>
            <li>Hip bump (thrusting your hips up) to force them to post their hands</li>
            <li>Head pull with your legs while pulling the collar</li>
          </ul>
          <p className="text-zinc-300">Once posture is broken, attacks become available. The mistake beginners make is trying to attack without breaking posture first — this leads to telegraphed attempts that get defended easily.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Core Submissions from Closed Guard</h2>

          <h3 className="text-xl font-bold mb-2 text-red-400">Armbar from Closed Guard</h3>
          <p className="text-zinc-300 mb-4">The classic armbar from closed guard begins with breaking posture, securing a cross grip on the sleeve, and swinging your leg over the head while rotating your hips perpendicular. The key details: keep your knees pinched, hips elevated, and pull the arm thumb-up. This is the first submission most BJJ students learn, but it takes years to finish against a resisting opponent.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Triangle Choke</h3>
          <p className="text-zinc-300 mb-4">The triangle is one of the highest-percentage submissions in all of combat sports. From closed guard, you need to create a frame that pins one arm inside and one arm outside, then swing your leg over and lock your knee behind your other knee. Angle your body 90 degrees to the choking side and squeeze. The triangle works as a blood choke on the carotid arteries.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Kimura from Closed Guard</h3>
          <p className="text-zinc-300 mb-4">The kimura from closed guard typically starts from the hip bump sweep attempt. When they post their arm, you secure the figure-four grip (your hand on their wrist, your other arm behind their arm grabbing your own wrist) and finish the shoulder lock. The kimura from guard is also used as a sweep — you can sweep if they resist the lock.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Omoplata</h3>
          <p className="text-zinc-300 mb-4">The omoplata is a shoulder lock using your leg as the lever. Typically set up off a triangle attempt that gets defended, you swing your leg over and sit up to lock the position. The omoplata can be a sweep, a submission, or a back-take — it's one of the most versatile attacks in the guard.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Cross Collar Choke</h3>
          <p className="text-zinc-300 mb-4">The gi-specific cross collar choke (also called the cross choke) is one of the most reliable submissions in all of BJJ. Deep grips on both collars, elbows turning outward — it's a pure blood choke that works even against experienced players who know it's coming. The double lapel grip variation (pistol grip) adds an extra dimension of control.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Sweeps from Closed Guard</h2>

          <h3 className="text-xl font-bold mb-2 text-red-400">Hip Bump Sweep</h3>
          <p className="text-zinc-300 mb-4">The hip bump sweep is the gateway sweep. Sit up toward the opponent while underhooking their arm, then drive your hips forward to off-balance them. If they post their arm, take the kimura. If they don't, you come on top. This sweep teaches the fundamental sit-up motion used in dozens of other techniques.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Scissor Sweep</h3>
          <p className="text-zinc-300 mb-4">The scissor sweep requires the opponent to be leaning forward. You use a cross grip on the collar and sleeve, place one knee on their chest, and scissor your legs to take them over. The scissor sweep is essential in gi training and teaches the connection between grips and leg motion.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Flower Sweep (Pendulum)</h3>
          <p className="text-zinc-300 mb-4">When your opponent leans back in closed guard, the flower sweep (pendulum sweep) becomes available. Use your arm to grab their same-side ankle, then swing your leg like a pendulum to drive them over. Timing is critical — this sweep requires catching them when their weight shifts backward.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">Elevator Sweep</h3>
          <p className="text-zinc-300 mb-4">The elevator sweep (or push sweep) uses a collar grip and a hooking leg under the hip to off-balance and roll the opponent. It's particularly effective when combined with posture-breaking grips.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Closed Guard from the Top: How to Pass</h2>
          <p className="text-zinc-300 mb-4">Understanding how to pass closed guard makes you a better guard player. When you know what passes are threatening, you know how to shut them down. The main passing concepts:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Standing passes: stand up to break the guard, then pass around the legs</li>
            <li>Elbow-knee pass: pin the hips while driving the knee through</li>
            <li>Toreando: grip the pants and swing the legs aside</li>
            <li>Posture maintenance: elbows in, head up, base wide</li>
          </ul>
          <p className="text-zinc-300">The person on the bottom wants you leaning forward. Stay upright, protect your arms, and look to stand up to break the closed guard open.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Closed Guard for No-Gi</h2>
          <p className="text-zinc-300 mb-4">Closed guard in no-gi requires adaptation. Without gi grips, posture control becomes harder. The main adjustments:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Use neck ties (two-on-one, Muay Thai clinch) instead of collar grips</li>
            <li>Wrist control replaces sleeve grips</li>
            <li>Triangles and armbars work identically</li>
            <li>Kimuras are even more dangerous in no-gi because there's nothing to post</li>
            <li>Guillotines are more accessible from closed guard in no-gi</li>
          </ul>
          <p className="text-zinc-300">Many no-gi specialists still use closed guard as their primary bottom game. Gordon Ryan, arguably the greatest no-gi grappler ever, uses closed guard as part of his system.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Personalize Your Closed Guard Game</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on which closed guard attacks suit your build and game. Whether you're developing your first sweeps or refining competition-level submissions, the AI coach gives you a targeted curriculum.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Closed Guard Plan →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The Combination Game: Linking Attacks</h2>
          <p className="text-zinc-300 mb-4">The highest level of closed guard is not any single technique — it's the combination game. Each attack creates a reaction, and that reaction feeds the next attack. Classic combinations:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>Hip bump → kimura → sweep or submission</li>
            <li>Triangle attempt → armbar when they stack</li>
            <li>Cross collar → omoplata when they pull the arm out</li>
            <li>Scissor sweep → triangle when they try to counter</li>
            <li>Armbar → triangle when they pull their arm out</li>
          </ul>
          <p className="text-zinc-300 mt-4">Your closed guard becomes a web of threats. Your opponent can't defend all of them simultaneously. The practitioner who chains attacks most fluidly wins the bottom game.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Build a world-class closed guard with AIBJJ's AI coaching system. Track your progress, identify gaps, and drill with purpose.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
