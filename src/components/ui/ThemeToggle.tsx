import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      title={isDark ? 'Mode clair' : 'Mode sombre'}
      className="relative w-11 h-6 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
    >
      <span
        className="absolute top-[2px] w-[18px] h-[18px] rounded-full bg-[var(--color-primary)] transition-[left] duration-200 ease-in-out"
        style={{ left: isDark ? '22px' : '2px' }}
        aria-hidden="true"
      />
    </button>
  )
}
