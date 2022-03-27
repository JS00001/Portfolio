import { useQuery } from 'react-query'

import React from 'react'
import Head from 'next/head'
import NavBar from '../components/layout/NavBar'

import Api from '../api'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Loading from '../components/layout/Loading'
import Process from '../components/sections/Process'
import Projects from '../components/sections/Projects'

const HomePage: React.FC = () => {
  const { data, isLoading } = useQuery('projects', Api.projects)

  if (isLoading) return <Loading />

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

export default HomePage
