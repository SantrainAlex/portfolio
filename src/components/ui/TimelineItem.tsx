import type { Experience, Education } from '../../types'

interface TimelineItemProps {
  entry: Experience | Education
  isLast?: boolean
}

function isExperience(entry: Experience | Education): entry is Experience {
  return 'company' in entry
}

export function TimelineItem({ entry, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Ligne et point de timeline */}
      <div className="flex flex-col items-center flex-shrink-0 w-6">
        <div className="w-3.5 h-3.5 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-bg)] ring-2 ring-[var(--color-primary)] mt-1 flex-shrink-0" />
        {!isLast && (
          <div className="flex-1 w-0.5 bg-[var(--color-border)] mt-1 min-h-[2rem]" />
        )}
      </div>

      {/* Contenu */}
      <div className={`pb-8 flex-1 ${isLast ? 'pb-0' : ''}`}>
        <div className="card">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-[var(--color-text)] text-base leading-snug">
                  {isExperience(entry) ? entry.title : entry.degree}
                </h3>
                {isExperience(entry) && entry.type && (
                  <span className="text-xs font-normal text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)] px-2 py-0.5 rounded-full">
                    {entry.type}
                  </span>
                )}
              </div>
              <p className="text-[var(--color-primary)] font-medium text-sm mt-0.5">
                {isExperience(entry)
                  ? `${entry.company} · ${entry.location}`
                  : `${entry.school} · ${entry.location}`}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
              <span className="text-sm text-[var(--color-text-muted)] font-medium whitespace-nowrap">
                {entry.period}
              </span>
              {!isExperience(entry) && (
                <span className="text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-2 py-0.5 rounded-full">
                  {entry.level}
                </span>
              )}
              {!isExperience(entry) && entry.note && (
                <span className="text-xs text-[var(--color-text-muted)] italic">
                  {entry.note}
                </span>
              )}
            </div>
          </div>

          {isExperience(entry) && (
            <>
              <p className="text-sm text-[var(--color-text-muted)] mb-3">
                {entry.description}
              </p>
              {entry.technologies && entry.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {entry.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs bg-[var(--color-primary-light)] text-[var(--color-primary)] px-2 py-0.5 rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
