import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SETTLE_TIMEOUT_MS = 2000

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null

    if (!target) {
      window.scrollTo(0, 0)
      return
    }

    target.scrollIntoView({ behavior: 'smooth' })

    if (typeof ResizeObserver === 'undefined') return

    // Sections above the target can still be loading (e.g. async portfolio data)
    // and grow taller once they resolve, pushing the target out of view. Re-pin it
    // while the page settles, but back off the moment the user scrolls on their own.
    const stopCorrecting = () => {
      observer.disconnect()
      clearTimeout(timeout)
      window.removeEventListener('wheel', stopCorrecting)
      window.removeEventListener('touchstart', stopCorrecting)
    }

    const observer = new ResizeObserver(() => {
      target.scrollIntoView({ behavior: 'auto' })
    })
    observer.observe(document.body)

    const timeout = setTimeout(stopCorrecting, SETTLE_TIMEOUT_MS)
    window.addEventListener('wheel', stopCorrecting, { passive: true })
    window.addEventListener('touchstart', stopCorrecting, { passive: true })

    return stopCorrecting
  }, [pathname, hash])

  return null
}
