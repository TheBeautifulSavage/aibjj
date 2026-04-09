"use client";

import React, { useState } from "react";
import Link from "next/link";

const BELT_LEVELS = ["White", "Blue", "Purple", "Brown", "Black", "Coral", "Red/Black", "Red/White", "Red"];

export default function InstructorMarketplaceClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    belt: "",
    academy: "",
    specialty: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.specialty) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/instructor-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4" id="apply">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-3 text-white">Apply to Teach on AIBJJ</h2>
        <p className="text-gray-400 text-center mb-8">
          We approve instructors within 24 hours. Any belt level welcome.
        </p>

        {submitted ? (
          <div className="rounded-xl border border-green-600/30 bg-green-950/20 p-8 text-center">
            <div className="text-4xl mb-3">🥋</div>
            <h3 className="text-xl font-bold text-white mb-2">Application Received!</h3>
            <p className="text-gray-300">
              We&apos;ll be in touch within 24 hours. In the meantime, you can{" "}
              <Link href="/auth/signup?role=creator" className="text-red-400 underline">
                create your free account
              </Link>{" "}
              to get started.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-gray-800 bg-gray-800/50 p-6 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Belt Level</label>
                <select
                  name="belt"
                  value={form.belt}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2.5 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="">Select belt...</option>
                  {BELT_LEVELS.map((b) => (
                    <option key={b} value={b}>{b} Belt</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Academy / Affiliation</label>
                <input
                  type="text"
                  name="academy"
                  value={form.academy}
                  onChange={handleChange}
                  placeholder="Gracie Barra, 10th Planet, etc."
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Describe your specialty <span className="text-red-500">*</span>
              </label>
              <textarea
                name="specialty"
                value={form.specialty}
                onChange={handleChange}
                placeholder="e.g. Leg locks, Guard passing, No-gi grappling for beginners..."
                rows={3}
                required
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-60 transition-colors px-4 py-3 text-sm font-semibold text-white"
            >
              {loading ? "Submitting..." : "Submit Application →"}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By applying, you agree to our{" "}
              <Link href="/terms" className="underline hover:text-gray-300">Terms of Service</Link>
              . Applications are reviewed within 24 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
