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
<div className='' id='hero' >

        <div className='h-screen relative py-20 sm:mx-16'>
            {/* OVERLAY */}
            <div className='rounded-3xl absolute w-full text-gray-200  bg-black/20 flex flex-col justify-center items-center'>

    <div className=' w-full h-[90vh] flex flex-col justify-center items-center'>
              <p className='text-white bg-[#ad4141] font-bold px-4 py-2 rounded-full shadow-xl'>CHINESE RESTAURANT</p>
              <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-2 uppercase text-white'>CHACHING <span className="text-yellow">GOLD</span></h1>
              <div className='flex py-2'>
                  <p className='md:text-3xl sm:text-2xl text-xl font-bold mr-4 text-white'>Find the lighting application for </p>
              </div>
              <p className='md:text-1xl text-sm uppercase font-bold text-gray-400 mt-4 text-white'>
Click the button below to browse our new product catalogue.              </p>


            </div>

            <div>


      </div>
      

            </div>


{/* BURGER IMAGE */}
            <img className="sm:rounded-3xl w-screen h-[90vh] object-cover border-[#ad4141] sm:border-8"src="https://images.unsplash.com/photo-1614104030967-5ca61a54247b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt='hamburger'/>
        </div>

    </div>
  );
};

export default Home;
