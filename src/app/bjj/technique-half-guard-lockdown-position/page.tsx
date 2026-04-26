import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Half Guard Lockdown Position: Complete BJJ Guide | AIBJJ",
  description: "Master the half guard lockdown, a powerful control technique that neutralizes top pressure and creates submission opportunities in Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["half guard", "lockdown", "BJJ technique", "grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Half Guard Lockdown Position: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the half guard lockdown, a powerful control technique that neutralizes top pressure and creates submission opportunities in Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Half Guard?</h2>
            <p>The half guard lockdown is a bottom position where you control your opponent's leg while trapping their upper body. Unlike standard half guard where your hips are square, the lockdown involves wrapping your legs around the opponent's leg while using an underhook or nearside control to prevent their escape and advancement. This position is deceptively powerful because it neutralizes top pressure, prevents dominant positioning, and creates sweeping and submission opportunities. The lockdown became popularized by Eddie Bravo and has since become essential in modern BJJ. It's particularly effective against stronger opponents because it relies on leverage and positioning rather than raw strength. The position allows you to control the pace of the match while frustrating your opponent's passing attempts. From here, you can transition to sweeps, leg locks, or submission sequences. The lockdown is considered one of the best defensive positions in half guard, as it severely limits your opponent's offensive options.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by establishing half guard with your opponent's right leg between your legs. Hook your right leg under their right knee, crossing your right ankle over your left shin to create the initial lockdown. Your legs form a triangle around their leg with maximum pressure. Simultaneously, secure an underhook with your right arm, wrapping around their torso and gripping their far shoulder or collar. Keep your head up against their chest to prevent them from collapsing on you. Your left arm can either support the underhook grip or post on the mat for balance. Drive your hips forward and slightly upward into their body. Your shoulders should be packed with your left shoulder tight to their body. Maintain constant pressure with your leg lock while keeping your upper body connected. The key is synchronizing upper and lower body control so your opponent can't escape in any direction. Practice the mechanics slowly before applying full pressure.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Maintain constant leg pressure—many beginners relax their lockdown, allowing opponents to extract their leg. Your right ankle must sit firmly over your left shin with significant squeezing pressure. Keep your hips close to their body; distance allows them to create space and pass. A common mistake is neglecting the underhook, which allows your opponent to base out and create frames. Your grip must be deep and secure around their torso. Don't let your head come off their chest, as this invites them to flatten you. Your shoulders should remain packed tightly; loose shoulders compromise the entire structure. Another error is positioning your legs too high on their thigh instead of around the knee. Control the knee specifically for maximum leverage. Avoid looking down at the lockdown—maintain eye contact and awareness of their hands and upper body. Don't anticipate sweeps before establishing complete control. Finally, don't ignore their potential arm attacks; keep their arms controlled and monitor their hand placement throughout.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The half guard lockdown is most effective when your opponent has just passed your guard or is aggressively trying to advance from half guard. Use it immediately when they're applying top pressure before they establish a dominant position like side control. It's particularly valuable against opponents who like to pressure-pass or use leg drag passes. The lockdown shines when facing stronger opponents because it doesn't require explosive power. It's ideal for defensive situations where you've been caught in an unfavorable position and need to consolidate control. The lockdown is excellent during positional wrestling exchanges when you need a reset. Avoid using it predictably in the same sequences, as experienced opponents will recognize patterns and develop counters. It's a temporary control position designed to transition into sweeps or submissions rather than a stalling position. Use it strategically to frustrate passing attempts, recover your guard, or set up offensive techniques. The lockdown buys you time to gather your bearings and plan your next move in scrambled situations. It's particularly effective in no-gi grappling where grip strength matters less than leveraged positioning.</p>
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
