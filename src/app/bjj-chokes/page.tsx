import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Chokes: Every Choke You Need to Know | AIBJJ',
  description: 'Complete guide to BJJ chokes. Rear naked choke, triangle, guillotine, arm triangle, D\'arce, anaconda and more. Learn setup, mechanics, and finishes.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Chokes: Every Choke You Need to Know</h1>
        <p className="text-xl text-zinc-400 mb-8">Chokes are the most reliable submissions in BJJ — they work regardless of size, strength, or flexibility. This complete guide covers every major choke, from the fundamental rear naked to advanced gi-specific strangles.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>Blood Chokes vs. Air Chokes</h2>
        <p>Understanding this distinction is foundational. A <strong>blood choke</strong> compresses the carotid arteries, reducing blood flow to the brain and causing unconsciousness in seconds. These are comfortable (relatively) and work quickly. A <strong>air choke</strong> compresses the trachea, restricting breathing. These are uncomfortable, painful, and work slowly — opponents can resist air chokes for longer. In training and competition, blood chokes are preferred because they're faster, more reliable, and less traumatic to the throat.</p>
        <p>Most BJJ chokes are blood chokes. When you hear "it's not tight enough to work," the issue is usually that you're compressing air rather than blood — your arm isn't positioned on the arteries.</p>

        <h2>Rear Naked Choke</h2>
        <p>The foundational choke and arguably the most used submission in all of grappling. From back mount, your choking arm goes under the chin and across the throat, while the other arm connects behind the head (palm-to-bicep or hand-to-shoulder). You then "curl" the choking arm into the throat while your back arm pushes the head forward. The finish should feel like you're tightening a seat belt around the neck.</p>
        <p>Key detail: the choking elbow must be on the centerline of the opponent's neck, not on the shoulder. Shoulder pressure is an air choke; center neck pressure targets the carotid arteries.</p>
        <p>Marcelo Garcia's rear naked choke mechanics are widely considered the gold standard — his ability to finish the RNC from multiple positions and transitions makes his instruction worth studying carefully.</p>

        <h2>Triangle Choke</h2>
        <p>The triangle is a guard-based choke where your legs form a figure-four around the opponent's neck and one arm, compressing the carotid arteries. From closed guard: you angle off to the side, throw one leg over the opponent's neck and shoulder, and lock your opposite leg behind your attacking knee. The opponent's trapped arm is pushed across their own neck, assisting the choke.</p>
        <p>Common mistakes: insufficient angle (you must be at approximately 90 degrees off the opponent's centerline), insufficient squeeze, and forgetting to push the trapped arm across for maximum pressure. The triangle is highly versatile — it can be set up from guard, mount, and back positions.</p>

        <h2>Guillotine Choke</h2>
        <p>The guillotine is an arm-around-the-neck choke applied from the front. There are multiple guillotine variations: the "high elbow" guillotine (most effective), the arm-in guillotine, and the 10-finger guillotine. The high elbow variation requires placing the crook of your elbow directly on the opponent's windpipe (or slightly behind the jaw for a blood choke effect) and connecting your hands above the neck.</p>
        <p>Guillotines can be finished standing, from guard, from front headlock position, and from sprawl scenarios. Marcelo Garcia's high elbow guillotine system is exceptional — he set the gold standard for this choke with his ability to finish it from almost every entry scenario.</p>

        <h2>D'Arce Choke (Brabo Choke)</h2>
        <p>The D'arce is an arm-in choke applied from top positions, particularly from top half guard, side control, and against the turtle. You thread your arm underneath the opponent's arm and around their neck, then connect your arms in a figure-four grip or behind their head. The mechanics compress the carotid arteries using a combination of arm and body pressure. The D'arce is particularly effective against opponents who turtle, making it a valuable tool for BJJ's top game.</p>

        <h2>Anaconda Choke</h2>
        <p>Structurally similar to the D'arce but applied from the other side (your arm goes over the opponent's far arm, under their neck). The anaconda generates powerful compression and often transitions to a rolling finish. It's particularly effective against the turtle position and frequently sets up back takes when the opponent defends it.</p>

        <h2>Arm Triangle (Head and Arm Choke / Kata Gatame)</h2>
        <p>The arm triangle uses the opponent's own arm to assist the choke. From mount or side control, you trap one of the opponent's arms against their neck, place your arm across their neck on the other side, and connect the two with a figure-four or head-to-shoulder connection. You then walk your hips away from the trapped arm to increase pressure. The arm triangle is particularly reliable from mount against opponents who push against it — their own pushing increases the choke.</p>

        <h2>Gi-Specific Chokes</h2>
        <h3>Bow and Arrow Choke</h3>
        <p>One of the highest-percentage chokes in gi BJJ, applied from back mount. You grip the collar with a deep grip across the neck, and the lapel or belt with the other hand, then pull the collar and extend your leg against the opponent's back. The bow and arrow is both extremely powerful and difficult to escape once properly applied.</p>

        <h3>Baseball Bat Choke</h3>
        <p>Applied from top turtle, side control, or north-south. You insert both thumbs into the collar with a "bat grip" configuration and rotate the hands to create bilateral carotid compression. The baseball bat can be finished from multiple positions and is particularly surprising when applied from seemingly innocuous positions.</p>

        <h3>Loop Choke</h3>
        <p>A collar-based choke applied during guard passing or scramble situations. You create a loop with the collar lapel that wraps around the opponent's neck as they move or posture up. Loop chokes are timing-dependent but extremely effective when opponents make predictable posturing movements.</p>

        <h2>Connecting Chokes to Your Game</h2>
        <p>The most effective choke game is one where your choke threats feed each other. Triangle threatens the arm that enables guillotine; guillotine threatens the posturing that enables the triangle. From the back, RNC threats set up arm bar entries. Build these connections in your game — they make individual choke attempts far more effective because the opponent must defend multiple threats simultaneously.</p>
        <p>Log your choke work in AIBJJ's training journal to track which submissions are connecting in rolling versus which you're studying but not finishing. This feedback loop helps you identify technique gaps and drilling priorities.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Submission Game in AIBJJ →</Link>
      </section>
      <section className="bg-zinc-900 border-t border-zinc-800 px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Take your BJJ to the next level</h2>
        <p className="text-zinc-400 mb-8">AI coach, training journal, technique library — all in one platform.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free →</Link>
      </section>
      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        © 2025 AIBJJ · <Link href="/terms" className="hover:text-zinc-300">Terms</Link> · <Link href="/privacy" className="hover:text-zinc-300">Privacy</Link>
      </footer>
    </div>
  )
}
