# WEBSITE.md — VeriSeal Secure Lockbox (Create React App)

## Always Do First
- Invoke the `frontend-design` skill before writing any frontend
  code, every session, no exceptions.

## Project Context
- Create React App (react-scripts 5) single-page app, React 18 + react-router-dom v6
- A small Express server (server.js) serves the production build AND hosts the
  two API endpoints (Stripe checkout + email subscribe)
- Product: Secure lockbox using NFC, product name VeriSeal
- Mascot: Denny the seal (we sell Denny merch via /shop)
- Key integrations: Stripe payments, Instagram/TikTok/LinkedIn links, crowdfunding tiers
- Hosting target: Railway (single `node server.js` process)
- All keys/URLs must use environment variables — never hardcode

## File Structure
- Pages live in src/pages/*Page.js, wired up in src/App.js (react-router routes)
- Shared UI lives in src/components/
- Data/content lives in src/lib/
- Images live in public/images/ and are referenced as /images/...
- Global CSS + design tokens live in src/index.css (CSS custom properties)
- Styling is inline-style objects + scoped <style> tags (no Tailwind, no CSS-in-JS lib)

## Local Development
- Install once: npm install
- Frontend dev server: npm run dev (CRA at http://localhost:3000)
  - It proxies /api/* to the Express server (see "proxy" in package.json)
- API server (for checkout/subscribe locally): node server.js (defaults to port 3001)
- Full production preview: npm run build && npm start (serves build/ + API on PORT or 3001)

## Deploying to Railway
- Railway uses Nixpacks (see railway.json + Procfile):
  - Build: npm run build  →  creates build/
  - Start: node server.js  →  serves build/ and the API on $PORT
- Set environment variables in the Railway dashboard (see Environment Variables)
- .nvmrc pins Node 18 for a reproducible build

## Screenshot Workflow
- Build first (npm run build), start the server (npm start or PORT=N node server.js)
- Screenshot: node screenshot.mjs http://localhost:<port>
- Saved to ./temporary screenshots/ (gitignored)
- Do at least 2 comparison rounds before stopping

## Environment Variables
- Client vars MUST be prefixed REACT_APP_ (inlined into the bundle at build time)
- Server secrets are read by server.js at runtime (never exposed to the client)
- Provide a .env.example with placeholder values; never commit real .env files
- Required variables:
    STRIPE_SECRET_KEY=            # server-side, runtime
    REACT_APP_INSTAGRAM_URL=      # client, build-time
    REACT_APP_TIKTOK_URL=         # client, build-time
    REACT_APP_LINKEDIN_URL=       # client, build-time

## Brand Assets
- Check brand_assets/ folder before designing
- Mascot is Denny the seal — name him explicitly in copy; promote Denny merch
- Use any logos, colors, or style guides found there
- Do not invent brand colors if a palette is defined (tokens live in src/index.css)

## Anti-Generic Guardrails
- Never use default Tailwind/library palette — use the project CSS tokens
- Never use flat shadow-md — use the layered color-tinted shadow tokens
- Never use the same font for headings and body (Inter body, JetBrains Mono utility)
- Only animate transform and opacity — never transition-all
- Every clickable element needs hover, focus-visible, active states
- Use a layering system for depth (base → elevated → floating)

## Hard Rules
- Do not add sections not asked for
- Do not improve a reference — match it
- Do not stop after one screenshot pass
- Do not use transition-all
- Do not hardcode any API keys or external URLs
