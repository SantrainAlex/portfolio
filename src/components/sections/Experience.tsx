import { experiences } from '../../data/experiences'
import { TimelineItem } from '../ui/TimelineItem'

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <p className="section-eyebrow">03 — Parcours</p>
        <h2 className="section-title mb-10">Expérience</h2>

        <div>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              entry={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
