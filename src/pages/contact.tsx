import React from 'react'
import Head from 'next/head'
import NavBar from '../components/layout/NavBar'
import Contact from '../components/sections/Contact'

const ContactPage: React.FC = () => {
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
        <Contact />
      </main>
    </>
  )
}

export default ContactPage
