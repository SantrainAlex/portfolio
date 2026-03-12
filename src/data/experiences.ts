import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'tildeo-fullstack-2025',
    title: 'Développeur Full Stack',
    company: 'Tildeo',
    location: "Villeneuve-d'Ascq",
    period: '2025 – 2026',
    description:
      "Développement d'un POC à destination des mutuelles complémentaires.",
    technologies: ['React', 'TypeScript', 'PHP', 'Symfony', 'API Platform'],
  },
  {
    id: 'tildeo-archi-2024',
    title: 'Architecte Web',
    company: 'Tildeo',
    location: "Villeneuve-d'Ascq",
    period: '2024 – 2025',
    type: 'En alternance',
    description:
      "Développement d'une application BtoC multiplateforme à destination des bailleurs sociaux.",
    technologies: ['React', 'React Native', 'Symfony', 'API Platform', 'PostgreSQL'],
  },
  {
    id: 'tildeo-cda-2022',
    title: "Concepteur Développeur d'Applications",
    company: 'Tildeo',
    location: "Villeneuve-d'Ascq",
    period: '2022 – 2024',
    type: 'En alternance',
    description:
      "Développement d'une application BtoC multiplateforme à destination des bailleurs sociaux.",
    technologies: ['React Native', 'Symfony', 'PostgreSQL', 'Docker'],
  },
]
