import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "O Goshi Gari: Complete BJJ Takedown Guide | AIBJJ",
  description: "Master the o goshi gari takedown with our comprehensive guide. Learn setup, execution, timing, and common mistakes.",
};

export default function Page() {
  const tags = ["o goshi gari", "takedown", "judo", "leg sweep", "BJJ fundamentals"];
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
        <h1 className="text-4xl font-black sm:text-5xl">O Goshi Gari: Complete BJJ Takedown Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the o goshi gari takedown with our comprehensive guide. Learn setup, execution, timing, and common mistakes.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Takedown?</h2>
            <p>O goshi gari, also known as major outer reap, is a fundamental judo-based takedown widely used in BJJ competition and training. This technique involves sweeping your opponent's leg from the outside while controlling their upper body, forcing them backward and onto the mat. The name breaks down into 'o' meaning major, 'goshi' referring to the hip/leg area, and 'gari' meaning reap or sweep. This takedown is highly effective because it targets the outside of the leg, an area most grapplers don't protect well. The technique relies on timing, positioning, and leverage rather than pure strength, making it accessible to practitioners of all sizes. O goshi gari works particularly well against opponents in a squared-up stance and is a staple in both judo and modern BJJ. Understanding this technique provides essential foundational knowledge for developing a complete takedown arsenal and improves your ability to control matches from the standing position.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>First, establish a strong grip on your opponent. Use a standard collar grip with your right hand and a sleeve grip with your left hand, maintaining control of their posture. Step your right foot forward at a 45-degree angle across their body, positioning your hip close to theirs. Your foot placement is critical—it should be outside their stance on the same side as your collar grip. As you step in, load your weight into your hip and begin turning your shoulders inward, creating connection at the hip level. Simultaneously, pull their sleeve down and push their collar back to break their balance backward. Now execute the reap: swing your right leg across the back of their right leg, making contact with your calf or shin on the outside of their thigh. Drive through your hip explosively, extending your leg while maintaining upper body control. As their leg is swept, they'll fall backward onto the mat. Practice the footwork pattern repeatedly before adding speed and intensity to develop proper timing and muscle memory.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Success with o goshi gari depends on several technical details. First, your hip position must be close to your opponent's body—distance kills the technique. Second, break their balance before executing the reap; many beginners try to sweep without proper balance disruption. Third, ensure your reaping leg makes solid contact with the outside of their leg, not the back. A common mistake is stepping too close or too far; your initial step should position you at an angle where your hip naturally connects with theirs. Another frequent error involves insufficient upper body control; without maintaining collar and sleeve grips, your opponent can sprawl and escape. Timing is crucial—execute the reap when their weight is partially on the leg you're sweeping. Additionally, don't lean forward excessively; this telegraphs the technique and allows them to adjust. Finally, follow through completely; hesitation or half-hearted execution reduces effectiveness. Practice against resisting partners to develop feel and timing, as these elements can't be learned through solo drilling alone.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>O goshi gari is most effective against opponents in a squared-up, forward-facing stance. Use it when your opponent is committed to their position and not moving laterally. The technique excels in situations where you've established grip control and your opponent is leaning slightly forward or resisting your pull. In competition, it's particularly valuable when you need to score points quickly or establish dominance from the standing position. This takedown works well against taller opponents because the mechanics don't rely on significant height advantage. Use it early in matches when your opponent is fresh and less defensive about their leg positioning. O goshi gari is less effective against opponents actively sprawling, pulling guard, or maintaining excellent base and posture. It pairs well with other techniques—if your opponent defends by stepping back, you can transition to footlock attacks or other leg-based takedowns. In training, practice o goshi gari against partners of various sizes and styles to understand its range and limitations. It's an excellent fundamental technique for developing hip control and understanding takedown mechanics, making it invaluable for all BJJ practitioners regardless of specialization.</p>
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
