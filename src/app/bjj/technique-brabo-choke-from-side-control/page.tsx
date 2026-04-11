import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Brabo Choke from Side Control: Complete Guide | AIBJJ",
  description: "Master the Brabo choke from side control with our detailed step-by-step guide. Learn setup, execution, and common mistakes to improve your BJJ.",
};

export default function Page() {
  const tags = ["brabo choke", "side control", "submissions", "BJJ techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Brabo Choke from Side Control: Complete Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the Brabo choke from side control with our detailed step-by-step guide. Learn setup, execution, and common mistakes to improve your BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Brabo Choke?</h2>
            <p>The Brabo choke, also known as the D'Arce choke, is a devastating neck compression submission that works exceptionally well from side control. Named after Brazilian judoka Brabo Senise, this technique uses your own arm and your opponent's arm to create a tight choke without relying on the gi. The position is sometimes called a rear-naked choke variation because of its structural similarity, though it's executed from a different angle. What makes the Brabo choke particularly effective from side control is that you already have dominant positioning over your opponent. The choke targets both carotid arteries simultaneously, causing a rapid loss of consciousness when applied correctly. Unlike many submissions that require specific grips or leverage, the Brabo choke relies on proper positioning and arm placement. It's considered one of the highest-percentage submissions in side control, especially against opponents who defend traditional collar and arm chokes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in a solid side control position with your weight distributed across your opponent's torso. Establish a firm underhook with your near-side arm, wrapping around their neck and upper back. Your hand should reach across their far shoulder. Next, thread your far-side arm under their near arm, creating a figure-four grip with your hands. Your arm should pass through the space between their arm and their body. Keep your elbows tight and close to your centerline to maximize pressure. Position your head low and to the side, keeping your shoulders square. Gradually increase pressure by squeezing your elbows together while rotating your upper body slightly toward your opponent. The key is controlling their far arm with your chest and upper body weight, preventing them from defending or escaping. Don't rely solely on arm strength. Instead, use upper body movement and chest compression. Maintain constant contact with their body and gradually apply pressure until they tap or lose consciousness.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>A critical detail is the grip depth: your hands should meet snugly, with your far arm's bicep close to your opponent's neck. Many practitioners make the mistake of gripping too loosely or keeping their elbows flared outward, which reduces choke effectiveness. Another common error is not controlling your opponent's far-side arm adequately, allowing them to frame and create space. Position your body weight heavily on the side control, preventing them from shrimping or turning into you. Don't apply pressure too high on the neck or too low on the shoulder. The sweet spot targets the sides of the neck where the carotid arteries are located. Avoid sinking the choke with just arm strength, as this telegraphs your intention and allows escape. Instead, gradually tighten while maintaining your position. Some practitioners rush the finish instead of methodically improving their grip and positioning. Be patient and squeeze steadily. Finally, ensure your opponent's head isn't turned too far away, as this can make the choke impossible to finish.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The Brabo choke is most effective when your opponent is turtled or facing away from you in side control, as it requires access to their near-side arm. Use this submission when your opponent defends against collar chokes or cross-collar techniques by tucking their chin or turning their head away. It's particularly valuable in no-gi grappling where collar grips aren't available. The Brabo choke becomes a high-percentage finish from side control when your opponent blocks your underhook attempts or when they're exhausted and can't generate effective frames. It works well against larger opponents because it relies on positioning and body weight rather than grip strength. This technique shines in competition when you've achieved dominant side control and your opponent is defending primarily against arm-based submissions. In training, use it to keep your submissions varied and prevent opponents from anticipating your usual techniques. It's also excellent for developing pressure-based submission skills. However, avoid it if your opponent has significant mobility or if you haven't firmly established side control, as they may escape before you complete the choke.</p>
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
