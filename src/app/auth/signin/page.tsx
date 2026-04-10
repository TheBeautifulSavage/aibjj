"use client";

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type SignInFormData = z.infer<typeof signInSchema>;

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      await signIn("google", { callbackUrl });
    } catch {
      setError("Something went wrong with Google sign-in.");
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      {/* Left panel — hidden on mobile */}
      <div className="hidden md:flex md:w-1/2 lg:w-[55%] flex-col justify-between bg-gradient-to-br from-[#0a0a0a] via-zinc-950 to-red-950/20 p-10 lg:p-14 border-r border-white/[0.04]">
        <Link href="/" className="inline-block">
          <span className="text-xl font-bold tracking-tight text-white">
            AI<span className="text-red-600">BJJ</span>
          </span>
        </Link>
        <div>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/15 border border-red-600/20">
            <span className="text-2xl font-black text-red-500">AI</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
            Your AI-powered<br />BJJ coach
          </h2>
          <p className="text-base text-zinc-500 leading-relaxed max-w-sm">
            Train smarter. Track progress. Master techniques.
            Personalized guidance for every level.
          </p>
        </div>
        <p className="text-xs text-zinc-600">© {new Date().getFullYear()} AIBJJ. All rights reserved.</p>
      </div>

      {/* Right panel — sign in form */}
      <div className="flex w-full md:w-1/2 lg:w-[45%] items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="mb-10 text-center md:hidden">
            <Link href="/">
              <div className="inline-flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/15 border border-red-600/20">
                  <span className="text-2xl font-black text-red-500">AI</span>
                </div>
                <span className="text-2xl font-bold text-white">
                  AI<span className="text-red-600">BJJ</span>
                </span>
              </div>
            </Link>
            <p className="mt-2 text-sm text-zinc-500">Your AI-powered BJJ coach</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Welcome back</h2>
            <p className="mt-1.5 text-sm text-zinc-500">
              Sign in to continue your training journey
            </p>
          </div>

          <div className="space-y-5">
            {error && (
              <div className="rounded-xl border border-red-800/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Google sign in */}
            <Button
              variant="outline"
              className="w-full h-11 rounded-xl border-white/[0.10] bg-white text-zinc-900 hover:bg-zinc-100 font-medium"
              onClick={handleGoogleSignIn}
              disabled={isGoogleLoading || isLoading}
            >
              {isGoogleLoading ? (
                <span className="flex items-center gap-2">
                  <LoadingSpinner className="text-zinc-600" />
                  Connecting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <GoogleIcon />
                  Continue with Google
                </span>
              )}
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/[0.08]" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0a0a0a] px-3 text-zinc-600 tracking-wider">or</span>
              </div>
            </div>

            {/* Email/password form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm text-zinc-300">
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
                    "h-11 rounded-xl bg-zinc-900 border-white/[0.08] text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-0",
                    errors.email && "border-red-600/60"
                  )}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm text-zinc-300">
                    Password
                  </Label>
                  <Link
                    href="#"
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={isLoading}
                  {...register("password")}
                  className={cn(
                    "h-11 rounded-xl bg-zinc-900 border-white/[0.08] text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:ring-0",
                    errors.password && "border-red-600/60"
                  )}
                />
                {errors.password && (
                  <p className="text-xs text-red-500">{errors.password.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-11 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium"
                disabled={isLoading || isGoogleLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <LoadingSpinner />
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-medium text-red-500 hover:text-red-400 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
          <div className="text-zinc-600 text-sm">Loading...</div>
        </div>
      }
    >
      <SignInForm />
    </Suspense>
  );
}

function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4 animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
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
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}
