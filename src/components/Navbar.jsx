import React, { useState } from 'react'
import { CgMenuRound } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <header className='flex items-center justify-between px-6 mt-4'>
      <div className='md:hidden'>
        <CgMenuRound size={30} onClick={() => setShowModal(true)} />
      </div>
      {
        showModal &&
        <>
          {/* overlay */}
          <div className="md:hidden bg-black/90 fixed left-0 bottom-0 top-0 right-0">
            {/* mobile menu */}
            <ul className='flex flex-col w-[85%] mx-auto mt-8 rounded-2xl bg-secondary py-4 px-8 gap-4'>
              <li className='flex justify-end items-center'><MdOutlineClose size={30} onClick={() => setShowModal(false)}/></li>
              <li className='border-b border-borderColor pt-2 pb-3'><a href="/" className='text-title/90 hover:text-custom-blue text-lg font-medium hover:text-[16px] transition-all'>About</a></li>
              <li className='border-b border-borderColor pt-2 pb-3'><a href="" className='text-title/90 hover:text-custom-blue text-lg font-medium hover:text-[16px] transition-all'>Articles</a></li>
              <li className='border-b border-borderColor pt-2 pb-3'><a href="" className='text-title/90 hover:text-custom-blue text-lg font-medium hover:text-[16px] transition-all'>Projects</a></li>
              <li className='pt-2 pb-3'><a href="" className='text-title/90 hover:text-custom-blue text-lg font-medium hover:text-[16px] hover:transition-all hover:duration-200'>Contact</a></li>
            </ul>
          </div>
        </>
      }

      <div></div>
      {/* Desktop Menu */}
      <nav className='hidden md:block bg-[rgb(39,39,42)] py-3 px-6 rounded-3xl shadow-[1px,1px 40px,#2323242a]'>
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
