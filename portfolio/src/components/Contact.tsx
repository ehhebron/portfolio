import { useState } from 'react'
import { site } from '../data/site'
import { Section } from './Section'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <Section
      id="contact"
      label="Contact"
      title={['Have a role', 'in mind?']}
      intro="I’m always happy to talk about design systems, interaction, or a team that cares about craft."
    >
      <div className="contact">
        <a href={`mailto:${site.email}`} className="button button--primary button--lg">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
        <div className="contact__copy">
          <span className="muted">Prefer mail?</span>
          <button type="button" className="copy-button" onClick={copyEmail}>
            {site.email}
            <span className="copy-button__hint">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          <span className="visually-hidden" aria-live="polite">
            {copied ? 'Email copied to clipboard' : ''}
          </span>
        </div>
      </div>
    </Section>
  )
}
