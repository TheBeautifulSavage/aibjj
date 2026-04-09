import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Conditioning: Strength & Endurance for Grapplers | AIBJJ',
  description: 'Complete BJJ conditioning guide — strength training, cardio, energy systems, and periodization for grapplers. Build a body that performs on the mat for the long term.',
}

export default function ConditioningPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Get Started Free</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Conditioning: Strength & Endurance for Grapplers</h1>
        <p className="text-xl text-zinc-400 mb-8">BJJ has a unique physical demand profile — it combines sustained aerobic effort with explosive anaerobic bursts, all while producing and resisting force through complex movement patterns. Proper conditioning for BJJ means training all of these systems intelligently.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-black mb-4">Energy Systems in BJJ</h2>
          <p className="text-zinc-300 mb-4">Understanding energy systems helps you train them properly. BJJ demands all three:</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">ATP-PCr System (Phosphocreatine)</h3>
          <p className="text-zinc-300 mb-4">0-10 seconds of maximal effort. Used during explosive escapes, takedowns, and submission attempts. Trains with: maximal power exercises — kettlebell swings, box jumps, medicine ball throws, sprints.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Glycolytic System (Anaerobic)</h3>
          <p className="text-zinc-300 mb-4">10 seconds to 2 minutes of high-intensity work. Used during hard scrambles, extended positional battles, and competition rounds. Trains with: intervals, hill sprints, circuit training.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Oxidative System (Aerobic)</h3>
          <p className="text-zinc-300 mb-4">Longer duration, moderate intensity. Powers you between explosive bursts and supports recovery. Most practitioners need more aerobic base than they think. Trains with: running, cycling, rowing — 30+ minutes at moderate intensity.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Strength Training for BJJ</h2>
          <p className="text-zinc-300 mb-4">Stronger athletes are harder to submit, harder to sweep, and can generate more force in their own attacks. BJJ-specific strength priorities:</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Primary Movement Patterns</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Hip hinge:</strong> Deadlifts, Romanian deadlifts, kettlebell swings — the primary power generator in BJJ</li>
            <li><strong>Vertical pull:</strong> Pull-ups, chin-ups — critical for guard retention and clinch control</li>
            <li><strong>Horizontal pull:</strong> Rows — back strength for gripping and controlling</li>
            <li><strong>Core anti-rotation:</strong> Pallof press, chops — stability when someone tries to move you</li>
            <li><strong>Squat pattern:</strong> Goblet squats, front squats — leg drive for sweeps and passes</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Grip Strength</h3>
          <p className="text-zinc-300 mb-4">Grip strength is critical in gi BJJ and matters in no-gi. Training: dead hangs, towel pull-ups, plate pinches, rice bucket exercises. Strong grips tire opponents and open attacks.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Neck Strength</h3>
          <p className="text-zinc-300 mb-4">Often neglected but critical for choke defense and injury prevention. Neck bridges, 4-way neck resistance work, and basic neck exercises should be regular training for grapplers.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Cardio for BJJ</h2>
          <p className="text-zinc-300 mb-4">The biggest cardio mistake grapplers make: treating BJJ cardio as only high-intensity work. Building a massive aerobic base makes all your energy systems function better — you recover faster between explosive bursts, stay sharper mentally, and fatigue slower.</p>
          <h3 className="text-xl font-bold mb-2 text-red-400">Aerobic Base Building</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>2-3 sessions per week of 30-45 minute Zone 2 cardio (conversational pace)</li>
            <li>Running, cycling, rowing — whatever you enjoy and will do consistently</li>
            <li>This base work makes your high-intensity performance better</li>
          </ul>
          <h3 className="text-xl font-bold mb-2 text-red-400">Interval Training</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>1-2 sessions per week of higher intensity intervals</li>
            <li>Tabata protocols, 30/30 intervals, or sport-specific drills</li>
            <li>Shadow drilling, takedown repetitions, guard recovery circuits</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Sample Weekly Conditioning Plan</h2>
          <p className="text-zinc-300 mb-4">For someone training BJJ 3-4 times per week:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Monday:</strong> BJJ + strength training (lower emphasis on volume)</li>
            <li><strong>Tuesday:</strong> 30-minute Zone 2 cardio + mobility work</li>
            <li><strong>Wednesday:</strong> BJJ</li>
            <li><strong>Thursday:</strong> Strength training (primary lifting session)</li>
            <li><strong>Friday:</strong> BJJ</li>
            <li><strong>Saturday:</strong> BJJ or intervals + Zone 2 combo</li>
            <li><strong>Sunday:</strong> Rest or light mobility</li>
          </ul>
          <p className="text-zinc-300">Adjust based on your recovery. If you&apos;re consistently sore and fatigued, reduce the conditioning work. More training is not better when you&apos;re not recovering.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Flexibility and Mobility for Grapplers</h2>
          <p className="text-zinc-300 mb-4">Flexibility in BJJ isn&apos;t just about guard positions — it&apos;s about injury prevention and movement quality. Key areas to develop:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Hip flexors: sitting in guard and breaking posture</li>
            <li>External hip rotation: guard positions and leg locks</li>
            <li>Thoracic spine: guard breaks and guard passing</li>
            <li>Shoulders: submission defense and clinch work</li>
          </ul>
          <p className="text-zinc-300 mb-4">Yoga twice per week is genuinely one of the best supplemental practices for BJJ — it builds flexibility, body awareness, and breath control simultaneously.</p>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-4">Nutrition and Recovery</h2>
          <p className="text-zinc-300 mb-4">No conditioning program works without adequate nutrition and recovery:</p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li><strong>Protein:</strong> 0.7-1g per pound of bodyweight for muscle maintenance and repair</li>
            <li><strong>Carbohydrates:</strong> BJJ is high-intensity work — carbs fuel performance</li>
            <li><strong>Sleep:</strong> 7-9 hours; this is when adaptation actually occurs</li>
            <li><strong>Hydration:</strong> Even mild dehydration significantly reduces performance</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-2xl font-black mb-3">Get a Custom BJJ Conditioning Plan</h2>
          <p className="text-zinc-300 mb-4">Try AIBJJ&apos;s AI Coach to get personalized advice on your BJJ conditioning. Tell the AI your current training schedule, fitness level, and goals — it builds a complete supplemental training plan.</p>
          <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Get Your Conditioning Plan →</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-black mb-4">Ready to level up your BJJ?</h2>
        <p className="text-zinc-400 mb-6">Build a body that performs at the highest level with AIBJJ&apos;s complete conditioning guidance.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Join AIBJJ Free</Link>
      </section>

      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-zinc-500 text-sm">
        <Link href="/">AIBJJ</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
