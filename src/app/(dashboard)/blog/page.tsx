"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import {
  PenLine,
  Sparkles,
  FileText,
  Trash2,
  Eye,
  EyeOff,
  RefreshCw,
  Send,
  Save,
  Loader2,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  coverImage: string | null;
  keywords: string | null;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
}

interface BlogQueue {
  id: string;
  topics: string;
  frequency: string;
  active: boolean;
  lastRunAt: string | null;
}

type TabId = "posts" | "generate" | "write";

export default function BlogDashboard() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<TabId>("posts");

  // Posts state
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [postsPage, setPostsPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Generate state
  const [topicsText, setTopicsText] = useState("");
  const [frequency, setFrequency] = useState("manual");
  const [generating, setGenerating] = useState(false);
  const [preview, setPreview] = useState<{
    title: string;
    excerpt: string;
    content: string;
    keywords: string;
    coverImage: string;
  } | null>(null);
  const [savingGenerated, setSavingGenerated] = useState(false);
  const [queue, setQueue] = useState<BlogQueue | null>(null);

  // Write state
  const [writeTitle, setWriteTitle] = useState("");
  const [writeContent, setWriteContent] = useState("");
  const [writeCoverImage, setWriteCoverImage] = useState("");
  const [writeKeywords, setWriteKeywords] = useState("");
  const [writePublish, setWritePublish] = useState(false);
  const [savingManual, setSavingManual] = useState(false);

  const username = (session?.user as { username?: string })?.username;

  const fetchPosts = useCallback(async () => {
    setLoadingPosts(true);
    try {
      const res = await fetch(`/api/blog?page=${postsPage}&limit=10`);
      const data = await res.json();
      setPosts(data.posts || []);
      setTotalPages(data.totalPages || 1);
    } catch {
      // ignore
    }
    setLoadingPosts(false);
  }, [postsPage]);

  const fetchQueue = useCallback(async () => {
    try {
      const res = await fetch("/api/blog/queue");
      const data = await res.json();
      if (data.queue) {
        setQueue(data.queue);
        const topics: string[] = JSON.parse(data.queue.topics);
        setTopicsText(topics.join("\n"));
        setFrequency(data.queue.frequency);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    fetchQueue();
  }, [fetchQueue]);

  const handleGenerate = async () => {
    const topics = topicsText
      .split("\n")
      .map((t) => t.trim())
      .filter(Boolean);
    if (topics.length === 0) return;

    setGenerating(true);
    setPreview(null);
    try {
      const res = await fetch("/api/blog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topics[0],
          keywords: topics.slice(0, 5),
        }),
      });
      const data = await res.json();
      if (data.error) {
        alert(data.error);
      } else {
        setPreview({
          title: data.title,
          excerpt: data.excerpt,
          content: data.content,
          keywords: data.keywords,
          coverImage: data.coverImage,
        });
      }
    } catch {
      alert("Failed to generate post");
    }
    setGenerating(false);
  };

  const handleSavePreview = async (publish: boolean) => {
    if (!preview) return;
    setSavingGenerated(true);
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: preview.title,
          content: preview.content,
          excerpt: preview.excerpt,
          coverImage: preview.coverImage,
          keywords: preview.keywords,
          published: publish,
        }),
      });
      const data = await res.json();
      if (data.error) {
        alert(data.error);
      } else {
        setPreview(null);
        fetchPosts();
        setActiveTab("posts");
      }
    } catch {
      alert("Failed to save post");
    }
    setSavingGenerated(false);
  };

  const handleSaveQueue = async () => {
    const topics = topicsText
      .split("\n")
      .map((t) => t.trim())
      .filter(Boolean);
    if (topics.length === 0) return;
    try {
      await fetch("/api/blog/queue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topics, frequency }),
      });
      fetchQueue();
    } catch {
      alert("Failed to save queue");
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    try {
      await fetch("/api/blog", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: post.id, published: !post.published }),
      });
      fetchPosts();
    } catch {
      alert("Failed to update post");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    try {
      await fetch(`/api/blog?id=${id}`, { method: "DELETE" });
      fetchPosts();
    } catch {
      alert("Failed to delete post");
    }
  };

  const handleManualSave = async () => {
    if (!writeTitle || !writeContent) return;
    setSavingManual(true);
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: writeTitle,
          content: writeContent,
          coverImage: writeCoverImage || null,
          keywords: writeKeywords || null,
          published: writePublish,
        }),
      });
      const data = await res.json();
      if (data.error) {
        alert(data.error);
      } else {
        setWriteTitle("");
        setWriteContent("");
        setWriteCoverImage("");
        setWriteKeywords("");
        setWritePublish(false);
        fetchPosts();
        setActiveTab("posts");
      }
    } catch {
      alert("Failed to save post");
    }
    setSavingManual(false);
  };

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: "posts", label: "My Posts", icon: <FileText className="h-4 w-4" /> },
    { id: "generate", label: "Auto-Generate", icon: <Sparkles className="h-4 w-4" /> },
    { id: "write", label: "Write Manually", icon: <PenLine className="h-4 w-4" /> },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="text-zinc-400 text-sm mt-1">
          AI-powered blog for your creator page. Generate SEO-optimized BJJ content automatically.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-zinc-900 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors flex-1 justify-center ${
              activeTab === tab.id
                ? "bg-red-600 text-white"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab: My Posts */}
      {activeTab === "posts" && (
        <div className="space-y-4">
          {loadingPosts ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-6 w-6 animate-spin text-zinc-500" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <FileText className="h-12 w-12 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-zinc-300">No posts yet</h3>
              <p className="text-zinc-500 text-sm mt-1">
                Use the Auto-Generate tab to create your first AI blog post.
              </p>
            </div>
          ) : (
            <>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {post.published ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="h-3 w-3" />
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">
                          <Clock className="h-3 w-3" />
                          Draft
                        </span>
                      )}
                      <span className="text-xs text-zinc-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-semibold text-zinc-200 truncate">{post.title}</h3>
                    {post.excerpt && (
                      <p className="text-sm text-zinc-500 mt-1 line-clamp-1">{post.excerpt}</p>
                    )}
                    {username && post.published && (
                      <a
                        href={`/s/${username}/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-red-400 hover:text-red-300 mt-2 inline-block"
                      >
                        View on your page →
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleTogglePublish(post)}
                      className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                      title={post.published ? "Unpublish" : "Publish"}
                    >
                      {post.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-zinc-800 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-4">
                  <button
                    onClick={() => setPostsPage((p) => Math.max(1, p - 1))}
                    disabled={postsPage === 1}
                    className="px-3 py-1.5 text-sm rounded-lg bg-zinc-800 text-zinc-300 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-zinc-500">
                    Page {postsPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPostsPage((p) => Math.min(totalPages, p + 1))}
                    disabled={postsPage === totalPages}
                    className="px-3 py-1.5 text-sm rounded-lg bg-zinc-800 text-zinc-300 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Tab: Auto-Generate */}
      {activeTab === "generate" && (
        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Topics / Keywords (one per line)
              </label>
              <textarea
                value={topicsText}
                onChange={(e) => setTopicsText(e.target.value)}
                placeholder={"heel hook defense\nguard retention for beginners\ntraining with injuries\nhalf guard sweeps\nsubmission escapes from mount"}
                rows={6}
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Frequency
              </label>
              <div className="flex gap-2">
                {["manual", "daily", "weekly"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      frequency === f
                        ? "bg-red-600 text-white"
                        : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleGenerate}
                disabled={generating || !topicsText.trim()}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors disabled:opacity-50"
              >
                {generating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="h-4 w-4" />
                )}
                {generating ? "Generating..." : "Generate Next Post"}
              </button>
              <button
                onClick={handleSaveQueue}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium transition-colors"
              >
                <Save className="h-4 w-4" />
                Save Queue
              </button>
            </div>

            {queue?.lastRunAt && (
              <p className="text-xs text-zinc-500">
                Last auto-generated: {new Date(queue.lastRunAt).toLocaleString()}
              </p>
            )}
          </div>

          {/* Preview */}
          {preview && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
                <h3 className="font-semibold text-zinc-200">Preview</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleGenerate}
                    disabled={generating}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium"
                  >
                    <RefreshCw className={`h-3.5 w-3.5 ${generating ? "animate-spin" : ""}`} />
                    Regenerate
                  </button>
                  <button
                    onClick={() => handleSavePreview(false)}
                    disabled={savingGenerated}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium"
                  >
                    <Save className="h-3.5 w-3.5" />
                    Save Draft
                  </button>
                  <button
                    onClick={() => handleSavePreview(true)}
                    disabled={savingGenerated}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-medium"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Publish
                  </button>
                </div>
              </div>

              {/* Cover image */}
              <div className="aspect-[3/1] bg-zinc-800">
                <img
                  src={preview.coverImage}
                  alt={preview.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-100">{preview.title}</h2>
                <p className="text-zinc-400 text-sm italic">{preview.excerpt}</p>
                {preview.keywords && (
                  <div className="flex flex-wrap gap-2">
                    {preview.keywords.split(",").map((kw) => (
                      <span
                        key={kw}
                        className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-xs"
                      >
                        {kw.trim()}
                      </span>
                    ))}
                  </div>
                )}
                <div className="prose prose-invert prose-sm max-w-none">
                  <MarkdownRenderer content={preview.content} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab: Write Manually */}
      {activeTab === "write" && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Title</label>
            <input
              value={writeTitle}
              onChange={(e) => setWriteTitle(e.target.value)}
              placeholder="Your blog post title"
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Content (Markdown)
            </label>
            <textarea
              value={writeContent}
              onChange={(e) => setWriteContent(e.target.value)}
              placeholder="Write your blog post in markdown..."
              rows={16}
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 font-mono"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Cover Image URL
              </label>
              <input
                value={writeCoverImage}
                onChange={(e) => setWriteCoverImage(e.target.value)}
                placeholder="https://..."
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Keywords</label>
              <input
                value={writeKeywords}
                onChange={(e) => setWriteKeywords(e.target.value)}
                placeholder="bjj, guard pass, technique"
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 text-sm text-zinc-300 cursor-pointer">
              <input
                type="checkbox"
                checked={writePublish}
                onChange={(e) => setWritePublish(e.target.checked)}
                className="rounded border-zinc-700 bg-zinc-800 text-red-600 focus:ring-red-500"
              />
              Publish immediately
            </label>
            <button
              onClick={handleManualSave}
              disabled={savingManual || !writeTitle || !writeContent}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors disabled:opacity-50"
            >
              {savingManual ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {writePublish ? "Publish" : "Save Draft"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  const html = content
    .replace(/### (.+)/g, '<h3 class="text-lg font-semibold text-zinc-200 mt-6 mb-2">$1</h3>')
    .replace(/## (.+)/g, '<h2 class="text-xl font-bold text-zinc-100 mt-8 mb-3">$1</h2>')
    .replace(/# (.+)/g, '<h1 class="text-2xl font-bold text-zinc-100 mt-8 mb-3">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-zinc-200">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal text-zinc-300">$1</li>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-zinc-300">$1</li>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
