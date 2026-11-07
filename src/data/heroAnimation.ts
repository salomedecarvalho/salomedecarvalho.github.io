import { img } from './images'

/**
 * Content of the animated hero.
 * Swap images by replacing the files in src/assets/images/... or pointing to new ones here.
 * Order = order around the ring (clockwise, starting at the top).
 */
export const heroTiles: { src: string; frame: 'lilac' | 'pink' | 'lime' | 'paper' | 'ink' }[] = [
  { src: img('manda/02'), frame: 'lilac' },
  { src: img('illustrations/04'), frame: 'lime' },
  { src: img('ecos/03'), frame: 'paper' },
  { src: img('illustrations/03'), frame: 'pink' },
  { src: img('manda/01'), frame: 'lilac' },
  { src: img('illustrations/07'), frame: 'paper' },
  { src: img('rigk/01'), frame: 'lime' },
  { src: img('illustrations/01'), frame: 'ink' },
  { src: img('manda/03'), frame: 'pink' },
  { src: img('illustrations/09'), frame: 'lilac' },
  { src: img('ecos/02'), frame: 'paper' },
  { src: img('illustrations/06'), frame: 'pink' },
]

/** The three stacked screens at the end (front first). Clean UI screenshots work best. */
export const heroScreens: string[] = [img('manda/03'), img('manda/02'), img('manda/01')]

export const heroText = { top: 'Oh hi!', bottom: ['Come and', 'explore!'] }
