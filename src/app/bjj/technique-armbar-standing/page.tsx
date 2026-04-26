import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Standing Armbar: Complete BJJ Technique Guide | AIBJJ",
  description: "Learn the standing armbar in BJJ. Master setup, execution, and common mistakes with our comprehensive step-by-step guide for all skill levels.",
};

export default function Page() {
  const tags = ["armbar", "standing techniques", "submissions", "BJJ fundamentals"];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
<article className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link key={tag} href={`/bjj/tag/${tag}`}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:border-red-600/50 hover:text-red-400 transition-colors">
              #{tag}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-black sm:text-5xl">Standing Armbar: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn the standing armbar in BJJ. Master setup, execution, and common mistakes with our comprehensive step-by-step guide for all skill levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Armbar?</h2>
            <p>The standing armbar is a powerful submission that hyperextends an opponent's elbow joint from a standing position. Unlike the more common ground armbar, the standing version creates immediate pressure and often forces quick submissions due to the added leverage from gravity. This technique is highly effective in both gi and no-gi grappling and works against opponents of all sizes when executed properly. The armbar isolates one arm and uses your body position to create an irreversible mechanical disadvantage. Understanding the standing armbar gives you a valuable finishing option that complements your clinch game and standing grappling arsenal. It's particularly devastating when combined with underhook positions or when your opponent attempts to escape from collar tie control. The standing armbar demonstrates how positioning and leverage matter far more than strength in Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin from a strong clinch position with control of your opponent's arm and collar or head. Step to the side of their controlled arm, creating angle and distance. Grip their wrist firmly with both hands, ensuring your hands are locked and immovable. Pull their arm across your hip while simultaneously turning your hips into them. Drop your level and keep their arm extended and pinned against your body. Your goal is to isolate their elbow on your hip bone as a fulcrum. Once positioned correctly, press your hip forward and slightly downward while pulling their wrist toward your chest. The pressure should come from hip movement, not arm strength. Keep their arm extended and prevent them from bending their elbow or pulling it toward their body. Maintain control of their head or collar with one hand if possible to prevent them from rolling out. The submission works best when applied quickly and decisively as your opponent initially realizes they're caught.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most critical element is isolating their elbow as the pivot point on your hip. Many practitioners apply pressure to the wrist instead of the elbow, which allows skilled opponents to escape. Your hips must drive the submission, not your arms. Keep their arm straight and prevent any elbow bend, which immediately negates the technique. Don't simply pull on their wrist; instead, use rotational hip pressure combined with forward hip drive. A common mistake is releasing your grip prematurely. Maintain a death grip on their wrist throughout the entire submission attempt. Your body positioning matters tremendously—angle your hips perpendicular to their arm for maximum mechanical advantage. Avoid standing too close or too far away from them. Proper distance allows your hip to become the fulcrum without creating slack in their arm. If they start bending their elbow, you've already lost leverage. Some grapplers struggle because they don't control their opponent's head or collar, allowing them to roll out. Always maintain upper body control simultaneously.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The standing armbar is most effective when you've already established dominant clinch control. Use it as a finishing technique when your opponent resists your collar tie or underhook attempts. This submission excels against opponents who pull their arm to defend or who try to circle away from your clinch. Wrestlers and judoka often get caught in standing armbars because they're unfamiliar with protecting their arms during standing transitions. The technique works excellently in scrambles where you catch an extended arm. Use it against larger opponents because the mechanical advantage neutralizes strength differences. In competition, the standing armbar creates immediate threat that opens other passing and takedown opportunities. If your opponent defends by stiffening their arm, capitalize immediately with the submission. It's also highly effective as a counter to certain takedown attempts where they overextend their arm. The standing armbar particularly shines in no-gi grappling where grip security is harder to achieve. Combine it with collar tie breaks or when transitioning from failed takedown attempts. The surprise factor makes it devastating when opponents don't expect it from your clinch position.</p>
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
