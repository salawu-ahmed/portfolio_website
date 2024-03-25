import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { IoIosArrowUp } from 'react-icons/io'

const App = () => {
  const [showScrollBTN, setshowScrollBTN] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(scrollY > 300) {
        setshowScrollBTN(true)
      } else {
        setshowScrollBTN(false)
      }
    })
  }, [])
  return (
    <div className='px-7 w-[98%] md:w-[90%] border border-[rgba(63,63,70,0.4)] mx-auto lg:w-[85%] lg:px-16 bg-[rgb(24,24,27)]' id='up'>
      <Navbar />
      <Hero />
      <div className="border-b my-8 border-[#3f3f4666] -mx-7 lg:-mx-16" />
      <Projects />
      <div className="border-b my-8 border-[#3f3f4666] -mx-7 lg:-mx-16" />
      <Contact />
      <div className="border-b my-8 border-[#3f3f4666] -mx-7 lg:-mx-16" />
      <Footer />
      {
        showScrollBTN &&
        <a href="#up" className={`${showScrollBTN ? "opacity-100" : "opacity-0"} transition-opacity`}>
          <button className='bg-custom-blue text-title p-2 rounded-full fixed right-[3%] bottom-8'>
            <IoIosArrowUp size={25} />
          </button>
        </a>
      }
    </div>
  )
}

export default App
