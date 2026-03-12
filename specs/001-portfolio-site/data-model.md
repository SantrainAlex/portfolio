# Data Model: Site Portfolio — Alexis Santrain

**Date**: 2026-03-11
**Branch**: `001-portfolio-site`

Toutes les données sont des constantes TypeScript — pas de base de données.
Fichiers sources dans `src/data/`.

---

## Interfaces TypeScript

### Skill (compétence)

```ts
// src/data/skills.ts
export type SkillCategory = 'frontend' | 'backend' | 'tools';

export interface Skill {
  name: string;           // Ex: "React", "PHP"
  category: SkillCategory;
}

export interface SkillGroup {
  category: SkillCategory;
  label: string;          // Label affiché : "Frontend", "Backend", "Outils & Méthodo"
  icon: string;           // Emoji ou nom d'icône
  skills: Skill[];
}
```

**Données** :
```ts
export const skillGroups: SkillGroup[] = [
  {
    category: 'frontend',
    label: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React', category: 'frontend' },
      { name: 'React Native', category: 'frontend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
    ],
  },
  {
    category: 'backend',
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP', category: 'backend' },
      { name: 'Symfony', category: 'backend' },
      { name: 'API Platform', category: 'backend' },
      { name: 'PostgreSQL', category: 'backend' },
    ],
  },
  {
    category: 'tools',
    label: 'Outils & Méthodo',
    icon: '🛠️',
    skills: [
      { name: 'Git', category: 'tools' },
      { name: 'Docker', category: 'tools' },
      { name: 'Méthode Agile', category: 'tools' },
    ],
  },
];
```

---

### Experience (expérience professionnelle)

```ts
// src/data/experiences.ts
export interface Experience {
  id: string;
  title: string;          // Intitulé du poste
  company: string;        // Nom de l'entreprise
  location: string;       // Ville
  period: string;         // Ex: "2025 – 2026"
  type?: string;          // Ex: "En alternance" (optionnel)
  description: string;    // Description courte
  technologies?: string[]; // Technologies utilisées (optionnel)
}
```

**Données** (ordre chronologique inversé) :
```ts
export const experiences: Experience[] = [
  {
    id: 'tildeo-fullstack',
    title: 'Développeur Full Stack',
    company: 'Tildeo',
    location: "Villeneuve-d'Ascq",
    period: '2025 – 2026',
    description: "Développement d'un POC à destination des mutuelles complémentaires.",
    technologies: ['React', 'TypeScript', 'PHP', 'Symfony'],
  },
  {
    id: 'tildeo-archi',
    title: 'Architecte Web',
    company: 'Tildeo',
    location: "Villeneuve-d'Ascq",
    period: '2024 – 2025',
    type: 'En alternance',
    description: "Développement d'une application BtoC multiplateforme à destination des bailleurs sociaux.",
    technologies: ['React', 'React Native', 'API Platform', 'PostgreSQL'],
  },
  {
    id: 'tildeo-cda',
    title: "Concepteur Développeur d'Applications",
    company: 'Tildeo',
    location: "Villeneuve-d'Ascq",
    period: '2022 – 2024',
    type: 'En alternance',
    description: "Développement d'une application BtoC multiplateforme à destination des bailleurs sociaux.",
    technologies: ['React Native', 'Symfony', 'PostgreSQL', 'Docker'],
  },
];
```

---

### Education (formation)

```ts
// src/data/education.ts
export interface Education {
  id: string;
  degree: string;         // Intitulé complet du diplôme
  level: string;          // Ex: "RNCP Niveau 7"
  school: string;         // Établissement
  location: string;
  period: string;
  note?: string;          // Ex: "6 mois validés"
  courses?: string[];     // Matières principales (optionnel)
}
```

**Données** (ordre chronologique inversé) :
```ts
export const educations: Education[] = [
  {
    id: 'rncp7',
    degree: 'Mastère Architecte Web',
    level: 'RNCP Niveau 7',
    school: 'Foreach Academy',
    location: 'Marcq-en-Baroeul',
    period: '2024 – 2025',
    note: '6 mois validés',
  },
  {
    id: 'rncp6',
    degree: "Concepteur Développeur d'Applications",
    level: 'RNCP Niveau 6',
    school: 'Foreach Academy',
    location: 'Marcq-en-Baroeul',
    period: '2022 – 2024',
  },
  {
    id: 'rncp5',
    degree: 'Développeur Web et Web Mobile',
    level: 'RNCP Niveau 5',
    school: 'Foreach Academy',
    location: 'Marcq-en-Baroeul',
    period: '2021 – 2022',
  },
];
```

---

### Project (projet)

```ts
// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  context: string;        // Contexte métier
  role: string;           // Rôle d'Alexis
  description: string;    // Description détaillée
  technologies: string[];
  period: string;
}
```

**Données** :
```ts
export const projects: Project[] = [
  {
    id: 'btoc-bailleurs',
    title: 'Application BtoC Multiplateforme — Bailleurs Sociaux',
    context: 'Solution numérique à destination des locataires de bailleurs sociaux.',
    role: 'Développeur Full Stack (frontend React Native + backend Symfony/API Platform)',
    description:
      "Développement d'une application mobile et web permettant aux locataires de bailleurs " +
      "sociaux de gérer leurs démarches administratives. Projet mené en alternance chez Tildeo " +
      "de 2022 à 2025, couvrant les phases de conception, développement et livraison.",
    technologies: ['React Native', 'React', 'Symfony', 'API Platform', 'PostgreSQL', 'Docker'],
    period: '2022 – 2025',
  },
];
```

---

### ContactInfo (coordonnées)

```ts
// inline dans Contact.tsx — pas de fichier séparé nécessaire
export interface ContactInfo {
  email: string;
  phone: string;         // Format d'affichage : "07-83-57-82-79"
  phoneHref: string;     // Format tel: : "tel:0783578279"
  linkedin: string;      // URL complète
  cvPath: string;        // Chemin vers CV.pdf dans /public
}

export const contactInfo: ContactInfo = {
  email: 'santrain.alexis@hotmail.com',
  phone: '07-83-57-82-79',
  phoneHref: 'tel:0783578279',
  linkedin: 'https://www.linkedin.com/in/alexis-santrain-749915200',
  cvPath: '/CV.pdf',
};
```

---

## Relations entre entités

```text
App
├── Hero          (pas de data file — contenu statique + contactInfo.cvPath)
├── About         (pas de data file — bio statique validée par Alexis)
├── Skills        ← skillGroups[]
├── Experience    ← experiences[]
├── Education     ← educations[]
├── Project       ← projects[0]  (un seul projet affiché)
└── Contact       ← contactInfo
```

## Validation des données

Toutes les données DOIVENT être validées manuellement contre `CV.pdf` avant le déploiement
(Principe II — Content Authenticity). Un commentaire `// TODO(CONTENT): valider avec Alexis`
est ajouté sur les champs incertains (bio "À propos", description projet détaillée).
