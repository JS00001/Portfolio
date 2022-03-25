import React from 'react'
import Head from 'next/head'

import NavBar from '../components/layout/NavBar'
import { Section } from '../components/layout/Section'

const BlogPage: React.FC = () => {
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
        <Section></Section>
      </main>
    </>
  )
}

export default BlogPage
