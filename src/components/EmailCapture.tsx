'use client';

import { useState } from 'react';

type EmailCaptureProps = {
  source?: string;
  intent?: string;
  buttonLabel?: string;
  placeholder?: string;
};

export default function EmailCapture({
  source = 'homepage',
  intent = 'free-training',
  buttonLabel = 'Join Free',
  placeholder = 'Enter your email',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      // Store in Supabase or your email provider
      const res = await fetch('/api/email-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source, intent }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="w-full max-w-md mx-auto text-center p-6 rounded-xl border border-green-600/30 bg-green-950/20">
        <p className="text-green-400 font-semibold">You&apos;re in. We saved your spot.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="min-w-0 flex-1 rounded-lg border border-zinc-600 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 shadow-inner shadow-black/20 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 transition disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'loading' ? 'Joining...' : buttonLabel}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-400">The form is live, but storage failed. Try again in a minute.</p>
      )}
    </form>
  );
}
