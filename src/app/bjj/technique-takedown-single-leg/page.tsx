import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Single Leg Takedown: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the single leg takedown with our comprehensive guide. Learn setup, execution, key details, and strategic applications for all skill levels.",
};

export default function Page() {
  const tags = ["takedown", "single leg", "wrestling", "BJJ fundamentals"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Single Leg Takedown: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the single leg takedown with our comprehensive guide. Learn setup, execution, key details, and strategic applications for all skill levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Takedown?</h2>
            <p>The single leg takedown is a fundamental grappling technique where you control one of your opponent's legs to drive them to the ground. This technique bridges wrestling and BJJ, making it essential for competitors who want to avoid pulling guard and establish top position. The single leg is valuable because it's relatively safe to execute, difficult to defend once properly applied, and transitions smoothly into dominant positions like side control or knee on belly. Unlike double leg takedowns that require explosive athleticism, single leg takedowns rely on leverage, timing, and proper positioning. This technique works at all skill levels and is particularly effective when your opponent is standing upright or moving forward. Understanding the single leg opens doors to leg lock entries and positional dominance, making it a cornerstone technique for anyone serious about BJJ competition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>First, establish your fighting stance with good posture and distance management. Circle your opponent to create angles and avoid telegraphing your intentions. As they step or shift weight, penetrate forward explosively with a level change, bending your knees deeply while keeping your back straight. Shoot your lead leg between their legs and wrap your arms around their lower leg or shin. Your head should be on the outside of their hip, driving your shoulder into their body. Once you've secured the leg, pull it toward your body while maintaining forward pressure. Drive through your front leg and elevate their trapped leg while pushing their upper body backward with your shoulder. Keep them elevated or pull them down onto their back depending on their base and resistance. Control their free leg with your knees to prevent them from pivoting away. Finish by landing in knee on belly, side control, or mount position depending on how they fall.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details make the difference between a smooth takedown and failure. Keep your head on the outside of their hip to prevent them from sprawling effectively. Your grip should be tight on their leg above the ankle or on the shin—avoid gripping too high on the thigh. Maintain your posture during the takedown; many beginners collapse forward and lose control. Common mistakes include telegraphing the shot too early, which gives opponents time to sprawl or knee your face. Don't commit all your weight to one leg during penetration, as this limits mobility. Avoid shooting from too far away; you'll gas out mid-shot. Many practitioners lose the takedown by not controlling the free leg, allowing their opponent to post and scramble. Additionally, poor timing on the level change results in whiffed attempts. Proper distance management and waiting for opponent movement creates openings. Always protect your face with your free hand while driving forward, and maintain constant pressure to prevent your opponent from regaining base.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The single leg takedown shines when your opponent is in an upright stance or moving forward aggressively. Use it when they're focused on hand fighting or jockeying for collar ties. It works excellently against opponents who stand too upright and don't maintain a low center of gravity. In competition, single legs are ideal when you want to control the match and establish dominance from top position rather than pulling guard. Defensively, it's effective against opponents who frequently shoot takedowns themselves—staying active with single legs prevents them from setting up their offense. Against smaller opponents or those with poor sprawls, single legs become almost automatic. However, avoid shooting single legs against opponents with exceptional sprawl defense or those significantly stronger. It's less ideal when you're exhausted, as the technique requires explosive athleticism. In self-defense scenarios, single legs are practical because they're difficult to escape once established. They're particularly valuable in gi BJJ where collar ties might be contested, allowing you to transition to takedowns efficiently.</p>
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
