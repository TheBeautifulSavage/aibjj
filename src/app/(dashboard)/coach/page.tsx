"use client";

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Send,
  Bot,
  User,
  Plus,
  MessageSquare,
  Sparkles,
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
    <div className="flex items-start gap-3">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="bg-red-600/20 text-red-400">
          <Bot className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      <div className="rounded-2xl rounded-tl-sm bg-zinc-800 px-4 py-3">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:0ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:300ms]" />
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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load sessions on mount
  useEffect(() => {
    fetchSessions();
  }, []);

  // Auto-scroll to bottom on new messages
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
    } catch {
      // silently fail
    }
  };

  const loadSession = async (session: ChatSession) => {
    setChatSessionId(session.id);
    try {
      const res = await fetch(`/api/coach/sessions?sessionId=${session.id}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages ?? []);
      }
    } catch {
      // silently fail
    }
  };

  const startNewChat = () => {
    setChatSessionId(null);
    setMessages([]);
    setInput("");
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
          body: JSON.stringify({
            message: content.trim(),
            chatSessionId,
          }),
        });

        if (!res.ok) throw new Error("Failed to send message");

        const data = await res.json();

        const assistantMessage: Message = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.message,
          createdAt: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, assistantMessage]);

        if (data.chatSessionId && data.chatSessionId !== chatSessionId) {
          setChatSessionId(data.chatSessionId);
          fetchSessions();
        }
      } catch {
        const errorMessage: Message = {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Sorry, I had trouble processing that. Please try again.",
          createdAt: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [chatSessionId, isLoading]
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleSuggestedPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100">
      {/* Sidebar */}
      <div
        className={cn(
          "flex flex-col border-r border-zinc-800 bg-zinc-900 transition-all duration-300",
          sidebarOpen ? "w-72" : "w-0 overflow-hidden"
        )}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
            Chats
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={startNewChat}
            className="h-8 w-8"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Separator />
        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => loadSession(session)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-zinc-800",
                  chatSessionId === session.id && "bg-zinc-800"
                )}
              >
                <MessageSquare className="h-4 w-4 shrink-0 text-zinc-500" />
                <span className="truncate">{session.title}</span>
              </button>
            ))}
            {sessions.length === 0 && (
              <p className="px-3 py-2 text-sm text-zinc-600">
                No previous chats
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="h-8 w-8 lg:hidden"
          >
            <MessageSquare className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/20">
              <Bot className="h-4 w-4 text-red-400" />
            </div>
            <div>
              <h1 className="text-sm font-semibold">AI Coach</h1>
              <p className="text-xs text-zinc-500">
                Your BJJ training partner
              </p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto scroll-smooth px-4 py-6"
        >
          {messages.length === 0 && !isLoading ? (
            /* Empty State */
            <div className="flex h-full flex-col items-center justify-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/10">
                <Sparkles className="h-8 w-8 text-red-500" />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold text-zinc-200">
                  Ask me anything about BJJ
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Techniques, game plans, competition strategy, and more.
                </p>
              </div>
              <div className="grid max-w-lg grid-cols-1 gap-2 sm:grid-cols-2">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSuggestedPrompt(prompt)}
                    className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-left text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Message List */
            <div className="mx-auto max-w-3xl space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3",
                    message.role === "user" && "flex-row-reverse"
                  )}
                >
                  {message.role === "assistant" ? (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-red-600/20 text-red-400">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-600/20 text-blue-400">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-[75%] space-y-1",
                      message.role === "user" && "text-right"
                    )}
                  >
                    <div
                      className={cn(
                        "inline-block whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed",
                        message.role === "user"
                          ? "rounded-tr-sm bg-blue-900/50 text-zinc-100"
                          : "rounded-tl-sm bg-zinc-800 text-zinc-200"
                      )}
                    >
                      {message.content}
                    </div>
                    <p className="text-[10px] text-zinc-600">
                      {formatTimestamp(message.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && <TypingIndicator />}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-zinc-800 bg-zinc-900/80 px-4 py-3">
          <div className="mx-auto flex max-w-3xl items-end gap-2">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask your BJJ coach..."
              className="min-h-[44px] max-h-[160px] resize-none border-zinc-700 bg-zinc-800/50 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-red-600/50"
              rows={1}
            />
            <Button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="h-[44px] w-[44px] shrink-0 bg-red-600 hover:bg-red-700 disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="mx-auto mt-2 max-w-3xl text-center text-[10px] text-zinc-600">
            Press Enter to send, Shift+Enter for a new line
          </p>
        </div>
      </div>
    </div>
  );
}
