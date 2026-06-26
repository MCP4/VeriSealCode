# WEBSITE.md — VeriSeal Secure Lockbox (Next.js)

## Always Do First
- Invoke the `frontend-design` skill before writing any frontend 
  code, every session, no exceptions.

## Project Context
- Next.js 14 App Router project
- Product: Secure lockbox using NFC product name VeriSeal
- Key integrations to provision: Stripe payments, 
  Instagram/TikTok/LinkedIn social links, crowdfunding tiers
- Hosting target: Vercel or Railway
- All keys/URLs must use environment variables — never hardcode

## File Structure
- Pages live in app/[pagename]/page.js
- Shared UI lives in components/
- Images live in public/images/
- Tailwind configured via tailwind.config.js and globals.css
- Do NOT use a single index.html or inline styles

## Local Server
- Start dev server: npm run dev (runs at http://localhost:3000)
- Do not use node serve.mjs

## Screenshot Workflow
- Puppeteer at C:/Users/nateh/AppData/Local/Temp/puppeteer-test/
- Chrome cache at C:/Users/nateh/.cache/puppeteer/
- Screenshot: node screenshot.mjs http://localhost:3000
- Saved to ./temporary screenshots/screenshot-N.png
- If screenshot.mjs does not exist, create it before screenshotting
- Do at least 2 comparison rounds before stopping

## Environment Variables
- Use .env.local for all secrets and URLs
- Always add .env.local to .gitignore
- Provide a .env.example with placeholder values
- Required variables:
  STRIPE_SECRET_KEY=
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
  INSTAGRAM_URL=
  TIKTOK_URL=
  LINKEDIN_URL=

## Brand Assets
- Check brand_assets/ folder before designing
- Use any logos, colors, or style guides found there
- Do not invent brand colors if a palette is defined

## Reference Images
- If provided: match layout, spacing, typography, color exactly
- If not provided: design from scratch with high craft
- Do at least 2 screenshot comparison rounds

## Anti-Generic Guardrails
- Never use default Tailwind palette (indigo-500, blue-600, etc.)
- Never use flat shadow-md — use layered color-tinted shadows
- Never use the same font for headings and body
- Layer multiple radial gradients with SVG grain texture
- Only animate transform and opacity — never transition-all
- Every clickable element needs hover, focus-visible, active states
- Add gradient overlays on images with mix-blend-multiply
- Use consistent spacing tokens throughout
- Use a layering system for depth (base → elevated → floating)

## Hard Rules
- Do not add sections not asked for
- Do not improve a reference — match it
- Do not stop after one screenshot pass
- Do not use transition-all
- Do not use default Tailwind blue/indigo as primary color
- Do not hardcode any API keys or external URLs