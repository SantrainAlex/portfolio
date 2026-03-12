# Implementation Plan: Site Portfolio — Alexis Santrain

**Branch**: `001-portfolio-site` | **Date**: 2026-03-11 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-portfolio-site/spec.md`

## Summary

Créer un site portfolio statique monopage en React + TypeScript (Vite) pour Alexis Santrain,
Développeur Full Stack. Le site présente son identité professionnelle, ses compétences, son
parcours chez Tildeo (2022–2026), ses formations Foreach Academy (RNCP 5/6/7), un projet
phare, et toutes ses coordonnées. L'ensemble est en français, responsive, avec dark mode,
SEO de base et Google Analytics 4.

## Technical Context

**Language/Version**: TypeScript 5.x / Node.js 20 LTS
**Primary Dependencies**: React 18, Vite 5, Tailwind CSS 3
**Storage**: N/A — site statique, données en fichiers TypeScript
**Testing**: Vitest (unitaire optionnel) + Lighthouse CI (performance/a11y)
**Target Platform**: Navigateurs modernes (Chrome, Firefox, Safari) — desktop + mobile
**Project Type**: Static web application (single-page)
**Performance Goals**: Lighthouse Performance mobile ≥ 85 ; chargement initial < 3 s (4G)
**Constraints**: Aucun backend ; liens `mailto:` et `tel:` pour le contact ; `CV.pdf` en
asset statique ; GA4 measurement ID fourni avant déploiement
**Scale/Scope**: 1 page, 7 sections, ~15 composants React, 1 seul développeur

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principe | Vérification | Statut |
|----------|-------------|--------|
| I. Recruiter-First | Hero above-fold avec nom, titre, techs, CTA — vérifié dans spec FR-001 | ✅ PASS |
| II. Content Authenticity | Toutes les données issues du CV.pdf ; texte "À propos" à valider | ✅ PASS |
| III. Design Consistency | Palette blue/grey définie dans tokens.css ; Tailwind dark mode ; WCAG AA | ✅ PASS |
| IV. Accessibility & SEO | `lang="fr"`, HTML sémantique, alt FR, GA4, meta SEO — FR-009/010/011 | ✅ PASS |
| V. Simplicity & Performance | React + Vite + Tailwind — stack minimal, pas de backend | ✅ PASS |

**Résultat** : Tous les gates passent — Phase 0 autorisée.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-site/
├── plan.md              # Ce fichier
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── data-contracts.md
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```text
public/
├── CV.pdf               # Asset statique — téléchargement direct
├── photo.jpg            # Photo de profil (à fournir par Alexis)
└── favicon.ico

src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navbar sticky avec liens d'ancre + ThemeToggle
│   │   └── Footer.tsx       # Pied de page minimal
│   ├── sections/
│   │   ├── Hero.tsx         # US1 — nom, titre, techs, photo, CTA
│   │   ├── About.tsx        # Courte bio
│   │   ├── Skills.tsx       # US2 — compétences par catégorie
│   │   ├── Experience.tsx   # US2 — timeline Tildeo
│   │   ├── Education.tsx    # US2 — formations Foreach Academy
│   │   ├── Project.tsx      # US4 — fiche projet BtoC
│   │   └── Contact.tsx      # US3 — email, tél, LinkedIn, CV
│   └── ui/
│       ├── ThemeToggle.tsx  # Bascule dark/light
│       ├── SkillBadge.tsx   # Badge de technologie
│       └── TimelineItem.tsx # Élément de timeline
├── data/
│   ├── skills.ts        # Données compétences (catégories + items)
│   ├── experiences.ts   # Données expériences professionnelles
│   ├── education.ts     # Données formations
│   └── projects.ts      # Données projet(s)
├── hooks/
│   └── useTheme.ts      # Gestion dark/light mode
├── styles/
│   └── globals.css      # Design tokens CSS + imports Tailwind
├── App.tsx              # Composition de toutes les sections
├── main.tsx             # Point d'entrée + GA4 init
└── vite-env.d.ts

index.html               # lang="fr", meta SEO, GA4 script
tailwind.config.ts       # Config dark mode + palette personnalisée
tsconfig.json
vite.config.ts
package.json
```

**Structure Decision** : Site statique monopage (Option 1 adaptée). Pas de routing multi-page
nécessaire — ancres HTML suffisent pour la navigation. Données séparées des composants dans
`src/data/` pour faciliter les mises à jour de contenu sans toucher aux composants.

## Complexity Tracking

> Aucune violation de la constitution — section non requise.
