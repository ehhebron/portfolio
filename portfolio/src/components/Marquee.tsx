import { useState } from 'react'
import { marquee } from '../data/site'

/** Infinite scrolling text band with a pause control (WCAG 2.2.2). */
export function Marquee() {
  const [paused, setPaused] = useState(false)
  const items = Array.from({ length: 4 }, (_, i) => i)

  return (
    <div className="marquee" data-paused={paused}>
      <p className="visually-hidden">{marquee}</p>
      <div className="marquee__track" aria-hidden="true">
        {/* Two identical halves so the loop is seamless. */}
        {[0, 1].map((half) => (
          <div key={half} className="marquee__group">
            {items.map((i) => (
              <span key={i} className="marquee__item">
                {marquee}
                <span className="marquee__star">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <button type="button" className="marquee__toggle" onClick={() => setPaused((p) => !p)}>
        {paused ? 'Play motion' : 'Pause motion'}
      </button>
    </div>
  )
}
