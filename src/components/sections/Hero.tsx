const techCategories = [
  { label: 'Frontend', techs: 'React · React Native · JS/TS' },
  { label: 'Backend', techs: 'PHP · Symfony · API Platform · PostgreSQL' },
  { label: 'Outils', techs: 'Git · Docker · Méthode Agile' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[var(--color-bg)] pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

        {/* Contenu texte */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] px-3 py-1.5 rounded-full mb-7">
            <span className="w-[7px] h-[7px] rounded-full bg-[var(--color-primary)] animate-[pulse-dot_2s_ease-in-out_infinite]" aria-hidden="true" />
            disponible pour une nouvelle mission
          </div>

          <h1 className="font-heading font-bold tracking-tight leading-[1.02] text-[clamp(40px,6vw,68px)] text-[var(--color-text)] mb-4">
            Alexis Santrain
          </h1>

          <p className="font-mono text-base text-[var(--color-text-muted)] mb-2">
            <span className="text-[var(--color-primary)]">&gt;</span> Développeur Full Stack
            <span className="animate-[blink_1s_step-end_infinite]">_</span>
          </p>

          <p className="text-[17px] leading-relaxed text-[var(--color-text-muted)] max-w-[480px] mt-5 mb-9">
            Je conçois et développe des applications web &amp; mobiles de bout en bout — de
            l'architecture backend à l'interface finale.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-9">
            {techCategories.map(cat => (
              <div
                key={cat.label}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[10px] px-4 py-3 min-w-[160px]"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-1">
                  {cat.label}
                </p>
                <p className="text-[13px] text-[var(--color-text)]">{cat.techs}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Me contacter →
            </a>
            <a href="/CV.pdf" download="CV_Alexis_Santrain.pdf" className="btn-secondary">
              Télécharger le CV
            </a>
          </div>
        </div>

        {/* Photo de profil */}
        <div className="flex justify-center">
          <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]">
            <div
              className="absolute -inset-2.5 rounded-full border-[1.5px] border-dashed border-[var(--color-primary)] opacity-40"
              aria-hidden="true"
            />
            <picture>
              <source srcSet="/photo.webp" type="image/webp" width={260} height={260} />
              <img
                src="/photo.jpg"
                alt="Photo de profil d'Alexis Santrain, Développeur Full Stack"
                className="w-full h-full rounded-full object-cover border-[3px] border-[var(--color-bg-card)] shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                loading="eager"
                decoding="async"
                width={260}
                height={260}
                onError={e => {
                  const img = e.currentTarget
                  img.style.display = 'none'
                  const parent = img.parentElement
                  if (parent && !parent.querySelector('.photo-placeholder')) {
                    const placeholder = document.createElement('div')
                    placeholder.className =
                      'photo-placeholder w-full h-full rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] text-5xl font-bold font-heading'
                    placeholder.textContent = 'AS'
                    placeholder.setAttribute('role', 'img')
                    placeholder.setAttribute('aria-label', 'Initiales Alexis Santrain')
                    parent.appendChild(placeholder)
                  }
                }}
              />
            </picture>
          </div>
        </div>

      </div>
    </section>
  )
}
