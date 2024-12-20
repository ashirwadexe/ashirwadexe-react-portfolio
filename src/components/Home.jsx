import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Education from './Education'
import Skills from './Skills'
import { CoolModeDemo } from './CoolModeDemo'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <>
        <div className=' dark:bg-dark-gradient dark:text-white'>
            <Navbar/>
            <Hero/>
            <Education/>
            <Skills/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    </>
  )
}

export default Home