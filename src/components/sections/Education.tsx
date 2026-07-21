import { educations } from '../../data/education'

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto">
        <p className="section-eyebrow">04 — Formation</p>
        <h2 className="section-title mb-10">Formation</h2>

        <div className="flex flex-col gap-3.5">
          {educations.map(edu => (
            <div
              key={edu.id}
              className="flex flex-col sm:flex-row justify-between items-start gap-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[10px] px-[22px] py-5"
            >
              <div>
                <h3 className="font-heading font-semibold text-base text-[var(--color-text)] mb-1">
                  {edu.degree}
                </h3>
                <p className="text-[13px] text-[var(--color-text-muted)]">
                  {edu.school} · {edu.location}
                </p>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <p className="font-mono text-xs text-[var(--color-primary)] mb-1">{edu.period}</p>
                <p className="text-[11px] text-[var(--color-text-muted)]">{edu.level}</p>
                {edu.note && (
                  <p className="text-[11px] text-[var(--color-text-muted)] italic mt-0.5">{edu.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
