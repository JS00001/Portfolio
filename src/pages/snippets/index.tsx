import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../../components/layout/NavBar'
import { RiReactjsFill } from 'react-icons/ri'
import { Section } from '../../components/layout/Section'
import { Header } from '../../components/shared/Header'
import { Snippet } from '../../components/shared/Snippet'

const Snippets: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jack Senyitko - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="animate-fade-in-down">
        <NavBar />
      </nav>

      <main className="animate-fade-in-down">
        <Section className="py-48">
          <Header>
            <Header.Title>Code Snippets</Header.Title>
            <Header.Subtitle>
              These are a collection of code snippets I've used in the past and
              saved.
            </Header.Subtitle>
          </Header>

          <div className="grid grid-cols-3 gap-4 pt-10">
            <Snippet />
          </div>
        </Section>
      </main>
    </>
  )
}

export default Snippets
