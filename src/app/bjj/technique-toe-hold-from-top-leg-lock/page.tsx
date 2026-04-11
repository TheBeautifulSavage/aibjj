import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Toe Hold from Top Leg Lock: Complete Guide | AIBJJ",
  description: "Master the toe hold from top leg lock position. Learn setup, execution, and key details for effective leg lock attacks in BJJ.",
};

export default function Page() {
  const tags = ["leg lock", "toe hold", "submission", "footlock"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Toe Hold from Top Leg Lock: Complete Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the toe hold from top leg lock position. Learn setup, execution, and key details for effective leg lock attacks in BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Toe Hold?</h2>
            <p>The toe hold is a devastating leg lock submission that targets the foot and ankle by applying pressure through the toes. When attacking from the top leg lock position, you control your opponent's leg while isolating their foot to create a submission threat. The technique works by hyperextending the ankle or creating torsional pressure on the foot, forcing your opponent to tap. Unlike heel hooks or knee reaping attacks, the toe hold is legal at most belt levels, making it an accessible yet highly effective weapon. The top position offers excellent control and stability, allowing you to apply gradual pressure while maintaining dominance. This submission is particularly valuable because it's difficult to escape once properly locked, and the setup is straightforward from common leg lock positions. The toe hold demands technical precision and positional control, rewarding practitioners who understand leverage and pressure application principles.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin from the top leg lock position, controlling your opponent's leg with both hands. Establish a strong grip on their calf or shin area. Maneuver your body to position yourself perpendicular to your opponent's leg, creating an angle that allows foot access. With your hands controlling the leg, reach down and secure their foot by gripping around the toes and ball of the foot. Your fingers should curl underneath while your palm presses against the top of their foot. Lock your hands together, creating a figure-four grip if possible for maximum control. Position your hips low and heavy, using your weight to stabilize the position. Keep the foot isolated from their body to prevent them from using leg strength to defend. Apply pressure gradually by extending your arms while keeping the foot close to your torso. The pressure should increase from the toe hold gradually, giving your opponent time to recognize the submission and tap. Maintain control throughout, preventing any escape attempts by securing their upper leg with your body or hands.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical technical elements include maintaining isolation of the foot from the opponent's body and avoiding giving them leverage to counter. Many practitioners apply pressure too quickly without proper positional control, allowing escapes. Keep your grip firm but controlled, using finger and hand positioning rather than pure strength. Avoid positioning your hands in a way that allows your opponent to curl their toes, which reduces submission effectiveness. Common mistakes include losing top control by reaching too aggressively for the foot, positioning yourself where your opponent can roll into you, or applying lateral pressure instead of extension. The pressure should be primarily through ankle extension, not twisting. Keep your shoulders low and maintain weight distribution across their leg. Don't allow your opponent's free leg to create space or sweeping opportunities. Ensure proper hand placement before cranking, as rushing creates openings for escape. Maintain positional awareness during the submission attempt, as overzealous pressure can result in you losing position or being countered.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The toe hold shines when you've successfully secured top leg lock position, typically from passing the guard or entering leg lock entries. Use this submission when your opponent commits to leg lock defense, especially if they resist other ankle attacks like heel hooks or knee reaping. The technique works excellently against opponents who prioritize escaping to neutral position rather than countering with their own leg locks. Employ the toe hold when you have superior positional control and want to threaten submission without excessive risk. It's particularly effective in competition when you need a legal, reliable finishing option across all belt levels. This technique suits situations where your opponent is fatigued and struggling to defend leg attacks. The toe hold is valuable when your opponent has good footlock defense but lacks specific toe hold recognition. Use it as a setup for transitions to other leg lock submissions, creating pressure that forces responses you can exploit. In training, it's an excellent finishing move that demonstrates control rather than explosive athleticism, making it suitable for drilling with less experienced partners.</p>
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
