import React from 'react'
import './StyleGuide.css'
import { Button, Tag, CaseStudyCard, ExperienceEntry, Section } from './ui'

export default function StyleGuide() {
  // Color palette from comprehensive design system
  const colors = [
    { name: 'Primary', token: '--color-primary', value: 'oklch(0.84 0.19 92)', desc: 'Bright strategic yellow' },
    { name: 'Primary Hover', token: '--color-primary-hover', value: 'oklch(0.76 0.19 92)', desc: 'Deeper yellow for hover' },
    { name: 'Primary Light', token: '--color-primary-light', value: 'oklch(0.97 0.06 95)', desc: 'Pale yellow tint' },
    { name: 'Secondary', token: '--color-secondary', value: 'oklch(0.22 0.02 65)', desc: 'Deep warm charcoal' },
    { name: 'Secondary Light', token: '--color-secondary-light', value: 'oklch(0.95 0.015 80)', desc: 'Light warm stone' },
    { name: 'Background', token: '--color-bg', value: 'oklch(1 0 0)', desc: 'Pure white' },
    { name: 'Background Alt', token: '--color-bg-alt', value: 'oklch(0.98 0.012 90)', desc: 'Warm off-white' },
    { name: 'Text', token: '--color-text', value: 'oklch(0.15 0.015 65)', desc: 'Near-black with warm undertone' },
    { name: 'Text Muted', token: '--color-text-muted', value: 'oklch(0.52 0.02 65)', desc: 'Mid warm gray' },
    { name: 'Text Light', token: '--color-text-light', value: 'oklch(0.45 0.02 65)', desc: 'Darker warm gray — WCAG AA compliant' },
    { name: 'Surface', token: '--color-surface', value: 'oklch(1 0 0)', desc: 'Pure white' },
    { name: 'Surface Elevated', token: '--color-surface-elevated', value: 'oklch(0.99 0.005 85)', desc: 'Barely-there warm tint' },
    { name: 'Border', token: '--color-border', value: 'oklch(0.88 0.012 85)', desc: 'Warm light border' },
    { name: 'Border Light', token: '--color-border-light', value: 'oklch(0.94 0.008 85)', desc: 'Very light warm divider' },
    { name: 'Muted', token: '--color-muted', value: 'oklch(0.96 0.01 85)', desc: 'Warm light gray' },
    { name: 'Success', token: '--color-success', value: 'oklch(0.58 0.18 158)', desc: 'Confident green' },
    { name: 'Warning', token: '--color-warning', value: 'oklch(0.65 0.15 45)', desc: 'Distinct orange — clearly different from primary' },
    { name: 'Error', token: '--color-error', value: 'oklch(0.56 0.22 25)', desc: 'Clear red' },
    { name: 'Link', token: '--color-link', value: 'oklch(0.45 0.15 270)', desc: 'Accessible blue-violet for hyperlinks' },
  ]

  // Typography scale — comprehensive with all new tokens
  const typography = [
    { name: 'H1 Mobile', size: '2.75rem (44px)', weight: '700', lh: '1.15', ls: '-0.03em', element: 'h1' },
    { name: 'H1 Desktop', size: '5rem (80px)', weight: '700', lh: '1.15', ls: '-0.03em', element: 'h1', desktop: true },
    { name: 'H2 Mobile', size: '2rem (32px)', weight: '700', lh: '1.2', ls: '-0.02em', element: 'h2' },
    { name: 'H2 Desktop', size: '3.25rem (52px)', weight: '700', lh: '1.2', ls: '-0.02em', element: 'h2', desktop: true },
    { name: 'H3 Mobile', size: '1.5rem (24px)', weight: '600', lh: '1.3', ls: '-0.01em', element: 'h3' },
    { name: 'H3 Desktop', size: '2rem (32px)', weight: '600', lh: '1.3', ls: '-0.01em', element: 'h3', desktop: true },
    { name: 'H4 Mobile', size: '1.25rem (20px)', weight: '600', lh: '1.35', ls: '0em', element: 'h4' },
    { name: 'H4 Desktop', size: '1.5rem (24px)', weight: '600', lh: '1.35', ls: '0em', element: 'h4', desktop: true },
    { name: 'Body Large', size: '1.125rem (18px)', weight: '400', lh: '1.7', element: 'p' },
    { name: 'Body', size: '1rem (16px)', weight: '400', lh: '1.7', element: 'p' },
    { name: 'Label', size: '1rem (16px)', weight: '500', lh: '1.5', element: 'span', caps: true },
    { name: 'Caption', size: '0.875rem (14px)', weight: '400', lh: '1.5', element: 'small' },
    { name: 'Tag', size: '0.8125rem (13px)', weight: '600', lh: '1.4', element: 'span' },
  ]

  // Spacing values — 8pt base unit system
  const spacing = [
    { name: 'Spacing 1', value: '0.5rem (8px)', token: '--spacing-1' },
    { name: 'Spacing 2', value: '1rem (16px)', token: '--spacing-2' },
    { name: 'Spacing 3', value: '1.5rem (24px)', token: '--spacing-3' },
    { name: 'Spacing 4', value: '2rem (32px)', token: '--spacing-4' },
    { name: 'Spacing 5', value: '2.5rem (40px)', token: '--spacing-5' },
    { name: 'Spacing 6', value: '3rem (48px)', token: '--spacing-6' },
    { name: 'Spacing 7', value: '3.5rem (56px)', token: '--spacing-7' },
    { name: 'Spacing 8', value: '4rem (64px)', token: '--spacing-8' },
    { name: 'Spacing 10', value: '5rem (80px)', token: '--spacing-10' },
    { name: 'Spacing 12', value: '6rem (96px)', token: '--spacing-12' },
    { name: 'Spacing 16', value: '8rem (128px)', token: '--spacing-16' },
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
        <h1>🎨 Design System — Style Guide</h1>
        <p className="text-body-large">
          Comprehensive reference for the Alan Mills portfolio design tokens. Poppins typeface, strategic yellow accent, warm neutrals.
        </p>

        {/* Color Palette Section */}
        <section className="section">
          <h2>Color Palette — OKLCH Color Space</h2>
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
                  <p className="text-caption">{color.desc}</p>
                  <code>{color.token}</code>
                  <code>{color.value}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="section">
          <h2>Typography Scale — Poppins Typeface</h2>
          <div className="typography-grid">
            {typography.map((type) => (
              <div key={type.name} className="typography-item">
                <div className="typography-preview">
                  {type.element === 'h1' && <h1>Heading Example</h1>}
                  {type.element === 'h2' && <h2>Heading Example</h2>}
                  {type.element === 'h3' && <h3>Heading Example</h3>}
                  {type.element === 'h4' && <h4>Heading Example</h4>}
                  {type.element === 'p' && <p>Body text example paragraph with proper line height and spacing.</p>}
                  {type.element === 'small' && (
                    <small>Caption example text for secondary information</small>
                  )}
                  {type.element === 'span' && type.caps && (
                    <span className="text-label">LABEL TEXT</span>
                  )}
                  {type.element === 'span' && !type.caps && (
                    <span className="text-tag">Tag Example</span>
                  )}
                </div>
                <div className="typography-info">
                  <h4>{type.name}</h4>
                  <code>{type.size}</code>
                  <code>Weight: {type.weight} | LH: {type.lh} | LS: {type.ls}</code>
                  {type.desktop && <span className="desktop-badge">Desktop Override</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing Section */}
        <section className="section">
          <h2>Spacing Scale — 8pt Base Unit</h2>
          <div className="spacing-grid">
            {spacing.map((space) => (
              <div key={space.name} className="spacing-item">
                <div
                  className="spacing-visual"
                  style={{
                    width: space.value.split(' ')[0],
                    height: space.value.split(' ')[0],
                    backgroundColor: 'var(--color-primary)',
                  }}
                />
                <div className="spacing-info">
                  <h4>{space.name}</h4>
                  <code>{space.token}</code>
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
              <div className="shadow-preview" style={{ boxShadow: 'var(--shadow-focus)' }}>
                Focus Ring
              </div>
              <code>--shadow-focus</code>
            </div>
          </div>
        </section>

        {/* UI Components Section */}
        <section className="section" id="about">
          <h2>UI Components — Phase 2 Primitives</h2>

          {/* Buttons */}
          <div className="component-group">
            <h3>Buttons</h3>
            <div className="component-examples">
              <div className="example-row">
                <Button variant="primary" size="large">Primary Large</Button>
                <Button variant="primary" size="default">Primary Default</Button>
                <Button variant="primary" size="small">Primary Small</Button>
              </div>
              <div className="example-row">
                <Button variant="secondary" size="large">Secondary Large</Button>
                <Button variant="secondary" size="default">Secondary Default</Button>
                <Button variant="secondary" size="small">Secondary Small</Button>
              </div>
              <div className="example-row">
                <Button variant="ghost" size="large">Ghost Large</Button>
                <Button variant="ghost" size="default">Ghost Default</Button>
                <Button variant="ghost" size="small">Ghost Small</Button>
              </div>
            </div>
          </div>

          {/* Hyperlinks */}
          <div className="component-group">
            <h3>Hyperlinks</h3>
            <div className="component-examples">
              <p>
                This is a <a href="#example">example hyperlink in text</a> with blue-violet color and underline. 
                Here's <a href="#another">another hyperlink</a> to demonstrate the consistent styling across links.
              </p>
              <p>
                <a href="#standalone">Standalone hyperlink</a> · <a href="#multiple">Multiple</a> · <a href="#inline">Inline links</a>
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="component-group" id="experience">
            <h3>Tags</h3>
            <div className="component-examples">
              <div className="example-row">
                <Tag variant="default">Default</Tag>
                <Tag variant="designops">DesignOps</Tag>
                <Tag variant="plg">PLG</Tag>
                <Tag variant="b2b">B2B</Tag>
                <Tag variant="hci">HCI</Tag>
                <Tag variant="research">Research</Tag>
                <Tag variant="motion">Motion</Tag>
              </div>
            </div>
          </div>

          {/* Case Study Cards */}
          <div className="component-group" id="studies">
            <h3>Case Study Cards</h3>
            <div className="component-examples">
              <div className="card-grid">
                <CaseStudyCard
                  title="E-commerce Redesign"
                  tagline="Complete UX overhaul for a major retail platform"
                  tags={['DesignOps', 'B2B', 'Research']}
                  href="#"
                />
                <CaseStudyCard
                  title="Mobile App UX"
                  tagline="Native mobile experience for healthcare providers"
                  tags={['HCI', 'PLG', 'Motion']}
                  comingSoon={true}
                />
              </div>
            </div>
          </div>

          {/* Experience Entries */}
          <div className="component-group">
            <h3>Experience Entries</h3>
            <div className="component-examples">
              <ExperienceEntry
                company="TechCorp"
                role="Senior UX Designer"
                dates="2022 — Present"
                context="Led design system development and user research initiatives"
                bullets={[
                  "Designed and implemented comprehensive design system used across 15+ products",
                  "Conducted user research studies that informed product strategy and roadmap",
                  "Mentored junior designers and established design review processes"
                ]}
                featured={true}
              />
              <ExperienceEntry
                company="StartupXYZ"
                role="Product Designer"
                dates="2020 — 2022"
                context="Full-stack design role for early-stage SaaS product"
                bullets={[
                  "Owned end-to-end product design from concept to launch",
                  "Collaborated closely with engineering on implementation details",
                  "Created user testing protocols that improved conversion by 40%"
                ]}
              />
            </div>
          </div>

          {/* Section Wrapper */}
          <div className="component-group">
            <h3>Section Wrapper</h3>
            <div className="component-examples">
              <Section id="example-section" label="Example">
                <h3>This content is wrapped in a Section component</h3>
                <p>The Section provides consistent padding and container constraints.</p>
              </Section>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}