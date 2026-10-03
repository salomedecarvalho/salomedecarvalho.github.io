import { useEffect, useState } from 'react'
import { navItems } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import styles from './AnchorNav.module.css'

const ids = navItems.map((item) => item.id)

export function AnchorNav() {
  const active = useActiveSection(ids)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Page sections">
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} aria-label="Back to top">
          S<span>d</span>C
        </a>

        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? styles.active : undefined}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>
          Get in touch <span aria-hidden="true">↘</span>
        </a>

        <button
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id="mobile-menu" className={`${styles.sheet} ${open ? styles.sheetOpen : ''}`} hidden={!open}>
        <ul>
          {navItems.map((item, i) => (
            <li key={item.id} style={{ transitionDelay: `${i * 40}ms` }}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
