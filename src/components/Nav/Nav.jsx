import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { Button } from '../ui'
import styles from './Nav.module.css'

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Track which section is in view
  // const activeSection = useScrollSpy(['about', 'experience', 'studies'])

  // Detect scroll to show background fill
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false)
    // Smooth scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Trap focus — prevent scroll when menu is open
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'studies', label: 'Studies' },
  ]

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo / Name */}
        <div className={styles.brand}>
          <a href="#" onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            <img src="/favicon.svg" alt="Alan Mills logo" className={styles.brandIcon} />
            Alan Mills
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(id)
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="ghost" size="default">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.hamburger}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <img
            src={isMobileMenuOpen ? '/Close.svg' : '/Burger.svg'}
            alt={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className={styles.hamburgerIcon}
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className={styles.drawerContent}>
                <ul className={styles.mobileNavLinks}>
                  {navLinks.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={''}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(id)
                        }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className={styles.drawerCTA}>
                  <Button
                    variant="primary"
                    size="large"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Let's Talk
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
