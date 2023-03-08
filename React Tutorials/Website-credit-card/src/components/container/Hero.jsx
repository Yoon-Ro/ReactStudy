import React from 'react'
import Card from '../../assets/iav_infiniteavion_en_sm.png';
import Image from '../../assets/heroimage2.png';

import {motion} from 'framer-motion';

const Hero = () => {
  const box = {
    hidden: {
      opacity: 1,
      scale: 0.5,
      y: "-80%"

    },
    visible: {
      opacity: 1,
      scale: 1,
      y: "-40%"
   


    },
  };
      
  return (
    <div className='bg-[#c2e5f9]'>
        <div className='section'>
            <div className='pb-28  mx-auto'>
<div className='grid grid-cols-2 '>
    <div className='col-span-1 flex items-center justify-center'>
        <div className=''>
        <p className=' text-[#352f0e] w-fit my-4'>Limited time offer</p>

<h1 className='text-5xl font-bold my-4'>Bank on better reward with Avion points</h1>
<p className='leading-8 w-3/4 my-4'>From travel and shopping, to entertainment and dining, get 3x more Alvion points on groceries, gas and more.</p>
<button className='py-4 px-6 rounded-full text-black  bg-white font-bold text-sm '>Open Account</button>
</div>
    </div>


    <div className='col-span-1 relative items-center justify-center overflow-y-clip pt-32'>
    <img src={Card} alt="/" className='w-[60%] mx-auto z-10 relative mt-24'/>

      <div className='h-[100%] '>
      <motion.div 
                variants={box}
                initial="hidden"
                whileInView="visible"
                transition={{ease: "linear", duration: 20, repeat: Infinity }}
                className="absolute  left-[9rem] w-[55%] mx-auto ">
        <img src={Image} alt="/" className='object-contain '/>
        <img src={Image} alt="/" className='object-contain '/>
        <img src={Image} alt="/" className='object-contain '/>
        <img src={Image} alt="/" className='object-contain '/>

        </motion.div>

        </div>
    </div>
    {/* <div className='col-span-1 mx-auto  flex items-center justify-center relative overflow-y-clip'>
    <img src={Card} alt="/" className=' bottom-0 w-full z-10 relative'/>
    <div className='h-[100%]'>
    <motion.div 
                variants={box}
                initial="hidden"
                whileInView="visible"
                transition={{ease: "linear", duration: 5, repeat: Infinity }}
                className="absolute">

<img src={Image} alt="/" className='object-contain'/>




</motion.div>
</div>
</div> */}
</div>
            </div>
        </div>
    </div>
  )
}

export default Hero