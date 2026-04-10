'use client'

import { useState } from 'react'

export default function AffiliateForm() {
  const [form, setForm] = useState({ name: '', email: '', website: '', audience: '', howPromote: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/affiliates/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-800/50 bg-green-950/30 p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">Application Received!</h3>
        <p className="text-zinc-400">
          Thanks for applying to the AIBJJ affiliate program. We'll review your application and get back to you within 2–3 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600/50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email Address *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600/50"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">Website / Social Profile</label>
        <input
          type="url"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          placeholder="https://instagram.com/yourhandle or https://yourwebsite.com"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600/50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">Approximate Audience Size</label>
        <select
          value={form.audience}
          onChange={(e) => setForm({ ...form, audience: e.target.value })}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2.5 text-sm text-zinc-100 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600/50"
        >
          <option value="" className="bg-zinc-800">Select range...</option>
          <option value="under-500" className="bg-zinc-800">Under 500 (local reach)</option>
          <option value="500-2000" className="bg-zinc-800">500 – 2,000</option>
          <option value="2000-10000" className="bg-zinc-800">2,000 – 10,000</option>
          <option value="10000-50000" className="bg-zinc-800">10,000 – 50,000</option>
          <option value="50000+" className="bg-zinc-800">50,000+</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1.5">How Will You Promote AIBJJ? *</label>
        <textarea
          required
          value={form.howPromote}
          onChange={(e) => setForm({ ...form, howPromote: e.target.value })}
          rows={4}
          placeholder="e.g., Instagram posts to my BJJ followers, YouTube videos, mentioning to my academy students, blog posts..."
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600/50 resize-none"
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-lg font-bold text-sm transition-colors"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Application →'}
      </button>
      <p className="text-xs text-zinc-600 text-center">We review all applications within 2–3 business days</p>
    </form>
  )
}
