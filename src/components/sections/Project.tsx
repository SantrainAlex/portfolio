import { projects } from '../../data/projects'

export function Project() {
  const project = projects[0]
  if (!project) return null

  return (
    <section id="project" className="py-12 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projet phare</h2>
        <p className="section-subtitle">Une réalisation concrète illustrant mes compétences</p>

        <div className="max-w-3xl">
          <div className="card">
            {/* En-tête */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">
                  {project.title}
                </h3>
                <span className="text-sm text-[var(--color-text-muted)]">
                  {project.period}
                </span>
              </div>
              <span className="flex-shrink-0 text-xs font-semibold bg-[var(--color-primary-light)] text-[var(--color-primary)] px-3 py-1.5 rounded-full self-start">
                Application Mobile & Web
              </span>
            </div>

            {/* Contexte */}
            <div className="mb-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                Contexte
              </h4>
              <p className="text-[var(--color-text)] text-sm leading-relaxed">
                {project.context}
              </p>
            </div>

            {/* Rôle */}
            <div className="mb-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                Mon rôle
              </h4>
              <p className="text-[var(--color-text)] text-sm leading-relaxed">
                {project.role}
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                Description
              </h4>
              <p className="text-[var(--color-text)] text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                Technologies utilisées
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="text-sm bg-[var(--color-primary-light)] text-[var(--color-primary)] px-3 py-1 rounded-full font-medium border border-[var(--color-border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
