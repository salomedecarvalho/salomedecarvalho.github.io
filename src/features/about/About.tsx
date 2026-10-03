import { Photo } from '../../components/ui/Photo'
import { profile } from '../../data/profile'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        <p className={`label ${styles.eyebrow}`}>About me</p>

        <div className={styles.media}>
          <Photo photo={{ alt: 'Portrait of Salomé', tone: 'lilac' }} ratio="4 / 5" />
          <span className={styles.sticker}>
            <strong>5+</strong> years
          </span>
        </div>

        <div className={styles.text}>
          <h2 className={styles.title}>
            Olá, I'm <span>Salomé</span>.
          </h2>
          <p className={styles.lead}>
            A product designer from Portugal, now in Germany, with 5+ years in digital agencies working on complex
            products, B2B platforms and data-driven systems.
          </p>
          <p>
            I like owning projects end to end, from client workshops and early discovery through to developer handoff,
            with a strong eye for layout, typography, hierarchy and interaction patterns. I use AI tools to explore and
            prototype faster, without cutting corners on the process. Most days you'll find me in Figma, talking to
            developers, product managers and clients.
          </p>

          <div className={styles.hobbies}>
            <p className="label">When I'm not designing</p>
            <div className={styles.rows}>
              {profile.hobbies.map((row) => (
                <ul key={row.join()}>
                  {row.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ))}
            </div>
            <div className={styles.story}>
              {profile.hobbiesText.map((t) => (
                <p key={t.slice(0, 20)}>{t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
