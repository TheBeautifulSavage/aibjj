"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Loader2,
  Plus,
  Trash2,
  GripVertical,
  Video,
  Upload,
  Image as ImageIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUploadThing } from "@/lib/uploadthing";

const CATEGORIES = [
  "Guard",
  "Passing",
  "Submissions",
  "Takedowns",
  "Fundamentals",
  "Escapes",
  "Leg Locks",
  "Back Control",
  "Competition",
  "No-Gi",
  "Self Defense",
];

const BELT_LEVELS = ["WHITE", "BLUE", "PURPLE", "BROWN", "BLACK"];

interface Lesson {
  id?: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  order: number;
  free: boolean;
}

interface CourseFormData {
  title: string;
  description: string;
  price: number;
  category: string;
  beltLevel: string;
  coverImage: string;
  published: boolean;
}

export default function EditCoursePage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<CourseFormData>({
    title: "",
    description: "",
    price: 0,
    category: "",
    beltLevel: "",
    coverImage: "",
    published: false,
  });
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingVideoIndex, setUploadingVideoIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { startUpload: uploadThumbnail } = useUploadThing("courseThumbnail");
  const { startUpload: uploadVideo } = useUploadThing("courseVideo");

  const fetchCourse = useCallback(async () => {
    try {
      const res = await fetch(`/api/courses/${courseId}`);
      if (!res.ok) {
        setError("Course not found or you don't have permission to edit it.");
        return;
      }
      const data = await res.json();
      setForm({
        title: data.title || "",
        description: data.description || "",
        price: data.price || 0,
        category: data.category || "",
        beltLevel: data.beltLevel || "",
        coverImage: data.coverImage || "",
        published: data.published || false,
      });
      setLessons(
        (data.lessons || []).map((l: Lesson & { id: string }) => ({
          id: l.id,
          title: l.title || "",
          description: l.description || "",
          videoUrl: l.videoUrl || "",
          duration: l.duration || 0,
          order: l.order ?? 0,
          free: l.free ?? false,
        }))
      );
    } catch {
      setError("Failed to load course.");
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

  const handleSave = async () => {
    if (!form.title.trim()) {
      setError("Course title is required.");
      return;
    }
    setSaving(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch(`/api/courses/${courseId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          lessons: lessons.map((l, i) => ({
            ...l,
            order: i,
          })),
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to save course.");
        return;
      }
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError("Failed to save course. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingCover(true);
    try {
      const result = await uploadThumbnail([file]);
      if (result?.[0]?.url) {
        setForm((f) => ({ ...f, coverImage: result[0].url }));
      }
    } finally {
      setUploadingCover(false);
    }
  };

  const handleVideoUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingVideoIndex(index);
    try {
      const result = await uploadVideo([file]);
      if (result?.[0]?.url) {
        updateLesson(index, "videoUrl", result[0].url);
      }
    } finally {
      setUploadingVideoIndex(null);
    }
  };

  const addLesson = () => {
    setLessons((prev) => [
      ...prev,
      {
        title: "",
        description: "",
        videoUrl: "",
        duration: 0,
        order: prev.length,
        free: false,
      },
    ]);
  };

  const removeLesson = (index: number) => {
    setLessons((prev) => prev.filter((_, i) => i !== index));
  };

  const updateLesson = (index: number, field: keyof Lesson, value: string | number | boolean) => {
    setLessons((prev) =>
      prev.map((l, i) => (i === index ? { ...l, [field]: value } : l))
    );
  };

  const moveLessonUp = (index: number) => {
    if (index === 0) return;
    setLessons((prev) => {
      const newLessons = [...prev];
      [newLessons[index - 1], newLessons[index]] = [newLessons[index], newLessons[index - 1]];
      return newLessons;
    });
  };

  const moveLessonDown = (index: number) => {
    setLessons((prev) => {
      if (index === prev.length - 1) return prev;
      const newLessons = [...prev];
      [newLessons[index], newLessons[index + 1]] = [newLessons[index + 1], newLessons[index]];
      return newLessons;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  if (error && !form.title) {
    return (
      <div className="space-y-4">
        <Link href="/creator" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <Card className="border-zinc-800">
          <CardContent className="py-12 text-center">
            <p className="text-zinc-400">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/creator"
            className="flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <h1 className="text-xl font-bold text-zinc-100">Edit Course</h1>
        </div>
        <div className="flex items-center gap-2">
          {success && (
            <span className="text-sm text-green-400">Saved!</span>
          )}
          <Button
            onClick={handleSave}
            disabled={saving}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-950/50 border border-red-800 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Course Details */}
      <Card className="border-zinc-800">
        <CardHeader>
          <CardTitle className="text-base">Course Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-zinc-300">
              Title *
            </Label>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="e.g. Complete Guard System"
              className="bg-zinc-900 border-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-zinc-300">
              Description
            </Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              placeholder="Describe what students will learn..."
              rows={4}
              className="bg-zinc-900 border-zinc-700 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price" className="text-zinc-300">
                Price ($)
              </Label>
              <Input
                id="price"
                type="number"
                min={0}
                value={form.price}
                onChange={(e) => setForm((f) => ({ ...f, price: parseFloat(e.target.value) || 0 }))}
                className="bg-zinc-900 border-zinc-700"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-300">Category</Label>
              <Select
                value={form.category}
                onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}
              >
                <SelectTrigger className="bg-zinc-900 border-zinc-700">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-zinc-300">Belt Level</Label>
              <Select
                value={form.beltLevel}
                onValueChange={(v) => setForm((f) => ({ ...f, beltLevel: v }))}
              >
                <SelectTrigger className="bg-zinc-900 border-zinc-700">
                  <SelectValue placeholder="Select belt level" />
                </SelectTrigger>
                <SelectContent>
                  {BELT_LEVELS.map((belt) => (
                    <SelectItem key={belt} value={belt}>
                      {belt.charAt(0) + belt.slice(1).toLowerCase()} Belt
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-300">Visibility</Label>
              <Select
                value={form.published ? "published" : "draft"}
                onValueChange={(v) => setForm((f) => ({ ...f, published: v === "published" }))}
              >
                <SelectTrigger className="bg-zinc-900 border-zinc-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Cover Image */}
          <div className="space-y-2">
            <Label className="text-zinc-300">Cover Image</Label>
            <div className="flex items-center gap-3">
              {form.coverImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={form.coverImage}
                  alt="Cover"
                  className="h-20 w-32 object-cover rounded-lg border border-zinc-700"
                />
              ) : (
                <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900">
                  <ImageIcon className="h-6 w-6 text-zinc-600" />
                </div>
              )}
              <div className="space-y-2">
                <label className="cursor-pointer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-700 pointer-events-none"
                    disabled={uploadingCover}
                    asChild
                  >
                    <span>
                      {uploadingCover ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Upload className="h-4 w-4 mr-2" />
                      )}
                      Upload Image
                    </span>
                  </Button>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleCoverUpload}
                    disabled={uploadingCover}
                  />
                </label>
                {form.coverImage && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-zinc-500 hover:text-red-400 text-xs"
                    onClick={() => setForm((f) => ({ ...f, coverImage: "" }))}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lessons */}
      <Card className="border-zinc-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">
              Lessons ({lessons.length})
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="border-zinc-700"
              onClick={addLesson}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Lesson
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {lessons.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <Video className="h-10 w-10 text-zinc-600 mb-3" />
              <p className="text-zinc-400 text-sm">No lessons yet</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 border-zinc-700"
                onClick={addLesson}
              >
                <Plus className="h-4 w-4 mr-1" />
                Add First Lesson
              </Button>
            </div>
          ) : (
            lessons.map((lesson, index) => (
              <div
                key={index}
                className="rounded-lg border border-zinc-700 bg-zinc-900/50 p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={() => moveLessonUp(index)}
                        className="text-zinc-600 hover:text-zinc-400 disabled:opacity-30"
                        disabled={index === 0}
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => moveLessonDown(index)}
                        className="text-zinc-600 hover:text-zinc-400 disabled:opacity-30"
                        disabled={index === lessons.length - 1}
                      >
                        ▼
                      </button>
                    </div>
                    <GripVertical className="h-4 w-4 text-zinc-600" />
                    <span className="text-sm font-medium text-zinc-300">
                      Lesson {index + 1}
                    </span>
                    {lesson.free && (
                      <Badge className="text-xs bg-green-600/20 text-green-400 border-green-800">
                        Free Preview
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-1.5 text-xs text-zinc-400 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={lesson.free}
                        onChange={(e) => updateLesson(index, "free", e.target.checked)}
                        className="rounded"
                      />
                      Free preview
                    </label>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-zinc-500 hover:text-red-400 h-7 w-7 p-0"
                      onClick={() => removeLesson(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Input
                    value={lesson.title}
                    onChange={(e) => updateLesson(index, "title", e.target.value)}
                    placeholder="Lesson title"
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <Textarea
                    value={lesson.description}
                    onChange={(e) => updateLesson(index, "description", e.target.value)}
                    placeholder="Lesson description (optional)"
                    rows={2}
                    className="bg-zinc-800 border-zinc-700 resize-none text-sm"
                  />
                </div>

                {/* Video */}
                <div className="flex items-center gap-3">
                  {lesson.videoUrl ? (
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Video className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-xs text-zinc-400 truncate">
                        {lesson.videoUrl.split("/").pop() || "Video uploaded"}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-zinc-500 hover:text-red-400 text-xs h-6 px-1 flex-shrink-0"
                        onClick={() => updateLesson(index, "videoUrl", "")}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <label className="cursor-pointer flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-zinc-700 text-xs pointer-events-none"
                        disabled={uploadingVideoIndex === index}
                        asChild
                      >
                        <span>
                          {uploadingVideoIndex === index ? (
                            <Loader2 className="h-3 w-3 animate-spin mr-1" />
                          ) : (
                            <Upload className="h-3 w-3 mr-1" />
                          )}
                          Upload Video
                        </span>
                      </Button>
                      <input
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={(e) => handleVideoUpload(e, index)}
                        disabled={uploadingVideoIndex !== null}
                      />
                    </label>
                  )}
                  <div className="flex items-center gap-1">
                    <Input
                      type="number"
                      value={lesson.duration || ""}
                      onChange={(e) => updateLesson(index, "duration", parseInt(e.target.value) || 0)}
                      placeholder="Duration (sec)"
                      className="w-32 bg-zinc-800 border-zinc-700 text-xs h-8"
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex items-center justify-between pb-8">
        <Button variant="outline" className="border-zinc-700" asChild>
          <Link href="/creator">Cancel</Link>
        </Button>
        <Button
          onClick={handleSave}
          disabled={saving}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          {saving ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
