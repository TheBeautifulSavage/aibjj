import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Straight Foot Lock: Entry and Finish | AIBJJ",
  description: "Master the straight foot lock entry, Achilles lock mechanics, and proper hip extension finish. The foundational leg lock for BJJ beginners and advanced competitors alike.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Straight Foot Lock: Entry and Finish",
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
          <span className="ml-1 text-zinc-300">Straight Foot Lock</span>
        </nav>
        <h1 className="text-4xl font-black">Straight Foot Lock: Entry and Finish</h1>
        <p className="mt-4 text-xl text-zinc-400">The straight foot lock, also called the Achilles lock, is the entry point for all leg lock attacks in BJJ. It attacks the ankle and Achilles tendon with a lacing forearm and hip extension, and is legal at all belt levels in competition.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Entering the Straight Foot Lock</h2>
            <p>The straight foot lock is most accessible from single leg x-guard, ashi garami, or when an opponent puts their leg in while trying to pass your guard. Secure the leg by trapping it under your armpit — your arm wraps around their ankle and your forearm laces across their Achilles tendon. Your inside leg should be posted across their hip to control their body, and your outside leg posts flat on the mat for base. The foot should be tucked under your armpit, not held out away from your body. Close the distance between your chest and their leg; this shortens the lever and increases pressure even before you extend.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Finish: Hip Extension and Wrist Rotation</h2>
            <p>The finish of the straight foot lock involves two simultaneous actions: arching your hips toward the ceiling while rotating your wrist so your forearm blade bites into the Achilles tendon. Do not just pull with your arms — the power comes from your hips driving upward. Squeeze your elbows together to keep the foot trapped tight while bridging. This combination creates a hyperextension of the ankle joint and intense pressure on the Achilles tendon.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Lace your forearm across the Achilles tendon, not the calf</li>
              <li>Tuck the foot deep under your armpit before extending</li>
              <li>Drive hips up while rotating your wrist to maximize pressure</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Leg Lock Positional Control</h2>
            <p>A foot lock without positional control is easy to escape. The most common positional errors are allowing your opponent to step over your body (the "over-hook" escape) or letting them square up and sit up. Pin their hips with your inside leg and maintain tight inside control. From the straight foot lock, you can transition to heel hooks, kneebars, or inside sankaku as your opponent attempts to escape. Building a leg lock system starting from the straight foot lock gives you a foundation to understand all lower body submissions.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-inside-heel-hook" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Inside Heel Hook</Link>
            <Link href="/bjj-kneebar" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Kneebar</Link>
            <Link href="/bjj-outside-heel-hook" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Outside Heel Hook</Link>
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
