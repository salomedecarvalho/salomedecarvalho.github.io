import { FitText } from '../../components/ui/FitText'
import { Photo } from '../../components/ui/Photo'
import { profile } from '../../data/profile'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.top}>
        <p className="label">
          {profile.role}
          <br />
          AI &amp; SaaS · Illustration
        </p>
        <p className={`label ${styles.right}`}>
          Designer by profession.
          <br />
          Curious by default.
        </p>
      </div>

      <h1 className={styles.name} aria-label={profile.name}>
        <FitText max={320}>
          <span className={styles.line}>{profile.firstName}</span>
          <span className={`${styles.line} ${styles.lineTwo}`}>
            <em>de</em>
            Carvalho
          </span>
        </FitText>
      </h1>

      <div className={styles.media}>
        <Photo
          photo={{ alt: 'Hero image — portrait or work collage', tone: 'purple' }}
          className={styles.photo}
        />
        <a href="#work" className={styles.badge} aria-label="See selected projects">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
            </defs>
            <text>
              <textPath href="#badge-circle" textLength="272" lengthAdjust="spacingAndGlyphs">
                Selected projects · Selected projects ·
              </textPath>
            </text>
          </svg>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  )
}
