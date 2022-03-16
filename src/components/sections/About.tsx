import Content from '../../content'
import { Social } from '../shared/Social'
import { Section } from '../layout/Section'
import { Paragraph } from '../shared/Paragraph'

export default function () {
  return (
    <Section className="py-36" id="about">
      <div className="grid gap-24 lg:grid-cols-7">
        <div className="col-span-4 lg:w-5/6">
          <p className="text-lg font-medium text-gray-500">
            {Content.About.subject}
          </p>
          <p className="py-5 text-6xl font-black">{Content.About.title}</p>
          <p className="mb-10 text-3xl font-medium leading-relaxed text-gray-500">
            {Content.About.subtitle}
          </p>
          {Content.About.paragraphs.map((paragraph, index) => {
            return <Paragraph key={index} message={paragraph} />
          })}
        </div>

        <div className="col-span-3 lg:p-16">
          <p className="bg-3 text-2xl font-bold">Socials</p>
          {Content.About.socials.map((social, index) => {
            return (
              <Social
                key={index}
                icon={social.icon}
                link={social.link}
                text={social.text}
              />
            )
          })}
        </div>
      </div>

      <div className="flex justify-center pt-32">
        <a
          href="https://danielkorpai.com"
          className="text-gray-400 hover:text-primary"
        >
          {Content.About.footer}
        </a>
      </div>
    </Section>
  )
}
