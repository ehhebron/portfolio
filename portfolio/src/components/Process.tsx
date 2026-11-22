import { useRef, useState, type KeyboardEvent } from 'react'
import { process } from '../data/site'
import { pad } from '../utils'
import { Section } from './Section'

/** Accessible tabs (WAI-ARIA pattern) — arrow keys move between steps. */
export function Process() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const step = process[active]

  function onKeyDown(e: KeyboardEvent) {
    const last = process.length - 1
    const next =
      e.key === 'ArrowRight' ? (active === last ? 0 : active + 1)
      : e.key === 'ArrowLeft' ? (active === 0 ? last : active - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null
    if (next === null) return
    e.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <Section id="process" index="03" label="Process" title={['How I', 'work']}>
      <div role="tablist" aria-label="Process steps" className="tabs" onKeyDown={onKeyDown}>
        {process.map((s, i) => (
          <button
            key={s.title}
            ref={(el) => {
              tabs.current[i] = el
            }}
            role="tab"
            id={`step-tab-${i}`}
            aria-selected={i === active}
            aria-controls="step-panel"
            tabIndex={i === active ? 0 : -1}
            className="tab"
            onClick={() => setActive(i)}
          >
            <span className="tab__index">{pad(i + 1)}</span>
            {s.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="step-panel"
        aria-labelledby={`step-tab-${active}`}
        className="tab-panel"
        key={active}
      >
        <p className="tab-panel__description">{step.description}</p>
        <div>
          <p className="muted">In this phase</p>
          <ul className="bullet-list">
            {step.activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
