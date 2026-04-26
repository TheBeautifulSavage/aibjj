import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Worm Guard: Keenan Cornelius System Guide | AIBJJ",
  description: "Master the Worm Guard with Keenan Cornelius's innovative system. Learn setup, mechanics, escapes, and how to dominate from bottom leg lock position.",
};

export default function Page() {
  const tags = ["worm guard", "keenan cornelius", "leg lock", "bottom position", "advanced bjj"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Worm Guard: Keenan Cornelius System Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the Worm Guard with Keenan Cornelius's innovative system. Learn setup, mechanics, escapes, and how to dominate from bottom leg lock position.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Worm Guard?</h2>
            <p>The Worm Guard is an unconventional bottom leg lock position pioneered by Keenan Cornelius that transforms a seemingly defensive posture into an aggressive attacking system. Rather than playing traditional guard, you position your leg around your opponent's leg while controlling their upper body, creating a unique entanglement that threatens devastating leg lock attacks. The position gets its name from the worm-like leg wrapping mechanics. This guard challenges conventional BJJ hierarchy because it operates from a compromised bottom position while maintaining extreme danger. Keenan's system revolutionized how competitors approach leg lock exchanges, emphasizing leg lock supremacy in modern BJJ. The Worm Guard excels against larger, stronger opponents since it doesn't rely on upper body strength or athleticism. Instead, it leverages leverage, geometry, and positional awareness. Players using this guard threaten heel hooks, knee reaps, and calf slicers from positions where opponents feel temporarily safe. The position requires exceptional timing, footwork, and understanding of leg lock mechanics to execute effectively and transition smoothly between submissions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start from bottom guard as your opponent stands or postures up. Immediately hook one leg around their near-side leg, typically by wrapping your foot around their calf or knee. Position your grip carefully on their torso or gi, preventing them from passing. Create a high-elbow frame on their chest while maintaining the leg wrap. Keep your bottom leg straight and positioned for immediate leg lock attacks. Your top leg should wrap tightly, controlling their movement. Control their posture by pulling them into you, preventing them from creating distance. Position your hips slightly off-center, allowing you to manipulate their base. Your head positioning matters enormously—keep it positioned to defend passes while maintaining offensive pressure. Once established, rotate your hips to elevate their leg, creating submission angles. The wrapping leg should apply constant pressure, preventing them from extracting the leg. Maintain connection through both upper and lower body simultaneously. Practice transitioning between different leg lock attacks from this position, including heel hooks and knee reaps. The setup appears casual, but every element serves the subsequent attack chain.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details distinguish effective Worm Guard usage from sloppy attempts. Grip strength matters less than precise positioning—focus on geometry over muscular control. Keep your wrapped leg's pressure consistent and directed toward their centerline, not just around their limb. Your upper body frame prevents postural passes that would flatten your position. Many practitioners fail by maintaining the guard passively rather than actively attacking with leg locks. The position isn't about stalling; it's about constant offensive threat. Your free leg positioning determines which submissions become available—angle it for heel hooks, reaps, or calf slicers based on their defense. Common mistakes include wrapping too loosely, allowing easy leg extraction, or positioning your hips too centrally. Never lose upper body control while focusing on leg lock mechanics. Your grip should prevent them from base-building or posting away. Timing matters tremendously—attack submissions the moment they defend the primary threat. Avoid committing so deeply to one submission that you abandon defensive principles. Maintain hip mobility and flexibility for transitioning between attacks. Understand that this guard demands active participation and constant offensive movement rather than passive positioning.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The Worm Guard excels in specific strategic situations rather than all guard positions. Use it against opponents who stand aggressively or frequently posture, as it directly counters these actions. This guard shines when facing larger, stronger competitors who would otherwise dominate positional exchanges. It works particularly well against players unfamiliar with leg lock systems or defending from entangled positions. Tournament settings reward the Worm Guard's submission-focused nature, especially in submission-only competition formats. This guard struggles against experienced leg lock defenders who understand frame-building and base manipulation. Avoid using it against opponents with exceptional footwork and hip mobility unless you're highly proficient. It's less effective against athletes who immediately extract their leg or pass with aggressive pressure. The Worm Guard requires exceptional cardio capacity since constant offensive engagement exhausts energy quickly. Use this position when you've already established leg lock familiarity and understand escape mechanics thoroughly. Integrate it gradually rather than relying on it exclusively from the beginning of matches. Combine it with traditional guard variations to prevent becoming predictable. Advanced practitioners layer Worm Guard attacks with transitions to other leg lock positions, creating relentless offensive pressure that overwhelms even excellent defensive opponents.</p>
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
