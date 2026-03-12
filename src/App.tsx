import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Education } from './components/sections/Education'
import { Project } from './components/sections/Project'
import { Contact } from './components/sections/Contact'

export function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
