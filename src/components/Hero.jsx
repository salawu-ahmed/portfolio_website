import React, { useRef } from 'react'
import { MdVerified } from 'react-icons/md'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Lottie from 'lottie-react'
import devAnimation from '../../public/animation/Animation - 1711582799600.json'
import { motion } from 'framer-motion'

const Hero = () => {
  const lottieRef = useRef()
  return (
    <section className='mt-12 flex gap-12'>
      {/* left-side */}
      <div className=''>
        <div className="flex items-end gap-2">
          <motion.img src="/me.png" initial={{scale:0}} animate={{scale:1}} transition={{duration: 2, type: "spring", stiffness:100}} alt="" className='p-1 w-28 rounded-full border border-orange-400 drop-shadow-[2px_2px_40px_rgba(203, 200, 200, 0.5)_inset] mr-1' />
          <span>
            <MdVerified size={25} className='fill-custom-blue mb-2' />
          </span>
        </div>

        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className='text-title text-5xl leading-[3.5rem] font-extrabold my-6'>Software developer, technical writer and youtuber.</motion.h1>

        <p className='text-subtitle text-l leading-7 mb-8'>I'm Salawu Ahmed, a software developer and enterpreneur based Accra. I'm the founder and CEO of PIRPLE, where we develop technologies that empower regular people to explore space on their own terms.</p>
        <div className='flex gap-6'>
          <FaTwitter size={25} className='fill-subtitle hover:scale-125 transition-all duration-300'/>
          <FaInstagram size={25} className='fill-subtitle hover:scale-125 transition-all duration-300'/>
          <FaGithub size={25} className='fill-subtitle hover:scale-125 transition-all duration-300'/>
          <FaLinkedin size={25} className='fill-subtitle hover:scale-125 transition-all duration-300'/>
        </div>
      </div>

      <div className='hidden md:block'>
        <Lottie animationData={devAnimation} lottieRef={lottieRef} onLoadedImages={() => {
          lottieRef.current.setSpeed(0.5)
        }
        } className='w-full translate-x-20 translate-y-20'/>
      </div>
    </section>
  )
}

export default Hero
