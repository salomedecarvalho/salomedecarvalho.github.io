import { Photo } from '../../components/ui/Photo'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { illustrations, profile } from '../../data/profile'
import styles from './IllustrationMarquee.module.css'

const ratios = { portrait: '4 / 5', square: '1 / 1', landscape: '4 / 3' } as const

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...illustrations].reverse() : illustrations
  // Rendered twice so the -50% translate loops seamlessly.
  const loop = [...items, ...items]
  return (
    <div className={styles.viewport}>
      <ul className={`${styles.track} ${reverse ? styles.reverse : ''}`}>
        {loop.map((item, i) => (
          <li
            key={`${item.title}-${i}`}
            className={`${styles.item} ${styles[item.ratio]}`}
            aria-hidden={i >= items.length ? 'true' : undefined}
          >
            <Photo photo={{ alt: item.title, tone: item.tone }} ratio={ratios[item.ratio]} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function IllustrationMarquee() {
  return (
    <section id="illustration" className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow="Illustration" title="Off the clock" backdrop="Draw" />
      </div>
      <div className={styles.rows}>
        <Row />
        <Row reverse />
      </div>
      <div className={`container ${styles.footer}`}>
        <a href={profile.instagram} target="_blank" rel="noreferrer" className={styles.link}>
          See more on Instagram <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
