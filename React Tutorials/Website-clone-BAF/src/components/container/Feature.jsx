import React from "react";
import icon1 from "../../assets/featureicon1.svg";
import icon2 from "../../assets/featureicon2.svg";
import icon3 from "../../assets/featureicon3.svg";
import icon4 from "../../assets/featureicon4.svg";
import icon5 from "../../assets/featureicon5.svg";
import img1 from "../../assets/featureimage1.png";
import img2 from "../../assets/featureimage2.png";
import img3 from "../../assets/featureimage3.png";
import img4 from "../../assets/featureimage4.png";
import img5 from "../../assets/featureimage5.png";
import grid1 from "../../assets/featuregrid1.png";
import grid2 from "../../assets/featuregrid2.png";
import grid3 from "../../assets/featuregrid3.png";
import grid4 from "../../assets/featuregrid4.png";
import grid5 from "../../assets/featuregrid5.png";
import grid6 from "../../assets/featuregrid6.png";
import {motion} from "framer-motion";

const Feature = () => {
    const box = {
        hidden: {
          opacity: 0,
          scale: 1,
          y: 20

        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
       


        },
      };

  return (
    <div className="section text-white py-32">
      <div className="grid grid-cols-5 gap-16">
        <div className=" col-span-3">
          <h1 className="uppercase text-6xl font-bold leading-[64px]">
            A global community powered to solve the biggest problems
          </h1>
          <div className="flex gap-8 mt-40 pt-24 border-t border-white/30">
            <div>
              <img src={icon1} alt="/" />
              <h1 className="text-6xl font-bold py-8"> 710</h1>
              <p className="text-xl">TOTAL NUMBER</p>
            </div>
            <div>
              <img src={icon2} alt="/" />
              <h1 className="text-6xl font-bold py-8">710</h1>
              <p className="text-xl">TOTAL NUMBER</p>
            </div>
            <div>
              <img src={icon3} alt="/" />
              <h1 className="text-6xl font-bold py-8"> 710</h1>
              <p className="text-xl">TOTAL NUMBER</p>
            </div>
            <div>
              <img src={icon4} alt="/" />
              <h1 className="text-6xl font-bold py-8"> 710</h1>
              <p className="text-xl">TOTAL NUMBER</p>
            </div>
          </div>
        </div>
        <div className=" col-span-2">
          <div className="relative">
            <img src={img1} alt="/" className="absolute" />
            <img src={img2} alt="/" className="absolute" />
            <img src={img3} alt="/" className="absolute" />
            <img src={img4} alt="/" className="absolute" />
            <img src={img5} alt="/" className="relative" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-32 pt-24 ">
        {/* COLUMN 1 */}
        <motion.div 
                        variants={box}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{ delay: 0.1 }}
                        className="col-span-1">
          <div className=" flex justify-between ">
            <div className="relative">
              <div className="flex flex-col absolute bottom-0">
                <img src={icon5} alt="/" className="w-[64px]" />
                <h2 className="text-4xl pt-8 font-bold">ACCREDITED COURSES</h2>
              </div>
            </div>

            <div className="w-1/2 overflow-clip">
              <img
                src={grid1}
                alt="/"
                className="object-contain hover:rotate-[10deg] duration-[1000ms] hover:scale-[1.23]"
              />
            </div>
          </div>
          <div className="flex justify-between pt-8">
            <p className="w-3/5 text-sm">
              We start accredited blockchain courses at universities around the
              world.
            </p>
            <button className="bg-white py-4 px-8 text-Purple text-sm font-bold h-[64px]">
              Learn More
            </button>
          </div>
        </motion.div>
{/* COLUMN2 */}
        <motion.div 
                                variants={box}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount:0.5}}
                                transition={{ delay: 0.3 }}
                                className="col-span-1">
          <div className=" flex justify-between ">
            <div className="relative">
              <div className="flex flex-col absolute bottom-0">
                <img src={icon5} alt="/" className="w-[64px]" />
                <h2 className="text-4xl pt-8 font-bold">DONATIONS & FUNDING</h2>
              </div>
            </div>

            <div className="w-1/2 overflow-clip">
              <img
                src={grid2}
                alt="/"
                className="object-contain hover:rotate-[10deg] duration-[1000ms] hover:scale-[1.23]"
              />
            </div>
          </div>
          <div className="flex justify-between pt-8">
            <p className="w-3/5 text-sm">
            We host hackathons as they are a great way to incentivise project collaboration and idea development.
            </p>
            <button className="bg-white py-4 px-8 text-Purple text-sm font-bold h-[64px]">
              Learn More
            </button>
          </div>
        </motion.div>
        {/* COLUMN3 */}
        <motion.div 
                                variants={box}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount:0.5}}
                                transition={{ delay: 0.1 }}className="col-span-1">
          <div className=" flex justify-between ">
            <div className="relative">
              <div className="flex flex-col absolute bottom-0">
                <img src={icon5} alt="/" className="w-[64px]" />
                <h2 className="text-4xl pt-8 font-bold">GLOBAL
CONFERENCES</h2>
              </div>
            </div>

            <div className="w-1/2 overflow-clip">
              <img
                src={grid3}
                alt="/"
                className="object-contain hover:rotate-[10deg] duration-[1000ms] hover:scale-[1.23]"
              />
            </div>
          </div>
          <div className="flex justify-between pt-8">
            <p className="w-3/5 text-sm">
            We host conferences aimed to discuss new developments in the industry, and connect our members with the blockchain community.
            </p>
            <button className="bg-white py-4 px-8 text-Purple text-sm font-bold h-[64px] ">
              Learn More
            </button>
          </div>
        </motion.div>
{/* COLUMN4 */}
        <motion.div 
                                variants={box}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount:0.5}}
                                transition={{ delay: 0.3 }}className="col-span-1">
          <div className=" flex justify-between ">
            <div className="relative">
              <div className="flex flex-col absolute bottom-0">
                <img src={icon5} alt="/" className="w-[64px]" />
                <h2 className="text-4xl pt-8 font-bold">DONATIONS & FUNDING</h2>
              </div>
            </div>

            <div className="w-1/2 overflow-clip">
              <img
                src={grid4}
                alt="/"
                className="object-contain hover:rotate-[10deg] duration-[1000ms] hover:scale-[1.23]"
              />
            </div>
          </div>
          <div className="flex justify-between pt-8">
            <p className="w-3/5 text-sm">
            BAF is grateful for the support we receive in donations and funding - this allows us to provide adequate resources to ensure the next generation of blockchain experts has the tools they need
            </p>
            <button className="bg-white py-4 px-8 text-Purple text-sm font-bold h-[64px]">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* COLUMN5 */}
        <motion.div 
                                variants={box}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount:0.5}}
                                transition={{ delay: 0.1 }}
                                className="col-span-1">
          <div className=" flex justify-between ">
            <div className="relative">
              <div className="flex flex-col absolute bottom-0">
                <img src={icon5} alt="/" className="w-[64px]" />
                <h2 className="text-4xl pt-8 font-bold">COLLABS & PARTNERSHIPS</h2>
              </div>
            </div>

            <div className="w-1/2 overflow-clip">
              <img
                src={grid5}
                alt="/"
                className="object-contain hover:rotate-[10deg] duration-[1000ms] hover:scale-[1.23]"
              />
            </div>
          </div>
          <div className="flex justify-between pt-8">
            <p className="w-3/5 text-sm">
            We aim to foster a culture of collaboration that transcends university boundaries and allows new ideas to flow freely. To do so, we source sponsors, speakers, and resources for meetups, conferences, hackathons, and university-affiliated blockchain events.
            </p>
            <button className="bg-white py-4 px-8 text-Purple text-sm font-bold h-[64px]">
              Learn More
            </button>
          </div>
        </motion.div>

                {/* COLUMN6 */}
                <motion.div 
                                        variants={box}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{once: true, amount:0.5}}
                                        transition={{ delay: 0.3 }}className="col-span-1">
          <div className=" flex justify-between ">
            <div className="relative">
              <div className="flex flex-col absolute bottom-0">
                <img src={icon5} alt="/" className="w-[64px]" />
                <h2 className="text-4xl pt-8 font-bold">DEEP RESEARCH
</h2>
              </div>
            </div>

            <div className="w-1/2 overflow-clip">
              <img
                src={grid6}
                alt="/"
                className="object-contain hover:rotate-[10deg] duration-[1000ms] hover:scale-[1.23]"
              />
            </div>
          </div>
          <div className="flex justify-between pt-8">
            <p className="w-3/5 text-sm">
            We support and launch projects with research laboratories, and are building a learning analytics tool used to classify academic research being done in the universities across the BAF network such as UF, UCLA, UCSD, and UT.
            </p>
            <button className="bg-white py-4 px-8 text-Purple text-sm font-bold h-[64px]">
              Learn More
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Feature;
