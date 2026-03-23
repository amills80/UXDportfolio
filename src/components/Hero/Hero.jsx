import { useRive } from '@rive-app/react-canvas'
import { motion } from 'framer-motion'
import { Button } from '../ui'
import styles from './Hero.module.css'

export function Hero() {
  // Rive animation setup
  const { RiveComponent } = useRive({
    src: '/rive/hero-background.riv',
    autoplay: true,
    // stateMachines or animations to be configured once .riv file is provided
  })

  return (
    <section className={styles.hero} id="hero">
      {/* Rive Animation Background */}
      <div className={styles.riveBackground}>
        <RiveComponent />
        <div className={styles.overlay}></div>
      </div>

      {/* Foreground Content */}
      <div className={styles.content}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Alan Mills
          </motion.h1>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Senior Product Designer & UX Strategist
          </motion.h2>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I make complex environments more people-friendly — bridging systems-thinking, DesignOps, and Product-Led Growth to design experiences that scale.
          </motion.p>

          <motion.p
            className={styles.subTagline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            7+ years in Ed-Tech, B2B SaaS, and Staffing · Saint Augustine, FL
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button variant="primary" size="large">
              View My Work
            </Button>
            <Button as="a" href="/resume.pdf" variant="ghost" size="large">
              Download Resume (PDF)
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.photoContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <img
            src="/headshot.png"
            alt="Alan Mills - Senior Product Designer & UX Strategist"
            className={styles.photo}
          />
        </motion.div>
      </div>
    </section>
  )
}
