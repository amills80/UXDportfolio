import React from 'react'
import styles from './ExperienceEntry.module.css'

/**
 * ExperienceEntry Component
 * Timeline-style layout for work experience
 *
 * @param {string} props.company - Company name
 * @param {string} props.role - Job title/role
 * @param {string} props.dates - Employment dates
 * @param {string} props.context - Brief context about the role
 * @param {string[]} props.bullets - Array of achievement bullet points
 * @param {boolean} [props.featured=false] - Adds left-border accent
 */
export default function ExperienceEntry({
  company,
  role,
  dates,
  context,
  bullets = [],
  featured = false
}) {
  return (
    <div className={`${styles.entry} ${featured ? styles.featured : ''}`}>
      {/* Header row */}
      <div className={styles.header}>
        <div className={styles.roleCompany}>
          <h4 className={styles.role}>{role}</h4>
          <span className={styles.company}><span className="pill-primary-on-light">{company}</span></span>
        </div>
        <span className={styles.dates}>{dates}</span>
      </div>

      {/* Context */}
      <p className={styles.context}>{context}</p>

      {/* Bullets */}
      {bullets.length > 0 && (
        <ul className={styles.bullets}>
          {bullets.map((bullet, index) => (
            <li key={index} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}