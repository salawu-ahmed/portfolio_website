import React from 'react'
import { FaArrowRight, FaGithub, FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <main className='flex flex-col gap-8 sm:flex-row items-start'>
      <section className='flex sm:flex-col gap-3 flex-wrap justify-center'>
        <button className='w-32 sm:w-44 py-2 sm:py-3 text-center text-sm sm:text-base bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>All Projects</button>
        <button className='w-32 sm:w-44 py-2 sm:py-3 text-center text-sm sm:text-base bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>HTML & CSS</button>
        <button className='w-32 sm:w-44 py-2 sm:py-3 text-center text-sm sm:text-base bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>JavaScript</button>
        <button className='w-32 sm:w-44 py-2 sm:py-3 text-center text-sm sm:text-base bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>React & Material UI</button>
        <button className='w-32 sm:w-44 py-2 sm:py-3 text-center text-sm sm:text-base bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>Node & Express</button>
      </section>
      <section className='flex flex-wrap gap-4 justify-center'>
        {
          ['a', "aa", "aaa", "aaaa", "aaaaa","aaaaaa"].map(item => {
            return (
              <article key={item} className='border border-card-border/30 hover:border-custom-blue transition-all duration-300 w-64  rounded-l hover:rotate-1 hover:cursor-pointer hover:scale-105'>
                <img src="/1.jpg" alt="" className='rounded-l' />
                <div className='py-4 px-2'>
                  <h1 className='text-title'>Landing Page 2</h1>
                  <p className='text-subtitle text-xs my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid repellendus inventore iure tempore veniam minus fugit.</p>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Link to='/project-demo'>
                        <FaLink size={20} className='hover:scale-125 text-subtitle hover:text-title' />
                      </Link>
                      <Link to='/'>
                        <FaGithub size={20} className='hover:scale-125 text-subtitle hover:text-title' />
                      </Link>
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
