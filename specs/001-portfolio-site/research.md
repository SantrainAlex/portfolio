# Research: Site Portfolio — Alexis Santrain

**Date**: 2026-03-11
**Branch**: `001-portfolio-site`

---

## 1. Choix du framework : React + Vite + TypeScript

**Decision**: React 18 avec Vite 5 et TypeScript 5.

**Rationale**:
- React est la technologie principale d'Alexis → le portfolio démontre directement sa stack.
- Vite offre un build ultra-rapide, un bundle optimisé (code splitting, tree shaking) et un
  démarrage dev en <1 s.
- TypeScript impose la rigueur sur les interfaces de données (compétences, expériences…).
- Alternatives rejetées :
  - **Next.js / Astro** : SSR non nécessaire pour un portfolio statique, surcoût de complexité.
  - **HTML/CSS/JS pur** : Maintenabilité moindre dès qu'on a ~15 composants ; pas représentatif
    de la stack React d'Alexis.
  - **Vue / Svelte** : Cohérence avec la stack métier d'Alexis → React choisi.

---

## 2. Styling : Tailwind CSS 3

**Decision**: Tailwind CSS 3 avec le plugin `@tailwindcss/typography` et dark mode via
`class` strategy.

**Rationale**:
- Utility-first → aucune collision de noms CSS, maintenable par un seul développeur.
- Dark mode `class` strategy + `useTheme` hook → bascule manuelle ET détection système
  (`prefers-color-scheme`) gérées sans librairie tierce.
- Design tokens (palette, spacing, typographie) centralisés dans `tailwind.config.ts`.
- Bundle : Tailwind purge les classes inutilisées → CSS final ~5–15 KB.
- Alternatives rejetées :
  - **CSS Modules** : Verbeux pour un site monopage ; dark mode plus complexe.
  - **CSS-in-JS (styled-components)** : Interdit par la constitution (Principe V).
  - **Bootstrap/MUI** : Trop opinionated, difficile à aligner sur la charte sombre/sobre.

**Palette Tailwind configurée** :

```ts
// tailwind.config.ts — couleurs personnalisées
colors: {
  brand: {
    900: '#0F2340',  // navy profond (dark bg)
    800: '#1E3A5F',  // bleu principal
    700: '#2A5080',  // bleu hover
    100: '#E8F0FA',  // bleu très clair (light bg accent)
  },
  neutral: {
    950: '#0D0D0D',  // fond dark mode
    900: '#1A1A1A',
    800: '#2D2D2D',  // card dark
    200: '#E5E5E5',  // border light
    100: '#F5F5F5',  // fond light mode
  }
}
```

---

## 3. Dark mode : `prefers-color-scheme` + bascule manuelle

**Decision**: Stratégie `class` Tailwind + hook `useTheme` avec `localStorage`.

**Pattern** :
```ts
// useTheme.ts
// 1. Lire la préférence stockée ou détecter le système
// 2. Appliquer la classe 'dark' sur <html>
// 3. Persister le choix dans localStorage
```

**Rationale** : Respecte la préférence système par défaut tout en permettant le choix
manuel. Pattern standard sans dépendance externe.

---

## 4. SEO pour SPA React

**Decision**: SEO statique dans `index.html` (pas de react-helmet ni SSR).

**Rationale** : Pour un portfolio personnel mono-auteur indexé sur son nom propre, le SEO
statique dans `index.html` est suffisant. Google indexe le contenu JS rendu côté client.

**Implémentation** :
```html
<!-- index.html -->
<html lang="fr">
<head>
  <title>Alexis Santrain — Développeur Full Stack</title>
  <meta name="description" content="Portfolio d'Alexis Santrain, Développeur Full Stack
    spécialisé React, React Native, PHP/Symfony. Basé dans le Nord de la France.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://[domaine-alexis]">
  <!-- Open Graph pour partage LinkedIn -->
  <meta property="og:title" content="Alexis Santrain — Développeur Full Stack">
  <meta property="og:description" content="…">
  <meta property="og:type" content="website">
</head>
```

---

## 5. Google Analytics 4

**Decision**: Script GA4 directement dans `index.html` (balise `<head>`).

**Rationale** : Intégration la plus légère possible, sans dépendance npm. Le measurement ID
est un placeholder (`GA_MEASUREMENT_ID`) pendant le développement.

```html
<!-- À activer avant déploiement avec le vrai G-XXXXXXXX -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 6. Navigation scroll-spy / ancres

**Decision**: Navigation par ancres HTML pures (`href="#section"`) + `scroll-behavior: smooth`
en CSS. Pas de bibliothèque de scroll-spy.

**Rationale** : Simple, performant, accessible. Le menu mobile utilise un drawer CSS/Tailwind.
Si un scroll-spy (highlight de la section active) est souhaité, `IntersectionObserver` natif
suffit sans librairie.

---

## 7. Hébergement

**Decision**: Vercel (déploiement automatique depuis GitHub).

**Rationale** :
- Gratuit pour les projets personnels.
- Déploiement automatique sur push `main`.
- HTTPS par défaut, CDN mondial → performance optimale.
- Alternative : GitHub Pages (plus manuel, moins de fonctionnalités).

---

## 8. Accessibilité — résumé des pratiques retenues

- Contraste vérifié avec l'outil Tailwind Contrast Checker (WCAG AA ≥ 4.5:1).
- Focus visible : `focus:ring-2 focus:ring-brand-800` sur tous les éléments interactifs.
- Navigation clavier : ordre `tabindex` naturel, aucun `tabindex > 0`.
- Images : `alt` descriptifs en français sur tous les `<img>`.
- Liens externes : `target="_blank"` accompagné de `rel="noopener noreferrer"` et libellé
  explicite (pas "cliquez ici").

---

## Résolution des NEEDS CLARIFICATION

Aucun `NEEDS CLARIFICATION` n'était présent dans la spec — aucune résolution nécessaire.

**Assumptions confirmées par la recherche** :
- ✅ React + Vite + TypeScript : cohérent avec la stack Alexis, performant, maintenable.
- ✅ Tailwind : dark mode natif, tokens centralisés, bundle minimal.
- ✅ SEO statique suffisant pour un portfolio personnel.
- ✅ Vercel : hébergement statique gratuit, automatisé.
