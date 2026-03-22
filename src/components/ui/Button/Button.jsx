import React from 'react'
import styles from './Button.module.css'

/**
 * Button Component
 * Shared UI primitive for the portfolio
 *
 * @param {Object} props
 * @param {'primary'|'secondary'|'ghost'} [props.variant='primary'] - Button style variant
 * @param {'large'|'default'|'small'} [props.size='default'] - Button size
 * @param {string} [props.href] - If provided, renders as <a> instead of <button>
 * @param {Function} [props.onClick] - Click handler (for button only)
 * @param {boolean} [props.disabled] - Disabled state
 * @param {React.ReactNode} props.children - Button content
 */
export default function Button({
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  disabled = false,
  children,
  ...props
}) {
  const className = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    disabled && styles.disabled
  ].filter(Boolean).join(' ')

  // Render as link if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...props}
      >
        {children}
      </a>
    )
  }

  // Render as button
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}