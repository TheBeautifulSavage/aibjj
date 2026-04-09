import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "North-South Choke: Top Pressure Submission | AIBJJ",
  description: "Master the north-south choke mechanics, arm threading, and hip drop finish. A powerful no-gi blood choke from the north-south position that requires precise body alignment.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "North-South Choke: Top Pressure Submission",
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
          <span className="ml-1 text-zinc-300">North-South Choke</span>
        </nav>
        <h1 className="text-4xl font-black">North-South Choke: Top Pressure Submission</h1>
        <p className="mt-4 text-xl text-zinc-400">The north-south choke is a highly technical blood choke applied from the north-south position, where you face the opponent's feet while controlling their upper body. Marcelo Garcia is credited with popularizing this submission at the highest levels of no-gi competition.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Threading the Arm for the North-South Choke</h2>
            <p>From north-south position, begin by sliding one arm under their neck and threading it toward their far shoulder. Your forearm should cross their carotid artery. The other arm goes under their near shoulder to lock a figure-four with your hands — grabbing your own wrist or bicep. Once the figure-four is locked, the key is to walk your hips around toward their shoulder, turning your body so that it is roughly parallel to theirs but facing the opposite direction. This hip walk is what makes or breaks the choke — without it, the position lacks the required angle for effective carotid compression.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Hip Drop and Finish</h2>
            <p>With the figure-four locked and your hips walked around, drop your hips down toward the mat on the side where your choking arm is threading. This hip drop closes the gap between your forearm and their neck, compressing the carotid artery powerfully. Keep your chest heavy and use the full weight of your body. Do not rely on arm strength — the hip drop and body weight do the finishing work.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Walk hips parallel to opponent before attempting the finish</li>
              <li>Drop hips toward mat on the choking arm side to compress</li>
              <li>Forearm crosses the carotid artery — positioning is everything</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">North-South Choke as a Guard Pass Threat</h2>
            <p>The north-south choke is uniquely powerful because it appears during guard passing transitions. As you pass from side control to north-south to continue toward mount, the north-south choke presents itself naturally. Many opponents who are focused purely on blocking the mount or re-guarding don't recognize the choke setup until it is too late. Integrating the north-south choke into your guard passing game makes you a multidimensional threat that creates panic in opponents trying to recover guard.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-arm-triangle-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Arm Triangle Choke</Link>
            <Link href="/bjj-kimura-from-side-control" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Kimura from Side Control</Link>
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
