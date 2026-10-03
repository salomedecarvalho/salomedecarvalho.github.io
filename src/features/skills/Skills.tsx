import { SectionHeading } from '../../components/ui/SectionHeading'
import { skillGroups } from '../../data/profile'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow="What I bring" title="Skills" backdrop="Toolkit" />

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article key={group.title} className={`${styles.card} ${styles[group.tone]}`}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
