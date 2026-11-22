import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Lab } from './components/Lab'
import { Marquee } from './components/Marquee'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Work } from './components/Work'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Process />
        <Lab />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Marquee />
      <Footer />
    </>
  )
}

export default App
