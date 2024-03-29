import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import Lottie from 'lottie-react'
import contactAnimation from '../../public/animation/Animation - 1711496797677.json'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm("xzbnjgrn")

  return (
    <section>
      <hgroup>
        <h1 className='text-5xl flex text-title font-extrabold'>
          <span>
            <FaEnvelope size={45} className='fill-subtitle mr-4' />
          </span>
          Contact me
        </h1>
        <p className='text-subtitle mb-8 leading-7'>Contact me for more information and get notified when I publish something new </p>
      </hgroup>
      <div className="flex my-0">
        <form action="" onSubmit={handleSubmit} className='flex flex-col w-[85%] justify-center'>
          <div className='flex flex-col sm:flex-row sm:items-center'>
            <label htmlFor="email" className='text-subtitle'>Email Address:</label>
            <input type="email" autoComplete='off' required placeholder='Email Address' name='email' id='email' className='bg-[rgba(63,63,70,0.15)] border border-randomColor w-full mt-4 sm:mt-0 sm:w-64 sm:ml-4 py-2 px-4 rounded-md focus:border-[rgb(45,212,191)] hover:border-[rgb(45,212,191)] transition-all duration-300 outline-none text-lg' />
            <ValidationError prefix='Email' field='email' errors={state.errors}/>
          </div>

          <div className='flex flex-col mt-6 sm:flex-row sm:items-center'>
            <label htmlFor="" className='text-subtitle'>Your message:</label>
            <textarea name="message" id="message" required placeholder='Message' className='bg-[rgba(63,63,70,0.15)] border border-randomColor w-full mt-4 sm:w-64 sm:mt-0 sm:ml-4 py-2 px-4 rounded-md focus:border-[rgb(45,212,191)] hover:border-[rgb(45,212,191)] transition-all duration-300 outline-none text-lg min-h-36 resize-y'></textarea>
            <ValidationError prefix='Message' field='message' errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting} className='w-2/5 sm:w-64 py-3 px-8 text-base bg-[rgba(36,37,46,1)] mt-7 rounded-md border border-randomColor hover:scale-95 self-center sm:self-start disabled:opacity-40 disabled:cursor-not-allowed'>{state.submitting ? "Submitting...." : "Submit"}</button>
          {state.succeeded && (<h1>Your message has been submitted successfully &#x1F44C;</h1>)}
        </form>
        <div className='hidden lg:block border-red-600'>
          <Lottie animationData={contactAnimation} style={{ height: 355 }} loop={true} className='' />
        </div>
      </div>
    </section>
  )
}

export default Contact
