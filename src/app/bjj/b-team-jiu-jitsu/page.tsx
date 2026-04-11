import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "B-Team Jiu-Jitsu: Premier BJJ Academy Guide | AIBJJ",
  description: "Complete guide to B-Team Jiu-Jitsu, covering training programs, coaching philosophy, class structure, and how to join this respected BJJ academy.",
};

export default function Page() {
  const tags = ["b-team", "gordon-ryan", "austin"];
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
        <h1 className="text-4xl font-black sm:text-5xl">B-Team Jiu-Jitsu: Premier BJJ Academy Guide</h1>
        <p className="mt-4 text-xl text-zinc-400">Complete guide to B-Team Jiu-Jitsu, covering training programs, coaching philosophy, class structure, and how to join this respected BJJ academy.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">About B-Team Jiu-Jitsu</h2>
            <p>B-Team Jiu-Jitsu stands as a respected Brazilian Jiu-Jitsu academy dedicated to developing skilled martial artists through comprehensive training and mentorship. The academy emphasizes technical excellence, competitive preparation, and personal development for students of all levels. B-Team has earned recognition in the BJJ community for producing quality competitors and fostering a strong training culture. The academy maintains a welcoming environment while upholding high standards for technique and discipline. With experienced instructors who bring years of grappling experience, B-Team provides authentic instruction grounded in fundamental BJJ principles and modern competition strategies. The academy's reputation extends beyond its walls, with alumni competing successfully at regional and national levels. Whether you're a complete beginner or advanced practitioner, B-Team offers structured pathways for progression and skill development in a supportive community atmosphere.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Training Programs and Class Structure</h2>
            <p>B-Team Jiu-Jitsu offers diverse classes tailored to different experience levels and goals. Fundamental classes introduce beginners to essential BJJ movements, terminology, and safety principles. Intermediate programs develop more complex techniques including submissions, transitions, and positional strategies. Advanced classes focus on competition preparation, refining techniques, and exploring sophisticated game plans. Many academies following the B-Team model incorporate both gi and no-gi training, allowing students to develop versatility. Rolling sessions provide essential live training opportunities where students apply techniques under controlled resistance. Specialized programs may include kids' classes, women's-only sessions, and competition training camps. Class sizes typically remain manageable to ensure instructors provide adequate feedback and correction. The structured progression system helps students track advancement and establish clear goals. Regular belt testing protocols maintain quality standards across all ranks.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Coaching Philosophy and Instruction</h2>
            <p>B-Team Jiu-Jitsu emphasizes technical proficiency combined with practical application in live rolling. Instructors focus on teaching fundamental positions and movements before advancing to complex techniques. The academy promotes a methodical approach where students develop solid foundations before exploring advanced concepts. Coaches encourage problem-solving and adaptation rather than memorizing techniques, fostering independent thinking on the mat. Safety remains paramount with instructors emphasizing proper tapout communication and injury prevention. The teaching methodology often incorporates demonstration, explanation, and hands-on correction to accelerate learning. Instructors typically share competition experience, offering insights into tournament preparation and match strategy. Constructive feedback during rolling helps students identify areas for improvement and develop self-awareness about their game. This balanced approach between technical instruction and practical training creates well-rounded practitioners capable of adapting to various opponents and situations.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Getting Started at B-Team Jiu-Jitsu</h2>
            <p>Beginning your BJJ journey at B-Team Jiu-Jitsu requires minimal prior experience or athletic background. Most academies welcome complete beginners in fundamental classes where instructors provide thorough technique instruction and etiquette guidance. First-time visitors typically participate in a trial class to experience the training environment and community. No expensive equipment is needed initially, though most practitioners eventually invest in a quality gi for gi-specific training. Expect an introductory period where instructors assess your current fitness level and provide appropriate scaling for drills and rolling intensity. Monthly membership options make training accessible while maintaining commitment standards. Building relationships with training partners accelerates your learning and improves motivation. Consistent attendance throughout your first months establishes fundamental skills and integrates you into the academy community. Don't hesitate to ask instructors for personalized guidance regarding your progression, goals, and any physical considerations they should know about.</p>
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
