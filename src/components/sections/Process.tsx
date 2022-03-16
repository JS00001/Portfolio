import Content from '../../content'
import Link from 'next/link'
import { Button } from '../shared/Button'
import { Section } from '../layout/Section'
import { ProjectStrategy } from '../shared/ProjectStrategy'

export default function () {
  return (
    <Section className="py-36 text-center lg:text-left">
      {/* Section Header */}
      <div className="grid pb-10 lg:grid-cols-2">
        <div>
          <p className="text-lg font-medium text-gray-500">
            {Content.Process.subject}
          </p>
          <p className="py-3 text-6xl font-black">{Content.Process.title}</p>
          <p className="text-xl font-medium leading-normal text-gray-500">
            {Content.Process.subtitle}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link href="#projects">
            <Button className="mt-10 lg:mt-0">View Projects</Button>
          </Link>
        </div>
      </div>

      {/* Process Strategies */}
      <div className="grid gap-x-10 gap-y-16 py-10 lg:grid-cols-2">
        {Content.Process.strategies.map((strategy, index) => {
          return (
            <ProjectStrategy
              key={index}
              title={strategy.title}
              description={strategy.description}
            />
          )
        })}
      </div>
    </Section>
  )
}
