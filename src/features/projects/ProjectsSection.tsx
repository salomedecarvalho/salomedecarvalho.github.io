import { useState } from 'react'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import styles from './ProjectsSection.module.css'

export function ProjectsSection() {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const openIndex = projects.findIndex((p) => p.slug === openSlug)
  const openProject = openIndex >= 0 ? projects[openIndex] : null
  const nextProject = openProject ? projects[(openIndex + 1) % projects.length] : null
  const prevProject = openProject ? projects[(openIndex - 1 + projects.length) % projects.length] : null

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <SectionHeading eyebrow="Selected projects" title="Products with a story" backdrop="Work" />

        <ul className={styles.list}>
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard project={project} layout={i === 0 ? 'feature' : i % 2 ? 'left' : 'right'} onOpen={setOpenSlug} />
            </li>
          ))}
        </ul>
      </div>

      {openProject && nextProject && prevProject && (
        <ProjectModal
          key={openProject.slug}
          project={openProject}
          prev={prevProject}
          next={nextProject}
          onClose={() => setOpenSlug(null)}
          onNavigate={setOpenSlug}
        />
      )}
    </section>
  )
}
