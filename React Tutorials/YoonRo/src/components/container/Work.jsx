import React from "react";
import test from "../../assets/TEST.png";
import test1 from "../../assets/TEST1.png";
import test2 from "../../assets/TEST2.png";
import test3 from "../../assets/TEST3.png";
import test4 from "../../assets/TEST4.png";
import test5 from "../../assets/TEST5.png";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const Work = () => {
  const { ref } = useParallax({ speed: 20 });
  const box = {
    hidden: {
      opacity: 0,
      scale: 1,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  return (
    <div id="work">
      <div className="w-full sm:w-[1420px] mx-auto my-8">
        <p1 className="text-4xl sm:px-0 px-2  sm:text-[180px] ">DESIGN</p1>
        <div className="px-12 sm:px-0 sm:flex flex-row justify-between sm:gap-16">
          <div>


          <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  sm:py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{test1} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
                                        Newton Index - Case Study
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>



            <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{test} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
                                        concept website redesign and development
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
          </div>

          <div ref={ref} className="mt-[4rem] ">
          <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{test2} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
Bank Credit Card Concept Design                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
            <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{test3} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
                                        Online Course Landing Page
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
          </div>
          <div className="mt-[-8rem] ">
          <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{test4} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-white/40 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
BAF Interaction Cloning                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
            <motion.div
              variants={box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
                          <div class="flex  py-12 ">
                <a class="relative block group group-hover:shadow-xl">
                    <img class="group-hover:opacity-100 group-hover:rotate-2 transition-all "
                        src=
{test5} />
                    <div class="relative px-2 mx-2 ">
                        <div class="mt-[-5rem]">
                            <div class="transition-all transform 
                                translate-y-8 
                                translate-x-[-0.5rem]
                                group-hover:rotate-2 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0
                                
                                bg-[#eaeaea]/20 backdrop-blur p-4 rounded-full shadow-xl ">
                                <div class=" flex justify-evenly ">
                                    <p class="text-lg text-black">
                                        Laundry Delivery Concept Design
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Work;
