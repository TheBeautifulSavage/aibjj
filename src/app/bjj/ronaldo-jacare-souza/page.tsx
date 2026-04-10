import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Ronaldo Jacare Souza: BJJ Legend & MMA Champion | AIBJJ",
  description: "Explore the career of Ronaldo Jacare Souza, Brazilian Jiu-Jitsu master and UFC middleweight title contender with elite grappling skills.",
};

export default function Page() {
  const tags = ["Ronaldo Jacare Souza", "Brazilian Jiu-Jitsu", "MMA", "UFC", "Grappling"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Ronaldo Jacare Souza: BJJ Legend & MMA Champion</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore the career of Ronaldo Jacare Souza, Brazilian Jiu-Jitsu master and UFC middleweight title contender with elite grappling skills.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Ronaldo Marques de Souza, known as Jacare, was born on July 6, 1979, in Brazil and discovered Brazilian Jiu-Jitsu at a young age. Growing up in a country where BJJ is deeply embedded in the culture, Jacare dedicated himself to mastering the martial art under experienced instructors. He earned his black belt through years of consistent training and competition, developing a reputation as a technical and submission-focused grappler.

Jacare's early competition career in BJJ showcased his exceptional skill in leg lock systems and positional control. He competed in multiple IBJJF divisions and absolute competitions, earning accolades that established him as one of Brazil's premier grapplers. His success in pure grappling competitions attracted attention from the MMA world, leading him to transition into professional fighting while maintaining his BJJ credentials.

Throughout his career, Jacare remained connected to the BJJ community, earning his spot among the sport's most respected technical practitioners. His transition to MMA did not diminish his commitment to the fundamentals of Brazilian Jiu-Jitsu, which became the foundation of his fighting success.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Ronaldo Jacare Souza built an impressive MMA record competing primarily in the UFC middleweight division, amassing 28 wins and establishing himself as a title contender. His grappling-heavy approach resulted in numerous submission victories, making him one of the most feared grapplers in UFC history. Jacare challenged for the UFC middleweight championship and remained a ranked competitor throughout his career, facing elite opposition consistently.

Beyond MMA, Jacare's achievements in submission wrestling tournaments and BJJ competitions earned him respect across both sports. He competed in multiple submission-based events and maintained an elite ranking among heavyweight and absolute competitors. His notable MMA victories include wins over high-level opponents, demonstrating his ability to execute complex grappling sequences against world-class fighters.

Jacare's longevity as a top-tier competitor spanned nearly two decades, proving his technical superiority and adaptability. His consistent performance against championship-level opponents solidified his legacy as one of the most accomplished grapplers to successfully transition into professional MMA. His record reflects not just wins, but the technical mastery displayed in each victory, particularly his submission finishes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Jacare's fighting style is defined by his exceptional grappling prowess and technical submission mastery. His signature techniques include devastating leg locks, foot locks, and heel hooks, which he executes from various positions with precision and timing. Unlike many grapplers who rely on pure strength, Jacare demonstrates technical superiority through leverage and understanding of joint mechanics.

His approach to positional control emphasizes pressure and cage awareness, allowing him to dominate opponents in top positions while minimizing risk. Jacare excels at transitioning between submissions, creating situations where opponents face multiple threats simultaneously. His back control and choke techniques showcase years of BJJ refinement, with the rear-naked choke being a frequent finish in his arsenal.

Jacare's defensive grappling is equally impressive, featuring excellent scrambling ability and escape techniques developed through rigorous BJJ training. He seamlessly integrates striking with grappling, using measured striking to set up takedowns and clinch work. His tactical approach to fights reflects his BJJ background, where controlling position and creating submission opportunities takes precedence over explosive attacks. This methodical, technical style has influenced modern MMA grappling standards and remains a blueprint for submission-focused fighters.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Ronaldo Jacare Souza's legacy extends beyond his individual accomplishments, fundamentally influencing how modern MMA fighters approach grappling and submission wrestling. He demonstrated that pure BJJ practitioners could achieve elite-level success in MMA without abandoning their technical foundation, inspiring generations of grapplers to pursue professional fighting. His submission victories against top-ranked opponents validated the effectiveness of Brazilian Jiu-Jitsu principles in the octagon.

Jacare's influence on leg lock and foot lock techniques in MMA cannot be overstated. As these techniques gained prominence in modern BJJ, fighters studied his methodical approach to executing complex leg lock sequences. His success proved that positional control and technical superiority could overcome power and athleticism, reshaping training philosophies across numerous gyms and MMA teams.

Beyond technique, Jacare represented the integrity of Brazilian Jiu-Jitsu within professional fighting. His respectful demeanor and technical mastery earned him admiration from both BJJ and MMA communities. As a bridge between pure grappling and mixed martial arts, Jacare helped elevate the sport's technical standards and proved that BJJ remains one of MMA's most valuable disciplines, securing his place as one of the greatest grapplers in combat sports history.</p>
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
