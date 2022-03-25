import React from 'react'
import Link from 'next/link'
import Content from '../../content'
import { Button } from '../shared/Button'
import { Section } from '../layout/Section'

const Hero: React.FC = () => {
  return (
    <Section className="grid py-48 xl:grid-cols-2">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center xl:mr-10 xl:items-start xl:text-left">
        <div className="pb-5 text-6xl font-black leading-none md:text-8xl">
          {Content.Hero.title}
        </div>
        <div className="text-2xl leading-normal text-gray-500">
          {Content.Hero.subtitle}
        </div>
        <div className="mt-10">
          <Link href="/contact">
            <Button size="medium">Contact Me</Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hidden items-center justify-center xl:flex">
        <img
          src="https://media.discordapp.net/attachments/845809714364809246/953639392575127643/unknown.png?width=939&height=676"
          className="rounded-lg border border-gray-200"
        />
      </div>
    </Section>
  )
}

export default Hero
