import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Knee on Belly: Points, Control, and Transitions | AIBJJ",
  description: "Master BJJ knee on belly — worth 2 points in competition. Learn how to control, submit, and transition from knee on belly while stopping common escapes.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Knee on Belly: Scoring Position and Submission Platform",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Knee on Belly: Scoring Position and Submission Platform</h1>
        <p className="mt-4 text-xl text-zinc-400">Knee on belly is a dynamic scoring position that creates immense pressure and opens direct submission lines. Held for three seconds, it scores 2 points — and the threat alone forces defensive reactions you can exploit.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Establishing Knee on Belly</h2>
            <p>Knee on belly is achieved from side control by bringing one knee across the opponent's abdomen and posting the opposite foot on the mat for base. The knee presses into the solar plexus or lower ribcage, creating significant discomfort and defensive panic. The far hand grips the collar or sleeve; the posting hand maintains base. Your weight should press down through the knee — not sit back, which would lift pressure. Keep your shin parallel to the opponent's body with the knee directly on the soft tissue of the abdomen. Higher on the chest restricts breathing and creates more panic; lower on the hip offers less control. As opponents push the knee away, spin around it to the opposite side — a fluid transition that earns a second set of knee-on-belly points while stopping the escape.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Submissions from Knee on Belly</h2>
            <p>Knee on belly positions the attacker above the opponent's upper body with both arms free — excellent for attacking the far arm with the straight armbar. Grab the far wrist, post your elbow on their neck or chest, and extend the elbow joint. The near arm is also available for the kimura: grip the wrist and the elbow from above in the figure-four position. The baseball bat choke is a gi-specific technique from knee on belly — both hands grip the collar in opposite directions, then spin to north-south to finish. Triangle setups from knee on belly involve scooping one arm across and throwing a leg over the neck. The constant threat of these attacks means opponents frantically defend, creating movement patterns you can read and exploit.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Far-side armbar: post elbow on neck, control wrist, extend</li><li>Baseball bat choke: dual collar grips, then rotate to north-south</li><li>Spinning to the opposite side earns fresh knee-on-belly points</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Defending Knee on Belly</h2>
            <p>The primary defense against knee on belly is immediate, active movement — not passive acceptance of the pressure. As soon as the knee lands, frame with the near elbow against the knee and the far hand against the hip, creating counter-pressure that stops full weight distribution. Bridge into the knee to disrupt balance; the attacker cannot sit comfortably while you're actively bridging. Elbow-knee escapes from knee on belly convert to guard recovery by inserting the near knee between you and the attacker before they re-establish. The most common mistake is grabbing the attacking knee with both hands — this exposes both arms to submission attacks. Keep one arm defensive (pushing the knee) and one arm protecting the neck at all times while working your escape.</p>
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
