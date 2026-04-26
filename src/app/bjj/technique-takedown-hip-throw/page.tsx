import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Hip Throw Takedown: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the hip throw takedown in BJJ. Learn setup, execution, key details, and common mistakes to dominate your opponents on the feet.",
};

export default function Page() {
  const tags = ["hip throw", "takedowns", "judo", "standing techniques", "BJJ basics"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Hip Throw Takedown: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the hip throw takedown in BJJ. Learn setup, execution, key details, and common mistakes to dominate your opponents on the feet.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Takedown?</h2>
            <p>The hip throw, or o goshi in judo, is one of the most fundamental and effective takedowns in BJJ and combat sports. This technique uses your hips as a fulcrum to rotate your opponent over your body and onto their back. The hip throw is prized for its efficiency, requiring proper positioning rather than pure strength, making it accessible to athletes of all sizes. Once mastered, it becomes one of your most reliable takedown options in both sport BJJ and self-defense situations. The hip throw transitions seamlessly into dominant positions like side control or mount, giving you immediate advantages after the takedown. It's particularly effective against opponents who are heavier or stronger, as leverage and timing matter far more than raw power. Many world-class grapplers rely heavily on the hip throw as a cornerstone of their takedown game.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by establishing a strong collar and sleeve grip on your opponent's gi or performing an underhook and collar grip without gi. Step your outside foot across your opponent's body, positioning your hip directly against theirs. Your feet should be wider than shoulder-width apart for stability. Keep your chest tight against theirs, preventing them from creating distance. Drop your hips slightly and rotate your shoulders parallel to your opponent's shoulders. Drive your hips forward and upward while pulling down on their collar and pushing their sleeve across your body. Your hip acts as a pivot point that rotates them over it. As they begin to fall, control their collar tightly to direct them onto their back. Complete the throw by maintaining your grip and following them down into a dominant position. Practice the hip movement separately to develop the proper rotation mechanics.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Success depends on several critical details often overlooked by beginners. Your hips must be lower than your opponent's hips at the moment of execution. Many practitioners fail because they don't drop their center of gravity sufficiently. Keep your chest pressed firmly against theirs throughout the throw to prevent them from posting out with their hands. Your grip should be tight and controlling—a loose grip allows escape. Position your hips at their hip level, not too high or too low. Common mistakes include standing too upright, which eliminates your leverage advantage. Don't telegraph the throw by lifting early; instead, drive forward first, then rotate. Avoid stepping too far across, which compromises your balance. Some athletes lose control of the grip during rotation, allowing their opponent to land on their side instead of their back. Practice maintains consistent hip contact and smooth weight distribution. Drill the hip movement without a partner to develop muscle memory.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The hip throw works best when you've established collar and sleeve control with good posture and distance management. Use it when your opponent is defending against your initial penetration attempts. It's particularly effective against taller opponents, as their height becomes a disadvantage when rotating over your hips. The hip throw shines when you're facing defensive grapplers who rely on hand fighting and distance control. It's an excellent follow-up when your opponent resists your initial takedown attempts by leaning back or posturing up. In competition, the hip throw provides immediate points and positional advantage. It transitions naturally into high-percentage passing and submission opportunities from top position. The technique works in both gi and no-gi grappling, though gi grips provide additional control options. Avoid using it against opponents already committed to a different takedown, as they'll expect the hip throw. Time it when they're standing tall and balanced. Combine it with foot sweeps and other takedowns to keep opponents guessing about your next move.</p>
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
