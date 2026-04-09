import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arm Triangle Choke: Head and Arm Submission | AIBJJ",
  description: "Learn the arm triangle choke mechanics, side selection, and finish. A high-percentage BJJ blood choke attacking from side control or mount positions.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arm Triangle Choke: Head and Arm Submission",
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
          <span className="ml-1 text-zinc-300">Arm Triangle Choke</span>
        </nav>
        <h1 className="text-4xl font-black">Arm Triangle Choke: Head and Arm Submission</h1>
        <p className="mt-4 text-xl text-zinc-400">The arm triangle choke is a blood choke that uses your arm and the opponent's own shoulder to compress both carotid arteries simultaneously. It is one of the most reliable and powerful submissions in BJJ, especially from top positions.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Setting Up the Arm Triangle</h2>
            <p>The arm triangle typically begins when your opponent pushes against your chest or tries to frame while you are in mount or side control. Trap their arm across their own neck by using your head and chest to pin their elbow and force the arm flat. Your arm slides under their neck while their trapped arm acts as the second blade of the choke. The key detail is getting their arm close to their own neck — the more their shoulder is pressed into the side of their neck, the tighter the choke. Transition to side control on the opposite side of the trapped arm, as this tightens the choke dramatically by using their own body weight against them.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Side Switch and Finishing Mechanics</h2>
            <p>The critical detail of the arm triangle is always moving to the side of the trapped arm. When you trap the right arm, walk your body to their right side. This causes their shoulder to drive deeper into their own carotid artery. Clasp your hands together with a gable grip or your choking hand gripping your own bicep. Keep your elbow tight and drive your shoulder into the side of their neck while also squeezing through with your arm.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Always move to the side of the trapped arm for maximum pressure</li>
              <li>Their shoulder does half the work — position matters more than strength</li>
              <li>Flatten them out on their back; a turned opponent can relieve pressure</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Troubleshooting a Loose Arm Triangle</h2>
            <p>If the choke feels loose, the most common cause is the opponent's trapped arm not being tight enough against their own neck. Use your head or chest to walk their elbow toward their centerline. Another issue is allowing them to turn toward you — flatten them out by posting your leg and dropping your chest weight. If they continue to resist, you can transition to an Americana or kimura on the trapped arm, or look for the mounted triangle. The arm triangle is a positional submission — good position and patience beats pure squeezing strength every time.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-darce-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">D'Arce Choke</Link>
            <Link href="/bjj-anaconda-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Anaconda Choke</Link>
            <Link href="/bjj-north-south-choke" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">North-South Choke</Link>
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
