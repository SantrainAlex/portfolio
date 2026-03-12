---
description: "Task list for portfolio Alexis Santrain"
---

# Tasks: Site Portfolio — Alexis Santrain

**Input**: Design documents from `/specs/001-portfolio-site/`
**Prerequisites**: plan.md ✅ spec.md ✅ research.md ✅ data-model.md ✅ contracts/ ✅

**Tests**: Non demandés dans la spec — aucune tâche de test générée.

**Organisation**: Les tâches sont groupées par user story pour permettre une implémentation
et une validation indépendante de chaque story.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Peut tourner en parallèle (fichiers différents, pas de dépendances)
- **[Story]**: User story concernée (US1–US4)
- Chemins de fichiers absolus depuis la racine du repo

---

## Phase 1: Setup (Initialisation du projet)

**Purpose**: Scaffolding Vite + React + TypeScript + Tailwind, structure de dossiers

- [X] T001 Initialiser le projet Vite + React + TypeScript (`npm create vite@latest . -- --template react-ts`)
- [X] T002 Installer les dépendances : Tailwind CSS 3, PostCSS, Autoprefixer (`npm install -D tailwindcss postcss autoprefixer`)
- [X] T003 [P] Générer la config Tailwind et PostCSS (`npx tailwindcss init -p`) et créer `tailwind.config.ts`
- [X] T004 [P] Créer la structure de dossiers : `src/components/layout/`, `src/components/sections/`, `src/components/ui/`, `src/data/`, `src/hooks/`, `src/styles/`
- [X] T005 [P] Copier `CV.pdf` dans `public/CV.pdf` (asset statique pour téléchargement)
- [X] T006 [P] Ajouter un placeholder `public/photo.jpg` (TODO — à remplacer par la vraie photo)

---

## Phase 2: Fondation (Prérequis bloquants pour toutes les user stories)

**Purpose**: Tokens CSS, thème Tailwind, hook dark mode, navigation, layout global

⚠️ **CRITIQUE** : Aucune user story ne peut commencer avant la fin de cette phase.

- [X] T007 Configurer la palette et le dark mode dans `tailwind.config.ts` (couleurs brand 800/700/100, neutral 950/900/800, strategy: 'class')
- [X] T008 Créer les design tokens CSS dans `src/styles/globals.css` (variables `--color-bg`, `--color-text`, `--color-primary`, etc. pour light et `.dark`)
- [X] T009 [P] Créer les interfaces TypeScript partagées dans `src/types/index.ts` (Skill, SkillGroup, Experience, Education, Project, ContactInfo)
- [X] T010 Implémenter `src/hooks/useTheme.ts` (détection `prefers-color-scheme`, bascule manuelle, persistance `localStorage`, application classe `dark` sur `<html>`)
- [X] T011 Créer `src/components/ui/ThemeToggle.tsx` (bouton icône soleil/lune, utilise `useTheme`)
- [X] T012 Créer `src/components/layout/Header.tsx` (navbar sticky, liens d'ancre #hero #about #skills #experience #education #project #contact, ThemeToggle, menu hamburger mobile)
- [X] T013 [P] Créer `src/components/layout/Footer.tsx` (pied de page minimaliste — nom + année)
- [X] T014 Créer `src/App.tsx` avec les 7 sections en placeholders `<div id="section-id">` et intégrer Header + Footer
- [X] T015 Remplacer `index.html` : `lang="fr"`, `<title>`, `<meta name="description">`, Open Graph, favicon, script GA4 placeholder (`GA_MEASUREMENT_ID`)

**Checkpoint** : `npm run dev` → site vide mais navigable, dark mode fonctionnel sur http://localhost:5173

---

## Phase 3: User Story 1 — Premier contact recruiter (Priority: P1) 🎯 MVP

**Goal**: Un recruteur voit immédiatement nom, titre, catégories de compétences, photo et CTA
dans la zone visible au chargement.

**Independent Test**: Ouvrir le site sur 375 px et 1440 px — en moins de 10 secondes identifier
"Alexis Santrain", "Développeur Full Stack", 3 catégories de compétences et un bouton CTA.

### Implémentation pour User Story 1

- [X] T016 [P] [US1] Créer `src/components/sections/About.tsx` (section "À propos" — bio courte statique avec `TODO(CONTENT): valider avec Alexis`)
- [X] T017 [US1] Créer `src/components/sections/Hero.tsx` : photo (`<img src="/photo.jpg" alt="Photo de profil d'Alexis Santrain">`), titre "Développeur Full Stack", nom "Alexis Santrain", 3 badges de catégories (Frontend / Backend / Outils), bouton CTA `<a href="#contact">`
- [X] T018 [US1] Intégrer Hero et About dans `src/App.tsx` (remplacer les placeholders des sections #hero et #about)
- [X] T019 [US1] Vérifier le responsive Hero : tester breakpoints 375 px, 768 px, 1440 px — aucun overflow, texte lisible, photo proportionnelle

**Checkpoint** : Hero seul déployable comme MVP — le site communique l'essentiel du profil.

---

## Phase 4: User Story 2 — Exploration du parcours et des compétences (Priority: P2)

**Goal**: Le recruteur peut explorer les compétences détaillées, les 3 postes chez Tildeo et
les 3 diplômes Foreach Academy.

**Independent Test**: Naviguer vers #skills, #experience, #education et vérifier que les
données correspondent exactement au CV.pdf.

### Implémentation pour User Story 2

- [X] T020 [P] [US2] Créer `src/data/skills.ts` avec les données `skillGroups[]` (3 catégories, 10 technologies — données issues de `data-model.md`)
- [X] T021 [P] [US2] Créer `src/data/experiences.ts` avec les données `experiences[]` (3 postes Tildeo en ordre chronologique inversé)
- [X] T022 [P] [US2] Créer `src/data/education.ts` avec les données `educations[]` (3 diplômes Foreach Academy RNCP 5/6/7)
- [X] T023 [US2] Créer `src/components/ui/SkillBadge.tsx` (badge texte avec style par catégorie — props: `name: string`)
- [X] T024 [US2] Créer `src/components/ui/TimelineItem.tsx` (item de timeline avec trait de jonction — props: `entry`, `isLast?: boolean`)
- [X] T025 [US2] Créer `src/components/sections/Skills.tsx` (3 colonnes de badges groupées par catégorie, utilise `skillGroups` depuis `src/data/skills.ts`)
- [X] T026 [US2] Créer `src/components/sections/Experience.tsx` (timeline verticale, itère sur `experiences[]`, utilise `TimelineItem`)
- [X] T027 [US2] Créer `src/components/sections/Education.tsx` (liste des formations, itère sur `educations[]`, utilise `TimelineItem`)
- [X] T028 [US2] Intégrer Skills, Experience, Education dans `src/App.tsx` (remplacer placeholders #skills, #experience, #education)

**Checkpoint** : US1 + US2 fonctionnels — profil complet visible.

---

## Phase 5: User Story 3 — Prise de contact directe (Priority: P3)

**Goal**: Le recruteur peut envoyer un email, appeler, accéder au LinkedIn et télécharger le CV
sans friction depuis la section Contact.

**Independent Test**: Cliquer chaque lien de contact et vérifier : mailto ouvre le client mail,
tel ouvre le téléphone (mobile), LinkedIn s'ouvre dans un nouvel onglet, CV.pdf se télécharge.

### Implémentation pour User Story 3

- [X] T029 [US3] Créer `src/components/sections/Contact.tsx` avec les 4 éléments :
  - `<a href="mailto:santrain.alexis@hotmail.com">` avec libellé email
  - `<a href="tel:0783578279">` avec affichage "07-83-57-82-79"
  - `<a href="https://www.linkedin.com/in/alexis-santrain-749915200" target="_blank" rel="noopener noreferrer">` "LinkedIn"
  - `<a href="/CV.pdf" download="CV_Alexis_Santrain.pdf">` "Télécharger mon CV"
- [X] T030 [US3] Intégrer Contact dans `src/App.tsx` (remplacer placeholder #contact)
- [X] T031 [US3] Vérifier les liens de contact : tester mailto, tel (mobile), LinkedIn (nouvel onglet), téléchargement CV sur Chrome et Firefox

**Checkpoint** : US1 + US2 + US3 fonctionnels — site convertit les recruteurs.

---

## Phase 6: User Story 4 — Présentation du projet concret (Priority: P4)

**Goal**: Le recruteur comprend le projet BtoC bailleurs sociaux avec contexte, rôle d'Alexis
et technologies.

**Independent Test**: Naviguer vers #project — lire contexte, rôle et technologies du projet.

### Implémentation pour User Story 4

- [X] T032 [P] [US4] Créer `src/data/projects.ts` avec les données `projects[]` (1 projet BtoC bailleurs sociaux — données issues de `data-model.md`)
- [X] T033 [US4] Créer `src/components/sections/Project.tsx` (fiche projet : titre, contexte, rôle, période, liste de technologies en badges)
- [X] T034 [US4] Intégrer Project dans `src/App.tsx` (remplacer placeholder #project)

**Checkpoint** : Toutes les 4 user stories sont fonctionnelles — site complet.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Responsive final, accessibilité, SEO, performance, vérification constitution

- [X] T035 [P] Audit responsive complet : tester 320 px, 375 px, 768 px, 1280 px, 1440 px en modes clair et sombre sur chaque section
- [X] T036 [P] Audit accessibilité : vérifier tous les `alt` d'images en français, focus visible sur éléments interactifs, navigation clavier de A à Z, liens externes avec libellés explicites
- [X] T037 Vérifier les design tokens : inspecter DevTools — aucune couleur hardcodée, toutes les couleurs passent par `--color-*` ou classes Tailwind brand/neutral
- [X] T038 [P] Optimiser les images : convertir `photo.jpg` en WebP si > 100 Ko, ajouter `loading="eager"` sur la photo Hero et `loading="lazy"` sur les autres
- [X] T039 Run `npm run build` et vérifier la taille du bundle (JS < 200 Ko gzippé) — corriger les imports inutiles
- [X] T040 Valider le contenu final contre `CV.pdf` : relire chaque donnée affichée (noms de postes, dates, technologies, diplômes)
- [X] T041 Valider la bio "À propos" avec Alexis (remplacer `TODO(CONTENT)` dans `src/components/sections/About.tsx`)
- [ ] T042 [P] Remplacer `GA_MEASUREMENT_ID` dans `index.html` par le vrai identifiant GA4 fourni par Alexis
- [X] T043 [P] Vérifier les meta SEO dans `index.html` : title, description, Open Graph — tout en français

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Aucune dépendance — peut démarrer immédiatement
- **Foundational (Phase 2)**: Dépend de Phase 1 — **BLOQUE toutes les user stories**
- **US1 (Phase 3)**: Dépend de Phase 2 — priorité absolue (MVP)
- **US2 (Phase 4)**: Dépend de Phase 2 — peut démarrer en parallèle avec US3/US4 après Phase 2
- **US3 (Phase 5)**: Dépend de Phase 2 — peut démarrer en parallèle avec US2/US4
- **US4 (Phase 6)**: Dépend de Phase 2 — peut démarrer en parallèle avec US2/US3
- **Polish (Phase 7)**: Dépend de toutes les user stories souhaitées

### User Story Dependencies

- **US1 (P1)**: Seule dépendance = Phase 2 complète. Aucune dépendance entre stories.
- **US2 (P2)**: Seule dépendance = Phase 2 complète.
- **US3 (P3)**: Seule dépendance = Phase 2 complète (+ `public/CV.pdf` présent).
- **US4 (P4)**: Seule dépendance = Phase 2 complète.

### Within Each User Story

- `src/data/*.ts` → composants sections (les données avant les composants)
- Composants `ui/` → composants `sections/` (les atomes avant les molécules)
- Composants sections → intégration dans `App.tsx`

### Parallel Opportunities

- T003, T004, T005, T006 peuvent tourner en parallèle (Phase 1)
- T009, T011, T013 peuvent tourner en parallèle (Phase 2)
- T020, T021, T022 peuvent tourner en parallèle (Phase 4 — fichiers data indépendants)
- T032 peut tourner en parallèle avec les autres tâches Phase 6
- T035, T036, T038, T039, T042, T043 peuvent tourner en parallèle (Phase 7)
- US2, US3, US4 peuvent démarrer en parallèle après la fin de Phase 2

---

## Parallel Example: Phase 4 (User Story 2)

```bash
# Lancer en parallèle — aucune dépendance entre ces 3 fichiers :
Task T020: "Créer src/data/skills.ts"
Task T021: "Créer src/data/experiences.ts"
Task T022: "Créer src/data/education.ts"

# Puis lancer en parallèle — T023 et T024 n'ont pas de dépendances mutuelles :
Task T023: "Créer src/components/ui/SkillBadge.tsx"
Task T024: "Créer src/components/ui/TimelineItem.tsx"

# Puis lancer en parallèle — les sections dépendent des ui/ mais pas entre elles :
Task T025: "Créer src/components/sections/Skills.tsx"
Task T026: "Créer src/components/sections/Experience.tsx"
Task T027: "Créer src/components/sections/Education.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 uniquement)

1. Compléter Phase 1 : Setup (T001–T006)
2. Compléter Phase 2 : Fondation (T007–T015) — **CRITIQUE**
3. Compléter Phase 3 : User Story 1 — Hero (T016–T019)
4. **STOP et VALIDER** : Hero visible, nom/titre/techs en <10s, dark mode, responsive
5. Déployer sur Vercel pour validation par Alexis

### Livraison incrémentale

1. Setup + Fondation → navigation fonctionnelle
2. + US1 (Hero) → MVP déployable
3. + US2 (Skills/Experience/Education) → profil complet
4. + US3 (Contact) → site convertit les recruteurs
5. + US4 (Projet) → site finalisé
6. + Polish → production-ready

---

## Notes

- `[P]` = fichiers différents, pas de dépendances → exécution parallèle possible
- `[USn]` = user story concernée pour la traçabilité
- Aucune tâche de test n'est incluse (non demandé dans la spec)
- Les tâches T041 et T042 dépendent d'une action d'Alexis (bio + GA4 ID)
- Vérifier chaque donnée contre `CV.pdf` avant de marquer T040 comme complète
