# Nur al-Usul — Hanafi Aqeedah, Fiqh & Misconception Research Platform

> A source-based, citation-first Islamic research platform for Hanafi fiqh, Sunni aqeedah, and scholarly verification — in English, Urdu, and Arabic.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma)](https://www.prisma.io/)
[![SQLite](https://img.shields.io/badge/SQLite-embedded-003B57?logo=sqlite)](https://www.sqlite.org/)
[![i18n](https://img.shields.io/badge/i18n-EN_%7C_اردو_%7C_العربية-emerald)](./src/lib/i18n.ts)
[![PWA](https://img.shields.io/badge/PWA-installable_+_offline-amber)](./public/manifest.webmanifest)
[![License](https://img.shields.io/badge/License-educational_use-lightgrey)](#license--disclaimer)

---

## Table of Contents

- [1. Overview](#1-overview)
- [2. Repository Layout Note](#2-repository-layout-note)
- [3. Key Features](#3-key-features)
- [4. Screens / Views (13 SPA Routes)](#4-screens--views-13-spa-routes)
- [5. AI Engines](#5-ai-engines)
- [6. Tech Stack](#6-tech-stack)
- [7. Architecture](#7-architecture)
- [8. Data Model (Prisma + SQLite)](#8-data-model-prisma--sqlite)
- [9. API Reference](#9-api-reference)
- [10. Internationalization (EN / UR / AR)](#10-internationalization-en--ur--ar)
- [11. Design System — Islamic Architectural Identity](#11-design-system--islamic-architectural-identity)
- [12. Getting Started](#12-getting-started)
- [13. Available Scripts](#13-available-scripts)
- [14. Configuration](#14-configuration)
- [15. Deployment (Standalone + Caddy)](#15-deployment-standalone--caddy)
- [16. PWA & Offline](#16-pwa--offline)
- [17. Security, Rate Limiting & Anti-Hallucination Policy](#17-security-rate-limiting--anti-hallucination-policy)
- [18. Admin & Editorial Workflow](#18-admin--editorial-workflow)
- [19. Project Structure](#19-project-structure)
- [20. Seed Data](#20-seed-data)
- [21. Roadmap](#21-roadmap)
- [22. Contributing](#22-contributing)
- [23. License & Disclaimer](#23-license--disclaimer)
- [24. Acknowledgements](#24-acknowledgements)

---

## 1. Overview

**Nur al-Usul** (نور الأصول, "Light of the Principles") is a full-stack, trilingual Islamic research platform built around one principle: **every claim must be traceable to a verifiable source**.

It combines:

- a curated **knowledge base** (Qur'an verses, hadith, books, scholars, fatwas, topics),
- a **misconception database** with scholarly corrections,
- an **objection / response** research library,
- a **madhhab comparison engine** (Hanafi vs. other schools),
- an **AI claim checker** ("Is This Really Hanafi?"),
- an **AI answer engine** with live SSE streaming,
- an **OCR pipeline** that turns photos of book pages into checkable evidence,
- a full **admin editorial CMS**, reader feedback loop, personal library, and PWA offline shell.

The frontend is built as a **single-page application (SPA)** on top of Next.js App Router using **hash-based navigation** (`#/knowledge`, `#/claims/{id}`, …), so the entire platform is served from the `/` route. The backend is **Next.js API routes + Prisma + SQLite** — a documented, modular stand-in for a PostgreSQL/FastAPI stack that can be swapped later without touching the UI.

**Status:** fully wired and browser-verified end-to-end (12–13 views, AI flows, OCR, admin CRUD, RTL, dark mode, mobile 390px).

---

## 2. Repository Layout Note

This workspace (`Noor/`) contains **two identical copies** of the application:

| Folder | Contents |
|---|---|
| `Nul al usal front/` | Full application (219 source files) |
| `Nur al asul process/` | Full application (219 source files, identical relative paths) |

A recursive file comparison (excluding `.git` internals) confirms **both folders contain the same 219 files with the same relative paths** — only `.git` object hashes differ. Treat either folder as the canonical app root. All paths in this README are relative to one app root.

> Recommendation: keep one folder as canonical and archive/remove the other (or keep one as a backup) to avoid divergent edits.

---

## 3. Key Features

### Research & Knowledge
- **Knowledge Hub** — topics grouped by category (Aqeedah, Fiqh, comparative fiqh) with deep links.
- **Question Bank** — clustered question bank with detail pages and admin curation.
- **Misconception Database** — claim → scholarly correction → evidence → status, each with a shareable detail page.
- **Objection Database** — structured objections with Hanafi position, evidence blockquotes, disputed notes, topic links.
- **Madhhab Comparison Engine** — side-by-side comparison tables across schools with focus deep-links (`#/compare/{id}`).
- **Sources Library** — books (classical Hanafi, later South Asian incl. *Fatawa Razvia*), scholars, fatwas with manuscript-style reader.
- **Qur'an & Hadith Viewer** — illuminated manuscript panels, Arabic-first typography, grading seals.
- **Global Search + ⌘K/Ctrl+K** — dialog + full search view with type filters, 13+ result routing.

### AI & Verification
- **Claim Checker ("Is This Really Hanafi?")** — live-streamed verdict (SSE) with classification, confidence, typed evidence bullets, KB cross-links.
- **Answer Engine** — live-streamed scholarly draft (retrieval → generating → saving stepper), then persisted as a structured, citable answer card.
- **OCR "Scan & Verify"** — upload/drag-drop a book-page photo → verbatim extraction (Arabic/Urdu Nastaliq/English) → one click into the fact-checker or Ask form.
- **Anti-hallucination guarantee** — no evidence → explicit "could not be verified" disclaimer; uncertain citations stay `UNVERIFIED`.

### Reading & Personal UX
- **Citation-first UX** — every detail surface has Copy Citation / Copy Link / Print via `ShareBar` + `cite.ts`.
- **My Library** — bookmark 5 content kinds (misconception, objection, comparison, question, claim verdict), export as citations/list/`.txt`.
- **Continue Reading** — localStorage reading-history trail on Home.
- **Related Research trail** — same-topic misconceptions ↔ objections ↔ comparisons cross-linked on detail pages.
- **Article chrome** — reading progress bar, breadcrumbs (RTL-aware), ornament dividers, back-to-top, on-this-page TOC with scrollspy.
- **Reader feedback votes** — helpful/not-helpful per answer → admin triage sorts ("Most disputed / Most helpful").

### Platform
- **Trilingual** — English / اردو / العربية with full RTL mirroring (~1,000+ i18n keys × 3).
- **Dark mode** — "quiet mosque at night" theme via `next-themes`.
- **PWA** — installable manifest + generated icons + service-worker offline shell with trilingual fallback page.
- **Admin CMS** — dashboard stats, feedback signals widget, 10-entity CRUD editor, bulk delete + bulk status, pagination, search.
- **SEO** — per-view `document.title` + meta-description swaps.

---

## 4. Screens / Views (13 SPA Routes)

Hash router lives in `src/app/page.tsx` + `src/lib/store.ts` (`hydrateFromHash`, `setView`).

| Hash | View file | Description |
|---|---|---|
| `#/` | `views/home.tsx` | Courtyard hero, Verse of the Visit, stats (count-up), My Library strip, Continue Reading, categories, comparisons, books |
| `#/knowledge[/{slug}]` | `views/knowledge.tsx` | Categories → topics → detail |
| `#/bank[/{slug}]` | `views/bank.tsx` | Question-bank clusters |
| `#/misconceptions[/{slug}]` | `views/misconceptions.tsx` | List + citable detail + related trail |
| `#/claims[/{id}]` | `views/claims.tsx` | Streaming claim checker + verdict deep-links + recent checks |
| `#/objections[/{id}]` | `views/objections.tsx` | List + research detail + related comparisons |
| `#/compare[/{id}]` | `views/comparison.tsx` | Madhhab comparison cards + focus badge |
| `#/sources[/{param}]` | `views/sources.tsx` | Books / scholars / fatwas + manuscript book viewer |
| `#/quran` | `views/quran-hadith.tsx` | Qur'an verses + hadith panels |
| `#/search[/{query}]` | `views/search.tsx` | Search courtyard + filtered hits |
| `#/ask` | `views/ask.tsx` | Ask a question + OCR attach ("Quote into question") |
| `#/qa[/{id}]` | `views/qa.tsx` | Q&A list (status filter + search), streaming answers, feedback votes, earlier-drafts collapse |
| `#/admin` | `views/admin.tsx` | Dashboard + entity editor + feedback signals |

Shared platform components: `navbar.tsx` (global ⌘K, library button, language menu, mobile sheet), `footer.tsx` (muqarnas courtyard), `detail-chrome.tsx`, `article-toc.tsx`, `related-research.tsx`, `share-bar.tsx`, `library.tsx`, `ocr-attach.tsx`, `badges.tsx`, `architectural.tsx`, `text.tsx`, `admin-editor.tsx`, `bank-admin.tsx`, `sw-register.tsx`.

---

## 5. AI Engines

LLM access is **backend-only** via `z-ai-web-dev-sdk` (`src/lib/ai.ts`, streaming in `src/lib/llm-stream.ts`). Retrieval grounds every call in the local KB (`src/lib/retrieval.ts`).

| Engine | Endpoint | UX |
|---|---|---|
| Claim checker (JSON) | `POST /api/claims` | Classic request/response verdict |
| Claim checker (streaming) | `POST /api/claims/stream` | SSE `retrieving → analyzing → verifying → delta* → done`; `LiveStreamPanel` + `VerdictIcon` + animated verdict card |
| Answer generator (JSON) | `POST /api/answers/generate` | Structured answer draft |
| Answer generator (streaming) | `POST /api/answers/stream` | SSE `retrieving → generating → saving → delta* → done`; model writes fixed `##` sections, parser maps to `Answer` model (directAnswer, hanafiPosition, evidence JSON, objection/response, sources, confidence) and persists `AI_ASSISTED` |
| OCR extraction | `POST /api/ocr` | `{imageBase64, mimeType}` → vision OCR → `{text ≤8000 chars, language ar\|ur\|en\|mixed, claimSummary}` |

Rate limits (in-memory sliding window, `src/lib/rate-limit.ts`): claims 8/min, claims-stream 8/min, OCR 6/min, answers 6/min, questions 12/min, feedback 20/min → `429 + Retry-After` on excess.

---

## 6. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, `output: standalone`), React 19, TypeScript 5 |
| Styling | Tailwind CSS 4, `tailwindcss-animate`, `tw-animate-css`, shadcn/ui (New York), Radix UI primitives, Framer Motion |
| Fonts (self-hosted via `next/font`) | Amiri, Noto Naskh Arabic, Noto Nastaliq Urdu, Cormorant Garamond (display serif) |
| Data | Prisma 6 + SQLite (`file:./dev.db` via `DATABASE_URL`), 23 models |
| AI | `z-ai-web-dev-sdk` (server-side only), custom SSE streaming (`llm-stream.ts`) |
| State / Data-fetching | Zustand (`store.ts`), TanStack React Query, React Hook Form + Zod |
| i18n | Custom `src/lib/i18n.ts` (EN/UR/AR dictionaries, RTL-aware) + `next-intl` dep |
| Editors / Markdown | MDX Editor, `react-markdown`, `react-syntax-highlighter` |
| Tables / DnD / Charts | TanStack Table, dnd-kit, Recharts, Embla Carousel |
| Runtime / Package manager | Bun (`bun.lock`), Node-compatible |
| PWA | `manifest.webmanifest`, PIL-generated icons, `sw.js` + `offline.html` |
| Reverse proxy | Caddyfile (port 81 → `localhost:3000`, `XTransformPort` support) |
| Lint | ESLint 9 + `eslint-config-next` |

Full dependency list: `package.json`.

---

## 7. Architecture

```text
┌─────────────────────────────────────────────────────────┐
│  Browser (SPA, hash routing, `src/app/page.tsx`)        │
│  13 views · Zustand store · RTL · dark mode · PWA (sw)  │
└───────────────┬─────────────────────────────────────────┘
                │  fetch (REST JSON / SSE text/event-stream)
┌───────────────▼─────────────────────────────────────────┐
│  Next.js API routes (`src/app/api/**`)                  │
│  rate-limit.ts → retrieval.ts → ai.ts / llm-stream.ts   │
└───────────────┬─────────────────────────────────────────┘
                │  Prisma Client (`src/lib/db.ts`)
┌───────────────▼─────────────────────────────────────────┐
│  SQLite (`DATABASE_URL=file:./dev.db`)                  │
│  23 models · seed.ts (822 lines) + seed-bank.ts         │
└─────────────────────────────────────────────────────────┘
                │  (server-only)
┌───────────────▼─────────────────────────────────────────┐
│  z-ai-web-dev-sdk (LLM chat + vision OCR)               │
└─────────────────────────────────────────────────────────┘
```

Key design decisions:

- **Hash SPA on `/`** — sandbox constraint (only `/` visible) turned into a feature: shareable `#/...` deep links, preserved language/theme context across navigation.
- **SQLite now, PostgreSQL later** — schema comments document the enum/JSON mapping so the DB can be swapped without UI changes.
- **Single LLM call, dual output** — the streamed draft the user watches *is* the text the parser persists; no second call, no drift.
- **Citation honesty** — verification statuses (`VERIFIED / PARTIAL / DISPUTED / UNVERIFIED`) are first-class data, never inferred silently.

---

## 8. Data Model (Prisma + SQLite)

`prisma/schema.prisma` (479 lines) — 23 models. SQLite has no native enums/JSON, so enums are documented `String` fields and JSON is serialized `String` (parsed in app code).

**Core models:**

| Model | Purpose |
|---|---|
| `User` | Accounts, roles, authorship |
| `Scholar`, `Book`, `BookPage` | Sources library + OCR page store |
| `QuranVerse`, `Hadith`, `Fatwa` | Scriptural + fatwa evidence |
| `Category`, `Topic` | Knowledge taxonomy |
| `Misconception`, `Objection`, `Comparison` | Research triangle (cross-linked by `topicId`) |
| `Position`, `ScholarlyView`, `Citation` | Stances, views, source links |
| `Question`, `Answer` (+`helpfulUp/helpfulDown`) | Ask + AI-assisted answers + feedback |
| `ClaimCheck` | Persisted fact-check verdicts |
| `QuestionCluster`, `QuestionSuggestion`, `SearchDocument`, `SearchLog`, `Review` | Bank, suggestions, search index/logs, editorial review |

Indexes, FKs, and audit timestamps (`createdAt/updatedAt`) preserved per spec.

---

## 9. API Reference

Base: `/api`. All routes are Next.js route handlers under `src/app/api/`.

**Public / research:**

| Method & Path | Description |
|---|---|
| `GET /api/health` | Health check |
| `GET /api/bootstrap` | Home stats + featured content |
| `GET /api/topics` | Categories + topics |
| `GET /api/misconceptions?slug=` | List / detail + `related` + `comparisons` |
| `GET /api/objections?id=` | List / detail + `related` + `comparisons` (increments views) |
| `GET /api/comparisons` | Madhhab comparisons |
| `GET /api/books`, `GET /api/scholars`, `GET /api/fatwas` | Sources library |
| `GET /api/quran?random=1`, `GET /api/hadith` | Scripture endpoints |
| `GET /api/search?q=&type=` | Global search |
| `GET /api/bank`, `GET /api/bank/clusters`, `GET /api/bank/detail` | Question bank |
| `GET /api/questions`, `POST /api/questions` | Q&A list / submit (12/min) |
| `GET /api/claims?id=`, `POST /api/claims` | Verdict fetch / classic check (8/min) |
| `POST /api/claims/stream` | Streaming verdict SSE (8/min) |
| `POST /api/answers/generate`, `POST /api/answers/stream` | Answer JSON / SSE (6/min each) |
| `POST /api/answers/feedback` | `{answerId, vote: up\|down}` (20/min) |
| `POST /api/ocr` | Vision OCR extraction (6/min) |

**Admin (`/api/admin/*`):**

| Path | Description |
|---|---|
| `GET /api/admin/stats` | Dashboard: workflow counts, verification breakdown, recent questions/claims, `topFeedback` ranking |
| `GET/POST/PATCH/DELETE /api/admin/resource?entity=` | Generic CRUD for 10 entities (misconception, objection, book, scholar, fatwa, question, claim, hadith, quran, comparison) with pagination + `total` |
| `GET /api/admin/analytics` | Usage analytics |
| `GET /api/admin/duplicates` | Duplicate detection |
| `POST /api/admin/suggest-questions` | AI-suggested questions |

Error convention: JSON `{ error }` with `400 / 404 / 413 / 415 / 422 / 429 (+Retry-After) / 500 / 502 / 503 (offline)` as appropriate.

---

## 10. Internationalization (EN / UR / AR)

- `src/lib/i18n.ts` (~1,117 lines, ~1,088 key usages) + `use-loc.ts` hook.
- Full UI in **English, اردو (Urdu), العربية (Arabic)**; persisted in `localStorage`.
- **RTL-first**: `dir` flips on `<html>`, chevrons/pagination/rails mirror, Nastaliq line-height boost (`ur: 1.85/1.9`, `ar: 1.75`), Arabic-appropriate fonts per script.
- Script-aware surfaces: `font-arabic` for Qur'an/hadith/OCR text, `text-wrap: pretty` prose.

---

## 11. Design System — Islamic Architectural Identity

70% usability / 20% character / 10% ornament. Tokens in `src/app/globals.css`, primitives in `src/components/platform/architectural.tsx`.

- **Light** = illuminated manuscript + marble interior (warm ivory `oklch(0.972 h90)`, paper cards, ink-charcoal, aged-stone borders).
- **Dark** = quiet mosque at night (deep green-charcoal, warm parchment text, candlelight borders).
- **Accent**: emerald-800 primary + antique-brass ornament (`--brass`), structured `--radius: 0.5rem`.
- **Patterns** (inline SVG data-URIs, zero network): `.pattern-girih` (khatam 8-point stars), `.pattern-weave` (stone lattice), `.muqarnas-edge` (arcade crown), `.arch-top` / `.arch-mihrab`, `.geometric-divider`.
- **Components**: `GeometricDivider`, `SectionHeading`, `ManuscriptPanel`, `BookSpine`, `AyahMedallion` (shamsa), `NicheMarker`, `CatalogRow`, `CitationBlock`, `EmptyState` (dome line-drawing), `DomeLoader`, icon-safe badges (never color-alone — every status has a distinct Lucide glyph).
- **Typography**: Cormorant Garamond display serif (`.font-scholarly`) + Amiri/Naskh/Nastaliq for scripts; `.prose-scholarly`, `.evidence-quote`, `.card-lift`, print stylesheet.

---

## 12. Getting Started

**Prerequisites:** Bun 1.x (or Node 20+), Git.

```bash
# 1. Enter ONE app copy (they are identical — pick one)
cd "Nul al usal front"
# or: cd "Nur al asul process"

# 2. Install dependencies
bun install
# (npm alternative: npm install)

# 3. Configure environment
# .env requires:
#   DATABASE_URL="file:./dev.db"
# Copy and adjust if needed:
cp .env .env.local  # optional

# 4. Generate client + create database + seed
bunx prisma generate
bunx prisma db push
bunx prisma db seed
# (preseeded KB: ~32 topics, 12 misconceptions, 18 objections,
#  16 books, 23 scholars, 15 Qur'an verses, 10 hadith,
#  7 fatwas, 7 comparisons — see prisma/seed.ts + seed-bank.ts)

# 5. Run dev server (http://localhost:3000)
bun run dev

# 6. Open the app
# http://localhost:3000/#/
```

> The dev script pipes through `tee dev.log` — check `dev.log` for startup/HMR notes.

**Useful URLs (hash routes):** `#/knowledge` · `#/misconceptions` · `#/claims` · `#/objections` · `#/compare` · `#/sources` · `#/quran` · `#/search` · `#/ask` · `#/qa` · `#/admin` · `#/bank`

---

## 13. Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `next dev -p 3000` | Dev server with log tee |
| `build` | `next build + standalone copy` | Production build (copies `static` + `public` into standalone) |
| `start` | `bun .next/standalone/server.js` | Serve production standalone |
| `lint` | `eslint .` | Lint entire repo |
| `db:push` | `prisma db push --accept-data-loss` | Sync schema to SQLite |
| `db:generate` | `prisma generate` | Regenerate Prisma client |
| `db:migrate` | `prisma migrate dev` | Dev migration flow |
| `db:reset` | `prisma migrate reset` | Reset database |

Helpers: `scripts/gen-icons.py` (PWA icons), `scripts/gen-depth-translations.ts`, `.zscripts/`, `mini-services/`, `examples/`, `download/` (OCR test assets).

---

## 14. Configuration

| File | Purpose |
|---|---|
| `.env` | `DATABASE_URL` (SQLite file path). LLM key handling lives server-side via the SDK environment. |
| `next.config.ts` | `output: standalone`, `ignoreBuildErrors` (TS), `reactStrictMode: false` |
| `tailwind.config.ts` + `postcss.config.mjs` | Tailwind 4 theme, animate plugin |
| `components.json` | shadcn/ui config (New York style) |
| `prisma/schema.prisma` | 23-model schema |
| `Caddyfile` | Reverse proxy `:81 → localhost:3000` (+ `XTransformPort` dynamic routing) |
| `public/manifest.webmanifest` | PWA manifest; `public/sw.js`, `public/offline.html`, `public/icons/`, `public/robots.txt` |

---

## 15. Deployment (Standalone + Caddy)

```bash
bun run build
bun run start   # serves .next/standalone/server.js on port 3000
```

- `next.config.ts` uses `output: "standalone"`; the build script copies `.next/static` and `public/` into the standalone folder so the server is self-contained.
- Serve behind the included `Caddyfile` (port 81, forwards `Host` / `X-Forwarded-For` / `X-Real-IP`), or any Node host / Docker container.
- SQLite file must be writable and persisted (mount a volume in Docker); back it up before `db:push --accept-data-loss`.

---

## 16. PWA & Offline

- `manifest.webmanifest` + icons (`192/512/apple-touch/favicon`) — emerald book + amber 8-point star.
- `sw.js` (versioned caches): navigations → network-first → page-cache → `/offline.html`; icons/fonts/manifest → cache-first + background refresh; `/_next/*` → network-first + cache fallback; `/api/*` → network-only (JSON `503` offline); HMR paths excluded.
- `ServiceWorkerRegister` mounts once in `page.tsx`; offline fallback page is trilingual.

---

## 17. Security, Rate Limiting & Anti-Hallucination Policy

- **Rate limiting** (`src/lib/rate-limit.ts`): in-memory per-IP sliding windows with stale-bucket sweep; single-node scope (documented swap path to Redis/shared store for multi-instance).
- **Validation**: Zod + per-entity schemas; OCR validates MIME (`png/jpeg/webp`) and size (~4 MB); numeric coercion with NaN guards.
- **LLM discipline**: backend-only keys, retrieval-grounded prompts, tolerant parsers, confidence heuristics.
- **Anti-hallucination seed policy**: only well-established citations ship as `VERIFIED`; uncertain page numbers/gradings are `UNVERIFIED`/`NULL` — the UI renders this honestly instead of fabricating authority.
- **Accessibility**: skip-to-content link, `aria-pressed/current/live` states, focus-visible rings, `prefers-reduced-motion` support, Radix dialog semantics, print isolation.

---

## 18. Admin & Editorial Workflow

`#/admin` — `views/admin.tsx` + `admin-editor.tsx` (+ `bank-admin.tsx`):

1. **Dashboard** — workflow cards (pending questions, AI drafts, published, sensitive, verified/OCR books), verification breakdown bars, **reader-feedback signals** (ranked up/down split bars), recent questions (publish/unpublish + featured toggles), recent claim checks.
2. **Entity editor** — 10 entities (Misconception, Objection, Book, Scholar, Fatwa, Question, Claim check, Hadith, Qur'an verse, Comparison); search + pagination (15/page) + row-click-to-edit + bulk select/delete + bulk "Set status".
3. **Triage** — question rows show vote badges (↑/↓/answers); sort by Newest / Most disputed / Most helpful.
4. **Library export** (reader side) — saved items export as scholarly citations, bulleted list, or dated `.txt`.

API support: `/api/admin/stats`, `/api/admin/resource`, `/api/admin/analytics`, `/api/admin/duplicates`, `/api/admin/suggest-questions`.

---

## 19. Project Structure

```text
<app-root>/
├── src/
│   ├── app/
│   │   ├── page.tsx              # SPA shell + hash router (13 views)
│   │   ├── layout.tsx            # fonts, theme provider, metadata, PWA icons
│   │   ├── globals.css           # architectural design tokens + patterns
│   │   └── api/                  # 25+ REST/SSE endpoints
│   │       ├── admin/*  answers/*  bank/*  claims/*  ocr
│   │       ├── books  bootstrap  comparisons  fatwas  hadith  health
│   │       ├── misconceptions  objections  questions  quran
│   │       └── scholars  search  topics
│   ├── components/
│   │   ├── platform/             # Navbar, Footer, 13 views/*, 14 shared modules
│   │   └── ui/                   # shadcn/ui primitives (50+ files)
│   ├── lib/                      # ai, llm-stream, retrieval, rate-limit, db,
│   │                             # i18n, store, cite, bookmarks, answer-votes,
│   │                             # reading-history, use-*, utils
│   └── hooks/
├── prisma/
│   ├── schema.prisma             # 23 models (SQLite)
│   ├── seed.ts                   # main KB seed (822 lines)
│   └── seed-bank.ts              # question-bank seed
├── public/                       # manifest, sw.js, offline.html, icons, robots
├── scripts/  tests/  examples/  mini-services/  download/  db/
├── .zscripts/  .gitignore  .env
├── package.json  bun.lock  tsconfig.json
├── tailwind.config.ts  postcss.config.mjs  components.json
├── eslint.config.mjs  next.config.ts  Caddyfile
└── worklog.md                    # 14-task engineering history (Phases 0–14)
```

Detailed build history: `worklog.md` (foundation → shell wiring → citation UX → admin CRUD → reading UX → OCR → offline → rate limits → SSE streaming → library/feedback → design system).

---

## 20. Seed Data

`prisma/seed.ts` ships a curated starter KB (representative counts from the verified worklog):

- ~32 topics · 12 misconceptions · 18 objections · 16 books · 23 scholars · 15 Qur'an verses · 10 hadith · 7 fatwas · 7 comparisons (+ positions, citations, claim checks)

`prisma/seed-bank.ts` adds the clustered question bank. Comparison `topicId` backfills are included so the research triangle links correctly on fresh installs.

---

## 21. Roadmap

- [ ] Real-device service-worker offline test (harness could only verify caches, not the offline network layer)
- [ ] Question image-attachment storage + admin attachment display
- [ ] Answer revision-history UI (data already versioned via `revision`)
- [ ] Admin trend sparklines (needs timestamped series), bulk publish/feature toggles
- [ ] Library sort/search for large collections
- [ ] Comparison chips from objection/misconception detail bodies
- [ ] SSE streaming for additional flows; per-view meta descriptions for remaining views
- [ ] PostgreSQL/FastAPI backend swap (schema is migration-ready)
- [ ] Auth-gated admin (currently open editorial UI)

---

## 22. Contributing

1. Pick **one** app folder as canonical (see §2) and work there.
2. Create a feature branch; keep edits small and typed (`bun run lint` clean).
3. Follow existing conventions: server-only LLM calls, citation honesty (`UNVERIFIED` over guessing), trilingual keys (EN/UR/AR) for every user-facing string, RTL check, dark-mode check, mobile 390px check.
4. Update `worklog.md` with task ID, work log, and stage summary.
5. Open a PR with screenshots (EN + UR/AR RTL + dark).

---

## 23. License & Disclaimer

- **Code**: provided for educational use. Add an explicit OSS license (e.g. MIT) before public distribution if desired.
- **Religious content disclaimer**: this platform presents Hanafi/Sunni scholarly material for research and education. It is **not a substitute for qualified scholarship or personal fatwa** — the Ask/Q&A surfaces carry a fatwa-consultation warning. Verify consequential rulings with trusted scholars and primary sources.

---

## 24. Acknowledgements

- Classical Hanafi scholarship and the later South Asian tradition (including *Fatawa Razvia*) whose works populate the sources library.
- shadcn/ui, Radix UI, Tailwind, Prisma, Next.js, and the open-source community.
- Amiri, Noto Naskh Arabic, Noto Nastaliq Urdu, and Cormorant Garamond type designers.
- Engineering history preserved in `worklog.md` (Tasks 0–14).

---

*نور الأصول — Understand Hanafi Islam through reliable sources.*
