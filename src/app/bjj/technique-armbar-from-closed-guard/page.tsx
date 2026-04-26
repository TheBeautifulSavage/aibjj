import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Armbar from Closed Guard: Complete BJJ Technique | AIBJJ",
  description: "Master the fundamental armbar from closed guard. Learn setup, execution, and common mistakes in this comprehensive BJJ technique guide.",
};

export default function Page() {
  const tags = ["armbar", "closed guard", "submissions", "fundamentals"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Armbar from Closed Guard: Complete BJJ Technique</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the fundamental armbar from closed guard. Learn setup, execution, and common mistakes in this comprehensive BJJ technique guide.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Armbar?</h2>
            <p>The armbar, or arm lock, is one of Brazilian Jiu-Jitsu's most fundamental submissions. From closed guard, it targets your opponent's elbow joint by hyperextending the arm across your hip or torso. This submission is highly effective because the elbow has limited range of motion and extreme vulnerability to straight-line pressure. The armbar appears in the Gracie family's foundational techniques and is typically one of the first submissions taught to beginners. Its effectiveness at all skill levels, from white belt through black belt competition, makes it an essential technique in every grappler's arsenal. The submission works by creating an unescapable mechanical disadvantage where your opponent must either tap or risk serious injury. Understanding proper execution prevents accidental injuries while maximizing control and pressure application.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in a solid closed guard position with your opponent posturing up slightly. Control their posture with collar and sleeve grips. Step your right foot on their hip to create space while maintaining guard with your left leg. Underhook their right arm with your left arm and establish a firm grip on their back. Pull their right shoulder down toward your chest while keeping your right foot on their hip. As they react, remove your right foot and place your right leg across their chest. Now elevate your hips and angle your body perpendicular to theirs. Thread your left leg across their neck and upper back. Your right leg should be above their arm and extended toward their head. Lock both legs together in a figure-four position. Squeeze your legs while pulling their arm tight across your torso and extending your hips upward. The pressure should be applied directly across the elbow joint.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details determine submission success: angle your body perpendicular to your opponent's to maximize pressure on the elbow, not the shoulder. Keep their arm close to your torso rather than extended far away. Your grip on their wrist or hand should be firm, with their palm facing inward toward you. Lock your ankle over your opposite knee in a secure leg position. Many beginners fail to achieve proper body alignment, allowing escape routes. Others grip too high on the arm or position the arm incorrectly across the hip. Don't leave space between your torso and their arm. Avoid squeezing sideways; instead, extend your hips upward in a controlled manner. Never jerk the submission violently, especially with training partners. Tap submissions are common injuries in BJJ, so controlled pressure allows opponents time to recognize the position and submit safely.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The armbar from closed guard is most effective when your opponent postures up and extends their arm toward your head or face. Use it when they push down on your hips, creating the space needed to thread your leg across their chest. This technique excels when your opponent is heavy or stronger, since you're using mechanical advantage rather than strength. It's particularly valuable early in matches when your opponent hasn't adapted to guard pressure. The armbar works excellently in longer rounds as opponents fatigue and their defense weakens. Avoid this submission if your opponent keeps their arms tight to their body or if they're extremely small compared to you, as setup becomes difficult. Use it strategically against opponents who frequently posture up rather than those who maintain low pressure. The technique is ideal for developing control concepts in training and for white belts learning fundamental submission mechanics. At advanced levels, it remains a reliable finisher when your opponent makes positional mistakes.</p>
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
