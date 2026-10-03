import type { Project } from '../../data/projects'
import { profile } from '../../data/profile'
import styles from './RequestAccess.module.css'

interface Props {
  project: Project
  /** "intro" sits under the opening text; "closing" is the band before the pager. */
  variant?: 'intro' | 'closing'
}

function requestLink(project: Project) {
  const subject = `Request full case study: ${project.title}`
  const body = [
    'Hi Salomé,',
    '',
    `I'd like to see the full case study for "${project.title}".`,
    '',
    'Name:',
    'Company / role:',
    '',
    'Thanks!',
  ].join('\n')
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/** Confidentiality note + "Request full access" button for NDA projects. */
export function RequestAccess({ project, variant = 'intro' }: Props) {
  return (
    <aside className={`${styles.box} ${styles[variant]}`}>
      <div className={styles.text}>
        <p className={`label ${styles.badge}`}>
          <span aria-hidden="true">●</span> Confidential case study
        </p>
        <p>
          This project is under a confidentiality agreement, so client names, locations and logos have been removed.
          The process and my role are described in full. Final visuals and details are available on request.
        </p>
      </div>
      <div className={styles.actions}>
        <a className={styles.button} href={requestLink(project)}>
          Request full access <span aria-hidden="true">↗</span>
        </a>
        <span className={styles.fallback}>or write to {profile.email}</span>
      </div>
    </aside>
  )
}
