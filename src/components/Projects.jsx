import React from 'react'

const Projects = () => {
  return (
    <main className='flex gap-12'>
      <section className='flex flex-col gap-3'>
        <button className='w-44 py-3 text-center text-l bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>All Projects</button>
        <button className='w-44 py-3 text-center text-l bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>HTML & CSS</button>
        <button className='w-44 py-3 text-center text-l bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>JavaScript</button>
        <button className='w-44 py-3 text-center text-l bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>React & Material UI</button>
        <button className='w-44 py-3 text-center text-l bg-[rgba(36,37,46,1)] border border-transparent focus:border-custom-blue opacity-50 focus:opacity-100 focus:font-bold focus:leading-2 hover:opacity-100 transition-all duration-300'>Node & Express</button>
      </section>
      <section className='grow border border-red-500'>RRRRR</section>
    </main>
  )
}

export default Projects
