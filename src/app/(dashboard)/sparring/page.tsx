"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, RefreshCw, Swords } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function SparringPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startNewScenario = async () => {
    setMessages([]);
    setInitializing(true);
    setLoading(true);
    try {
      const res = await fetch("/api/sparring", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Start a new BJJ training scenario. Give me a specific situation and ask what I'd do.", history: [] }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages([{ role: "assistant", content: data.reply }]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setInitializing(false);
    }
  };

  useEffect(() => {
    startNewScenario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const history = newMessages.slice(0, -1).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/sparring", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          history,
        }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: "assistant", content: data.reply }]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20">
            <Swords className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AI Sparring Partner</h1>
            <p className="text-sm text-zinc-400">Test your BJJ knowledge with scenario-based training</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={startNewScenario}
          disabled={loading}
          className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          New Scenario
        </Button>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-4">
        {initializing && messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-zinc-500">
              <Swords className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>Preparing your scenario...</p>
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/20 mr-3 mt-1">
                <Swords className="h-4 w-4 text-red-500" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-red-600 text-white rounded-br-sm"
                  : "bg-zinc-800 text-zinc-100 rounded-bl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && !initializing && (
          <div className="flex justify-start">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/20 mr-3 mt-1">
              <Swords className="h-4 w-4 text-red-500" />
            </div>
            <div className="bg-zinc-800 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-zinc-500 animate-bounce [animation-delay:-0.3s]" />
                <span className="h-2 w-2 rounded-full bg-zinc-500 animate-bounce [animation-delay:-0.15s]" />
                <span className="h-2 w-2 rounded-full bg-zinc-500 animate-bounce" />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="mt-3 flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your technique or answer the scenario..."
          rows={2}
          className="flex-1 resize-none rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
        />
        <Button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-4 self-stretch"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
      <p className="text-xs text-zinc-600 text-center mt-2">Press Enter to send · Shift+Enter for new line</p>
    </div>
  );
}
