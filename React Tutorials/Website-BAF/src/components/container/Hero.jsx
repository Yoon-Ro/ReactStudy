import React from 'react'
import {motion} from 'framer-motion';

import HeroImage1 from "./HeroImage1";


const Hero = () => {


    const container = {
        hidden: {
          opacity: 0,
          scale: 0,

        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
          },
          rotate: [-10,0],

        },
      };

      const box = {
        hidden: {
          opacity: 0,
          scale: 1,
          y: 20

        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
       


        },
      };

  return (
    <div className='section pt-16' id="hero">

        <h1 className='font-bold text-white leading-[4rem] text-5xl font-Sigma'>
            <p className='flex flex-wrap justify-center'>
        <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount:0.5}}>
        BUILDING</motion.div>&nbsp;
        <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        className='duration-[25ms]	'>
        BUILDING</motion.div>&nbsp;
        <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        className='duration-[50ms]	'>
        FUTURE</motion.div>&nbsp;
        <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        className='duration-[75ms]	'>
        OF</motion.div><br/>
        <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        className='duration-[100ms]	'>
       BLOCKCHAIN</motion.div>&nbsp;
       <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        className='duration-[125ms]
        	'>
       TECHNOLOGY</motion.div>
            </p>
        </h1>
  
        <motion.div 
                variants={box}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{ delay: 0.4 }}
        className='flex flex-col items-center '> 
        <p className='text-center w-[30%]  text-white/60 text-sm my-8 leading-[2rem]'>We are a 501(c)(3) nonprofit focused on the global acceleration of blockchain education, and the adoption of the user-owned internet.</p>
        <button className='text-Purple bg-white px-8 py-4 font-bold text-sm tracking-[0.06rem] hover:shadow-4xl hover:bg-black/10 hover:text-white duration-300 shadow-xl'>Get started - it's free</button>

        
        </motion.div>
<HeroImage1/>
    {/* <HeroImage/> */}

    </div>
  )
}

export default Hero