import type { SkillGroup } from '../types'

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
]
