import { useEffect, useRef, useState } from 'react'
import { heroScreens, heroText, heroTiles } from '../../data/heroAnimation'
import styles from './HeroAnimation.module.css'

/* ─────────────────────────────────────────────────────────────
   Timeline (seconds). One loop = LOOP seconds.
   0.0  tiles pop in as a row, text fades in
   1.2  row curls into a ring around the text
   2.4  ring spins; background purple → lilac (4.2) → pink (6.3)
   7.0  ring collapses into the centre
   7.6  lime flash, lilac card grows to fill the frame
   8.2  stacked screens rise in and float
  10.0  purple circle wipes back to the start
   ───────────────────────────────────────────────────────────── */
const LOOP = 10.6
const STILL_TIME = 3.4 // frame shown for reduced-motion visitors

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a))
const lerp = (a: number, b: number, p: number) => a + (b - a) * p
const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)
const easeOut = (p: number) => 1 - Math.pow(1 - p, 3)
const easeIn = (p: number) => p * p * p
const backOut = (p: number) => {
  const c = 1.70158
  return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2)
}

const BG = [
  { at: 0, color: 'var(--purple)', text: 'var(--paper)' },
  { at: 4.2, color: 'var(--lilac)', text: 'var(--purple)' },
  { at: 6.3, color: 'var(--pink)', text: 'var(--paper)' },
  { at: 7.6, color: 'var(--lime)', text: 'var(--ink)' },
]

export function HeroAnimation({ className = '' }: { className?: string }) {
  const stage = useRef<HTMLDivElement>(null)
  const tiles = useRef<(HTMLDivElement | null)[]>([])
  const textEl = useRef<HTMLDivElement>(null)
  const card = useRef<HTMLDivElement>(null)
  const screens = useRef<(HTMLDivElement | null)[]>([])
  const wipe = useRef<HTMLDivElement>(null)

  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(true)
  const time = useRef(0)

  /** Writes every element's style for time t. Pure function of t, so pausing/looping is trivial. */
  const render = (t: number) => {
    const el = stage.current
    if (!el) return
    const w = el.clientWidth
    const h = el.clientHeight
    const u = Math.min(w, h) / 100 // 1 "unit" = 1% of the shorter side
    el.dataset.t = t.toFixed(2) // handy for debugging / screenshot tests
    const n = heroTiles.length

    // Background + text colour
    const phase = [...BG].reverse().find((b) => t >= b.at) ?? BG[0]
    el.style.background = phase.color

    // Tiles: row → ring → spin → collapse
    const curl = easeInOut(seg(t, 1.2, 2.4))
    const collapse = easeIn(seg(t, 7.0, 7.6))
    const spin = Math.max(0, t - 1.2) * 0.32
    const rowStep = Math.min(9.6 * u, (w * 0.86) / n)
    const small = w < 700 // phones: tighter ring so it clears the corner badge
    const radius = (small ? 27 : 33) * u * (1 - collapse)
    const tileSize = lerp(Math.min(8.4 * u, rowStep * 0.92), 13 * u, curl) * (1 - collapse * 0.55)

    tiles.current.forEach((tile, i) => {
      if (!tile) return
      const pop = backOut(seg(t, 0.15 + i * 0.05, 0.5 + i * 0.05))
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2 + spin * curl
      const rowX = (i - (n - 1) / 2) * rowStep
      const x = lerp(rowX, Math.cos(angle) * radius, curl)
      const y = lerp(0, Math.sin(angle) * radius, curl)
      const tilt = curl * ((angle * 180) / Math.PI) * 0.18 + (i % 3 - 1) * 6 * curl
      const fadeOut = 1 - seg(t, 7.45, 7.6)
      tile.style.width = `${tileSize}px`
      tile.style.padding = `${tileSize * 0.07}px` // px, because % padding would refer to the stage width
      tile.style.height = `${tileSize * 1.12}px`
      tile.style.opacity = String(Math.min(1, pop) * fadeOut)
      tile.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${tilt}deg) scale(${Math.max(0, pop)})`
    })

    // Text: big around the row, then shrinks into the ring
    if (textEl.current) {
      const appear = easeOut(seg(t, 0.35, 0.9))
      const hide = seg(t, 6.9, 7.25)
      const scale = lerp(1, 0.5, curl)
      textEl.current.style.color = phase.text
      textEl.current.style.opacity = String(appear * (1 - hide))
      textEl.current.style.fontSize = `${8 * u}px`
      // Opening: text sits above and below the row of tiles; in the ring it closes up
      textEl.current.style.setProperty('--gap', `${lerp(Math.min(8.4 * u, rowStep) + 4 * u, 1.5 * u, curl) / scale}px`)
      // The block is 1 line + gap + 2 lines, so its gap sits above centre.
      // Shift it down half a line at the start so the gap, not the block, is centred on the row of tiles.
      textEl.current.style.transform = `translate(-50%, -50%) scale(${scale * lerp(0.9, 1, appear)}) translateY(${0.5 * (1 - curl)}em)`
    }

    // Lilac card grows from the centre to full frame, then the screens rise in
    if (card.current) {
      const grow = easeInOut(seg(t, 7.7, 8.5))
      const show = t >= 7.7 && t < 10.6
      card.current.style.opacity = show ? '1' : '0'
      card.current.style.width = `${lerp(w * 0.42, w, grow)}px`
      card.current.style.height = `${lerp(h * 0.55, h, grow)}px`
    }
    screens.current.forEach((s, i) => {
      if (!s) return
      const rise = easeOut(seg(t, 8.0 + i * 0.12, 8.8 + i * 0.12))
      const float = Math.sin((t - 8) * 1.6 + i) * 0.8 * u
      const sw = Math.min(w * 0.42, 72 * u)
      s.style.width = `${sw}px`
      s.style.opacity = String(rise)
      s.style.transform = `translate(-50%, -50%) translate(${(i - 1) * 4.5 * u}px, ${(i - 1) * 3.5 * u + (1 - rise) * 12 * u + float}px)`
      s.style.zIndex = String(10 - i)
    })

    // Purple circle wipe back to the start of the loop
    if (wipe.current) {
      const p = easeInOut(seg(t, 10.0, 10.6))
      wipe.current.style.clipPath = `circle(${p * 75}% at 50% 50%)`
      wipe.current.style.opacity = t >= 10.0 ? '1' : '0'
    }
  }

  // Animation loop. While paused, off screen or for reduced motion, draw one frame
  // (again on resize) instead of running requestAnimationFrame, to save battery.
  useEffect(() => {
    if (reduced || paused || !visible) {
      const t = reduced ? STILL_TIME : time.current
      render(t)
      const ro = new ResizeObserver(() => render(t))
      if (stage.current) ro.observe(stage.current)
      return () => ro.disconnect()
    }
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000)
      last = now
      time.current = (time.current + dt) % LOOP
      render(time.current)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, visible, reduced])

  // Pause while the hero is off screen
  useEffect(() => {
    const el = stage.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={stage}
      className={`${styles.stage} ${className}`}
      role="img"
      aria-label={`Animated collage of Salomé's projects and illustrations: ${heroText.top} ${heroText.bottom.join(' ')}`}
    >
      {heroTiles.map((tile, i) => (
        <div
          key={tile.src + i}
          ref={(el) => {
            tiles.current[i] = el
          }}
          className={`${styles.tile} ${styles[tile.frame]}`}
        >
          <img src={tile.src} alt="" decoding="async" />
        </div>
      ))}

      <div ref={textEl} className={styles.text} aria-hidden="true">
        <span>{heroText.top}</span>
        <span>
          {heroText.bottom[0]}
          <br />
          {heroText.bottom[1]}
        </span>
      </div>

      <div ref={card} className={styles.card} aria-hidden="true">
        {heroScreens.map((src, i) => (
          <div
            key={src + i}
            ref={(el) => {
              screens.current[i] = el
            }}
            className={styles.screen}
          >
            <img src={src} alt="" decoding="async" />
          </div>
        ))}
      </div>

      <div ref={wipe} className={styles.wipe} aria-hidden="true" />

      {!reduced && (
        <button
          className={styles.toggle}
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Play animation' : 'Pause animation'}
        >
          <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span>
        </button>
      )}
    </div>
  )
}
