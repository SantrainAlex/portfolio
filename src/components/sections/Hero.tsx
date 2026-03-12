const techCategories = [
  { icon: '🖥️', label: 'Frontend', techs: 'React · React Native · JS/TS' },
  { icon: '⚙️', label: 'Backend', techs: 'PHP · Symfony · API Platform · PostgreSQL' },
  { icon: '🛠️', label: 'Outils', techs: 'Git · Docker · Méthode Agile' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[var(--color-bg)] pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* Contenu texte */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge disponibilité */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-semibold px-3 py-1.5 rounded-full mb-6 ring-1 ring-[var(--color-primary)] ring-opacity-30">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" aria-hidden="true" />
              Disponible
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-tight mb-3">
              Alexis Santrain
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-[var(--color-primary)] mb-8">
              Développeur Full Stack
            </p>

            {/* Catégories de compétences */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center lg:justify-start">
              {techCategories.map(cat => (
                <div
                  key={cat.label}
                  className="flex-1 card !py-3 !px-4 text-left min-w-0"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span aria-hidden="true">{cat.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      {cat.label}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text)] font-medium leading-snug">
                    {cat.techs}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary">
                Me contacter
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/CV.pdf"
                download="CV_Alexis_Santrain.pdf"
                className="btn-secondary"
              >
                Télécharger mon CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Photo de profil */}
          <div className="flex-shrink-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              {/* Cercle décoratif */}
              <div
                className="absolute inset-0 rounded-full border-4 border-[var(--color-primary)] opacity-20 scale-110"
                aria-hidden="true"
              />
              <picture>
                <source srcSet="/photo.webp" type="image/webp" width={288} height={288} />
              <img
                src="/photo.jpg"
                alt="Photo de profil d'Alexis Santrain, Développeur Full Stack"
                className="w-full h-full rounded-full object-cover border-4 border-[var(--color-border)] shadow-lg"
                loading="eager"
                decoding="async"
                width={288}
                height={288}
                onError={e => {
                  const img = e.currentTarget
                  img.style.display = 'none'
                  const parent = img.parentElement
                  if (parent && !parent.querySelector('.photo-placeholder')) {
                    const placeholder = document.createElement('div')
                    placeholder.className =
                      'photo-placeholder w-full h-full rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] text-5xl font-bold'
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
      </div>
    </section>
  )
}
