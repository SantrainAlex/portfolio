import { useState, useEffect } from 'react'

const CONSENT_KEY = 'cookie-consent'

function grantAnalytics() {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'granted' })
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      setVisible(true)
    } else if (stored === 'accepted') {
      grantAnalytics()
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    grantAnalytics()
    setVisible(false)
  }

  const refuse = () => {
    localStorage.setItem(CONSENT_KEY, 'refused')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[var(--color-bg-card)] border-t border-[var(--color-border)] shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text)] flex-1">
          Ce site utilise{' '}
          <strong>Google Analytics</strong> pour mesurer son audience de façon anonyme.
          Vos données ne sont pas utilisées à des fins publicitaires.{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[var(--color-primary)]"
          >
            En savoir plus
          </a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={refuse}
            className="px-4 py-2 text-sm font-medium rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-secondary)] transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="btn-primary !py-2 !px-4 !text-sm"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
