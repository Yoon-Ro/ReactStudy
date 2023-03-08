import React, { useState } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accrodion2 = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="text-lg text-[#3062d6] my-4">{title}</div>
        <BsChevronBarDown onClick={() => handleClick(id)} className={`${id === activeIndex ? "rotate-180" : "rotate-0"} cyrsort-pointer transition-all duration-300 text-[#3062d6]`}/>
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: "auto" }}
          exit={{ height: 0}}
          transition={{duration: 0.3}}
          style={{overflow: "hidden"}}
          className="my-4">
            <p className="leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officiis vel at, provident, dolorum in odit alias nisi voluptatum veniam maiores commodi quae consequatur recusandae dolorem porro consequuntur impedit! Culpa.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accrodion2;