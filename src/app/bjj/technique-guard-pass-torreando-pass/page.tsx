import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Torreando Pass: Complete BJJ Guard Pass Guide | AIBJJ",
  description: "Master the torreando pass, a fundamental BJJ guard pass using pressure and grip control. Learn setup, execution, and common mistakes.",
};

export default function Page() {
  const tags = ["guard pass", "torreando pass", "BJJ techniques", "positional control"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Torreando Pass: Complete BJJ Guard Pass Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the torreando pass, a fundamental BJJ guard pass using pressure and grip control. Learn setup, execution, and common mistakes.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Guard Pass?</h2>
            <p>The torreando pass, also called the 'bullfighter pass,' is one of Brazilian Jiu-Jitsu's most effective and commonly used guard passing techniques. Named after the bullfighting stance, it involves using your opponent's own legs as a barrier while you circle around them to establish side control or mount position.

Unlike leg-heavy passes that require significant strength, the torreando relies on superior positioning, timing, and pressure. You control your opponent's hips and legs from the outside rather than trying to smash through their guard. This makes it suitable for all body types and skill levels.

The pass works against closed guard, open guard variations, and even half-guard. It's particularly valuable because it doesn't require you to enter your opponent's danger zone, reducing submission risk. The technique emphasizes control principles that apply throughout your BJJ journey, making it essential for white belts and advanced practitioners alike.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in a squared-up, base-wide stance in front of your seated guard player. Step back slightly to create distance and establish a strong base. Place both hands on your opponent's hips with fingers pointing downward, maintaining a firm grip.

Push their hips backward hard while simultaneously stepping your feet wide and low. This movement prevents them from using their legs effectively. Keep your chest tall and your weight distributed evenly across both feet.

Once you've established hip control and created space, begin circling to one side while maintaining pressure. Drive your hips forward as you move, keeping their hips pinned. As you circle, rotate your torso, transitioning from hip control to chest-to-chest pressure.

When you've nearly completed your circle to their side, transition into side control by placing your near-side leg across their body and establishing proper side control mechanics: shoulder pressure, head placement, and hip control.

The key is maintaining constant forward pressure and preventing them from hip-escaping or re-engaging their guard during your movement around them.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details separate successful passes from sloppy attempts. Your base must remain wide throughout—narrow feet invite sweeps. Keep your chest engaged with their hips rather than using only arm strength. Use your legs' power, not just your arms.

Maintain constant downward pressure on their hips while circling. Hesitation allows them to recover their guard or create space for escapes. Your head should stay outside their leg line, protecting you from triangle attempts.

Common mistakes include moving too fast and losing control, allowing them space to reguard or sweep. Many players shift their weight prematurely before completely clearing the leg line. Avoid leaning backward—this reduces pressure and makes you vulnerable to upkicks.

Another frequent error is circling too wide, which gives them time to adjust their position. Maintain a tight circle with relentless pressure. Don't stop moving until you've achieved a dominant position.

Finally, some practitioners use excessive upper body strength instead of leveraging proper positioning. Remember that the torreando's effectiveness comes from superior positioning and timing, not muscular dominance alone.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The torreando pass excels in specific situations and against certain guard types. It's highly effective against closed guard, particularly when your opponent plays a more static guard without aggressive footlock attempts. Use it when they're flat on their back and haven't created significant frames.

This pass works well in positional exchanges where you need efficient, low-risk transitions. Because it keeps you outside their leg range, it's ideal when facing submission-heavy opponents or when you want to minimize danger exposure.

The torreando is particularly valuable in competitions where points and position matter most. It's fast, controllable, and consistently reaches side control or mount. Use it when you have established grip control and your opponent isn't explosively defending.

Against open guard variations with extended legs, the torreando can work by immediately using hip pressure to collapse their structure. However, against flexible leg lock specialists who isolate legs quickly, consider alternative passes.

The torreando is less effective against opponents using active frames or pushing your hips away. In these situations, you may need grip-heavy passes or leg-drag variations instead. Develop torreando proficiency as a core technique, then integrate it within a varied passing game for maximum effectiveness.</p>
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
