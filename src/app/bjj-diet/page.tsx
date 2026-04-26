import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Diet: Nutrition for Grapplers | AIBJJ',
  description: 'Complete BJJ diet guide for grapplers. What to eat before training, post-workout nutrition, weight management, and meal planning for BJJ athletes.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
<section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">BJJ Diet: Nutrition for Grapplers</h1>
        <p className="text-xl text-zinc-400 mb-8">What you eat directly affects how you train, recover, and perform on the mat. This complete nutrition guide for BJJ athletes covers macros, meal timing, pre/post-training nutrition, and how to fuel your grappling lifestyle.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block">Start Training Smarter →</Link>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 prose prose-invert prose-zinc max-w-none">
        <h2>Nutrition Fundamentals for BJJ Athletes</h2>
        <p>BJJ is an intermittent high-intensity sport — rounds of intense effort separated by brief rest. The energy demands are primarily anaerobic (glycolytic), meaning your body burns carbohydrates for fuel during intense rolling. This has direct implications for how you should eat: carbohydrates are your primary performance fuel, protein supports muscle repair, and fat provides baseline energy and hormonal health.</p>
        <p>The biggest nutrition mistake BJJ athletes make: under-fueling. Trying to lose weight while training hard creates a performance and recovery deficit that ultimately sabotages both goals. Fuel your training adequately, then manage body composition through a modest caloric deficit during rest days and lower-intensity training blocks.</p>

        <h2>Macronutrient Guidelines for BJJ</h2>
        <h3>Protein</h3>
        <p>Protein is critical for muscle repair and adaptation. BJJ athletes doing 3-5 sessions per week should target approximately 0.7-1.0 grams of protein per pound of body weight daily. Sources: lean meats (chicken, turkey, beef), fish, eggs, Greek yogurt, cottage cheese, legumes, and protein supplements if needed to reach targets.</p>
        <p>Spread protein intake across 3-4 meals rather than loading it into one meal — the body can only absorb approximately 30-40 grams per meal for muscle protein synthesis purposes. Protein timing matters less than total daily intake, but having protein within 2 hours of training is beneficial.</p>

        <h3>Carbohydrates</h3>
        <p>Carbohydrates fuel high-intensity grappling. Don't be afraid of carbs — a BJJ athlete training 4+ sessions per week needs substantial carbohydrate intake to maintain glycogen stores. Target 1.5-2.5 grams per pound of bodyweight on training days, slightly less on rest days. Quality sources: rice, potatoes, sweet potatoes, oats, fruits, vegetables, and whole grain products.</p>
        <p>Time your largest carbohydrate meals around training — before for energy, after for recovery. Reducing carbs on rest days can assist body composition goals without impacting training performance.</p>

        <h3>Fats</h3>
        <p>Healthy fats support hormone production (including testosterone and growth hormone), reduce inflammation (critical for recovery in a high-volume training sport), and provide sustained energy. Target approximately 0.3-0.5 grams per pound of bodyweight daily. Sources: avocado, olive oil, nuts, fatty fish (salmon, mackerel), and eggs.</p>
        <p>Omega-3 fatty acids (from fatty fish or fish oil supplements) are particularly beneficial for BJJ athletes due to their anti-inflammatory properties. Many grapplers supplement with 2-4g of fish oil daily for joint and recovery support.</p>

        <h2>Pre-Training Nutrition</h2>
        <p>What you eat before training significantly impacts your energy, focus, and performance on the mat.</p>
        <ul>
          <li><strong>3-4 hours before</strong> — Full meal: lean protein, complex carbohydrates, minimal fat and fiber (fat and fiber slow digestion, which can cause discomfort during rolling). Example: rice and chicken, pasta with lean protein.</li>
          <li><strong>1-2 hours before</strong> — Smaller snack: easily digestible carbs with minimal protein. Example: banana and protein shake, toast with peanut butter.</li>
          <li><strong>30 minutes before</strong> — Keep it minimal: fruit, sports drink, or nothing. Eating a full meal 30 minutes before training will make you feel sick during hard rolling.</li>
        </ul>

        <h2>Post-Training Nutrition</h2>
        <p>The 30-60 minutes after training is the optimal window for recovery nutrition. Your muscles are primed to absorb protein for repair and carbohydrates for glycogen replenishment. A post-training meal or shake with 30-40g protein and 50-80g carbohydrates is ideal. Examples: protein shake with banana and oats, chicken and rice, Greek yogurt with granola and fruit.</p>
        <p>If you train late at night, you may need to manage this around sleep. A lighter post-workout snack (protein shake, cottage cheese) that doesn't significantly interfere with sleep quality is better than no post-workout nutrition at all.</p>

        <h2>Hydration</h2>
        <p>Grappling induces significant sweat loss. Even mild dehydration (2% of body weight) measurably reduces strength, endurance, and cognitive function — all of which matter in BJJ. Aim for 0.5-1 oz of water per pound of body weight daily, increasing on training days and in hot environments. Clear to light yellow urine is the best practical hydration indicator.</p>
        <p>Electrolytes matter — especially sodium, potassium, and magnesium. If you train multiple times per day or in heat, electrolyte supplementation (or simply salting your food adequately) prevents cramping and supports performance. Coconut water is a natural electrolyte source popular among grapplers.</p>

        <h2>Weight Management for BJJ Athletes</h2>
        <p>If body composition is a goal, the most effective approach: create a modest caloric deficit (200-300 calories below maintenance) on rest days while eating at maintenance or slight surplus on hard training days. This "carb cycling" approach preserves training performance while gradually reducing body fat. Avoid drastic restriction — losing more than 1-2 pounds per week will cost you muscle and training quality.</p>

        <h2>Supplements Worth Considering</h2>
        <ul>
          <li><strong>Creatine monohydrate</strong> — The most research-supported performance supplement. 3-5g daily supports strength and power in high-intensity efforts. Inexpensive, safe, effective.</li>
          <li><strong>Fish oil</strong> — Omega-3 fatty acids for inflammation management and joint health. 2-4g daily.</li>
          <li><strong>Vitamin D</strong> — Most grapplers are deficient, particularly if training indoors. 2000-4000 IU daily supports immune function and recovery.</li>
          <li><strong>Magnesium</strong> — Supports sleep quality and muscle recovery. 200-400mg of magnesium glycinate or malate before sleep.</li>
          <li><strong>Protein powder</strong> — Not magic, just food. Useful for meeting protein targets conveniently, especially post-training.</li>
        </ul>
        <p>Track your nutrition patterns and how they affect your energy and recovery in AIBJJ's training journal — building a personal data set about what fuels your best BJJ performance.</p>
        <Link href="/auth/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block not-prose">Track Your BJJ Performance with AIBJJ →</Link>
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
