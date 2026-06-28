# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Saikat Tanti, built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Heavily SEO-optimized and animation-rich (Framer Motion / `motion`, GSAP, anime.js, tsParticles, three.js).

## Commands

```bash
npm run dev          # Dev server on port 4000 (NOT 3000)
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # ESLint (flat config, eslint-config-next core-web-vitals)

# Docker (production uses standalone output)
npm run docker:compose   # docker-compose up -d  (serves on port 3000)
npm run docker:down
```

There is **no test suite** — do not assume `npm test` exists.

`npm run push` force-commits everything to `master` — avoid it; it bypasses review and the current default branch is `main`.

Lockfiles: both `bun.lockb` and `package-lock.json` exist. The Dockerfile installs deps with **Bun**; local dev typically uses npm. Keep whichever lockfile you touch consistent.

## Architecture

### Page composition
The home page (`src/app/page.tsx`) is a `"use client"` component that assembles six numbered, dynamically-imported sections inside a `<PageBox>`. Each section receives an `id` prop used both as the scroll anchor and the nav target:

```
hero → services → experiences → skills → projects → contact
(GravityHero, Section2…Section6, HomeFloatingNavbar)
```

`next/dynamic` is used deliberately throughout to keep the heavy animation libraries out of the initial bundle. Follow this pattern when adding sections.

### Layout pattern (core boxes)
Components in `src/components/core/` (`PageBox`, `ResponsiveBox`, `ConstrainedBox`, `Row`, `Column`, `GridBox`, `CardBox`) are Flutter-style layout primitives. They all take `{ children, classNames }` (note: `classNames`, appended to a base Tailwind string — not `className`). Compose layouts from these rather than writing ad-hoc wrapper divs.

### Data layer
All site content lives as typed arrays/objects in `src/data/` (`projects.ts`, `experiences.ts`, `skills.ts`, `services.ts`, `socialLinks.ts`, `navMenus.ts`, `metadata.ts`, `structuredData.ts`). Components import these directly — **to change portfolio content, edit the data files, not the components.** Types for these live in `src/types/index.ts` (`IProjectItem`, `IExperienceItem`, `RepoType`/`ProjectType` enums, etc.).

### SEO is a first-class concern
This is the most edited area of the repo — change it carefully and keep the canonical domain consistent across all of:
- **Canonical domain:** `https://www.saikattanti.dev`. Non-canonical hosts (`.xyz`, bare `.dev`, `vercel.app`) are 308-redirected in **two** places that must stay in sync: `middleware.ts` (`REDIRECT_HOSTS`) and `next.config.js` (`redirects()`).
- `src/app/layout.tsx` — root `metadata` export (title template, OpenGraph, Twitter, robots, verification env vars) and inline JSON-LD injected from `src/data/structuredData.ts` (schema.org `@graph` of Person/Organization/WebSite/ProfilePage).
- `src/app/sitemap.ts`, `src/app/robots.ts` — generated routes.
- `metadataBase` and all structured-data URLs hardcode the canonical domain; update them together.

### Security headers / CSP
`next.config.js` `headers()` defines a strict Content-Security-Policy and related headers (HSTS, COOP, CORP, X-Frame-Options). Any new external script, image host, or connect target (analytics, payment, fonts) **must** be whitelisted in the corresponding CSP directive or it will be blocked in production. Allowed image remote hosts are in `images.remotePatterns`.

### Path aliases
`@/*` maps to `src/*` (see `tsconfig.json`). The `cn()` Tailwind class-merge helper is duplicated at both `src/lib/utils.ts` and `src/utils/cn.ts` — prefer `@/lib/utils`.

### Routes beyond home
`src/app/` also contains `/saikat-tanti` (about/profile page), `/payment` (Razorpay integration — note the `form-action https://razorpay.me` CSP exception), and `/policies/*` (terms, privacy, refunds, shipping — required for the payment flow).

### Analytics
Google Analytics (`GoogleAnalytics.tsx`) and `WebVitals.tsx` are gated on `NODE_ENV`: GA only loads in production, WebVitals + Tailwind `debug-screens` only in development.

## Conventions
- Components are `.tsx` with default exports; client components are explicitly marked `"use client"` (the App Router defaults to server components, but most of this UI is interactive/animated and runs on the client).
- Styling is Tailwind utility classes plus a few `.scss`/`.module.scss` files in `src/app/`. CSS custom properties like `var(--bgColor)` come from `globals.scss` and drive theming.
- Tailwind config: `tailwind.config.ts`; UI primitives follow the shadcn convention (`components.json`).
