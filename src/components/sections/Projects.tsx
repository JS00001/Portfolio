import React from 'react'
import Content from '../../content'
import { Header } from '../shared/Header'
import { Section } from '../layout/Section'
import { Project } from '../shared/Project'

export type Project = {
  image: string
  title: string
  url: string
  tag: string
  description: string
}

export type ProjectProps = {
  projects: Project[]
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <Section className="py-36" id="projects">
      <Header className="text-center lg:text-left">
        <Header.Subject>{Content.Projects.subject}</Header.Subject>
        <Header.Title>{Content.Projects.title}</Header.Title>
      </Header>

      <div className="grid gap-4 pt-10 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Project
            key={index}
            url={project.url}
            image={project.image}
            tag={project.tag}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </Section>
  )
}

export default Projects
