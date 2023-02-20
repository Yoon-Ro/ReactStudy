import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter, BsTwitch } from "react-icons/bs";
import {motion} from "framer-motion";

const Footer = () => {
  return (
    <motion.div

    className=""
    >
      <div className='grid md:grid-cols-4 place-items-start gap-8 text-white p-8'>
 
        <div className='col-span-1  p-8 w-full text-[#c02727]'>
          <div className='font-bold mb-6 text-xl'>CHACHING GOLD</div>
          <p className='text-sm leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut earum autem nostrum totam adipisci, recusandae commodi ratione quasi rem sed!</p>
        </div>
        <div  className='col-span-1'/>
        
          <div  className='col-span-1 bg-[#c02727] p-8 w-full rounded-2xl shadow-xl'>
            <div className='font-bold mb-6'>Hours</div>
            <div className='flex flex-col gap-4'>
          <a href="" className='text-sm hover:underline'>Mon - Fri: 12:00 ~ 20:00</a>
          <a href="" className='text-sm hover:underline'>Mon - Fri: 12:00 ~ 20:00</a>
          <a href="" className='text-sm hover:underline'>Mon - Fri: 12:00 ~ 20:00</a>
 
            </div>
          </div>
<div  className='col-span-1 bg-[#c02727] p-8 w-full rounded-2xl shadow-xl'>
          <div className='font-bold mb-6'>Get In Touch</div>
          <div className='text-sm mb-4'>16877 Great Northern Way, Vancouve BC</div>
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