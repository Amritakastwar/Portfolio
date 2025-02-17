import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className='container contact' id='contact'>
      <h1>CONTACT</h1>
      <div className='contact-icon'
      data-aos="zoom-in-up"
      data-aos-duration="1000">
        <a href='mailto:amritak1979@gmail.com' target='_blank' className='items'>
        <IoMailSharp className='icons' />
        </a>
         <a href='tel:9826337351' target='_blank' className='items'>
          <FaPhone className='icons'/>
        </a>
        <a href='https://github.com/Amritakastwar' target='_blank' className='items'>
          <FaGithubSquare className='icons'/>
        </a>
        <a
          href='https://www.linkedin.com/in/amrita-kastwar-412a99284/' target='_blank' className='items'>
        <FaLinkedin className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact