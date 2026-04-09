import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Weight Cutting: Safe Strategies for Competition | AIBJJ",
  description: "Learn safe BJJ weight cutting methods for competition. Understand water weight, rehydration protocols, and how to compete strong after making weight.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Weight Cutting: Safe Strategies for Competition",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Weight Cutting: Safe Strategies for Competition</h1>
        <p className="mt-4 text-xl text-zinc-400">Weight cutting is a reality of competitive BJJ, but doing it wrong leaves you weak, slow, and mentally foggy on the mat. Smart competitors cut only what's safe and recover fully before fighting.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Understanding Water Weight vs. Fat Loss</h2>
            <p>A true weight cut refers to temporary water weight reduction, not fat loss. Fat takes weeks to lose; water can be shed in 24-48 hours through diet manipulation, sweat, and reduced water intake. Most competitive BJJ athletes can safely cut 3-5% of body weight in water without significant performance reduction if they rehydrate properly after weigh-ins. Cutting more than 7-8% is dangerous and almost always counterproductive — the performance loss from severe dehydration outweighs any size advantage gained by competing in a lower division. Before attempting any cut, establish your natural competition weight: train hard for four weeks, eat clean, and see where your body settles. That's your natural weight class. If you're trying to cut more than 5kg, you're in the wrong division.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Seven-Day Weight Cut Protocol</h2>
            <p>Start reducing carbohydrates and sodium five to seven days out. Carbs hold glycogen in muscle (each gram of glycogen binds 3-4 grams of water), so reducing carbs to 50-100g/day drops water weight rapidly. Eliminate processed foods, which are sodium-heavy. Two to three days out, taper water intake from your normal level down gradually — do not go to zero. Day before weigh-ins, a light sweat session in warm clothing can drop 0.5-1.5kg. Immediately after weighing in, begin rehydration with electrolyte drinks, followed by a carbohydrate-rich meal 2-3 hours before competition. Aim to rehydrate 100% of lost water weight before stepping on the mat.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Cut carbs gradually starting 5-7 days out</li><li>Never cut more than 7% body weight in water</li><li>Rehydrate with electrolytes, not plain water, after weigh-ins</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competing Strong After the Cut</h2>
            <p>The goal of any weight cut strategy is to be 100% physically ready when competition begins. After weigh-ins, prioritize electrolyte replacement over raw volume — sodium, potassium, and magnesium restore cellular function. Eat a mixed meal of protein and carbohydrates 2-3 hours before your first match. Avoid high-fat or high-fiber foods that slow digestion. A banana, rice, and lean protein is a classic pre-competition meal. Sleep is non-negotiable — even a 90-minute nap after weigh-ins if time permits accelerates recovery. Many athletes underestimate the mental toll of cutting; the anxiety of making weight compounds fatigue. Staying calm, hydrated through the week, and avoiding last-minute panic cuts protects both your body and your mental state.</p>
          </section>
        </div>
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-3">Related Techniques</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/bjj-armbar" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Armbar</Link>
            <Link href="/bjj-triangle-choke" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Triangle</Link>
            <Link href="/bjj-guard-passing" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Guard Passing</Link>
            <Link href="/bjj-techniques" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1 text-red-400 hover:text-red-300">All Techniques →</Link>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master This Technique with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences and real-time feedback.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
