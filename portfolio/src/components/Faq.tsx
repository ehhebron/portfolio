import { faqs } from '../data/site'
import { Section } from './Section'

export function Faq() {
  return (
    <Section id="faq" index="06" label="FAQs" title={['Frequently', 'asked', 'questions']}>
      <div className="faq">
        {faqs.map((item) => (
          <details key={item.q} className="faq__item">
            <summary>
              {item.q}
              <span className="faq__icon" aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
