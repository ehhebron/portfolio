import { experiments } from '../data/projects'
import { Section } from './Section'

export function Lab() {
  return (
    <Section
      id="lab"
      index="04"
      label="Lab"
      title={['Small', 'experiments']}
      intro="Explorations in interaction, motion, and front-end craft."
    >
      <ul className="lab-grid">
        {experiments.map((exp, i) => (
          <li key={exp.title} className="lab-item">
            <span className="label__index">{String.fromCharCode(65 + i)}</span>
            <h3 className="lab-item__title">
              {exp.href ? <a href={exp.href}>{exp.title}</a> : exp.title}
            </h3>
            <p className="muted">{exp.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
