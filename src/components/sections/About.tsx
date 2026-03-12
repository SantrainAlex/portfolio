export function About() {
  return (
    <section id="about" className="py-12 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="section-title">À propos</h2>
          <div className="w-12 h-1 bg-[var(--color-primary)] mb-8 rounded-full" />

          <div className="space-y-4 text-[var(--color-text)] text-base leading-relaxed">
            <p>
              Développeur Full Stack passionné, j'évolue depuis 2022 chez{' '}
              <strong>Tildeo</strong> (Villeneuve-d'Ascq), où j'ai progressé d'alternant à
              développeur confirmé en contribuant à des projets concrets à fort impact métier.
            </p>
            <p>
              Mon expertise couvre le développement frontend avec{' '}
              <strong>React et React Native</strong>, ainsi que le backend avec{' '}
              <strong>Symfony, API Platform et PostgreSQL</strong>. Je suis à l'aise dans
              les environnements Agile, avec une maîtrise de Git et Docker au quotidien.
            </p>
            <p>
              Titulaire d'un parcours de formation complet chez{' '}
              <strong>Foreach Academy</strong> (RNCP Niveaux 5, 6 et 7), je continue à me
              former pour rester à la pointe des technologies web et mobile.
            </p>
            <p>
              En dehors du code, je pratique la course à pied et le tir à l'arc — deux
              disciplines qui cultivent la concentration et la persévérance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
