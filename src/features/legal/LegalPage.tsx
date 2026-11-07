import { useState } from 'react'
import type { Block, Lang, Policy } from '../../data/privacy'
import styles from './LegalPage.module.css'

function renderBlock(block: Block, i: number) {
  if (typeof block === 'string') return <p key={i}>{block}</p>
  if ('lines' in block)
    return (
      <p key={i} className={styles.lines}>
        {block.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    )
  if ('list' in block)
    return (
      <ul key={i} className={styles.list}>
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  return (
    <p key={i}>
      <a className={styles.link} href={block.href} target="_blank" rel="noreferrer">
        {block.link} ↗
      </a>
    </p>
  )
}

/** Shared layout for the legal pages (privacy policy, imprint), with an English / German switch. */
export function LegalPage({ content }: { content: Record<Lang, Policy> }) {
  const [lang, setLang] = useState<Lang>('en')
  const policy = content[lang]

  return (
    <main className={styles.page} lang={lang}>
      <div className={styles.inner}>
        <a href="#top" className={`label ${styles.back}`}>
          ← {policy.back}
        </a>

        <div className={styles.switch} role="group" aria-label="Language / Sprache">
          {(['en', 'de'] as const).map((l) => (
            <button key={l} aria-pressed={lang === l} onClick={() => setLang(l)}>
              {l === 'en' ? 'English' : 'Deutsch'}
            </button>
          ))}
        </div>

        <h1 className={styles.title}>{policy.title}</h1>
        <p className={`label ${styles.updated}`}>{policy.updated}</p>

        {policy.sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {section.body.map(renderBlock)}
          </section>
        ))}
      </div>
    </main>
  )
}
