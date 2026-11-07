import { useEffect, useState } from 'react'

/** Hash-based "pages" for a single-page site on GitHub Pages: #privacy and #imprint open the legal pages. */
export type View = 'home' | 'privacy' | 'imprint'

const legalViews: View[] = ['privacy', 'imprint']

const viewFromHash = (): View => {
  const hash = window.location.hash.slice(1) as View
  return legalViews.includes(hash) ? hash : 'home'
}

export function useHashView() {
  const [view, setView] = useState<View>(viewFromHash)

  useEffect(() => {
    const onHash = () => setView(viewFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (view !== 'home') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    // Coming back from a legal page to a section link (#about, #contact…): jump to it once rendered.
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [view])

  return view
}
