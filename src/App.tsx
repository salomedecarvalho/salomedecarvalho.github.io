import { AnchorNav } from './components/layout/AnchorNav'
import { Footer } from './components/layout/Footer'
import { About } from './features/about/About'
import { Contact } from './features/contact/Contact'
import { Experience } from './features/experience/Experience'
import { Hero } from './features/hero/Hero'
import { IllustrationMarquee } from './features/illustration/IllustrationMarquee'
import { Intro } from './features/intro/Intro'
import { ProjectsSection } from './features/projects/ProjectsSection'
import { Skills } from './features/skills/Skills'

export default function App() {
  return (
    <>
      <AnchorNav />
      <Hero />
      <main>
        <Intro />
        <About />
        <ProjectsSection />
        <IllustrationMarquee />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
