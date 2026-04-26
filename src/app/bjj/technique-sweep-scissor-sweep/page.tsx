import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Scissor Sweep: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the scissor sweep, one of BJJ's most effective guard techniques. Learn setup, execution, and timing to control opponents from bottom position.",
};

export default function Page() {
  const tags = ["scissor sweep", "guard techniques", "BJJ sweeps", "bottom position"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Scissor Sweep: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the scissor sweep, one of BJJ's most effective guard techniques. Learn setup, execution, and timing to control opponents from bottom position.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Sweep?</h2>
            <p>The scissor sweep is a fundamental Brazilian Jiu-Jitsu technique executed from guard position where you use your legs to trap and flip your opponent over you. This sweep works by creating a scissor action with your legs while using your hips and upper body positioning to off-balance your opponent. The beauty of the scissor sweep lies in its simplicity and effectiveness at all skill levels. It's one of the first sweeps beginners learn because it relies on fundamental mechanics rather than explosive strength. When executed properly, the scissor sweep transitions you from a defensive bottom position to a dominant top position, allowing you to control your opponent and advance your position. The technique is particularly valuable because it works against both rigid and flexible opponents. Understanding this sweep is essential for developing a well-rounded guard game and provides a foundation for learning more advanced sweeping techniques.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by establishing a solid closed guard with your opponent in posture. Control their posture by gripping their collar or head with both hands. Frame on their chest with one arm to create space and prevent them from passing your guard. As your opponent leans forward, open your guard slightly and place one leg across their hips while keeping the other leg ready to scissor. Position your bottom leg to block their escape route. The key is timing your hip movement with leg placement. Drive your hips upward and toward your opponent while simultaneously closing your legs in a scissoring motion. Your top leg presses across their chest while your bottom leg tucks under their armpit or leg. Pivot your hips underneath them as you squeeze with your legs. Finally, post one arm on the mat and extend through your legs to complete the flip, rolling them over your body. The momentum should carry them over completely, leaving you in top position. Practice this movement slowly before adding speed and pressure.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details include maintaining hip contact with your opponent throughout the movement. Many beginners separate their hips too early, reducing the sweep's effectiveness. Your top leg must be high across their chest or shoulder to maximize the scissor effect. Keep your grip tight on their upper body to prevent them from establishing base or posturing up. Your hand placement matters significantly; posting your hand behind you as you hip escape ensures smooth transition and prevents falls. Common mistakes include attempting the sweep when your opponent has good posture. Work to break their posture first by pulling down on their head or collar. Another error is not committing fully to the sweep. Hesitation allows your opponent time to establish base or defend. Many practitioners also fail to control their opponent's arm, which allows them to post and prevent the flip. Always pin at least one arm to the opposite side during execution. Finally, don't neglect hip movement; your leg strength alone won't complete the sweep without proper hip drive and positioning.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The scissor sweep works best when your opponent is applying pressure with good posture but hasn't yet established a solid base. It's particularly effective against opponents who lean forward to pass your guard or attempt to control your hips. Use this sweep when you've broken your opponent's posture and they're moving toward you rather than away. The technique shines when your opponent commits their weight forward, as this makes the upward hip movement more effective. Timing is crucial; initiate the sweep during their forward momentum rather than when they're sitting back. The scissor sweep also provides excellent defensive value. When your opponent begins to stand in your guard, the scissor sweep can prevent guard passing attempts. It's valuable in competition because it's a fundamental technique that scores points when executed cleanly. Use it as your primary sweep from closed guard, then transition to more advanced techniques like pendulum or flower sweeps when your opponent expects the scissor. The scissor sweep is also effective in self-defense scenarios from guard position, making it a practical technique beyond sport BJJ applications.</p>
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
