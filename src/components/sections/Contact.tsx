const contactInfo = {
  email: 'santrain.alexis@hotmail.com',
  phone: '07-83-57-82-79',
  phoneHref: 'tel:0783578279',
  linkedin: 'https://www.linkedin.com/in/alexis-santrain-749915200',
  cvPath: '/CV.pdf',
}

const contactItems = [
  {
    id: 'email',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    target: undefined as string | undefined,
    rel: undefined as string | undefined,
  },
  {
    id: 'phone',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.92 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.82 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Téléphone',
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
    target: undefined,
    rel: undefined,
  },
  {
    id: 'linkedin',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/alexis-santrain-749915200',
    href: contactInfo.linkedin,
    target: '_blank' as string | undefined,
    rel: 'noopener noreferrer' as string | undefined,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-12 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Disponible pour de nouvelles opportunités — n'hésitez pas à me contacter</p>

        <div className="max-w-2xl">
          <div className="grid grid-cols-1 gap-4 mb-8">
            {contactItems.map(item => (
              <a
                key={item.id}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="card flex items-center gap-4 hover:border-[var(--color-primary)] hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[var(--color-text)] font-medium text-sm truncate">
                    {item.value}
                  </p>
                </div>
                <svg
                  className="ml-auto text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Téléchargement CV */}
          <div className="card text-center">
            <p className="text-[var(--color-text-muted)] text-sm mb-4">
              Retrouvez l'ensemble de mon parcours dans mon CV
            </p>
            <a
              href={contactInfo.cvPath}
              download="CV_Alexis_Santrain.pdf"
              className="btn-primary inline-flex"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Télécharger mon CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
