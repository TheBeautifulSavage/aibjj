import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Armbar from Side Control: Complete BJJ Guide | AIBJJ",
  description: "Master the armbar from side control with step-by-step instructions, key technical details, and strategic applications for all BJJ skill levels.",
};

export default function Page() {
  const tags = ["armbar", "side control", "submissions", "bjj techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Armbar from Side Control: Complete BJJ Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the armbar from side control with step-by-step instructions, key technical details, and strategic applications for all BJJ skill levels.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Armbar?</h2>
            <p>The armbar from side control is one of the most fundamental and effective submissions in Brazilian Jiu-Jitsu. This joint lock targets the opponent's elbow by hyperextending their arm, forcing them to either tap or risk serious injury. The armbar is prized because it transitions seamlessly from dominant positions like side control, where you've already established control over your opponent. From side control, the armbar requires minimal positional adjustment, making it a natural progression when your opponent attempts common escapes. This submission works at every belt level and remains a staple in both gi and no-gi competition. The technique's elegance lies in how it converts top control into a finishing position, making it essential knowledge for anyone developing a comprehensive submission game. Understanding how to set up and execute the armbar from side control provides tremendous value in both training and competition, as it capitalizes on positions you'll frequently establish.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Begin from a solid side control position with your body weight distributed across your opponent's torso. Control their far-side arm by securing their wrist or sleeve. Step your near-side knee up near their armpit while keeping your hips low and heavy. Post your far-side hand on the mat near their head for balance. Now transition your weight: rotate your hips and shoulders toward the opponent's head, sliding your near-side arm under their armpit and clamping their arm against your body. Your near-side shoulder should press against their armpit. Pivot on your far-side hand and rotate your body so you're perpendicular to them. Keep their arm trapped tight to your torso throughout. Drop your hips backward and over their trapped arm, creating the armbar position. Your thighs should frame their arm, with one leg on each side of their elbow. Finish by extending their arm and applying pressure through your hips, creating hyperextension at the elbow joint.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>The most critical detail is maintaining arm control throughout the transition. Many practitioners lose the arm during repositioning, allowing their opponent to escape. Keep the arm pinned tight to your torso with your shoulder and arm pressure. Your hips must be positioned perpendicular to their body, not parallel, to maximize leverage. Common mistakes include lifting your hips too early before securing the position—always establish frame control first. Don't post your far-side hand too close to your opponent; this limits your hip drop and reduces pressure. Another error is poor arm placement between their legs; your arm should be directly on the elbow joint, not higher on the triceps. Many beginners also fail to keep sufficient pressure with their body, allowing space for escape. Keep your knees bent and your hips tight to their arm. Finally, ensure your opponent's hand doesn't reach your legs or hips, as this can create leverage for escape. Control their wrist or hand position actively throughout the submission.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The armbar from side control excels when you have secure top position but your opponent is defending submissions from more advanced positions. Use it when your opponent's far arm is extended or accessible, indicating vulnerability. This technique is particularly valuable when transitioning from failed mount escape attempts, as you're already positioned ideally. In competition, the armbar becomes especially dangerous when your opponent is fatigued and their defensive reactions slow. It's an excellent finishing technique when you've spent several exchanges establishing dominant control. The armbar shines against opponents who defend their neck aggressively, as their focus on neck defense leaves their arms vulnerable. Use it strategically when your opponent has poor arm awareness or positioning. In rolling, employ this submission when your opponent commits to escaping side control through arm-based movements. It's also effective as a chain submission after failed neck cranks or other side control attacks. The armbar's reliability makes it perfect for both aggressive competitors pursuing points and submission specialists seeking to finish matches decisively.</p>
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
