import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Triangle Choke (Arm-In): Complete BJJ Guide | AIBJJ",
  description: "Master the arm-in triangle choke with our comprehensive guide. Learn setup, execution, key details, and strategic applications for all BJJ levels.",
};

export default function Page() {
  const tags = ["triangle choke", "arm-in triangle", "submissions", "BJJ technique"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">Triangle Choke (Arm-In): Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the arm-in triangle choke with our comprehensive guide. Learn setup, execution, key details, and strategic applications for all BJJ levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Triangle Choke?</h2>
            <p>The arm-in triangle choke is a powerful submission where the attacker uses their legs to create a triangle around the opponent's neck and arm. Unlike the standard triangle, the arm-in variation includes one of the opponent's arms inside the triangle, reducing their ability to escape and defend. This positioning creates significant pressure on the carotid arteries and can compress the neck effectively.

The arm-in triangle is highly effective because it limits the defender's escape options and makes the choke mechanically stronger. The trapped arm prevents the opponent from framing against your hip, which is a common defense in standard triangles. This technique works from multiple positions including guard, mount, and side control, making it incredibly versatile. It's a staple submission in both gi and no-gi BJJ and is favored by competitors at all levels due to its reliability and difficulty to defend once properly established.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>From Closed Guard: Pull your opponent down into your chest while controlling their head. Trap one arm inside your guard using an underhook or collar grip. Kick your foot over their shoulder on the trapped-arm side, keeping your other leg bent. Slide your hips out at a 45-degree angle to create space. Bring your trapped-leg foot over their head, crossing at the ankles. Apply pressure by pulling their head down and squeezing your legs.

From Mount: Control their arms by keeping one arm trapped close to their body. Hip out to the side of the trapped arm. Place one leg over their shoulder and bring your other leg across their neck. Lock your ankles together, ensuring the trapped arm stays inside. Finish by pulling their head down toward your chest while squeezing.

From Side Control: Trap one arm under your body. Establish head control and move into the guard position. Execute the setup as described in the closed guard variation. Transition is smooth when the arm is already controlled before guard establishment.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical technical points: Keep the trapped arm pressed against their neck to maximize choke pressure. Ensure your ankle lock is tight—a loose lock allows escape. Your hips must be perpendicular to their body, not parallel, for maximum leverage. Pull their head down as you squeeze your legs; this is a compound movement requiring both actions simultaneously.

Common mistakes include allowing the opponent's arm to escape the triangle—prevent this by maintaining constant pressure on that arm throughout the technique. Don't execute the choke too high on the neck; position it lower for carotid compression. Failing to angle your hips properly reduces choke effectiveness significantly. Some practitioners squeeze too early before the position is fully locked, telegraphing their intentions and allowing the opponent to defend.

Another error is neglecting proper ankle lock placement. Your top foot should cross over your bottom ankle, creating a solid mechanical lock. If not secured properly, your opponent can create space and escape. Finally, avoid holding the choke too long during training; tap when pressure increases significantly to prevent injury to your training partner.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The arm-in triangle is most effective when your opponent is defending against submissions passively or trying to base out with their arms. It's ideal in closed guard when you've controlled one arm and established head control. Use it when your opponent stacks you in guard—the arm-in triangle transitions smoothly from defensive positions.

In mounted position, the arm-in triangle works excellently when your opponent is bridging or attempting to buck you off. From side control, it's effective after you've secured an underhook or trapped one arm. The technique shines in situations where the opponent is defending with both arms active, as the trapped arm removes a significant defensive tool.

Strategically, use the arm-in triangle as a threat to open other submissions. Your opponent may abandon arm-in defenses to pursue escapes, creating opportunities for armbars or omoplatas. It's particularly valuable in competition where finishing submissions is essential. In training, it's an excellent technique for intermediate to advanced students learning submission combinations. Against larger, stronger opponents, the mechanical advantage of the arm-in triangle makes it more reliable than standard triangles, reducing reliance on flexibility or strength.</p>
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
