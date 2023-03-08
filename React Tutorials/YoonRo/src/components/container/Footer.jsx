import React from "react";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillBehanceCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mx-auto sm:w-[1420px] px-2 sm:px-0">
      <motion.div
        initial={{ scale: 0 / 5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="mt-32 mb-8 flex pl-24 text-center items-center h-[20vh] bg-black text-white rounded-full"
      >
        <ul className="flex gap-8 items-center">
          <li className="text-2xl px-6 sm:py-2 border-2 border-white rounded-full hover:bg-white hover:text-black">
            {" "}
            <a href="https://read.cv/yoonro" target="_blank">
              Resume
            </a>
          </li>
          <a
            href="https://www.linkedin.com/in/yoon-ro-ab4838124/"
            target="_blank"
          >
            <AiFillLinkedin className="text-4xl pointer" />
          </a>
          <a href="https://www.behance.net/yoonro" target="_blank">
            <AiFillBehanceCircle className="text-4xl" />
          </a>
          <a href="https://twitter.com/Yoon_ro_" target="_blank">
            <AiFillTwitterCircle className="text-4xl" />
          </a>
        </ul>
      </motion.div>
    </div>
  );
};

export default Footer;
