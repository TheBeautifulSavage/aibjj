import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "BJJ in Brazil: History and Origins | AIBJJ",
  description: "Explore the fascinating history of Brazilian Jiu-Jitsu in Brazil, from its Japanese roots to becoming a global martial art phenomenon and national pride.",
};

export default function Page() {
  const tags = ["brazil", "history", "origins"];
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ in Brazil: History and Origins</h1>
        <p className="mt-4 text-xl text-zinc-400">Explore the fascinating history of Brazilian Jiu-Jitsu in Brazil, from its Japanese roots to becoming a global martial art phenomenon and national pride.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Japanese Origins and Early Introduction</h2>
            <p>Brazilian Jiu-Jitsu traces its roots to Japan's traditional judo and jujutsu systems. In 1914, Japanese judoka Mitsuyo Maeda arrived in Brazil to demonstrate his martial arts expertise. This pivotal moment introduced grappling techniques to South America. Maeda's influence sparked interest among the Brazilian elite, particularly the Gracie family. The techniques Maeda taught were revolutionary for the time, emphasizing leverage and technique over pure strength. His demonstrations showcased how a smaller, skilled grappler could overcome larger opponents. This foundation would transform Brazilian martial culture forever. The introduction wasn't merely about combat techniques; it represented a philosophical shift in how Brazilians understood physical training and self-defense. Maeda's legacy became the blueprint for what would eventually evolve into the distinctive art known worldwide as BJJ today.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Gracie Family Revolution</h2>
            <p>The Gracie family transformed martial arts by adapting Maeda's teachings into an effective system emphasizing footlock techniques and leverage-based submissions. Helio Gracie, in particular, refined techniques to suit his smaller frame and physical limitations, creating methods that prioritized technique over strength. This innovation made BJJ accessible to everyone regardless of size or athleticism. The Gracie family systematically developed a curriculum with progressive belt levels, establishing structure that persists today. They conducted public challenges and vale tudo matches, proving their methods' effectiveness against other martial arts. These demonstrations built BJJ's reputation throughout Brazil. By the mid-20th century, the Gracie name became synonymous with Brazilian martial superiority. Family members opened academies across Brazil, spreading their lineage and methods. The Gracie family's business acumen combined with martial innovation created a dynasty that shaped Brazilian culture and influenced global martial arts development profoundly.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">BJJ's Rise as National Identity</h2>
            <p>By the 1950s and 1960s, Brazilian Jiu-Jitsu had become deeply woven into Brazilian national identity and culture. The art represented Brazilian ingenuity and adaptability, transforming foreign techniques into something distinctly Brazilian. Major cities developed thriving BJJ communities with academies in every neighborhood. The sport transcended social classes, attracting wealthy elites and poor communities alike. BJJ competitions became significant cultural events drawing massive audiences. Television coverage increased public fascination with the martial art. Legendary figures emerged, battling for supremacy and pushing technical boundaries. The art's philosophy of efficiency and problem-solving resonated with Brazilian values. Schools and community centers incorporated BJJ training into their programs. By the 1970s, multiple lineages and styles had developed beyond just the Gracie family. This democratization strengthened BJJ's position as a fundamental part of Brazilian culture and heritage.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Modern Era and Global Expansion</h2>
            <p>The 1990s marked BJJ's explosive international growth, beginning with the Ultimate Fighting Championship. Royce Gracie's historic UFC victories demonstrated BJJ's superiority against other fighting styles, captivating worldwide audiences. Brazilian instructors began spreading the art globally, establishing academies across America, Europe, and Asia. This exposure transformed BJJ from a regional Brazilian martial art into a worldwide phenomenon. Brazilian competitors dominated international tournaments and MMA competitions. Major organizations like IBJJF standardized rules and belt progression globally. Brazil remained the epicenter of BJJ development, producing elite competitors and innovators continuously. Famous academies like Alliance, Checkmat, and Carlson Gracie's lineage pushed technical boundaries. Today, BJJ represents one of Brazil's greatest cultural exports. The art continues evolving with new techniques and strategies emerging from Brazilian laboratories yearly. Brazil's dominance in competitive BJJ remains unmatched, cementing its legacy as the birthplace of modern grappling excellence.</p>
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
