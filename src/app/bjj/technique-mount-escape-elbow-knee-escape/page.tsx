import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Mount Escape: Elbow Knee Escape Guide | AIBJJ",
  description: "Master the elbow knee escape from mount position. Learn step-by-step setup, key technical details, and when to apply this fundamental BJJ escape.",
};

export default function Page() {
  const tags = ["mount escape", "elbow knee escape", "BJJ fundamentals", "positional defense"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Mount Escape: Elbow Knee Escape Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the elbow knee escape from mount position. Learn step-by-step setup, key technical details, and when to apply this fundamental BJJ escape.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Mount Escape?</h2>
            <p>The elbow knee escape, also called the elbow escape or shrimp escape, is one of the most fundamental mount position defenses in Brazilian Jiu-Jitsu. When an opponent controls you from the mounted position, this technique allows you to create space, bridge your hips, and transition toward a more advantageous position. The escape derives its name from the primary mechanics: driving your elbow into your opponent's knee while simultaneously bridging and shrimping your hips laterally. This escape is essential foundational knowledge taught to all beginning BJJ students because it applies pressure intelligently without requiring significant strength. The technique works by exploiting the biomechanical weakness in the mounted position when you can disrupt your opponent's base and create distance. Once mastered, this escape provides consistent success regardless of size or strength differences, making it invaluable for smaller practitioners.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start from a defensive mount position: both hands should be up protecting your face and neck, with your elbows tucked close to your body. Place both feet flat on the mat with knees bent, positioned outside your opponent's hips. Control your opponent's hands or posture to prevent punches and submissions. Begin the escape by bridging explosively upward through your hips and lower back while simultaneously driving one elbow (typically the same side as your escape direction) down into your opponent's knee. This creates immediate instability in their position. As you bridge, shrimp your hips laterally away from your opponent, moving the opposite knee toward your chest. Your bottom leg extends underneath their leg to create additional pressure. Push off with your feet and drive your elbow continuously into their knee. The combination of the explosive bridge, elbow pressure, and hip shrimping forces your opponent off balance. Rotate your hips to create space and transition to either a guard position or continue moving toward side control escape if they try to follow.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical technical details make this escape effective. Timing your bridge explosively is essential—hesitant or slow bridges allow your opponent to adjust their weight. Drive your elbow into the softer inside portion of their knee rather than the kneecap. Keep your head centered to avoid giving up positional control. Your feet must remain flat and engaged on the mat to generate power; lifting your heels reduces bridge effectiveness. Many beginners make the mistake of only bridging without proper hip shrimping, which wastes energy. Others thrust their hips upward but fail to shrimp laterally, never creating adequate escape space. Avoid pushing straight up—the escape requires both vertical bridge AND horizontal shrimp movement simultaneously. Don't neglect hand positioning; protecting your face remains important even during the escape. Some practitioners abandon the escape too quickly instead of committing fully to the movement. The elbow pressure must be continuous, not just a single push. Finally, timing your leg extension correctly ensures your opponent cannot simply reestablish mount after your initial bridge.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The elbow knee escape works best against high-mount positions where your opponent sits upright or uses minimal pressure. This escape is your primary tool when mounted but unable to establish a solid guard. Use it when your opponent isn't actively threatening submissions or controlling your hands heavily. The escape excels when you have space to generate power with your bridge. Against aggressive hand-fighting opponents using collar and sleeve grips, creating space through this escape may allow you to establish a guard or reverse position. Use this escape as a starting point before transitioning to more advanced techniques like trap and roll or other mount escapes. It's most effective when opponents lack base control or when they're extending their hips too far forward. The elbow knee escape becomes less effective against opponents applying heavy cross-face pressure or controlling your hips with their legs tightly pinched. In these situations, you might need frame-based escapes instead. This technique is fundamental for all belt levels but forms the cornerstone of white and blue belt mount defense. Even advanced practitioners employ this escape as a baseline option before attempting more technical alternatives.</p>
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
