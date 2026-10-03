import { SectionHeading } from '../../components/ui/SectionHeading'
import { education, jobs } from '../../data/profile'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow="Where I've been" title="Work experience" backdrop="Career" onDark />

        <ol className={styles.list}>
          {jobs.map((job) => (
            <li key={job.company}>
              <details className={styles.item}>
                <summary className={styles.row}>
                  <span className={`label ${styles.period}`}>{job.period}</span>
                  <span className={styles.company}>{job.company}</span>
                  <span className={styles.role}>
                    {job.role}
                    <small>{job.country}</small>
                  </span>
                  <span className={styles.toggle} aria-hidden="true" />
                </summary>
                <ul className={styles.points}>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ol>

        <div className={styles.education}>
          <p className="label">Education</p>
          <ul>
            {education.map((e) => (
              <li key={e.title}>
                <span className="label">{e.period}</span>
                <strong>{e.title}</strong>
                <span>{e.place}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
