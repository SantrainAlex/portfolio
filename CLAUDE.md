# portfolio Development Guidelines

Auto-generated from all feature plans. Last updated: 2026-03-11

## Active Technologies

- TypeScript 5.x / Node.js 20 LTS + React 18, Vite 5, Tailwind CSS 3 (001-portfolio-site)

## Project Structure

```text
public/          # Assets statiques (CV.pdf, photo.jpg, favicon)
src/
├── components/
│   ├── layout/  # Header, Footer
│   ├── sections/ # Hero, About, Skills, Experience, Education, Project, Contact
│   └── ui/      # ThemeToggle, SkillBadge, TimelineItem
├── data/        # Données TypeScript (skills, experiences, education, projects)
├── hooks/       # useTheme
└── styles/      # globals.css (design tokens CSS)
index.html       # lang="fr", SEO meta, GA4 script
tailwind.config.ts
```

## Commands

npm run dev      # Serveur de développement (http://localhost:5173)
npm run build    # Build production
npm run lint     # ESLint + TS check

## Code Style

TypeScript 5.x / Node.js 20 LTS: Follow standard conventions

## Recent Changes

- 001-portfolio-site: Added TypeScript 5.x / Node.js 20 LTS + React 18, Vite 5, Tailwind CSS 3

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
