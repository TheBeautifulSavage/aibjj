import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Warm Up Routine: 10 Exercises Before Every Class | AIBJJ',
  description: 'The best BJJ warm up routine — 10 essential exercises to prepare your body for training. Prevent injuries, improve movement quality, and maximize every class.',
}

export default function WarmUpPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Warm Up Routine: 10 Exercises Before Every Class</h1>
        <p className="text-xl text-zinc-400 mb-8">A proper BJJ warm-up prepares your joints, activates your muscles, and gets your mind focused on training. Skip it and you risk injury; do it right and every technique feels smoother from the first rep.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Why Warming Up Matters in BJJ</h2>
          <p className="text-zinc-300 mb-4">BJJ places unique demands on the body — complex movements, sudden direction changes, joint stress from submissions, and sustained positional battles. Cold muscles and unprepared joints respond to this stress with injury. A 10-15 minute warm-up dramatically reduces this risk.</p>
          <p className="text-zinc-300 mb-4">Beyond injury prevention, warming up improves movement quality. Techniques that feel stiff and mechanical on cold muscles flow naturally once the body is prepared. You learn more when your body is ready to move.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">The 10-Exercise BJJ Warm-Up Routine</h2>
          <p className="text-zinc-300 mb-4">Complete this circuit before every training session. Total time: 10-15 minutes.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">1. Hip Escapes (Shrimping)</h3>
          <p className="text-zinc-300 mb-4">The fundamental BJJ movement. Lie on your back, shrimp your hips side to side across the mat. 2-3 lengths. This activates hip flexors and replicates the exact movement you&apos;ll use in guard work, escapes, and transitions.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">2. Backwards Shrimping</h3>
          <p className="text-zinc-300 mb-4">Reverse hip escape — move backward across the mat on your side. Less common in class but equally important for guard retention and scramble movements.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">3. Bridge and Roll</h3>
          <p className="text-zinc-300 mb-4">From your back, feet flat, bridge your hips up explosively and roll to the side. 10 reps each side. Warms up the core, glutes, and the movement pattern for mount escape.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">4. Forward Rolls</h3>
          <p className="text-zinc-300 mb-4">Proper forward rolls across the mat — not somersaults, but over one shoulder in a diagonal. Learn to roll safely and use the movement to warm up the shoulders and spine.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">5. Backward Rolls</h3>
          <p className="text-zinc-300 mb-4">Roll backward over one shoulder, not straight back. This warms up the neck and upper back while training safe falling habits.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">6. Hip Circles</h3>
          <p className="text-zinc-300 mb-4">Standing, hands on hips, rotate the hips in large circles — 10 each direction. Opens the hip flexors and external rotators that are central to every guard position.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">7. Quadruped Hip Rotations</h3>
          <p className="text-zinc-300 mb-4">On hands and knees, rotate one leg in large circles (fire hydrant motion). 10 each leg, each direction. This directly warms up the hip mobility used in guard and passing.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">8. Neck Rolls and Bridges</h3>
          <p className="text-zinc-300 mb-4">Slow neck rolls in each direction, then wrestler&apos;s bridges (neck bridges on the mat). The neck is highly stressed in grappling — warming it up is critical for injury prevention.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">9. Arm Circles and Shoulder Warm-Up</h3>
          <p className="text-zinc-300 mb-4">Large arm circles forward and backward, 10 each direction. Follow with band pull-aparts or resistance band external rotations if available. Shoulders take massive stress in submission defense.</p>

          <h3 className="text-xl font-bold mb-2 text-red-400">10. Pummeling (Partner) or Shadow Drilling (Solo)</h3>
          <p className="text-zinc-300 mb-4">End the warm-up with BJJ-specific movement. Partner: 2 minutes of underhook pummeling. Solo: shadow drill your primary guard position transitions. This bridges the gap between generic warm-up and technique-specific activation.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Injury-Specific Warm-Up Add-Ons</h2>
          <p className="text-zinc-300 mb-4">If you have chronic injury areas, add targeted warm-up before training:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Knee issues:</strong> Wall sits, terminal knee extensions, VMO activation</li>
            <li><strong>Shoulder issues:</strong> Band external rotation, face pulls, shoulder CARs</li>
            <li><strong>Lower back:</strong> Cat-cow, bird dog, dead bug</li>
            <li><strong>Hip flexors:</strong> Couch stretch, hip flexor lunges, deep squat holds</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Post-Training Cool-Down</h2>
          <p className="text-zinc-300 mb-4">The cool-down is as important as the warm-up. After training, 5-10 minutes of static stretching improves recovery and flexibility:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Hip flexor stretch (couch stretch) — 60 seconds each side</li>
            <li>Seated figure-four hip stretch — 60 seconds each side</li>
            <li>Supine spinal twist — 30 seconds each side</li>
            <li>Doorway chest stretch or band shoulder stretch</li>
            <li>Child&apos;s pose for lower back</li>
          </ul>
          <p className="text-zinc-300">Static stretching after training (when the muscles are warm) is when you make real flexibility gains. Don&apos;t skip it.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Optimize Your Training with AI Coaching</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on your warm-up routine and overall training structure. Tell the AI your injury history and training goals for a customized preparation protocol.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Training Protocol →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Why Class Warm-Ups Aren&apos;t Always Enough</h2>
          <p className="text-zinc-300 mb-4">Your academy&apos;s class warm-up is designed for the general class, not for your specific needs. If you have chronic injuries, are returning from a layoff, or train first thing in the morning, a personal warm-up before class starts is worthwhile.</p>
          <p className="text-zinc-300">Arrive 10 minutes early. Do your personal warm-up. Then do the class warm-up. Your body will be significantly better prepared than your classmates, and your technique will show it from the first drill.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Train smarter with AIBJJ&apos;s personalized coaching — from warm-up to competition prep.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
