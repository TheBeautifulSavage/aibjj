import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Recovery: How to Train More & Get Hurt Less | AIBJJ',
  description: 'BJJ recovery strategies that actually work. Sleep, mobility work, nutrition timing, cold therapy, and how to structure your training week for maximum recovery.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Recovery: How to Train More & Get Hurt Less</h1>
        <p className="text-xl text-zinc-400 mb-8">The best BJJ athletes train consistently for years without breaking down. Recovery is what makes that possible. This guide covers every practical recovery tool — from sleep to mobility work to cold therapy.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>Recovery Is Training</h2>
        <p>Most BJJ athletes think about training as the work and recovery as the absence of work. This framing is wrong. Recovery is when the adaptation from training actually happens. You don't get stronger on the mat — you get stronger while sleeping. You don't improve your cardiovascular fitness during rounds — you improve it during the 48 hours after. Training creates the stimulus; recovery creates the adaptation. Neglect recovery, and you're spending training effort that never converts to improvement.</p>

        <h2>Sleep: The Foundation</h2>
        <p>Sleep is the single most powerful recovery tool available — and it's free. During deep sleep (slow-wave sleep), your body releases growth hormone, repairs muscle tissue, and consolidates motor learning (including the BJJ techniques you drilled that day). Research consistently shows that 7-9 hours of sleep per night produces superior athletic performance and recovery compared to less.</p>
        <p>Practical sleep optimization for BJJ athletes:</p>
        <ul>
          <li>Consistent sleep and wake times (even on weekends) — your circadian rhythm rewards regularity</li>
          <li>Dark, cool room — 65-68°F (18-20°C) is optimal for deep sleep</li>
          <li>No screens 30-60 minutes before bed — blue light suppresses melatonin production</li>
          <li>Avoid training sessions within 2-3 hours of bedtime if possible — intense exercise raises cortisol and core body temperature</li>
          <li>Magnesium glycinate (200-400mg) before bed improves sleep quality for most athletes</li>
        </ul>

        <h2>Nutrition for Recovery</h2>
        <p>Post-training nutrition directly impacts how quickly you recover for the next session. Key principles:</p>
        <ul>
          <li><strong>Protein within 60 minutes post-training</strong> — 30-40g protein starts muscle repair. A protein shake immediately post-training is convenient and effective.</li>
          <li><strong>Carbohydrate replenishment</strong> — Restore glycogen with 50-80g carbohydrates post-training. This fuels the next session and reduces training-induced muscle breakdown.</li>
          <li><strong>Anti-inflammatory foods</strong> — Tart cherry juice (contains melatonin and anti-inflammatory compounds), fatty fish, turmeric, and berries support systemic inflammation management after hard training.</li>
          <li><strong>Total caloric intake</strong> — Recovery is compromised when you're in a significant caloric deficit. If you're training hard and feeling constantly sore or fatigued, increase overall food intake before assuming a recovery problem.</li>
        </ul>

        <h2>Active Recovery</h2>
        <p>Low-intensity movement on rest days promotes blood flow, reduces soreness, and maintains flexibility without adding training stress. Effective active recovery for BJJ athletes:</p>
        <ul>
          <li><strong>Walking</strong> — 20-30 minutes of easy walking increases blood flow to sore muscles without adding recovery burden</li>
          <li><strong>Yoga or light stretching</strong> — Improves mobility and mental relaxation. Yin yoga (passive, long-hold stretching) is particularly well-suited for BJJ athletes</li>
          <li><strong>Swimming</strong> — Excellent active recovery — low impact, promotes blood flow, develops breathing control</li>
          <li><strong>Light drilling</strong> — Solo movement drills or technical rolls at 30-40% intensity with a trusted partner can maintain skill while allowing physical recovery</li>
        </ul>

        <h2>Cold and Heat Therapy</h2>
        <h3>Ice and Cold Water</h3>
        <p>Cold water immersion (10-15°C) for 10-15 minutes post-training reduces inflammation markers, decreases delayed-onset muscle soreness (DOMS), and speeds perceived recovery. Cold showers are a convenient alternative — the last 2-3 minutes of your shower at the coldest temperature you can tolerate provides meaningful cold exposure. Some elite athletes use contrast showers (alternating hot/cold) for additional circulation benefits.</p>

        <h3>Heat Therapy</h3>
        <p>Sauna use (15-20 minutes at 170-190°F) 24+ hours after training (not immediately after) supports heat shock protein production, cardiovascular conditioning, and mental recovery. Research on sauna use by Finnish athletes shows significant recovery benefits for those who sauna regularly. Regular sauna use also has longevity benefits independent of athletic recovery.</p>

        <h2>Mobility Work</h2>
        <p>Consistent mobility work — beyond just stretching — improves your functional range of motion in the positions BJJ puts you in. Hip mobility, shoulder external rotation, thoracic spine mobility, and ankle dorsiflexion are the most commonly restricted areas in BJJ athletes and the most impactful to improve. Daily 10-15 minute mobility sessions (or dedicated 30-minute sessions 3x per week) produce noticeable improvement within weeks.</p>
        <p>Yoga is an excellent structured mobility practice for BJJ athletes — many top practitioners including Gordon Ryan have spoken about yoga's contribution to their longevity and performance. Specific resources: Tom DeBlass's "Yoga for BJJ" and the broader "Yoga for BJJ" platform are designed specifically for grapplers.</p>

        <h2>Training Load Management</h2>
        <p>Periodize your training — don't train at maximum intensity 7 days per week. A sustainable BJJ training week might look like: 2-3 hard rolling days, 1-2 technical or drilling-focused days, and 2-3 rest or active recovery days. This rhythm allows the adaptation process to complete between sessions and prevents the cumulative fatigue that leads to overtraining and injury.</p>
        <p>Track your training load and recovery quality in AIBJJ's journal — noting when you feel recovered and energized versus flat and tired creates a data set that helps you identify your optimal training frequency and intensity pattern.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your Recovery with AIBJJ →</Link>

        <h2>Deload Weeks</h2>
        <p>Every 4-6 weeks of hard training, consider a deload week: reduce training volume by 40-50%, lower intensity, and focus on technical work over hard rolling. Deload weeks feel unnecessarily easy — that's the point. They allow accumulated fatigue to dissipate and prevent overtraining. Most athletes who deload consistently report feeling stronger and sharper the week after. Don't skip them when you're feeling tired — that's exactly when you need them most.</p>
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
