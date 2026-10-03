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

    const fit = () => {
      i.style.fontSize = '100px'
      const ratio = o.clientWidth / i.scrollWidth
      i.style.fontSize = `${Math.min(max, Math.floor(100 * ratio * 100) / 100)}px`
    }

    fit()
    document.fonts?.ready.then(fit)
    const ro = new ResizeObserver(fit)
    ro.observe(o)
    return () => ro.disconnect()
  }, [max])

  return (
    <div ref={outer} className={`${styles.outer} ${className}`}>
      <span ref={inner} className={styles.inner}>
        {children}
      </span>
    </div>
  )
}
