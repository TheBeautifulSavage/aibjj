import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Hip Bump Sweep: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the hip bump sweep, a fundamental BJJ technique for reversing guard position. Learn setup, execution, and timing strategies.",
};

export default function Page() {
  const tags = ["hip bump sweep", "guard sweeps", "BJJ fundamentals", "jiu-jitsu technique"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Hip Bump Sweep: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the hip bump sweep, a fundamental BJJ technique for reversing guard position. Learn setup, execution, and timing strategies.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Sweep?</h2>
            <p>The hip bump sweep is one of the most fundamental and effective sweeps in Brazilian Jiu-Jitsu. It's performed from the closed guard position and relies on timing, hip drive, and upper body control rather than leg strength. This sweep works by using your opponent's forward momentum against them, elevating their hips off the mat and reversing positions. The beauty of the hip bump sweep lies in its simplicity and effectiveness at all skill levels. Beginners can learn it quickly, while advanced practitioners use it as a high-percentage technique. It's particularly valuable because it doesn't require significant strength advantages and works well against larger opponents. The sweep transitions naturally into dominant positions like mount or side control, making it an essential tool in any grappler's arsenal. It's also an excellent teaching technique for understanding weight distribution, timing, and the importance of controlling the upper body during sweeps.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start from a solid closed guard position with good posture control. Grip your opponent's collar with one hand and their sleeve or arm with the other. Pull them down and into you to break their posture—they should feel compressed and unstable. Your legs should be wrapped around their torso with strong foot hooks behind their lower back. As your opponent attempts to posture up and create space, this is your moment to strike. Thrust your hips explosively upward while simultaneously pulling their upper body down toward you. Your hips should drive straight up, creating a lifting motion that elevates their center of gravity. At the peak of your hip thrust, shift your weight to one side while maintaining upper body control. Use your grip to guide them over your hip as you continue the sweeping motion. Your closed guard legs transition to a hook on the same side you're sweeping toward. Follow through with your entire body, rolling through to establish a dominant position. Timing is critical—execute the sweep as they're extending upward rather than when they're already committed to pressing.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most critical element is maintaining solid collar and sleeve control throughout the entire sweep. Many beginners lose their grip at the crucial moment, allowing their opponent to base out and prevent the reversal. Your posture should keep your head off the mat and your shoulders protected—don't lie flat with your head back as this compromises your control. Common mistakes include timing the sweep too early, before your opponent extends, or too late when they've already established base. The hip thrust must be explosive and directed straight upward, not backward. Using only your hips while neglecting upper body control will fail against experienced opponents. Another mistake is losing your closed guard hook position—you need strong leg tension throughout. Don't attempt this sweep against opponents who have strong base and excellent posture. Instead, work combinations to break their posture first. Your foot hooks matter tremendously; weak hooks allow escape. Some practitioners abandon the sweep too early instead of driving through completely. Practice the hip thrust motion repeatedly without a partner to develop the proper mechanics and explosiveness.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The hip bump sweep is most effective when your opponent is trying to posture up and create space within your guard. It works particularly well against opponents who sit back heavily or who extend their posture. Use this technique early in rolls to establish dominant positions and score points. It's excellent for lighter grapplers facing heavier opponents because it relies on timing and leverage rather than strength. The sweep shines when your opponent is fatigued and their base is compromised. Avoid attempting it against opponents with exceptional balance or those sitting completely back on their heels. Chain it with other guard attacks like arm drags, collar drags, or submissions to create effective combinations. If your opponent anticipates the sweep and bases out, transition smoothly to submissions like triangle chokes or armbars. The hip bump sweep works effectively in both gi and no-gi training. In competition, it's a high-percentage technique that scores two points and establishes a dominant position. Use it as an entry to mount position or to transition into other attacks. Understanding when your opponent is most vulnerable is crucial—catch them as they're moving rather than when they're already stable.</p>
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
