import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BJJ Gi Chokes: Complete Guide to Collar Chokes, Loop Chokes & More | AIBJJ", description: "Master every BJJ gi choke: cross collar, bow-and-arrow, loop choke, baseball bat choke. Mechanics, setups, and finishing details for every position." };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "BJJ Gi Chokes: Complete Guide to Collar Chokes, Loop Chokes & More", "publisher": { "@type": "Organization", "name": "AIBJJ", "url": "https://aibjj.com" } }) }} />
<article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-black">BJJ Gi Chokes: Complete Guide to Collar Chokes, Loop Chokes & More</h1>
        <p className="mt-4 text-xl text-zinc-400">The gi unlocks a unique arsenal of chokes unavailable in no-gi. From the classic cross-collar choke to the devastating bow-and-arrow, gi chokes are some of the highest-percentage submissions in BJJ competition.</p>
        <div className="mt-10 space-y-8 text-zinc-300">
          <section><h2 className="text-2xl font-bold text-white mb-3">Cross-Collar Choke: The Fundamental Gi Submission</h2><p>The cross-collar choke (or cross choke) is the first gi submission most practitioners learn, and it remains one of the most effective at every level. From closed guard, shoot your dominant hand deep into the collar — knuckles facing down, hand reaching past the opposite ear. Your second hand grabs the near collar with knuckles up. Elbows drive inward and down, while you curl your wrists to tighten. The choke works by compressing both carotid arteries simultaneously, causing unconsciousness within seconds. The challenge is getting the grips deep enough. Shallow grips create a blood choke that taps strong opponents but allows flexibility against neck muscles. The cross choke also works from mount, where gravity assists the finish, and from the top of turtle position where your opponent's curved spine helps expose the collar.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Bow-and-Arrow Choke: The Back Control Finisher</h2><p>The bow-and-arrow choke is widely considered the most powerful gi choke in BJJ. From back control, establish a deep cross-collar grip with your top hand. Your bottom hand grabs the opponent's same-side pants at the knee. Now extend your body like drawing a bow — your collar arm pulls, your pants arm pushes the knee away, and your hips drive into their back. The rotational torque created is massive. Unlike standard rear naked choke mechanics, the bow-and-arrow uses the opponent's entire body as a lever. Even muscular opponents with strong neck muscles cannot resist the combined force. Finishing details: your elbow points to the ceiling as you lean back; keep your collar grip hand's wrist straight; extend your bottom leg to create the bow shape. This choke has ended countless championship matches and is a must-learn for any serious gi player.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-3">Loop Choke, Baseball Bat, and Ezekiel Choke</h2><p>The loop choke is a sneaky collar choke that catches opponents when they posture aggressively. From guard, reach over their head and feed your arm through so your forearm presses one side of the neck while the collar fabric cuts the other. As they drive forward, they tighten the choke themselves. The baseball bat choke uses two collar grips — one deep, one shallow — with a specific wrist rotation that creates tremendous pressure. It's a top position choke that works from mount or half guard top. The Ezekiel choke is unique: your own sleeve fabric is the choking implement. From mount, slip your hand inside your sleeve, place the forearm across the throat, and grip the collar with the same-side hand. No collar grip needed from the opponent. These three chokes represent advanced gi submission knowledge that separates blue belts from purple belts in competition.</p></section>
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
