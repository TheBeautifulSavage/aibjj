import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reverse Triangle: Back Triangle Mechanics | AIBJJ",
  description: "Learn the reverse triangle choke from back control and turtle. Leg configuration, arm trap mechanics, and the choking pressure of this sneaky BJJ submission.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Reverse Triangle: Back Triangle Mechanics",
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
          <span className="ml-1 text-zinc-300">Reverse Triangle</span>
        </nav>
        <h1 className="text-4xl font-black">Reverse Triangle: Back Triangle Mechanics</h1>
        <p className="mt-4 text-xl text-zinc-400">The reverse triangle, or back triangle, faces the opposite direction from the standard guard triangle and is primarily attacked from back control, turtle position, or when the opponent is face down. It is a sneaky, high-percentage choke that surprises opponents unfamiliar with the position.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Reverse Triangle from Back Control</h2>
            <p>The reverse triangle is most naturally available from back control when the opponent turns away from your rear naked choke attempts, exposing their shoulder and neck from the back. When they turtle hard and tuck their chin, your legs are already in position to form the triangle from behind. Swing one leg over their shoulder and across their neck, then lock the figure-four behind their head. This faces the opposite direction from a guard triangle — your body is behind them and your legs face forward. The arm gets trapped inside the triangle on the same side as the locking leg.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Leg Configuration and Locking</h2>
            <p>The lock is created the same way as a regular triangle — the back of your knee rests on top of your opposite ankle in a figure-four. However, since you are behind the opponent, tighten the triangle by driving your hips forward into the back of their head while squeezing your thighs. This forward hip pressure combined with knee squeeze creates the carotid compression. One arm is typically trapped inside with their neck.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Lock figure-four with back of knee over opposite ankle</li>
              <li>Drive hips forward while squeezing thighs for choking pressure</li>
              <li>Trap one arm inside — same side as the locking leg</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Reverse Triangle from Turtle and Guard</h2>
            <p>Against a turtled opponent, you can attack the reverse triangle by placing your legs over their back and rolling them toward you, catching the triangle as they come over. From guard, the reverse triangle presents itself when the opponent stacks heavily and turns sideways — your legs are now in position to swing into a reverse triangle rather than a standard one. Many practitioners underutilize the reverse triangle because it is less commonly taught, giving it a surprise factor that can catch experienced opponents off guard in competition.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-triangle-setup" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Triangle Setup</Link>
            <Link href="/bjj-triangle-from-mount" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Triangle from Mount</Link>
            <Link href="/bjj-back-control-escapes" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Back Control Escapes</Link>
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
