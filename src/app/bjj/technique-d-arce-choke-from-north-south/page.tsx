import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "D'Arce Choke from North South Position | AIBJJ",
  description: "Master the D'Arce choke from north south position. Learn setup, execution, and key details for this devastating submission.",
};

export default function Page() {
  const tags = ["d'arce choke", "north south", "submissions", "choke techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">D'Arce Choke from North South Position</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the D'Arce choke from north south position. Learn setup, execution, and key details for this devastating submission.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the D'Arce Choke?</h2>
            <p>The D'Arce choke is a powerful neck submission that compresses both sides of the neck using the attacker's arm and shoulder pressure. Named after leg lock specialist John Danaher's famous student, this choke has become a staple in modern BJJ. From north south position, the D'Arce is particularly effective because you're already positioned directly above your opponent with natural pressure and control. The choke works by creating a triangle with your arm and their neck, while your shoulder adds crushing pressure. Unlike the guillotine or arm triangle, the D'Arce doesn't rely on isolating the arm, making it highly reliable against opponents who defend actively. The submission targets the carotid arteries on both sides of the neck simultaneously, forcing a tap quickly when properly applied. This technique is popular at all competition levels because it's difficult to escape once established and transitions seamlessly from numerous positions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start in a strong north south position with your weight distributed across your opponent's chest and head. Your head should be on their right side (or left, depending on preference). Underhook their right arm with your right arm, threading it deep under their armpit. Your palm should face upward as you wrap around. Now, bring your left hand up and clasp your hands together, creating a figure-four grip with their arm trapped inside. Your clasped hands should be positioned near their right ear and neck. Keep your elbows tight and drive your shoulder into their neck. Rotate your body slightly, sinking your weight into the choke. Your upper back and shoulder apply direct pressure to the front and side of their neck. The key is keeping your arm positioned correctly so their neck is compressed in the crook of your elbow. Maintain north south control with your hips while progressively tightening the grip. Apply steady pressure rather than jerking motions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Positioning the underhook is critical—it must go deep enough that you can comfortably reach your opposite hand to create the figure-four grip. Many beginners fail to get the arm trapped properly, reducing choke effectiveness. Your shoulder pressure is just as important as your arm squeeze. Drive your shoulder point directly into the side of their neck while keeping elbows tight. Don't extend your arms; power comes from body weight and positioning. A common mistake is pulling down on the head instead of applying lateral neck compression. The D'Arce works by squeezing both carotids from the sides, not by throat compression. Another error is releasing the underhook position prematurely, giving opponents escape opportunities. Keep that arm locked tight throughout. Ensure your grip is secure before applying full pressure—premature tightening telegraphs your intentions. Finally, maintain north south dominance with your lower body weight. If your hips shift away, you lose control and pressure becomes ineffective.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The D'Arce from north south is ideal when you have solid top control and your opponent is defending against guillotine or arm triangle attempts. It's particularly effective against opponents who try to underhook you from the bottom—their underhook positioning actually facilitates your D'Arce setup. This submission transitions smoothly from failed cross-face attempts or when your opponent pushes your head away. Use it when you need an alternative to the arm triangle, especially if their arm is deeply underhooking or defending tightly. The D'Arce works well against opponents with strong neck defense who can survive traditional chokes. It's less position-specific than other submissions, working from north south, mount, and side control, providing multiple entry points. In competition, the D'Arce is valuable because judges appreciate the top control and submission threat simultaneously. It's also useful in nogi grappling where grip strength is less reliable. This technique shines against larger opponents since it relies on positioning and leverage rather than grip strength. Train it regularly to develop the spatial awareness needed for proper execution under pressure.</p>
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
