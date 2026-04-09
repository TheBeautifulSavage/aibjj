"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Send, X, Maximize2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_PROMPTS = [
  "What should I drill today?",
  "Help me escape from mount",
  "Create a warmup routine",
  "Analyze my guard game",
  "How do I improve my passing?",
  "Best submissions from side control",
];

function getRotatingPrompts(count = 3): string[] {
  const shuffled = [...QUICK_PROMPTS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function GlobalAIPrompt() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [quickPrompts] = useState(() => getRotatingPrompts(3));
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const hidden = pathname === "/coach";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (hidden) return null;

  const sendMessage = async (text?: string) => {
    const trimmed = (text || input).trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    // Keep last 3 messages for context (6 entries = 3 exchanges)
    const contextHistory = messages.slice(-6);
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/coach/quick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: contextHistory,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      const data = await res.json();
      setMessages([...updatedMessages, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Collapsed pill bar
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 shadow-lg shadow-black/40 transition-all hover:border-zinc-500 hover:shadow-xl cursor-pointer"
      >
        <Sparkles className="h-4 w-4 text-red-500" />
        <span className="text-sm text-zinc-400">Ask your AI coach anything...</span>
      </button>
    );
  }

  // Expanded chat panel
  return (
    <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/60 sm:w-96">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-red-500" />
          <span className="text-sm font-medium text-zinc-200">AI Coach</span>
        </div>
        <div className="flex items-center gap-1">
          <Link href="/coach">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-zinc-400 hover:text-zinc-200"
              title="Open full chat"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-zinc-400 hover:text-zinc-200"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="max-h-72 min-h-[8rem] overflow-y-auto p-3 space-y-3">
        {messages.length === 0 && !isLoading && (
          <div className="space-y-3">
            <p className="text-center text-xs text-zinc-500 pt-2">
              Ask about techniques, drills, game plans, or anything BJJ.
            </p>
            {/* Quick prompts */}
            <div className="space-y-1.5">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="w-full flex items-center gap-2 rounded-lg border border-zinc-700/60 bg-zinc-800/40 px-3 py-2 text-left text-xs text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 transition-colors"
                >
                  <ChevronRight className="h-3 w-3 text-red-500 shrink-0" />
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                msg.role === "user"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-800 text-zinc-200"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-xl bg-zinc-800 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>

      {/* Open full coach link — shown after any assistant reply */}
      {messages.some((m) => m.role === "assistant") && (
        <div className="px-3 pb-1">
          <Link
            href="/coach"
            className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300"
          >
            <Maximize2 className="h-3 w-3" />
            Open full coach for longer conversations
          </Link>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-zinc-800 p-3">
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            rows={1}
            className="flex-1 resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:border-zinc-600 focus:outline-none"
          />
          <Button
            size="icon"
            onClick={() => sendMessage()}
            disabled={!input.trim() || isLoading}
            className="h-9 w-9 shrink-0 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
