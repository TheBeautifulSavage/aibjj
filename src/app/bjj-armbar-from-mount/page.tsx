import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Armbar from Mount: Dominant Position Attack | AIBJJ",
  description: "Learn the armbar from mount with proper arm isolation, knee pinch, and hip extension. A dominant BJJ attack from full mount position with high finish rate.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Armbar from Mount: Dominant Position Attack",
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
          <span className="ml-1 text-zinc-300">Armbar from Mount</span>
        </nav>
        <h1 className="text-4xl font-black">Armbar from Mount: Dominant Position Attack</h1>
        <p className="mt-4 text-xl text-zinc-400">The armbar from mount is a devastating elbow attack launched from the most dominant position in BJJ. When your opponent reaches or pushes your chest from under mount, the armbar becomes immediately available.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Isolating the Arm from Mount</h2>
            <p>From high mount, wait for your opponent to extend an arm — whether pushing your hips, trying to create space, or reaching for your collar. The moment an arm extends, use both hands to trap their wrist against your chest. Scoop your elbow under their arm and pin it tight. Your goal is to isolate one arm from their body so they cannot use their other hand to grip and defend. Shift your weight to the side of the trapped arm by walking your knee up toward their head. This knee positioning is crucial: it blocks them from rolling you and traps their head, preventing them from turning into you to stack.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Swinging to the Finish</h2>
            <p>Once the arm is isolated and your knee is high, swing your leg over their head in a controlled arc. Keep the arm pinned to your chest throughout the entire swing. Your far leg stays posted on the mat until your top leg is committed over their face, then sit back, squeeze your knees together, and extend your hips upward. The elbow should be pointing straight up with the thumb facing toward the ceiling for maximum leverage on the joint.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Walk your knee to their ear before swinging your leg over</li>
              <li>Keep the arm tight to your chest during the swing — never let it drift</li>
              <li>Sit back explosively and use hip extension to apply pressure</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Preventing the Roll and Stack</h2>
            <p>Opponents defending the mount armbar often attempt to roll toward the trapped arm or drive forward to stack you. To prevent rolling, your posted leg and hip weight keep them flat until you've cleared your leg over their head. If they do attempt to stack, immediately pull your legs tight and turn to face away from them, using hip escape to maintain the arm position. Drilling this transition from mount armbar to the stacking defense builds the muscle memory to handle resistance without losing the submission.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-armbar-from-guard" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Armbar from Guard</Link>
            <Link href="/bjj-mount-escapes" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Mount Escapes</Link>
            <Link href="/bjj-triangle-from-mount" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Triangle from Mount</Link>
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
