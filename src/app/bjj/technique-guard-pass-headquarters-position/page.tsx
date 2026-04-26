import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Guard Pass from Headquarters Position | AIBJJ",
  description: "Master the headquarters guard pass in BJJ. Learn setup, execution, and strategic applications for dominating your opponent's guard.",
};

export default function Page() {
  const tags = ["guard pass", "headquarters position", "BJJ technique", "positional control"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Guard Pass from Headquarters Position</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the headquarters guard pass in BJJ. Learn setup, execution, and strategic applications for dominating your opponent's guard.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Guard Pass?</h2>
            <p>The headquarters guard pass is a fundamental positional technique where you control your opponent's legs while maintaining a dominant upper body position. From the headquarters position, you're positioned perpendicular to your opponent's body with your weight distributed across their legs and hips. This pass is effective against closed guard, open guard, and half guard variations. The name 'headquarters' comes from your central control point being at the opponent's midsection and legs. This pass emphasizes pressure, weight distribution, and hip control rather than speed alone. It's a foundational technique that teaches proper posture and leverage principles essential for all guard passing. Once established, headquarters position offers multiple submission and positional advancement options, making it a staple in both gi and no-gi Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by establishing a strong base with your legs spread wide. Break your opponent's closed guard by framing on their thighs or hips and extending your posture. Position yourself perpendicular to their body, roughly at a 45-degree angle. Your shoulders should be over their legs, creating a stable upper body position. Keep your hips low and drive them toward their midsection, establishing pressure through your torso. Control their legs by wrapping your arms around their thighs or securing underhooks. Distribute your weight evenly—not all pressure on one leg. Maintain your head and shoulders in a neutral position, avoiding the temptation to lean too far forward. Your feet should be planted firmly on the mat, creating a tripod-like foundation. Once secured, you can adjust your angle slightly while maintaining pressure. The key is smooth, controlled movement into headquarters position rather than forcing entry. This creates maximum stability before advancing your pass or attacking submissions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details include maintaining constant pressure through your core and avoiding positional stalling. Your weight distribution should feel heavy but not immobilizing—constant micro-adjustments prevent your opponent from creating escape angles. Common mistakes include sitting too high, which allows leg escape options, and leaning your upper body too far forward, compromising your base. Never rely on grip strength alone; headquarters position succeeds through pressure and positioning. Avoid dropping both knees to the mat simultaneously, as this reduces your mobility and makes you vulnerable to sweeps. Keep your posture upright with your chest proud rather than collapsed. Don't allow your opponent to underhook your legs or establish grips on your arms. If your opponent pushes your head, adjust your position rather than fighting directly. Many practitioners make the error of assuming headquarters is a resting position—it requires active pressure maintenance. Your elbows should stay relatively tight to your body while your shoulders remain engaged. Constantly feel your opponent's movements and respond with pressure adjustments.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>Headquarters position is ideal when your opponent demonstrates active leg guard work or attempts footlock entries. Use it when you want to control the pace and set up submissions methodically. This technique excels against closed guard, half guard top positions, and when dealing with flexible opponents who create awkward angles. It's particularly effective when your opponent is taller or has longer limbs, as the perpendicular positioning neutralizes their reach advantage. In competition, headquarters is valuable when ahead on points—the position allows you to maintain control while advancing your pass strategically. During training, use headquarters when developing pressure passing fundamentals with less athletic training partners. It's less suitable against opponents with strong butterfly guard entries or those who consistently obtain underhooks quickly. Avoid headquarters against submission-focused opponents when you're fatigued, as maintaining pressure requires constant engagement. In gi training, headquarters works well before progressing to more dynamic passing systems. This position is foundational for developing positional awareness and pressure-based control that transfers to other guard passing situations.</p>
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
