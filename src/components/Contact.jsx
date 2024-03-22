import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section>
      <hgroup>
        <h1>
          <FaEnvelope />
          Contact me
        </h1>
        <p>Contact me for more information and get notified when I publish something new </p>
      </hgroup>
      <div className="flex">
        <form action="">
          <label htmlFor="email">Email Address:</label>
          <input type="email" placeholder='Email Address' id='email'/>

          <label htmlFor="">Your message:</label>
          <textarea name="" id="message" cols="30" rows="10"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
