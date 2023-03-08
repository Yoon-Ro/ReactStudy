import React from 'react'
import about from "../../assets/About.jpg";
import {motion} from "framer-motion";




const About = () => {
  const box = {
    hidden: {
      opacity: 0,
      scale: 1,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  const about = {
    hidden: {
      opacity: 1,

      x: "-20%"

    },
    visible: {
      opacity: 1,

      x: "-90%"
   


    },
  };

  return (
    <div className='relative h-[30vh] overflow-x-clip'>
    <div className='w-[1420px] mx-auto text-black' id='about'>
      

              <motion.div 
                variants={about}
                initial="hidden"
                whileInView="visible"
                transition={{ease: "linear", duration: 50, repeat: Infinity }}
                className="absolute  left-[9rem] w-[55%] mx-auto sm:visible invisible">
<p1 className="text-[180px] px-12 border-2 mx-32 rounded-full">About</p1>

<p1 className="text-[180px] px-12 border-2 mx-32 rounded-full ">Me</p1>

<p1 className="text-[180px] px-12 border-2 mx-32 rounded-full">About</p1>

<p1 className="text-[180px] px-12 border-2 mx-32 rounded-full ">Me</p1>


        </motion.div>
           

  
    </div>
    </div>
  )
}

export default About