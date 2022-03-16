import Head from 'next/head'
import NavBar from '../components/layout/NavBar'
import Contact from '../components/sections/Contact'

export default function () {
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
        <Contact />
      </main>
    </>
  )
}
