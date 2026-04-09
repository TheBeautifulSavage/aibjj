"use client";

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";
import VoiceInput from "@/components/VoiceInput";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Send,
  Bot,
  User,
  Plus,
  MessageSquare,
  Sparkles,
  Zap,
  ChevronLeft,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

interface ChatSession {
  id: string;
  title: string;
  updatedAt: string;
}

const SUGGESTED_PROMPTS = [
  "How do I escape mount?",
  "Best sweeps from closed guard?",
  "Game plan for a lanky white belt?",
  "How to improve my guard retention?",
];

function formatTimestamp(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 max-w-3xl mx-auto w-full">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-600/15">
        <Bot className="h-4 w-4 text-red-400" />
      </div>
      <div className="rounded-2xl rounded-tl-sm border border-white/[0.06] bg-[#1a1a1a] px-4 py-3">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:0ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

export default function CoachPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatSessionId, setChatSessionId] = useState<string | null>(null);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [rateLimitHit, setRateLimitHit] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    fetchSessions();
    const params = new URLSearchParams(window.location.search);
    const prefill = params.get("prompt") || params.get("q");
    if (prefill) {
      const decoded = decodeURIComponent(prefill);
      setInput(decoded);
      // Auto-send after a tick to ensure state is set
      setTimeout(() => {
        sendMessage(decoded);
      }, 100);
      const url = new URL(window.location.href);
      url.searchParams.delete("prompt");
      url.searchParams.delete("q");
      window.history.replaceState({}, "", url.toString());
    } else {
      textareaRef.current?.focus();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const fetchSessions = async () => {
    try {
      const res = await fetch("/api/coach/sessions");
      if (res.ok) {
        const data = await res.json();
        setSessions(data.sessions);
      }
    } catch { /* silently fail */ }
  };

  const loadSession = async (session: ChatSession) => {
    setChatSessionId(session.id);
    setHistoryOpen(false);
    try {
      const res = await fetch(`/api/coach/sessions?sessionId=${session.id}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages ?? []);
      }
    } catch { /* silently fail */ }
  };

  const startNewChat = () => {
    setChatSessionId(null);
    setMessages([]);
    setInput("");
    setRateLimitHit(false);
    textareaRef.current?.focus();
  };

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: content.trim(),
        createdAt: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      try {
        const res = await fetch("/api/coach", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: content.trim(), chatSessionId }),
        });

        if (res.status === 429) {
          setRateLimitHit(true);
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              role: "assistant",
              content:
                "You've used all 5 free messages for today. Upgrade to Pro for unlimited coaching.",
              createdAt: new Date().toISOString(),
            },
          ]);
          setIsLoading(false);
          return;
        }

        if (!res.ok) throw new Error("Failed to send message");

        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: data.message,
            createdAt: new Date().toISOString(),
          },
        ]);

        if (data.chatSessionId && data.chatSessionId !== chatSessionId) {
          setChatSessionId(data.chatSessionId);
          fetchSessions();
        }
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "Sorry, I had trouble processing that. Please try again.",
            createdAt: new Date().toISOString(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [chatSessionId, isLoading] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    // Full screen: take over without the layout's padding
    <div className="fixed inset-0 flex flex-col bg-[#0a0a0a] lg:relative lg:inset-auto lg:h-full" style={{ zIndex: 10 }}>
      {/* Chat header */}
      <div className="flex flex-shrink-0 items-center gap-3 border-b border-white/[0.06] bg-[#0a0a0a]/95 backdrop-blur-md px-4 h-12">
        <Link href="/dashboard" className="text-zinc-500 hover:text-zinc-300 transition-colors lg:hidden">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <div className="flex items-center gap-2 flex-1">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600/15">
            <Bot className="h-3.5 w-3.5 text-red-400" />
          </div>
          <div>
            <span className="text-sm font-semibold text-zinc-100">AI Coach</span>
            <span className="text-xs text-zinc-500 ml-2 hidden sm:inline">Your BJJ training partner</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {/* History toggle */}
          <button
            onClick={() => setHistoryOpen(!historyOpen)}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 hover:bg-white/[0.06] hover:text-zinc-200 transition-colors"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">History</span>
          </button>
          <button
            onClick={startNewChat}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 hover:bg-white/[0.06] hover:text-zinc-200 transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">New chat</span>
          </button>
        </div>
      </div>

      {/* Body: history panel + messages */}
      <div className="flex flex-1 overflow-hidden">
        {/* History sidebar (slide in/out) */}
        {historyOpen && (
          <div className="w-64 flex-shrink-0 border-r border-white/[0.06] bg-[#0d0d0d] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Chat History</span>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
              {sessions.length === 0 ? (
                <p className="px-3 py-2 text-xs text-zinc-600">No previous chats</p>
              ) : (
                sessions.map((session) => (
                  <button
                    key={session.id}
                    onClick={() => loadSession(session)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-white/[0.04]",
                      chatSessionId === session.id && "bg-white/[0.06] text-zinc-200"
                    )}
                  >
                    <MessageSquare className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
                    <span className="truncate text-zinc-400 text-xs">{session.title}</span>
                  </button>
                ))
              )}
            </div>
          </div>
        )}

        {/* Messages area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          {messages.length === 0 && !isLoading ? (
            /* Empty state */
            <div className="flex h-full flex-col items-center justify-center gap-6 px-4 py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/10">
                <Sparkles className="h-8 w-8 text-red-500" />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold text-zinc-100">Ask me anything about BJJ</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Techniques, game plans, competition strategy, and more.
                </p>
              </div>
              <div className="grid w-full max-w-lg grid-cols-1 gap-2 sm:grid-cols-2">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-left text-sm text-zinc-400 transition-colors hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-zinc-200"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Message list */
            <div className="space-y-6 px-4 py-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3 max-w-3xl",
                    message.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  {/* Avatar */}
                  <div
                    className={cn(
                      "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full",
                      message.role === "assistant"
                        ? "bg-red-600/15"
                        : "bg-zinc-700"
                    )}
                  >
                    {message.role === "assistant" ? (
                      <Bot className="h-4 w-4 text-red-400" />
                    ) : (
                      <User className="h-4 w-4 text-zinc-300" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={cn(
                      "max-w-[75%] sm:max-w-[80%]",
                      message.role === "user" && "text-right"
                    )}
                  >
                    <div
                      className={cn(
                        "inline-block whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed",
                        message.role === "user"
                          ? "rounded-tr-sm bg-red-600/20 text-zinc-100 border border-red-600/20"
                          : "rounded-tl-sm border-l-2 border-zinc-700 pl-4 text-zinc-300 bg-transparent"
                      )}
                    >
                      {message.content}
                    </div>
                    <p className="mt-1 text-[10px] text-zinc-600">
                      {formatTimestamp(message.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && <TypingIndicator />}
            </div>
          )}
        </div>
      </div>

      {/* Rate limit banner */}
      {rateLimitHit && (
        <div className="flex-shrink-0 border-t border-amber-800/40 bg-amber-950/20 px-4 py-3">
          <div className="mx-auto max-w-3xl flex items-center justify-between gap-4">
            <p className="text-sm text-amber-300">
              <Zap className="inline h-4 w-4 mr-1" />
              5/5 free messages used today. Upgrade for unlimited.
            </p>
            <Link
              href="/pricing"
              className="shrink-0 rounded-lg bg-amber-600 hover:bg-amber-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors"
            >
              Upgrade →
            </Link>
          </div>
        </div>
      )}

      {/* Input area */}
      <div className="flex-shrink-0 border-t border-white/[0.06] bg-[#0a0a0a]/95 backdrop-blur-md px-4 py-3 pb-safe">
        <div className="mx-auto max-w-3xl">
          <div className="relative flex items-end gap-2 rounded-2xl border border-white/[0.10] bg-zinc-800/80 focus-within:border-zinc-600 transition-colors px-4 py-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={rateLimitHit ? "Upgrade to Pro to continue..." : "Ask your BJJ coach..."}
              disabled={rateLimitHit}
              className="flex-1 min-h-[36px] max-h-[160px] resize-none bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none disabled:opacity-50 py-1.5"
              rows={1}
            />
            <VoiceInput
              onTranscript={(text) => setInput((prev) => prev ? prev + " " + text : text)}
              disabled={rateLimitHit}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isLoading || rateLimitHit}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-red-600 text-white hover:bg-red-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-1.5 text-center text-[10px] text-zinc-600">
            Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}
