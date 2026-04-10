"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Globe,
  Palette,
  User,
  Upload,
  Eye,
  Loader2,
  Zap,
  Crown,
  Shield,
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
import { TEMPLATE_LIST } from "@/lib/creator-templates";

const STEPS = [
  { label: "Username", icon: Globe },
  { label: "Template", icon: Palette },
  { label: "Profile", icon: User },
  { label: "Photos", icon: Upload },
  { label: "Preview", icon: Eye },
];

const BELT_OPTIONS = ["WHITE", "BLUE", "PURPLE", "BROWN", "BLACK"];

const TIER_CONFIG = {
  FREE: { label: "Free", icon: Shield, color: "bg-zinc-700 text-zinc-300" },
  PRO: { label: "Pro", icon: Zap, color: "bg-red-600 text-white" },
  ELITE: { label: "Elite", icon: Crown, color: "bg-yellow-500 text-black" },
} as const;

export default function CreatorSetupPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [creatorTier, setCreatorTier] = useState<"FREE" | "PRO" | "ELITE">("FREE");

  useEffect(() => {
    async function fetchTier() {
      try {
        const res = await fetch("/api/creator/profile");
        if (res.ok) {
          const data = await res.json();
          if (data.creatorTier) {
            setCreatorTier(data.creatorTier as "FREE" | "PRO" | "ELITE");
          }
        }
      } catch {}
    }
    fetchTier();
  }, []);

  // Step 1
  const [username, setUsername] = useState("");
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);

  // Step 2
  const [templateId, setTemplateId] = useState("DARK_PRO");

  // Step 3
  const [academyName, setAcademyName] = useState("");
  const [bio, setBio] = useState("");
  const [belt, setBelt] = useState("WHITE");
  const [socialInstagram, setSocialInstagram] = useState("");
  const [socialYoutube, setSocialYoutube] = useState("");
  const [socialTwitter, setSocialTwitter] = useState("");

  // Step 4
  const [profilePhotoPreview, setProfilePhotoPreview] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const checkUsername = useCallback(async (value: string) => {
    const slug = value.toLowerCase().replace(/[^a-z0-9-]/g, "");
    setUsername(slug);
    if (slug.length < 3) {
      setUsernameAvailable(null);
      return;
    }
    setCheckingUsername(true);
    try {
      const res = await fetch(`/api/creator/check-username?username=${slug}`);
      const data = await res.json();
      setUsernameAvailable(data.available);
    } catch {
      setUsernameAvailable(null);
    } finally {
      setCheckingUsername(false);
    }
  }, []);

  const handleFilePreview = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (v: string | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setter(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handlePublish = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/creator/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          templateId,
          academyName,
          bio,
          belt,
          socialInstagram,
          socialYoutube,
          socialTwitter,
        }),
      });
      if (res.ok) {
        router.push("/creator");
      }
    } catch {
      // handle error
    } finally {
      setSaving(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return username.length >= 3 && usernameAvailable === true;
      case 1:
        return !!templateId;
      case 2:
        return true;
      case 3:
        return true;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const selectedTemplate = TEMPLATE_LIST.find((t) => t.id === templateId);

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Header + Tier Badge */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">
            Set Up Your Creator Page
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Get your own site at <span className="text-red-500 font-medium">{username || "yourname"}.aibjj.com</span> — free, takes 2 minutes
          </p>
        </div>
        <Badge className={`${TIER_CONFIG[creatorTier].color} border-0 flex items-center gap-1.5 px-3 py-1`}>
          {React.createElement(TIER_CONFIG[creatorTier].icon, { className: "h-3.5 w-3.5" })}
          {TIER_CONFIG[creatorTier].label}
        </Badge>
      </div>

      {/* Upgrade Banner (shown on Free tier) */}
      {creatorTier === "FREE" && (
        <div className="rounded-xl border border-red-600/20 bg-red-600/5 p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-100">
              Upgrade to Pro for a custom domain
            </p>
            <p className="text-xs text-zinc-400 mt-0.5">
              Get yourdomain.com, remove AIBJJ branding, all templates, and lower your platform fee to 10% — just $29/mo
            </p>
          </div>
          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white shrink-0" asChild>
            <Link href="/pricing#creators">
              Go Pro
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      )}

      {/* Progress Steps */}
      <div className="flex items-center gap-2">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const done = i < step;
          const active = i === step;
          return (
            <React.Fragment key={s.label}>
              <button
                onClick={() => i < step && setStep(i)}
                className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  done
                    ? "bg-red-600/20 text-red-400"
                    : active
                    ? "bg-zinc-800 text-zinc-100"
                    : "text-zinc-600"
                }`}
              >
                {done ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Icon className="h-3.5 w-3.5" />
                )}
                <span className="hidden sm:inline">{s.label}</span>
              </button>
              {i < STEPS.length - 1 && (
                <div
                  className={`h-px flex-1 ${
                    i < step ? "bg-red-600/40" : "bg-zinc-800"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Step Content */}
      <Card className="border-zinc-800">
        <CardContent className="p-6 space-y-6">
          {/* STEP 0: Username */}
          {step === 0 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">
                  Claim Your Subdomain
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  This is your unique URL where students find your courses.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Username</Label>
                <div className="flex items-center gap-2">
                  <Input
                    value={username}
                    onChange={(e) => checkUsername(e.target.value)}
                    placeholder="gordonryan"
                    className="flex-1"
                  />
                  <span className="text-sm text-zinc-500 whitespace-nowrap">
                    .aibjj.com
                  </span>
                </div>
                {checkingUsername && (
                  <p className="text-xs text-zinc-500 flex items-center gap-1">
                    <Loader2 className="h-3 w-3 animate-spin" /> Checking...
                  </p>
                )}
                {usernameAvailable === true && username.length >= 3 && (
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <Check className="h-3 w-3" /> {username}.aibjj.com is available!
                  </p>
                )}
                {usernameAvailable === false && (
                  <p className="text-xs text-red-400">
                    This username is taken. Try another one.
                  </p>
                )}
              </div>

              <div className="rounded-lg bg-zinc-900/50 border border-zinc-800 p-4">
                <p className="text-sm text-zinc-300">
                  Your page will be live at{" "}
                  <span className="text-red-500 font-medium">
                    {username || "yourname"}.aibjj.com
                  </span>
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Upgrade to PRO ($29/mo) for a custom domain like youracademy.com
                </p>
              </div>
            </div>
          )}

          {/* STEP 1: Template */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">
                  Choose Your Template
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  Pick a design that matches your brand. You can change this later.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {TEMPLATE_LIST.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTemplateId(t.id)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all text-left ${
                      templateId === t.id
                        ? "border-red-500 ring-2 ring-red-500/20"
                        : "border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    {/* Preview */}
                    <div
                      className={`h-32 ${
                        t.id === "DARK_PRO"
                          ? "bg-[#0a0a0a]"
                          : t.id === "LIGHT_CLEAN"
                          ? "bg-white"
                          : "bg-black"
                      } p-3 flex flex-col justify-between`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-6 w-6 rounded ${
                            t.id === "DARK_PRO"
                              ? "bg-red-600"
                              : t.id === "LIGHT_CLEAN"
                              ? "bg-zinc-900"
                              : "bg-yellow-500"
                          }`}
                        />
                        <div
                          className={`h-2 w-16 rounded ${
                            t.id === "LIGHT_CLEAN"
                              ? "bg-gray-300"
                              : "bg-zinc-700"
                          }`}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <div
                          className={`h-2 w-24 rounded ${
                            t.id === "LIGHT_CLEAN"
                              ? "bg-gray-200"
                              : "bg-zinc-800"
                          }`}
                        />
                        <div
                          className={`h-2 w-16 rounded ${
                            t.id === "LIGHT_CLEAN"
                              ? "bg-gray-200"
                              : "bg-zinc-800"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-zinc-200">
                        {t.name}
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {t.description}
                      </p>
                    </div>
                    {templateId === t.id && (
                      <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-red-600 flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Profile Info */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">
                  Your Profile
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  Tell students about yourself and your academy.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Academy / Brand Name</Label>
                  <Input
                    value={academyName}
                    onChange={(e) => setAcademyName(e.target.value)}
                    placeholder="e.g., Ryan Academy"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Belt Rank</Label>
                  <Select value={belt} onValueChange={setBelt}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {BELT_OPTIONS.map((b) => (
                        <SelectItem key={b} value={b}>
                          {b.charAt(0) + b.slice(1).toLowerCase()} Belt
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Bio</Label>
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell students about your background, achievements, and teaching style..."
                  rows={4}
                />
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium text-zinc-300">
                  Social Links
                </Label>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2">
                    📸
                    <Input
                      value={socialInstagram}
                      onChange={(e) => setSocialInstagram(e.target.value)}
                      placeholder="username"
                      className="text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    ▶️
                    <Input
                      value={socialYoutube}
                      onChange={(e) => setSocialYoutube(e.target.value)}
                      placeholder="channel"
                      className="text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    𝕏
                    <Input
                      value={socialTwitter}
                      onChange={(e) => setSocialTwitter(e.target.value)}
                      placeholder="handle"
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Photos */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">
                  Profile Photo & Logo
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  Add a profile photo and academy logo for your page.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <Label>Profile Photo</Label>
                  <label className="flex flex-col items-center justify-center h-40 rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 cursor-pointer hover:border-zinc-600 transition-colors">
                    {profilePhotoPreview ? (
                      <img
                        src={profilePhotoPreview}
                        alt="Profile"
                        className="h-full w-full object-cover rounded-xl"
                      />
                    ) : (
                      <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 text-zinc-500" />
                        <p className="mt-2 text-sm text-zinc-400">
                          Click to upload
                        </p>
                        <p className="text-xs text-zinc-600">PNG, JPG up to 5MB</p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFilePreview(e, setProfilePhotoPreview)
                      }
                    />
                  </label>
                </div>

                <div className="space-y-3">
                  <Label>Academy Logo</Label>
                  <label className="flex flex-col items-center justify-center h-40 rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 cursor-pointer hover:border-zinc-600 transition-colors">
                    {logoPreview ? (
                      <img
                        src={logoPreview}
                        alt="Logo"
                        className="h-full w-full object-cover rounded-xl"
                      />
                    ) : (
                      <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 text-zinc-500" />
                        <p className="mt-2 text-sm text-zinc-400">
                          Click to upload
                        </p>
                        <p className="text-xs text-zinc-600">PNG, JPG, SVG up to 5MB</p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFilePreview(e, setLogoPreview)}
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Preview */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">
                  Preview & Publish
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  Here's what your page will look like. Ready to go live?
                </p>
              </div>

              {/* Mini preview */}
              <div
                className={`rounded-xl overflow-hidden border border-zinc-700 ${
                  selectedTemplate?.id === "LIGHT_CLEAN"
                    ? "bg-white text-zinc-900"
                    : "bg-[#0a0a0a]"
                }`}
              >
                <div className="p-6 text-center space-y-3">
                  {profilePhotoPreview ? (
                    <img
                      src={profilePhotoPreview}
                      alt="Profile"
                      className="mx-auto h-16 w-16 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className={`mx-auto h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold ${
                        selectedTemplate?.id === "BOLD_SPORT"
                          ? "bg-yellow-500 text-black"
                          : selectedTemplate?.id === "LIGHT_CLEAN"
                          ? "bg-zinc-900 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {(academyName || session?.user?.name || "Y").charAt(0)}
                    </div>
                  )}
                  <h3 className="text-xl font-bold">
                    {academyName || session?.user?.name || "Your Academy"}
                  </h3>
                  <p
                    className={`text-sm max-w-md mx-auto ${
                      selectedTemplate?.id === "LIGHT_CLEAN"
                        ? "text-zinc-500"
                        : "text-zinc-400"
                    }`}
                  >
                    {bio || "Your bio will appear here..."}
                  </p>
                  <p
                    className={`text-xs ${
                      selectedTemplate?.id === "LIGHT_CLEAN"
                        ? "text-zinc-400"
                        : "text-zinc-500"
                    }`}
                  >
                    {username}.aibjj.com
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-zinc-900/50 border border-zinc-800 p-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">URL</span>
                  <span className="text-red-500 font-medium">
                    {username}.aibjj.com
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Template</span>
                  <span className="text-zinc-200">
                    {selectedTemplate?.name}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Platform fee</span>
                  <span className="text-green-500 font-medium">
                    15% (vs BJJ Fanatics 40-50%)
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Monthly cost</span>
                  <span className="text-green-500 font-medium">$0 — Free forever</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
          className="border-zinc-700"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>

        {step < STEPS.length - 1 ? (
          <Button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Continue
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        ) : (
          <Button
            onClick={handlePublish}
            disabled={saving}
            className="bg-red-600 hover:bg-red-700 text-white px-8"
          >
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Publishing...
              </>
            ) : (
              "Publish Your Page"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
