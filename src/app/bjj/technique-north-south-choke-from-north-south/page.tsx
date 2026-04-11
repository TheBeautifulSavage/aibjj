import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "North South Choke: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the north south choke from top position. Learn setup, execution, and defense strategies for this powerful submission technique.",
};

export default function Page() {
  const tags = ["north south choke", "choke techniques", "top position", "BJJ submissions"];
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
        <h1 className="text-4xl font-black sm:text-5xl">North South Choke: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the north south choke from top position. Learn setup, execution, and defense strategies for this powerful submission technique.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the North South Choke?</h2>
            <p>The north south choke is a powerful submission executed from the north south position where you control your opponent's neck using your arms while positioned perpendicular across their body. This technique capitalizes on the dominant position to apply pressure to both sides of the neck simultaneously. The choke works by restricting blood flow to the brain through carotid compression, making it a highly effective finishing move in both gi and no-gi grappling. What makes this choke particularly valuable is its efficiency—you're already in an advantageous position, so minimal adjustments are needed to transition into the submission. The technique is popular among all skill levels because it's relatively straightforward to learn yet incredibly difficult to defend once properly applied. Understanding the north south choke significantly enhances your top game control and submission arsenal, giving you a reliable finishing option when your opponent is trapped beneath you.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by establishing a strong north south position with your chest perpendicular to your opponent's torso. Your head should be near their hip while your lower body extends toward their head. First, underhook your opponent's far arm to prevent escape and create control. From here, clasp your hands together around their neck, positioning one arm across the front of their throat. Your forearm should be directly on the carotid artery on one side of their neck. Drive your shoulder into their neck while maintaining chest-to-chest contact to increase pressure. Keep your hands locked tightly and avoid relying solely on arm strength—instead, use your body weight and hip pressure. Your legs should be sprawled and grounded for stability. As you apply pressure, lean your weight slightly forward and down, forcing their head into the mat. Your opponent's trapped arm beneath you limits their defensive options. Gradually increase pressure while controlling their hips with your legs to prevent escapes. The submission should feel like steady, methodical pressure rather than explosive force.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details separate an effective north south choke from an ineffective one. Ensure your choking arm is positioned on the carotid artery, not the windpipe—this creates a blood choke rather than an air choke, which is more effective and safer. Maintain constant chest pressure; this prevents your opponent from creating space to relieve the choke. Your grip must be absolutely locked; any gap allows escape opportunities. A common mistake is positioning yourself too far to one side, which reduces your weight distribution and control. Many grapplers also fail to underhook the far arm properly, allowing their opponent to post and create escape angles. Another error is using only arm strength rather than body weight and leverage. Never crank aggressively on the neck—apply steady pressure and let gravity and positioning do the work. Keep your hips low and engaged to prevent your opponent from bridging you off. Avoid crossing your legs or creating instability; you need a solid base to maintain dominance throughout the submission.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The north south choke is ideal when you've achieved dominant top position and your opponent is defending against other attacks. Use it when they're defending their neck with their hands, as your positioning makes hand defense nearly impossible. This submission works exceptionally well against taller opponents where other chokes might be difficult to set up. The technique is particularly valuable in competition when you're ahead on points and need a submission to secure victory. In training, use it when your opponent is flattened out and unable to create meaningful defensive space. The north south choke shines against opponents who try to bridge or shift their hips—their movement often accelerates the choke's effectiveness. It's less ideal against opponents who maintain active frames or who have escaped to their side, as you lose positional control. The choke works in both gi and no-gi environments, though gi lapels can sometimes provide alternative gripping options. Time your submission attempt when your opponent is tired or distracted, as fatigue reduces their defensive coordination and escape ability.</p>
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
