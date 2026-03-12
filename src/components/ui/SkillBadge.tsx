import type { SkillCategory } from '../../types'

interface SkillBadgeProps {
  name: string
  category?: SkillCategory
}

const categoryStyles: Record<SkillCategory, string> = {
  frontend:
    'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800',
  backend:
    'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800',
  tools:
    'bg-violet-50 text-violet-800 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800',
}

export function SkillBadge({ name, category = 'tools' }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${categoryStyles[category]}`}
    >
      {name}
    </span>
  )
}
