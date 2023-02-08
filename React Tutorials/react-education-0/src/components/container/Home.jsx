import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import {motion} from "framer-motion";

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChilder: 0.2,
      },
    },

  };



  const item = {
    hidden: {y:20, opacity: 0},
    visible: {y:0, opacity: 1},
  };

  
  return (
    <div className="section" id="home">
      <div className="md:flex  items-center justify-center">
        {/* HERO TEXT - LEFT */}
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            your e-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> the new way <br /> to learn online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            totam eligendi quis. Illo consequatur consectetur velit quo non, sit
            dignissimos ullam accusantium maxime culpa iste, alias eligendi,
            laborum et facere.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border  border-solid border-Teal rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>

        {/* HERO IMAGE - RIGHT */}
        <div className="md:w-[50%]">
          <img src={hero} alt="/" />
        </div>
      </div>

      <div>
        {/* HERO TEXT - LOWER CENTER */}
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal font-bold">
            100+ leading universities and companies
          </span>
        </p>

        {/* HERO IMAGES */}
        <motion.div 
        variant={container} initial="hidden" whileInView="visible" className="flex items-center justify-center flex-wrap gap-2 p-2">
          {logos.map((logo, index) => (
            <motion.div variant={item} className="w-28" key={index}>
              <img src={logo} alt="/" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
