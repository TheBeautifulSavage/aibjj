import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Omoplata from Guard: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the omoplata from guard with step-by-step instructions, key technical details, and strategic applications for all skill levels.",
};

export default function Page() {
  const tags = ["omoplata", "guard", "shoulder lock", "submissions", "BJJ techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Omoplata from Guard: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the omoplata from guard with step-by-step instructions, key technical details, and strategic applications for all skill levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Omoplata?</h2>
            <p>The omoplata is a shoulder lock submission that targets your opponent's shoulder joint by trapping their arm across your body. The name comes from Portuguese, meaning 'shoulder blade.' It's one of the most versatile submissions in BJJ because it can be applied from multiple positions, transitions smoothly into other techniques, and works against opponents of all sizes. From the guard, the omoplata is particularly effective because you can control your opponent's posture while setting up the lock. Unlike arm locks that target the elbow, the omoplata hyperextends the shoulder joint itself, making it a powerful finishing technique. The submission creates intense pressure that forces quick taps when applied correctly. What makes the omoplata special is its high-percentage nature in modern BJJ—even experienced grapplers struggle to defend it when properly executed. Additionally, if your opponent escapes the submission, you often find yourself in an advantageous position to transition to other attacks like sweeps or back takes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in your closed guard with your opponent posturing up. Control their posture by keeping them close with your legs. As they try to create distance, use your hips to lift and off-balance them slightly. Grab their same-side arm (if they lean right, grab their right arm) and pull it across your body. This is crucial—the arm must cross the centerline. Simultaneously, swing your leg up and over their shoulder, placing your shin across the back of their neck. Keep this leg tight and use it to control their head. Your other leg should hook their far arm to prevent them from pulling it free. Now comes the main position: lock your omoplata with your hips elevated. Your trapped leg should rest against their armpit while your foot hooks their arm. To finish, lean back slightly while squeezing your legs together and pulling their arm down toward your hip. Your opponent's shoulder becomes compressed between your leg and their own body. Maintain pressure steadily—don't jerk, as you want a clean submission, not an injury.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most common mistake is allowing your opponent to remove their arm before fully locking the position. Their arm must be trapped completely across your body before you transition into the final lock. Another error is positioning your top leg too high on the shoulder—it should sit directly across the back of their neck for maximum control. Many students also fail to keep their hips elevated, which reduces the leverage needed to finish the submission. Your lower back should stay off the mat during the submission to maximize pressure. Don't rush the finish; control the position first, then apply gradual pressure. Your legs should work together as a unit—if one leg loosens, your opponent escapes. Keep your hands active too; control their posture by holding their trapped arm or collar. A critical detail: the omoplata works best when your opponent is posturing forward. If they sit back into your guard, the angle becomes less favorable. Finally, understand that the omoplata can transition into sweeps if the submission isn't available, so always maintain top control over their shoulder.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The omoplata shines when your opponent is actively posturing and pushing away from you in closed guard. It's particularly effective against opponents who like to base out and create distance, as their posture naturally feeds into your setup. Use it when your opponent has good arm strength that might counter other submissions—the omoplata bypasses arm strength entirely by targeting the shoulder joint. It's also excellent for taller opponents, since their longer arms make arm lock setups more difficult. The omoplata excels in tournament settings because it's a legitimate finishing submission that judges respect. Strategically, set up the omoplata when your opponent is tired or when they're focused on escaping other threats, making them less attentive to their arm position. It works particularly well against opponents who grip-fight aggressively, as their grips become liabilities when their arm is trapped. The omoplata is ideal for lower belt levels to learn because it teaches body positioning and control rather than relying on strength. However, advanced grapplers should use it as a setup for transitions—sweeping into mount or taking the back becomes available when opponents defend the submission aggressively.</p>
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
