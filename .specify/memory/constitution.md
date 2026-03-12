<!--
SYNC IMPACT REPORT
==================
Version change: (none) → 1.0.0 (initial constitution — all placeholders replaced)
Modified principles: N/A (first-time fill)
Added sections:
  - Core Principles (5 principles)
  - Tech Stack & Constraints
  - Development Workflow
  - Governance
Templates requiring updates:
  ✅ .specify/templates/plan-template.md — Constitution Check gates align with principles
  ✅ .specify/templates/spec-template.md — Scope & requirements align with project context
  ✅ .specify/templates/tasks-template.md — Task categories reflect project phases
Deferred TODOs:
  - RATIFICATION_DATE set to today (2026-03-11); no prior adoption date exists
  - FC_ASN_0325.docx (competency file) could not be parsed; content derived from CV.pdf
-->

# Portfolio Alexis Santrain — Constitution

## Core Principles

### I. Recruiter-First Communication (NON-NEGOTIABLE)

Every section, layout decision, and piece of copy MUST be evaluated by asking:
"Does this help a recruiter understand Alexis's role, stack, and value within 10 seconds?"

- The Hero section MUST display name, title ("Développeur Full Stack"), primary tech categories,
  and a clear call-to-action above the fold on all viewports.
- Contact details (email, phone, LinkedIn) MUST be reachable from any section via a persistent
  nav or sticky contact bar.
- No decorative element may obscure or delay the communication of professional identity.

**Rationale**: The sole audience is recruiters. Anything that slows or confuses that audience
directly undermines the site's purpose.

### II. Content Authenticity

All displayed content — names, dates, job titles, technologies, descriptions — MUST originate
from the provided source documents (CV.pdf, FC_ASN_0325.docx) or be explicitly supplied by
Alexis. Invented, inferred, or placeholder text MUST NOT appear in any production build.

- Reference documents: `CV.pdf` and `FC_ASN_0325.docx` in the repository root.
- If content is ambiguous or absent in source documents, mark with `TODO(CONTENT)` and flag for
  Alexis's review before shipping.
- The downloadable PDF CV MUST be the original `CV.pdf` file, not a regenerated version.

**Rationale**: A recruiter who cross-checks the site against a submitted CV must find exact
consistency. Discrepancies destroy trust.

### III. Design Consistency (Blue/Grey — Corporate Modern)

The visual language MUST remain sober, professional, and consistent throughout:

- **Palette**: Primary blue (`#1E3A5F` or equivalent), neutral greys, white backgrounds in light
  mode; deep navy/charcoal in dark mode. No warm tones, no playful colors.
- **Dark mode**: MUST be supported via CSS `prefers-color-scheme` and a manual toggle. All text
  contrast ratios MUST meet WCAG AA (4.5:1 minimum) in both modes.
- **Typography**: Clean sans-serif (e.g., Inter, Roboto, or system-ui). No display fonts.
- **Responsive**: Layout MUST be tested and usable at 320 px, 768 px, and 1280 px breakpoints.
- Design tokens (colors, spacing, typography) MUST be defined in a single source of truth
  (CSS variables or a theme config file) and never hardcoded in component styles.

**Rationale**: Inconsistent design signals a lack of attention to detail — the opposite of what
a developer's portfolio should convey.

### IV. Accessibility & SEO (FR)

- Language: the HTML `lang` attribute MUST be set to `fr`. All user-facing copy MUST be in French.
- SEO: Each page MUST have a unique `<title>` and `<meta name="description">` in French.
  Semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) MUST be used
  throughout.
- Images MUST have descriptive `alt` attributes in French.
- All interactive elements (links, buttons) MUST be keyboard-navigable and have visible focus
  indicators.
- Google Analytics MUST be integrated via a `<script>` tag or equivalent, with a valid
  measurement ID provided by Alexis before deployment.

**Rationale**: Recruiters often share links; good SEO ensures discoverability. Accessibility is
a professional baseline for any developer's site.

### V. Simplicity & Performance

- The site is a **static frontend** — no backend, no database, no authentication.
- Framework choice MUST favor minimal bundle size and fast initial load. React (Vite) or
  plain HTML/CSS/JS are preferred. No SSR framework is required unless a clear need emerges.
- Third-party dependencies MUST be justified; each addition increases maintenance burden.
- Lighthouse performance score on mobile MUST reach ≥ 85 before the site is considered
  production-ready.
- No lazy-loaded section should block the critical rendering path.

**Rationale**: A slow portfolio reflects poorly on the developer. Simplicity also means
the site remains maintainable by one person without complex tooling.

## Tech Stack & Constraints

**Frontend**: React (Vite) + TypeScript, or plain HTML/CSS/JS — decided at plan phase.
**Styling**: CSS Modules, Tailwind, or plain CSS with custom properties — no CSS-in-JS.
**Hosting**: Static hosting (Vercel, Netlify, or GitHub Pages).
**Assets**: `CV.pdf` served as a static asset for direct download.
**Analytics**: Google Analytics 4 (GA4) — measurement ID to be provided by Alexis.
**No backend**: All contact actions use `mailto:` and `tel:` links; no form submission endpoint.
**Sections (mandatory)**:
  1. Hero — name, title, main techs, photo, CTA
  2. À propos — short bio
  3. Compétences — categorized: Frontend / Backend / Outils & Méthodo
  4. Expériences — reverse chronological timeline (Tildeo 2022–2026)
  5. Formation — Foreach Academy RNCP 5 / 6 / 7
  6. Projet — BtoC multiplatform app for social landlords (bailleurs sociaux)
  7. Contact — email, phone, LinkedIn, CV download

## Development Workflow

- All work for this project MUST be tracked via the speckit workflow
  (spec → plan → tasks → implement).
- Each feature spec MUST reference this constitution in its Constitution Check section.
- Code MUST be committed in logical, descriptive increments. Commit messages MUST follow
  Conventional Commits (`feat:`, `fix:`, `style:`, `docs:`, `chore:`).
- Before marking any task complete, verify it does not violate Principles I–V above.
- Deployment to production MUST only occur after a manual visual review at mobile (375 px)
  and desktop (1440 px) widths, in both light and dark modes.

## Governance

This constitution supersedes all informal decisions made during development. Any deviation from
the principles above MUST be documented as a Complexity Tracking entry in the relevant plan.md,
with explicit justification.

**Amendment procedure**:
1. Identify the principle or section to change.
2. Increment the version (MAJOR for principle removal/redefinition, MINOR for new section,
   PATCH for wording/clarification).
3. Update `LAST_AMENDED_DATE` to the date of the change.
4. Propagate changes to dependent templates as outlined in the Sync Impact Report format.

**Compliance review**: Every speckit plan generation MUST include a Constitution Check section
verifying alignment with Principles I–V.

**Version**: 1.0.0 | **Ratified**: 2026-03-11 | **Last Amended**: 2026-03-11
