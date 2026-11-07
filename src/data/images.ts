/**
 * Optimised images live in src/assets/images/<section>/<name>.webp
 * (made from the originals in Website/images). Vite fingerprints them at build time.
 */
const files = import.meta.glob<string>('../assets/images/**/*.webp', { eager: true, import: 'default' })

/** img('manda/cover') → URL of src/assets/images/manda/cover.webp */
export function img(path: string): string {
  const url = files[`../assets/images/${path}.webp`]
  if (!url) throw new Error(`Image not found: src/assets/images/${path}.webp`)
  return url
}
