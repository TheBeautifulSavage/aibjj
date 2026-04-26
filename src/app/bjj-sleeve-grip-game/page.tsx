import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ Sleeve Grip Game: Control, Sweeps & Submissions with Sleeve Grips | AIBJJ", description: "Master the sleeve grip game in gi BJJ. Learn how sleeve control enables sweeps, guard retention, and submission setups at every belt level." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "BJJ Sleeve Grip Game: Control, Sweeps & Submissions with Sleeve Grips", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Sleeve Grip Game: Control, Sweeps & Submissions with Sleeve Grips</h1>
        <p className="mt-4 text-xl text-zinc-400">Sleeve grips are the engine of modern gi guard play. Controlling the wrist and sleeve neutralizes the opponent's attacking hand while opening sweeps and submission chains that work at every level of competition.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">The Mechanics of Effective Sleeve Control</h2><p>A proper sleeve grip requires your fingers to hook deep into the sleeve fabric while your thumb locks the grip shut. The two most common sleeve grips are the pistol grip — where you grab the cuff like a gun handle — and the standard four-finger grip at the wrist. The pistol grip offers maximum control of the hand, making it nearly impossible for the opponent to post or push. From spider guard, you pair sleeve grips with your feet on the biceps to create a powerful frame. The key principle: when you control both sleeves, you control both hands. An opponent with no free hand cannot posture, cannot post to prevent sweeps, and cannot threaten submissions. Sleeve grip fighting — the battle to establish and break these grips — is a core skill that separates intermediate from advanced gi players.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Sweeps Built on Sleeve Grip Domination</h2><p>The tomoe nage (overhead sweep), scissor sweep, and pendulum sweep all rely on sleeve grip control to execute properly. With both sleeves controlled from closed guard, the scissor sweep becomes almost mechanical: pull one sleeve across your body, push the other away, scissor your legs, and roll. The lumberjack sweep from open guard uses a two-sleeve grip to off-balance the opponent laterally. For De La Riva guard, maintaining one sleeve grip while your outside leg hooks keeps you connected to a standing opponent and prevents guard passing. The arm drag — shooting one sleeve hand through to take the back — is one of the highest-percentage attacks in gi BJJ. Competitors who invest in sleeve grip mastery find they can sweep opponents who are stronger and bigger because the mechanical leverage of sleeve control bypasses raw strength entirely.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Sleeve Grips for Guard Retention and Passing Defense</h2><p>Sleeve grips are equally powerful on defense. When a passer reaches around your guard to grab your pants or hips, immediately seize their sleeve. One sleeve grip re-frames the position — you can now redirect their passing pressure, recover guard, or transition to an attack. Double sleeve grips from the bottom completely shut down pressure passing. The opponent cannot flatten you out without a free hand to control your hip or head. This is why many elite guard players establish sleeve grips the moment they feel their guard being threatened. Combine sleeve grips with hip movement and you turn a defensive moment into an offensive opportunity. Train sleeve grip fighting by focusing on grip breaks in sparring — understanding how opponents try to strip your grips helps you develop more secure, hidden grip positions that last through scrambles and positional transitions.</p></section>
        </div>
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Level Up Your BJJ</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — all in one place.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
      </article>
    </div>
  );
}
