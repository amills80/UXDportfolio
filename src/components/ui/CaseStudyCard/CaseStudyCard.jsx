import React from 'react'
import { motion } from 'framer-motion'
import styles from './CaseStudyCard.module.css'

/**
 * CaseStudyCard Component
 * Vertical card layout for case studies
 *
 * @param {string} props.title - Case study title
 * @param {string} props.tagline - Brief description
 * @param {string[]} props.tags - Array of tag strings
 * @param {string} [props.href] - Link to case study
 * @param {boolean} [props.comingSoon] - Shows "Coming Soon" instead of link
 */
export default function CaseStudyCard({
  title,
  tagline,
  tags = [],
  href,
  comingSoon = false
}) {
  const content = (
    <>
      {/* Tags row */}
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.tagline}>{tagline}</p>
      </div>

      {/* Link */}
      <div className={styles.link}>
        {comingSoon ? (
          <span className={styles.comingSoon}>Coming Soon</span>
        ) : (
          <span className={styles.viewStudy}><span className="pill-primary-on-light">View Study →</span></span>
        )}
      </div>
    </>
  )

  // Wrap in motion.div for hover animations
  const cardContent = (
    <motion.div
      className={styles.card}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {content}
    </motion.div>
  )

  // Wrap in link if href provided and not coming soon
  if (href && !comingSoon) {
    return (
      <a href={href} className={styles.cardLink}>
        {cardContent}
      </a>
    )
  }

  return cardContent
}