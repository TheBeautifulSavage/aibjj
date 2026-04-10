import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AIBJJ Terms of Service — user accounts, subscription terms, creator marketplace rules, content ownership, and governing law.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-xl font-black tracking-tight mb-8 inline-block">
            <span className="text-red-600">AI</span>
            <span className="text-white">BJJ</span>
          </Link>
          <h1 className="mt-6 text-4xl font-black text-white">Terms of Service</h1>
          <p className="mt-3 text-zinc-500">Effective Date: April 1, 2024 · Last Updated: April 2024</p>
        </div>

        <div className="prose prose-zinc prose-invert max-w-none space-y-10">

          {/* Intro */}
          <section>
            <p className="text-zinc-400 leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of AIBJJ ("we," "us," "our"), operated by AIBJJ LLC. By creating an account or using the platform, you agree to be bound by these Terms. If you do not agree, do not use the platform.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 1. Accounts */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. User Accounts & Eligibility</h2>
            <p className="text-zinc-400 leading-relaxed mb-3">
              To use AIBJJ, you must be at least 13 years old (or the minimum age of digital consent in your jurisdiction). Users under 18 must have parental or guardian consent. By registering, you represent that you meet these requirements.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-3">
              You are responsible for maintaining the security of your account credentials. You agree not to share your account with others or allow unauthorized access. You must notify us immediately at <a href="mailto:hulljessej@gmail.com" className="text-red-500 hover:text-red-400">hulljessej@gmail.com</a> if you suspect unauthorized account access.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              You agree to provide accurate, current, and complete information during registration and keep it updated. We reserve the right to suspend or terminate accounts that contain false or misleading information.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 2. Subscriptions */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Subscription Plans & Billing</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              AIBJJ offers the following subscription tiers:
            </p>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">Free:</span>
                <span>Access to limited platform features at no cost. No credit card required.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">Founding Member ($9.99/mo):</span>
                <span>Full access to all features. This price is locked permanently for early adopters — your rate will never increase as long as you maintain your subscription. Available to the first 500 members only.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">Pro ($14.99/mo):</span>
                <span>Full access to all platform features at standard pricing. Billed monthly or annually.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">Annual Plan:</span>
                <span>Annual billing options are available at a discount. Annual subscriptions are non-refundable after 7 days.</span>
              </li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Subscriptions auto-renew until cancelled. You may cancel at any time through your account settings. Cancellation takes effect at the end of your current billing period. We do not offer prorated refunds for partial months except where required by applicable law.
            </p>
            <p className="text-zinc-400 leading-relaxed mt-3">
              We reserve the right to modify pricing with 30 days notice for non-locked tiers. Founding Member pricing is exempt from price increases.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 3. Creator Marketplace */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Creator Marketplace Terms</h2>
            <p className="text-zinc-400 leading-relaxed mb-3">
              AIBJJ operates a marketplace where creators (coaches, athletes, instructors) can sell BJJ instructionals, game plans, courses, and other digital content.
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Revenue Share</h3>
            <p className="text-zinc-400 leading-relaxed mb-3">
              Creators receive <strong className="text-white">85% of each sale</strong>. AIBJJ retains a 15% platform fee to cover payment processing, hosting, infrastructure, and platform development. This split applies to all marketplace transactions unless otherwise agreed in writing.
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Payouts</h3>
            <p className="text-zinc-400 leading-relaxed mb-3">
              Payouts are processed monthly for balances over $25, via Stripe. You must provide valid payment information and any required tax documentation (W-9 for US creators, W-8BEN for international creators) before receiving payouts. AIBJJ is not responsible for delays caused by incomplete or inaccurate payout information.
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">Creator Responsibilities</h3>
            <p className="text-zinc-400 leading-relaxed mb-3">
              You are solely responsible for the content you upload and sell. You represent that you own or have the right to sell all content, that your content does not infringe any third-party intellectual property rights, and that your content complies with these Terms.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Creators are responsible for their own tax obligations. AIBJJ will provide 1099 forms to US creators earning over $600 annually as required by law.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 4. Content Ownership */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Content Ownership & License</h2>
            <p className="text-zinc-400 leading-relaxed mb-3">
              You retain full ownership of all content you create and upload to AIBJJ. By uploading content, you grant AIBJJ a non-exclusive, worldwide, royalty-free license to host, display, store, and transmit your content as necessary to operate the platform and provide services to you and your customers.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-3">
              This license does not permit AIBJJ to sell, sublicense, or commercially exploit your content outside of the platform without your explicit written consent. We will not use your content for AI training without your opt-in consent.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              AIBJJ's own content (platform design, codebase, technique library structure, AI systems, brand assets) remains the sole property of AIBJJ LLC and is protected by applicable intellectual property law.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 5. Prohibited */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Prohibited Content & Conduct</h2>
            <p className="text-zinc-400 leading-relaxed mb-3">You agree not to:</p>
            <ul className="space-y-2 text-zinc-400 list-disc pl-5">
              <li>Upload or distribute content you do not have the rights to</li>
              <li>Upload sexually explicit, violent, or hateful content</li>
              <li>Harass, threaten, or abuse other users or creators</li>
              <li>Attempt to reverse-engineer, scrape, or exploit the platform</li>
              <li>Use the AI coach to generate dangerous, illegal, or harmful content</li>
              <li>Create multiple accounts to circumvent limits or bans</li>
              <li>Misrepresent your identity, credentials, or belt rank</li>
              <li>Engage in fraudulent chargebacks or payment disputes in bad faith</li>
              <li>Violate any applicable local, state, national, or international law</li>
            </ul>
          </section>

          <hr className="border-zinc-800" />

          {/* 6. Termination */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Termination</h2>
            <p className="text-zinc-400 leading-relaxed mb-3">
              You may delete your account at any time through your account settings. Upon deletion, your data will be removed within 30 days, except where we are required by law to retain certain records.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-3">
              AIBJJ reserves the right to suspend or terminate your account at any time for violation of these Terms, fraudulent activity, or conduct that harms the platform or its users. We will make reasonable efforts to notify you before termination, except in cases of serious violations.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Upon termination, any outstanding creator earnings over $25 will be paid out within 60 days, provided no fraud or chargeback disputes are pending.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 7. Disclaimers */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Disclaimers & Limitation of Liability</h2>
            <p className="text-zinc-400 leading-relaxed mb-3">
              AIBJJ is provided "as is" without warranties of any kind, express or implied. We do not guarantee uninterrupted service, error-free performance, or that the AI coach will produce perfectly accurate information.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-3">
              BJJ training involves inherent physical risk. AIBJJ is a software platform — not a physical instructor. Always train with qualified in-person supervision. We are not liable for injuries sustained during training, regardless of advice received through the platform.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              To the maximum extent permitted by law, AIBJJ's total liability to you for any claims arising under these Terms shall not exceed the greater of (a) $100 or (b) the total amount you paid to AIBJJ in the 3 months preceding the claim.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 8. Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Governing Law & Disputes</h2>
            <p className="text-zinc-400 leading-relaxed mb-3">
              These Terms are governed by the laws of the State of Alaska, United States, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved through binding arbitration in Anchorage, Alaska, except where prohibited by applicable law.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              You waive any right to participate in class-action lawsuits against AIBJJ to the fullest extent permitted by law.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* 9. Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Changes to These Terms</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may update these Terms from time to time. We will notify users of material changes via email or in-app notice at least 14 days before the changes take effect. Continued use of the platform after changes take effect constitutes acceptance of the updated Terms.
            </p>
          </section>

          <hr className="border-zinc-800" />

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Contact</h2>
            <p className="text-zinc-400 leading-relaxed">
              Questions about these Terms? Contact us at:{' '}
              <a href="mailto:hulljessej@gmail.com" className="text-red-500 hover:text-red-400">
                hulljessej@gmail.com
              </a>
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex gap-6 text-sm text-zinc-600">
          <Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link>
          <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
          <Link href="/auth/signup" className="hover:text-zinc-400 transition-colors">Get Started</Link>
        </div>
      </div>
    </div>
  )
}
