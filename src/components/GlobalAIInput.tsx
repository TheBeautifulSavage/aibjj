"use client";

import React, { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Send, Sparkles } from "lucide-react";

/**
 * GlobalAIInput — floating ChatGPT-style input bar
 * Appears on all non-coach dashboard pages.
 * On submit, navigates to /coach?prompt=MESSAGE
 */
export default function GlobalAIInput() {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Hide on coach page
  if (pathname === "/coach") return null;

  const handleSubmit = () => {
    const q = value.trim();
    if (!q) return;
    router.push(`/coach?prompt=${encodeURIComponent(q)}`);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="fixed bottom-[76px] md:bottom-6 left-1/2 -translate-x-1/2 z-30 w-[calc(100vw-2rem)] max-w-[600px]">
      <div className="flex items-center gap-2 rounded-2xl border border-white/[0.10] bg-zinc-900/90 backdrop-blur-md shadow-2xl shadow-black/50 px-4 py-2.5 focus-within:border-zinc-600 transition-colors">
        <Sparkles className="h-4 w-4 text-red-500 flex-shrink-0" />
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask AI Coach..."
          className="flex-1 bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
        />
        <button
          onClick={handleSubmit}
          disabled={!value.trim()}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-red-600 text-white hover:bg-red-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
