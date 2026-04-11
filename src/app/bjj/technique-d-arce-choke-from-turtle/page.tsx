import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "D'Arce Choke from Turtle Position Guide | AIBJJ",
  description: "Master the D'Arce choke from turtle position. Learn setup, execution, and strategic applications for BJJ competition and training.",
};

export default function Page() {
  const tags = ["D'Arce choke", "turtle position", "submission", "neck choke"];
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
        <h1 className="text-4xl font-black sm:text-5xl">D'Arce Choke from Turtle Position Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the D'Arce choke from turtle position. Learn setup, execution, and strategic applications for BJJ competition and training.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the D'Arce Choke?</h2>
            <p>The D'Arce choke is a powerful front headlock submission that applies pressure to the carotid arteries and throat. Named after Joe D'Arce, this technique is particularly effective from turtle position where your opponent is in a vulnerable defensive posture. The choke uses a figure-four arm configuration combined with leg pressure to create an extremely tight neck crank. From turtle, the D'Arce is especially dangerous because your opponent has limited options to defend or escape. The submission works by threading one arm under the chin and securing it with your other arm in a specific grip pattern. Unlike some submissions requiring precise angle adjustments, the D'Arce from turtle works across a wider range of positions due to the postural disadvantage your opponent already faces. This makes it an excellent technique for grapplers of all levels to develop.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>First, establish control when your opponent is in turtle position with their hips low and head down. Move to the side of their body, establishing your base near their torso. Place your inside arm (the one closest to their head) under their chin and neck. Thread this arm across their throat from the inside. Simultaneously, wrap your other arm around to meet the first arm, creating a figure-four grip by interlacing your fingers or clasping your hands together. Keep your elbows tight to your body and drive them downward toward your hips. Your free leg should hook under their armpit or around their leg for additional control and to prevent them from turning into you. Apply steady pressure by squeezing your arms together while driving your hips into their back. The choke works through a combination of arm pressure and body positioning rather than pure arm strength. Maintain control of their posture throughout by keeping their head tucked down against your chest.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The critical detail is arm placement: one arm goes deep under the chin while the other arm secures it from the opposite side. Many practitioners make the mistake of trying to apply the choke too early before establishing proper control, allowing their opponent to escape. Another common error is positioning the grip too high on the neck instead of deep under the chin where it's most effective. Ensure your grip is tight and secure before applying full pressure. Don't rely solely on arm strength; use your body weight and hip position to increase pressure. Keep your opponent's head controlled and prevent them from turning into your hips, which would reduce choke effectiveness. Avoid giving them space to shrimp or explode out. The timing matters significantly—apply the choke smoothly and progressively rather than suddenly, giving them time to tap. Your base must be solid; poor positioning allows them to escape or reverse the position entirely.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The D'Arce from turtle position is ideal during positional scrambles when your opponent assumes a defensive turtle posture. It's particularly effective in competition because it's a high-percentage submission that's difficult to escape once properly applied. Use this technique when you're catching someone who's trying to recover from bottom position or when they're turtled after a takedown attempt. The D'Arce works well against opponents who prefer defensive, low-posture positions. It's also valuable when your opponent is blocking your cross-side armlock or defending your pin attempts by turtling. From a strategic standpoint, knowing this submission prevents opponents from relying on turtle position as a stalling tactic. In training, drill this from turtle position regularly as it builds excellent control and body awareness. This technique is legal in most BJJ rule sets including IBJJF competition, making it suitable for all training environments. It's particularly devastating at higher belt levels where positional control is emphasized.</p>
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
