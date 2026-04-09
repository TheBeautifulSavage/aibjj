# AIBJJ.com — Project State
_Last updated: 2026-04-08_

## Stack
- Next.js 14 (App Router), TypeScript, Tailwind, shadcn/ui
- Prisma + Supabase PostgreSQL
- NextAuth (Google OAuth + email/password)
- Stripe (subscriptions + Connect for creator payouts)
- UploadThing (video/image uploads)
- Anthropic Claude (AI coach, blog generation)
- Resend (email)
- Vercel (deployed, connected)

## Live URLs
- Main: https://aibjj.com
- Vercel project: thebeautifulsavages-projects/aibjj
- Creator subdomains: [username].aibjj.com → /s/[username]

## Env vars (all set in .env.local)
DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
ANTHROPIC_API_KEY, STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
STRIPE_WEBHOOK_SECRET, RESEND_API_KEY

## Pricing
- Free: 5 AI Coach msgs/day, basic journal, white belt library only
- Pro: $14.99/mo — unlimited coach, full library, game plan, analytics
- Annual: (needs implementation)
- Creator Free: limited courses
- Creator Pro/Elite: (paid tiers, Stripe wired)

## What's BUILT ✅
- Auth (Google + email/password + password reset)
- Training journal (log sessions, CRUD)
- AI Coach (chat w/ Claude, sessions saved)
- Technique library (510 techniques seeded)
- Game plan builder (AI-generated)
- Progress dashboard (charts, streaks)
- Course marketplace (browse, enroll, video player)
- Creator dashboard (upload courses, lessons, UploadThing)
- Creator subdomains ([username].aibjj.com)
- Creator public pages (/s/[username])
- Creator blog (AI-generated, per-creator)
- Stripe subscriptions (user Pro tier)
- Stripe Connect (creator payouts, 85/15 split)
- Email system (welcome, purchase receipt, password reset)
- Founding member banner

## What's MOCK / Incomplete ⚠️
- Creator dashboard stats (mock data — not pulling real DB)
- Creator course list (mock — should pull from DB)
- Technique library bookmarks (API exists, UI may not show saved)
- Import page (exists, unclear if fully wired)
- /academies page (marketing, no functionality)
- /affiliates page (marketing, no functionality)
- Footer links all go to "#"
- Social links in footer/creator pages go to "#"
- Pricing page CTAs need to wire to Stripe checkout properly

## Missing / TODO 🔴
- Admin panel (no /admin route)
- Real creator dashboard stats from DB
- SEO: meta tags, OG images, sitemap for aibjj.com
- Landing page SEO optimization
- Email verification flow (currently skipped?)
- Real technique library search (client-side filter only)
- Video streaming (currently just direct URL playback)
- Mobile nav polish
- Error pages (404, 500)
- Terms of Service / Privacy Policy pages
- AIBJJ blog for main site (SEO content)

## Deploy Command
```bash
cd /Users/mac1/Projects/aibjj
git add -A && git commit -m "feat: ..." && git push origin main
# Vercel auto-deploys on push to main
```

## DB Migrations
```bash
cd /Users/mac1/Projects/aibjj
npx prisma migrate dev   # local
npx prisma db push       # push schema to production DB
```
