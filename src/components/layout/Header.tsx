import { useState } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Stack' },
  { href: '#experience', label: 'Expérience' },
  { href: '#education', label: 'Formation' },
  { href: '#project', label: 'Projet' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nom */}
          <a
            href="#hero"
            className="font-heading font-bold text-[17px] tracking-tight text-[var(--color-text)]"
          >
            Alexis<span className="text-[var(--color-primary)]">.</span>Santrain
          </a>

          {/* Navigation desktop */}
          <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md font-mono text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions droite */}
          <div className="flex items-center gap-3.5">
            <ThemeToggle />

            {/* Bouton menu mobile */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1.5 text-[var(--color-text)]"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              <span className="w-5 h-0.5 bg-current" aria-hidden="true" />
              <span className="w-5 h-0.5 bg-current" aria-hidden="true" />
              <span className="w-5 h-0.5 bg-current" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          aria-label="Navigation mobile"
          className="md:hidden flex flex-col border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-2"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-3 font-mono text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] border-b border-[var(--color-border)] last:border-b-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
