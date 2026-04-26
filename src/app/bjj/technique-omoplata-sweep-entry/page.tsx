import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Omoplata Sweep Entry: Complete BJJ Guide | AIBJJ",
  description: "Learn the omoplata sweep entry in BJJ. Master setup, positioning, and execution with our step-by-step guide for all skill levels.",
};

export default function Page() {
  const tags = ["omoplata", "sweep", "bjj techniques", "guard techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Omoplata Sweep Entry: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn the omoplata sweep entry in BJJ. Master setup, positioning, and execution with our step-by-step guide for all skill levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Omoplata?</h2>
            <p>The omoplata is a versatile shoulder lock position that transitions seamlessly into sweeps, submissions, and positional advantages. Originally popularized in footlock-heavy systems, it has become essential in modern BJJ across all belt levels. The omoplata targets the shoulder joint by isolating your opponent's arm while controlling their body with your legs. What makes the omoplata particularly effective is its dual-purpose nature: you can threaten a shoulder lock submission while simultaneously setting up a powerful sweep. The position creates immediate pressure on the shoulder, forcing your opponent to react defensively. This defensive response becomes the entry point for the sweep. Understanding the omoplata as a sweep entry requires recognizing how your leg position controls their base and how their escape attempts naturally lead to being swept. The omoplata sweep entry is especially valuable because it doesn't require explosive athleticism or perfect timing. Instead, it relies on precise positioning and understanding the mechanics of shoulder control and base disruption. Many practitioners overlook the sweep potential while focusing solely on the submission threat, missing significant opportunities to advance position.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start from open guard or closed guard with your opponent posting their hands. Underhook their posting arm with one arm while simultaneously shooting your leg over their shoulder. Trap their arm between your thigh and torso, ensuring their arm is isolated against your body. Your top leg should control their upper back while your bottom leg hooks their opposite arm or controls their far side. Secure the underhook with your upper body, creating a tight connection. Pull their posture down and inward toward you, collapsing their structure. This pressure forces them to either post harder with their free hand or defend the shoulder lock threat. As they react, shift your hips slightly to begin the sweep mechanics. Transition your bottom leg to their hip or waist while maintaining shoulder control. Keep your top leg pinned across their back. Use your underhook to drive their shoulder forward and rotate your hips explosively. The key is timing—execute the sweep just as they shift weight to defend. Your leg configuration should prevent them from base-building effectively. The sweep completes when you've rotated past their centerline, landing in a superior position like mount or side control. Maintain control throughout the transition.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details separate successful omoplata sweeps from incomplete attempts. Ensure the target arm is genuinely trapped—loose trapping allows escape. Your underhook must create rotational force, not just hold position. Control their back with your top leg, preventing them from turning into you and stalling the sweep. Many practitioners release pressure too early, allowing recovery. Common mistakes include: insufficient arm trapping, allowing their free hand to base effectively, losing the underhook during rotation, and initiating the sweep too early before they commit to defending. The sweep requires explosive hip rotation combined with pulling their upper body forward. Timing matters immensely—execute when they're caught between defending the shoulder lock and maintaining base. Don't leave gaps between your body and their arm. Keep your grip tight throughout. Another frequent error is poor hip positioning before the sweep. Your hips should track toward their hips, not away. Some practitioners lose control by releasing the leg position prematurely. The omoplata demands continuous pressure maintenance. If they base successfully with their free hand, the sweep becomes significantly harder. Maintain connection and control, adjusting as needed. Understanding these details transforms the omoplata from an inconsistent technique into a reliable sweep.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The omoplata sweep entry excels when your opponent commits to upper body positioning in your guard. Use it against opponents with strong posture or those who pressure down aggressively. It's particularly effective when they post their arm to escape, providing the perfect entry point. The technique shines in open guard situations where arm isolation is possible. Against defensive players protecting their shoulders, the sweep proves devastating because they're already concerned about the submission threat. The omoplata works well when your opponent has limited leg mobility or relies on hand-based base. Avoid using it against opponents with exceptional hip mobility who can rotate into the position. It's less effective when they're already extended and far from you. The technique integrates well into sequences: after failed guard passes, during arm drag attempts, or when they defend triangle defenses by posting their arm. Consider using the omoplata sweep entry against taller opponents whose arm length makes controlling their posture difficult. In competition, it's valuable for point accumulation, cleanly advancing to superior position. In training, it teaches essential principles about shoulder control and hip mechanics. The sweep is time-efficient and relatively low-risk compared to pure submission attempts. It maintains offensive pressure while improving position, making it tactically sound across all contexts.</p>
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
