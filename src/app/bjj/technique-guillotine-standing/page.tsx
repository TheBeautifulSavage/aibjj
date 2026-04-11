import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Standing Guillotine Choke: Complete BJJ Guide | AIBJJ",
  description: "Master the standing guillotine choke with our comprehensive guide. Learn setup, execution, and defensive counters for effective submissions.",
};

export default function Page() {
  const tags = ["guillotine choke", "standing submissions", "neck attacks", "BJJ techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Standing Guillotine Choke: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the standing guillotine choke with our comprehensive guide. Learn setup, execution, and defensive counters for effective submissions.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Guillotine?</h2>
            <p>The standing guillotine choke is a powerful neck submission executed from a standing position. It's one of the most effective techniques in BJJ because it catches opponents during transitions and takedown attempts. The submission works by applying pressure to both sides of the neck with your arm and body, cutting off blood flow to the brain. The standing version is particularly valuable because it's difficult to defend once properly applied, and you maintain positional control while executing it. Unlike seated or ground-based guillotines, the standing variation lets you control your opponent's posture while they're vulnerable. This technique has been used successfully at every competition level, from white belt tournaments to IBJJF world championships. The standing guillotine is especially effective when your opponent shoots a takedown, pulls guard, or ducks their head during exchanges. It's a fundamental submission that should be in every jiu-jiteiro's arsenal.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start by establishing control as your opponent shoots a takedown or ducks their head. As they lower their level, wrap your arm around their neck by threading your choking arm under their chin. Your arm should be positioned so your bicep and forearm frame their neck. Immediately clamp your opposite hand over your choking arm, interlocking your grip. The key is positioning your hands high on their neck, with your choking arm's bicep tight against one side of their neck. Step back slightly to create distance while maintaining your grip. Pull their head into your chest and apply pressure by contracting your arms and rotating your hips away. Their head should be tilted back, with your choking arm deep in their neck. Squeeze by bringing your elbows together and flexing your biceps. The pressure comes from your entire body, not just your arms. Ensure your grip is secure before fully committing. Practice the motion slowly first to understand the mechanics before applying full pressure.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Proper arm placement is critical—your bicep must compress the carotid artery, not your forearm. Many beginners place their arm too shallow, reducing choke effectiveness. Keep your hands high on the neck, avoiding the throat and windpipe, which can be uncomfortable for training partners. Your choking arm's grip hand should be clamped firmly by your opposite palm. A common mistake is not creating enough distance—step back to increase leverage and prevent your opponent from stacking you. Don't apply pressure too early; secure your grip first, then finish. Another error is positioning your body incorrectly; keep your chest close while creating hip distance for optimal pressure. Avoid telegraphing the choke by setting up slowly; transition quickly once the opportunity appears. Some practitioners fail to keep their opponent's head tilted back, reducing choke effectiveness. The submission should feel clean and technical, never relying on brute strength. Practice on willing partners to develop sensitivity and timing before using it competitively.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The standing guillotine works best during takedown attempts, particularly when opponents shoot from distance. It's extremely effective against high-level wrestlers who lower their head during entries. Use it when your opponent pulls guard and their head is accessible, or when they duck during scrambles. The submission shines in no-gi grappling where traditional gripping options are limited. It's especially valuable in transitions when opponents are vulnerable and repositioning. In competition, look for opportunities when your opponent commits to shooting, jumping guard, or engaging aggressively. The standing version is ideal for maintaining top position while finishing. Consider your opponent's experience level—more advanced grapplers may escape more easily, so timing is essential. Use the guillotine as a counter when opponents attempt takedowns you can't defend otherwise. It's particularly effective in MMA and self-defense situations where you need quick, decisive submissions. The technique works well in both gi and no-gi environments, though setup varies slightly. Train it regularly so you recognize opportunities instinctively during live rolling and competition.</p>
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
