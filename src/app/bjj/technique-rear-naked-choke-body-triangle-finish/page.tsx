import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Rear Naked Choke with Body Triangle Finish | AIBJJ",
  description: "Master the rear naked choke body triangle finish. Learn setup, execution, and finishing mechanics for one of BJJ's most effective submissions.",
};

export default function Page() {
  const tags = ["rear naked choke", "body triangle", "submission", "advanced technique"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Rear Naked Choke with Body Triangle Finish</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the rear naked choke body triangle finish. Learn setup, execution, and finishing mechanics for one of BJJ's most effective submissions.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Rear Naked Choke?</h2>
            <p>The rear naked choke is a fundamental submission where you control your opponent from behind and apply pressure to their neck using your arm. The 'body triangle' variation adds leg control, creating an inescapable finishing position. This submission works by cutting off blood flow to the carotid arteries on both sides of the neck, causing the opponent to lose consciousness in seconds if not released. It's called 'naked' because no collar or gi fabric is needed—just your arm. The body triangle enhances this by preventing your opponent from defending, turning, or escaping. This combination is considered one of the most efficient submissions in BJJ and MMA because once achieved, it's nearly impossible to defend. The body triangle finish is especially valuable in no-gi grappling where grips are less secure. Understanding the mechanics of both the choke and the body triangle separately will help you execute this devastating combination effectively.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin by achieving back control, which means your opponent's back is to your chest. Secure a solid grip around their neck with your choking arm, placing your forearm against one side of their neck. Your other hand controls their far arm or helps establish the position. Now lock in the body triangle: wrap your legs around their torso by placing one leg over their hip and threading your other leg underneath, then cross your ankles. Squeeze your legs tightly, rotating your hips forward to apply pressure. This immediately limits their ability to defend. Lean back slightly, then set up the choke by bringing your choking arm's bicep toward their carotid artery. Place your other hand behind their head for control. Secure your choking hand by gripping your own bicep with your free hand, or interlace your fingers. The body triangle keeps them immobilized while you apply steady pressure by pulling your elbow downward and squeezing your legs. The choke tightens as you increase pressure gradually, giving your opponent time to tap.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>A critical detail is arm placement: your choking arm's bicep must be on the carotid, not the windpipe. Pressing the trachea causes gasping rather than unconsciousness and is less efficient. Ensure your body triangle is tight—loose leg control allows escape. Your legs should squeeze inward continuously, not just hold position. Many students fail to use their hands effectively; your grip on your own bicep adds significant pressure. Common mistakes include applying the choke too quickly before the body triangle is secure, allowing your opponent to defend. Another error is poor positioning—if you're too high on their back, the choke won't work properly. Your hips should be lower, creating downward angle when you lean back. Also avoid telegraphing the submission; transition smoothly from back control into the triangle before attacking the neck. Maintain constant pressure on all fronts—hands, arms, and legs working together. Don't relax your leg squeeze even while focusing on the choke.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The body triangle rear naked choke is most effective when you've already established back control and your opponent isn't actively defending. It's ideal in no-gi grappling where grips are less reliable, as the leg control compensates. Use this finish when your opponent is trying to turn into you—the body triangle immediately prevents this escape. It's valuable in competition when your opponent is fatigued and defensive. In training, it's excellent for controlling aggressive opponents who resist upper-body submissions. The body triangle variation is particularly useful against larger opponents because leg strength often exceeds arm strength, and the leg lock prevents them from using their size to escape. This technique shines when you have time to set it up rather than in scrambles. It's not ideal when your opponent is actively bridging and rotating aggressively—sometimes a faster arm-only choke is better. Use this in rounds where you've controlled the pace and have positional dominance. It's a high-percentage finishing technique in positional grappling exchanges and works well as a counter when opponents defend other submissions from back control.</p>
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
