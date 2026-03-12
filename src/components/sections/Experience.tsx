import { experiences } from '../../data/experiences'
import { TimelineItem } from '../ui/TimelineItem'

export function Experience() {
  return (
    <section id="experience" className="py-12 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Expériences professionnelles</h2>
        <p className="section-subtitle">Mon parcours chez Tildeo depuis 2022</p>

        <div className="max-w-3xl">
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
