import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BJJ Back Mount: Taking the Back and Finishing Submissions | AIBJJ",
  description: "Master BJJ back mount — the highest-percentage submission position. Learn how to take the back, secure hooks, maintain control, and finish the rear naked choke.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "BJJ Back Mount: Control and Submission Guide",
    "author": { "@type": "Organization", "name": "AIBJJ" },
    "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Back Mount: Control and Submission Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Back mount is the most dangerous position in Brazilian Jiu-Jitsu — the person on the back sees everything, controls everything, and the person defending can see nothing. It's worth 4 points and converts to submissions at the highest rate of any position.</p>
        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Achieving and Securing Back Mount</h2>
            <p>Back mount is achieved when you are behind your opponent with both heels hooked inside their thighs (hooks) and your chest attached to their back. The seatbelt grip — one arm over the shoulder (top arm) and one arm under the armpit (bottom arm) of the opponent — is the standard control. A body triangle, where one leg crosses over the other in front of the opponent's hips, provides even stronger control and prevents the standard hook defense. Securing the position requires keeping your hips directly behind theirs — if you allow your hips to slide to one side, they can spin into you or escape. When maintaining back mount, never allow both of your arms to reach the same side; stay on the centerline. Work to bring your top arm across their neck into a rear naked choke grip even before the position is fully established.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Rear Naked Choke Mechanics</h2>
            <p>The rear naked choke (RNC) is the most finished submission in grappling history. Proper mechanics: slide your top arm across the opponent's neck with your bicep on one side and your forearm on the other. Lock the hand of the choking arm on your own bicep of the other arm. The other hand presses behind the opponent's head, driving the neck into the choking arm. Tighten by pulling your elbows together and extending your chest. The choke works by compressing the carotid arteries, not the windpipe — squeezing the throat is less effective and easier to defend. If they tuck their chin defensively, attack the back of the head with the non-choking hand to tilt their head and expose the neck. From a secured body triangle, you can work the choke with both arms dedicated to the neck rather than hook maintenance.</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-zinc-400">
              <li>Lock on the bicep before squeezing — not a wrist lock</li><li>Attack the neck from the top-arm side where their defense is weaker</li><li>Body triangle removes hook maintenance — both arms go to the choke</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Back Mount Maintenance and Transitions</h2>
            <p>Maintaining back mount requires constant micro-adjustments. When the opponent tries to slide down and out, elevate your hips and squeeze your hooks. When they try to spin into you, follow their rotation and stay attached at the hips. When they grab your choking arm with both hands to defend, switch to the opposite side choke setup or attack the arm they've exposed. If they successfully escape one hook, immediately transition to a modified position rather than losing the position entirely. A single hook with chest attachment is still half-back position and scores in many rulesets. When the back becomes untenable, transition to mount rather than allowing a full escape. The back-to-mount transition preserves positional dominance while resetting your attack options.</p>
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
