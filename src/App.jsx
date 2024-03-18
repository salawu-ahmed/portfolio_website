import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='border border-[rgba(63,63,70,0.4)] mx-auto w-4/5 bg-[rgb(24,24,27)]'>
      <Navbar />
      <div className="border-b my-8 border-[rgba(63,63,70,0.4)] w-full"/>
      <Hero />
      <div className="border-b my-8 border-[rgba(63,63,70,0.4)] w-full"/>
      <Projects />
      <div className="border-b my-8 border-[rgba(63,63,70,0.4)] w-full"/>
      <Contact />
      <div className="border-b my-8 border-[rgba(63,63,70,0.4)] w-full"/>
      <Footer />
    </div>
  )
}

export default App
