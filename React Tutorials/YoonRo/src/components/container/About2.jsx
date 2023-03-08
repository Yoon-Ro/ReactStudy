import React from 'react'
import {motion} from "framer-motion";

const About2 = () => {
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
    <div className='sm:w-[1420px] mx-auto'>
        <p className='px-16 w-4/5 sm:px-0 text-xl sm:w-3/5 vbc py-16'>I have a strong understanding of business needs and brand identity. I am proficient in using Figma, Adobe, and Front-end development for digital products. This has allowed me to create functional and visually pleasing products.</p>
                   <div className='sm:px-0 px-12 grid sm:grid-cols-3 gap-16'>
                   <motion.div 
                        variants={box}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 hover:shadow-xl p-4">
           
                <ul>
                    <h1 className='text-4xl py-4 border-b-2 my-2'>UI/UX Design</h1>
                    <li>UX Research</li>
                    <li>Wireframe</li>
                    <li>High-fidelity designs</li>
                </ul>
            </motion.div>

                               <motion.div 
                        variants={box}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 hover:shadow-xl p-4">
           
            <ul>
                    <h1 className='text-4xl py-4 border-b-2 my-2'>Web Development</h1>
                    <li>React JavaScript</li>
                    <li>HTML & CSS</li>
                </ul>
                </motion.div>
                <motion.div 
                        variants={box}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{ delay: 0.5 }}
                        className="col-span-1 hover:shadow-xl p-4">
           
            <ul>
                    <h1 className='text-4xl py-4 border-b-2 my-2'>Graphic Design</h1>
                    <li>Web Contents</li>
                    <li>Marketing Graphics</li>
                </ul>
                </motion.div>
           </div>

    </div>
  )
}

export default About2