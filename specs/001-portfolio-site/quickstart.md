# Quickstart: Site Portfolio — Alexis Santrain

**Date**: 2026-03-11
**Branch**: `001-portfolio-site`

---

## Prérequis

- Node.js 20 LTS (`node -v` → v20.x.x)
- npm 10+ ou pnpm 9+
- Git

---

## Installation

```bash
# 1. Cloner et se placer dans le projet
git clone <repo-url> portfolio
cd portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
# → http://localhost:5173
```

---

## Commandes disponibles

```bash
npm run dev        # Serveur de développement avec HMR
npm run build      # Build de production (dist/)
npm run preview    # Prévisualiser le build de production
npm run lint       # ESLint + TypeScript check
```

---

## Avant le déploiement — checklist obligatoire

- [ ] **Photo de profil** : placer `photo.jpg` (ou `photo.webp`) dans `public/`
- [ ] **CV.pdf** : vérifier que `public/CV.pdf` est le fichier original
- [ ] **GA4 Measurement ID** : remplacer `GA_MEASUREMENT_ID` dans `index.html`
  par le vrai identifiant (format `G-XXXXXXXXXX`)
- [ ] **Bio "À propos"** : valider le texte dans `src/components/sections/About.tsx`
  avec Alexis
- [ ] **Test Lighthouse** : score Performance ≥ 85 et Accessibility ≥ 90 sur mobile
- [ ] **Test visuel** : 375 px, 768 px, 1440 px — modes clair ET sombre
- [ ] **Test contacts** : cliquer email, tel, LinkedIn, téléchargement CV

---

## Déploiement sur Vercel

```bash
# Option A : via GitHub (recommandé)
# 1. Pousser la branche main sur GitHub
# 2. Connecter le repo à vercel.com (import project)
# 3. Vercel détecte automatiquement Vite → build command: npm run build

# Option B : CLI Vercel
npm i -g vercel
vercel --prod
```

---

## Structure des fichiers de données

Pour mettre à jour le contenu (sans toucher aux composants) :

| Contenu | Fichier |
|---------|---------|
| Compétences | `src/data/skills.ts` |
| Expériences | `src/data/experiences.ts` |
| Formations | `src/data/education.ts` |
| Projet | `src/data/projects.ts` |
| Contact | `src/components/sections/Contact.tsx` (inline) |

---

## Dark mode

Le mode sombre est activé automatiquement si le système de l'utilisateur est en dark mode.
Il peut aussi être basculé manuellement via le bouton dans la navbar.
Le choix est mémorisé dans `localStorage` (`theme: 'dark' | 'light'`).

---

## Validation de la constitution (post-implémentation)

Avant de merger sur `main`, vérifier chaque principe :

| Principe | Commande / Action |
|----------|-------------------|
| I. Recruiter-First | Ouvrir le site — nom/titre/techs visibles en <10s |
| II. Content Authenticity | Comparer chaque donnée avec `CV.pdf` |
| III. Design Consistency | Inspecter les tokens CSS dans DevTools |
| IV. SEO & A11y | `npm run lighthouse` ou PageSpeed Insights |
| V. Simplicity | `npm run build` → vérifier la taille du bundle |
