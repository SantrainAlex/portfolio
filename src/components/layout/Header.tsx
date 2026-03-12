import { useState } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#experience', label: 'Expériences' },
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
            className="text-[var(--color-primary)] font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            Alexis Santrain
          </a>

          {/* Navigation desktop */}
          <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-primary-light)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions droite */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Bouton menu mobile */}
            <button
              className="md:hidden p-2 rounded-md text-[var(--color-text-muted)] hover:bg-[var(--color-primary-light)] transition-colors"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          aria-label="Navigation mobile"
          className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-primary-light)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
