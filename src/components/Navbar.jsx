import React from 'react'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-6 mt-4'>
      <div></div>
      <nav className='bg-[rgb(39,39,42)] py-3 px-6 rounded-3xl shadow-[1px,1px 40px,#2323242a]'>
        <ul className='flex items-center gap-4'>
          <li><a href="/" className='text-title/90 hover:text-custom-blue text-sm font-medium hover:text-[16px] transition-all'>About</a></li>
          <li><a href="" className='text-title/90 hover:text-custom-blue text-sm font-medium hover:text-[16px] transition-all'>Articles</a></li>
          <li><a href="" className='text-title/90 hover:text-custom-blue text-sm font-medium hover:text-[16px] transition-all'>Projects</a></li>
          <li><a href="" className='text-title/90 hover:text-custom-blue text-sm font-medium hover:text-[16px] hover:transition-all hover:duration-200'>Contact</a></li>
        </ul>
      </nav>
      <button className='h-25 text-2xl'>Light</button>
    </header>
  )
}

export default Navbar
