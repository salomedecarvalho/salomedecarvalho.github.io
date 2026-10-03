import { useState } from 'react'
import { profile } from '../../data/profile'
import styles from './Contact.module.css'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      const range = document.createRange()
      const el = document.getElementById('contact-email')
      if (el) {
        range.selectNodeContents(el)
        window.getSelection()?.removeAllRanges()
        window.getSelection()?.addRange(range)
      }
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className="label">Contact</p>
        <h2 className={styles.title}>
          Let's make <br />
          something <em>awesome</em>
        </h2>

        <div className={styles.emailRow}>
          <a id="contact-email" href={`mailto:${profile.email}`} className={styles.email}>
            {profile.email}
          </a>
          <button className={styles.copy} onClick={copy} aria-live="polite">
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>

        <ul className={styles.links}>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={profile.instagram} target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
          </li>
          <li>
            <span>Open to work within the European Union</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
