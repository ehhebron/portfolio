import { experience } from '../data/site'
import { pad } from '../utils'
import { Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title={['Years of', 'making things.']}
      intro="Roles where I have designed, built, and shipped product UI."
    >
      <ol className="timeline">
        {experience.map((role, i) => (
          <li key={`${role.company}-${role.period}`} className="timeline__row">
            <span className="timeline__index">{pad(i + 1)}</span>
            <div>
              <p className="timeline__title">{role.title}</p>
              <p className="timeline__company">
                {role.href ? (
                  <a href={role.href} target="_blank" rel="noreferrer">
                    {role.company} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  role.company
                )}
              </p>
              {role.detail && <p className="muted timeline__detail">{role.detail}</p>}
            </div>
            <span className="timeline__period">{role.period}</span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
