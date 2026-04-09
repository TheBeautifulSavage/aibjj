import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Weight Cutting: Should You & How to Do It Safely | AIBJJ',
  description: 'Complete guide to BJJ weight cutting. Should you cut weight for competition? Learn the risks, proper methods, water cuts, and when to stay at natural weight.',
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
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Weight Cutting: Should You &amp; How to Do It Safely</h1>
        <p className="text-xl text-zinc-400 mb-8">Weight cutting is common in BJJ competition — but it's also frequently misunderstood, overdone, and dangerous. This guide gives you the full picture on whether to cut weight and how to do it without harming your performance.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>The Reality of Weight Cutting in BJJ</h2>
        <p>Weight cutting — the practice of rapidly reducing body weight before competition to compete in a lower weight class — is common in BJJ but controversial. The argument for it: competing at a lower weight class gives you a size advantage when you rehydrate after weigh-ins. The argument against: aggressive cutting compromises performance, increases injury risk, and can be dangerous. The reality: small, strategic weight management can be useful; large cuts typically hurt more than they help.</p>
        <p>The most important question isn't "how do I cut weight?" — it's "should I cut weight at all?" For most recreational and amateur competitors, the answer is no. For serious competitors competing at high levels where everyone cuts, strategic weight management may be appropriate.</p>

        <h2>Understanding Weight Classes in BJJ</h2>
        <p>IBJJF weight classes for males (adult): Rooster (-57.5kg/127lbs), Light Feather (-64kg/141lbs), Feather (-70kg/154lbs), Light (-76kg/168lbs), Middle (-82.3kg/181lbs), Medium Heavy (-88.3kg/195lbs), Heavy (-94.3kg/208lbs), Super Heavy (-100.5kg/222lbs), Ultra Heavy (100.5kg+/222lbs+).</p>
        <p>The weight classes create natural competitive groups. The goal of "cutting" is to be bigger than your competition within the same class — but everyone else is doing the same math, which often makes the advantage smaller than expected.</p>

        <h2>Types of Weight Reduction</h2>
        <h3>Gradual Weight Loss (Recommended)</h3>
        <p>Losing body fat over weeks and months before competition through diet and training. This is the safest and most performance-preserving approach. At your competition weight, your strength, endurance, and mental performance are at full capacity because you've given your body time to adapt. The downside: it requires long-term planning and discipline, not a quick fix.</p>
        <p>Target: 1-2 lbs per week maximum to preserve muscle. Achieve competition weight 2-3 weeks out, not the night before.</p>

        <h3>Water Cut (Last-Resort Tool)</h3>
        <p>A water cut involves temporarily reducing water and sodium intake to drop scale weight in the final 24-48 hours before weigh-ins, then rehydrating fully before competing. Small water cuts (1-3% of body weight) are relatively safe if rehydration is complete. Large water cuts (5%+ of body weight) significantly compromise performance — reducing strength, reaction time, and cardiovascular output — and carry health risks including heat illness, kidney stress, and in extreme cases, cardiac events.</p>
        <p>Water cutting is only appropriate if: you're already close to the weight class naturally, you have time to rehydrate (at least 12-18 hours), and you've practiced the protocol before your important competition. Never attempt your first water cut at a major event.</p>

        <h2>How to Water Cut Safely</h2>
        <p>If you decide a modest water cut is appropriate:</p>
        <ol>
          <li><strong>Start 5-7 days out</strong> — Reduce sodium intake gradually. High-sodium foods cause water retention; reducing sodium triggers natural water loss.</li>
          <li><strong>Reduce carbohydrates 3 days out</strong> — Glycogen storage holds water. Reducing carbs slightly reduces water weight. Maintain protein intake to preserve muscle.</li>
          <li><strong>Light exercise in sweats 24 hours out</strong> — Low-intensity movement in a sauna suit can reduce an additional 1-2 lbs. Never use a sauna for extended sessions or extreme cuts.</li>
          <li><strong>Rehydrate intelligently</strong> — After weigh-ins, consume water with electrolytes (sodium, potassium, magnesium), not just plain water. Eat carbohydrate-rich foods to restore glycogen. Allow 12+ hours for full rehydration before competing.</li>
        </ol>

        <h2>When Cutting Weight Hurts Your Performance</h2>
        <p>Signs your weight cut is too aggressive:</p>
        <ul>
          <li>Feeling weak, slow, or mentally foggy during warm-up</li>
          <li>Cramping during competition</li>
          <li>Feeling thirsty and depleted hours after rehydrating</li>
          <li>Your technique feels off — decision-making slows under pressure</li>
          <li>Heart rate spikes faster than normal during rolling</li>
        </ul>
        <p>If you're experiencing these symptoms, your cut is too large and is costing you performance. Competing at a slightly higher weight class at full capacity will produce better results than competing at a lower weight class impaired.</p>

        <h2>The Case Against Cutting</h2>
        <p>Many elite BJJ practitioners deliberately compete at their natural training weight. Gordon Ryan has spoken extensively about the advantages of competing at natural weight — full muscle glycogen, full strength, full cognitive function. Buchecha built a 13-time world championship career often competing at his natural training weight. The size advantage of cutting can be negated entirely by the performance cost.</p>

        <h2>Competition Nutrition Planning</h2>
        <p>Regardless of weight cutting decisions, smart pre-competition nutrition matters. Eat a carbohydrate-rich meal 3-4 hours before competing for energy. Have a smaller snack 1-2 hours before if nerves allow. Stay hydrated throughout the competition day. AIBJJ's training journal can help you log your competition nutrition and note how different approaches affected your energy and performance.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Log Your Competition Preparation with AIBJJ →</Link>
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
