import React from "react";
import number from "../../../assets/number.svg";


const Categories = ( {image,  name, cname, id, price }) => {




  return <div 

  className="">

  <div className="relative">
    <div className="bg-white border-[#c02727] border-4  px-8 flex justify-center items-center rounded-full text-[#c02727] font-bold text-xl absolute bottom-4 left-4">{id}</div>

    <img src={image} alt="/"/>
    </div>
    <div className="flex justify-between items-center py-4">
      <div>
    <div className="font-bold text-xl text-black">{id}. {name}</div>
    <div  className="font-bold text-xl text-black">{cname}</div>
    </div>
   
    <div className="font-bold text-xl text-[#c02727]">{price}</div>
    </div>

  </div>;
};

export default Categories;