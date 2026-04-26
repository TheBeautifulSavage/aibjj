import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Spider Guard BJJ: Sweeps, Triangle Setups & Guard Play | AIBJJ", description: "Master spider guard in gi BJJ. Learn sleeve grips, foot-on-biceps control, spider guard sweeps, triangles, and how to combine spider with other guards." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Spider Guard BJJ: Sweeps, Triangle Setups & Guard Play", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">Spider Guard BJJ: Sweeps, Triangle Setups & Guard Play</h1>
        <p className="mt-4 text-xl text-zinc-400">Spider guard is a gi-specific open guard that uses sleeve grips and foot pressure on the biceps to completely control a standing or kneeling opponent — creating sweeping and submission opportunities from a safe, connected position.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Spider Guard Structure: Grips and Frames</h2><p>Spider guard requires two sleeve grips and both feet placed on the opponent's biceps (or one bicep and one hip). This four-point connection creates a web of control — hence the name. By pushing with your feet and pulling with your sleeve grips, you can dictate exactly how far away or close the opponent stays. Your hips must remain active: shift left and right, dip and rise, to maintain the guard when opponents try to circle or posture out. The sleeve grip should be a pistol grip (cuff grip) for maximum control of the hand. Spider guard is particularly effective against larger opponents because your legs are stronger than their arms — you can legitimately control someone 50 pounds heavier using this frame. The guard's weakness is speed: an explosive passer who bull-rushes can collapse it before you're set.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Spider Guard Sweeps: Lollipop and Balloon</h2><p>The lollipop sweep is the signature spider guard technique. With both sleeve grips and feet on biceps, extend one leg to push that arm up while you pull the opposite sleeve down and across. The imbalance sends them over the pushed arm. The balloon sweep (overhead sweep) is spectacular: push both feet up and extend your legs, redirecting their forward pressure straight over your head. Time the balloon sweep when they lean in to pass — their own forward momentum becomes the sweep. The hip bump and tripod sweeps also work from partial spider positions. For the tripod, one foot is on the hip, the other sweeps their ankle as you pull the sleeve — a very high-percentage sweep that works even on skilled passers. Spider guard sweeps chain together naturally: if they post to stop one sweep, immediately transition to the next option in the chain.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Triangles and Submissions from Spider Guard</h2><p>Spider guard is an elite triangle setup position. With the sleeve grip controlling their arm, shoot the same-side leg off the bicep and over their shoulder, then close the triangle with your other leg. Because you already control their arm from the sleeve grip, the triangle lock is clean and immediate. Omoplata setups flow naturally when you extend one leg over a shoulder — your whole body weight drives the shoulder lock. Armbar from spider guard: pull their arm across your body with the sleeve grip, swing the same-side leg over their head, and drive your hips up. The spider-to-triangle-to-armbar chain is a classic gi sequence that high-level competitors drill to perfection. Also watch for gogoplata and inverted triangle setups from extended spider positions when opponents reach in aggressively. The guard is a platform for creative submission hunting at advanced levels.</p></section>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Level Up Your BJJ</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
