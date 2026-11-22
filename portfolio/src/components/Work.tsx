import { projects, type Project } from '../data/projects'
import { pad } from '../utils'
import { Section } from './Section'

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  // Always render three media slots so the layout holds before real images exist.
  const slots = [0, 1, 2].map((i) => project.images[i])

  return (
    <article className="project">
      <p className="label">
        <span className="label__index">{pad(index + 1)}</span>
        <span aria-hidden="true">/</span> {project.category}
      </p>

      <div className="project__grid">
        <div>
          <h3 className="display project__title">{project.title}</h3>
          <p className="project__subtitle">{project.subtitle}</p>
          <p className="project__summary">{project.summary}</p>
          <p className="project__timeline">
            <span className="muted">Timeline</span> {project.timeline}
          </p>
        </div>

        <ol className="numbered-list">
          {project.contributions.map((item, i) => (
            <li key={item}>
              <span className="numbered-list__index">{pad(i + 1)}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      <div className="project__media">
        {slots.map((src, i) => (
          <figure key={i} className="project__thumb">
            {src ? (
              <img src={src} alt={`${project.title} — image ${i + 1}`} loading="lazy" />
            ) : (
              <span className="project__placeholder" aria-hidden="true">
                Image {i + 1}
              </span>
            )}
          </figure>
        ))}
      </div>

      {project.href && (
        <a href={project.href} className="text-link">
          Read case study <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  )
}

export function Work() {
  return (
    <Section
      id="work"
      index="01"
      label="Work"
      title={['Selected', 'work']}
      intro="Case studies spanning design systems, product UI, and interaction."
    >
      <div className="project-list">
        {projects.map((project, i) => (
          <ProjectBlock key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
