"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
  videoFile: File | null;
  videoName: string;
  duration: string;
  free: boolean;
  expanded: boolean;
}

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

export default function UploadCoursePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [published, setPublished] = useState(false);

  // Course details
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [beltLevel, setBeltLevel] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [isPublished, setIsPublished] = useState(true);

  // Lessons
  const [lessons, setLessons] = useState<LessonDraft[]>([]);

  const addLesson = () => {
    setLessons([
      ...lessons,
      {
        id: generateId(),
        title: "",
        description: "",
        videoFile: null,
        videoName: "",
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

  const handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setThumbnailPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleVideoSelect = (lessonId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    updateLesson(lessonId, { videoFile: file, videoName: file.name });
  };

  const handlePublish = async () => {
    setSaving(true);
    try {
      const courseSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: courseSlug,
          description,
          price: parseFloat(price) || 0,
          category,
          beltLevel,
          published: isPublished,
          lessons: lessons.map((l, i) => ({
            title: l.title,
            description: l.description,
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

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-zinc-100">Upload Course</h1>
        <p className="text-sm text-zinc-400 mt-1">
          Zero to live in 60 seconds. Just add your content and hit publish.
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
            <label className="flex h-36 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 transition-colors hover:border-zinc-600 overflow-hidden">
              {thumbnailPreview ? (
                <img
                  src={thumbnailPreview}
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
                    16:9 ratio recommended — PNG, JPG
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleThumbnail}
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
                ? "Add lessons to your course"
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

        {lessons.map((lesson, index) => (
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
                  {lesson.videoName && (
                    <Badge variant="secondary" className="text-xs truncate max-w-[120px]">
                      {lesson.videoName}
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

                  <div className="grid gap-3 sm:grid-cols-2">
                    {/* Video upload */}
                    <label className="flex h-24 cursor-pointer items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/50 transition-colors hover:border-zinc-600">
                      {lesson.videoName ? (
                        <div className="text-center px-3">
                          <Video className="mx-auto h-5 w-5 text-green-500" />
                          <p className="mt-1 text-xs text-zinc-300 truncate max-w-[200px]">
                            {lesson.videoName}
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload className="mx-auto h-5 w-5 text-zinc-500" />
                          <p className="mt-1 text-xs text-zinc-500">
                            Drop video or click
                          </p>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={(e) => handleVideoSelect(lesson.id, e)}
                      />
                    </label>

                    <div className="space-y-2">
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
                </div>
              )}
            </CardContent>
          </Card>
        ))}
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
    </div>
  );
}
