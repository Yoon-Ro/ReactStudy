import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter, BsTwitch } from "react-icons/bs";
import {motion} from "framer-motion";

const Footer = () => {
  return (
    <motion.div

    className="bg-Teal p-10"
    >
      <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white'>
 
        <div>
          <div className='font-bold mb-6'>Get Started</div>
          <p className='text-sm leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut earum autem nostrum totam adipisci, recusandae commodi ratione quasi rem sed!</p>
        </div>
        <div>
        <div className='font-bold mb-6'>Services</div>
        <div className='flex flex-col gap-4'>
          <a href="" className='text-sm hover:underline'>Web Design</a>
          <a href="" className='text-sm hover:underline'>Web Design</a>
          <a href="" className='text-sm hover:underline'>Web Design</a>
          <a href="" className='text-sm hover:underline'>Web Design</a>
          </div>
          </div>

          <div>
            <div className='font-bold mb-6'>Company</div>
            <div className='flex flex-col gap-4'>
            <a href="" className='text-sm hover:underline'>Privacy Policy</a>
          <a href="" className='text-sm hover:underline'>Sitemap</a>
          <a href="" className='text-sm hover:underline'>Careers</a>
          <a href="" className='text-sm hover:underline'>Terms & Condition</a>
            </div>
          </div>
<div>
          <div className='font-bold mb-6'>Follow Us</div>
          <div className='text-sm mb-4'>youremail@email.com</div>
          <div className='text-sm mb-4'>+1 234 567 890</div>
          <div className='flex gap-4 mt'>
            <a className='text-xl hover:scale-110'><BsFacebook/></a>
            <a className='text-xl hover:scale-110'><BsInstagram/></a>
            <a className='text-xl hover:scale-110'><BsTwitter/></a>
            <a className='text-xl hover:scale-110'><BsFacebook/></a>
            </div>
          </div>
      </div>

    </motion.div>
  )
}

export default Footer