import type { CSSProperties } from 'react'
import type { Photo as PhotoData } from '../../data/projects'
import styles from './Photo.module.css'

interface Props {
  photo: PhotoData
  className?: string
  /** CSS aspect-ratio, e.g. "4 / 5". Omit to fill the parent. */
  ratio?: string
  showCaption?: boolean
}

/** Renders the real image when `src` is set, otherwise a branded placeholder block. */
export function Photo({ photo, className = '', ratio, showCaption = true }: Props) {
  const style: CSSProperties = ratio ? { aspectRatio: ratio } : {}
  const variant = photo.alt.length % 3

  return (
    <figure className={`${styles.photo} ${styles[photo.tone]} ${className}`} style={style}>
      {photo.src ? (
        <img src={photo.src} alt={photo.alt} loading="lazy" />
      ) : (
        <>
          <span className={`${styles.shape} ${styles[`v${variant}`]}`} aria-hidden="true" />
          {showCaption && (
            <figcaption className={`label ${styles.caption}`}>
              <span className={styles.dot} aria-hidden="true" />
              Photo — {photo.alt}
            </figcaption>
          )}
        </>
      )}
    </figure>
  )
}
