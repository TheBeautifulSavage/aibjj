import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AIBJJ Privacy Policy — what data we collect, how we use it, third-party services, your rights under GDPR and CCPA.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-xl font-black tracking-tight mb-8 inline-block">
            <span className="text-red-600">AI</span>
            <span className="text-white">BJJ</span>
          </Link>
          <h1 className="mt-6 text-4xl font-black text-white">Privacy Policy</h1>
          <p className="mt-3 text-zinc-500">Effective Date: April 1, 2024 · Last Updated: April 2024</p>
        </div>

        <div className="space-y-10">

          <section>
            <p className="text-zinc-400 leading-relaxed">
              This Privacy Policy describes how AIBJJ ("we," "us," "our") collects, uses, and protects your information when you use our platform at aibjj.com. We are committed to your privacy and handle your data with care.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 1. Data collected */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-semibold text-white mb-2">Account Information</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              When you create an account, we collect your name, email address, username, belt rank, and any profile information you choose to provide (bio, academy name, social links, profile photo).
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">Training Data</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              To power the AI coach and your personal training analytics, we collect and store your training journal entries, techniques logged, sparring notes, game plan data, progress metrics, and AI coach conversation history. This data is used exclusively to provide and improve your personal training experience.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">Payment Information</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We use Stripe to process all payments. We do not store your full credit card number, CVV, or sensitive payment details on our servers. Stripe stores payment credentials in accordance with PCI DSS standards. We do retain transaction records (amounts, dates, subscription status) for billing purposes.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">Usage Data</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We collect standard web analytics data including pages visited, time on platform, feature usage, device type, browser, and IP address. This helps us understand how users interact with the platform and improve it.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">Communications</h3>
            <p className="text-zinc-400 leading-relaxed">
              If you contact us via email or submit support requests, we retain those communications to respond to you and improve our support.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 2. How we use data */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex gap-3">
                <span className="text-red-500 shrink-0">→</span>
                <span><strong className="text-zinc-200">To provide the service:</strong> Power the AI coach, training journal, technique library, game plan builder, and marketplace.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 shrink-0">→</span>
                <span><strong className="text-zinc-200">To personalize your experience:</strong> Tailor AI responses, recommendations, and content based on your belt level, training history, and preferences.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 shrink-0">→</span>
                <span><strong className="text-zinc-200">To process payments:</strong> Handle subscriptions, marketplace purchases, and creator payouts securely.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 shrink-0">→</span>
                <span><strong className="text-zinc-200">To communicate with you:</strong> Send transactional emails (receipts, password resets, account alerts) and, with your consent, product updates and newsletters.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 shrink-0">→</span>
                <span><strong className="text-zinc-200">To improve the platform:</strong> Analyze usage patterns to fix bugs, optimize performance, and build new features.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 shrink-0">→</span>
                <span><strong className="text-zinc-200">To comply with law:</strong> Meet legal obligations, resolve disputes, and enforce our Terms of Service.</span>
              </li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              We do <strong className="text-white">not</strong> sell your personal data to third parties. We do not use your training data or AI conversations for training AI models without your explicit opt-in consent.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 3. Third parties */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Third-Party Services</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We use the following third-party services to operate the platform. Each has its own privacy policy:
            </p>
            <div className="space-y-4">
              {[
                {
                  name: 'Stripe',
                  url: 'https://stripe.com/privacy',
                  desc: 'Payment processing for subscriptions and marketplace transactions. Stripe may collect and retain payment information under their PCI-compliant systems.',
                },
                {
                  name: 'Google (Auth)',
                  url: 'https://policies.google.com/privacy',
                  desc: 'Optional Google OAuth for account sign-in. If you use Google login, we receive your name, email, and profile photo from Google.',
                },
                {
                  name: 'Anthropic (Claude)',
                  url: 'https://www.anthropic.com/privacy',
                  desc: 'Powers the AI coach. Your prompts are sent to Anthropic\'s API to generate responses. Anthropic processes these under their API terms.',
                },
                {
                  name: 'Resend',
                  url: 'https://resend.com/privacy',
                  desc: 'Transactional email delivery. Used for account confirmations, password resets, and notifications.',
                },
                {
                  name: 'UploadThing',
                  url: 'https://uploadthing.com/privacy-policy',
                  desc: 'File uploads for creator content, profile photos, and course materials. Files are stored securely.',
                },
                {
                  name: 'Vercel',
                  url: 'https://vercel.com/legal/privacy-policy',
                  desc: 'Hosting and infrastructure for the platform.',
                },
              ].map((tp) => (
                <div key={tp.name} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">{tp.name}</span>
                    <a href={tp.url} target="_blank" rel="noopener noreferrer" className="text-xs text-red-500 hover:text-red-400">
                      Privacy Policy →
                    </a>
                  </div>
                  <p className="text-sm text-zinc-400">{tp.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-zinc-800" />

          {/* 4. Cookies */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Cookies & Tracking</h2>
            <p className="text-zinc-400 leading-relaxed mb-3">
              We use cookies and similar technologies for the following purposes:
            </p>
            <ul className="space-y-2 text-zinc-400 list-disc pl-5">
              <li><strong className="text-zinc-200">Essential cookies:</strong> Required for authentication, session management, and core platform functionality. Cannot be disabled.</li>
              <li><strong className="text-zinc-200">Analytics cookies:</strong> Help us understand platform usage through aggregated, anonymized data. You may opt out.</li>
              <li><strong className="text-zinc-200">Preference cookies:</strong> Remember your settings and preferences across sessions.</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              You can manage cookie preferences through your browser settings. Note that disabling essential cookies will prevent you from logging in.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 5. Data retention */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Data Retention</h2>
            <p className="text-zinc-400 leading-relaxed mb-3">
              We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are legally required to retain certain records (e.g., transaction records for tax purposes, which are retained for 7 years per IRS requirements).
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Anonymized, aggregated analytics data may be retained indefinitely as it cannot be linked back to you.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 6. Your rights */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Your Rights (GDPR & CCPA)</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">Access:</span>
                <span>Request a copy of the personal data we hold about you.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">Correction:</span>
                <span>Update or correct inaccurate personal data in your account settings or by contacting us.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">Deletion:</span>
                <span>Request deletion of your personal data. You may also delete your account directly from settings.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">Portability:</span>
                <span>Request an export of your training data in a machine-readable format.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">Opt-out:</span>
                <span>Opt out of marketing emails at any time via the unsubscribe link in any email or in your account settings.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">Do Not Sell (CCPA):</span>
                <span>We do not sell personal information. California residents may still submit a Do Not Sell request to confirm.</span>
              </li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hulljessej@gmail.com" className="text-red-500 hover:text-red-400">hulljessej@gmail.com</a>. We will respond within 30 days.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 7. Security */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Data Security</h2>
            <p className="text-zinc-400 leading-relaxed">
              We use industry-standard security measures including encrypted data transmission (HTTPS/TLS), encrypted passwords (bcrypt), and access controls. While no system is 100% secure, we take reasonable measures to protect your data from unauthorized access, loss, or disclosure.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 8. Children */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Children's Privacy</h2>
            <p className="text-zinc-400 leading-relaxed">
              AIBJJ is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal data, contact us and we will delete it promptly.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 9. Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notice. Your continued use of the platform after changes take effect constitutes acceptance of the updated policy.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 10. Contact */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed">
              For privacy questions, data requests, or concerns, contact us at:
            </p>
            <div className="mt-3 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
              <p className="text-zinc-300"><strong>AIBJJ LLC</strong></p>
              <p className="text-zinc-400">
                Email:{' '}
                <a href="mailto:hulljessej@gmail.com" className="text-red-500 hover:text-red-400">
                  hulljessej@gmail.com
                </a>
              </p>
              <p className="text-zinc-400">Anchorage, Alaska, USA</p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex gap-6 text-sm text-zinc-600">
          <Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link>
          <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
          <Link href="/auth/signup" className="hover:text-zinc-400 transition-colors">Get Started</Link>
        </div>
      </div>
    </div>
  )
}
