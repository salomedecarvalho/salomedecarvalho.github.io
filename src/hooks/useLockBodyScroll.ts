import { useEffect } from 'react'

/**
 * Stops the page behind an overlay (mobile menu, project pop-up) from scrolling.
 * The lock goes on <html>: html has `overflow-x: clip`, so a lock on <body> alone
 * would not reach the viewport. The scrollbar width is padded back so the layout
 * doesn't jump on desktop.
 */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const root = document.documentElement
    const scrollbar = window.innerWidth - root.clientWidth
    const previous = { overflow: root.style.overflow, paddingRight: root.style.paddingRight }
    root.style.overflow = 'hidden'
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`
    return () => {
      root.style.overflow = previous.overflow
      root.style.paddingRight = previous.paddingRight
    }
  }, [locked])
}
