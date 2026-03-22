import React from 'react'
import styles from './Tag.module.css'

/**
 * Tag Component (Pill)
 * Small, rounded tag/pill for categories, skills, etc.
 *
 * @param {'default'|'designops'|'plg'|'b2b'|'hci'|'research'|'motion'} [props.variant='default'] - Tag variant
 * @param {React.ReactNode} props.children - Tag content
 */
export default function Tag({ variant = 'default', children, ...props }) {
  return (
    <span
      className={`${styles.tag} ${styles[`variant-${variant}`]}`}
      {...props}
    >
      {children}
    </span>
  )
}