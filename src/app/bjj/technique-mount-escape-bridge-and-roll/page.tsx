import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Mount Escape: Bridge and Roll Technique | AIBJJ",
  description: "Master the bridge and roll mount escape. Learn step-by-step setup, key details, common mistakes, and strategic applications for BJJ.",
};

export default function Page() {
  const tags = ["mount escape", "bridge and roll", "BJJ fundamentals", "positional defense"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Mount Escape: Bridge and Roll Technique</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the bridge and roll mount escape. Learn step-by-step setup, key details, common mistakes, and strategic applications for BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Mount Escape?</h2>
            <p>The mount escape, specifically the bridge and roll, is a fundamental Brazilian Jiu-Jitsu technique used to escape from the bottom mounted position. In mount, your opponent sits on your chest with control, creating one of the most dominant positions in BJJ. The bridge and roll is one of the most effective and widely taught escapes because it uses your leg strength and hip momentum to destabilize and flip your opponent. This technique is essential for all skill levels because mounted position is common in both training and competition. The escape works by creating space through a hip bridge, then using a coordinated arm and leg action to roll your opponent over your body. It's not just about explosive power—timing and technique are equally important. Understanding this escape builds confidence when defending against mounted attacks and teaches you how to use your lower body strength against heavier opponents.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start by establishing a strong defensive base from the bottom mount. Place both feet flat on the mat with your knees bent and feet positioned near your hips. Create distance by pushing your opponent's hips back slightly with your hands on their torso. Drive your hips up explosively, creating a bridge—your weight should be on your feet and upper back, lifting your opponent several inches off your chest. As you bridge, simultaneously grab your opponent's arm (typically the same side you want to roll toward) with both hands, controlling it across your body. Keep your grip tight and pull that arm close to your torso. Drive your hips in the direction of that trapped arm while continuing upward momentum. Use your leg drive to shift your weight, rolling your opponent over that shoulder. Complete the roll by following your opponent over the top, attempting to land in a dominant position like side control or mount. Timing is critical—coordinate the hip drive, arm pull, and leg pressure simultaneously for maximum effectiveness.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Success depends on several critical details. First, the bridge must be explosive and high—a weak bridge won't create enough space or momentum. Your grip on the opponent's arm must be firm and the arm pinned against your chest, preventing them from base-building. Many students fail to commit fully to the roll, moving too slowly and allowing their opponent to post out. Posting is your opponent's primary defense—they'll try to post their hand or arm on the mat to prevent rolling. Counter this by controlling their arm before and during the bridge. Another common mistake is poor foot placement initially. Your feet should be close to your body, roughly hip-width apart, giving you maximum leverage. Don't point your toes or let your feet slide during the escape. Some practitioners bridge too early, telegraphing the technique. Instead, disguise your intention and time the bridge to coincide with pulling the arm. Finally, maintain control after the roll completes—many students lose their opponent or end up in neutral position rather than a controlled top position.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The bridge and roll is most effective when your opponent is sitting upright in mount with weight distributed relatively evenly. If they're posturing up and controlling your head, the escape remains viable but requires more explosive effort. This technique works well against opponents who have a higher center of gravity or less base stability. In positional awareness, use the bridge and roll when your opponent's arm placement gives you a clear target to control. If both of their arms are overhead or extended, you have more flexibility. However, if they're keeping their arms tight and driving pressure through their shoulders, other escapes like the elbow escape might be more appropriate. This technique is fundamental for all belt levels but requires confidence and commitment—hesitation allows your opponent to post and defend. It's particularly valuable in competition because it's a fundamental escape that judges expect to see rather than complex submissions or sweeps. The bridge and roll should be a primary tool in your mount escape arsenal before developing more advanced techniques like arm traps or leg lock combinations from bottom mount.</p>
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
