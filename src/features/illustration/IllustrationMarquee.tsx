import { SectionHeading } from '../../components/ui/SectionHeading'
import { illustrations, profile } from '../../data/profile'
import styles from './IllustrationMarquee.module.css'

/** Each row gets its own illustrations, so the same piece never shows up in both rows. */
const topRow = illustrations.filter((_, i) => i % 2 === 0)
const bottomRow = illustrations.filter((_, i) => i % 2 === 1)

// Each half of the track repeats its set so it is always wider than the screen,
// even on very large monitors. The two halves make the -50% loop seamless.
const REPEAT = 2

function Row({ items, reverse = false }: { items: typeof illustrations; reverse?: boolean }) {
  const half = Array.from({ length: REPEAT }, () => items).flat()
  const loop = [...half, ...half]
  return (
    <div className={styles.viewport}>
      <ul className={`${styles.track} ${reverse ? styles.reverse : ''}`}>
        {loop.map((item, i) => {
          const duplicate = i >= items.length
          return (
            <li key={`${item.src}-${i}`} className={styles.item} aria-hidden={duplicate ? 'true' : undefined}>
              {/* width/height reserve each image's space before it loads, so the track doesn't jump */}
              <img
                src={item.src}
                alt={duplicate ? '' : item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
            </li>
          )
        })}
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
        <Row items={topRow} />
        <Row items={bottomRow} reverse />
      </div>
      <div className={`container ${styles.footer}`}>
        <a href={profile.instagram} target="_blank" rel="noreferrer" className={styles.link}>
          See more on Instagram <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
