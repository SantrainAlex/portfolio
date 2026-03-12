import { skillGroups } from '../../data/skills'
import { SkillBadge } from '../ui/SkillBadge'

export function Skills() {
  return (
    <section id="skills" className="py-12 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Compétences</h2>
        <p className="section-subtitle">Technologies maîtrisées et outils du quotidien</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map(group => (
            <div key={group.category} className="card">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    category={skill.category}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
