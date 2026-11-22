import { nav, site } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="label">/ Navigate</p>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">/ Elsewhere</p>
            <ul>
              {site.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">/ Say hello</p>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="muted">{site.location}</li>
            </ul>
          </div>
        </div>

        <p className="footer__wordmark" aria-hidden="true">
          {site.wordmark}
        </p>

        <div className="footer__bottom">
          <span>
            ©{new Date().getFullYear()} {site.name}
          </span>
          <span>Designed &amp; built by me</span>
        </div>
      </div>
    </footer>
  )
}
