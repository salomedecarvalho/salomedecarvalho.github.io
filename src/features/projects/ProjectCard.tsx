import type { MouseEvent } from 'react'
import { Photo } from '../../components/ui/Photo'
import type { Project } from '../../data/projects'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  layout: 'feature' | 'left' | 'right'
  onOpen: (slug: string) => void
}

/** Keeps the "Explore project" circle under the pointer while it moves over the image. */
function followPointer(e: MouseEvent<HTMLButtonElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

export function ProjectCard({ project, layout, onOpen }: Props) {
  return (
    <article className={`${styles.card} ${styles[layout]}`}>
      <button
        className={styles.media}
        onClick={() => onOpen(project.slug)}
        onMouseMove={followPointer}
        onMouseEnter={followPointer}
        aria-label={`Explore project: ${project.title}`}
      >
        <Photo photo={project.cover} className={styles.photo} />
        <span className={styles.open} aria-hidden="true">
          Explore
          <br />
          project
        </span>
      </button>

      <div className={styles.body}>
        <p className={`label ${styles.meta}`}>
          {project.confidential ? (
            <span className={styles.lock}>Confidential case study</span>
          ) : (
            <>
              {project.client ? `${project.client} · ` : ''}
              {project.madeUnder}
            </>
          )}{' '}
          · {project.year}
        </p>
        <h3 className={`${styles.title} ${project.title.length > 32 ? styles.long : ''}`}>
          <button onClick={() => onOpen(project.slug)}>{project.title}</button>
        </h3>
        <p className={styles.summary}>{project.summary}</p>
        <ul className={styles.tags}>
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <button className={styles.plus} onClick={() => onOpen(project.slug)} aria-label={`Open project: ${project.title}`}>
          <span aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
