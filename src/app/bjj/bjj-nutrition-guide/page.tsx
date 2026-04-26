import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "BJJ Nutrition Guide: Fuel Your Performance | AIBJJ",
  description: "Complete BJJ nutrition guide covering macronutrients, hydration, meal timing, and supplements for optimal grappling performance and recovery.",
};

export default function Page() {
  const tags = ["nutrition", "diet", "performance"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Nutrition Guide: Fuel Your Performance</h1>
        <p className="mt-4 text-xl text-zinc-400">Complete BJJ nutrition guide covering macronutrients, hydration, meal timing, and supplements for optimal grappling performance and recovery.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Macronutrient Balance for Grapplers</h2>
            <p>Brazilian Jiu-Jitsu demands a balanced macronutrient approach tailored to your training intensity and body composition goals. Protein is essential, targeting 1.6-2.2 grams per kilogram of body weight daily to support muscle repair and recovery after intense rolling sessions. Carbohydrates fuel your anaerobic efforts during sparring, so prioritize complex carbs like oats, brown rice, and sweet potatoes around training. Healthy fats support hormone production and joint health, crucial for injury prevention in grappling. A general starting point is 40% carbs, 30% protein, and 30% fats, though individual needs vary based on training volume, body type, and goals. Monitor your performance and energy levels, adjusting ratios accordingly. Consistency matters more than perfection, so develop sustainable eating habits that support your training schedule.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Pre and Post-Training Meal Timing</h2>
            <p>Timing your nutrition around training sessions significantly impacts performance and recovery. Consume a balanced meal 2-3 hours before rolling, combining complex carbs and lean protein while limiting fiber and fat to avoid digestive discomfort. If training soon, a smaller snack 30-60 minutes prior works well: a banana with almond butter or Greek yogurt with berries. Post-training nutrition is critical for recovery. Within 30 minutes of finishing, consume a meal containing both protein and carbohydrates to replenish glycogen stores and initiate muscle repair. A protein shake with fruit, chicken with rice, or eggs with toast are excellent options. Hydrate consistently throughout this window. Evening training requires careful planning to avoid eating too close to bedtime while still supporting recovery. Experiment with timing to find what leaves you energized without causing performance issues.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Hydration and Electrolyte Management</h2>
            <p>Proper hydration is non-negotiable for BJJ athletes. Dehydration impairs cognitive function, reduces strength, and increases injury risk—all critical concerns on the mat. Aim to drink half your body weight in ounces of water daily as a baseline, increasing intake on training days. Begin hydration 2-3 hours before training with 16-20 ounces of water, then drink 4-8 ounces every 15-20 minutes during rolling. Post-training, drink 16-24 ounces for every pound of body weight lost during training. Beyond water, electrolytes matter, especially during intense sessions exceeding 90 minutes. Sodium, potassium, and magnesium support muscle function and prevent cramping. Include electrolyte drinks, coconut water, or salt your meals appropriately. Monitor urine color—pale yellow indicates good hydration, while dark yellow suggests you need more fluids. Individual sweat rates vary, so adjust based on your experience and environmental conditions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Supplements and Recovery Optimization</h2>
            <p>While whole foods should form your nutrition foundation, strategic supplementation can enhance BJJ performance and recovery. Creatine monohydrate is well-researched and effective for strength and power output, with 3-5 grams daily providing benefits. Protein powder offers convenience for meeting daily targets, especially post-training. Beta-alanine may help with high-intensity efforts, though results vary individually. Omega-3 fish oil supports joint health and inflammation management, important for grappling athletes. Magnesium aids muscle recovery and sleep quality, often deficient in athletes. Vitamin D supports immune function and bone health, particularly relevant if training indoors. Collagen supplements may benefit joint resilience in high-impact sports. Always prioritize sleep, stress management, and consistency over supplements. Choose quality brands, verify third-party testing, and consult healthcare providers before starting new supplements. Remember, supplements enhance an already solid nutrition and training foundation—they're not replacements for proper eating habits and recovery practices.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Track your training, get personalized coaching, and build your game plan.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
            <Link href="/bjj-techniques" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Technique Library</Link>
            <Link href="/coach" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">AI Coach</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
