import { useQuery } from 'react-query'

import Head from 'next/head'
import NavBar from '../components/layout/NavBar'

import Api from '../api'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Loading from '../components/layout/Loading'
import Process from '../components/sections/Process'
import Projects from '../components/sections/Projects'

export default function () {
  const { data, error, isError, isLoading } = useQuery('projects', Api.projects)

  if (isLoading) return <Loading />

  return (
    <>
      <Head>
        <title>Jack Senyitko - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <NavBar />
      </nav>

      <main>
        <Hero />
        <Process />
        <hr className="border-gray-100" />
        <Projects projects={data} />
      </main>

      <footer className="bg-gray-50">
        <About />
      </footer>
    </>
  )
}
