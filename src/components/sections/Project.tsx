import { projects } from '../../data/projects'

export function Project() {
  const project = projects[0]
  if (!project) return null

  return (
    <section id="project" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <p className="section-eyebrow">05 — Projet</p>
        <h2 className="section-title mb-10">Projet phare</h2>

        <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8">
          <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
            <div>
              <h3 className="font-heading font-semibold text-[22px] text-[var(--color-text)] mb-1">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-[var(--color-text-muted)]">{project.period}</p>
            </div>
            <span className="font-mono text-[11px] font-semibold bg-[var(--color-primary-light)] text-[var(--color-primary)] px-3 py-1.5 rounded-full flex-shrink-0">
              Projet professionnel — Web &amp; Mobile
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                Contexte
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-text)]">{project.context}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                Rôle
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-text)]">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                Description
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-text)]">{project.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="font-mono text-xs bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text)] px-3 py-1.5 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
