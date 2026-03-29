"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Library, Zap, Brain } from "lucide-react";

const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    belt: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

const BELT_OPTIONS = [
  { value: "WHITE", label: "White Belt" },
  { value: "BLUE", label: "Blue Belt" },
  { value: "PURPLE", label: "Purple Belt" },
  { value: "BROWN", label: "Brown Belt" },
  { value: "BLACK", label: "Black Belt" },
];

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCreator, setIsCreator] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      belt: "WHITE",
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    if (!agreedToTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          belt: data.belt,
        }),
      });

      const body = await res.json();

      if (!res.ok) {
        setError(body.error || "Registration failed. Please try again.");
        return;
      }

      const signInResult = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInResult?.error) {
        setError("Account created but sign-in failed. Please sign in manually.");
        router.push("/auth/signin");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsGoogleLoading(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch {
      setError("Something went wrong with Google sign-up.");
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Hero Panel */}
      <div className="hidden md:flex md:w-1/2 lg:w-[55%] relative flex-col justify-between bg-gradient-to-br from-black via-zinc-950 to-red-950/30 p-10 lg:p-14">
        {/* Logo */}
        <div>
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              AI<span className="text-red-600">BJJ</span>
            </h1>
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            The #1 Platform for BJJ Creators and Students
          </h2>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
            Join thousands of practitioners learning and teaching world-class
            Brazilian Jiu-Jitsu
          </p>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <Library className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">510+ Techniques</p>
              <p className="text-xs text-zinc-500">Full library</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <Zap className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">15% Platform Fee</p>
              <p className="text-xs text-zinc-500">Industry lowest</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <Brain className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">AI-Powered Coaching</p>
              <p className="text-xs text-zinc-500">Smart training</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full md:w-1/2 lg:w-[45%] items-center justify-center bg-zinc-950 px-6 py-10 sm:px-10">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="mb-8 text-center md:hidden">
            <Link href="/">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                AI<span className="text-red-600">BJJ</span>
              </h1>
            </Link>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Create Your Account
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Start your AI-powered BJJ journey today
            </p>
          </div>

          <div className="space-y-5">
            {error && (
              <div className="rounded-lg border border-red-800 bg-red-950/50 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <Button
              variant="outline"
              className="w-full h-11 bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-white"
              onClick={handleGoogleSignUp}
              disabled={isGoogleLoading || isLoading}
            >
              {isGoogleLoading ? (
                <span className="flex items-center gap-2">
                  <LoadingSpinner />
                  Connecting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <GoogleIcon />
                  Continue with Google
                </span>
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-950 px-2 text-zinc-500">or</span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  disabled={isLoading}
                  {...register("name")}
                  className={cn(
                    "h-11 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-red-600 focus:ring-red-600/20",
                    errors.name && "border-red-600"
                  )}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled={isLoading}
                  {...register("email")}
                  className={cn(
                    "h-11 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-red-600 focus:ring-red-600/20",
                    errors.email && "border-red-600"
                  )}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-zinc-300">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Min. 8 characters"
                    autoComplete="new-password"
                    disabled={isLoading}
                    {...register("password")}
                    className={cn(
                      "h-11 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-red-600 focus:ring-red-600/20",
                      errors.password && "border-red-600"
                    )}
                  />
                  {errors.password && (
                    <p className="text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-zinc-300">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                    disabled={isLoading}
                    {...register("confirmPassword")}
                    className={cn(
                      "h-11 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-red-600 focus:ring-red-600/20",
                      errors.confirmPassword && "border-red-600"
                    )}
                  />
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="belt" className="text-zinc-300">
                  Belt Level
                </Label>
                <Select
                  defaultValue="WHITE"
                  onValueChange={(value) => setValue("belt", value)}
                  disabled={isLoading}
                >
                  <SelectTrigger className="h-11 bg-zinc-900 border-zinc-800 text-white focus:ring-red-600/20">
                    <SelectValue placeholder="Select your belt level" />
                  </SelectTrigger>
                  <SelectContent>
                    {BELT_OPTIONS.map((belt) => (
                      <SelectItem key={belt.value} value={belt.value}>
                        {belt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.belt && (
                  <p className="text-xs text-red-500">{errors.belt.message}</p>
                )}
              </div>

              {/* Creator Toggle */}
              <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-zinc-300">
                    Are you a creator?
                  </p>
                  <p className="text-xs text-zinc-500">
                    Publish courses and techniques
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isCreator}
                  onClick={() => setIsCreator(!isCreator)}
                  className={cn(
                    "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
                    isCreator ? "bg-red-600" : "bg-zinc-700"
                  )}
                >
                  <span
                    className={cn(
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      isCreator ? "translate-x-5" : "translate-x-0"
                    )}
                  />
                </button>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-600/20 focus:ring-offset-zinc-950"
                />
                <label htmlFor="terms" className="text-xs text-zinc-400 leading-relaxed">
                  I agree to the{" "}
                  <Link href="#" className="text-red-500 hover:text-red-400">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-red-500 hover:text-red-400">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-red-600 hover:bg-red-700 text-white font-medium"
                disabled={isLoading || isGoogleLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <LoadingSpinner />
                    Creating account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="font-medium text-red-500 hover:text-red-400 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}
