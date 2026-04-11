import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Americana from Mount: Complete BJJ Technique Guide | AIBJJ",
  description: "Master the Americana shoulder lock from mount position. Learn setup, execution, and key details for this fundamental BJJ submission.",
};

export default function Page() {
  const tags = ["americana", "shoulder lock", "mount position", "submissions"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Americana from Mount: Complete BJJ Technique Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master the Americana shoulder lock from mount position. Learn setup, execution, and key details for this fundamental BJJ submission.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What is the Americana?</h2>
            <p>The Americana, also called the V-lock or figure-four armlock, is a shoulder lock submission applied from the mount position. It's one of the most fundamental submissions in Brazilian Jiu-Jitsu, favored for its reliability and mechanical soundness. The technique works by trapping the opponent's arm and using their own arm as leverage to hyperextend and internally rotate the shoulder joint. Unlike many submissions that require significant strength, the Americana relies heavily on proper positioning and leverage. The name 'Americana' comes from its popularity in North America, though it's practiced worldwide at all skill levels. This submission is particularly effective because it's difficult for opponents to escape once properly locked, making it a staple in both competition and self-defense. The technique teaches fundamental concepts about leverage, positioning, and control that apply throughout Brazilian Jiu-Jitsu.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Setup</h2>
            <p>First, establish a solid mount position with your weight distributed and hips heavy. Move your opponent's arm across their own body by controlling their wrist or tricep. Position yourself so you're perpendicular to their torso. Grab your opponent's wrist with one hand while placing your other hand on top of their arm, creating a frame. Your top hand should grip near their elbow or bicep. Begin rotating your hips to increase pressure and lock the position tight. Keep your base wide and maintain control. Press your opponent's arm down toward their own body using both hands in a figure-four configuration. Your bottom hand grips your wrist, creating the lock. Slowly increase pressure by rotating your hips forward and pressing downward. The key is steady, controlled pressure rather than jerking movements. Your opponent should tap immediately when trapped properly, so avoid applying sudden force that risks injury.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Key Details and Common Mistakes</h2>
            <p>A crucial detail is maintaining control of the wrist throughout the submission. If you lose wrist control, your opponent can escape by rotating their arm. Keep your body perpendicular to theirs for maximum leverage. Your weight should be distributed evenly to prevent them from bridging out. Common mistakes include applying the lock too loosely, allowing escape opportunities. Many beginners also fail to control the opponent's hips adequately, enabling them to buck you off. Another error is positioning the arm incorrectly across their body, reducing shoulder pressure. Avoid jerking or using excessive force suddenly, as this increases injury risk. The Americana should feel controlled and relentless rather than violent. Keep your elbows tight and maintain the figure-four grip without gaps. Some practitioners hesitate applying proper pressure, reducing effectiveness. Remember that this is a powerful submission that requires only moderate pressure when positioned correctly.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">When to Use This Technique</h2>
            <p>The Americana is most effective when you establish a dominant mount position and your opponent tries to bridge or escape by pushing on your hips. It's ideal when your opponent extends their arm defensively. Use this submission when you have both underhooks or when your opponent's arms are positioned vulnerably. The technique works at all belt levels and is particularly useful in competition because it's recognized immediately by referees. It's an excellent first submission to attempt from mount before progressing to more complex techniques like armbars or chokes. The Americana is also valuable for controlling defensive opponents who resist other submissions. Use it strategically when your opponent defends against collar chokes or other neck attacks by posting their arm. This submission is also effective when you catch your opponent turning into you from mount. Because it requires solid positioning more than exceptional strength, the Americana is perfect for smaller grapplers competing against larger opponents. It's a reliable backup when your initial submission attempts fail.</p>
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
