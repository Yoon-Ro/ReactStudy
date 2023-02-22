import React from "react";
import hero from "../../assets/heroimage.jpg";
import hero2 from "../../assets/heroimage2.jpg";
import { logos } from "../../Data";
import {motion} from "framer-motion";
import {IoMdBook} from "react-icons/io"

const Home = () => {

  return (
<div className='section mt-24' id='hero' >
  <div className="grid grid-cols-2  grid-flow-row pt-16 gap-8">
    <div className="col-span-1 row-span-2 pb-16">  
    <h1 className="text-8xl leading-[104px] font-bold text-[#193a1e]">Energizing drinks from quality ingredients</h1></div>
    <div className="col-span-1 row-span-2">
      <img src={hero} alt="/"/>
    </div>
    <div className="col-span-1 row-span-1 mt-[-30rem]">
      <img src={hero2} alt="/"/>
    </div>
    <div className="col-span-1 row-span-1 mt-8">
      <div className=" text-[#244b21] text-6xl font-bold ">
        Super-power fresh organic smoothies
      </div>
      <div className="pt-8 text-lg w-4/5 leading-[2rem] ">
      Our ingredients are selected for their freshness and the work ethic of our employees
        . Essentialnutrients & vitamins optimize your immune system
      </div>
      <p className="my-8 bg-[#244b21] inline-block px-8  py-4 text-white rounded-xl ">
        <div className="flex items-center gap-4"><IoMdBook className="text-2xl"/> Read Story</div>
      </p>
    </div>

  </div>
    </div>
  );
};

export default Home;
