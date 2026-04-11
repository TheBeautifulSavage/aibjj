import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Competition Preparation BJJ: Complete Training Guide | AIBJJ",
  description: "Master BJJ competition prep with expert strategies for training, weight management, technique refinement, and mental conditioning. Get tournament-ready tod",
};

export default function Page() {
  const tags = ["competition", "training", "mindset"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Competition Preparation BJJ: Complete Training Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Master BJJ competition prep with expert strategies for training, weight management, technique refinement, and mental conditioning. Get tournament-ready today.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Training Periodization and Programming</h2>
            <p>Effective competition preparation requires structured training cycles aligned with your tournament date. Begin with a macrocycle spanning 12-16 weeks, divided into phases: foundation building, technique refinement, intensity work, and competition taper. During foundation phases, focus on drilling fundamentals and conditioning with 60-70% intensity. Progress to live rolling at 75-85% intensity, incorporating specific scenarios you'll face. Two weeks before competition, reduce training volume by 40-50% while maintaining intensity to ensure peak freshness. Periodize your weekly schedule with dedicated days for strength training, explosive movements, and skill development. Include both gi and no-gi sessions if your competition format allows. Track all training in a log to monitor progress and adjust intensity accordingly. This structured approach prevents overtraining while building competition-specific fitness and technical sharpness.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Weight Management and Nutrition</h2>
            <p>Proper weight management ensures you're strong and healthy on competition day. Establish your target weight class 8-12 weeks out and plan gradual adjustments if needed. Never attempt dangerous rapid weight cuts; instead, maintain consistent nutrition with adequate protein intake for muscle preservation. Focus on whole foods including lean meats, vegetables, complex carbohydrates, and healthy fats. Time your carbohydrate intake around training sessions for sustained energy. Stay hydrated continuously throughout preparation. One week before competition, slightly reduce sodium and increase water intake to prevent dehydration issues. On weigh-in day, rehydrate carefully with electrolyte solutions post-weigh-in. Work with a nutritionist familiar with combat sports if making significant weight adjustments. Proper fueling supports both training intensity and recovery, directly impacting your performance. Never compromise health for a weight class; competing strong in a slightly higher division outweighs competing depleted.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Technical Preparation and Game Planning</h2>
            <p>Develop a strategic game plan tailored to your strengths and competition format. Video analyze potential opponents when possible to identify patterns and tendencies. Practice your primary techniques repeatedly until they're automatic under fatigue and pressure. Build a technical arsenal including an opening sequence, primary submissions, transitions, and guard passes. Dedicate training time to your weakest positions since these typically cost matches. Practice escapes and defensive positioning extensively, as tournament matches often reward solid defense. Train specific scenarios like points-based matches, submission-only rules, and overtime situations. Vary training partners to experience different styles and strategies. Spend dedicated time with your coach reviewing competition-specific techniques and counters. Perfect your gripping strategies, positioning, and timing. Record your own rolling to analyze technical gaps. By competition day, your techniques should feel ingrained and automatic, freeing your mind to execute strategy rather than think about movements.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Mental Preparation and Competition Mindset</h2>
            <p>Mental conditioning is equally important as physical training for competition success. Develop visualization techniques, mentally rehearsing successful performances and specific techniques multiple times weekly. Build confidence through consistent training wins against quality partners. Establish pre-competition routines including warm-up sequences, breathing exercises, and positive affirmations. Practice stress management techniques like meditation or progressive muscle relaxation. Create realistic goals beyond winning: executing your game plan, demonstrating specific techniques, or maintaining composure. Familiarize yourself with the tournament venue if possible, reducing competition-day anxiety. Study competition rules thoroughly to avoid penalties from misunderstandings. Develop a competition day checklist covering equipment, nutrition, and timing. Practice competing in training by simulating tournament pressure and intensity. Embrace nervousness as positive energy rather than fear. Sleep adequately in the final week and avoid overtraining. On competition day, focus on controllables: your effort, technique execution, and mental focus rather than outcomes beyond your control.</p>
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
