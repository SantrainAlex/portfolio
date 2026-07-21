import type { Experience } from '../../types'

interface TimelineItemProps {
  entry: Experience
  isLast?: boolean
}

export function TimelineItem({ entry, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex gap-6">
      {/* Ligne et point de timeline */}
      <div className="flex flex-col items-center flex-shrink-0">
        <span className="w-3 h-3 rounded-full bg-[var(--color-primary)] mt-6 flex-shrink-0" />
        {!isLast && <span className="w-[1.5px] flex-1 bg-[var(--color-border)] mt-1.5" />}
      </div>

      {/* Contenu */}
      <div className={`flex-1 min-w-0 ${isLast ? 'pb-0' : 'pb-4'}`}>
        <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[10px] p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
            <div>
              <h3 className="font-heading font-semibold text-lg text-[var(--color-text)] mb-0.5">
                {entry.title}
              </h3>
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                {entry.company} · {entry.location}
              </p>
            </div>
            <p className="font-mono text-xs text-[var(--color-text-muted)] flex-shrink-0">
              {entry.period}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-[var(--color-text-muted)] max-w-2xl mb-3">
            {entry.description}
          </p>

          {entry.technologies && entry.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {entry.technologies.map(tech => (
                <span
                  key={tech}
                  className="font-mono text-[11px] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-muted)] px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
