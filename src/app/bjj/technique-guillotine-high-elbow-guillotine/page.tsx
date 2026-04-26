import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "High Elbow Guillotine: Complete BJJ Guide | AIBJJ",
  description: "Master the high elbow guillotine choke. Learn setup, mechanics, common mistakes, and strategic applications for gi and no-gi grappling.",
};

export default function Page() {
  const tags = ["guillotine choke", "neck choke", "submission", "no-gi"];
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
        <h1 className="text-4xl font-black sm:text-5xl">High Elbow Guillotine: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the high elbow guillotine choke. Learn setup, mechanics, common mistakes, and strategic applications for gi and no-gi grappling.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Guillotine?</h2>
            <p>The high elbow guillotine is a powerful front headlock submission where you control your opponent's neck with your arm while applying pressure using your elbow and chest. Unlike the traditional low elbow guillotine, the high elbow version positions your arm higher on the neck, creating a tighter squeeze and faster submission. This variation is particularly effective in no-gi grappling and modern BJJ competition. The high elbow position prevents your opponent from defending by turning into you, making it more reliable than older variations. It works from multiple positions including top control, scrambles, and collar tie situations. The technique targets the carotid arteries, causing blood flow restriction to the brain. The high elbow guillotine has become increasingly popular among elite competitors due to its efficiency and difficulty to defend. It's considered a fundamental submission for both gi and no-gi practitioners and should be part of every grappler's arsenal.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start from a clinch position or when your opponent's head is accessible in front of you. First, wrap your arm around your opponent's neck with your elbow positioned high and close to the side of their neck. Your arm should resemble an anaconda wrap, with your bicep controlling one side of the neck. Clasp your hands together firmly, securing the grip. Position your body perpendicular or slightly angled to your opponent, with your shoulder driving into their chest. Keep your elbows tight against your ribs. Now apply pressure by pulling your hands toward your hip while simultaneously driving your shoulder forward and rotating your hips. The high elbow creates a mechanical advantage that compresses the neck effectively. Tighten the squeeze gradually, feeling for the resistance in your opponent's neck. Keep your forearm wrapped tightly, avoiding gaps that allow escape. Your grip should be unbreakable, using both hand strength and body positioning. As you apply pressure, monitor your opponent's responses and adjust angle slightly for optimal compression on the carotid arteries.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most critical detail is elbow placement. Your elbow must sit high on the neck, not on the shoulder, to maximize pressure and minimize defense options. Keep your grip hand position tight against your body to prevent your opponent from turning into the choke. A common mistake is squeezing too early before achieving proper position, telegraphing the submission and giving your opponent time to defend or escape. Many grapplers fail to angle their body correctly, reducing mechanical advantage. Another error is allowing your opponent to get their chin down or turn their head, which creates space and reduces effectiveness. Don't grip too loosely or your opponent can slip free. Avoid letting your elbow flare out, which weakens pressure. Some practitioners make the mistake of pulling down with their hands instead of maintaining squeeze and driving forward with their body. Ensure you're controlling your opponent's posture while applying the choke. Lastly, don't neglect the subtle body positioning adjustments that maximize compression. The high elbow guillotine requires precision in several areas simultaneously for reliable success.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The high elbow guillotine excels in scramble situations where your opponent's head comes forward during positional exchanges. It's particularly effective from top control when you break your opponent's grip and their head comes toward you. Use it against opponents who are trying to shoot takedowns or when they clinch aggressively. This choke is excellent in no-gi competition where collar-based submissions are unavailable. It works well as a setup tool when your opponent defends against other techniques and their posture breaks. The technique is valuable when you're in front headlock position or when transitioning between positions. Use it against opponents who try to turn their head into your grip, as the high elbow prevents this escape route. It's effective in scrambles from bottom control when you achieve front headlock access. The guillotine works well in transitions when your opponent is moving toward you or trying to stack you. It's particularly useful against smaller opponents who can't bridge effectively to escape. The technique is ideal for finishing submissions quickly when time is limited. It's also valuable as a threat that forces your opponent to respect your position, opening other submission opportunities and positional advances.</p>
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
