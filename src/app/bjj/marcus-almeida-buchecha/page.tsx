import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Marcus Almeida Buchecha: BJJ Legend Biography | AIBJJ",
  description: "Explore Marcus Almeida Buchecha's extraordinary BJJ career, achievements, and revolutionary impact on grappling competition.",
};

export default function Page() {
  const tags = ["Marcus Almeida", "Buchecha", "Brazilian Jiu-Jitsu", "BJJ Champion", "Grappling Legend"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Marcus Almeida Buchecha: BJJ Legend Biography</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore Marcus Almeida Buchecha's extraordinary BJJ career, achievements, and revolutionary impact on grappling competition.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Early Life and BJJ Journey</h2>
            <p>Marcus Almeida, known universally as Buchecha, was born in Brazil and began his Brazilian Jiu-Jitsu journey at a young age. Growing up in a grappling-rich environment, he quickly demonstrated exceptional athleticism and a natural aptitude for BJJ. Buchecha trained under respected coaches who cultivated his technical foundation and competitive mindset. His early years were marked by rapid progression through the belt ranks, where he established himself as a formidable competitor in youth divisions. The nickname 'Buchecha' became synonymous with dominance as he transitioned into adult competition. His dedication to the sport during his formative years set the stage for an unprecedented career trajectory. Buchecha's early success at local and regional tournaments caught the attention of top teams, eventually leading him to compete at the highest levels of international BJJ competition where he would become one of the sport's most decorated athletes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Competition Record and Achievements</h2>
            <p>Buchecha's competition record stands as one of the most impressive in BJJ history. He became a multiple-time World Championship gold medalist, dominating the heavyweight division at the IBJJF World Championships. His ability to compete across different weight classes and rulesets demonstrated remarkable versatility. Buchecha secured numerous ADCC Submission Wrestling Championship medals, proving his effectiveness in submission grappling formats. He accumulated multiple Pan-American Championship titles and countless other prestigious accolades throughout his career. His success extended to professional grappling circuits, where he competed against elite athletes from diverse backgrounds. Buchecha's consistency at the highest competitive levels, spanning over a decade, established him as one of the greatest heavyweights in BJJ history. His tournament wins against world-class opponents earned him respect across the global grappling community and cemented his legacy as a champion.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Fighting Style and Signature Techniques</h2>
            <p>Buchecha revolutionized heavyweight BJJ through his explosive athleticism and technical mastery. His fighting style combined powerful leg lock attacks with strong positional control, making him exceptionally difficult to defeat. He became known for executing devastating foot lock sequences and heel hook entries that caught opponents off guard. His strength and coordination allowed him to implement pressure-based passing systems effectively against top-level competition. Buchecha demonstrated exceptional wrestling fundamentals, often controlling matches through dominant positioning and intelligent transitions. His ability to adapt between traditional BJJ ruleset and submission-only formats showcased his technical versatility. He developed signature leg lock progressions that influenced modern grappling instruction. Buchecha's offensive leg attack arsenal became a blueprint for heavyweight grapplers seeking to improve their lower body submissions. His technical contributions extended beyond competition, as his match footage became studied by athletes worldwide seeking to understand elite-level heavyweight grappling strategy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Legacy and Influence on BJJ</h2>
            <p>Marcus Almeida Buchecha's impact on Brazilian Jiu-Jitsu extends far beyond his championship medals and competition victories. He elevated the standard for heavyweight competition, inspiring countless athletes to pursue excellence in the division. Buchecha's technical innovations in leg lock attacks influenced how modern grapplers approach lower body submissions at all levels. His success demonstrated that heavyweight athletes could excel through technique-driven approaches rather than relying solely on size and strength. Buchecha helped popularize certain passing systems and pressure-based control methods now standard in contemporary BJJ. His international competition success elevated Brazilian grappling's reputation globally. Through seminars, instructional content, and competition footage, Buchecha shared his knowledge with the broader BJJ community. Young heavyweights reference his matches as technical models for their own development. His career trajectory from early promise to sustained dominance established a template for aspiring world-class grapplers. Buchecha's legacy ensures his influence will continue shaping BJJ competition and instruction for generations.</p>
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
