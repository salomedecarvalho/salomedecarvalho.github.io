import type { MouseEvent } from 'react'
import { FitText } from '../ui/FitText'
import { navItems, profile } from '../../data/profile'
import styles from './Footer.module.css'

/** On the legal pages there is no #top (the hero), so scroll up there instead of leaving the page. */
function scrollToPageTop(e: MouseEvent<HTMLAnchorElement>) {
  if (document.getElementById('top')) return
  e.preventDefault()
  window.scrollTo({ top: 0 })
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <ul className={styles.nav}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
        <ul className={styles.nav}>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </li>
          <li>
            <a href={profile.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          </li>
        </ul>
      </div>

      <div className={`container ${styles.wordmark}`} aria-hidden="true">
        <FitText max={200}>
          Salomé<span className={styles.de}>de</span>Carvalho
        </FitText>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className={styles.legal}>
          <a href="#imprint">Imprint</a>
          <a href="#privacy">Privacy policy</a>
          <a href="#top" onClick={scrollToPageTop}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
