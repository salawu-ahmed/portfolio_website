import React, { useState } from 'react'
// import { CgMenuRound } from "react-icons/cg";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <header className='flex items-center justify-between px-6 mt-4'>
      <div className='md:hidden p-1 border border-transparent bg-headerBg rounded-full hover:border hover:border-salmon group'>
        <MdMenu size={25} onClick={() => setShowModal(true)} className='fill-subtitle group-hover:fill-title' />
      </div>
      {
        showModal &&
        <>
          {/* overlay */}
          <div className="md:hidden bg-black/90 fixed left-0 bottom-0 top-0 right-0 backdrop-blur-sm">
            {/* mobile menu */}
            <ul className='flex flex-col w-[85%] scale-1 mx-auto mt-5 rounded-2xl bg-secondary py-4 px-8 gap-4 animate-modalMenu'>
              <li className='flex justify-end items-center'><MdOutlineClose size={30} onClick={() => setShowModal(false)} className='hover:animate-spin-fast active:fill-red-500 hover:fill-red-500 fill-subtitle'/></li>
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
      <button className='h-25 text-2xl p-1 border border-transparent bg-headerBg rounded-full hover:border hover:border-salmon group focus:scale-0.8'><FiMoon size={25} className='fill-headerBg text-subtitle group-hover:text-title ' /></button>
    </header>
  )
}

export default Navbar
