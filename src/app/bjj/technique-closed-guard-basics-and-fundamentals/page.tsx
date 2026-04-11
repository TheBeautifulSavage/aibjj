import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Closed Guard Fundamentals: Complete BJJ Beginner Guide | AIBJJ",
  description: "Master closed guard basics in BJJ. Learn setup, positioning, and fundamental techniques to control opponents from your back.",
};

export default function Page() {
  const tags = ["closed guard", "BJJ fundamentals", "guard position", "beginner techniques"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Closed Guard Fundamentals: Complete BJJ Beginner Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master closed guard basics in BJJ. Learn setup, positioning, and fundamental techniques to control opponents from your back.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Closed Guard?</h2>
            <p>The closed guard is one of the most fundamental and powerful positions in Brazilian Jiu-Jitsu. You're on your back with your legs wrapped around your opponent's torso, feet locked together behind their back. This position gives you excellent control despite being underneath your opponent. The closed guard is often considered the safest guard position for beginners because it limits your opponent's mobility and creates natural space management. Your legs become your primary tool for control, allowing you to prevent your opponent from advancing, creating angles for submissions, and setting up sweeps. The closed guard teaches essential principles that apply throughout BJJ: control before submission, using your legs efficiently, and maintaining structural integrity. Most modern BJJ instruction begins here because it builds confidence for smaller practitioners and teaches proper hip mechanics and timing.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>Start by lying flat on your back with your opponent in top position between your legs. First, establish connection by placing your hands on their back or shoulders. Pull their upper body close to your torso, minimizing space. Plant your feet flat on the mat with knees bent, positioned outside their hips. Wrap your legs around their waist, threading your legs together. Lock your feet by crossing one ankle over the other behind their back, creating a seal. Your shins should make contact with their sides. Keep your hips engaged and slightly elevated. Position your hands for control: typically one hand controls their collar or shoulder while the other grips their tricep or back. Maintain an upright posture with your head neutral. Squeeze your legs consistently to prevent them from breaking free. Your elbows stay inside your knees, protecting against arm drags. Practice transitioning in and out smoothly with a partner moving slowly to develop muscle memory.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>Critical details: keep constant leg pressure without overexertion, which wastes energy. Your foot lock should be tight but not ankle-breaking. Maintain upper body connection—don't let your opponent create distance. Control their posture by pulling their chest toward yours. Common mistakes include locking your feet too high, reducing leverage. Beginners often squeeze their legs only occasionally instead of maintaining constant pressure. Many fighters neglect hand control, focusing only on leg strength. This leaves them vulnerable to arm drags and passing sequences. Avoid extending your legs fully, which weakens your position. Don't cross your legs at the knees instead of ankles—this creates instability. A frequent error is keeping your hips flat; slight elevation gives better mechanical advantage. Guard retention requires active engagement: constantly reposition your hands and adjust leg pressure based on your opponent's movement. Understand that the closed guard isn't just passive holding; it's an active position requiring continuous adjustments and technical awareness.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The closed guard is your default position when you find yourself on your back with an opponent in your hips. Use it immediately after being taken down or when transitioning from another guard. It's particularly valuable when you want to control aggressive opponents who try to pass aggressively. The closed guard works best when your opponent has already committed their weight forward. It's ideal for executing submissions like arm triangles, triangles, and omoplata attacks. Use closed guard when you want to dictate pace and control—it limits your opponent's options significantly. This position is excellent for beginners because it provides safety while you develop offensive skills. Closed guard shines in gi grappling more than no-gi, where grip strength matters more. It's less effective against very skilled passers who understand modern passing mechanics. Transition away when your opponent creates significant distance or when you want to attack with hip movement-dependent techniques. The closed guard also serves as a platform for sweeps, particularly when combined with proper timing and hip escapes. Understanding when to maintain versus transition out of closed guard demonstrates developing positional awareness.</p>
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
