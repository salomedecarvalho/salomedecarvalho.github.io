import { AnchorNav } from './components/layout/AnchorNav'
import { Footer } from './components/layout/Footer'
import { About } from './features/about/About'
import { Contact } from './features/contact/Contact'
import { Experience } from './features/experience/Experience'
import { Hero } from './features/hero/Hero'
import { IllustrationMarquee } from './features/illustration/IllustrationMarquee'
import { Intro } from './features/intro/Intro'
import { ProjectsSection } from './features/projects/ProjectsSection'
import { LegalPage } from './features/legal/LegalPage'
import { Skills } from './features/skills/Skills'
import { imprint } from './data/imprint'
import { privacyPolicy } from './data/privacy'
import { useHashView } from './hooks/useHashView'

export default function App() {
  const view = useHashView()

  if (view !== 'home') {
    return (
      <>
        <AnchorNav />
        {/* key resets the language switch when moving between the two legal pages */}
        <LegalPage key={view} content={view === 'imprint' ? imprint : privacyPolicy} />
        <Footer />
      </>
    )
  }

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
