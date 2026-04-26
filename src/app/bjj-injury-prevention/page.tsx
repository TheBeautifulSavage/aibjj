import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Injury Prevention: Train for the Long Term | AIBJJ',
  description: 'BJJ injury prevention guide. Protect your neck, back, knees, and shoulders with proven warm-up routines, training practices, and recovery strategies.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Injury Prevention: Train for the Long Term</h1>
        <p className="text-xl text-zinc-400 mb-8">The most important factor in long-term BJJ progress is staying on the mat. Injuries are the biggest threat to consistency. This complete guide covers how to train hard while minimizing the injuries that derail progress.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Reality of BJJ Injuries</h2>
        <p>BJJ has a real injury rate. Research suggests that between 30-50% of regular BJJ practitioners experience a training injury in any given year, with knee injuries, shoulder injuries, and neck strains being most common. Most of these injuries are preventable or at least reducible in severity with good training habits.</p>
        <p>The goal isn't zero contact risk — BJJ is a combat sport, and some injury risk is inherent. The goal is maximizing your training longevity by eliminating unnecessary risk: the injuries from ego, from bad warm-up habits, from training through early warning signs, and from training with partners who don't respect safety.</p>

        <h2>Most Common BJJ Injuries and Prevention</h2>
        <h3>Knee Injuries</h3>
        <p>Knee injuries are the most common serious BJJ injury. The most frequent: MCL sprains from guard passing, ACL tears from scrambles and takedowns, and meniscus damage from torsional forces in leg lock positions.</p>
        <p><strong>Prevention:</strong> Develop good knee awareness in rolling — know when your knee is in a vulnerable position and tap early. Strengthen the muscles around your knee (quads, hamstrings, glutes) to reduce ligament loading. Learn leg lock safety protocols — tap before you feel pain in heel hook situations. Avoid rolling with partners whose submission control is unpredictable.</p>

        <h3>Shoulder Injuries</h3>
        <p>Shoulder injuries are extremely common, particularly rotator cuff strains and labrum issues from kimura and shoulder lock positions. The shoulder is one of the most mobile joints in the body — and that mobility makes it vulnerable.</p>
        <p><strong>Prevention:</strong> Tap early from shoulder lock positions (kimura, americana, shoulder crunch). Rotate your body toward a kimura rather than resisting it — the shoulder can't win against the lever created by a kimura grip. Strengthen rotator cuff muscles with band exercises. Don't put your arm out straight when bridging — it creates dangerous lever opportunities for the top person.</p>

        <h3>Neck and Cervical Spine</h3>
        <p>Neck injuries are common from triangle defenses, guillotine attempts, and turtle position pressure. Cervical disc issues develop gradually from years of neck loading without adequate recovery and strengthening.</p>
        <p><strong>Prevention:</strong> Build neck strength proactively with neck bridges, wrestler's bridges, and resistance exercises. Tap from triangles and guillotines before attempting to power-out (which creates extreme neck torsion risk). Learn to carry posture with proper spinal alignment during all grappling positions.</p>

        <h3>Elbow and Wrist</h3>
        <p>Elbow hyperextensions from armbars and wrist sprains from posting are common. Elbow hyperextensions from armbars are almost entirely preventable: tap before you straighten your arm all the way. The damage in armbars doesn't come from being in the position — it comes from resisting when the submission is deep.</p>

        <h3>Rib Injuries</h3>
        <p>Rib bruises and occasional fractures from pressure passing and knee-on-belly are among the most training-disruptive injuries because rest is the only real treatment. Prevention involves good positional defense (not letting passes complete) and partnering with people who understand force modulation.</p>

        <h2>Warm-Up Best Practices</h2>
        <p>A proper BJJ warm-up prepares the joints and muscles for the specific demands of grappling. Key components:</p>
        <ul>
          <li><strong>General cardiovascular warm-up</strong> — 5 minutes of light movement to raise core temperature and blood flow</li>
          <li><strong>Joint mobility</strong> — Neck circles, shoulder rotations, hip circles, knee circles (not cracks — controlled mobility)</li>
          <li><strong>Dynamic stretching</strong> — Leg swings, hip flexor movements, torso rotations. Avoid static stretching before training — it can reduce power output and proprioception</li>
          <li><strong>Grappling-specific movements</strong> — Shrimping, bridging, technical standups, pummeling — movements you'll actually use in rolling</li>
          <li><strong>Progressive intensity</strong> — Start slow and build intensity over 10-15 minutes before full-intensity drilling or rolling</li>
        </ul>

        <h2>Training Intensity Management</h2>
        <p>One of the biggest injury risk factors: going too hard too often. Rolling at 100% intensity against every partner every session is unsustainable. Develop a training rhythm that includes: high-intensity rolls against skilled partners (3-4 per session max), technical rolls at 50-60% intensity where you focus on technique over outcome, and flow rolling at low intensity for positional exploration and warm-down.</p>
        <p>Not every roll needs to be a war. Ego-driven 100% intensity rolling is the primary cause of unnecessary injuries in BJJ training.</p>

        <h2>Partnering Safely</h2>
        <p>Your injury risk is significantly affected by who you roll with. Identify partners who: communicate about intensity, apply submissions with controlled pressure rather than cranks, respect taps immediately, and don't ego-spaz when you're threatening a submission. Avoid or set clear expectations with partners who have unpredictable energy, can't modulate force, or don't have submission control. Your body, your choice.</p>
        <p>Use AIBJJ's training journal to track which training sessions left you feeling beat up versus energized — over time you'll identify patterns about training conditions, partners, or intensity levels that correlate with injury risk.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Training Health with AIBJJ →</Link>

        <h2>When to Train Through vs. Take Rest</h2>
        <p>Soreness is normal and trainable through. Sharp pain, swelling, reduced range of motion, or pain that persists more than 72 hours signals something that needs rest or medical attention. Training through acute injuries is the fastest way to turn minor injuries into major ones. A week off early is far better than two months off later.</p>
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
