import React from 'react'
import './StyleGuide.css'

export default function StyleGuide() {
  // Color palette from tokens
  const colors = [
    { name: 'Primary', token: '--color-primary', value: 'oklch(75% 0.18 95)' },
    { name: 'Secondary', token: '--color-secondary', value: 'oklch(68% 0.08 45)' },
    { name: 'Background', token: '--color-bg', value: 'oklch(98% 0.005 230)' },
    { name: 'Text', token: '--color-text', value: 'oklch(15% 0.008 230)' },
    { name: 'Surface', token: '--color-surface', value: 'oklch(96% 0.005 230)' },
    { name: 'Muted', token: '--color-muted', value: 'oklch(45% 0.01 230)' },
    { name: 'Border', token: '--color-border', value: 'oklch(90% 0.005 230)' },
  ]

  // Typography scale
  const typography = [
    { name: 'H1', size: '3.5rem', weight: '600', element: 'h1' },
    { name: 'H2', size: '2.5rem', weight: '700', element: 'h2' },
    { name: 'H3', size: '1.875rem', weight: '700', element: 'h3' },
    { name: 'H4', size: '1.5rem', weight: '600', element: 'h4' },
    { name: 'Body Large', size: '1.125rem', weight: '400', element: 'p' },
    { name: 'Body', size: '1rem', weight: '400', element: 'p' },
    { name: 'Caption', size: '0.875rem', weight: '400', element: 'small' },
    { name: 'Label', size: '0.75rem', weight: '600', element: 'span', caps: true },
  ]

  // Spacing values
  const spacing = [
    { name: 'Space 1', value: '8px' },
    { name: 'Space 2', value: '16px' },
    { name: 'Space 3', value: '24px' },
    { name: 'Space 4', value: '32px' },
    { name: 'Space 5', value: '40px' },
    { name: 'Space 6', value: '48px' },
    { name: 'Space 8', value: '64px' },
    { name: 'Space 10', value: '80px' },
  ]

  // Button styles
  const buttons = [
    { label: 'Primary', variant: 'primary' },
    { label: 'Secondary', variant: 'secondary' },
    { label: 'Ghost', variant: 'ghost' },
  ]

  // Pill/Tag styles
  const pills = [
    { label: 'Primary', variant: 'primary' },
    { label: 'Secondary', variant: 'secondary' },
    { label: 'Muted', variant: 'muted' },
  ]

  return (
    <main className="styleguide">
      <div className="container">
        <h1>Design System — Style Guide</h1>
        <p className="text-body-lg">
          Reference page for the portfolio design tokens. This page will be deleted after Phase 1.
        </p>

        {/* Color Palette Section */}
        <section className="section">
          <h2>Color Palette</h2>
          <div className="color-grid">
            {colors.map((color) => (
              <div key={color.token} className="color-item">
                <div
                  className="color-swatch"
                  style={{ backgroundColor: color.value }}
                  title={color.value}
                />
                <div className="color-info">
                  <h4>{color.name}</h4>
                  <code>{color.token}</code>
                  <code>{color.value}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="section">
          <h2>Typography Scale</h2>
          <div className="typography-grid">
            {typography.map((type) => (
              <div key={type.name} className="typography-item">
                <div className="typography-preview">
                  {type.element === 'h1' && <h1>Heading 1</h1>}
                  {type.element === 'h2' && <h2>Heading 2</h2>}
                  {type.element === 'h3' && <h3>Heading 3</h3>}
                  {type.element === 'h4' && <h4>Heading 4</h4>}
                  {type.element === 'p' && <p>Body text example paragraph</p>}
                  {type.element === 'small' && (
                    <small>Small caption example text</small>
                  )}
                  {type.element === 'span' && (
                    <span className="text-label">Label Text</span>
                  )}
                </div>
                <div className="typography-info">
                  <h4>{type.name}</h4>
                  <code>{type.size} / {type.weight}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing Section */}
        <section className="section">
          <h2>Spacing Scale (8pt Base Unit)</h2>
          <div className="spacing-grid">
            {spacing.map((space) => (
              <div key={space.name} className="spacing-item">
                <div
                  className="spacing-visual"
                  style={{
                    width: space.value,
                    height: space.value,
                    backgroundColor: 'var(--color-primary)',
                  }}
                />
                <div className="spacing-info">
                  <h4>{space.name}</h4>
                  <code>{space.value}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons Section */}
        <section className="section">
          <h2>Buttons</h2>
          <div className="button-grid">
            {buttons.map((btn) => (
              <div key={btn.variant} className="button-item">
                <button className={`btn btn-${btn.variant}`}>
                  {btn.label}
                </button>
                <code>btn-{btn.variant}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Pills/Tags Section */}
        <section className="section">
          <h2>Pills & Tags</h2>
          <div className="pill-grid">
            {pills.map((pill) => (
              <div key={pill.variant} className="pill-item">
                <span className={`pill pill-${pill.variant}`}>
                  {pill.label}
                </span>
                <code>pill-{pill.variant}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows Section */}
        <section className="section">
          <h2>Shadows & Effects</h2>
          <div className="shadow-grid">
            <div className="shadow-item">
              <div className="shadow-preview" style={{ boxShadow: 'var(--shadow-card)' }}>
                Card Shadow
              </div>
              <code>--shadow-card</code>
            </div>
            <div className="shadow-item">
              <div className="shadow-preview" style={{ boxShadow: 'var(--shadow-elevated)' }}>
                Elevated Shadow
              </div>
              <code>--shadow-elevated</code>
            </div>
            <div className="shadow-item">
              <div className="shadow-preview" style={{ boxShadow: 'var(--shadow-button)' }}>
                Button Shadow
              </div>
              <code>--shadow-button</code>
            </div>
            <div className="shadow-item">
              <div className="shadow-preview" style={{ boxShadow: 'var(--shadow-button-hover)' }}>
                Button Hover Shadow
              </div>
              <code>--shadow-button-hover</code>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}