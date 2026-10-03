import { FitText } from '../ui/FitText'
import { navItems, profile } from '../../data/profile'
import styles from './Footer.module.css'

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
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
