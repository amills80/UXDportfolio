# Portfolio — React / Node · Netlify
### Sequential Implementation Plan

---

## Overview

This document drives the end-to-end build of a mobile-responsive portfolio web application for a Senior UX/Product Designer & Strategist. The stack is **React (Vite)** on the frontend, **Node.js (Express)** on the backend, deployed to **Netlify** with Netlify Functions handling any server-side needs.

All copy, layout structure, design system tokens, and section specs are sourced directly from `guidelines.md`. The Hero section includes a **Rive animation integration** as an interactive, abstract background element.

Do not begin a later phase until all checklist items in the current phase are complete.

---

## Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Frontend Framework | React 18 (Vite) | Fast HMR, clean build output |
| Styling | CSS Modules + CSS Custom Properties | Token-based, no Tailwind — keeps design system intentional |
| Animation (Hero BG) | `@rive-app/react-canvas` | Rive runtime for interactive `.riv` file |
| Animation (UI) | Framer Motion | Scroll reveals, hover states, nav transitions |
| Routing | React Router v6 | Single-page with hash-based section anchors |
| Backend | Node.js + Express | Netlify Functions for resume download endpoint |
| Hosting | Netlify | CD from GitHub, environment variables, Functions |
| Version Control | GitHub | Feature-branch workflow |

---

## Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf                  # Alan's resume asset
│   └── rive/
│       └── hero-background.riv     # Rive animation file (import after build)
├── src/
│   ├── assets/                     # Images, icons, fonts
│   ├── components/
│   │   ├── Nav/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Studies/
│   │   ├── Footer/
│   │   └── ui/                     # Button, Tag, Card (shared primitives)
│   ├── data/
│   │   ├── experience.js           # Job entries from guidelines.md §6.4
│   │   ├── caseStudies.js          # Card data from guidelines.md §6.5
│   │   └── copy.js                 # All finalized copy strings
│   ├── hooks/
│   │   ├── useScrollSpy.js         # Active nav link tracking
│   │   └── useReducedMotion.js     # Accessibility: respects prefers-reduced-motion
│   ├── styles/
│   │   ├── tokens.css              # All CSS custom properties (design tokens)
│   │   ├── typography.css          # Type scale, font imports
│   │   ├── reset.css               # Modern CSS reset
│   │   └── global.css              # Root layout, scroll behavior
│   ├── App.jsx
│   └── main.jsx
├── netlify/
│   └── functions/
│       └── download-resume.js      # Serverless resume download handler
├── .env.example
├── netlify.toml
├── vite.config.js
└── package.json
```

---

## Phase 0 — Project Initialization & Tooling

**Goal:** Get a working, deployable shell to Netlify before writing any feature code.

### 0.1 Repository & Scaffolding
- [x] Create GitHub repository: `portfolio` (private) — Used existing https://github.com/amills80/UXDportfolio.git
- [x] Scaffold with Vite: `npm create vite@latest portfolio -- --template react` — Manually created files for compatibility
- [x] Install core dependencies:
  ```bash
  npm install react-router-dom framer-motion @rive-app/react-canvas
  npm install -D netlify-cli
  ```
- [x] Install dev utilities:
  ```bash
  npm install -D eslint prettier eslint-plugin-react
  ```

### 0.2 Netlify Setup
- [ ] Connect GitHub repo to Netlify via the Netlify dashboard
- [x] Set build command: `npm run build`
- [x] Set publish directory: `dist`
- [x] Create `netlify.toml` at project root:
  ```toml
  [build]
    command = "npm run build"
    publish = "dist"
    functions = "netlify/functions"

  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```
- [x] Confirm auto-deploy pipeline is live with a placeholder `App.jsx` — Dev server runs successfully

### 0.3 Environment Variables
- [x] Create `.env.example` with documented variable names (no values)
- [ ] Add any needed variables to Netlify dashboard under Site Settings → Environment

**Deliverable:** A deployed, auto-deploying Netlify URL returning a React app shell.

---

## Phase 1 — Design Tokens & Global Styles

**Goal:** Establish the entire design system in CSS before any components are built. No hardcoded values anywhere after this phase.

### 1.1 CSS Custom Properties (`src/styles/tokens.css`)

Define all tokens drawn from `guidelines.md §3.2–3.4`:

**✅ COMPLETE** — All tokens defined:
- **Colors:** Primary (#4F46E5), Secondary (#EC4899), Background, Text, Surface, Muted, Border
- **Typography:** Display (Poppins) and Body (Inter) fonts with full type scale
- **Spacing:** 8pt base unit scale (space-1 through space-10)
- **Grid:** Mobile/desktop gutters and section padding
- **Effects:** Shadows, radii, transitions

### 1.2 Typography (`src/styles/typography.css`)
- [x] Import chosen fonts (Poppins + Inter from Google Fonts)
- [x] Define base `body` styles referencing `--font-body` and `--color-text`
- [x] Define `h1–h4` referencing `--font-display` and type scale tokens
- [x] Confirm line heights and letter spacing at each level
- [x] Link styles with hover and focus states

### 1.3 Reset & Global (`src/styles/reset.css`, `global.css`)
- [x] Apply modern CSS reset (box-sizing, margin, padding normalization)
- [x] Set `scroll-behavior: smooth` on `html`
- [x] Set `max-width: var(--container-max)` container utility class
- [x] Import all style sheets in `main.jsx` in order: reset → tokens → typography → global
- [x] Added accessibility utilities (.sr-only, .visually-hidden)
- [x] Remove animations for prefers-reduced-motion

**Deliverable:** ✅ A living style reference — **StyleGuide.jsx component** renders all tokens visibly. Accessible via the app (will be deleted before Phase 2).

---

## Phase 2 — Shared UI Primitives

**Goal:** Build all reusable UI components before assembling any page sections. No section component may be started until all primitives exist.

All primitives live in `src/components/ui/`. Each uses CSS Modules for scoped styles and references only token variables — no hardcoded values.

### 2.1 Button (`ui/Button/`)
Variants: `primary`, `secondary`, `ghost`
Sizes: `large`, `default`, `small`

Props interface:
```jsx
<Button variant="primary" size="large" href="" onClick={}>
  Label
</Button>
```
- [ ] Renders as `<a>` when `href` is provided, `<button>` otherwise
- [ ] Hover and focus states using token colors
- [ ] Active/pressed state with subtle scale transform
- [ ] Fully keyboard accessible (`focus-visible` ring)

### 2.2 Tag / Pill (`ui/Tag/`)
Variants: `default`, `designops`, `plg`, `b2b`, `hci`, `research`, `motion`

```jsx
<Tag variant="plg">PLG</Tag>
```
- [ ] Small, rounded (`--radius-pill`), uses `--color-secondary` base
- [ ] Variant overrides set a distinct accent where appropriate

### 2.3 Case Study Card (`ui/CaseStudyCard/`)
Props: `title`, `tagline`, `tags[]`, `href`, `comingSoon`

- [ ] Vertical card layout with surface background and card shadow
- [ ] Tag row using `<Tag>` primitives
- [ ] "View Study →" link — renders as external link or muted "Coming Soon" if `comingSoon` is true
- [ ] Hover state: elevation change (shadow deepens, subtle translateY lift via Framer Motion)

### 2.4 Experience Entry (`ui/ExperienceEntry/`)
Props: `company`, `role`, `dates`, `context`, `bullets[]`, `featured`

- [ ] Clean timeline-style layout: role + company (H4), dates right-aligned, context line in muted, bullets as `<ul>`
- [ ] `featured` prop adds a left-border accent in `--color-primary`

### 2.5 Section Wrapper (`ui/Section/`)
Props: `id`, `label`, `children`

- [ ] Consistent vertical padding using `--section-padding-mobile` / `--section-padding-desktop`
- [ ] Renders the section `id` for anchor scroll targeting
- [ ] Optional small `label` above heading (e.g., "About", "Experience") in `--text-label` style

**Deliverable:** All five primitives render correctly in isolation. Test each at 375px and 1440px before proceeding.

---

## Phase 3 — Navigation Component

**Goal:** Build the sticky nav with desktop and mobile (hamburger) states before any page sections, since it sits above all content.

Component: `src/components/Nav/`

### 3.1 Desktop Nav
- [ ] Fixed position, full width, `z-index` above all content
- [ ] Left: "Alan Mills" name/wordmark in `--font-display`
- [ ] Right: links — *About*, *Experience*, *Studies* — plus optional *Let's Talk* CTA button (ghost variant)
- [ ] Scrolled state: background fills in (use `useEffect` + scroll listener), subtle border-bottom appears
- [ ] Active link state driven by `useScrollSpy` hook — highlights the section currently in viewport

### 3.2 Mobile Nav (< 768px)
- [ ] Same fixed header, name left, hamburger icon (`☰`) right
- [ ] Hamburger tap toggles a full-width drawer/dropdown with stacked nav links
- [ ] Drawer animates open/close with Framer Motion (`AnimatePresence`)
- [ ] Clicking a nav link closes the drawer and smooth-scrolls to the section
- [ ] Trap focus inside open drawer for accessibility; close on `Escape` key

### 3.3 `useScrollSpy` Hook (`src/hooks/useScrollSpy.js`)
- [ ] Accepts array of section IDs
- [ ] Uses `IntersectionObserver` to return the currently active section ID
- [ ] Nav component uses this to apply active styles to the correct link

**Deliverable:** Nav is fully functional — sticky, responsive, keyboard-accessible, with active state tracking.

---

## Phase 4 — Page Sections (Build in Scroll Order)

Build each section sequentially. Each section is a self-contained component that composes UI primitives from Phase 2 and pulls copy from `src/data/copy.js` and data files.

---

### 4.1 Hero Section (`src/components/Hero/`)

**This section has two layers:** a Rive animation background and the foreground content.

#### Rive Animation Background
- [ ] Install `@rive-app/react-canvas` (already in Phase 0)
- [ ] Create a reserved mounting area that fills the full Hero section width and height
- [ ] Import and initialize the Rive canvas using `useRive` hook:
  ```jsx
  import { useRive } from '@rive-app/react-canvas';

  const { RiveComponent } = useRive({
    src: '/rive/hero-background.riv',
    autoplay: true,
    // stateMachines or animations to be configured once .riv file is provided
  });
  ```
- [ ] Position the `<RiveComponent>` as `position: absolute`, `inset: 0`, `z-index: 0`, `pointer-events: none` — so it is purely decorative and non-blocking
- [ ] Add a subtle overlay (`--color-bg` at low opacity) between Rive and foreground text to ensure contrast is maintained at all times
- [ ] **Note:** The `.riv` file slot is reserved at `public/rive/hero-background.riv`. Drop the file here when ready. No other code changes required.
- [ ] Respect `prefers-reduced-motion`: if reduced motion is preferred, pause the Rive animation (`useReducedMotion` hook)

#### Foreground Content (above Rive layer, `z-index: 1`)
- [ ] Name (H1): *Alan Mills*
- [ ] Title (H2): *Senior Product Designer & UX Strategist*
- [ ] Tagline (Body Large): *I make complex environments more people-friendly — bridging systems-thinking, DesignOps, and Product-Led Growth to design experiences that scale.*
- [ ] Sub-tagline (Caption): *7+ years in Ed-Tech, B2B SaaS, and Staffing · Saint Augustine, FL*
- [ ] CTA row: `<Button variant="primary" size="large">View My Work</Button>` + `<Button variant="ghost">Download Resume (PDF)</Button>`
- [ ] Professional photo: positioned right (desktop) or below tagline (mobile) — use `<img>` with `alt` text; placeholder during build
- [ ] Entrance animation: staggered fade-up using Framer Motion on name → title → tagline → CTAs

#### Layout
- Desktop: two-column — text left, photo right, Rive fills full section behind both
- Mobile: single column — Rive behind, text stacked, photo below tagline

---

### 4.2 About Section (`src/components/About/`)

Copy source: `guidelines.md §6.3`

- [ ] Section label: *About Me*
- [ ] Headline (H3): *A divergent thinker who maps intuitive, accessible solutions to business outcomes.*
- [ ] Three professional summary paragraphs (verbatim from `copy.js`)
- [ ] Personality paragraph (verbatim from `copy.js`)
- [ ] Skills tag row using `<Tag>` primitives: `DesignOps`, `PLG`, `HCI`, `Design Systems`, `WCAG / 508`, `UX Research`, `Behavioral Design`, `Full-Stack`, `Gamification`, `Motion Design`
- [ ] Desktop: two-column layout — summary paragraphs left, personality + tags right
- [ ] Mobile: single column, stacked
- [ ] Scroll-triggered entrance animation (Framer Motion `whileInView`)

---

### 4.3 Experience Section (`src/components/Experience/`)

Copy source: `guidelines.md §6.4` — data lives in `src/data/experience.js`

Data structure per entry:
```js
{
  company: '',
  role: '',
  dates: '',
  context: '',
  bullets: [],
  featured: boolean
}
```

- [ ] Section label: *Experience*
- [ ] Map over `experience.js` array, render one `<ExperienceEntry>` per job
- [ ] Jobs in order: Pragmatic Works → Beeline II → Beeline I → Independent Contractor
- [ ] Pragmatic Works entry uses `featured: true` (left-border accent)
- [ ] Desktop: entries read in a clean vertical timeline with generous spacing
- [ ] Mobile: single column, fully stacked
- [ ] Download Resume CTA below the job list:
  - `<Button variant="primary" size="large">⬇ Download Resume (PDF)</Button>`
  - Caption below: *Last updated March 2026*
  - Button links to Netlify Function endpoint: `/api/download-resume`

---

### 4.4 Studies Section (`src/components/Studies/`)

Copy source: `guidelines.md §6.5` — data lives in `src/data/caseStudies.js`

Data structure per card:
```js
{
  title: '',
  tagline: '',
  tags: [],
  href: '',
  comingSoon: boolean
}
```

- [ ] Section label: *Studies*
- [ ] Subhead: *Selected case studies — research-driven work with measurable outcomes.*
- [ ] Map over `caseStudies.js`, render one `<CaseStudyCard>` per entry
- [ ] Cards in order: B2B Retention (Beeline) → CertXP (Pragmatic Works) → Onboarding Redesign (coming soon)
- [ ] Desktop: 3-column CSS Grid
- [ ] Tablet (768px–1024px): 2-column grid
- [ ] Mobile: single column
- [ ] Card 3 renders with `comingSoon: true` — muted "Coming Soon" state, no broken link
- [ ] Scroll-triggered stagger animation on card entrance (Framer Motion, stagger delay per card)

---

### 4.5 Footer (`src/components/Footer/`)

Copy source: `guidelines.md §6.6`

- [ ] Headline: *Let's build something worth using.*
- [ ] Body: *Open to senior IC and lead design roles in Ed-Tech, B2B SaaS, and DesignOps-forward environments.*
- [ ] Email CTA: `aelonrench@yahoo.com` — renders as `mailto:` link styled as primary button
- [ ] Social icon links (accessible, `aria-label` on each):
  - LinkedIn: `https://www.linkedin.com/in/alan-mills-5295469/`
  - GitHub: `https://github.com/amills80`
  - IxDF: `https://www.interaction-design.org/members/alan-mills`
  - Portfolio reference: `https://amillsdesign.net`
- [ ] Copyright line: *© 2026 Alan Mills*
- [ ] Mobile: centered, stacked. Desktop: two-column — headline/body left, contact CTA + socials right

**Deliverable at end of Phase 4:** All five sections render correctly at 375px and 1440px with real copy, no placeholder text.

---

## Phase 5 — Netlify Function: Resume Download

**Goal:** Handle the resume PDF download server-side so the file is served cleanly without exposing a raw public URL.

File: `netlify/functions/download-resume.js`

```js
const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.join(__dirname, '../../public/resume.pdf');
  const fileBuffer = fs.readFileSync(filePath);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Alan-Mills-Resume.pdf"',
    },
    body: fileBuffer.toString('base64'),
    isBase64Encoded: true,
  };
};
```

- [ ] Place `resume.pdf` in `public/`
- [ ] Wire the download button in `Experience` to `fetch('/api/download-resume')` or direct `<a href="/api/download-resume">` anchor
- [ ] Test locally with `netlify dev`
- [ ] Confirm download works in production after deploy

---

## Phase 6 — Responsiveness & Accessibility Audit

**Goal:** Verify every section is correct at all breakpoints and meets WCAG AA — appropriate given the designer's own accessibility practice.

### 6.1 Breakpoint QA

Test every section at each breakpoint:

| Breakpoint | Width | Layout expectation |
|------------|-------|--------------------|
| Mobile | 375px | Single column, hamburger nav |
| Mobile L | 428px | Single column, hamburger nav |
| Tablet | 768px | 2-col grids, hamburger nav |
| Tablet L | 1024px | Full nav appears, 2–3 col grids |
| Desktop | 1280px | Full desktop layout |
| Wide | 1440px | Max container width, no overflow |

- [ ] All sections pass at every breakpoint above
- [ ] No horizontal scroll at any breakpoint
- [ ] Nav hamburger appears below 768px, full nav above
- [ ] Rive animation does not overflow or break layout at any size

### 6.2 Accessibility Checklist
- [ ] All interactive elements reachable and operable by keyboard
- [ ] Focus order is logical (top → bottom, left → right)
- [ ] All `<img>` elements have descriptive `alt` text
- [ ] All icon-only buttons have `aria-label`
- [ ] Color contrast passes WCAG AA (4.5:1 for body, 3:1 for large text) — test with browser dev tools or axe
- [ ] `prefers-reduced-motion` respected — Rive animation pauses, Framer Motion animations disabled
- [ ] Nav drawer traps focus when open, restores on close
- [ ] `<html lang="en">` set in `index.html`
- [ ] Semantic HTML throughout: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

---

## Phase 7 — Performance & Pre-Launch

**Goal:** Ensure fast load times and a clean Lighthouse score before going live.

### 7.1 Asset Optimization
- [ ] Compress professional photo (WebP, max 200KB)
- [ ] Self-host fonts or confirm Google Fonts loads with `font-display: swap`
- [ ] Confirm Rive `.riv` file size is reasonable (< 500KB recommended)
- [ ] Run `npm run build` and inspect bundle — no unexpectedly large chunks

### 7.2 Lighthouse Targets

| Category | Target |
|----------|--------|
| Performance | ≥ 90 |
| Accessibility | 100 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |

- [ ] Add `<meta>` description tag reflecting the hero tagline copy
- [ ] Add Open Graph tags (title, description, image) for social sharing
- [ ] Set `<title>Alan Mills — Senior Product Designer & UX Strategist</title>`
- [ ] Add `robots.txt` and `sitemap.xml` (Netlify plugin or manual)
- [ ] Confirm Netlify deploy has HTTPS enabled (default on Netlify)

### 7.3 Final Copy QA
- [ ] Every section matches copy verbatim from `guidelines.md §6`
- [ ] All links resolve: case study URLs, social links, email CTA
- [ ] Resume downloads correctly and file is named `Alan-Mills-Resume.pdf`
- [ ] No console errors in production build

---

## Phase 8 — Launch & Post-Launch

### 8.1 Custom Domain (if applicable)
- [ ] Add custom domain in Netlify dashboard
- [ ] Update DNS records at registrar
- [ ] Confirm HTTPS certificate provisioned

### 8.2 Rive File Integration (if not yet complete)
- [ ] Drop finalized `.riv` file into `public/rive/hero-background.riv`
- [ ] Configure `stateMachines` or `animations` parameter in `useRive` hook to match the file's exported state machine name
- [ ] QA animation at all breakpoints
- [ ] QA reduced-motion behavior

### 8.3 Analytics (Optional)
- [ ] Add Netlify Analytics or a privacy-respecting alternative (Plausible, Fathom)
- [ ] Confirm no GDPR/CCPA conflict with chosen tool

---

## Final Checklist — Ship Criteria

**Structure**
- [ ] All five sections present and in correct scroll order
- [ ] Sticky nav operational with active scroll-spy
- [ ] Hamburger nav functional on mobile

**Content**
- [ ] All copy matches `guidelines.md §6` verbatim
- [ ] No Lorem Ipsum, no bracket placeholders
- [ ] All links functional

**Design System**
- [ ] Zero hardcoded color or spacing values — all reference CSS tokens
- [ ] Font pairing applied consistently throughout

**Rive**
- [ ] Hero background Rive slot is wired and ready to accept `.riv` file
- [ ] Fallback renders gracefully if file is absent

**Performance & Accessibility**
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility = 100
- [ ] WCAG AA color contrast passing throughout
- [ ] `prefers-reduced-motion` respected

**Deployment**
- [ ] Auto-deploy from `main` branch on Netlify is live
- [ ] Resume download via Netlify Function works in production
- [ ] HTTPS confirmed

---

*End of Implementation Plan.*
