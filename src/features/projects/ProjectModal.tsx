import { useCallback, useEffect, useRef, useState } from 'react'
import { Photo } from '../../components/ui/Photo'
import type { Project } from '../../data/projects'
import { RequestAccess } from './RequestAccess'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import styles from './ProjectModal.module.css'

interface Props {
  project: Project
  prev: Project
  next: Project
  onClose: () => void
  onNavigate: (slug: string) => void
}

const EXIT_MS = 420

/** Single-article case study that slides up over the Work section. */
export function ProjectModal({ project, prev, next, onClose, onNavigate }: Props) {
  const [closing, setClosing] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  useLockBodyScroll(true)

  const close = useCallback(() => {
    setClosing(true)
    window.setTimeout(onClose, EXIT_MS)
  }, [onClose])

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus({ preventScroll: true })
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      opener?.focus({ preventScroll: true })
    }
  }, [close])

  const [hero, ...rest] = project.gallery

  return (
    <div className={`${styles.overlay} ${closing ? styles.closing : ''}`}>
      <div className={styles.backdrop} onClick={close} aria-hidden="true" />

      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`case-${project.slug}`}
      >
        <div className={styles.bar}>
          <span className="label">Case study — {project.shortTitle}</span>
          <button ref={closeRef} className={styles.close} onClick={close}>
            Close <span aria-hidden="true">✕</span>
          </button>
        </div>

        <article>
          {/* Opening */}
          <header className={`${styles.wrap} ${styles.head}`}>
            {project.confidential && <p className={`label ${styles.caseLabel}`}>Confidential case study</p>}
            <ul className={styles.tags}>
              {project.tags.map((t) => (
                <li key={t} className="label">
                  {t}
                </li>
              ))}
            </ul>
            <h2
              id={`case-${project.slug}`}
              className={`${styles.title} ${project.title.length > 32 ? styles.titleLong : ''}`}
            >
              {project.title}
            </h2>

            <div className={styles.introGrid}>
              <div className={styles.intro}>
                {project.intro.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <dl className={styles.facts}>
                {project.client && (
                  <div>
                    <dt className="label">Client</dt>
                    <dd>{project.client}</dd>
                  </div>
                )}
                {project.madeUnder && (
                  <div>
                    <dt className="label">Made under</dt>
                    <dd>{project.madeUnder}</dd>
                  </div>
                )}
                {project.role && (
                  <div>
                    <dt className="label">My role</dt>
                    <dd>{project.role}</dd>
                  </div>
                )}
                <div>
                  <dt className="label">Year</dt>
                  <dd>{project.year}</dd>
                </div>
              </dl>
            </div>

            {project.confidential && <RequestAccess project={project} />}
          </header>

          <Photo photo={project.cover} className={styles.cover} />

          {/* Contributions */}
          <section className={`${styles.wrap} ${styles.split}`}>
            <h3 className={styles.h3}>My contributions</h3>
            <ul className={styles.bullets}>
              {project.contributions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          {/* Needs */}
          <section className={`${styles.wrap} ${styles.block}`}>
            <h3 className={styles.h3}>Project needs</h3>
            <div className={styles.cards}>
              {project.needs.map((n) => (
                <div key={n.title} className={styles.card}>
                  <h4>{n.title}</h4>
                  <p>{n.text}</p>
                </div>
              ))}
            </div>
          </section>

          {hero && (
            <div className={styles.wrap}>
              <Photo photo={hero} ratio="16 / 9" />
            </div>
          )}

          {/* Focus */}
          <section className={`${styles.wrap} ${styles.split}`}>
            <h3 className={styles.h3}>My focus</h3>
            <dl className={styles.focus}>
              {project.focus.map((f) => (
                <div key={f.title}>
                  <dt>{f.title}</dt>
                  <dd>{f.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          {rest.length > 0 && (
            <div className={`${styles.wrap} ${styles.gallery}`}>
              {rest.map((photo, i) => (
                <Photo key={photo.alt} photo={photo} ratio={i === 0 && rest.length % 2 ? '16 / 9' : '4 / 5'} className={i === 0 && rest.length % 2 ? styles.wide : ''} />
              ))}
            </div>
          )}

          {/* Outcome */}
          <section className={styles.goal}>
            <div className={styles.wrap}>
              <p className="label">Goal achieved</p>
              <p className={styles.goalText}>{project.goal}</p>
              {project.results && (
                <ul className={styles.results}>
                  {project.results.map((r) => (
                    <li key={r.label}>
                      <strong>{r.value}</strong>
                      <span>{r.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {project.confidential && (
            <div className={`${styles.wrap} ${styles.closingRequest}`}>
              <RequestAccess project={project} variant="closing" />
            </div>
          )}

          <nav className={styles.pager} aria-label="More projects">
            <button className={styles.pagerLink} onClick={() => onNavigate(prev.slug)}>
              <span className="label">← Previous project</span>
              <span className={styles.pagerTitle}>{prev.title}</span>
            </button>
            <button className={`${styles.pagerLink} ${styles.pagerNext}`} onClick={() => onNavigate(next.slug)}>
              <span className="label">Next project →</span>
              <span className={styles.pagerTitle}>{next.title}</span>
            </button>
          </nav>
        </article>
      </div>
    </div>
  )
}
