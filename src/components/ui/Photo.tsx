import type { CSSProperties } from 'react'
import type { Photo as PhotoData } from '../../data/projects'
import styles from './Photo.module.css'

interface Props {
  photo: PhotoData
  className?: string
  /** CSS aspect-ratio, e.g. "4 / 5". Omit to fill the parent. */
  ratio?: string
  showCaption?: boolean
  /** Show a real image at its own proportions instead of cropping it to `ratio`. */
  natural?: boolean
  /** CSS object-position for cropped images, e.g. "50% 25%" to keep a face in frame. */
  focus?: string
}

/** Renders the real image when `src` is set, otherwise a branded placeholder block. */
export function Photo({ photo, className = '', ratio, showCaption = true, natural = false, focus }: Props) {
  const isNatural = natural && !!photo.src
  const style: CSSProperties = ratio && !isNatural ? { aspectRatio: ratio } : {}
  const variant = photo.alt.length % 3

  return (
    <figure
      className={`${styles.photo} ${styles[photo.tone]} ${isNatural ? styles.natural : ''} ${className}`}
      style={style}
    >
      {photo.src ? (
        <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" style={focus ? { objectPosition: focus } : undefined} />
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
