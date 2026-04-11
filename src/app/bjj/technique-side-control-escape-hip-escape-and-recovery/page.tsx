import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Side Control Escape: Hip Escape & Recovery | AIBJJ",
  description: "Master the hip escape from side control. Learn step-by-step setup, key technical details, and when to apply this fundamental BJJ defensive technique.",
};

export default function Page() {
  const tags = ["side control", "escapes", "hip escape", "defense", "fundamentals"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Side Control Escape: Hip Escape & Recovery</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the hip escape from side control. Learn step-by-step setup, key technical details, and when to apply this fundamental BJJ defensive technique.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Side Control Escape?</h2>
            <p>The side control escape, commonly called the hip escape or shrimp, is one of the most fundamental defensive techniques in Brazilian Jiu-Jitsu. When your opponent has mounted side control on you, they've established a dominant position with significant control over your torso and ability to transition into submissions or more advanced positions. The hip escape is your primary tool to create space, neutralize this pressure, and work toward recovery or reversal. This technique involves bridging your hips upward while turning into your opponent, creating enough separation to slip your leg underneath and regain guard or half-guard position. It's called the shrimp because your body motion resembles the curling action of a shrimp. Every BJJ practitioner must master this escape as it's one of the first techniques taught to beginners and remains effective at all competitive levels. The hip escape forms the foundation for more advanced side control defenses and escapes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>First, assess your opponent's pressure. Feel where their weight distribution is heaviest. Post your arm on the mat at chest level, palm down, creating a frame between you and your opponent's torso. This prevents them from collapsing into you. Next, place your far-side arm across their back or clasping their far shoulder for control. Bridge explosively by driving through your bottom foot, lifting your hips toward the ceiling while turning your body into them. Simultaneously, shrimp by bringing your bottom knee toward your chest and threading your leg under your opponent's hips. Your movement should be one fluid action: bridge, turn, and shrimp together. As you create space, transition your bottom leg under their hip while your framing arm controls their upper body. Once your leg passes their hip, immediately establish control by wrapping your leg around theirs or positioning for guard recovery. The entire movement must be explosive yet controlled—hesitation allows your opponent to re-establish pressure.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details determine success. Your frame is everything—keep your arm extended and elbows locked to prevent your opponent from crushing you. Frame on their chest or shoulder, not their arm. Your bridge must be powerful and explosive. Many beginners bridge too gently or slowly, allowing their opponent to maintain control. Generate power from your legs and glutes. Turn your entire body into them, not just your hips. Your head should follow your hips. Common mistakes include: not framing properly before attempting the escape, which allows your opponent to flatten you; hesitating during the movement, giving them time to react; not bridging high enough to create sufficient space; and failing to thread your leg completely under. Another error is pushing your opponent away instead of turning into them—this wastes energy and leaves you exposed. Many practitioners also fail to follow up properly after creating space, allowing their opponent to re-establish control immediately. Practice the motion slowly first to develop proper mechanics before adding explosiveness.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The hip escape is your primary response when caught in side control, especially during positional sparring and competition. Use it immediately when you first feel your opponent settle into side control, before they establish deep pressure or transition to submissions. The escape is most effective when your opponent maintains a high hips position—if they're heavy and low, the escape becomes more difficult. Timing matters significantly; execute it before they establish a chokehold or begin transitioning to knee on belly or mount. In training, this is your baseline escape before progressing to more advanced techniques like the underhook escape or reversal attempts. Competitive grapplers rely on the hip escape as a fundamental defensive tool throughout all belt levels. However, against experienced opponents with heavy pressure, you may need to combine it with arm drags or frame adjustments for effectiveness. Use the hip escape when space exists and your opponent hasn't fully secured their position. It's foundational—master this before attempting fancy alternatives. Against stronger opponents, explosive execution is crucial rather than relying on technique alone.</p>
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
