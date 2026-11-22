import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  /** Numbered label, e.g. "01". Omit for an unnumbered section. */
  index?: string
  label: string
  /** Each entry renders on its own line. */
  title: string[]
  intro?: string
  children?: ReactNode
}

export function Section({ id, index, label, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="section container" aria-labelledby={`${id}-title`}>
      <header className="section__header">
        <p className="label">
          {index && <span className="label__index">{index}</span>}
          <span aria-hidden="true">/</span> {label}
        </p>
        <h2 id={`${id}-title`} className="display section__title">
          {title.map((line) => (
            <span key={line} className="line">
              {line}
            </span>
          ))}
        </h2>
        <hr className="rule" />
        {intro && <p className="section__intro">{intro}</p>}
      </header>
      {children}
    </section>
  )
}
