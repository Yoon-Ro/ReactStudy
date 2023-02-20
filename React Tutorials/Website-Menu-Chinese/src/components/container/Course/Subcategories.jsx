import React from "react";
import number from "../../../assets/number.svg";


const Subcategories = ( { name, cname, id, price }) => {




  return <div 

  className="">


    <div className="flex justify-between items-center py-4">
      <div className="sm:min-w-fit">
    <div className="font-bold sm:text-xl text-black">{id}. {name}</div>
    <div  className="font-bold sm:text-xl text-black">{cname}</div>
    </div>
    <div className="border-2 border-dashed border-[#ad4141] mx-8 sm:w-full hidden"/>
    <div className="font-bold sm:text-xl text-[#ad4141]">{price}</div>
    </div>

  </div>;
};

export default Subcategories;