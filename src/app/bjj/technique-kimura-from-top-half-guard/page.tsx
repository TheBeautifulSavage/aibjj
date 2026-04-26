import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Kimura from Top Half Guard: Complete BJJ Guide | AIBJJ",
  description: "Master the kimura shoulder lock from top half guard position. Learn setup, execution, and counters in this comprehensive BJJ technique guide.",
};

export default function Page() {
  const tags = ["kimura", "half guard", "shoulder lock", "submission"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Kimura from Top Half Guard: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the kimura shoulder lock from top half guard position. Learn setup, execution, and counters in this comprehensive BJJ technique guide.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Kimura?</h2>
            <p>The kimura is a powerful shoulder lock submission that attacks the opponent's rotational shoulder stability. From top half guard, it's one of the most effective submissions available, as your opponent is already partially immobilized and committed to defending their lower body.

The technique involves controlling your opponent's arm in a figure-four grip, creating a mechanical advantage that hyperextends or internally rotates the shoulder joint. The name comes from legendary judoka Masahiko Kimura, who famously used this technique in the 1950s.

From top half guard specifically, you have superior positioning and weight distribution, making the kimura particularly difficult to escape. Your opponent's bottom leg is trapped, limiting their ability to create space or rotate away. The submission works on virtually all body types and skill levels when executed properly, making it a fundamental technique every grappler should master.

The beauty of this submission is that it operates on a spectrum—you can apply it as a controlling position that allows you to threaten the submission while maintaining top pressure, or you can finish it explosively when your opponent tries to defend.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin from top half guard with your weight distributed across your opponent's torso. Your bottom leg should be heavy on their hip, preventing escape.

First, establish collar control with your top-side arm, keeping their upper body controlled and preventing them from framing. Shift your weight slightly to your outside hip while opening your bottom-side hand.

Reach your bottom-side arm across your opponent's body and clasp their far-side arm (the arm on their side away from your legs). Post your elbow on the mat briefly to create space, then pivot your hips toward your opponent's head.

Now execute the figure-four grip: keep their arm between your forearms, then wrap your far-side arm around their arm and grab your own wrist with your opposite hand. Your gripping arm should sit in their armpit.

Immediately drive your elbow downward and toward their feet while controlling their far-side collar. Pressure should come from your shoulder, not your arms. Angle your body so your shoulder points toward their feet—this creates the mechanical advantage.

Ratchet up pressure slowly, giving your opponent a chance to tap before applying maximum force.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The critical detail most beginners miss is the grip position. Your hands must be arranged so your forearms control their arm perpendicular to their body. If their arm runs parallel with their torso, the submission won't work effectively.

Another common mistake is relying on arm strength instead of positional pressure. The kimura is a leverage technique—correct positioning should make strength nearly irrelevant. If you're muscling the submission, you're doing it wrong.

Keep your opponent's arm isolated and away from their body. When they can tuck their arm against their ribs, they dramatically reduce your mechanical advantage. Maintain distance between their arm and torso throughout.

Don't neglect upper body control. Many grapplers focus entirely on the arm attack and lose their top position when the opponent starts to escape. Maintain collar ties or underhook control simultaneously.

Finally, understand that the kimura can be applied at multiple angles. You don't need to be perfectly perpendicular—adjusting your angle slightly can bypass defensive frames and create new attack lines. Experiment with different body positions to find what works against various defensive shapes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The kimura from top half guard is most effective when your opponent is defending passively, trying to improve their position rather than actively creating space. If they're extending their arm to frame or push, this is prime kimura territory.

Use it when your opponent escapes your initial top control and tries to establish a better defensive position. As they commit to movement, catch their far-side arm and transition into the kimura grip.

This submission works particularly well against opponents who are too focused on defending the half guard sweep. While they're thinking about leg lock defense or reversals, you attack their upper body.

The kimura is also valuable as a positional control tool. Establish the grip but don't fully commit to the submission—use it to pin their arm and control their upper body while you improve your position or set up other attacks. The threat of the submission keeps them defensive and reactive.

Tactically, use the kimura when you've been hitting it consistently. As your opponent becomes aware of the threat, they'll start defending it, which opens other submissions like arm-triangle chokes or armlocks.

Avoid forcing the kimura against experienced opponents who are actively defending—they'll create space and escape. Instead, flow into it opportunistically as they move, or transition to other techniques if they successfully defend the initial threat.</p>
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
