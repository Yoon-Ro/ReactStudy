import React from "react";
import Heroimage from '../assets/hero-image-2.png';


const Hero = () => {
  return (
    <div className="max-w-[1240px]  mx-auto grid grid-cols-5 bg-[#fff2f1] rounded-xl">
      {/* TEXT*/}
      <div className="col-span-2  w-full h-full text-black max-h-[600px] flex flex-col justify-center">
        <div className="max-w-[1240px] px-16 w-full h-screen mx-auto flex flex-col justify-center">
          <p className="my-2 text-black font-bold text-sm px-2 py-1 rounded-full w-[180px] text-center bg-[#96efa4]">
            We have price for you
          </p>
          <h1 className="text-4xl font-bold ">Discover right price</h1>
          <h1 className="text-4xl font-bold pt-2">for used iPhones</h1>

          <p className="md:text-1xl text-sm uppercase font-bold text-black/60 mt-8">
            Get the best-in-class group mentoring plans
          </p>
          <p className="md:text-1xl text-sm uppercase font-bold text-black/60 ">
            and professional benefits for your team
          </p>
          <div className="flex mt-8 gap-4">
            <button className="bg-[#ff3b3b] text-Black flex w-[160px] items-center py-2 rounded-xl">
              <span className="mx-auto font-medium text-white text-center">
                BROWSE
              </span>
            </button>
            <button className="border border-2  text-Black flex w-[160px] items-center py-2 rounded-xl">
              <span className="mx-auto font-medium text-black text-center">
                BUTTON
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-3 flex flex-col justify-center  items-center mx-12">
        <div className="">
        <img className="w-[100%]" src={ Heroimage } alt="/"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
