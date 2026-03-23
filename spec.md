# Resume Download Buttons Troubleshooting Implementation Plan

## Problem Statement
Two UI buttons intended to download `public/resume.pdf` are not working:
1. Hero section "Download Resume (PDF)" button
2. Experience section "Download Resume (PDF)" button

## Current Findings
1. `src/components/Hero/Hero.jsx` renders a button label for resume download, but no `href` or `onClick` is configured, so it does nothing.
2. `src/components/Experience/Experience.jsx` points to `href="/api/download-resume"` and relies on a Netlify function.
3. `netlify.toml` currently has only a catch-all SPA redirect (`/* -> /index.html`), which can interfere with API routing if function/API redirects are not explicitly prioritized.
4. `netlify/functions/download-resume.js` reads `public/resume.pdf` and returns a base64 PDF, but has no guardrails for missing file/error handling.

## Sequential Implementation Plan

### Phase 1: Confirm and Reproduce
1. Start the app locally and reproduce both failures in browser and DevTools.
2. Validate expected assets exist:
   - `public/resume.pdf`
   - `netlify/functions/download-resume.js`
3. Capture baseline behavior:
   - Hero button click (no network request expected with current code)
   - Experience button click (verify whether request hits `/api/download-resume` and what status is returned)

### Phase 2: Unify Download Strategy
1. Choose one canonical URL strategy for both buttons:
   - Preferred: direct static file link (`/resume.pdf`) for simplicity and reliability.
   - Alternate: keep function endpoint (`/api/download-resume`) if forced attachment filename/header control is required.
2. Apply the chosen strategy to both buttons so behavior is consistent across sections.

### Phase 3: Implement UI Fixes
1. Update Hero button in `src/components/Hero/Hero.jsx` to render as an anchor-style button:
   - `as="a"` (if needed by component API)
   - `href` set to canonical resume URL
   - optional `download` attribute for stronger download behavior
2. Update Experience button in `src/components/Experience/Experience.jsx` to the same canonical resume URL.
3. Ensure button text remains consistent and accessible.

### Phase 4: Routing/Backend Hardening (If API Endpoint Is Retained)
1. Add explicit Netlify redirect for function route before catch-all:
   - `/api/* -> /.netlify/functions/:splat 200`
2. Keep SPA catch-all redirect last.
3. Add error handling in `netlify/functions/download-resume.js`:
   - return `404` if file missing
   - return `500` on read failures
   - include safe error logging

### Phase 5: Validation and Regression Testing
1. Local validation:
   - Click both buttons in desktop and mobile breakpoints.
   - Confirm file downloads correctly and opens as PDF.
2. Network validation:
   - static link path returns `200` and `application/pdf`, or
   - API path returns `200` and attachment headers.
3. Deployment validation on Netlify preview/production:
   - test both buttons from a fresh page load
   - verify no redirect loops or HTML fallback on PDF/API requests
4. Accessibility sanity check:
   - keyboard activation works for both buttons
   - visible focus state remains present

### Phase 6: Definition of Done
1. Both buttons reliably download/open the same `resume.pdf`.
2. Behavior matches design intent across local + deployed environments.
3. No console/network errors for resume actions.
4. Routing config (if changed) is documented and stable for future updates.

## Recommended Implementation Choice
Use direct static file linking (`/resume.pdf`) for both buttons unless a forced filename or server-side access control is required. This removes API/routing complexity and is typically most reliable for static portfolio deployments.

## Phase 1 Execution Results (Completed March 23, 2026)
1. Environment + asset checks
   - `public/resume.pdf` exists (118,790 bytes).
   - `netlify/functions/download-resume.js` exists.
2. Code wiring baseline
   - Hero button (`src/components/Hero/Hero.jsx`) has label only; no `href` or `onClick`.
   - Experience button (`src/components/Experience/Experience.jsx`) uses `href="/api/download-resume"`.
3. Local production preview smoke test (`vite preview`)
   - `GET /resume.pdf` -> `200 application/pdf` (works).
   - `GET /api/download-resume` -> `200 text/html;charset=utf-8` (SPA HTML fallback, not PDF).
4. Netlify dev route check (`netlify dev`)
   - `GET /api/download-resume` -> `404` on local Netlify dev session.
5. Phase 1 conclusion
   - Hero button fails because it is not wired to any action.
   - Experience button fails because `/api/download-resume` is not resolving to a valid PDF response in current routing/runtime.

## Phase 2 Execution Results (Completed March 23, 2026)
1. Canonical strategy selected
   - Use direct static file linking: `/resume.pdf`.
2. Why this strategy was selected
   - Confirmed working in local production preview (`200 application/pdf`).
   - Eliminates Netlify function routing complexity causing current failures (`200 text/html` fallback / `404` in Netlify dev).
   - Simplifies maintenance and keeps behavior identical across both buttons.
3. Implementation decision for Phase 3
   - Update both Hero and Experience resume CTA buttons to use the same canonical URL: `href="/resume.pdf"`.
   - Keep Netlify function route as optional future enhancement only if forced attachment naming is required.

## Phase 3 Execution Results (Completed March 23, 2026)
1. UI wiring updates implemented
   - Updated Hero resume CTA to `href="/resume.pdf"` in `src/components/Hero/Hero.jsx`.
   - Updated Experience resume CTA to `href="/resume.pdf"` in `src/components/Experience/Experience.jsx`.
2. Build verification
   - Production build completed successfully (`npm run build`).
3. URL smoke check
   - `GET /resume.pdf` returned `200 application/pdf` after changes.
