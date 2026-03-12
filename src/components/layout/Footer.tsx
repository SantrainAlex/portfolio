export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-[var(--color-text-muted)]">
          © {year} Alexis Santrain — Développeur Full Stack
        </p>
        <p className="text-xs text-[var(--color-text-muted)] mt-1">
          Conçu et développé avec React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
