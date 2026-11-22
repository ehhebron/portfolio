import { site } from '../data/site'

export function Hero() {
  return (
    <section id="top" className="hero container">
      <p className="eyebrow">
        <span className="status-dot" aria-hidden="true" />
        {site.availability}
      </p>
      <h1 className="display hero__title">
        {site.headline.map((line, i) => (
          <span key={line} className={i === 0 ? 'line' : 'line line--muted'}>
            {line}
          </span>
        ))}
      </h1>
      <div className="hero__footer">
        <p className="hero__intro">{site.intro}</p>
        <a href="#work" className="text-link">
          Scroll down <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
