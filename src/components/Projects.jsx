import React, { useState } from 'react'
import { FaArrowRight, FaGithub, FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { myProjects } from './data'

const Projects = () => {
  const [projects, setProjects] = useState(myProjects)
  const handleFilter = (category) => {
    // filter every project that has the category
    const filteredProjects = myProjects.filter(item => {
      return item.category.includes(category)
    })
    setProjects(filteredProjects)

    // setProjects(
    //   myProjects.filter(item => {
    //     return item.category === category
    //   })
    // )
  }

  return (
    <main className='flex flex-col gap-8 sm:flex-row items-start'>
      <section className='flex sm:flex-col gap-3 flex-wrap justify-center'>
        <button className='w-32 sm:w-44 py-2 sm:py-3 text-center text-sm sm:text-base bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300' onClick={() => setProjects(myProjects)}>All Projects</button>
        <button className='w-32 sm:w-44 py-2 sm:py-3 text-center text-sm sm:text-base bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300' onClick={() => handleFilter("html&css")}>HTML & CSS</button>
        <button className='w-32 sm:w-44 py-2 sm:py-3 text-center text-sm sm:text-base bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300' onClick={() => handleFilter("javascript")}>JavaScript</button>
        <button className='w-32 sm:w-44 py-2 sm:py-3 text-center text-sm sm:text-base bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300' onClick={() => handleFilter("react+tailwind")}>React & Tailwind CSS</button>
      </section>
      <section className='flex flex-grow flex-wrap gap-4 justify-center'>
        {
          projects.map(item => {
            return (
              <article key={item.id} className='border border-card-border/30 hover:border-custom-blue transition-all duration-300 w-64  rounded-l hover:rotate-1 hover:cursor-pointer hover:scale-105'>
                <img src="/1.jpg" alt="" className='rounded-l' />
                <div className='py-4 px-2'>
                  <h1 className='text-title'>{item.projectTitle}</h1>
                  <p className='text-subtitle text-xs my-3'>{item.projectDescription}</p>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <a href={item.projectDemo} target='_blank'>
                        <FaLink size={20} className='hover:scale-125 text-subtitle hover:text-title' />
                      </a>
                      <a href={item.projectDemo}>
                        <FaGithub size={20} className='hover:scale-125 text-subtitle hover:text-title' />
                      </a>
                    </div>
                    <Link to="/" className='flex items-center gap-2 text-custom-blue'>
                      more
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })
        }

      </section>
    </main>
  )
}

export default Projects
