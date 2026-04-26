'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const HIDE_ON = ['/dashboard', '/coach', '/journal', '/library', '/gameplan', '/progress', '/marketplace', '/blog-admin', '/settings', '/sparring', '/competitions', '/creator', '/upload', '/creator-setup', '/my-courses', '/learn', '/meta', '/techniques/graph', '/admin', '/import', '/auth'];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Hide on dashboard/app routes (they have their own sidebar nav)
  if (HIDE_ON.some(p => pathname.startsWith(p))) return null;

  return (
    <nav className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur px-4 md:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-black">
          <span className="text-red-600">AI</span>BJJ
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
          <Link href="/bjj-techniques" className="hover:text-white transition">Techniques</Link>
          <Link href="/academies" className="hover:text-white transition">Academies</Link>
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/bjj" className="hover:text-white transition">BJJ Wiki</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <Link href="/auth/signup" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition">
            Start Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 mt-3 pt-4 pb-2 flex flex-col gap-4 text-sm font-medium text-zinc-300">
          <Link href="/bjj-techniques" onClick={() => setOpen(false)} className="hover:text-white px-2">Techniques</Link>
          <Link href="/academies" onClick={() => setOpen(false)} className="hover:text-white px-2">Academies</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="hover:text-white px-2">Pricing</Link>
          <Link href="/bjj" onClick={() => setOpen(false)} className="hover:text-white px-2">BJJ Wiki</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="hover:text-white px-2">Blog</Link>
          <Link href="/auth/signup" onClick={() => setOpen(false)} className="rounded-lg bg-red-600 px-4 py-2 text-center font-semibold text-white hover:bg-red-700 mx-2">
            Start Free
          </Link>
        </div>
      )}
    </nav>
  );
}

