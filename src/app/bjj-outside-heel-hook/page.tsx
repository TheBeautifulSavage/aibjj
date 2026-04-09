import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outside Heel Hook: Dangerous Knee Attack | AIBJJ",
  description: "Learn the outside heel hook from outside ashi garami. Understand the knee mechanics, rotation direction, and why this is the most dangerous leg lock in BJJ.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Outside Heel Hook: Dangerous Knee Attack",
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
          <span className="ml-1 text-zinc-300">Outside Heel Hook</span>
        </nav>
        <h1 className="text-4xl font-black">Outside Heel Hook: Dangerous Knee Attack</h1>
        <p className="mt-4 text-xl text-zinc-400">The outside heel hook is widely regarded as the most dangerous submission in Brazilian Jiu-Jitsu, capable of destroying the ACL, MCL, and LCL simultaneously with minimal warning. It is attacked from the outside ashi garami entanglement and requires advanced training protocols.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Outside Ashi Garami: The Foundation</h2>
            <p>The outside heel hook is taken from outside ashi garami — you are on the outside of their trapped leg, with your outside leg hooked across their hip from the outside and your inside leg posted against their inner thigh or knee. This "411" or "saddle" position gives you control of the knee from the outside. Your arm cups around their heel from the inside of the leg — this is the outside heel hook because you're rotating the heel toward the outside (externally rotating the lower leg while the knee is locked). The devastation comes from the fact that external rotation stresses the ACL and LCL simultaneously.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Why It's the Most Dangerous Leg Lock</h2>
            <p>Unlike the inside heel hook, the outside heel hook attacks the ACL — the most frequently surgically repaired ligament in athletes. Worse, external rotation of the tibia under compression frequently damages multiple ligaments in the same motion. There is very little proprioceptive feedback before the ACL tears, meaning practitioners often feel no pain until after the damage is done. This is why it is restricted to brown and black belt competitions in IBJJF events.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Targets ACL, LCL, and posterior capsule simultaneously</li>
              <li>External rotation direction — heel moves toward the outside</li>
              <li>Little to no pain warning before ligament failure</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Training the Outside Heel Hook Safely</h2>
            <p>Outside heel hooks should only be trained with experienced, trusted partners who understand the mechanics and have agreed to tap immediately at any tension. Use flow drilling to learn the positioning and entry without applying finish pressure. Study the leg lock system as a whole — understanding escapes and defenses is just as important as the submission itself. Many elite leg lock coaches teach defense first so practitioners know exactly what not to do when caught, making the training environment safer for everyone.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-inside-heel-hook" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Inside Heel Hook</Link>
            <Link href="/bjj-kneebar" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Kneebar</Link>
            <Link href="/bjj-straight-footlock" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Straight Foot Lock</Link>
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
