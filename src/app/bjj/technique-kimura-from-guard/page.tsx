import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Kimura from Guard: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the kimura from guard position. Learn setup, mechanics, and application strategies for this powerful shoulder lock in Brazilian Jiu-Jitsu.",
};

export default function Page() {
  const tags = ["kimura", "shoulder lock", "guard", "submissions"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Start Free</Link>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">Kimura from Guard: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the kimura from guard position. Learn setup, mechanics, and application strategies for this powerful shoulder lock in Brazilian Jiu-Jitsu.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Kimura?</h2>
            <p>The kimura, also known as a figure-four armlock or reverse uchi mata lock, is a shoulder lock submission that targets the opponent's shoulder joint through internal rotation and leverage. Named after legendary judoka Masahiko Kimura, this technique is one of BJJ's most fundamental and effective submissions. From the guard position, the kimura becomes particularly dangerous because you control your opponent's posture while securing their arm. The submission works by isolating one arm and applying pressure through a figure-four grip on the wrist and elbow, forcing the shoulder into a compromised position. What makes the kimura so valuable is its versatility across all positions and belt levels. Even when it doesn't result in a tap, it creates positional advantages and opens opportunities for other submissions. The kimura also teaches essential grappling principles about controlling your opponent's limbs and using leverage rather than strength.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin in closed guard with your opponent posturing up. Control their posture by holding their head or collar with one hand. With your other hand, trap their same-side arm by grabbing their wrist from inside, preventing them from posting or escaping. Pull their trapped arm across your body toward the opposite side. Now comes the critical grip: thread your bottom-side arm underneath their elbow and clasp your hands together in a figure-four grip, with one hand holding your opposite wrist. Position your top hand near their wrist and bottom hand near their elbow. Once secured, lean back and keep their arm tight to your chest. To finish, apply pressure by pulling their wrist toward their head and their elbow toward their hip simultaneously. This creates internal shoulder rotation. You can also elevate your hips into their armpit for additional pressure. Control their opposite arm to prevent them from rolling or countering.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>A common mistake is holding the grip too loosely, allowing escapes before pressure is applied. Keep their arm glued to your body throughout. Another error involves not controlling the opposite arm, giving opponents the chance to roll out or stack you. Always manage both their arms when possible. Some practitioners rush to apply pressure without first securing the position, resulting in failed submissions. Take time establishing the grip and isolating the arm completely. The grip itself is crucial: your hands must clasp securely around their wrist and elbow area, not their forearm. Many practitioners also fail to keep their hips elevated and their back against the mat, reducing leverage. Maintain constant control over their posture to prevent them from standing up or flattening you. Additionally, watch for the common defensive response of shoulder rolling or turning their hips to relieve pressure. Counter this by keeping their arm tight to your body and maintaining your hip control. Finally, some fighters give up the submission too easily when resistance increases rather than adjusting pressure angles.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The kimura from guard is most effective when your opponent is actively posturing up and moving forward into your guard. It's particularly useful against opponents who extend their arm to control you or when they're attempting to pass your guard. Use it when your opponent commits both hands for pressure, as they become focused on posturing rather than arm protection. The kimura works especially well against larger opponents since you're using leverage and joint mechanics rather than strength. It's also an excellent teaching technique for beginners learning shoulder lock mechanics. Contextually, attack the kimura when your opponent expects leg lock submissions, catching them off-guard. Against opponents strong in positional control who resist footlock attempts, the kimura redirects their focus to arm defense. However, avoid this submission against very flexible opponents or those experienced with escapes, as they may slip out. The kimura also sets up sweeps and other attacks; sometimes you're not necessarily finishing but creating movement and positional changes. It pairs well with omoplata attempts, as switching between these two shoulder attacks confuses defensive responses and keeps your opponent guessing your true intent.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Smarter with AI Coaching</h2>
          <p className="mt-2 text-zinc-400">Track your training, get personalized coaching, and build your game plan.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
            <Link href="/bjj-techniques" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Technique Library</Link>
            <Link href="/coach" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">AI Coach</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
