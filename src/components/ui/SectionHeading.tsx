import styles from './SectionHeading.module.css'

interface Props {
  eyebrow: string
  title: string
  /** Huge outlined word that sits behind the title. */
  backdrop?: string
  onDark?: boolean
}

export function SectionHeading({ eyebrow, title, backdrop, onDark = false }: Props) {
  return (
    <header className={`${styles.heading} ${onDark ? styles.dark : ''}`}>
      {backdrop && (
        <span className={styles.backdrop} aria-hidden="true">
          {backdrop}
        </span>
      )}
      <p className="label">{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
    </header>
  )
}
