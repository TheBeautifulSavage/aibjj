import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "D'Arce Choke: Front Headlock Submission | AIBJJ",
  description: "Learn the D'Arce choke from front headlock position. Step-by-step arm threading, body positioning, and finish mechanics for this powerful no-gi BJJ submission.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "D'Arce Choke: Front Headlock Submission",
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
          <span className="ml-1 text-zinc-300">D'Arce Choke</span>
        </nav>
        <h1 className="text-4xl font-black">D'Arce Choke: Front Headlock Submission</h1>
        <p className="mt-4 text-xl text-zinc-400">The D'Arce choke is a no-gi arm-in guillotine variation that threads one arm under the opponent's near arm and across their neck, finishing with a figure-four. It is a favorite of high-level no-gi grapplers attacking from front headlock and guard passing positions.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Threading the D'Arce Arm</h2>
            <p>The D'Arce choke most commonly presents when your opponent is in a turtle or shot-in position, or when you are passing their guard and they turn to their knees. Establish front headlock control first — your arm wraps over their back and your other hand cups their chin or controls their head. To set the D'Arce, slide your choking arm under their near arm and thread it across their neck. This threading motion is the hardest part and requires your elbow to go deep past their armpit. Drive your shoulder forward and down to create the angle that allows your forearm to sit across their neck correctly.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Locking and Finishing</h2>
            <p>Once your arm is threaded, reach up and grab your own bicep with your free hand — this creates the figure-four lockup that traps their arm and neck simultaneously. Clasp tight and pull your elbows together while driving your shoulder into the back of their neck. Rotate your body toward their trapped arm side to tighten the choke. The D'Arce is primarily a blood choke targeting the carotid arteries.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Thread the arm deep — elbow must clear their armpit completely</li>
              <li>Figure-four grip: your free hand grabs your own bicep</li>
              <li>Rotate toward the trapped arm to tighten both carotid pressure points</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">D'Arce vs Anaconda: Knowing the Difference</h2>
            <p>The D'Arce and anaconda choke are mirror images of each other. In the D'Arce, your arm threads under their near arm and your elbow points toward their far hip — you are on their back side. In the anaconda, your arm goes under their near arm from the front and you roll over their trapped arm. Both finish with a figure-four but from different orientations. The D'Arce is generally preferred from guard passing positions, while the anaconda shines when the opponent shoots in and exposes their neck. Learning both makes you dangerous from all front headlock entries.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-anaconda-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Anaconda Choke</Link>
            <Link href="/bjj-arm-triangle-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Arm Triangle Choke</Link>
            <Link href="/bjj-turtle-position-attacks" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Turtle Position Attacks</Link>
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
