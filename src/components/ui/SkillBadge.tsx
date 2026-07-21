interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text)] text-[13px] font-medium px-3.5 py-2 rounded-lg">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
      {name}
    </span>
  )
}
