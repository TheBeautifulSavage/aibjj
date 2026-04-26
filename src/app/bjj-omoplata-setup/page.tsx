import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Omoplata Setup: Creating the Shoulder Lock | AIBJJ",
  description: "Learn how to set up the omoplata from closed guard and spider guard. Master the leg position, hip switch, and shoulder lock mechanics for this BJJ submission.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Omoplata Setup: Creating the Shoulder Lock",
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
          <span className="ml-1 text-zinc-300">Omoplata Setup</span>
        </nav>
        <h1 className="text-4xl font-black">Omoplata Setup: Creating the Shoulder Lock</h1>
        <p className="mt-4 text-xl text-zinc-400">The omoplata is a shoulder lock applied by trapping the opponent's arm between your legs and rotating their shoulder into extreme internal rotation. It is one of the most versatile guard attacks in BJJ, threatening a submission, sweep, or back take simultaneously.</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Creating the Omoplata Position</h2>
            <p>The omoplata most commonly begins from closed guard when you attempt an armbar and your opponent defends by pulling their arm back, or when they post their hand at your hip. Swing your leg over their shoulder, threading it between their arm and head so their arm is caught between your thigh and shin. Hip out to create a sharp angle and sit up to complete the position. Your far leg hooks over their back to prevent them from rolling forward. The arm should be locked between your legs with the elbow pointing behind you — this traps the shoulder and prevents straightening the arm to escape.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Sitting Up and Controlling the Position</h2>
            <p>Once the leg is over the shoulder and you've hipped out, immediately sit up toward the trapped arm. This sit-up is essential — lying flat with an omoplata gives the opponent time to roll forward and escape. As you sit up, wrap your arm around their waist to prevent the forward roll. Your body is now perpendicular to theirs, sitting beside them with their arm trapped between your legs.</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-zinc-400">
              <li>Swing leg over shoulder — arm must be between your thigh and shin</li>
              <li>Hip out sharply before swinging the leg to create the angle</li>
              <li>Sit up immediately and wrap their waist to prevent forward roll</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Finishing the Omoplata</h2>
            <p>To finish, lean forward and drive your hips toward their head while keeping the arm trapped tight between your legs. This rotation drives their shoulder into internal rotation and hyperextension. Keep your knees bent and drive your hips rather than pulling with your upper body. The omoplata can also be transitioned to a triangle or armbar if they defend, and serves as an excellent platform for sweeping when they try to posture and pull their arm free. Its versatility makes it one of the most strategically rich attacks in all of BJJ.</p>
          </section>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-2">Related Techniques</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj-omoplata-sweep" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Omoplata Sweep</Link>
            <Link href="/bjj-armbar-from-guard" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Armbar from Guard</Link>
            <Link href="/bjj-triangle-setup" className="rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700">Triangle Setup</Link>
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
