import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Arm-In Guillotine: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the arm-in guillotine choke. Learn setup, execution, and defense strategies for this devastating neck submission in BJJ.",
};

export default function Page() {
  const tags = ["guillotine", "chokes", "submissions", "neck attacks"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Arm-In Guillotine: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the arm-in guillotine choke. Learn setup, execution, and defense strategies for this devastating neck submission in BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Guillotine?</h2>
            <p>The arm-in guillotine is a neck choke where the attacker controls an opponent's neck with both hands while trapping one of their arms inside the choking loop. Unlike the traditional guillotine where both arms wrap around the neck, the arm-in variation incorporates the opponent's own arm into the submission, creating a tighter, more inescapable position. The trapped arm prevents the defender from posting or creating space to relieve pressure. This variation is particularly effective because it's difficult to defend—the opponent cannot simply pull their arm free without breaking their own neck, creating a genuine dilemma. The submission works by applying pressure to the carotid arteries and jugular vein, restricting blood flow to the brain and forcing unconsciousness. It's one of the highest-percentage submissions in BJJ, favored by competitors at all levels due to its reliability and devastating effectiveness.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start by obtaining top control over your opponent. The most common entry occurs when your opponent shoots a takedown or you're in their guard. As they attempt the takedown or you're controlling them, wrap your arm around their neck with your choking arm. Your forearm should be across their neck. Next, use your other hand to grab your own wrist or palm, creating the choking link. The critical element is positioning their arm inside your choking loop—ideally their near arm gets trapped inside as they try to defend or stack you. Once the arm is inside, tighten your grip by pulling your hands closer together and rotating your hips into them. Post your head to the side to prevent them from rotating out. Apply gradual, steady pressure rather than jerking. Keep your elbows tight and maintain control of their posture. The submission tightens when you pull their head down toward your chest while driving their trapped arm downward simultaneously.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Proper hand positioning is crucial. Your choking forearm should rest across the side of the neck, not directly on the windpipe. The pressure comes from the sides, targeting the carotid arteries. A common mistake is losing the trapped arm—maintain constant awareness of their arm's position throughout. Don't grip too tightly initially; instead, use control to prevent them from creating space. Many practitioners fail because they don't rotate their hips into the submission. Your hip rotation amplifies pressure exponentially more than arm strength alone. Another critical error is telegraphing your intention—set the choke up organically from position rather than abruptly attempting it. Avoid raising your elbows, which releases crucial pressure. Some practitioners make the mistake of pulling straight back instead of pulling downward and into their own body, which reduces effectiveness. Finally, maintain a strong base and head position—if they can explode out, your position collapses. Always maintain control while applying pressure.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The arm-in guillotine excels during takedown exchanges when your opponent initiates the attack. It's exceptionally effective from top guard position, especially when dealing with aggressive passing attempts. Use it when your opponent is turtled or face-down, as the neck is fully exposed and the trapped arm immobilizes their defense. This technique shines in scrambles and transitions when your opponent's head and arm alignment is compromised. It's particularly valuable against opponents who actively defend the traditional guillotine by posting their arm, since the arm-in variation uses their defense against them. Timing matters significantly—apply it when their posture is broken or they're moving into you rather than away. In competition, the arm-in guillotine is especially valuable because it's legal at all belt levels and ages, making it a reliable tournament submission. Use this submission when you have control but need to finish quickly. It's also effective as a confidence builder when you're unsure of other submission options, as it's one of the highest-percentage finishes in grappling.</p>
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
