"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Upload,
  Video,
  Plus,
  Trash,
  GripVertical,
  Image as ImageIcon,
  Loader2,
  Check,
  ChevronDown,
  ChevronUp,
  Link as LinkIcon,
  Play,
  Eye,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getVideoEmbed } from "@/lib/video-utils";
import { useUploadThing } from "@/lib/uploadthing";

const CATEGORIES = [
  "Guard",
  "Passing",
  "Submissions",
  "Takedowns",
  "Competition",
  "Fundamentals",
  "No-Gi",
  "Self-Defense",
  "Escapes",
  "Transitions",
];

const BELT_LEVELS = ["WHITE", "BLUE", "PURPLE", "BROWN", "BLACK"];

interface LessonDraft {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  free: boolean;
  expanded: boolean;
}

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

function VideoPreviewPlayer({ url }: { url: string }) {
  const embed = getVideoEmbed(url);

  if (embed.type === "youtube" || embed.type === "vimeo" || embed.type === "drive") {
    return (
      <iframe
        src={embed.embedUrl}
        className="w-full aspect-video rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        frameBorder="0"
      />
    );
  }

  if (embed.type === "direct") {
    return (
      <video
        src={embed.embedUrl}
        className="w-full aspect-video rounded-lg"
        controls
        playsInline
      />
    );
  }

  return (
    <div className="w-full aspect-video rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
      <p>Could not load video preview</p>
    </div>
  );
}

export default function UploadCoursePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [thumbnailUploading, setThumbnailUploading] = useState(false);

  const { startUpload: uploadThumbnail } = useUploadThing("courseThumbnail", {
    onClientUploadComplete: (res) => {
      if (res?.[0]?.url) {
        setThumbnailUrl(res[0].url);
        setThumbnailPreview(res[0].url);
      }
      setThumbnailUploading(false);
    },
    onUploadError: () => setThumbnailUploading(false),
  });
  const [published, setPublished] = useState(false);
  const [connectStatus, setConnectStatus] = useState<{
    connected: boolean;
    chargesEnabled: boolean;
  } | null>(null);
  const [connectLoading, setConnectLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stripe/connect/status")
      .then((r) => r.json())
      .then((d) => setConnectStatus(d))
      .catch(() => {})
      .finally(() => setConnectLoading(false));
  }, []);

  // Course details
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [beltLevel, setBeltLevel] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [isPublished, setIsPublished] = useState(true);

  // Lessons
  const [lessons, setLessons] = useState<LessonDraft[]>([]);
  const [uploadingLessonId, setUploadingLessonId] = useState<string | null>(null);

  // Preview modal
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { startUpload: uploadVideo } = useUploadThing("courseVideo", {
    onClientUploadComplete: (res) => {
      if (res?.[0]?.url && uploadingLessonId) {
        updateLesson(uploadingLessonId, { videoUrl: res[0].url });
      }
      setUploadingLessonId(null);
    },
    onUploadError: () => setUploadingLessonId(null),
  });

  const handleVideoFileUpload = (lessonId: string, file: File) => {
    setUploadingLessonId(lessonId);
    uploadVideo([file]);
  };

  const addLesson = () => {
    setLessons([
      ...lessons,
      {
        id: generateId(),
        title: "",
        description: "",
        videoUrl: "",
        duration: "",
        free: false,
        expanded: true,
      },
    ]);
  };

  const updateLesson = (id: string, updates: Partial<LessonDraft>) => {
    setLessons(lessons.map((l) => (l.id === id ? { ...l, ...updates } : l)));
  };

  const removeLesson = (id: string) => {
    setLessons(lessons.filter((l) => l.id !== id));
  };

  const moveLesson = (index: number, direction: "up" | "down") => {
    const newLessons = [...lessons];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newLessons.length) return;
    [newLessons[index], newLessons[targetIndex]] = [newLessons[targetIndex], newLessons[index]];
    setLessons(newLessons);
  };

  const handleThumbnailFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setThumbnailUploading(true);
    // Show local preview immediately
    const reader = new FileReader();
    reader.onload = () => setThumbnailPreview(reader.result as string);
    reader.readAsDataURL(file);
    // Upload to UploadThing
    uploadThumbnail([file]);
  };

  const handlePublish = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          price: parseFloat(price) || 0,
          category,
          beltLevel,
          coverImage: thumbnailUrl || thumbnailPreview || null,
          published: isPublished,
          lessons: lessons.map((l, i) => ({
            title: l.title,
            description: l.description,
            videoUrl: l.videoUrl || null,
            order: i,
            free: l.free,
            duration: l.duration ? parseInt(l.duration) * 60 : null,
          })),
        }),
      });

      if (res.ok) {
        setPublished(true);
        setTimeout(() => router.push("/creator"), 2000);
      }
    } catch {
      // handle error
    } finally {
      setSaving(false);
    }
  };

  if (published) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
        <div className="h-16 w-16 rounded-full bg-green-600/20 flex items-center justify-center">
          <Check className="h-8 w-8 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold text-zinc-100">Course Published!</h1>
        <p className="text-zinc-400">
          Your course is now live. Redirecting to your dashboard...
        </p>
      </div>
    );
  }

  const earnings = price ? (parseFloat(price) * 0.85).toFixed(2) : "0.00";

  const bankConnected = connectStatus?.connected && connectStatus?.chargesEnabled;

  if (connectLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  if (!bankConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="h-16 w-16 rounded-full bg-red-600/20 flex items-center justify-center">
          <AlertCircle className="h-8 w-8 text-red-500" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-zinc-100">Connect your bank account first</h1>
          <p className="text-zinc-400 max-w-md">
            You need to connect a bank account before you can publish courses. Set up payouts on your Creator Dashboard to get started.
          </p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
          <Link href="/creator">
            Set Up Payouts <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-zinc-100">Upload Course</h1>
        <p className="text-sm text-zinc-400 mt-1">
          Zero to live in 60 seconds. Paste video URLs from YouTube, Vimeo, or
          any direct link.
        </p>
      </div>

      {/* Course Details */}
      <Card className="border-zinc-800">
        <CardContent className="p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="course-title">Course Title</Label>
            <Input
              id="course-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Complete Guard System"
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What will students learn? Be specific about techniques covered..."
              rows={3}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label>Price ($)</Label>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="49.99"
                min="0"
                step="0.01"
              />
              {price && (
                <p className="text-xs text-green-500">
                  You earn ${earnings} per sale (85%)
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Pick one" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Belt Level</Label>
              <Select value={beltLevel} onValueChange={setBeltLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Pick one" />
                </SelectTrigger>
                <SelectContent>
                  {BELT_LEVELS.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b.charAt(0) + b.slice(1).toLowerCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="space-y-2">
            <Label>Course Thumbnail</Label>
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  value={thumbnailUrl}
                  onChange={(e) => {
                    setThumbnailUrl(e.target.value);
                    setThumbnailPreview(null);
                  }}
                  placeholder="Paste image URL or upload below"
                />
              </div>
            </div>
            <label className="flex h-36 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 transition-colors hover:border-zinc-600 overflow-hidden relative">
              {thumbnailPreview || thumbnailUrl ? (
                <img
                  src={thumbnailPreview || thumbnailUrl}
                  alt="Thumbnail"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <ImageIcon className="mx-auto h-8 w-8 text-zinc-500" />
                  <p className="mt-2 text-sm text-zinc-400">
                    Drop thumbnail or click to upload
                  </p>
                  <p className="text-xs text-zinc-600">
                    16:9 ratio recommended — PNG, JPG (max 4MB)
                  </p>
                </div>
              )}
              {thumbnailUploading && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-white" />
                  <span className="ml-2 text-white text-sm">Uploading...</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleThumbnailFile}
                disabled={thumbnailUploading}
              />
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Lessons */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">Lessons</h2>
            <p className="text-sm text-zinc-400">
              {lessons.length === 0
                ? "Add lessons with video URLs"
                : `${lessons.length} lesson${lessons.length > 1 ? "s" : ""}`}
            </p>
          </div>
          <Button
            variant="outline"
            onClick={addLesson}
            className="border-zinc-700"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add Lesson
          </Button>
        </div>

        {lessons.length === 0 && (
          <Card className="border-zinc-800 border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Video className="h-10 w-10 text-zinc-600 mb-3" />
              <p className="text-zinc-400 text-sm">No lessons yet</p>
              <p className="text-zinc-600 text-xs mt-1">
                Paste YouTube, Vimeo, Google Drive, or direct MP4 URLs
              </p>
              <Button
                variant="outline"
                onClick={addLesson}
                className="mt-4 border-zinc-700"
              >
                <Plus className="h-4 w-4 mr-1.5" />
                Add Your First Lesson
              </Button>
            </CardContent>
          </Card>
        )}

        {lessons.map((lesson, index) => {
          const videoEmbed = lesson.videoUrl
            ? getVideoEmbed(lesson.videoUrl)
            : null;
          const hasValidVideo =
            videoEmbed && videoEmbed.type !== "unknown";

          return (
            <Card key={lesson.id} className="border-zinc-800">
              <CardContent className="p-0">
                {/* Lesson header */}
                <div
                  className="flex items-center gap-3 p-4 cursor-pointer"
                  onClick={() =>
                    updateLesson(lesson.id, { expanded: !lesson.expanded })
                  }
                >
                  <GripVertical className="h-4 w-4 text-zinc-600 flex-shrink-0" />
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Badge variant="outline" className="text-xs flex-shrink-0">
                      {index + 1}
                    </Badge>
                    <span className="text-sm font-medium text-zinc-200 truncate">
                      {lesson.title || "Untitled Lesson"}
                    </span>
                    {lesson.free && (
                      <Badge className="bg-green-600/20 text-green-400 border-green-800 text-xs">
                        Free Preview
                      </Badge>
                    )}
                    {hasValidVideo && (
                      <Badge
                        variant="secondary"
                        className="text-xs capitalize"
                      >
                        {videoEmbed.type}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 text-zinc-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        moveLesson(index, "up");
                      }}
                      disabled={index === 0}
                    >
                      <ChevronUp className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 text-zinc-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        moveLesson(index, "down");
                      }}
                      disabled={index === lessons.length - 1}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 text-zinc-500 hover:text-red-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeLesson(lesson.id);
                      }}
                    >
                      <Trash className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>

                {/* Lesson details (expanded) */}
                {lesson.expanded && (
                  <div className="border-t border-zinc-800 p-4 space-y-3">
                    <Input
                      value={lesson.title}
                      onChange={(e) =>
                        updateLesson(lesson.id, { title: e.target.value })
                      }
                      placeholder="Lesson title"
                    />

                    <Textarea
                      value={lesson.description}
                      onChange={(e) =>
                        updateLesson(lesson.id, {
                          description: e.target.value,
                        })
                      }
                      placeholder="Brief description (optional)"
                      rows={2}
                    />

                    {/* Video URL input */}
                    <div className="space-y-2">
                      <Label className="text-xs text-zinc-400 flex items-center gap-1.5">
                        <LinkIcon className="h-3 w-3" />
                        Video
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          value={lesson.videoUrl}
                          onChange={(e) =>
                            updateLesson(lesson.id, {
                              videoUrl: e.target.value,
                            })
                          }
                          placeholder="Paste YouTube, Vimeo, Google Drive, or direct MP4 URL"
                          className="flex-1"
                          disabled={uploadingLessonId === lesson.id}
                        />
                        {/* Upload file directly */}
                        <label className="flex-shrink-0">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-700 gap-1.5"
                            disabled={!!uploadingLessonId}
                            onClick={(e) => e.preventDefault()}
                            asChild
                          >
                            <span>
                              {uploadingLessonId === lesson.id ? (
                                <><Loader2 className="h-3.5 w-3.5 animate-spin" /> Uploading...</>
                              ) : (
                                <><Upload className="h-3.5 w-3.5" /> Upload</>
                              )}
                            </span>
                          </Button>
                          <input
                            type="file"
                            accept="video/*"
                            className="hidden"
                            disabled={!!uploadingLessonId}
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleVideoFileUpload(lesson.id, file);
                            }}
                          />
                        </label>
                        {lesson.videoUrl && hasValidVideo && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-700 gap-1.5 flex-shrink-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPreviewUrl(lesson.videoUrl);
                            }}
                          >
                            <Eye className="h-3.5 w-3.5" />
                            Preview
                          </Button>
                        )}
                      </div>
                      <p className="text-xs text-zinc-600">
                        Paste URL (YouTube, Vimeo, Drive, Dropbox) or upload MP4 directly (max 2GB)
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Input
                        type="number"
                        value={lesson.duration}
                        onChange={(e) =>
                          updateLesson(lesson.id, {
                            duration: e.target.value,
                          })
                        }
                        placeholder="Duration (minutes)"
                      />
                      <label className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={lesson.free}
                          onChange={(e) =>
                            updateLesson(lesson.id, {
                              free: e.target.checked,
                            })
                          }
                          className="rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-600"
                        />
                        Free preview lesson
                      </label>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Publish Controls */}
      <Card className="border-zinc-800">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <div
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    isPublished ? "bg-red-600" : "bg-zinc-700"
                  }`}
                  onClick={() => setIsPublished(!isPublished)}
                >
                  <div
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                      isPublished ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </div>
                <span className="text-sm text-zinc-300">
                  {isPublished ? "Publish immediately" : "Save as draft"}
                </span>
              </label>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => router.push("/creator")}
                className="border-zinc-700"
              >
                Cancel
              </Button>
              <Button
                onClick={handlePublish}
                disabled={!title || saving}
                className="bg-red-600 hover:bg-red-700 text-white px-8"
              >
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Publishing...
                  </>
                ) : isPublished ? (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Publish Course
                  </>
                ) : (
                  "Save Draft"
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Preview Modal */}
      <Dialog
        open={previewUrl !== null}
        onOpenChange={(open) => !open && setPreviewUrl(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Video Preview
              </span>
            </DialogTitle>
          </DialogHeader>
          {previewUrl && <VideoPreviewPlayer url={previewUrl} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
