import React from 'react'
import image from '../../assets/ctaimage.png';
import {motion} from 'framer-motion';



const CTA = () => {
  const box = {
    hidden: {
      opacity: 1,
      scale: 1,
      y: "0%"

    },
    visible: {
      opacity: 1,
      scale: 1,
      y: "-80%"
   


    },
  };

  
  return (
    <div className='section py-32 '>
<div className='w-full bg-Purple text-white grid grid-cols-5'>
    <div className='col-span-3 py-24 px-16'>
        <h1 className='text-4xl font-bold'>FREE CURATED RESOURCES <br/> TO HELP YOU LEVEL UP</h1>
        <p className='py-8'>Explore hundreds of carefully selected articles, videos, livestreams, ebooks, research papers to help you learn and explore blockchain technology. All free of cost :)</p>
        <button className=' py-4 px-8 border border-white text-sm font-medium'>Donate</button>

    </div>
    <div className='flex col-span-2 relative overflow-y-clip'>
      <div className='h-[100%]'>
      <motion.div 
                variants={box}
                initial="hidden"
                whileInView="visible"
                transition={{ease: "linear", duration: 200, repeat: Infinity }}
                className="absolute">
        <img src={image} alt="/" className=' object-contain'/>
        <img src={image} alt="/" className=' object-contain'/>
        <img src={image} alt="/" className=' object-contain'/>
        <img src={image} alt="/" className=' object-contain'/>
        </motion.div>

        </div>
    </div>
</div>
    </div>
  )
}

export default CTA