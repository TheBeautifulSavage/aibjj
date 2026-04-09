import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Home Training: Solo Drills & Conditioning | AIBJJ',
  description: 'BJJ home training guide. Solo drilling routines, conditioning workouts, equipment recommendations, and how to maintain your BJJ game between academy sessions.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Home Training: Solo Drills &amp; Conditioning</h1>
        <p className="text-xl text-zinc-400 mb-8">The mat time you get at your academy isn't enough on its own. BJJ home training — solo drills, conditioning, and mobility work — gives you a competitive edge that students who only train in class never develop.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>Why Home Training Matters</h2>
        <p>Most BJJ practitioners train 3-5 hours per week at their academy. Elite grapplers often spend additional hours at home on conditioning, drilling, and flexibility work. This volume gap is a significant factor in the progress differential between students who improve quickly and those who plateau. You don't need expensive equipment or a training partner to benefit from home training — you need consistency and intention.</p>

        <h2>Essential Solo Drills</h2>
        <h3>Fundamental Movement Drills</h3>
        <p>These are the core BJJ movements that develop the motor patterns everything else is built on:</p>
        <ul>
          <li><strong>Hip escape (shrimping)</strong> — The single most important BJJ movement. Drill forward and backward shrimping for quality of movement, not speed. Your hips should create maximum hip extension with each rep.</li>
          <li><strong>Backward hip escape</strong> — Shrimping in reverse, building the defensive hip movement used in guard retention.</li>
          <li><strong>Bridge and roll</strong> — The upa mount escape movement pattern. Bridge explosively and roll to your side. Develop this against gravity so it's explosive against a partner.</li>
          <li><strong>Technical standup</strong> — From seated guard, one hand down, one knee up, technical step to standing. The safe, efficient way to get to your feet in BJJ contexts.</li>
          <li><strong>Forward/backward rolls</strong> — Essential for inversions, guard recovery, and general body awareness. Drill until rolling is completely natural and comfortable.</li>
          <li><strong>Granby roll</strong> — A side roll used for guard recovery and leg lock defense. Requires practice but becomes automatic with drilling.</li>
          <li><strong>Sit-out</strong> — Wrestling-based movement from the turtle position. Important for escaping turtle and transitioning to offense.</li>
        </ul>

        <h3>Guard Movement Drills</h3>
        <ul>
          <li><strong>Butterfly sweep motion</strong> — The elevation and rotation movement pattern for butterfly guard sweeps, drilled alone against air.</li>
          <li><strong>Hip bump motion</strong> — Sitting up, loading to a hip, the rotational drive of the hip bump sweep.</li>
          <li><strong>Single leg X entry motion</strong> — The hip insertion movement for single leg X-guard entry.</li>
          <li><strong>Inversion practice</strong> — Controlled inversion to upside-down and back, building comfort in inverted positions.</li>
        </ul>

        <h2>Solo Conditioning for BJJ</h2>
        <p>BJJ demands a mix of aerobic base, anaerobic burst capacity, and muscular endurance. Here's how to develop each at home:</p>

        <h3>Aerobic Base</h3>
        <p>Running, cycling, swimming, or jump rope for 20-40 minutes at moderate intensity (conversational pace) 2-3 times per week builds the aerobic foundation that lets you recover between rounds and maintain technique late in sessions. Simple, unsexy, highly effective. Distance runners make notoriously good grapplers — the aerobic base transfers directly.</p>

        <h3>Anaerobic Conditioning (Grappling-Specific)</h3>
        <p>BJJ rounds are high-intensity intervals. Train similarly: 5-minute sprint-rest intervals, circuit training, or sport-specific conditioning drills. Examples:</p>
        <ul>
          <li>5 rounds of: 30 seconds explosive shrimping + 30 seconds explosive bridging + 10 sprawls — rest 60 seconds</li>
          <li>Burpee to sprawl combinations — builds the hip extension and level change movement that appears in BJJ scrambles</li>
          <li>Explosive hip escape for 20 reps, rest 40 seconds — 5 sets. This directly develops the explosiveness needed to escape mount under a heavy training partner</li>
        </ul>

        <h3>Strength Work</h3>
        <p>BJJ-relevant strength prioritizes: grip strength, hip hinge strength (for guard passing and takedowns), pushing and pulling strength (frame maintenance and clinch work), and core stability. Key home exercises:</p>
        <ul>
          <li>Pull-ups and rows — develops the pulling strength used in clinch and guard retention</li>
          <li>Push-ups and dips — pressing strength for frames in side control and guard passing</li>
          <li>Deadlifts and kettlebell swings — hip hinge power for takedowns and guard passing</li>
          <li>Farmer carries — grip and mental toughness</li>
          <li>Plank variations — core stability used throughout BJJ</li>
        </ul>

        <h2>Home Training Equipment</h2>
        <p>You don't need much, but some equipment helps:</p>
        <ul>
          <li><strong>Wrestling mat or gymnastics mat</strong> — $150-400 for a basic setup. Essential for safe drilling and rolling at home.</li>
          <li><strong>Grappling dummy</strong> — $200-400. Allows you to drill techniques with a "partner" for certain techniques (guard passes, top positions). Limited but useful.</li>
          <li><strong>Pull-up bar</strong> — $30-50. Enables the most important BJJ strength exercise at minimal cost.</li>
          <li><strong>Kettlebell</strong> — $50-100. Versatile tool for BJJ-specific conditioning (swings, carries, presses).</li>
          <li><strong>Resistance bands</strong> — $20-40. Rotator cuff work, band pull-aparts, and resistance drilling.</li>
        </ul>

        <h2>Building a Home Training Routine</h2>
        <p>A realistic home BJJ training routine for someone training at an academy 3x per week:</p>
        <ul>
          <li><strong>Daily (15 min)</strong> — Solo movement drills: shrimping, bridging, technical standup</li>
          <li><strong>3x per week (20-30 min)</strong> — Conditioning: aerobic or anaerobic circuit depending on academy training day</li>
          <li><strong>2-3x per week (15 min)</strong> — Mobility work: hip flexors, shoulders, thoracic spine</li>
        </ul>
        <p>Log your home training sessions in AIBJJ alongside your academy sessions to see your total training volume and identify whether your home work is correlating with improvement in rolling.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Log All Your Training in AIBJJ →</Link>
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
