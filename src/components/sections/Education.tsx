import { educations } from '../../data/education'
import { TimelineItem } from '../ui/TimelineItem'

export function Education() {
  return (
    <section id="education" className="py-12 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Formation</h2>
        <p className="section-subtitle">Certifications professionnelles — Foreach Academy</p>

        <div className="max-w-3xl">
          {educations.map((edu, index) => (
            <TimelineItem
              key={edu.id}
              entry={edu}
              isLast={index === educations.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
