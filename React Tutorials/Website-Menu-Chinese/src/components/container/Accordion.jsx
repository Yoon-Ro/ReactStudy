import React, { useState } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accrodion = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="py-8 m">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronBarDown onClick={() => handleClick(id)} className={`${id === activeIndex ? "rotate-180" : "rotate-0"} cyrsort-pointer transition-all duration-300`}/>
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: "auto" }}
          exit={{ height: 0}}
          transition={{duration: 0.3}}
          style={{overflow: "hidden"}}
          className="mt-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officiis vel at, provident, dolorum in odit alias nisi voluptatum veniam maiores commodi quae consequatur recusandae dolorem porro consequuntur impedit! Culpa.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accrodion;
