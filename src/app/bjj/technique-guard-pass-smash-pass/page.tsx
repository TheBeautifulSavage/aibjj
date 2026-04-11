import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Smash Pass: Complete BJJ Guard Pass Guide | AIBJJ",
  description: "Master the smash pass in BJJ. Learn step-by-step setup, key details, common mistakes, and strategic applications for this fundamental guard pass.",
};

export default function Page() {
  const tags = ["guard pass", "smash pass", "bjj technique", "positional control"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Smash Pass: Complete BJJ Guard Pass Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the smash pass in BJJ. Learn step-by-step setup, key details, common mistakes, and strategic applications for this fundamental guard pass.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Guard Pass?</h2>
            <p>The smash pass is one of the most fundamental and effective guard passing techniques in Brazilian Jiu-Jitsu. It works by using your body weight to flatten and control your opponent while progressively moving your hips past their legs. Unlike flashy leg drag or knee slice passes, the smash pass relies on pressure, positioning, and leverage rather than speed or athleticism. The technique gets its name from the crushing pressure applied to the opponent's guard, literally smashing through their defensive structure. This pass is highly effective against closed guards, half guards, and even open guards. Beginners and advanced practitioners alike use this pass because it's based on sound positioning principles rather than explosive athleticism. The smash pass teaches crucial concepts about base, weight distribution, and control that translate to other passing techniques. It's particularly valuable when you need to maintain control while passing, making it ideal for competitions where stability matters more than speed.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start by establishing a strong base with your feet shoulder-width apart. Grip both of your opponent's sleeves or collar to control their upper body and prevent them from creating frames. Post your head to the side of their ribcage, not in the center of their chest. Break their closed guard by driving your hips down and forward while keeping your knees tight against their hips. This flattens their posture and makes it harder for them to create space. Once the guard is broken, immediately transition to knee on belly position or high mount positioning. As you advance, keep your weight distributed through your legs and hips, not just your upper body. Gradually shift one leg to the side while maintaining control of their arms. Keep constant downward pressure to prevent them from regaining guard or creating escape opportunities. Finally, establish side control by moving your hips to their side while keeping your upper body tight against theirs. Throughout the movement, maintain control of their arms or head to prevent underhooks or escapes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details make the smash pass work reliably. Keep your chest heavy on their chest, not allowing them to bridge effectively. Your head position matters enormously—it should be on the side, creating pressure on their ribcage rather than letting them frame your face. Avoid lifting your hips too early or you'll allow them to regain guard. Common mistakes include letting go of their sleeves prematurely, which allows underhook escapes. Many practitioners also fail to break the closed guard properly before attempting to pass, wasting energy. Don't post your hands too far forward—this extends your base and makes you vulnerable to sweeps. Another frequent error is rushing the pass instead of methodically advancing your position. Some students fail to control both arms, allowing the opponent to frame on their leg and escape. Finally, avoid standing up immediately after breaking the guard. Instead, maintain pressure in knee on belly or side control before transitioning away. Patient, technical execution of these details separates effective practitioners from sloppy ones.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The smash pass excels in specific situations and against particular opponents. Use it against opponents with strong leg lock games—the heavy top pressure and quick advancement limit their ability to attack your legs. It's ideal when your opponent has a closed guard and refuses to open it. The smash pass is particularly effective against larger, stronger opponents because it relies on position and leverage rather than speed. Use this pass when you prioritize control and positional dominance over speed. It's excellent in longer submission-only matches where maintaining position matters more than quick advancement. The smash pass works best when you have good hip mobility and can generate downward pressure. Avoid using it exclusively—combine it with other passes like knee slice or leg drag to keep opponents guessing. Use it against experienced guards who might counter faster passes. It's particularly valuable in training against technical opponents who'll punish poor positioning. The smash pass is fundamentally a conservative, pressure-based approach that builds excellent foundational skills.</p>
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
