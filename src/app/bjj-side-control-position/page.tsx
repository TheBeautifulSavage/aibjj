import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Side Control: Techniques, Escapes, and Transitions | AIBJJ",
  description: "Complete guide to BJJ side control — how to establish pressure, attack submissions, transition to mount or back, and escape the position effectively.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Side Control: The Foundation of Top Game",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Side Control: The Foundation of Top Game</h1>
        <p className="mt-4 text-xl text-zinc-400">Side control is the gateway to every dominant top position in BJJ — from it you advance to mount, take the back, or attack a full submission menu. Understanding side control deeply unlocks your entire top game.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Side Control Mechanics and Pressure</h2>
            <p>Side control is achieved when you are perpendicular to your opponent, past their guard, with chest-to-chest contact and no guard connection. Standard side control uses a near-side underhook or cross-face grip to control the head and near shoulder, while the far side knee blocks the hip. The cross-face — pressing your forearm across the opponent's jaw and neck — turns their head away, making bridging and shrimping mechanically harder. Applying chest pressure through the opponent's body, not above them, pins them flat. Weight distribution matters enormously: 60-70% of your weight should press through your shoulder or upper chest into their chest, not resting on your knees. Keeping your hips low and active allows rapid transitions while maintaining pressure. Lift your opponent's far shoulder off the mat when possible — this flattens them and removes their framing ability.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Submissions from Side Control</h2>
            <p>The near arm is the primary submission target from side control. The kimura grips the wrist and elbow joint for a shoulder lock; combined with a step-over to north-south, it becomes one of the most powerful submissions in the game. The americana attacks the same shoulder differently, pressing the arm flat and rotating the elbow outward. The paper cutter choke slides one arm under the near-side collar and rolls the knuckles up while driving down — a devastating blood choke that works in gi. North-south choke requires the attacker to slide to north-south and wrap both arms around the neck from above, squeezing with the shoulders. From side control, also threaten the far-side armbar by isolating the far arm against your chest and spinning.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Kimura to north-south is highest-percentage from near arm</li><li>Paper cutter choke: deep collar grip, then roll and drive</li><li>Far-side armbar: isolate the arm, then spin to face their legs</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Escaping Side Control</h2>
            <p>Escaping side control requires recreating guard or at minimum recovering half guard. The two primary escapes are the near-side elbow escape (replacing the near knee between yourself and your opponent) and the far-side roll (bridging toward the opponent to come on top). The elbow escape works by inserting the near knee between both bodies — this half guard recovery stops the opponent's advance and begins a guard rebuild. The far-side roll requires the opponent to post high; when they do, bridge hard toward them and roll them over your near shoulder. Against tight side control, use framing: a forearm on the neck and a knee frame on the hip create initial space. Never panic in side control — methodical frame establishment followed by timed movement is more effective than frantic, energy-wasting scrambling.</p>
          </section>
        </div>
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-bold text-white mb-3">Related Techniques</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/bjj-armbar" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Armbar</Link>
            <Link href="/bjj-triangle-choke" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Triangle</Link>
            <Link href="/bjj-guard-passing" className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400 hover:text-white">Guard Passing</Link>
            <Link href="/bjj-techniques" className="rounded-full bg-red-600/10 border border-red-700/30 px-3 py-1 text-red-400 hover:text-red-300">All Techniques →</Link>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Master This Technique with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Get personalized drilling sequences and real-time feedback.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
