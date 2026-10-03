import styles from './Intro.module.css'

const pillars = [
  {
    title: 'Research first',
    text: 'Interviews, journey maps and usability tests come before pixels, so every decision has a reason.',
  },
  {
    title: 'Systems that scale',
    text: 'Design systems and reusable components that keep big products consistent and handoffs fast.',
  },
  {
    title: 'Craft you can feel',
    text: 'Layout, typography and interaction patterns tuned until complex things feel simple.',
  },
]

export function Intro() {
  return (
    <section className={styles.intro} aria-label="Introduction">
      <span className={styles.backdrop} aria-hidden="true">
        Clarity
      </span>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.statement}>
          I design digital products that make <span className={styles.complex}>complex things</span> feel{' '}
          <span className={styles.clear}>clear, human and a little bit playful.</span>
        </h2>
        <p className={`label ${styles.sub}`}>From client's first briefing to final handoff</p>
      </div>

      <ul className={`container ${styles.pillars}`}>
        {pillars.map((p) => (
          <li key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
