import { skillGroups } from '../../data/skills'
import { SkillBadge } from '../ui/SkillBadge'

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto">
        <p className="section-eyebrow">02 — Stack</p>
        <h2 className="section-title mb-10">Compétences</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {skillGroups.map(group => (
            <div key={group.category}>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-3.5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
