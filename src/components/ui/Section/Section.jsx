import React from 'react'
import styles from './Section.module.css'

/**
 * Section Component
 * Consistent wrapper for page sections
 *
 * @param {string} props.id - Section ID for anchor scrolling
 * @param {string} [props.label] - Optional small label above heading
 * @param {React.ReactNode} props.children - Section content
 */
export default function Section({ id, label, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        {label && (
          <span className={styles.label}>{label}</span>
        )}
        {children}
      </div>
    </section>
  )
}