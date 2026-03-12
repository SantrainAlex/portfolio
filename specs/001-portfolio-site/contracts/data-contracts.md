# Data Contracts: Site Portfolio — Alexis Santrain

**Date**: 2026-03-11
**Branch**: `001-portfolio-site`

Pour un site statique, les "contrats" sont les interfaces TypeScript et les props des
composants. Ils garantissent la cohérence entre les données (`src/data/`) et l'affichage
(`src/components/`).

---

## Contrats de composants (Props)

### `<Hero />`

```ts
// Aucune prop — données statiques codées directement
// Affiche : nom, titre, 3 catégories de compétences, photo, CTA
interface HeroProps {
  // Pas de props — contenu fixe (Alexis Santrain)
}
```

### `<Skills skillGroups={} />`

```ts
interface SkillsProps {
  skillGroups: SkillGroup[];  // Tableau des groupes de compétences
}
// Contrat : au moins 1 groupe, chaque groupe contient au moins 1 skill
// Contrainte : les 3 catégories (frontend, backend, tools) DOIVENT être présentes
```

### `<Experience experiences={} />`

```ts
interface ExperienceProps {
  experiences: Experience[];  // Tableau trié par date décroissante
}
// Contrat : tableau non vide, order = chronologique inversé
// Contrainte : chaque Experience DOIT avoir id, title, company, period, description
```

### `<Education educations={} />`

```ts
interface EducationProps {
  educations: Education[];    // Tableau trié par date décroissante
}
// Contrat : exactement 3 entrées Foreach Academy (RNCP 5, 6, 7)
```

### `<Project project={} />`

```ts
interface ProjectProps {
  project: Project;           // Un seul projet affiché
}
// Contrat : technologies[] non vide, description non vide
```

### `<Contact />`

```ts
// Aucune prop — données statiques (contactInfo inline)
// Contrat : liens email, tel, LinkedIn et cvPath DOIVENT être valides
```

### `<ThemeToggle />`

```ts
// Aucune prop — utilise useTheme() hook
// Contrat : bascule entre 'light' et 'dark', persiste dans localStorage
```

### `<SkillBadge name={} />`

```ts
interface SkillBadgeProps {
  name: string;               // Nom de la technologie affiché
}
```

### `<TimelineItem entry={} isLast={} />`

```ts
interface TimelineItemProps {
  entry: Experience | Education;
  isLast?: boolean;           // Masquer le trait de jonction sur le dernier item
}
```

---

## Contrat de navigation (ancres)

Les identifiants HTML `id` des sections DOIVENT correspondre exactement aux `href` du menu :

| Section | id HTML | href menu |
|---------|---------|-----------|
| Hero | `hero` | `#hero` |
| À propos | `about` | `#about` |
| Compétences | `skills` | `#skills` |
| Expériences | `experience` | `#experience` |
| Formation | `education` | `#education` |
| Projet | `project` | `#project` |
| Contact | `contact` | `#contact` |

---

## Contrat de thème (design tokens)

Les variables CSS DOIVENT être définies dans `src/styles/globals.css` et DOIVENT
correspondre aux clés de la config Tailwind (`tailwind.config.ts`) :

```css
/* src/styles/globals.css */
:root {
  --color-bg: #FFFFFF;
  --color-bg-secondary: #F5F5F5;
  --color-text: #0D1117;
  --color-text-muted: #6B7280;
  --color-primary: #1E3A5F;
  --color-primary-hover: #2A5080;
  --color-border: #E5E5E5;
}

.dark {
  --color-bg: #0D0D0D;
  --color-bg-secondary: #1A1A1A;
  --color-text: #F0F6FF;
  --color-text-muted: #9CA3AF;
  --color-primary: #4A90D9;
  --color-primary-hover: #6AAEE8;
  --color-border: #2D2D2D;
}
```

---

## Contrat d'asset (CV.pdf)

- Le fichier `CV.pdf` DOIT être présent dans `/public/CV.pdf`.
- Le bouton de téléchargement utilise `<a href="/CV.pdf" download="CV_Alexis_Santrain.pdf">`.
- En développement : si le fichier est absent, un commentaire TODO est ajouté.

---

## Contrat SEO (index.html)

Les balises suivantes DOIVENT être présentes dans `index.html` :

```html
<html lang="fr">
<title>Alexis Santrain — Développeur Full Stack</title>
<meta name="description"
  content="Portfolio d'Alexis Santrain, Développeur Full Stack React/PHP/Symfony.
  Disponible pour de nouvelles opportunités.">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Alexis Santrain — Développeur Full Stack">
<meta property="og:description" content="Portfolio d'Alexis Santrain…">
<meta property="og:type" content="website">
```
