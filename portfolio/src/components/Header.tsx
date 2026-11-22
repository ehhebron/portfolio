import { useState } from 'react'
import { nav, site } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo" aria-label={`${site.name}, home`}>
          {site.wordmark}
        </a>

        <nav aria-label="Primary" className="header__nav" data-open={open}>
          <ul id="primary-nav">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href={`mailto:${site.email}`} className="button button--primary">
            Contact <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="header__menu"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  )
}
