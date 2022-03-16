import Content from '../../content'
import { Section } from '../layout/Section'
import { Project } from '../shared/Project'

type Project = {
  image: string
  title: string
  description: string
  url: string
  tag: string
}

export default function ({ projects }: { projects: Array<Project> }) {
  return (
    <Section className="py-36" id="projects">
      <div className="text-center lg:text-left">
        <p className="text-lg font-medium text-gray-500">
          {Content.Projects.subject}
        </p>
        <p className="py-3 text-6xl font-black">{Content.Projects.title}</p>
      </div>

      <div className="grid gap-4 pt-10 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              url={project.url}
              image={project.image}
              tag={project.tag}
              title={project.title}
              description={project.description}
            />
          )
        })}
      </div>
    </Section>
  )
}
