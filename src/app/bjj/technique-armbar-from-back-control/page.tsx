import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Armbar from Back Control: Complete BJJ Guide | AIBJJ",
  description: "Master the armbar from back control with step-by-step instructions, key details, and strategic applications for all skill levels.",
};

export default function Page() {
  const tags = ["armbar", "back control", "submissions", "BJJ techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Armbar from Back Control: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the armbar from back control with step-by-step instructions, key details, and strategic applications for all skill levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Armbar?</h2>
            <p>The armbar from back control is a fundamental joint lock that targets the opponent's elbow by hyperextending the arm. While armbars are commonly taught from mount position, executing one from back control offers unique advantages due to the positional control you already possess. This submission capitalizes on the back control's dominance by isolating an arm and applying lever pressure through your legs and hips. The technique is effective at all belt levels and is a staple finish when opponents defend against rear-naked choke attempts. From back control, the armbar becomes a seamless transition when your opponent posts their arm to escape or defend their neck. Understanding this submission gives you multiple finishing options from one of Brazilian Jiu-Jitsu's most dominant positions. It's particularly valuable because it forces opponents into difficult decisions: defend the choke or risk their arm.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin with solid back control, maintaining both hooks and seat belt grip. When your opponent posts an arm to create space or defend the rear-naked choke, immediately trap that arm with your grip. Shift your hips slightly to the side of the trapped arm, then unhooked your leg on that side and place your foot on their hip for base. Thread your same-side leg over their trapped arm, positioning your knee near their armpit. Keep your other leg hooked to prevent escape. Now transition by lying back, using your legs to pull their arm straight. Your trapped arm should control their wrist while your legs create the lever. Square your hips and drive them forward, applying pressure through your thighs on their upper arm and elbow. The key is keeping their arm trapped against your chest initially, then extending it across your body as you execute. Maintain the seat belt grip with your free hand to control their torso and prevent rolling. The finish comes from extending their arm while driving your hips forward and squeezing your legs.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most critical detail is establishing complete arm isolation before transitioning. Many practitioners attempt the armbar too quickly, allowing the opponent to pull their arm free. Ensure their arm is fully trapped between your legs with nowhere to escape. Keep consistent pressure throughout the transition—any slack allows escape opportunities. A common mistake is lying back too aggressively before securing position, which gives opponents space to turn into you. Instead, control their posture first, then lie back smoothly. Don't forget to remove your hook on the trapped arm's side; many students keep both hooks, which prevents proper leg positioning. Your free arm should maintain the seat belt grip to control their torso and prevent rotation. Another error is allowing their elbow to bend—keep constant pressure to prevent this. The arm should be fully extended against your body before you finish. Finally, don't neglect hip pressure; drive your hips forward actively during the finish rather than relying solely on leg squeezing.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The back control armbar is ideal when opponents post their arm to create separation from the choke. It's perfect for situations where the rear-naked choke is defended but you maintain control. Use this submission when rolling with opponents who aggressively post their arms rather than turning into you. It's especially effective against larger opponents who use arm strength to escape the back control, as it punishes their defensive posting. This technique works well in competition when you need a finisher from back control, as it's faster than repeatedly adjusting for the choke. Incorporate it into your game when opponents show patterns of escaping choke setups by posting arms. The armbar also works well as a pressure pass alternative—if they're defending the choke effectively, switching to this submission keeps them uncomfortable and defensive. In training, use it to keep your back control skills diverse and prevent opponents from developing reliable defenses. It's particularly valuable in no-gi grappling where choke defenses are stronger. Overall, this submission transforms back control into a more complete attacking position with multiple submission options.</p>
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
