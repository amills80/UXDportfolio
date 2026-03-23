import { useEffect, useState } from 'react'

/**
 * useScrollSpy — Track which section is currently in viewport
 * Uses IntersectionObserver for efficient, performant scroll tracking
 * @param {string[]} sectionIds - Array of section ID strings to observe
 * @returns {string|null} - Currently active section ID, or null if none
 */
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return

    // Intersection Observer options:
    // – threshold: 0.3 means "fire callback when 30% of element is visible"
    // – rootMargin: provide a bit of space at the top for the nav bar
    const options = {
      threshold: 0.3,
      rootMargin: '-80px 0px -66%',
    }

    // Callback: updates active section when intersection changes
    const handleIntersection = (entries) => {
      // Find the first visible entry (topmost in viewport)
      const visibleEntry = entries.find((entry) => entry.isIntersecting)

      if (visibleEntry) {
        setActiveId(visibleEntry.target.id)
      }
    }

    // Create observer
    const observer = new IntersectionObserver(handleIntersection, options)

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Cleanup
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
      observer.disconnect()
    }
  }, [sectionIds])

  return activeId
}
