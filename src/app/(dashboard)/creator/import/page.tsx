"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, PlayCircle, ClipboardPaste, CheckCircle, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = [
  "Guard",
  "Passing",
  "Submissions",
  "Leglocks",
  "Takedowns",
  "Wrestling",
  "Competition",
  "Self-Defense",
  "Fundamentals",
];

interface ImportSuccess {
  courseId: string;
  courseUrl: string;
  price: number;
  title: string;
}

// ─── Earnings Calculator ─────────────────────────────────────────────────────
function EarningsCalculator({ price, title }: { price: number; title: string }) {
  const students = 100;
  const aibjjEarnings = students * price * 0.85;
  const fanaticsEarnings = students * price * 0.40;
  const advantage = aibjjEarnings - fanaticsEarnings;

  return (
    <div className="rounded-2xl bg-gradient-to-br from-green-950/40 to-green-900/20 border border-green-700/40 p-6">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle className="h-5 w-5 text-green-400" />
        <h3 className="font-bold text-green-300 text-lg">
          🎉 Your course is live!
        </h3>
      </div>
      <p className="text-gray-300 mb-4">
        <strong className="text-white">"{title}"</strong> has been imported and is ready to publish.
      </p>

      <div className="bg-black/30 rounded-xl p-4 mb-4">
        <p className="text-gray-400 text-sm mb-3 font-semibold uppercase tracking-wider">
          Your Earnings Calculator
        </p>
        <p className="text-gray-300 text-sm mb-3">
          If {students} students buy at ${price.toFixed(0)}:
        </p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">AIBJJ (85% payout)</span>
            <span className="text-green-400 font-bold text-lg">
              ${aibjjEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">BJJ Fanatics (~40% payout)</span>
            <span className="text-red-400 font-bold text-lg">
              ${fanaticsEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
          <div className="border-t border-green-800/40 pt-2 flex justify-between items-center">
            <span className="text-gray-300 text-sm font-semibold">AIBJJ Advantage</span>
            <span className="text-green-300 font-black text-xl">
              +${advantage.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button className="bg-red-600 hover:bg-red-700 text-white flex-1" asChild>
          <Link href="/creator">Go to Dashboard</Link>
        </Button>
        <Button
          variant="outline"
          className="border-green-700 text-green-400 hover:bg-green-950/30 flex-1"
          onClick={() => window.location.reload()}
        >
          Import Another
        </Button>
      </div>
    </div>
  );
}

// ─── Tab 1: Manual Import ─────────────────────────────────────────────────────
function ManualImportTab() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    coverImage: "",
    price: "",
    category: "",
    lessons: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<ImportSuccess | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Please enter a course title.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const lessons = form.lessons
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);

      const res = await fetch("/api/creator/import-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          coverImage: form.coverImage,
          price: parseFloat(form.price) || 0,
          category: form.category,
          lessons,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Import failed");
      setSuccess({
        courseId: data.courseId,
        courseUrl: data.courseUrl,
        price: parseFloat(form.price) || 49,
        title: form.title,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <EarningsCalculator price={success.price} title={success.title} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-lg border border-red-600/40 bg-red-950/20 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          Course Title <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="e.g. Complete Guard System for Competitors"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          Description
        </label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="What will students learn? Who is this for?"
          rows={4}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Cover Image URL
          </label>
          <input
            type="url"
            value={form.coverImage}
            onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
            placeholder="https://..."
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <p className="mt-1 text-xs text-zinc-500">Paste a URL from Fanatics or a YouTube thumbnail</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Price ($)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="49"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          Category
        </label>
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
        >
          <option value="">Select a category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          Lesson List
        </label>
        <textarea
          value={form.lessons}
          onChange={(e) => setForm({ ...form, lessons: e.target.value })}
          placeholder={"Introduction\nPart 1: The Foundation\nPart 2: Breaking Grips\nThe Guard Recovery System\nLive Drilling Tips"}
          rows={6}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 font-mono resize-none"
        />
        <p className="mt-1 text-xs text-zinc-500">One lesson title per line</p>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-base"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Importing...
          </>
        ) : (
          <>
            <Upload className="h-4 w-4 mr-2" />
            Import Course
          </>
        )}
      </Button>
    </form>
  );
}

// ─── Tab 2: Paste from Fanatics ───────────────────────────────────────────────
function FanaticsImportTab() {
  const [pastedText, setPastedText] = useState("");
  const [addLessonsManually, setAddLessonsManually] = useState(true);
  const [parsed, setParsed] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    coverImage: "",
    price: "",
    category: "",
    lessons: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<ImportSuccess | null>(null);

  const parsePastedText = () => {
    if (!pastedText.trim()) return;

    // Simple extraction: first line as title, rest as description
    const lines = pastedText.trim().split("\n").filter((l) => l.trim());

    // Try to detect title from URL or first line
    let title = "";
    let description = "";

    const urlMatch = pastedText.match(/bjjfanatics\.com\/[^/]+\/[^/?\s]+/);
    if (urlMatch) {
      // Extract from URL slug
      const slug = urlMatch[0].split("/").pop() ?? "";
      title = slug
        .replace(/-by-[^-]+.*$/i, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim();
    } else {
      title = lines[0] ?? "";
    }

    description = lines.slice(1).join(" ").slice(0, 1000);

    setParsed({ title, description });
    setForm({
      title,
      description,
      coverImage: "",
      price: "",
      category: "",
      lessons: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Please enter a course title.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const lessons = addLessonsManually
        ? []
        : form.lessons
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean);

      const res = await fetch("/api/creator/import-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          coverImage: form.coverImage,
          price: parseFloat(form.price) || 0,
          category: form.category,
          lessons,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Import failed");
      setSuccess({
        courseId: data.courseId,
        courseUrl: data.courseUrl,
        price: parseFloat(form.price) || 49,
        title: form.title,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <EarningsCalculator price={success.price} title={success.title} />;
  }

  return (
    <div className="space-y-5">
      {error && (
        <div className="rounded-lg border border-red-600/40 bg-red-950/20 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {!parsed ? (
        <>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Paste your BJJ Fanatics product URL or description
            </label>
            <textarea
              value={pastedText}
              onChange={(e) => setPastedText(e.target.value)}
              placeholder={"https://bjjfanatics.com/products/complete-guard-system-by-john-danaher\n\nor paste the full product description text here..."}
              rows={5}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
            />
          </div>
          <Button
            onClick={parsePastedText}
            disabled={!pastedText.trim()}
            className="w-full bg-zinc-700 hover:bg-zinc-600 text-white"
          >
            <ClipboardPaste className="h-4 w-4 mr-2" />
            Parse and Pre-fill Form
          </Button>
        </>
      ) : (
        <>
          <div className="rounded-lg border border-green-700/40 bg-green-950/20 px-4 py-3 text-sm text-green-400 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0" />
            Parsed successfully! Review and edit the fields below.
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Course Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={4}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                  Price ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  placeholder="49"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="">Select a category</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preview card */}
            <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
              <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Preview</p>
              <div className="flex items-start gap-3">
                <div className="h-12 w-16 rounded bg-zinc-700 flex items-center justify-center text-zinc-500 text-xs flex-shrink-0">
                  IMG
                </div>
                <div>
                  <p className="font-semibold text-zinc-100 text-sm">
                    {form.title || "Course Title"}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5 line-clamp-2">
                    {form.description || "Description will appear here"}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    {form.category && (
                      <Badge variant="outline" className="text-xs py-0">
                        {form.category}
                      </Badge>
                    )}
                    {form.price && (
                      <span className="text-xs font-semibold text-green-400">
                        ${form.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Lessons toggle */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={addLessonsManually}
                onChange={(e) => setAddLessonsManually(e.target.checked)}
                className="rounded border-zinc-600 bg-zinc-800"
              />
              <span className="text-sm text-zinc-300">
                I'll add lessons manually after import
              </span>
            </label>

            {!addLessonsManually && (
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                  Lesson List (one per line)
                </label>
                <textarea
                  value={form.lessons}
                  onChange={(e) => setForm({ ...form, lessons: e.target.value })}
                  rows={5}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 font-mono resize-none"
                />
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Importing...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Import Course
                </>
              )}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

// ─── Tab 3: YouTube Import ────────────────────────────────────────────────────
function YouTubeImportTab() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!youtubeUrl.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/creator/import-youtube", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ youtubeUrl: youtubeUrl.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to queue import");
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-blue-950/40 to-blue-900/20 border border-blue-700/40 p-6 text-center">
        <PlayCircle className="h-10 w-10 text-blue-400 mx-auto mb-3" />
        <h3 className="font-bold text-blue-300 text-lg mb-2">Import Queued!</h3>
        <p className="text-gray-300 mb-4">
          We'll process your YouTube content within 24 hours and set up your course automatically.
          You'll receive an email when it's ready to review.
        </p>
        <div className="bg-black/30 rounded-xl p-3 mb-4">
          <p className="text-xs text-gray-500 break-all">{youtubeUrl}</p>
        </div>
        <Button variant="outline" className="border-blue-700 text-blue-400" asChild>
          <Link href="/creator">Go to Dashboard</Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-lg border border-red-600/40 bg-red-950/20 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="rounded-xl border border-blue-700/30 bg-blue-950/20 p-4">
        <h3 className="text-blue-300 font-semibold text-sm mb-1 flex items-center gap-2">
          <PlayCircle className="h-4 w-4" />
          YouTube Import
        </h3>
        <p className="text-gray-400 text-sm">
          Paste a YouTube playlist URL or individual video URL. We'll extract the title,
          description, and create a course structure from your content.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">
          YouTube Playlist or Video URL
        </label>
        <input
          type="url"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          placeholder="https://www.youtube.com/playlist?list=PLxxxxxx or https://youtu.be/xxxxx"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          required
        />
        <p className="mt-1 text-xs text-zinc-500">
          Works with playlists (best) or individual videos
        </p>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 space-y-2">
        <p className="text-sm font-medium text-zinc-300">What happens next:</p>
        <ul className="space-y-1.5 text-sm text-zinc-400">
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">✓</span>
            We queue your YouTube content for processing
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">✓</span>
            Our team extracts titles, descriptions, and lesson structure
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">✓</span>
            Your course appears in your dashboard within 24 hours
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">✓</span>
            You review, set pricing, and publish when ready
          </li>
        </ul>
      </div>

      <Button
        type="submit"
        disabled={loading || !youtubeUrl.trim()}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-base"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Queuing...
          </>
        ) : (
          <>
            <PlayCircle className="h-4 w-4 mr-2" />
            Queue YouTube Import
          </>
        )}
      </Button>
    </form>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CreatorImportPage() {
  const [activeTab, setActiveTab] = useState<"manual" | "fanatics" | "youtube">("manual");

  const tabs = [
    { id: "manual", label: "Manual Import", icon: <Upload className="h-4 w-4" /> },
    { id: "fanatics", label: "From Fanatics", icon: <ClipboardPaste className="h-4 w-4" /> },
    { id: "youtube", label: "YouTube", icon: <PlayCircle className="h-4 w-4" /> },
  ] as const;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div>
        <Link
          href="/creator"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-200 transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-zinc-100">Import Your Courses</h1>
        <p className="text-sm text-zinc-400 mt-1">
          Bring your existing BJJ content to AIBJJ in minutes.
        </p>
      </div>

      {/* Earnings teaser */}
      <div className="rounded-xl bg-gradient-to-r from-green-950/30 to-transparent border border-green-800/40 px-4 py-3 flex items-center gap-3">
        <span className="text-2xl">💰</span>
        <p className="text-sm text-zinc-300">
          AIBJJ pays you <strong className="text-green-400">85%</strong> on every sale —
          vs ~40% on BJJ Fanatics.{" "}
          <Link href="/switch-from-bjj-fanatics" className="text-green-400 underline underline-offset-2">
            See the math →
          </Link>
        </p>
      </div>

      <Card className="border-zinc-800">
        <CardHeader>
          <CardTitle className="text-base text-zinc-100">Choose Import Method</CardTitle>
          <CardDescription>
            Three ways to get your content onto AIBJJ fast
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tab Bar */}
          <div className="flex gap-1 rounded-lg bg-zinc-800/50 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-zinc-700 text-zinc-100"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "manual" && <ManualImportTab />}
          {activeTab === "fanatics" && <FanaticsImportTab />}
          {activeTab === "youtube" && <YouTubeImportTab />}
        </CardContent>
      </Card>
    </div>
  );
}
