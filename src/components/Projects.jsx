import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <main className='flex gap-12 items-start'>
      <section className='flex flex-col gap-3'>
        <button className='w-44 py-3 text-center text-l bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>All Projects</button>
        <button className='w-44 py-3 text-center text-l bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>HTML & CSS</button>
        <button className='w-44 py-3 text-center text-l bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>JavaScript</button>
        <button className='w-44 py-3 text-center text-l bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>React & Material UI</button>
        <button className='w-44 py-3 text-center text-l bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>Node & Express</button>
      </section>
      <section className='grow border border-red-500'>
        <article>
          <img src="" alt="" />
          <div>
            <h1>Landing Page 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid repellendus inventore iure tempore veniam minus fugit.</p>
            <div className="flex">
              <Link to='/'>
                <FaLink />
              </Link>
              <Link to='/'>
                <FaGithub />
              </Link>

            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Projects
