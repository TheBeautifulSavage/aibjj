import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "BJJ Training Methodology: Proven Techniques and Approaches | AIBJJ",
  description: "Discover effective BJJ training methodologies including structured progressions, drilling techniques, sparring strategies, and periodized training plans to",
};

export default function Page() {
  const tags = ["training", "drilling", "methodology"];
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ Training Methodology: Proven Techniques and Approaches</h1>
        <p className="mt-4 text-xl text-zinc-400">Discover effective BJJ training methodologies including structured progressions, drilling techniques, sparring strategies, and periodized training plans to accelerate your grappling development.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Structured Progressive Training</h2>
            <p>Effective BJJ training follows a progressive structure that builds foundational skills before advanced techniques. Begin with fundamental movements like hip escapes, shrimp movements, and basic guard positions. Gradually introduce positional work, focusing on maintaining control before pursuing submissions. This layered approach prevents injuries and ensures lasting skill development. Most gyms organize training by belt level, allowing students to train with appropriate partners. The progression typically spans multiple years, with each belt level introducing more complex techniques and higher intensity sparring. Consistent attendance combined with this structured methodology ensures steady improvement and proper technique refinement before attempting advanced submissions or competition-level intensity.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Drilling and Repetition Methods</h2>
            <p>Drilling is essential for developing muscle memory and technical proficiency in BJJ. Effective drilling involves repetitive practice of specific techniques without resistance, allowing perfect form execution. Common drilling methods include solo drills, partner-assisted drills, and positional drilling with varying resistance levels. Many instructors implement drill sequences targeting specific positions or techniques per class. Quality repetitions matter more than quantity; performing techniques slowly with perfect mechanics builds superior patterns. Advanced trainees use live drilling where partners provide realistic resistance while maintaining controlled intensity. Incorporate drilling into your routine at least twice weekly. Video analysis of your drilling helps identify flaws. Consistent drilling accelerates progression, improving timing, balance, and technique execution significantly faster than relying solely on sparring.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Sparring Strategy and Intensity Management</h2>
            <p>Sparring, or rolling, applies learned techniques against resisting opponents. Effective sparring strategy varies by training phase and goals. Light rolling focuses on technique application and experimentation without ego, preserving partner safety and longevity. Medium intensity rolling develops problem-solving while maintaining control. Heavy rolling simulates competition conditions and builds mental toughness. Successful trainees rotate intensity levels throughout the week, preventing burnout and overuse injuries. Periodize your rolling: include technical rolling sessions, position-specific rolling, and submission-focused rolling. Communicate with partners about intensity expectations beforehand. Rolling against varied opponents—stronger, weaker, larger, and smaller—develops adaptability. Track rolls mentally to identify patterns in your game. Post-roll analysis with training partners accelerates learning. Balanced sparring frequency with adequate recovery prevents injury and maintains long-term progression in BJJ.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Periodization and Long-Term Planning</h2>
            <p>Periodized training organizes training into phases with specific focuses to optimize progression and peak performance. Macrocycles span entire competitive seasons, mesocycles cover 4-12 week blocks, and microcycles represent individual training weeks. Common periodization includes off-season phases emphasizing volume and technique, competition phases reducing volume while maintaining intensity, and peaking phases targeting specific skills. Technical periods prioritize drilling and technique refinement with lighter rolling. Strength-building phases incorporate conditioning and resistance work. Taper periods before competitions reduce volume while maintaining intensity. Periodized approaches prevent plateaus and overuse injuries through varied stimulus. Many successful competitors plan annual training calendars with multiple competition peaks. Track training data: techniques learned, sparring partners, intensity levels, and injury notes. Adjust periodization based on personal goals—recreational students use relaxed plans while competitors follow strict schedules. Structured long-term planning transforms casual training into systematic development toward mastery.</p>
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
