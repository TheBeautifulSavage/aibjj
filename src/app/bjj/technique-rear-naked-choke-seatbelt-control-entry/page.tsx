import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Rear Naked Choke from Seatbelt Control | AIBJJ",
  description: "Master the rear naked choke using seatbelt control entry. Learn step-by-step setup, positioning, grip mechanics, and common mistakes to avoid.",
};

export default function Page() {
  const tags = ["rear naked choke", "seatbelt control", "submissions", "back control"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Rear Naked Choke from Seatbelt Control</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the rear naked choke using seatbelt control entry. Learn step-by-step setup, positioning, grip mechanics, and common mistakes to avoid.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Rear Naked Choke?</h2>
            <p>The rear naked choke is one of Brazilian Jiu-Jitsu's most effective and fundamental submissions. It's applied from the back control position and works by cutting off blood flow to the brain through compression of both carotid arteries. The 'seatbelt control' entry is a modern approach that emphasizes positional security before attempting the choke. Instead of immediately threading the choke, you first establish what's called 'seatbelt control'—a grip configuration where one arm wraps around the opponent's torso with the hand gripping the opposite lapel or wrist. This control system prevents escape attempts and keeps your opponent pinned against your chest. Once seatbelt control is established, transitioning to the rear naked choke becomes significantly safer and more efficient. This technique is fundamental across all BJJ levels because it teaches proper back control mechanics while developing grip strength and positional awareness. Understanding this entry method helps practitioners develop a logical progression from establishing dominance to executing the submission.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>First, establish solid back control with both hooks in place—your feet hooked inside your opponent's thighs. Your chest should be glued to their back, and your head position tight against theirs. From here, wrap your near-side arm around their torso at chest height, securing the seatbelt grip by threading your hand through and gripping their far-side lapel or wrist. This arm locks them into place. Keep your hips low and prevent them from rolling by maintaining hook pressure. Once seatbelt control feels secure and your opponent can't escape, transition to the choke. Bring your other arm up their back, threading it across their neck from the opposite side. Your arm should be high on the neck, not the chin. Lock your hands together—either by clasping fingers or threading your hand through your opposite collar grip. Keep your chest tight to their back and drive your elbows inward while pulling their head back onto your chest. The pressure should feel gradual and controlled. Common setup mistakes include loose hooks, inadequate seatbelt control, or rushing the choke before establishing full dominance.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Proper positioning is everything with this technique. Your hooks must be deep and active—constantly squeezing to maintain back control. Many practitioners focus solely on the choke grip while neglecting overall back position, allowing escapes. Your seatbelt arm should create an absolute seal around their torso; this prevents turning and creates the foundation for successful submission. When threading the choke, angle your choking arm so your forearm sits high on the neck. Placing it too low targets the trachea instead of the carotid arteries, which is less effective and potentially dangerous. Keep your grip hand relaxed and use body position rather than arm strength—this prevents arm fatigue and allows you to maintain the submission longer. Common mistakes include excessive gripping pressure early (telegraphing your intent), poor posture (letting them turn into you), and releasing seatbelt control prematurely. Always ensure your opponent can tap safely and watch for submissions signs like facial flushing or eye closure. Maintain control throughout the escape process.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The seatbelt control entry to rear naked choke is ideal for positions where your opponent is actively defending against traditional choke setups. If they're gripping your choking arm or tucking their chin, seatbelt control allows you to neutralize these defenses first. This approach works exceptionally well in roll situations where your opponent has good back escape awareness. The seatbelt entry is also valuable when you're fatigued—the positional control lets you rest while maintaining dominance before committing to the submission. Use this technique against higher-level competitors who understand choke defense, as the added control element makes them harder targets. It's particularly effective when your opponent is moving around excessively on your back; the seatbelt grip immediately dampens their mobility. This entry is also excellent for teaching fundamentals since it emphasizes control before finishing. In no-gi grappling, seatbelt control becomes even more valuable since traditional collar-based controls are unavailable. The technique transitions smoothly into other submissions if the choke isn't available, making it tactically flexible.</p>
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
