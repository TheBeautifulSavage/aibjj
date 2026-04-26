import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Back Control: Taking the Back & Finishing | AIBJJ',
  description: 'Master BJJ back control — how to take the back, maintain hooks, finish with rear naked choke and bow-and-arrow, and defend back control from the bottom.',
}

export default function BackControlPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Back Control: Taking the Back & Finishing</h1>
        <p className="text-xl text-zinc-400 mb-8">Back control is the highest-value position in BJJ — four points in competition, immediate submission threat, and no ability for the bottom person to see or counter your attacks. Developing a complete back control game changes your entire BJJ.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Back Control Mechanics</h2>
          <p className="text-zinc-300 mb-4">Back control requires two hooks (heels inside the thighs) and a seatbelt grip (one arm over shoulder, one under armpit, hands clasped). This combination pins their body against yours while your legs prevent them from sitting out or rolling away.</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Never lie flat on your back — stay on the seatbelt-arm side</li>
            <li>Hooks inside the thighs (not on the calves or outside)</li>
            <li>Seatbelt tight against their chest — no space between you</li>
            <li>Control their hips with your hooks; control their upper body with the seatbelt</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Taking the Back: Primary Entries</h2>
          <h3 className="text-xl font-bold mb-2 text-red-400">From Turtle Position</h3>
          <p className="text-zinc-300 mb-4">The turtle is the most common back take entry. Approach from the side, insert one hook, establish seatbelt, then insert the second hook. Never cross the opponent's centerline before establishing seatbelt — they'll roll you over.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">From Guard (Back Take)</h3>
          <p className="text-zinc-300 mb-4">Half guard underhook back takes, DLR back takes, and K-guard back takes all lead to back control. The back take from guard often happens faster than the opponent can react.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">From Mount Escape</h3>
          <p className="text-zinc-300 mb-4">When opponents turn to escape mount, follow them and take the back. This is why mount is so powerful — both maintaining it and transitioning from it leads to back control.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">From Wrestling</h3>
          <p className="text-zinc-300 mb-4">Snap-downs, head-and-arm throws, and double-leg defense all create back control opportunities from standing. BJJ practitioners who add wrestling often find the back more accessible than through guard work.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Rear Naked Choke from Back Control</h2>
          <p className="text-zinc-300 mb-4">The RNC is the primary back control submission. See the detailed guide on <Link href="/bjj-rear-naked-choke" className="text-red-400 hover:text-red-300">rear naked choke mechanics</Link>. The key points:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Take the choking arm under their chin (palm facing up)</li>
            <li>Elbow at throat centerline, grab your own bicep</li>
            <li>Hand on back of head pushes forward while you squeeze</li>
            <li>Be patient with chin tuck — create a gap before shooting</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Bow and Arrow Choke (Gi)</h2>
          <p className="text-zinc-300 mb-4">The bow and arrow choke is the most powerful gi choke from back control. Grip the collar deep with the top hand (choking hand); reach down and grab the pants at the knee with the other hand. Pull the collar back while extending the pants grip — the choke is devastating and finishes quickly.</p>
          <p className="text-zinc-300 mb-4">The bow and arrow works because you use your entire body as a lever — it's not just arm strength. Even a small practitioner can finish much larger opponents with this choke.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Maintaining Back Control</h2>
          <p className="text-zinc-300 mb-4">The back escapes are predictable — they roll toward the top hook (the seatbelt arm side). Your job is to stay on the seatbelt side and prevent this roll. When they roll:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Follow their roll to stay on the seatbelt side</li>
            <li>If one hook comes out, fight to reinsert it</li>
            <li>If they succeed in rolling to your bottom hook side, transition to mount or side control</li>
            <li>Never let them get to their knees — follow them immediately</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Back Control Escapes</h2>
          <p className="text-zinc-300 mb-4">The primary escape from back control is rolling toward the choking arm (top/seatbelt arm) to neutralize the choke and come on top. Detailed escape mechanics:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Grip the choking arm with both hands to protect the neck</li>
            <li>Roll toward the seatbelt side (the hook-heavy arm side)</li>
            <li>As you roll, try to push one hook out — make them lose position</li>
            <li>Come to top or scramble to neutral — never give the back voluntarily</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Build Your Back Control Game</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ's AI Coach to get personalized advice on taking the back and finishing from back control. The AI coach builds a complete back attack system for your game.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Start Building Your Back Game →</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Develop elite back control with AIBJJ's personalized AI coaching system.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
