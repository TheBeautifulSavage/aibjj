import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "De La Riva Guard: Berimbolo Entry Guide | AIBJJ",
  description: "Master the De La Riva guard berimbolo entry with detailed setup, footwork, and positioning techniques for advanced BJJ students.",
};

export default function Page() {
  const tags = ["de la riva guard", "berimbolo", "footlock", "guard passing", "advanced bjj"];
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
        <h1 className="text-4xl font-black sm:text-5xl">De La Riva Guard: Berimbolo Entry Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the De La Riva guard berimbolo entry with detailed setup, footwork, and positioning techniques for advanced BJJ students.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the De La Riva Guard?</h2>
            <p>The De La Riva guard is a dynamic leg lock position developed by the legendary De La Riva family. It's characterized by controlling your opponent's leg with your inside leg hook while maintaining collar or upper body control. The berimbolo entry is a sweeping transition where you use momentum and hip movement to rotate underneath your opponent and attack their back or achieve a dominant position. This guard requires exceptional hip mobility, timing, and footwork. The beauty of the De La Riva lies in its versatility—it creates constant offensive threats while maintaining defensive security. The berimbolo specifically transforms the guard into a rotational attack, forcing opponents to either defend the sweep or risk losing position entirely. Understanding the positional mechanics is crucial before attempting the entry. Your opponent's posture, base, and leg placement all influence execution success. This guard has become essential in modern competition due to its effectiveness against taller opponents and standing passers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in a standard closed guard with your opponent standing in your guard. Create distance by framing on their hips and breaking their posture forward slightly. Thread your right leg inside their left leg, placing your foot on their hip while keeping your left leg's foot on their right hip. Establish collar control with your left hand while your right hand controls their wrist or sleeve. Now enter the De La Riva by hooking their right leg with your right shin, placing your hook just above the knee. Your right foot should curl inward, securing the hook firmly. Position your left leg straight, foot on their hip, preventing them from moving backward. Your torso should be angled away from them, creating space. To enter the berimbolo, shift your weight to your left shoulder, beginning your rotation. Push with your left foot against their hip while pulling your collar grip, initiating the roll. Keep your right leg hook engaged throughout—this maintains control during the rotational movement. Your hips should lead the rotation, creating momentum that carries you underneath and around your opponent's body, ultimately landing in back control or a dominant top position.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details determine success: maintain tension on your collar grip throughout—this prevents your opponent from stacking you backward. Your De La Riva hook must be high and tight, not loose. Keep constant pressure with your hip against their leg. Your bottom shoulder should initiate the roll, not your top shoulder. Many practitioners rotate too slowly, losing momentum. Commit to the rotation with explosive hip movement. Common mistakes include improper foot placement—your hook foot must curl under rather than stay flat. Failing to control the wrist allows escape. Starting the rotation before establishing proper grips invites stacking counters. Don't let your opponent's shoulders flatten to the mat; maintain angles throughout. Your free leg should remain active on their hip, not dangling passively. Timing matters significantly; initiate the berimbolo before your opponent establishes a heavy post. If your opponent base widens, your rotation becomes compromised. Maintain collar control pressure—relaxing this grip often precedes position loss. Practice drilling the footwork independently before adding the rotation to develop proper muscle memory.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The De La Riva berimbolo entry excels against opponents who stand upright in your closed guard with narrow bases. It's particularly effective against taller opponents whose length makes traditional passing angles difficult. Use this when your opponent is focused on posture correction rather than immediately passing. The technique shines against defensive-minded opponents who prefer control over aggression. Avoid attempting this against opponents with exceptional base awareness or those already establishing heavy side control. If your opponent has already passed your guard partially, the berimbolo becomes significantly harder. It's most effective in positions where your opponent hasn't established strong underhook control. Competition contexts favor this technique because judges reward the positional dominance you achieve. In training, use it to develop hip mobility and rotational awareness. The berimbolo works well when your opponent expects a traditional sweep. If they're already counteracting your collar grip pressure, adjust to alternative guard positions. This technique is excellent for developing feeling and timing—qualities that transfer to other advanced guard systems. Advanced students should use it to understand momentum-based grappling as opposed to strength-based approaches.</p>
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
