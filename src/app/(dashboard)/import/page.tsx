"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Download,
  Loader2,
  Plus,
  Trash2,
  Globe,
  Link2,
  ExternalLink,
  User,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CourseData {
  title: string;
  description: string;
  price: string;
  thumbnail: string;
}

interface ImportResult {
  creatorName: string;
  bio: string;
  belt: string;
  profileImage: string;
  courses: CourseData[];
  source: "structured" | "ai";
}

const BELT_OPTIONS = [
  { value: "WHITE", label: "White Belt" },
  { value: "BLUE", label: "Blue Belt" },
  { value: "PURPLE", label: "Purple Belt" },
  { value: "BROWN", label: "Brown Belt" },
  { value: "BLACK", label: "Black Belt" },
  { value: "CORAL", label: "Coral Belt" },
  { value: "RED", label: "Red Belt" },
];

const BELT_COLORS: Record<string, string> = {
  WHITE: "bg-white text-black",
  BLUE: "bg-blue-600 text-white",
  PURPLE: "bg-purple-600 text-white",
  BROWN: "bg-amber-800 text-white",
  BLACK: "bg-black text-white border border-zinc-600",
  CORAL: "bg-red-500 text-white",
  RED: "bg-red-700 text-white",
};

export default function ImportPage() {
  const router = useRouter();

  // URL import state
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ImportResult | null>(null);

  // Manual entry state
  const [manualName, setManualName] = useState("");
  const [manualBio, setManualBio] = useState("");
  const [manualBelt, setManualBelt] = useState("BLACK");
  const [manualCourses, setManualCourses] = useState<CourseData[]>([
    { title: "", description: "", price: "", thumbnail: "" },
  ]);

  async function handleImport() {
    if (!url.trim()) {
      setError("Please enter a URL to import from.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Import failed. Please try again.");
        return;
      }

      setResult(data as ImportResult);
    } catch {
      setError("Something went wrong. Please check the URL and try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleUseImported() {
    if (!result) return;
    const params = new URLSearchParams();
    params.set("name", result.creatorName);
    if (result.bio) params.set("bio", result.bio);
    if (result.belt) params.set("belt", result.belt);
    if (result.profileImage) params.set("image", result.profileImage);
    if (result.courses.length > 0) {
      params.set("courses", JSON.stringify(result.courses));
    }
    router.push(`/creator-setup?${params.toString()}`);
  }

  function handleManualSave() {
    const params = new URLSearchParams();
    params.set("name", manualName);
    if (manualBio) params.set("bio", manualBio);
    if (manualBelt) params.set("belt", manualBelt);
    const validCourses = manualCourses.filter((c) => c.title.trim());
    if (validCourses.length > 0) {
      params.set("courses", JSON.stringify(validCourses));
    }
    router.push(`/creator-setup?${params.toString()}`);
  }

  function addManualCourse() {
    setManualCourses([
      ...manualCourses,
      { title: "", description: "", price: "", thumbnail: "" },
    ]);
  }

  function removeManualCourse(index: number) {
    setManualCourses(manualCourses.filter((_, i) => i !== index));
  }

  function updateManualCourse(
    index: number,
    field: keyof CourseData,
    value: string
  ) {
    const updated = [...manualCourses];
    updated[index] = { ...updated[index], [field]: value };
    setManualCourses(updated);
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/20">
              <Download className="h-6 w-6 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Import Your Content
            </h1>
          </div>
          <p className="text-zinc-400">
            Migrate from BJJ Fanatics, Digitsu, or any other platform in minutes
          </p>
        </div>

        {/* URL Import Section */}
        <Card className="border-zinc-800 bg-zinc-950">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-zinc-400" />
              <h2 className="text-lg font-semibold text-white">
                Import from URL
              </h2>
            </div>
            <p className="text-sm text-zinc-500">
              We will scan the page and extract your profile info and course
              listings automatically.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <Input
                  placeholder="Paste your creator profile URL (BJJ Fanatics, Digitsu, FloGrappling, etc.)"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setError("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !loading) handleImport();
                  }}
                  className="border-zinc-700 bg-zinc-900 pl-10 text-white placeholder:text-zinc-500"
                  disabled={loading}
                />
              </div>
              <Button
                onClick={handleImport}
                disabled={loading || !url.trim()}
                className="bg-red-600 px-6 text-white hover:bg-red-700 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Scanning profile...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Import My Profile
                  </>
                )}
              </Button>
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3">
                <AlertCircle className="h-4 w-4 flex-shrink-0 text-red-500" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Preview */}
        {result && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-red-500" />
              <h2 className="text-xl font-semibold text-white">
                Import Preview
              </h2>
              {result.source === "ai" && (
                <Badge className="bg-purple-600/20 text-purple-400 hover:bg-purple-600/20">
                  AI-Extracted
                </Badge>
              )}
            </div>

            {/* Creator Info Card */}
            <Card className="border-zinc-800 bg-zinc-950">
              <CardContent className="flex items-start gap-5 p-6">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-800">
                  {result.profileImage ? (
                    <Image
                      src={result.profileImage}
                      alt={result.creatorName}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <User className="h-10 w-10 text-zinc-500" />
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white">
                      {result.creatorName}
                    </h3>
                    {result.belt && (
                      <Badge
                        className={`text-xs ${
                          BELT_COLORS[result.belt] || "bg-zinc-700 text-zinc-300"
                        }`}
                      >
                        {result.belt} Belt
                      </Badge>
                    )}
                  </div>
                  {result.bio && (
                    <p className="line-clamp-3 text-sm text-zinc-400">
                      {result.bio}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <ExternalLink className="h-3 w-3" />
                    <span className="truncate">{url}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Courses Grid */}
            {result.courses.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-400">
                  {result.courses.length} Course
                  {result.courses.length !== 1 ? "s" : ""} Found
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {result.courses.map((course, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden border-zinc-800 bg-zinc-900"
                    >
                      <div className="relative h-36 w-full">
                        {course.thumbnail ? (
                          <Image
                            src={course.thumbnail}
                            alt={course.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                            <span className="text-3xl font-bold text-zinc-700">
                              {i + 1}
                            </span>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h4 className="mb-1 font-semibold text-white line-clamp-2">
                          {course.title}
                        </h4>
                        {course.description && (
                          <p className="mb-2 line-clamp-2 text-xs text-zinc-400">
                            {course.description}
                          </p>
                        )}
                        {course.price && (
                          <Badge
                            variant="secondary"
                            className="bg-zinc-800 text-zinc-300"
                          >
                            {course.price}
                          </Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="flex justify-center pt-2">
              <Button
                onClick={handleUseImported}
                className="bg-red-600 px-8 py-6 text-base font-semibold text-white hover:bg-red-700"
              >
                Import &amp; Create My Page
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="my-10 flex items-center gap-4">
          <Separator className="flex-1 bg-zinc-800" />
          <span className="text-sm text-zinc-500">
            Or enter your course details manually
          </span>
          <Separator className="flex-1 bg-zinc-800" />
        </div>

        {/* Manual Entry Section */}
        <Card className="border-zinc-800 bg-zinc-950">
          <CardHeader className="pb-4">
            <h2 className="text-lg font-semibold text-white">Manual Entry</h2>
            <p className="text-sm text-zinc-500">
              Fill in your details below to get started without importing.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Creator Details */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-zinc-300">Creator Name</Label>
                <Input
                  placeholder="e.g. Gordon Ryan"
                  value={manualName}
                  onChange={(e) => setManualName(e.target.value)}
                  className="border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-zinc-300">Belt Level</Label>
                <Select value={manualBelt} onValueChange={setManualBelt}>
                  <SelectTrigger className="border-zinc-700 bg-zinc-900 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="border-zinc-700 bg-zinc-900">
                    {BELT_OPTIONS.map((b) => (
                      <SelectItem
                        key={b.value}
                        value={b.value}
                        className="text-zinc-300 focus:bg-zinc-800 focus:text-white"
                      >
                        {b.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-300">Bio</Label>
              <Textarea
                placeholder="Tell students about yourself, your lineage, competition experience, and teaching style..."
                value={manualBio}
                onChange={(e) => setManualBio(e.target.value)}
                rows={3}
                className="border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500"
              />
            </div>

            <Separator className="bg-zinc-800" />

            {/* Courses */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Courses</h3>
              <div className="space-y-4">
                {manualCourses.map((course, i) => (
                  <Card key={i} className="border-zinc-800 bg-zinc-900/50">
                    <CardContent className="p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-medium text-zinc-400">
                          Course {i + 1}
                        </span>
                        {manualCourses.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeManualCourse(i)}
                            className="h-8 w-8 p-0 text-zinc-500 hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="space-y-1.5">
                          <Label className="text-xs text-zinc-400">Title</Label>
                          <Input
                            placeholder="Course title"
                            value={course.title}
                            onChange={(e) =>
                              updateManualCourse(i, "title", e.target.value)
                            }
                            className="border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-600"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs text-zinc-400">
                            Description
                          </Label>
                          <Input
                            placeholder="Brief description"
                            value={course.description}
                            onChange={(e) =>
                              updateManualCourse(
                                i,
                                "description",
                                e.target.value
                              )
                            }
                            className="border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-600"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs text-zinc-400">Price</Label>
                          <Input
                            placeholder="$49.99"
                            value={course.price}
                            onChange={(e) =>
                              updateManualCourse(i, "price", e.target.value)
                            }
                            className="border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-600"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={addManualCourse}
                className="mt-4 border-zinc-700 bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Another Course
              </Button>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                onClick={handleManualSave}
                disabled={!manualName.trim()}
                className="bg-red-600 px-8 text-white hover:bg-red-700 disabled:opacity-50"
              >
                Save &amp; Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
