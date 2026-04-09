import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Armbar from Guard: Step-by-Step Breakdown | AIBJJ",
  description: "Master the armbar from guard with this step-by-step breakdown. Learn hip movement, arm control, and finish mechanics for BJJ competition and training.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Armbar from Guard: Step-by-Step Breakdown",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" },
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <nav className="text-sm text-zinc-500 mb-6">
          <Link href="/" className="hover:text-zinc-300">Home</Link> ›
          <Link href="/bjj-techniques" className="hover:text-zinc-300 ml-1">Techniques</Link> ›
          <span className="ml-1 text-zinc-300">Armbar from Guard</span>
        </nav>
        <h1 className="text-4xl font-black">Armbar from Guard: Step-by-Step Breakdown</h1>
        <p className="mt-4 text-xl text-zinc-400">The armbar from guard is one of the highest-percentage submissions in BJJ, attacking the elbow joint from the closed guard position. Mastering this technique requires precise hip movement, angle control, and a tight finish.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Setting Up the Armbar from Closed Guard</h2>
            <p>To attack the armbar from closed guard, you first need to break your opponent's posture and control their sleeve or wrist. Begin by pulling their posture down with your legs while controlling one arm across your centerline. Establish a cross-grip on their wrist and plant the same-side foot on their hip to create the angle. This hip escape is critical — without it, you cannot get the proper perpendicular angle needed to isolate the arm. Drive your hips up while swinging your top leg over their head, clamping both thighs tight above and below their shoulder to isolate the elbow joint. Many beginners skip the hip escape and wonder why the armbar feels loose — the angle is everything.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Finishing the Armbar</h2>
            <p>Once your legs are clamped around the arm, keep the thumb pointing up so the elbow faces the correct direction. Squeeze your knees together while bridging your hips upward — this is the finish. Do not pull down with your arms; use your hips. The common mistake is cranking with upper body strength rather than driving the hips. Keep the arm pulled tight to your chest and controlled as you extend.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Keep thumb pointing up to expose the elbow joint correctly</li>
              <li>Squeeze knees together to prevent arm from pulling out</li>
              <li>Bridge hips up — the power comes from the hips, not the arms</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Common Mistakes and Defenses</h2>
            <p>The most common defense to the armbar from guard is stacking — your opponent drives your legs up and over your head, taking the pressure off the joint. To counter stacking, immediately turn to your side and look away from them, shrimping your hips free. Another common error is losing the angle after swinging your leg over; if you feel the position weakening, transition to a triangle or omoplata rather than forcing an ineffective finish. Drilling the hip escape and leg swing as a fluid motion is the fastest way to improve this submission.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-triangle-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Triangle Choke</Link>
            <Link href="/bjj-omoplata-setup" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Omoplata Setup</Link>
            <Link href="/bjj-armbar-from-mount" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Armbar from Mount</Link>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master This Technique with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences from your AI BJJ coach.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
