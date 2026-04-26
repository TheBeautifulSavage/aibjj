import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inside Heel Hook: Setup and Mechanics | AIBJJ",
  description: "Learn the inside heel hook setup from ashi garami, the rotation mechanic, and safe training practices. Master one of BJJ's most effective knee submissions.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Inside Heel Hook: Setup and Mechanics",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" },
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <nav className="text-sm text-zinc-500 mb-6">
          <Link href="/" className="hover:text-zinc-300">Home</Link> ›
          <Link href="/bjj-techniques" className="hover:text-zinc-300 ml-1">Techniques</Link> ›
          <span className="ml-1 text-zinc-300">Inside Heel Hook</span>
        </nav>
        <h1 className="text-4xl font-black">Inside Heel Hook: Setup and Mechanics</h1>
        <p className="mt-4 text-xl text-zinc-400">The inside heel hook is a rotational knee attack performed from ashi garami (single leg x) position, targeting the medial structures of the knee. It is one of the most effective and widely used leg locks in modern no-gi BJJ competition.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Ashi Garami: The Inside Heel Hook Position</h2>
            <p>The inside heel hook is attacked from the ashi garami (single leg x) entanglement. From this position, your inside leg hooks across their hip and your outside leg pins their thigh from below. The opponent's leg runs between your legs, with their knee controlled by your hip pinch. To take the inside heel hook, your arm reaches around the outside of their heel and cradles it in the crook of your elbow — the heel cup faces toward the inside of the leg (hence "inside" heel hook). Your hands clasp together near your chest to complete the lock.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Rotation and Knee Mechanics</h2>
            <p>The inside heel hook works by rotating the lower leg internally (heel turning outward, toes pointing in) while the knee is locked in place by your body position. This rotation stresses the medial collateral ligament (MCL), posterior cruciate ligament (PCL), and other structures. The finish is a body rotation — you turn away from them, dragging the heel with you, rather than just pulling with your arms. This whole-body rotation applies tremendous torque to the knee instantly.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Heel cup into the crook of the elbow facing the inside of the leg</li>
              <li>Lock the knee with hip pinch — do not let the knee float</li>
              <li>Rotate your whole body to finish, not just arm strength</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Safe Training Practices</h2>
            <p>Heel hooks cause injury quickly and silently — there is often little pain before ligament damage occurs. Train them with an extremely light touch and tap early. Use the "tap before pain" rule: if you feel any knee tension, tap. When drilling, apply the rotation slowly and release immediately at the tap. Heel hooks are typically reserved for intermediate to advanced practitioners, but when trained properly with a responsible partner, they dramatically improve your overall leg lock understanding and defense.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-outside-heel-hook" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Outside Heel Hook</Link>
            <Link href="/bjj-straight-footlock" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Straight Foot Lock</Link>
            <Link href="/bjj-kneebar" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Kneebar</Link>
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
