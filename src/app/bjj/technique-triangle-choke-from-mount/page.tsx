import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Triangle Choke from Mount Position | AIBJJ",
  description: "Master the triangle choke from mount with our comprehensive guide. Learn setup, execution, and strategic applications for all BJJ levels.",
};

export default function Page() {
  const tags = ["triangle choke", "mount position", "submissions", "BJJ techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Triangle Choke from Mount Position</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the triangle choke from mount with our comprehensive guide. Learn setup, execution, and strategic applications for all BJJ levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Triangle Choke?</h2>
            <p>The triangle choke from mount is a powerful submission that uses your legs to create a triangle around your opponent's neck and arm. When executed from the dominant mount position, you have maximum control and leverage to force the tap. The submission works by restricting blood flow to the brain through compression of the carotid arteries, making it one of the most effective finishes in Brazilian Jiu-Jitsu. What makes this technique particularly valuable from mount is the difficulty your opponent faces in escaping. Unlike triangles from guard or side control, the mounted position provides superior weight distribution and prevents common escape routes. The triangle choke is suitable for all belt levels and appears frequently in competition and training. It's especially effective against opponents who defend their neck tightly or resist arm-triangle attempts, as the leg triangle offers an alternative finishing angle.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start in a solid mount position with your opponent's back flat on the mat. Establish control by keeping your weight distributed and maintaining upper body pressure. Grip their right arm with your left hand and post your right hand near their head for base. Bring your right leg up and place your right foot on the mat near their left side, close to their hip. This foot will become your triangle's base. Next, swing your left leg over their head and shoulder, positioning your left foot on their right side. Your legs now frame their arm and head. The key positioning moment: place your right ankle behind your left knee, creating the triangle. Your left shin should press across their neck while your right leg closes the triangle. Keep your hips elevated and drive forward, tightening the triangle by pulling your right leg toward your chest. Your opponent should tap immediately or lose consciousness quickly.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Proper foot placement is critical for a functional triangle. Many practitioners place their feet too wide apart, reducing pressure and allowing escape. Keep your feet close together and your legs tight throughout execution. Ensure you're squeezing your knees together rather than relying solely on leg straightness. Your hips should be elevated off their body, never sitting flat, as this transfers weight efficiently into the choke. Common mistakes include rotating too early before the triangle is fully locked, which gives your opponent space to defend. Also avoid placing your shin incorrectly on the neck—it must cross the throat, not sit on their chin or collarbone. Many practitioners forget to control the arm trapped in the triangle. Pull this arm tight against their body to prevent them from framing and creating space. Finally, ensure your opponent's head stays centered in the triangle. If they turn their head or slip to the side, the choke weakens significantly. Maintain constant pressure and control throughout the submission.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The triangle choke from mount works best when your opponent is defending their neck actively or preventing arm-triangle setups. If they're tucking their chin and keeping their arms in tight, the leg triangle provides an excellent alternative angle of attack. This technique shines when your opponent is fatigued and their leg defense weakens. It's particularly effective in the later rounds of competition or rolling when they've expended energy on other escapes. The triangle from mount is ideal against opponents who are larger or possess exceptional arm strength, as leg strength typically compensates for size differences better than arm strength does. Use this technique when your opponent prevents you from isolating their arm for an armlock, as the triangle eliminates arm dependency. It's valuable in nogi grappling where grips are harder to maintain, and the triangle provides secure control through leg positioning alone. Time the setup carefully when your opponent rises to bridge or push—their upward movement toward your legs actually facilitates triangle completion. Against defensive opponents, this technique often comes as a welcome surprise after repeated arm-triangle attempts.</p>
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
