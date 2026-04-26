import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Lasso Guard: Sweeps & Triangle Techniques | AIBJJ",
  description: "Master lasso guard with comprehensive sweep and triangle finishing techniques. Step-by-step instructions, common mistakes, and strategic applications.",
};

export default function Page() {
  const tags = ["lasso guard", "BJJ sweeps", "triangle choke", "leg lock guard"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Lasso Guard: Sweeps & Triangle Techniques</h1>
        <p className="mt-4 text-xl text-zinc-400">Master lasso guard with comprehensive sweep and triangle finishing techniques. Step-by-step instructions, common mistakes, and strategic applications.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Lasso Guard?</h2>
            <p>The lasso guard is a dynamic leg lock position where you control your opponent's posture and limbs using your legs and arms in a wrapping configuration. Your leg crosses over the opponent's arm while your foot hooks behind their back, creating a 'lasso' effect that restricts their movement and posture. This guard position is exceptionally effective for both offensive and defensive purposes, offering multiple finishing options including sweeps, triangles, and submissions. The lasso guard works from both seated and supine positions and is particularly valuable against opponents who try to pressure pass. Its versatility makes it a staple in modern leg lock-heavy games. The position creates constant threats that force your opponent into reactive decisions, giving you the initiative. Understanding the lasso guard opens up numerous submission chains and sweep combinations that can completely control the match pace and direction.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin from open guard with your opponent standing or in a tight guard pass attempt. Hook your right leg around their right arm while simultaneously placing your foot on their hip or lower back. Cross your right arm over their arm and grip their sleeve or collar. Your left foot should press against their hip to maintain distance and prevent compression. Angle your hips slightly to the left, creating space. For the sweep entry, keep your opponent's posture broken forward. Drive your left foot into their hip while extending your right leg to lift their right side off the ground. Time the movement with your upper body to complete the reversal. For triangle setups, once you have the lasso control, bring your right leg across their neck and clasp your hands behind their head. Keep your opponent's arm trapped and sink the triangle by dropping your right hip. Maintain constant foot pressure on their hip to control their base throughout both techniques.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details include maintaining the foot pressure on the hip—release this and your opponent can stand and escape. Keep your gripping arm tight across their arm to prevent them from framing your legs. Your hips must stay engaged and mobile; static positioning allows escapes. A common mistake is overextending your legs, which reduces leverage and allows your opponent to stack you. Don't neglect upper body control; many practitioners focus only on leg positioning. Another frequent error is breaking posture too early before committing to the sweep, telegraphing your intentions. For triangle entries, ensure their arm stays trapped inside—if it escapes, the choke loses significant effectiveness. Avoid crossing your legs prematurely; finish the sweep before transitioning. Keep your gripping hand connected throughout combinations. Finally, don't grip too tightly early on, as this fatigues your arm before the final submission attempt. Economy of motion and timing matter more than pure strength in lasso guard work.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The lasso guard excels when your opponent attempts aggressive guard passes or stands too high in your guard. Use it against opponents who pressure-pass, as the leg entanglement severely limits their options. It's particularly effective when you're playing off your back and need to regain positional control. The lasso guard works well in matches where your opponent has stronger top pressure—the leg control mitigates their strength advantage. Employ the sweep against opponents with poor hip mobility who struggle to adjust to the lasso positioning. The triangle finish shines when your opponent defends the sweep by posturing up. Use this technique during open guard exchanges where you have leg lock access. Against taller opponents, the lasso guard's control mechanisms help overcome their reach advantage. The position is less effective against extremely flexible opponents who can pass the lasso or against competitors comfortable fighting from leg lock positions. Time your lasso entry as your opponent commits forward, maximizing momentum for sweeps. In competition, the lasso guard provides point-scoring opportunities through sweeps while maintaining legitimate finishing threats.</p>
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
