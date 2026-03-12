import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'btoc-bailleurs',
    title: 'Application BtoC Multiplateforme — Bailleurs Sociaux',
    context:
      "Solution numérique destinée aux bailleurs sociaux pour gérer leurs démarches administratives en ligne.",
    role:
      "Développeur Full Stack — conception et développement du frontend mobile (React Native) et de l'API backend (Symfony / API Platform).",
    description:
      "Application mobile et web permettant aux bailleurs de gérer leurs démarches administratives. Développée en alternance chez Tildeo de 2022 à 2025, couvrant les phases de conception, développement, intégration et livraison.",
    technologies: [
      'React Native',
      'React',
      'Symfony',
      'API Platform',
      'PostgreSQL',
      'Docker',
      'Git',
    ],
    period: '2022 – 2025',
  },
]
