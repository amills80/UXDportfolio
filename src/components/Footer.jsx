import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-bg-alt)',
      padding: 'var(--section-padding-mobile) 0',
      borderTop: '1px solid var(--color-border-light)',
      marginTop: 'var(--spacing-10)'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2rem', margin: 0 }}>
          Let&apos;s build something worth using.
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', margin: 0 }}>
          Open to senior IC and lead design roles in Ed-Tech, B2B SaaS, and DesignOps-forward environments.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <a
            href="mailto:aelonrench@yahoo.com"
            style={{
              background: 'var(--color-primary)',
              color: 'var(--color-primary-foreground)',
              padding: '0.75rem 2rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-card)'
            }}
            aria-label="Email Alan Mills"
          >
            aelonrench@yahoo.com
          </a>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="https://www.linkedin.com/in/alan-mills-5295469/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
            <a href="https://github.com/amills80" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .321.218.694.825.576c4.765-1.585 8.2-6.085 8.2-11.385 0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.interaction-design.org/members/alan-mills" aria-label="IxDF" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="12"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">IxDF</text></svg>
            </a>
            <a href="https://amillsdesign.net" aria-label="Portfolio Reference" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="12"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">AM</text></svg>
            </a>
          </div>
        </div>
        <div style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginTop: '2rem' }}>
          © 2026 Alan Mills
        </div>
      </div>
    </footer>
  )
}
