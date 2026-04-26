import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Bow and Arrow Choke: Complete BJJ Back Attack Guide | AIBJJ",
  description: "Master the bow and arrow choke from back control. Learn setup, execution, and strategic application for effective submissions in BJJ.",
};

export default function Page() {
  const tags = ["bow and arrow choke", "back control", "choke submissions", "bjj techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Bow and Arrow Choke: Complete BJJ Back Attack Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the bow and arrow choke from back control. Learn setup, execution, and strategic application for effective submissions in BJJ.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Bow and Arrow Choke?</h2>
            <p>The bow and arrow choke is a powerful submission applied from back control where the attacker uses their arms to create a choking mechanism that resembles drawing a bow. One arm wraps around the opponent's neck while the other arm controls their arm, creating a mechanical advantage that cuts off blood flow to the brain. This technique is particularly effective because it combines neck pressure with positional control, making it difficult for the defender to escape. The choke works by applying pressure across the carotid arteries on both sides of the neck. It's considered one of the most elegant and efficient submissions in Brazilian Jiu-Jitsu because it requires minimal strength and maximum technical precision. The bow and arrow choke is legal at all belt levels and is frequently used in competition due to its high success rate and reliability.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by establishing solid back control with both hooks in place and your chest glued to your opponent's back. From here, thread your right arm under their right arm and wrap it around their neck, securing a collar grip with your palm facing inward. Your left hand grabs your opponent's right wrist or sleeve. The critical positioning involves pulling their arm across their body while simultaneously applying upward pressure on the collar grip. Angle your body slightly to your left and use your legs to control their hips by keeping your hooks engaged. As you pull their arm across, their shoulder rotates and their chin lifts, increasing choke pressure. Keep your grip on the collar tight and maintain constant pressure. Your left arm should remain straight and extended, creating the 'arrow' pulling mechanism. Drive your hips forward while maintaining all connection points. The submission completes when proper pressure and positioning force them to tap.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Success depends on several technical details. Ensure your collar grip is deep, ideally grabbing fabric on the opposite side of the neck rather than just surface gripping. Your body positioning matters tremendously—lean slightly forward and to the side opposite your collar grip. Many practitioners fail to control the arm properly; your grip must be on the wrist or sleeve, not the elbow. Common mistakes include releasing hooks prematurely, which destroys back control and allows escapes. Another error is applying pressure with the wrong direction—the choke requires upward pressure on the collar combined with outward pulling on the arm. Don't grip too high on the neck; position your choking arm so the crook of your elbow sits directly on the carotid. Avoid telegraphing the submission; transition smoothly from back control positioning. Finally, maintain constant tension throughout the technique rather than applying pressure intermittently. This prevents your opponent from finding momentary relief.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The bow and arrow choke is ideal when your opponent is trying to improve position from bottom back control. When they frame against your arm or attempt to turn into you, that's the perfect setup moment. Use this submission when your opponent is defending the rear naked choke by tucking their chin, since the bow and arrow attacks from a different angle. It's particularly effective in the gi where collar grips are more secure and accessible. In no-gi, you can still apply it using front headlock-style gripping, though it's slightly less reliable. This technique shines when your opponent is fatigued and can't generate enough strength to prevent the arm pull. Strategically, deploy the bow and arrow when you have control but want to finish rather than continue grinding. Competition-wise, it's high-percentage against opponents unfamiliar with the escape mechanics. Use it as a finisher when you've already created doubt about your back control through other threats. It's less effective against opponents with strong neck strength and leverage awareness, so recognize when to transition to alternative submissions.</p>
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
