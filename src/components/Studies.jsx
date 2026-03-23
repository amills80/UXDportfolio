import React from 'react'
import { Section, CaseStudyCard } from './ui'

// Example studies data (replace with real data as needed)
const studies = [
  {
    title: 'Redesigning the Onboarding Flow',
    tagline: 'A UX case study on improving first-time user experience for a SaaS platform.',
    tags: ['UX Research', 'UI Design', 'Prototyping'],
    href: '#',
    comingSoon: true,
  },
  {
    title: 'Mobile App Accessibility Audit',
    tagline: 'Evaluating and enhancing accessibility for a cross-platform mobile app.',
    tags: ['Accessibility', 'Audit', 'Mobile'],
    href: '#',
    comingSoon: true,
  },
  {
    title: 'Design System Implementation',
    tagline: 'Building a scalable design system for a fast-growing startup.',
    tags: ['Design System', 'React', 'Documentation'],
    href: '#',
    comingSoon: true,
  },
]

export default function Studies() {
  return (
    <Section id="studies" label="Case Studies">
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {studies.map((study, idx) => (
          <CaseStudyCard key={idx} {...study} />
        ))}
      </div>
    </Section>
  )
}
