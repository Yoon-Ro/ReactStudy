import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a]">Hello</h1>
      <ul className="hidden md:flex ">
        <li className="p-2">Home</li>
        <li className="p-2">Company</li>
        <li className="p-2">Resource</li>
        <li className="p-2">About</li>
        <li className="p-2">Contact</li>
      </ul>



      <div onClick={handleNav} className='block md:hidden pl-4'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>





      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full broder-r border-r-gray-900 bg-gray-900 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] md:hidden'}>
        <h1 className=" w-full h-24  text-3xl font-bold text-[#00df9a] px-4 pt-7">
          Hello
        </h1>

        <ul className=" uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resource</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
