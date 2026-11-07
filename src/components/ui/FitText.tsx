import { useLayoutEffect, useRef, type ReactNode } from 'react'
import styles from './FitText.module.css'

interface Props {
  children: ReactNode
  className?: string
  /** Upper bound in px so the type doesn't grow forever on huge screens. */
  max?: number
}

/** Scales its content so the widest line exactly fills the parent's width. */
export function FitText({ children, className = '', max = 400 }: Props) {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const o = outer.current
    const i = inner.current
    if (!o || !i) return

    const round = (px: number) => Math.floor(px * 100) / 100
    const fit = () => {
      const width = o.clientWidth
      i.style.fontSize = '100px'
      let size = Math.min(max, (100 * width) / i.scrollWidth)
      i.style.fontSize = `${round(size)}px`
      // Parts with a fixed size (e.g. a small "de" set in px) and mobile text zoom don't
      // scale in proportion, so check the real width and shrink until it fits.
      for (let pass = 0; pass < 4 && i.scrollWidth > width; pass++) {
        size *= width / i.scrollWidth
        i.style.fontSize = `${round(size)}px`
      }
    }

    // Only refit when the width changes: the height changes with every fit,
    // and reacting to that can make the text (and the page below it) jitter.
    let lastWidth = -1
    const ro = new ResizeObserver(() => {
      if (o.clientWidth === lastWidth) return
      lastWidth = o.clientWidth
      fit()
    })
    ro.observe(o)
    // The web font can arrive after the first fit and is wider than the fallback.
    document.fonts?.ready.then(fit)
    document.fonts?.addEventListener('loadingdone', fit)
    return () => {
      ro.disconnect()
      document.fonts?.removeEventListener('loadingdone', fit)
    }
  }, [max])

  return (
    <div ref={outer} className={`${styles.outer} ${className}`}>
      <span ref={inner} className={styles.inner}>
        {children}
      </span>
    </div>
  )
}
