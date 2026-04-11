import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Over Under Guard Pass: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the over under guard pass in BJJ. Learn setup, execution, key details, and strategic applications for effective guard passing.",
};

export default function Page() {
  const tags = ["guard pass", "over under pass", "BJJ techniques", "positional control"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Over Under Guard Pass: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the over under guard pass in BJJ. Learn setup, execution, key details, and strategic applications for effective guard passing.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Guard Pass?</h2>
            <p>The over under pass is a fundamental BJJ guard passing technique where you control one of your opponent's legs with an underhook while the other arm wraps over their opposite leg. This creates a powerful crossface pressure that neutralizes their guard and advances your position toward side control or mount. The pass is highly effective against closed guard, half guard, and open guard variations because it uses upper body pressure combined with leg control to bypass your opponent's defensive frames. Unlike leg-drag or knee-cut passes that rely on footwork, the over under emphasizes upper body dominance and crushing pressure. It's considered a staple technique in modern BJJ because it works across all belt levels and requires minimal athleticism once properly understood. The pass is also known as the over under pin or crush pass, and it's a go-to technique for larger, stronger grapplers. However, with proper hip movement and timing, smaller athletes can execute it effectively by using leverage rather than pure strength.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start from a standing position controlling your opponent's closed guard. Post your hands on their chest and drive forward to open their guard or encourage them to open it. Once their legs are open, immediately drop to your knees and establish base. Cup both of their legs with your hands while maintaining upright posture. Drive your right shoulder under their right leg, creating an underhook while simultaneously wrapping your left arm over their left leg, gripping the far hip or knee area. Your head should be positioned on their chest to prevent armbars. Tighten your grip and drive forward, using your shoulder underhook as the primary control point. Keep your elbows tight to your body and maintain constant pressure. Your weight distribution is crucial—stay balanced on your knees rather than sitting back. As you advance forward, your opponent's hips naturally flatten, and their guard opens completely. Continue driving until you establish knee slice or side control position. Throughout the technique, maintain contact with their body and avoid creating space that allows escapes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical technical details make or break the over under pass. First, the underhook placement matters significantly—it should be deep under their leg, not just on the thigh. Second, maintain constant pressure with your shoulder; backing off allows them to frame. Third, control the crossface tightly to prevent them from creating space. Common mistakes include sitting back too early, which gives them leverage for hip escapes. Never let your head come forward past their shoulders, as this invites armbars and shoulder locks. Avoid posting your hands on the ground excessively—keep pressure maintained instead. Don't pass too wide; instead, stay centered. Many beginners release the grip too early, allowing guard re-establishment. If they achieve a frame on your neck, adjust by driving your underhook deeper and rotating your shoulder into their body. If they attempt to invert, maintain pressure and avoid extending your limbs. Practice maintaining the position statically before trying explosive advancement—control trumps speed in this pass.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The over under pass excels in specific situations. Use it when your opponent's guard is open or when they're being defensive rather than attacking. It's particularly effective when you establish early pressure from standing—before they develop strong leg positioning. The pass works well when your opponent prefers closed guard or traditional guard positions rather than butterfly or deep half guard. If you're stronger or heavier, this pressure-based pass leverages that advantage effectively. Conversely, lighter athletes should time it when their opponent is recovering from submissions or movement. Avoid this pass if your opponent is exceptionally flexible or has strong inversion mechanics, as they can attack your back. It's less ideal against experienced half guard players who use underhook positioning defensively. The over under shines in tournament settings where stalling and positional advantages matter. In open mat, use it to establish control before transitioning to more dynamic passes. Combine it with leg drag or knee slice passes for variety—alternate techniques prevent your opponent from expecting and defending the same approach repeatedly. Master this as your foundational passing tool before adding complexity.</p>
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
