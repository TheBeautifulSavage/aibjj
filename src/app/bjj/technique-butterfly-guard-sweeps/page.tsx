import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Butterfly Guard Sweeps: Complete BJJ Technique Guide | AIBJJ",
  description: "Master butterfly guard sweeps in BJJ. Learn setup, execution, key details, and strategic applications for effective bottom position control.",
};

export default function Page() {
  const tags = ["butterfly guard", "sweeps", "BJJ techniques", "grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Butterfly Guard Sweeps: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master butterfly guard sweeps in BJJ. Learn setup, execution, key details, and strategic applications for effective bottom position control.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Butterfly Guard?</h2>
            <p>The butterfly guard is a dynamic bottom position where you control your opponent's posture using your hooks and hand placement. Unlike closed guard, butterfly guard emphasizes explosive sweeping movements and superior leg positioning. Your hooks—typically placed on the inside of your opponent's thighs—serve as leverage points to disrupt their base and create opportunities for sweeps. This position is incredibly versatile because it works against standing opponents, seated opponents, and those attempting to pass. The beauty of butterfly guard lies in its offensive nature; you're constantly threatening with sweeps rather than just defending. Many modern BJJ athletes prefer butterfly guard over closed guard because it offers more aggressive options and better threat diversity. The position requires minimal flexibility compared to closed guard, making it accessible to grapplers of all body types. Butterfly guard became increasingly popular in modern BJJ through high-level competitors who demonstrated its effectiveness in both gi and no-gi competition. The constant threat of sweeps forces your opponent into reactive mode, allowing you to dictate the pace and flow of the match.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in a seated or semi-supine position with your opponent standing or kneeling close to you. Place both feet on the ground with knees bent, then insert your hooks—the inside of your shin or foot—on the inside of your opponent's thighs near the hip crease. Your hooks should be positioned where their leg meets their torso for maximum leverage. Grip their collar, sleeves, or underhook their arms depending on which sweep you're attempting. Maintain upright posture by engaging your core and keeping your chest up slightly. Your weight distribution should be balanced on your seat and hands. Before executing any sweep, break their posture by pulling them forward with your upper body control. Your hooks must stay tight and engaged throughout—any slack reduces sweep effectiveness. Generate momentum by explosively extending your legs while simultaneously pulling with your hands and upper body. The timing of these actions must be coordinated; rushing your leg extension before securing proper grips will result in a failed sweep. Keep your elbows tight to your ribs and maintain constant pressure on their hips with your hooks. Practice the entry repeatedly until the hook placement becomes automatic.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most critical detail in butterfly guard sweeps is hook placement—they must be high and tight on the thighs, not on the knees or shins. Low hook placement gives you mechanical disadvantage and reduces sweep efficiency dramatically. Many beginners fail to break their opponent's posture before attempting sweeps; you must pull them forward first to eliminate their ability to base out. Common mistake: not maintaining hook engagement during the sweep. Loose hooks allow your opponent to step back and base out successfully. Another frequent error involves poor hand placement; your grips must control their upper body, not just their arms. Beginners often squeeze their legs together instead of extending explosively—butterfly sweeps require powerful hip extension, not leg pressure. Timing is crucial; extending your hips too early telegraphs the sweep and allows counters. Control your opponent's hands to prevent them from posting and base out during execution. Many grapplers neglect follow-up positioning; after sweeping, immediately establish dominant control rather than backing away. Practice against resisting opponents at moderate intensity to develop proper timing and pressure sensitivity. Your core engagement prevents you from collapsing backward during the sweep execution.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>Butterfly guard sweeps are most effective when your opponent is standing close or advancing aggressively into you. Use them immediately when someone tries to pressure pass your guard or advances with heavy posture. They work exceptionally well against taller opponents whose longer legs make other guard options difficult. Butterfly sweeps shine in scrambles where quick transitions matter; the explosive nature catches rushing opponents. Use butterfly guard when your opponent bases wide—their wide base actually increases your sweep success rate. This position excels in no-gi competition where grips are less secure and positional control matters more. Butterfly sweeps transition beautifully into leglocks, arm drags, and submission attempts once you gain top position. They're particularly effective against opponents who prefer standing pressure passing styles. If someone likes to post their hands aggressively, butterfly guard sweeps punish that tendency. Use this guard when you need to be constantly offensive rather than reactively defensive. Butterfly guard works well in self-defense scenarios because the explosive sweeping nature creates space and positional advantages. Tournament competitors should emphasize butterfly guard when facing opponents who fear bottom position activity. The constant sweep threat prevents opponents from settling into comfortable passing sequences. Combine butterfly guard with other guard systems—it's most powerful when mixed with closed guard, X-guard, or leg lock attacks.</p>
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
