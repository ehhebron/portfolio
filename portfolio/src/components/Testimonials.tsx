import { testimonials } from '../data/site'
import { Section } from './Section'

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)

export function Testimonials() {
  return (
    <Section id="kind-words" index="05" label="Kind words" title={['In good', 'company']}>
      <div className="testimonials">
        {testimonials.map((t, i) => (
          <figure key={i} className="testimonial">
            <blockquote className="testimonial__quote">“{t.quote}”</blockquote>
            <figcaption className="testimonial__author">
              {t.avatar ? (
                <img src={t.avatar} alt="" className="avatar" width={40} height={40} />
              ) : (
                <span className="avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
              )}
              <span>
                <strong>{t.name}</strong>
                <span className="muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
