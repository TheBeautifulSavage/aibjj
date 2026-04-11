import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;
export const metadata: Metadata = {
  title: "BJJ for Kids: Benefits, Training & Getting Started | AIBJJ",
  description: "Learn how Brazilian Jiu-Jitsu benefits kids through improved discipline, confidence, and physical fitness. Discover age-appropriate training methods and ge",
};

export default function Page() {
  const tags = ["kids", "youth", "martial-arts"];
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
        <h1 className="text-4xl font-black sm:text-5xl">BJJ for Kids: Benefits, Training & Getting Started</h1>
        <p className="mt-4 text-xl text-zinc-400">Learn how Brazilian Jiu-Jitsu benefits kids through improved discipline, confidence, and physical fitness. Discover age-appropriate training methods and getting started.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Why BJJ is Great for Kids</h2>
            <p>Brazilian Jiu-Jitsu offers children a unique combination of physical and mental benefits that set it apart from traditional sports. BJJ teaches kids problem-solving skills as they learn to escape positions and execute techniques, promoting critical thinking both on and off the mat. The sport builds exceptional confidence as children overcome challenges and earn belt promotions, creating a powerful sense of accomplishment. Unlike striking sports, BJJ emphasizes safety through controlled movements and partner cooperation, reducing injury risk significantly. Kids develop genuine self-defense abilities while learning respect, discipline, and humility—core values of the martial art. The sport accommodates all body types and athleticism levels, ensuring every child can succeed. Additionally, BJJ provides an excellent outlet for energy and stress relief, helping kids focus better in school and daily life. The supportive community aspect creates lasting friendships and mentorship opportunities with older students and instructors.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Starting BJJ: Age and Preparation</h2>
            <p>Most reputable schools accept children as young as four or five years old, though programs are specifically designed for younger kids with shorter classes and game-focused instruction. Children aged six and up typically transition into more structured fundamentals training. Before enrolling, visit potential academies to observe classes and ensure the instructor has experience teaching kids and maintaining appropriate discipline. Ask about their teaching philosophy—the best programs balance fun with skill development. Children should wear comfortable clothing to their first few classes; they don't need a gi immediately. Discuss any physical concerns or previous injuries with the instructor beforehand. It's helpful to set realistic expectations with your child, explaining that learning takes time and everyone starts as a beginner. Watch videos together about BJJ to build excitement. Most importantly, choose a school with a positive environment where instructors correct mistakes supportively and celebrate effort over perfection.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What to Expect in Kids BJJ Classes</h2>
            <p>Kids BJJ classes typically begin with warm-ups designed to build coordination and body awareness through games and exercises. Instructors use playful language, calling techniques 'traps' and 'escapes' rather than complex names. Classes focus on fundamental movements like proper falling, bridging, shrimp escapes, and basic positional control. Drilling—repetitive practice of techniques—comprises the middle section, allowing children to develop muscle memory in a safe, controlled manner. The final portion usually includes live rolling or 'positional sparring' where kids practice techniques against partners at appropriate intensity levels. Class length and structure vary by age; younger children have shorter classes with more breaks and games, while older kids train longer with increased complexity. Instructors maintain strict safety standards, teaching children to tap—communicate discomfort—immediately. The belt system provides clear progression goals, typically starting with white belt and advancing through colored belts before earning higher ranks. Most schools offer belt promotions every few months, maintaining motivation and celebrating progress consistently.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Building Discipline and Long-Term Success</h2>
            <p>BJJ naturally cultivates discipline as children learn that consistent training produces results. The belt ranking system motivates continuous improvement, teaching kids that success requires patience and persistence. Regular attendance becomes a habit, teaching commitment and reliability—skills that transfer to academics and other pursuits. As children progress, they develop leadership by helping newer students and setting positive examples. The humbling nature of rolling—where anyone can catch you regardless of size—teaches valuable lessons about ego and continuous learning. Parents can support their child's journey by attending classes when possible, encouraging consistent training, and celebrating effort rather than just wins. Discussing techniques and challenges at home reinforces learning. Setting reasonable goals together keeps kids motivated without creating pressure. Many children who start BJJ young develop it as a lifelong practice, continuing through adolescence and adulthood. The skills learned—problem-solving, resilience, respect, and discipline—become fundamental character traits that benefit every area of their lives.</p>
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
