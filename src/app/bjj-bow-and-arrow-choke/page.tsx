import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bow and Arrow Choke: Back Attack Breakdown | AIBJJ",
  description: "Master the bow and arrow choke from back control. Learn collar grip, leg hook mechanics, and the powerful extension finish used by elite BJJ competitors.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bow and Arrow Choke: Back Attack Breakdown",
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
          <span className="ml-1 text-zinc-300">Bow and Arrow Choke</span>
        </nav>
        <h1 className="text-4xl font-black">Bow and Arrow Choke: Back Attack Breakdown</h1>
        <p className="mt-4 text-xl text-zinc-400">The bow and arrow choke is widely considered the most powerful gi choke in BJJ, using a deep collar grip and leg hook to create devastating rotational pressure on the neck. Elite competitors like Marcelo Garcia and Leandro Lo have used it to finish the highest levels of competition.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Gripping and Positioning from Back Control</h2>
            <p>The bow and arrow choke starts from back control or a dominant turtle position. Establish a deep collar grip with your top hand — reach as far across the collar as possible, ideally to the far lapel. The deeper the grip, the more powerful the choke. Your other hand controls their near sleeve or wrist to prevent their hand from peeling your collar grip. Once the collar grip is secure, begin transitioning: remove your top hook and feed your leg through to hook their far leg at the knee or thigh. This leg connection is what gives the technique its name and its power — you extend your body like drawing a bow.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Finish Mechanics</h2>
            <p>With your collar grip deep and your leg hooked around their thigh, extend your body away from theirs while pulling the collar grip toward your chest. Your hooked leg pulls them in the opposite direction, creating a rotational torque that collapses the carotid arteries. You end up in a seated position as they are stretched out, hence the bow and arrow shape. The choke is both a blood choke and a pressure choke — properly applied, it is nearly inescapable.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Deep collar grip — reach to the far lapel for maximum leverage</li>
              <li>Hook the leg above the knee for control during the extension</li>
              <li>Extend your body away while pulling the collar toward your chest</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Transitions and Backup Attacks</h2>
            <p>If your opponent defends the collar grip, transition to a rear naked choke or baseball bat choke depending on how their hands are positioned. If they manage to escape the back, do not release the collar grip — it can become a loop choke as they turn away. Drilling the bow and arrow from the turtle position is also valuable, as many opponents give their back on all fours while defending guard passes, making this a seamless transition for practitioners who have developed the timing.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-back-control-escapes" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Back Control Escapes</Link>
            <Link href="/bjj-turtle-position-attacks" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Turtle Position Attacks</Link>
            <Link href="/bjj-darce-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">D'Arce Choke</Link>
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
