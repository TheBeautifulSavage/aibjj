import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Rear Naked Choke: Essential BJJ Submission Guide | AIBJJ",
  description: "Master the rear naked choke setup, the most effective submission in BJJ. Learn proper positioning, hand placement, and finishing mechanics.",
};

export default function Page() {
  const tags = ["rear naked choke", "submission technique", "BJJ basics", "grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Rear Naked Choke: Essential BJJ Submission Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the rear naked choke setup, the most effective submission in BJJ. Learn proper positioning, hand placement, and finishing mechanics.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Rear Naked Choke?</h2>
            <p>The rear naked choke is a fundamental submission in Brazilian Jiu-Jitsu where you control your opponent from behind and cut off blood flow to the brain. Called 'naked' because it requires no gi lapels or sleeves, relying purely on your forearms and body positioning. This submission is one of the most reliable finishes in BJJ because escaping from true back control is extremely difficult. The choke works by restricting the carotid arteries on both sides of the neck simultaneously, causing your opponent to lose consciousness in seconds if they don't tap. It's a staple technique across all belt levels and competition formats. The rear naked choke teaches critical positioning principles: establishing back control, keeping your opponent close, and understanding proper hand placement. Mastering this technique provides a foundation for learning more advanced back control submissions and positional strategies that remain effective throughout your entire BJJ journey.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by establishing back control with your opponent on their back or in a bent-over position. Your chest should be glued to their back, with your legs hooking around their hips. Wrap your right arm across their throat with your forearm pressed against the side of their neck. Your palm should face inward, and your arm should be high and tight against their neck. Bring your left hand up and clasp it over your right forearm or grip your own bicep, depending on your hand size and leverage preference. Keep your grip hand relaxed initially. Now drive your right shoulder backward and downward while pulling your left hand toward your chest. This motion forces your right forearm deeper into their neck. Your head should be positioned on one side of theirs for better control. To finish, maintain constant pressure while your opponent's arms are controlled. Tilt your head back slightly while squeezing your legs and applying steady, controlled pressure. Avoid jerking motions; smooth, constant pressure is more effective and safer for both athletes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Hand placement is critical: your forearm must cross the front of the neck, not sit on the windpipe. Pressure comes from your forearm closing the carotid arteries, not crushing the throat. Many beginners position their arm too low on the neck, limiting effectiveness. Keep both hooks in place throughout the submission—losing hip control allows escape opportunities. Your body must remain connected; creating distance gives your opponent space to defend or escape. Don't rely solely on arm strength; your back and leg muscles provide the primary finishing power. A common mistake is sitting back too early before securing proper hand placement, which telegraphs your intentions and allows defensive positioning. Keep your head off the mat to prevent bottom position reversals. Stay patient—forcing the submission aggressively causes muscular tension that makes the choke less effective. Let the position do the work. Another error is gripping too tightly too early, which fatigues your arms unnecessarily. Maintain a controlled squeeze that gradually increases pressure as they defend. Finally, protect your grip hand from being pushed away by keeping your elbows tucked and maintaining close range.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The rear naked choke is primarily used when you've achieved back control, the dominant position in BJJ. This occurs when your opponent is on their back with you behind them, typically after sweeps, passes, or positional exchanges. Use this submission when your opponent is turtled up (on hands and knees) and you've controlled their back. It's effective in both gi and no-gi grappling, though hand control varies slightly between formats. In competition, prioritize using this when you have established back control with hooks secured, as it's one of the highest-percentage submissions available. During rolling, deploy it when your opponent uses their arms to defend or escape—as their arms defend, their neck becomes exposed. Use it strategically when your opponent is fatigued, as tired opponents struggle to defend submissions effectively. Avoid forcing this submission against opponents who haven't given you proper back control, as they can more easily defend or reverse. In self-defense scenarios, the rear naked choke is highly applicable because you can control your opponent while minimizing injury risk. Always ensure your opponent has tapped or the referee has stopped the match before releasing pressure.</p>
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
