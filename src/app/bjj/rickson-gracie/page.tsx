import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // Re-generate daily
export const metadata: Metadata = {
  title: "Rickson Gracie: The Greatest Fighter in Gracie History | AIBJJ",
  description: "Rickson Gracie is widely considered the greatest fighter the Gracie family ever produced. His legendary 400-0 record (disputed but iconic), his vale tudo c",
};

export default function Page() {
  const tags = ["rickson-gracie", "gracie-family", "bjj-history", "self-defense"];
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
        <h1 className="text-4xl font-black sm:text-5xl">Rickson Gracie: The Greatest Fighter in Gracie History</h1>
        <p className="mt-4 text-xl text-zinc-400">Rickson Gracie is widely considered the greatest fighter the Gracie family ever produced. His legendary 400-0 record (disputed but iconic), his vale tudo championship victories, and his documentary &apos;Choke&apos; made him the face of BJJ to an entire generation.</p>
        <div className="mt-10 space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Background and Training</h2>
            <p>Rickson Gracie was born in 1958 in Rio de Janeiro, son of Hélio Gracie. From childhood, he was surrounded by jiu-jitsu and consistently demonstrated exceptional talent. By his teens, he was already training with the best in Brazil. His father Hélio considered Rickson the most naturally gifted of all his sons — high praise given that his brothers included Royler, Royce, and Relson.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Vale Tudo and Competition Record</h2>
            <p>Rickson competed in vale tudo — no-rules fighting — throughout the 1980s and 1990s, accumulating a record that he and his family claim is 400-0. While the exact number is disputed, what is not disputed is his dominance in Japan&apos;s Colosseum 2000 and Pride FC events, where he defeated top Japanese fighters and submission wrestlers. He was considered the elite standard of what BJJ could do in a real fight.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">The Documentary Choke</h2>
            <p>The 1995 documentary Choke followed Rickson as he prepared for and competed in the 1995 Vale Tudo Japan tournament. The film showed his rigorous training — including breathing exercises and yoga practices — and his focused preparation. Choke introduced millions of people globally to both Rickson and to BJJ as a discipline. It remains one of the most important martial arts films ever made.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Philosophy and Legacy</h2>
            <p>Rickson&apos;s approach to BJJ emphasizes &apos;invisible jiu-jitsu&apos; — the subtle elements of connection, pressure, and timing that cannot be seen but can be felt. He teaches that technical perfection is the goal, not athletic performance. His Rickson Gracie Academy in Los Angeles and his ongoing teaching worldwide continue to influence practitioners who seek the deepest expression of the art.</p>
          </section>
        </div>
        <div className="mt-16 rounded-2xl border border-red-900/30 bg-red-950/20 p-8 text-center">
          <h2 className="text-2xl font-black">Train Like the Pros</h2>
          <p className="mt-2 text-zinc-400">AI coaching, technique library, training journal — everything to level up your BJJ.</p>
          <Link href="/auth/signup" className="mt-5 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700">Start Free</Link>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-bold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/bjj" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">BJJ Encyclopedia</Link>
            <Link href="/brazilian-jiu-jitsu" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Complete BJJ Guide</Link>
            <Link href="/academies" className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400 hover:text-white">Find an Academy</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
