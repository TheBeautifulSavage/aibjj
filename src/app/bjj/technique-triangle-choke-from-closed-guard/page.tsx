import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Triangle Choke from Closed Guard: Complete Guide | AIBJJ",
  description: "Master the triangle choke from closed guard with step-by-step instructions, key technical details, and strategic timing for all skill levels.",
};

export default function Page() {
  const tags = ["triangle choke", "closed guard", "submission", "BJJ fundamentals"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Triangle Choke from Closed Guard: Complete Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the triangle choke from closed guard with step-by-step instructions, key technical details, and strategic timing for all skill levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Triangle Choke?</h2>
            <p>The triangle choke is one of Brazilian Jiu-Jitsu's most effective and widely used submissions. It's a blood choke that targets both carotid arteries simultaneously using your legs as the primary weapon. From closed guard, the triangle is particularly devastating because you control your opponent's posture while setting up the submission.

The technique gets its name from the triangular shape your legs create when properly locked. Your legs form two sides of the triangle while your opponent's neck and one arm form the third side. What makes the triangle so effective is that it's difficult to defend once properly established, and escaping requires excellent positioning knowledge.

The closed guard triangle is often the first submission beginners learn because it teaches essential concepts: leg positioning, angle control, and finishing mechanics. Even advanced grapplers rely on this technique regularly because it works against opponents of all sizes and skill levels. Understanding the triangle choke foundation prepares you for variations like the standing triangle, mounted triangle, and leg drag triangle.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in closed guard with your opponent in your guard and their posture broken forward. Step 1: Control their right arm by underhooking it with your left arm and pulling it across your body. This prevents them from framing on your hip to escape.

Step 2: Place your right foot on your opponent's left hip and extend your left leg, creating space. This motion opens your guard slightly while maintaining control.

Step 3: Thread your right leg over their right shoulder, positioning your right ankle near their left hip. Your right shin should be across the back of their neck.

Step 4: Close your left leg over their right arm and body, interlocking your ankles. Your legs now form the triangle shape.

Step 5: Release the underhook and grab their head or hip for finishing. Lean back slightly to increase pressure on the carotid arteries.

Step 6: Squeeze by pressing your right knee toward your left knee while lifting your hips. The pressure should come from leg strength, not arm pulling. Keep pressure consistent and your opponent will tap quickly.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical technical details separate effective triangles from sloppy attempts. Your right ankle positioning is crucial—it should sit high on their back, near the neck, not low on their shoulder. A low ankle position allows escape room. Keep your right shin tight across their neck, creating maximum pressure with minimum space.

Your hips must lift during the finish. Many beginners squeeze their legs without hip elevation, reducing choke effectiveness significantly. Elevate your hips and angle your body slightly to one side to align pressure perfectly on the carotid arteries.

Common mistakes include: threading your leg too low, allowing arm escape; releasing control too early; not breaking posture initially; and squeezing without proper hip elevation. Another frequent error is gripping too hard with your arms. The choke works through leg pressure alone—arm tension often telegraphs your intentions and tires you out.

When your opponent's arm escapes the triangle, don't panic. Readjust quickly by repositioning your shin position and relocking your ankles. Some opponents will frame hard against your legs—respond by increasing hip pressure and maintaining ankle lock integrity. If they posture up significantly, control their head and reset your guard.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The closed guard triangle works best when your opponent maintains upright or broken-forward posture. If they're extremely defensive and upright, attack other submissions like armbars or omoplatas first. The triangle shines when they lean forward aggressively, providing perfect positioning for leg setup.

Use the triangle when your opponent commits to passing your guard. As they pressure forward, they create the exact geometry needed for triangle setup. Many high-level competitors set triangles mid-pass attempts when defending guard passes.

Timing matters significantly. Early in rolls, establish position control and hand fighting superiority before committing fully to triangle setup. Mid-roll and late roll, when opponents fatigue, triangles become easier to finish as their escape speed decreases.

The triangle is particularly effective against overly aggressive opponents who constantly attack and create pressure. Cautious, defensive opponents often prevent triangle setup by maintaining upright posture. Against these opponents, consider armbar setups instead.

Use triangles when your leg positioning is superior and you control their posture. Avoid attempting triangles when your opponent has strong frame control or significant size advantage—they may simply stack you. The closed guard triangle works in competition, training, and self-defense scenarios. It's effective against beginners and advanced practitioners, making it an essential technique for every grappler.</p>
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
