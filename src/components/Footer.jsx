import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-8 sm:flex-row justify-between items-center pb-8'>
      <ul className='flex gap-4 text-subtitle text-sm'>
        <li>
          <Link to='/' className='text-subtitle hover:text-custom-blue hover:text-base font-normal hover:font-medium transition-all duration-300'>About</Link>
        </li>
        <li>
          <Link to='/' className='text-subtitle hover:text-custom-blue hover:text-base font-normal hover:font-medium transition-all duration-300'>Projects</Link>
        </li>
        <li>
          <Link to='/' className='text-subtitle hover:text-custom-blue hover:text-base font-normal hover:font-medium transition-all duration-300'>Articles</Link>
        </li>
        <li>
          <Link to='/' className='text-subtitle hover:text-custom-blue hover:text-base font-normal hover:font-medium transition-all duration-300'>Uses</Link>
        </li>
      </ul>
      <p className='text-[rgb(113,113,122)]'>&copy; 2024 Salawu Ahmed. All rights reserved</p>
    </footer>
  )
}

export default Footer
