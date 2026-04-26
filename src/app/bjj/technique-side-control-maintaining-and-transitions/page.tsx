import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Side Control: Maintenance & Transitions Guide | AIBJJ",
  description: "Master side control positioning, maintenance techniques, and effective transitions to submissions and other dominant positions in BJJ.",
};

export default function Page() {
  const tags = ["side control", "positional control", "BJJ fundamentals", "grappling transitions"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Side Control: Maintenance & Transitions Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master side control positioning, maintenance techniques, and effective transitions to submissions and other dominant positions in BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Side Control?</h2>
            <p>Side control is one of the most dominant and controlling positions in Brazilian Jiu-Jitsu, where you are perpendicular to your opponent's body with their back against the mat. This position is fundamental to BJJ progression and is worth 3 points in competition. From side control, you control both your opponent's upper body and hips, limiting their mobility and escape options significantly. The position is considered a staple for catching breath, establishing dominance, and setting up powerful submissions. Unlike mount position, side control is mechanically easier to maintain against larger opponents and is less energy-intensive. It serves as a gateway position for transitioning to other high-percentage submissions like armbars, kimuras, and chokes. Side control demonstrates control and dominance, making it invaluable for both submission-focused and positional grapplers. Many BJJ instructors emphasize perfecting side control before advancing to more complex techniques.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>To establish side control from top position: First, secure a strong base with your legs wide and feet planted firmly on the mat. Position your body perpendicular to your opponent, with your chest parallel to their chest. Use your near-side arm to control their far arm, driving it across their body or pinning it to the mat. Your far-side arm should underhook their head or wrap around their neck for additional control. Keep your hips low and close to their body, preventing them from creating space or framing. Pressure your weight through your chest and shoulder into their torso. Your head position should be outside their head, not in front of their face where they can attack. Maintain connection through your shoulders and hips simultaneously. Keep your knees bent slightly for stability and to prevent the opponent from shrimping underneath you. Maintain constant pressure while staying relaxed to conserve energy and prevent fatigue that compromises control.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details for solid side control: maintain your weight distribution evenly across your entire body rather than concentrating pressure in one area. Keep your hips locked low to prevent escape attempts like the underhook or hip escape. Your shoulders should remain squared to your opponent's body to maximize pressure. Use your legs actively by keeping them engaged and mobile rather than dead weight. Common mistakes include lifting your hips too high, which allows shrimping escapes. Don't rely solely on arm pressure while neglecting hip control. Avoid posting your weight too far forward, which enables the opponent to roll you. Never relax your grip on the far arm, as this allows the opponent to frame and escape. Beginners often position their legs too close together, reducing stability. Don't look down at your opponent constantly; maintain awareness of their body position and hands. Avoid grinding your head into their face aggressively, which wastes energy and creates defense opportunities. The most effective side control feels heavy and inescapable, not painful or aggressive.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>Side control is most effective after passing the guard, making it an ideal follow-up to guard pass combinations. Use side control when you want to control a larger opponent with minimal energy expenditure. This position is perfect for setting up submissions like armbars, kimuras, and collar chokes. Side control is tactically valuable when you're ahead on points and want to run time while maintaining dominance. It's an excellent position for catching your breath and regrouping during intense matches. Side control transitions smoothly into mount position, knee on belly, or north-south when your opponent defends submissions. In no-gi grappling, side control is particularly effective since opponents lack gi lapels for defensive grip strength. Use side control against opponents who defend high-pressure positions like mount by bridging or bucking. It's strategically smart against submission-focused grapplers who hunt for strikes from bottom; side control limits their options. Side control is fundamental for developing positional awareness and control before pursuing advanced techniques. Many competitors build entire game plans around establishing and maintaining side control throughout matches, showcasing its fundamental importance.</p>
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
