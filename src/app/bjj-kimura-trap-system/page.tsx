import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kimura Trap System: Chain Submissions | AIBJJ",
  description: "Learn the kimura trap system for BJJ — how to chain kimuras, Americanas, armbars, and back takes using the figure-four grip as your control center.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kimura Trap System: Chain Submissions",
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
          <span className="ml-1 text-zinc-300">Kimura Trap System</span>
        </nav>
        <h1 className="text-4xl font-black">Kimura Trap System: Chain Submissions</h1>
        <p className="mt-4 text-xl text-zinc-400">The kimura trap system treats the figure-four grip not as a single submission but as a control position that flows into kimuras, Americanas, armbars, and back takes based on the opponent's defensive reactions. Mastering this system makes your top game devastatingly complete.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Kimura Grip as a Control Hub</h2>
            <p>The foundation of the kimura trap system is treating the figure-four wrist grip as a positional control tool rather than just a submission attempt. Once you secure the kimura grip from side control, half guard, or guard, you control one entire arm of your opponent. This single grip threatens four immediate submissions depending on which direction they move: kimura if the wrist goes up behind the back, Americana if the wrist is pushed to the mat, armbar if the arm straightens, and back take if they roll. Understanding this map transforms the kimura grip from a single attack into a decision tree that adapts to the opponent's every move.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Following the Defense Through the System</h2>
            <p>When they roll away from the kimura to escape, follow them over to take the back — you have already secured their arm with the figure-four, making back control almost automatic. When they lock their hands to prevent the kimura rotation, switch to the Americana by reversing the rotation direction and driving their wrist to the mat. When they straighten their arm to resist, slide your far leg over their head and extend into the armbar from the same figure-four grip.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>They roll to escape → follow over, take the back with hooks</li>
              <li>They lock their hands → switch to Americana, push wrist to mat</li>
              <li>They straighten their arm → transition directly to armbar</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Building Your Kimura Trap Game</h2>
            <p>To develop the kimura trap system, start by drilling each individual transition slowly with a cooperative partner calling out their defense. Progress to light resistance where your partner picks one defense at random and you respond with the correct counter. This builds the automatic recognition and response patterns that define high-level grappling. The kimura trap system is most associated with instructors like John Danaher and his students, who have used it to dominate high-level no-gi competition through systematic, chain-based submission hunting.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-kimura-from-guard" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Kimura from Guard</Link>
            <Link href="/bjj-kimura-from-side-control" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Kimura from Side Control</Link>
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
