import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Education from './Education'
import Skills from './Skills'
import { CoolModeDemo } from './CoolModeDemo'

function Home() {
  return (
    <>
        <div className=' dark:bg-dark-gradient dark:text-white'>
            <Navbar/>
            <Hero/>
            <Education/>
            <Skills/>
        </div>
    </>
  )
}

export default Home