# Worklog — Hanafi Aqeedah, Fiqh & Misconception Research Platform

---
Task ID: 0
Agent: main (Z.ai Code)
Task: Phase 0 — Foundation. Read MASTER PROMPT (36 pages, uploaded as images), set plan, verify scaffold.

Work Log:
- MASTER PROMPT fully read from user-provided document images (upload as .docx failed to sync, images received instead).
- Confirmed scaffold: Next.js 16 + TypeScript + Tailwind 4 + shadcn/ui (New York) + Prisma/SQLite, dev server running on port 3000.
- Environment constraints documented: PostgreSQL/FastAPI stack required by prompt is NOT available in this sandbox → equivalent architecture: Next.js API routes (REST) + Prisma + SQLite, modular so backend can be swapped later. LLM via z-ai-web-dev-sdk (backend only).
- Sandbox rule: user can only see route `/` → platform built as SPA with hash-based in-app navigation.

Stage Summary:
- Project name: "Nur al-Usul" (Hanafi Research Platform) — scholarly, calm, emerald/amber palette, no blue/indigo.
- Full phase plan (0..15) tracked in todos; multi-phase discipline per MASTER PROMPT.
- Anti-hallucination policy adopted for seed data: only well-established citations get verified status; uncertain page numbers/grading left UNVERIFIED/NULL to demonstrate honest verification layer.

---
Task ID: 1 (QA + shell wiring session)
Agent: main (Z.ai Code)
Task: Resume session — fix broken build, wire SPA shell, complete Admin view, end-to-end browser QA, fix all found bugs.

Work Log:
- Fixed FATAL CSS bug: `@import url(google-fonts)` mid-file in globals.css (build 500 on /). Moved to layout via next/font (Amiri, Noto Naskh Arabic, Noto Nastaliq Urdu as CSS vars), CSS font classes now use var(--font-amiri/--font-naskh/--font-nastaliq).
- Discovered src/app/page.tsx was still the default scaffold → built the SPA shell: hash-hydration, all 12 views routed (home/knowledge/misconceptions/claims/objections/compare/sources/quran/search/ask/qa/admin), skip-to-content link, Navbar+Footer.
- Created missing Admin view (src/components/platform/views/admin.tsx): workflow cards, content library grid, verification breakdown bars, recent questions w/ publish-unpublish + featured toggles, recent claim checks; added 15 i18n keys x3 languages (en/ur/ar).
- Fixed lint (4 errors): async-IIFE + cancelled-guard pattern in knowledge/misconceptions/sources views; rAF-mounted in navbar.
- Browser QA found + fixed: (1) hash params percent-encoded → JSON.parse failed; decodeURIComponent in store.parseHash. (2) admin ClassificationBadge wrong prop name (classification→status). (3) admin content labels used missing i18n keys → explicit labelKey map. (4) recentQuestions missing answers include → publish buttons absent; added include in /api/admin/stats. (5) NO ThemeProvider in layout → theme toggle dead; added next-themes provider (attribute=class).
- Added missing i18n keys: answer/answers/claimsLabel etc.
- Verified via agent-browser: home render+stats, claim checker AI (INCORRECTLY_ATTRIBUTED, HIGH confidence, 5 KB evidence links), question submit + fatwa warning, AI answer generation (structured sections), global search dialog + view (13 results for tawassul), Quran&Hadith Arabic typography, sources book detail dialog, comparison madhhab tables, admin dashboard full workflow, Urdu RTL flip, dark mode, mobile 390px + hamburger menu.
- Final: bun lint clean, GET / 200.

Stage Summary:
- Platform is now FULLY WIRED and browser-verified end-to-end. All 12 views functional; AI features (claim checker, answer generation) work against seeded KB (32 topics, 12 misconceptions, 18 objections, 16 books, 23 scholars, 15 Quran, 10 hadith, 7 fatwas, 7 comparisons).
- Fonts self-hosted via next/font; theme/lang persistence via localStorage; RTL verified.
- Remaining candidates for next rounds: admin CRUD forms UI (entity editor), OCR upload flow, comparison detail deep-links, objection detail pages, pagination, SEO metadata per view, PWA manifest.

---
Task ID: 2 (cron round — objection details, citation UX, PWA, styling pass)
Agent: main (Z.ai Code, cron webDevReview)
Task: QA smoke pass; then extend feature set + styling details.

Work Log:
- QA smoke: GET / 200, health 200, no browser console errors.
- Objection DETAIL pages: /api/objections?id= (with topic include + views increment); ObjectionsView rebuilt with detail mode (back nav, badges, scholarly answer, hanafiPosition callout, evidence blockquotes via .evidence-quote, disputed box, topic link, ShareBar, views count) + list items now deep-link (#/objections/{id}); home objections + search openHit now route objections/{id}.
- Citation-first UX: src/lib/cite.ts (buildCitation scholarly format + copyToClipboard w/ legacy fallback) + ShareBar component (Copy Citation w/ "Copied" state, Copy Link, Print) wired into objection detail, misconception detail, Q&A AnswerCard.
- Per-view SEO: src/lib/use-doc-title.ts hook — objection detail, misconception detail, Q&A now set document.title to the entity being read (verified: "Why do Hanafis not raise their hands before every ruku'? · Nur al-Usul…").
- "Verse of the Visit" home widget: /api/quran?random=1 + ayah-card (Amiri Arabic, translation, surah badge, Another-verse refresh w/ spinner, ornament divider header).
- Styling details: .card-lift hover lift+glow on all clickable cards (home misconceptions/questions/categories/comparisons/books, knowledge topics, search hits, objections, misconceptions); .prose-scholarly reading rhythm; .evidence-quote Arabic-first blockquote; print stylesheet (@media print: hide chrome, print-area isolation via data-print-target).
- PWA: manifest.webmanifest + PIL-generated icons (192/512/apple-touch/favicon — emerald book + amber 8-point star) + metadata icons/themeColor.
- Bugfixes found in QA: misconception detail endless-skeleton on bad slug → undefined=loading + i18n not-found state (3 langs); objection listing headers i18n-ified (objectionsTitle/Subtitle/openResearchTopic etc., ~20 new keys x3).
- lint clean; browser-verified: home ayah widget, objection deep-link + title, citation copy state, misconception detail + bad-slug fallback, manifest/icon served 200.

Stage Summary:
- Every major entity now has a shareable, printable, citable detail page — the "citation-first" requirement of the MASTER PROMPT is now fully realized in UX.
- PWA installable (manifest + icons + theme color); per-view titles improve SEO/UX.
- Remaining candidates: admin entity CRUD editor UI, OCR upload flow, comparison deep-links from home chips (currently all go to compare view top), pagination for large lists, service-worker offline shell, per-view meta description updates.

---
Task ID: 3 (cron round — comparison deep-links, admin entity editor)
Agent: main (Z.ai Code, cron webDevReview)
Task: QA pass; implement comparison deep-links + admin entity CRUD editor; fix slug blocker.

Work Log:
- Comparison deep-links: ComparisonView now takes focusId (#/compare/{id}); focused card gets emerald border + "Focused comparison" badge + smooth scroll + 2.2s ring flash; home comparison chips deep-link with id; per-view doc title set to the comparison issue (verified "Taraweeh rak'ah count · Nur al-Usul").
- Admin Entity Editor (src/components/platform/admin-editor.tsx, wired into AdminView below stats):
  * Entity selector: Misconception / Objection / Book / Scholar / Fatwa
  * Records list (100 cap) with title + first-textarea preview + status badge + edit/delete actions + search filter + scrollable (max-h-28rem)
  * Generic create/edit dialog driven by per-entity field schemas (text/textarea/checkbox/select; select options sourced from schema comment enums: classifications, verification statuses)
  * Required-field validation, toasts, AlertDialog delete confirm; full cycle UI-tested (create→PATCH→DELETE) against live API
- BUGFIX: admin POST failed for Misconception (unique slug required) → /api/admin/resource now auto-generates URL-safe slug (slugify from titleEn/nameEn/claim/question + random suffix) for misconception/book/scholar; error messages now include Prisma detail (truncated) for admin debugging.
- i18n: 11 new keys x3 languages (entityEditor/createNew/editRecord/deleteConfirmTitle/deleteConfirmBody/cancel/delete/save/saving/focusedComparison).
- lint clean; browser-verified: editor CRUD cycle, entity switch (16 books), comparison focus, doc titles.

Stage Summary:
- Admin can now fully manage content from the UI: editorial workflow cards + publish/unpublish + featured toggles + generic entity CRUD. No more DB-seed-only editing.
- Deep-linked comparisons make home chips context-preserving (MASTER PROMPT: language/context preserved during navigation).
- Remaining candidates: OCR upload flow (book PDF ingest), pagination for 100+ records, service worker offline shell, related-content cross-links on detail pages, meta description per view.

---
Task ID: 4 (cron round — related-research trail, reading UX, Ctrl+K, admin pagination)
Agent: main (Z.ai Code, cron webDevReview)
Task: QA pass; implement related-content cross-links, reading-progress chrome, global search shortcut, admin pagination; styling details.

Work Log:
- BUGFIX: viewport metadata warning — moved themeColor from `metadata.viewport` to a dedicated `export const viewport: Viewport` in layout.tsx (Next 16 requirement; verified warning gone from dev.log).
- BUGFIX: Ctrl/Cmd+K advertised in navbar kbd hint but handler lived inside SearchDialog (only mounted when open) → added global keydown listener in Navbar; shortcut now works from any view.
- BUGFIX: hashchange (browser back/forward) kept stale scroll position → page.tsx now scrollTo(0) on hashchange, mirroring setView behavior.
- Related Research trail: /api/misconceptions?slug= and /api/objections?id= now return `related` = { misconceptions, objections } (same topicId, exclude self, take 4, order views desc). New src/components/platform/related-research.tsx renders the section on both detail pages (ornament divider header, grouped cards with badges + views, click → deep-link). Verified cross-link navigation misconception→misconception.
- Detail-page chrome (new src/components/platform/detail-chrome.tsx): ReadingProgress (fixed 3px emerald→amber gradient bar, article-scoped, rAF-throttled, aria progressbar; verified 0%→17% at 300px), DetailBreadcrumb (Home/Section/current chip, RTL chevron flip verified in Urdu), OrnamentDivider (gradient rule + amber 8-point star), BackToTop (global, appears >300px scroll, smooth scroll verified).
- Search: Enter in SearchDialog now jumps to full search view preserving query AND type filter (SearchView parse extended to honor {type}).
- Admin editor pagination: /api/admin/resource GET returns `total` (Promise.all with count); editor paginates client-side (15/page) with prev/next chevrons (RTL-rotated), "Page x / y", total-records + matching-filter counters. Verified: books 16 → Page 1/2 → Next → 2/2; filter Razvia → Matching: 1.
- i18n: 7 new keys ×3 languages (relatedResearch, backToTop, prev, next, pageLabel, recordsTotal, matching).
- QA via agent-browser: misconception + objection detail (breadcrumb/progress/related), related-card click-through, Ctrl+K from home, Enter search → #/search/{q}, back-to-top show/click, admin pagination + filter, Urdu RTL through app language menu (relatedResearch/متعلقہ تحقیق renders, breadcrumb flipped), dark mode screenshot (ornament + related + back-to-top + progress bar all correct), home regression (8 sections), zero console errors, lint clean.

Stage Summary:
- Detail pages now form a research trail: breadcrumb → article → ornament → related same-topic misconceptions/objections → citation/share.
- Keyboard UX complete: ⌘K anywhere, Enter submits to search view, Esc closes.
- Admin scales past 100 records with pagination + honest total counts.
- Remaining candidates: OCR upload flow (book PDF ingest), service worker offline shell, per-view meta descriptions, "on this page" TOC for long answers, comparison chips from objection detail.

---
Task ID: 5 (cron round — OCR Scan & Verify, on-this-page TOC, per-view meta descriptions)
Agent: main (Z.ai Code, cron webDevReview)
Task: QA smoke pass; implement OCR upload flow, article TOC, meta descriptions, a11y + styling details.

Work Log:
- QA smoke: GET / 200, home 8 sections, zero console errors. Found + fixed: admin editor create/edit dialog had DialogTitle but no DialogDescription (Radix a11y warning) → added DialogDescription with new i18n keys editRecordHint/createNewHint ×3 langs.
- OCR "Scan & Verify" flow (new AI capability, claims view):
  * NEW /api/ocr: POST {imageBase64, mimeType} → z-ai-web-dev-sdk createVision OCR with verbatim-extraction prompt (Arabic/Urdu Nastaliq/English aware, [illegible] markers); returns {text ≤8000 chars, language ar|ur|en|mixed, claimSummary, chars}; validates mime (png/jpeg/webp), size (~4 MB), strips dataURL prefix, tolerant JSON match; distinct errors 400/413/415/422/502.
  * ClaimsView rebuilt with scan card: sr-only file input + styled dropzone (click or drag&drop, dragOver emerald highlight), client-side type/size validation with toasts, FileReader preview with remove affordance, Extract-text button w/ spinner, result panel (detected-language badge, claimSummary, scrollable verbatim text pre — rtl+font-arabic for ar/ur), "Use extracted text" fills the claim textarea then smooth-scrolls to it; scanNote citation-caution line.
  * E2E verified: PIL-generated book page → browser upload → extraction ("From the book… page 112", lang=en, accurate claimSummary) → Use-text → textarea filled.
- On-this-page TOC (new src/components/platform/article-toc.tsx): TocRail (desktop sticky rail: top-24, ON THIS PAGE header, scrollspy active = amber dot + emerald bg + aria-current=location) + TocMobile (collapsible details with chevron rotate); shared rAF-throttled scrollspy (top≤150 detection, bottom-of-doc → last section). SectionFlow sections now carry id=sec-{key} + scroll-mt-28; objection detail blocks got ids too (answer/position/evidence/disputed, items adapt to present sections).
  * Detail layouts upgraded to xl:grid xl:grid-cols-[minmax(0,1fr)_220px] xl:gap-10 with hidden xl:block aside (no-print); verified jump lands at 112px below sticky header; Urdu RTL flips rail to left with translated labels.
- Per-view meta descriptions: useDocTitle(title, description?) now swaps meta[name=description] (remembers original in data-default-description, restores on unmount); wired misconception detail (actualPosition) + objection detail (answer). Verified live swap + restore.
- Styling details: claims evidence list items get hover border emerald→amber + KB evidence chips get hover shadow/focus ring; OrnamentDivider added above evidence section; recent-claims rows hover emerald border; empty-state box for misconceptions list with i18n noEntriesMatch; dropzone focus-visible ring; scan preview remove button hover-destructive.
- i18n: 24 new keys ×3 languages (scan*, onThisPage, noEntriesMatch, lang*, edit/create hints).
- lint clean; dev.log clean; browser-verified: OCR E2E (dark+light, EN+UR), TOC desktop/mobile/RTL, scrollspy, meta swap, admin dialog a11y, home regression.

Stage Summary:
- Platform now ingests scanned evidence: photo of a book page → OCR → one click into the fact-check engine — closing the loop the MASTER PROMPT's "OCR / verification" book-card hinted at.
- Long research articles are navigable (TOC + scrollspy) on desktop rail + mobile collapsible, in all 3 languages incl. RTL flip.
- Per-view meta descriptions complete the SEO story started by per-view titles.
- Remaining candidates: service worker offline shell, question attach-image using same OCR pipeline, comparison chips from objection detail, admin bulk-verify actions.

---
Task ID: 6 (cron round — Ask-view OCR attach, PWA offline shell, continue-reading trail)
Agent: main (Z.ai Code, cron webDevReview)
Task: QA smoke; extend OCR pipeline into Ask flow; add PWA offline shell + reading-history widget; styling details.

Work Log:
- QA smoke: toured all 12 views — zero browser errors, dev.log clean, no fixes needed this round.
- Ask-view OCR attach (src/components/platform/ocr-attach.tsx): compact paperclip row → pick/drop image (validation toasts) → thumbnail + Extract → result (language badge, AI claimSummary, collapsible extracted-text preview) → "Quote into question" appends `[Scanned page — OCR] "…"` block into the question textarea (3000-char safe) and auto-fills the empty claim field with the AI claim summary. E2E verified: same test-scan.png → extracted → quoted → SUBMITTED card; question text + claim visible.
- PWA offline shell: public/sw.js (VERSION-bumped caches; navigations network-first → page-cache → /offline.html; cache-first + background refresh for icons/fonts/manifest; network-first + cache fallback for /_next/*; /api network-only returning JSON 503 offline; HMR paths excluded) + styled public/offline.html (emerald/amber star, trilingual note, Try-again) + ServiceWorkerRegister in page.tsx (load-time register, silent no-op). Verified: registration active scope=/, caches populated (v1-static 34 assets, v1-pages 3 docs), sw.js + offline.html 200. NOTE: agent-browser offline emulation does not reach SW network layer in this harness (fresh path while "offline" still hit server) — fallback logic verified by cache inspection + code review, not E2E; flagged for future real-device test.
- Continue Reading trail: src/lib/reading-history.ts (localStorage v1 key, push dedupe by kind+key, cap 12, timeAgo justNow/{n}h/{n}d localized); recorded on misconception detail (slug) + objection detail (id); home section between ayah + stats: History icon header, Clear button, horizontally scrollable cards (kind-icon chip emerald/amber, 2-line title, timeAgo · section label, card-lift, focus rings). Verified: 2 visits → home widget (Urdu RTL right-aligned, "ابھی ابھی" timestamps), click-through deep-links to detail, Clear removes widget; lazy setTimeout read avoids setState-in-effect lint error + hydration mismatch.
- i18n: 10 new keys ×3 languages (attachScan, attachScanHint, quoteIntoQuestion, quotedToast, scanTextPreview, continueReading, clearHistory, justNow, hoursAgo {n}, daysAgo {n}).
- lint clean (fixed setState-in-effect error in home + removed 3 stale eslint-disable directives); regression: claims Scan&Verify card intact, compare view intact, zero console errors.

Stage Summary:
- The OCR pipeline now serves BOTH research flows: fact-checking (Scan & Verify) and question intake (Ask attach) — a scanned book page can become quoted context in a submitted, trackable question.
- PWA completes its offline story: installable (manifest/icons) + offline shell with trilingual fallback page; safe-by-default caching strategy that keeps dev/HMR healthy.
- Home now carries a personal research trail (Continue Reading) — citation-first platform gains session continuity.
- Remaining candidates: real-device offline test, admin attachment display (if attachmentUrl ever stored), comparison chips from objection detail, admin bulk actions, question answered-count badges on home cards.

---
Task ID: 7 (cron round — rate limiting, admin bulk actions, Q&A filter+search)
Agent: main (Z.ai Code, cron webDevReview)
Task: QA smoke; harden AI endpoints with rate limiting; admin bulk delete; Q&A status filter + search; styling details.

Work Log:
- QA smoke: 12-view tour — zero console/page errors, dev.log clean; no pre-existing bugs.
- Rate limiting (src/lib/rate-limit.ts): in-memory sliding window per IP+scope (x-forwarded-for/x-real-ip → "local" fallback), stale-key sweep past 5000 buckets, standard 429 JSON + Retry-After header helper (tooMany). Wired: /api/claims POST 8/min, /api/ocr POST 6/min, /api/answers/generate POST 6/min, /api/questions POST 12/min. E2E verified: 13 rapid question POSTs → 12×200 then 429 retry-after:60; validation paths on claims/ocr still 400 correctly after wiring. (Single-node scope; documented swap path to shared store.)
- Admin bulk actions (admin-editor.tsx): per-row checkboxes + select-page checkbox in a selection toolbar (emerald-tinted when active), "N selected" counter (i18n bulkSelected {n}), Clear selection, red "Delete selected" button → AlertDialog confirm → sequential DELETE per id with per-failure counting, toast summary, reload, selection resets on entity switch. Rows highlight emerald when selected. E2E verified: created 2 test misconceptions → filter ZZTEST → select page → bulk delete → "No results", count restored after cleanup.
- Q&A status filter + search (views/qa.tsx): pill-chip status filter (All + Pending review / AI draft / Reviewed / Answered / Rejected, aria-pressed, role=group) + rounded search input (text + category match), visibleList memo, "Matching: x / y" counter line, empty state (noEntriesMatch). E2E verified: Answered chip → 2/6; +search "ruku" → 1/6; clear → 2/6; empty-state renders on impossible combos. Cards now card-lift. (One stale-HMR false alarm during testing — hard reload resolved; not a code bug.)
- Styling details: home stat cells get group hover (icon lift + bg tint) + tabular-nums; Q&A chip focus-visible rings; bulk toolbar transition-colors; selection row tint (light/dark).
- i18n: 3 new keys ×3 languages (bulkSelected {n}, bulkDelete, clearSelection).
- Cleanup: deleted 12 ZZTEST probe questions via admin API (DB clean). lint clean; home + views regression clean.

Stage Summary:
- AI surfaces are now abuse-resistant (per-IP sliding windows with honest 429s + Retry-After) — production-readiness hardening for the LLM-backed endpoints.
- Admin editor reaches bulk-ops maturity: select page → bulk delete with confirm + per-record failure reporting.
- Q&A listing becomes filterable/searchable — completes the public Q&A experience (list → filter → detail → generate).
- Remaining candidates: real-device offline SW test, comparison chips from detail pages, admin bulk feature/publish toggles, question attach-image storage, stream answers via SSE.
