const contactInfo = {
  email: 'santrain.alexis@hotmail.com',
  phone: '07-83-57-82-79',
  phoneHref: 'tel:0783578279',
  linkedin: 'https://www.linkedin.com/in/alexis-santrain-749915200',
  github: 'https://github.com/SantrainAlex',
  cvPath: '/CV.pdf',
}

const contactItems = [
  {
    id: 'email',
    mono: '@',
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    target: undefined as string | undefined,
  },
  {
    id: 'phone',
    mono: 'tel',
    label: 'Téléphone',
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
    target: undefined as string | undefined,
  },
  {
    id: 'linkedin',
    mono: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/alexis-santrain',
    href: contactInfo.linkedin,
    target: '_blank' as string | undefined,
  },
  {
    id: 'github',
    mono: 'gh',
    label: 'GitHub',
    value: 'github.com/SantrainAlex',
    href: contactInfo.github,
    target: '_blank' as string | undefined,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto">
        <p className="section-eyebrow">06 — Contact</p>
        <h2 className="font-heading font-bold text-[32px] tracking-tight text-[var(--color-text)] mb-2">
          Contact
        </h2>
        <p className="text-[15px] text-[var(--color-text-muted)] mb-10">
          Disponible pour de nouvelles opportunités — n'hésitez pas à me contacter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {contactItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              target={item.target}
              rel={item.target ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3.5 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[10px] p-[18px] hover:border-[var(--color-primary)] transition-colors"
            >
              <span className="flex-shrink-0 w-[38px] h-[38px] rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center font-mono font-semibold text-[13px]">
                {item.mono}
              </span>
              <span className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-[var(--color-text)] truncate">
                  {item.value}
                </p>
              </span>
            </a>
          ))}
        </div>

        <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[10px] p-7 text-center">
          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            Retrouvez l'ensemble de mon parcours dans mon CV
          </p>
          <a
            href={contactInfo.cvPath}
            download="CV_Alexis_Santrain.pdf"
            className="btn-primary inline-flex"
          >
            Télécharger mon CV (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
