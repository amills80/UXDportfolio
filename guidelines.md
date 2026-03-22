# Figma Make: Senior UX/Product Designer Portfolio

### Session Guidelines & Sequential Implementation Plan

---

## Overview

This document drives a **Figma Make** session to generate a fully mobile-responsive, single-page portfolio design file for **Alan Mills**, Senior Product Designer & UX Strategist. The output must reflect senior-level design authority, strategic expertise, and a human-centered personality. **Section 6 contains finalized, production-ready copy** drawn directly from Alan's resume and portfolio — use it verbatim. Do not substitute Lorem Ipsum.

---

## 1. Designer Profile & Strategic Context

### Who This Is For

A **Senior UX/Product Designer** targeting hiring managers, recruiters, and design/product leadership at tech companies in **DesignOps, PLG, Ed-Tech, and B2B SaaS/Staffing** verticals.

### Core Specializations

- **DesignOps (D/Ops):** Standardizing workflows, improving team efficiency, scaling design impact
- **Product-Led Growth (PLG):** Experiences that drive organic adoption, activation, and retention
- **Human-Computer Interaction (HCI):** Theory applied to practical problem-solving
- **Technical Fluency:** Full-Stack Developer background enabling empathetic design for internal tools and external products
- **Strategic Collaboration:** Divergent thinking, effective problem framing

### Key Messages to Reinforce Visually

1. _"I bridge the gap"_ — strategy meets pixel-perfect execution, grounded in technical reality
2. _"I design for scale"_ — operational excellence and business impact
3. _"I am a strategic partner"_ — innovative, divergent problem-solver

---

## 2. Site Architecture

A **single, scrollable page** with five discrete sections in this exact order:

| #   | Section             | Primary Purpose                                     |
| --- | ------------------- | --------------------------------------------------- |
| 0   | Sticky Navigation   | Persistent wayfinding on scroll                     |
| 1   | Hero / Introduction | Immediate, attention-grabbing summary               |
| 2   | About Me            | Technical + strategic depth with personal warmth    |
| 3   | Experience          | Chronological work history with resume download CTA |
| 4   | Studies             | Case study grid showcasing process and results      |

---

## 3. Design System Specifications

### 3.1 Visual Tone

- **Adjectives:** Professional, strategic, efficient, human-centered
- **Avoid:** Excessive visual noise, generic AI aesthetics, overused purple gradients
- **Target Feel:** Editorial-meets-tech — clean and modern with a distinct, memorable point of view

### 3.2 Color Palette (Define in Figma Styles)

| Role                | Usage                                                    |
| ------------------- | -------------------------------------------------------- |
| `--color-primary`   | CTAs, active nav links, accent highlights                |
| `--color-secondary` | Supporting tags, hover states, subtle backgrounds        |
| `--color-bg`        | Page background (neutral, light or dark — commit to one) |
| `--color-text`      | Body copy (high contrast against `--color-bg`)           |
| `--color-surface`   | Cards, section containers                                |

> **Palette guidance:** Use a dominant neutral base with one **strong, saturated primary accent**. Specify all colors using **OKLCH color space** for perceptual uniformity and modern browser support. High contrast is non-negotiable for readability.

> **OKLCH Color Specifications:**
>
> - **Primary Accent:** `oklch(0.55 0.22 250)` — Vibrant electric blue with high chroma for boldness and energy
> - **Primary Hover:** `oklch(0.48 0.22 250)` — Darker variant for interactive states
> - **Primary Light:** `oklch(0.95 0.05 250)` — Subtle tinted background
> - **Secondary:** `oklch(0.55 0.18 290)` — Complementary purple-blue for supporting elements
> - **Secondary Light:** `oklch(0.96 0.02 290)` — Subtle secondary background
> - **Neutral Base (Text):** `oklch(0.15 0.01 250)` — Near-black with slight blue tint
> - **Neutral 500 (Text Muted):** `oklch(0.55 0.02 250)` — Mid-tone gray for secondary text
> - **Neutral 200 (Border):** `oklch(0.90 0.01 250)` — Light gray for borders and dividers
> - **Neutral 50 (Background Alt):** `oklch(0.98 0.005 250)` — Off-white for alternating sections
> - **Background:** `oklch(1 0 0)` — Pure white
> - **Surface:** `oklch(1 0 0)` — Pure white for cards

### 3.3 Typography

- **Display / Headlines:** Distinctive, characterful sans-serif — avoid Inter, Roboto, Arial, and Space Grotesk
- **Body:** Refined, highly legible companion font
- **Type scale:** Establish H1–H4, body, caption, and label sizes as shared Figma text styles

### 3.4 Spacing & Grid

- **Mobile minimum (320px):** Single column, 16px gutters, 40px section padding. No element may produce horizontal overflow at 320px viewport width. Use `clamp()` or fluid values where text or containers risk overflow.
- **Mobile reference (375px):** Single column, 16px gutters, 48px section padding — primary mobile design target.
- **Tablet (768px):** Single column increasing to 2-col where appropriate, 24px gutters, 64px section padding
- **Desktop (1440px):** 12-column grid, 24px gutters, 96px section padding
- **Component spacing:** Define an 8pt base unit; use multiples throughout

---

## 4. Component Library (Create Before Page Layouts)

All components must be created as **Figma Components** with variants before building page frames.

### 4.1 Navigation Bar

- **Variants:** `Desktop / Default`, `Desktop / Scrolled`, `Mobile / Closed`, `Mobile / Open`
- **Desktop:** Horizontal nav with links — _About Me_, _Experience_, _Studies_ — plus designer name/logo left-aligned
- **Mobile:** Designer name left-aligned + three-line hamburger icon right-aligned; expanded state shows stacked nav links as a full-width dropdown or drawer
- **Behavior note:** Sticky on scroll (annotate as fixed position)

### 4.2 Case Study Card

- **Variants:** `Default`, `Hover`
- **Slots:** Title, tagline (1 sentence), tag row (up to 3 tags), "View Study →" link
- **Layout:** Vertical card with clear visual hierarchy

### 4.3 Experience Entry

- **Variants:** `Standard`, `Featured`
- **Slots:** Company name, role title, date range, 1–2 bullet points
- **Layout:** Timeline or card-based, horizontally scannable on desktop

### 4.4 Tag / Pill

- **Variants:** `Default`, `DesignOps`, `PLG`, `B2B`, `Mobile UX`, `HCI`
- Small, rounded label used across case study cards and skills sections

### 4.5 Button

- **Variants:** `Primary`, `Secondary`, `Ghost`
- **Sizes:** `Large`, `Default`, `Small`
- Used for: "Download Resume (PDF)", "View Study", and any section CTAs

### 4.6 Photo Placeholder

- **Size variants:** `Hero (large)`, `About (medium)`
- Styled placeholder block with aspect ratio locked; label reads _[Professional Photo]_

---

## 5. Sequential Implementation Plan

Follow these steps **in order**. Do not begin a later step until the prior step is complete.

---

### STEP 1 — Establish Design Tokens & Styles

**Goal:** Create the foundational design system before any UI is drawn.

- [ ] Define all **color styles** (`primary`, `secondary`, `bg`, `text`, `surface`, `muted`)
- [ ] Define all **text styles** (H1, H2, H3, H4, Body Large, Body, Caption, Label, Tag)
- [ ] Define all **effect styles** (card shadow, elevated shadow, subtle overlay)
- [ ] Set up an **8pt spacing frame** as a reference component
- [ ] Document the chosen **font pairing** in a style reference frame

**Deliverable:** A `🎨 Design Tokens` page in the Figma file containing all styles, color swatches, and type specimens.

---

### STEP 2 — Build Core Components

**Goal:** Construct all reusable components before assembling page layouts.

- [ ] Build **Navigation Bar** component with all four variants (desktop default, desktop scrolled, mobile closed, mobile open/hamburger expanded)
- [ ] Build **Button** component with all variants and sizes
- [ ] Build **Tag/Pill** component with all variants
- [ ] Build **Experience Entry** component with Standard and Featured variants
- [ ] Build **Case Study Card** component with Default and Hover variants
- [ ] Build **Photo Placeholder** component in Hero and About sizes
- [ ] Group all components on a `🧩 Components` page

**Deliverable:** A `🧩 Components` page with all components organized in clearly labeled frames.

---

### STEP 3 — Design Mobile Layout (375px reference / 320px minimum)

**Goal:** Build the complete single-page portfolio optimized for mobile. The layout must be fully functional and non-overflowing at **320px** (minimum supported width) and look polished at the **375px** reference width.

Frame sizes: **320px minimum · 375px reference · auto height (scrollable)**

Build each section in sequence:

#### 3a — Navigation (Mobile / Closed state)

- Sticky header, hamburger icon, designer name

#### 3b — Hero Section

- Designer name (H1)
- Senior title (H2)
- Tagline: _"Senior Product Designer | Scaling impact through DesignOps and Product-Led Growth"_
- `[Professional Photo]` placeholder (large, full-width or portrait crop)
- Optional: brief CTA button (_View My Work_)

#### 3c — About Me Section

- Section heading: _About Me_
- **Professional Summary block:** 2–3 paragraphs of placeholder text covering Ed-Tech, B2B Staffing, D/Ops, PLG, HCI, and Full-Stack background
- **Personality block:** 1 paragraph of warm, friendly placeholder text (e.g., _"When I'm not optimizing design workflows, I'm usually [Placeholder Hobby]..."_)
- Tag row: relevant skill/specialization tags

#### 3d — Experience Section

- Section heading: _Experience_
- **Job 1 (Most Recent):** `[Company Name]` · `[Senior UX/Product Designer]` · `[Dates]` — 2 bullets on D/Ops or strategy impact
- **Job 2:** `[Company Name]` · `[Product Designer]` · `[Dates]` — 2 bullets on PLG or HCI application
- **Job 3 (Earlier/Dev):** `[Company Name]` · `[Full-Stack Developer]` · `[Dates]` — 1 bullet on internal tooling or developer empathy
- **Download Resume CTA:** Prominent `Primary` button labeled _"Download Resume (PDF)"_ — place directly below or adjacent to the job list

#### 3e — Studies Section

- Section heading: _Studies_
- **2-column card grid** (single column if space is tight at 375px)
- Minimum 3 Case Study Cards:
  - Card 1: _"Optimizing Onboarding for 30% Activation Lift"_ · B2B Staffing, PLG · _"View Study →"_
  - Card 2: _"Scaling a DesignOps Framework Across 4 Teams"_ · DesignOps, B2B SaaS · _"View Study →"_
  - Card 3: _"Redesigning the Educator Dashboard"_ · Ed-Tech, HCI, Mobile UX · _"View Study →"_

**Deliverable:** A complete `📱 Mobile (375px)` page representing the full scrollable portfolio.

---

### STEP 4 — Design Desktop Layout (1440px)

**Goal:** Adapt the mobile layout to a full desktop viewport, taking advantage of wider screen real estate.

Frame size: **1440 × auto (scrollable)**

Apply these layout upgrades relative to mobile:

#### 4a — Navigation (Desktop / Default state)

- Full horizontal nav bar with all links visible; no hamburger

#### 4b — Hero Section

- Two-column layout: text/headline left, professional photo right (or offset/overlapping for visual interest)
- Larger type scale; more generous vertical padding

#### 4c — About Me Section

- Two-column layout: Professional Summary left, Personality + tags right (or stacked with wider measure)

#### 4d — Experience Section

- Timeline or card layout that reads horizontally
- Download Resume CTA remains prominent; position to the right of the job list or in a sticky sidebar column

#### 4e — Studies Section

- **3-column card grid** at full desktop width
- Cards have equal height; hover state shows elevation change

**Deliverable:** A complete `🖥 Desktop (1440px)` page representing the full scrollable portfolio.

---

### STEP 5 — Annotation & Handoff Prep

**Goal:** Ensure the file is developer-ready and clearly communicates intent.

- [ ] Annotate the **sticky navigation** behavior on both frames (fixed position, z-index note)
- [ ] Annotate the **hamburger menu** interaction on mobile (tap → reveals nav drawer/dropdown)
- [ ] Annotate **"Download Resume (PDF)"** as an anchor link to a PDF asset (placeholder URL)
- [ ] Annotate **"View Study →"** links as placeholder routes (e.g., `/case-studies/study-1`)
- [ ] Add a **Responsive Behavior Notes** frame documenting breakpoints:
  - `< 320px` → Not supported (below minimum)
  - `320px–767px` → Mobile layout, hamburger nav, single column, 16px gutters
  - `768px–1023px` → Tablet (2-col where appropriate, 24px gutters)
  - `≥ 1024px` → Desktop layout, full horizontal nav

**Deliverable:** Annotations embedded in both layout pages; a `📋 Handoff Notes` page with breakpoint and interaction documentation.

---

### STEP 6 — Final Review Checklist

Before closing the session, verify all items are complete:

**Structure**

- [ ] All five sections present on both mobile and desktop frames
- [ ] Section order matches spec: Hero → About Me → Experience → Studies
- [ ] Sticky nav present on both frames with correct variants applied

**Content**

- [ ] All text pulled from Section 6 finalized copy (no Lorem Ipsum, no improvised placeholders)
- [ ] Professional photo placeholder is present in Hero section
- [ ] "Download Resume (PDF)" button is visible and prominent
- [ ] Minimum 3 case study cards present with titles, taglines, tags, and "View Study" links

**Design System**

- [ ] All components pulled from the Component Library (no detached instances)
- [ ] All colors reference Figma color styles (no hardcoded hex values)
- [ ] All text references Figma text styles (no manual overrides)

**Responsiveness**

- [ ] Mobile layout renders correctly at **320px** minimum width (no horizontal overflow)
- [ ] Mobile layout is polished at 375px reference width
- [ ] Desktop layout is complete at 1440px width
- [ ] Navigation hamburger state designed for mobile

**File Organization**

- [ ] `🎨 Design Tokens` page
- [ ] `🧩 Components` page
- [ ] `📱 Mobile (375px)` page
- [ ] `🖥 Desktop (1440px)` page
- [ ] `📋 Handoff Notes` page

---

## 6. Finalized Copy — Ready to Place in Design

All copy below is written and approved. Use it verbatim across both mobile and desktop frames. Do not substitute Lorem Ipsum.

---

### 6.1 Navigation

| Element            | Copy           |
| ------------------ | -------------- |
| Logo / Name        | **Alan Mills** |
| Nav Link 1         | About          |
| Nav Link 2         | Experience     |
| Nav Link 3         | Studies        |
| Nav CTA (optional) | Let's Talk     |

---

### 6.2 Hero Section

**Name (H1)**

> Alan Mills

**Title (H2)**

> Senior Product Designer & UX Strategist

**Tagline (Body Large)**

> I make complex environments more people-friendly — bridging systems-thinking, DesignOps, and Product-Led Growth to design experiences that scale.

**Sub-tagline / Supporting line (optional, smaller caption)**

> 7+ years in Ed-Tech, B2B SaaS, and Staffing · Saint Augustine, FL

**Primary CTA Button**

> View My Work

**Secondary / Ghost CTA**

> Download Resume (PDF)

---

### 6.3 About Me Section

**Section Label**

> About Me

**Headline (H3)**

> A divergent thinker who maps intuitive, accessible solutions to business outcomes.

**Professional Summary — Paragraph 1**

> I'm a Senior Product Designer and UX Strategist with 7+ years of experience designing digital products in productivity software, Ed-Tech, and B2B SaaS. I specialize in finding the barriers that keep teams and users from reaching their potential — and then systematically removing them. From overhauling onboarding flows that drove a 200%+ lift in monthly activation, to redesigning group admin experiences that improved B2B retention and MRR, my work is grounded in research and measured by outcomes.

**Professional Summary — Paragraph 2**

> I bring a rare combination of depth and breadth to every product team. My DesignOps practice has produced 508-compliant design systems, reduced UI bugs by 40%, and cut design-to-dev friction through rigorous documentation, acceptance criteria, and AI-assisted UXR workflows. My background in Product-Led Growth means I'm always designing with activation, retention, and expansion in mind — not just aesthetics.

**Professional Summary — Paragraph 3**

> What makes me different is where I started. Nearly a decade as a Full-Stack Developer — building PHP, Vue.js, and headless applications across GIS, civil engineering, and fin-tech — gave me an insider's understanding of how products are actually built. I design with implementation in mind, communicate in the language of engineers, and bring a whole-product lens to every problem. Pair that with a foundation in HCI, behavioral design, and equity-driven research, and you get a designer who can hold the strategy and the pixel at the same time.

**Personality / Human Paragraph**

> Outside of design, I'm a Music Engineering grad (University of Miami) who still finds the relationship between structure and improvisation endlessly fascinating — which probably explains why I gravitate toward design systems _and_ divergent thinking. I believe the best design comes from genuine curiosity about people, and I try to bring that same openness to every collaboration, every critique, and every problem worth solving.

**Skills Tag Row**

> `DesignOps` `PLG` `HCI` `Design Systems` `WCAG / 508` `UX Research` `Behavioral Design` `Full-Stack` `Gamification` `Motion Design`

---

### 6.4 Experience Section

**Section Label**

> Experience

---

#### Job 1 — Most Recent

| Field        | Copy                                                                       |
| ------------ | -------------------------------------------------------------------------- |
| Company      | Pragmatic Works                                                            |
| Role         | Senior Product Designer                                                    |
| Dates        | May 2023 – Present                                                         |
| Context line | B2B / B2C Ed-Tech platform serving corporate and vocational school markets |

**Bullets (select 3–4 for layout):**

- Drove a 200%+ increase in monthly activation by identifying flow barriers through UXR and redesigning the end-to-end onboarding experience
- Saved over 6 months of dev-labor costs by invalidating non-impactful stakeholder interventions through strategic KPI mapping and rapid research
- Increased monthly subscription retention by 32% through targeted, user-driven re-engagement campaigns
- Founded CertXP — a gamified exam prep tool that augmented the platform's value proposition and contributed to a 62% increase in conversions
- Championed DesignOps by advocating adoption of Codex with Figma MCP, accelerating design-to-code delivery speed and accuracy
- Maintained a 508-compliant design system and token structure, reducing UI bugs through accessibility annotations and developer-ready handoff documentation

---

#### Job 2

| Field        | Copy                                                 |
| ------------ | ---------------------------------------------------- |
| Company      | Beeline                                              |
| Role         | UX Designer II                                       |
| Dates        | January 2022 – May 2023                              |
| Context line | Enterprise / SaaS platforms in staffing and fin-tech |

**Bullets (select 3–4 for layout):**

- Achieved full product adoption for hiring managers in Beeline's HMX by resolving the platform's largest barrier to value — information scent in customizable environments
- Enhanced analytics communication efficiency by 150% by embedding user tracking workflows directly into design artifacts and handoff documentation
- Reduced UI bugs by 40% through cross-functional DesignOps improvements and structured design review practices
- Secured Beeline's first WCAG AA VPAT, directly improving enterprise adoption and compliance positioning
- Improved team efficiency by 20%+ by persuading leadership to adopt Lean UX and iterative practices within an agile development environment

---

#### Job 3

| Field        | Copy                                                                     |
| ------------ | ------------------------------------------------------------------------ |
| Company      | Beeline                                                                  |
| Role         | UX Designer I                                                            |
| Dates        | April 2018 – January 2022                                                |
| Context line | Small design trio supporting internal needs and enterprise SaaS products |

**Bullets (select 2–3 for layout):**

- Built and maintained Beeline's first two design systems, establishing the foundational component libraries the product team still uses today
- Created the organization's first UX research repository — including user personas, empathy maps, and journey maps — from qualitative and ethnographic research
- Supported internal teams with full-stack prototype development and R&D experiments, reducing bottom-line tooling costs

---

#### Job 4 (Foundational / Dev Background)

| Field        | Copy                                                        |
| ------------ | ----------------------------------------------------------- |
| Company      | Independent Contractor                                      |
| Role         | Full-Stack Developer                                        |
| Dates        | March 2014 – March 2022                                     |
| Context line | Small dev teams across GIS, civil engineering, and fin-tech |

**Bullets (select 1–2 for layout):**

- Delivered full-stack development of PHP, Vue.js, NuxtJS, and headless WordPress applications, building fluency in the constraints designers hand work off into
- Improved product delivery speed by 150% through integration of build automation tools, data mapping pipelines, and cloud-based API workflows

---

**Download Resume CTA (Button — Primary, large)**

> ⬇ Download Resume (PDF)

**CTA supporting micro-copy (optional caption below button)**

> Last updated March 2026

---

### 6.5 Studies Section

**Section Label**

> Studies

**Section Intro (optional subhead)**

> Selected case studies — research-driven work with measurable outcomes.

---

#### Card 1

| Field   | Copy                                                                                                                    |
| ------- | ----------------------------------------------------------------------------------------------------------------------- |
| Title   | Supporting B2B Retention and SUS by Enhancing Group Admin Experience                                                    |
| Tagline | UXR revealed where larger customers lost value. An incremental redesign improved satisfaction, retention, and MRR.      |
| Tags    | `B2B SaaS` `UX Research` `DesignOps`                                                                                    |
| CTA     | View Study →                                                                                                            |
| Link    | https://www.amillsdesign.net/post/supporting-b2b-retention-and-satisfaction-ratings-by-enhancing-group-admin-experience |

---

#### Card 2

| Field   | Copy                                                                                                              |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| Title   | Augmenting Value Proposition with CertXP — 62% Increase in Conversions                                            |
| Tagline | By tapping into why users consume training content, we identified exam prep as a market opportunity and built it. |
| Tags    | `Ed-Tech` `PLG` `Gamification` `Full-Stack UX`                                                                    |
| CTA     | View Study →                                                                                                      |
| Link    | https://www.amillsdesign.net/post/augmenting-value-proposition-with-certxp                                        |

---

#### Card 3 _(reserve slot — copy to be added)_

| Field   | Copy                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------- |
| Title   | Driving a 200%+ Activation Lift Through Onboarding Redesign                                                               |
| Tagline | Identified friction in the first-run experience through moderated UXR and redesigned the full activation flow end-to-end. |
| Tags    | `PLG` `Ed-Tech` `Behavioral Design` `UX Research`                                                                         |
| CTA     | View Study →                                                                                                              |
| Link    | _(coming soon — use placeholder anchor)_                                                                                  |

---

### 6.6 Footer / Contact Area (Optional Section)

**Headline**

> Let's build something people want to use.

**Body**

> Open to senior IC and lead design roles in Ed-Tech, B2B SaaS, and DesignOps-forward environments.

**Contact CTA**

> aelonrench@yahoo.com

**Social Links**

- LinkedIn: https://www.linkedin.com/in/alan-mills-design/
- GitHub: https://github.com/amills80
- Portfolio: https://amillsdesign.net

---

_End of Guidelines — Begin Figma Make session at Step 1._