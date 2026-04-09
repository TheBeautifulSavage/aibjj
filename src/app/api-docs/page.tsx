import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIBJJ Developer API — Integrate BJJ Training Data",
  description: "Connect your favorite AI tools to AIBJJ. REST API for Pro users — log training, query the AI coach, and sync technique progress.",
};

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black"><span className="text-red-600">AI</span>BJJ</Link>
        <Link href="/dashboard" className="text-sm text-zinc-400 hover:text-white">← Dashboard</Link>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">Developer</span>
          <h1 className="mt-2 text-4xl font-black">AIBJJ REST API</h1>
          <p className="mt-4 text-lg text-zinc-400">Connect your favorite LLM, automation tool, or custom app to your AIBJJ training data. Available to Pro subscribers.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/settings?tab=api" className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700">Get Your API Key</Link>
            <Link href="/pricing" className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:border-zinc-500">Upgrade to Pro</Link>
          </div>
        </div>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Authentication</h2>
          <p className="text-zinc-400 mb-4">All requests require a Bearer token in the Authorization header.</p>
          <pre className="rounded-xl bg-zinc-900 border border-zinc-800 p-4 text-sm text-green-400 overflow-x-auto">
{`Authorization: Bearer aibjj_your_api_key_here`}
          </pre>
        </section>

        {/* Endpoints */}
        <section className="mb-12 space-y-8">
          <h2 className="text-2xl font-bold">Endpoints</h2>

          {/* Training */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-5 py-3">
              <span className="rounded bg-green-600/20 px-2 py-0.5 text-xs font-bold text-green-400">GET</span>
              <code className="text-sm text-zinc-200">/api/v1/training</code>
              <span className="ml-auto text-xs text-zinc-500">Get training stats & logs</span>
            </div>
            <pre className="p-5 text-sm text-zinc-300 overflow-x-auto">{`# Response
{
  "user": { "belt": "BLUE", "stripes": 3, "name": "Jesse" },
  "stats": {
    "totalSessions": 142,
    "currentStreak": 7,
    "thisWeek": 4,
    "thisMonth": 18
  },
  "recentLogs": [...]
}`}</pre>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-5 py-3">
              <span className="rounded bg-blue-600/20 px-2 py-0.5 text-xs font-bold text-blue-400">POST</span>
              <code className="text-sm text-zinc-200">/api/v1/training</code>
              <span className="ml-auto text-xs text-zinc-500">Log a training session</span>
            </div>
            <pre className="p-5 text-sm text-zinc-300 overflow-x-auto">{`# Body
{
  "date": "2026-04-09",      // optional, defaults to today
  "duration": 90,            // minutes, optional
  "notes": "Worked on X-guard sweeps and leg locks",
  "techniques": ["x-guard", "heel-hook"]  // optional
}

# Response
{ "success": true, "log": { "id": "...", "date": "2026-04-09", ... } }`}</pre>
          </div>

          {/* AI Coach */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-5 py-3">
              <span className="rounded bg-blue-600/20 px-2 py-0.5 text-xs font-bold text-blue-400">POST</span>
              <code className="text-sm text-zinc-200">/api/v1/coach</code>
              <span className="ml-auto text-xs text-zinc-500">Query the AI BJJ coach</span>
            </div>
            <pre className="p-5 text-sm text-zinc-300 overflow-x-auto">{`# Body
{
  "message": "How do I improve my guard retention?",
  "history": [  // optional conversation history
    { "role": "user", "content": "I keep getting my guard passed" },
    { "role": "assistant", "content": "Let's work on your frames..." }
  ]
}

# Response
{
  "reply": "Guard retention starts with active frames and hip movement..."
}`}</pre>
          </div>

          {/* Techniques */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-5 py-3">
              <span className="rounded bg-green-600/20 px-2 py-0.5 text-xs font-bold text-green-400">GET</span>
              <code className="text-sm text-zinc-200">/api/v1/techniques</code>
              <span className="ml-auto text-xs text-zinc-500">Get bookmarked techniques</span>
            </div>
            <pre className="p-5 text-sm text-zinc-300 overflow-x-auto">{`# Response
{ "techniques": [{ "techniqueId": "armbar", "createdAt": "..." }, ...] }`}</pre>
          </div>
        </section>

        {/* Example: ChatGPT Custom Action */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Use with ChatGPT Custom Actions</h2>
          <p className="text-zinc-400 mb-4">You can add AIBJJ as a custom action in your ChatGPT GPT. This lets your GPT log training sessions, check your streak, and query your AI coach — all from inside ChatGPT.</p>
          <pre className="rounded-xl bg-zinc-900 border border-zinc-800 p-4 text-sm text-zinc-300 overflow-x-auto">{`openapi: 3.1.0
info:
  title: AIBJJ Training API
  version: 1.0.0
servers:
  - url: https://aibjj.com
paths:
  /api/v1/training:
    get:
      summary: Get training stats
      operationId: getTraining
    post:
      summary: Log a training session
      operationId: logTraining
  /api/v1/coach:
    post:
      summary: Ask the BJJ coach
      operationId: askCoach`}</pre>
        </section>

        {/* Rate limits */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-xl font-bold mb-3">Rate Limits</h2>
          <div className="space-y-2 text-sm text-zinc-400">
            <p>• <span className="text-zinc-200">100 requests/minute</span> per API key</p>
            <p>• <span className="text-zinc-200">1,000 AI coach requests/day</span> via API</p>
            <p>• No limits on training log reads/writes</p>
            <p>• Contact us for higher limits if you are building something cool</p>
          </div>
        </section>
      </div>
    </div>
  );
}
