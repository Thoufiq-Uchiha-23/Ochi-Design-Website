import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div id="services" data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-black pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div 
                  initial={{width: 0}}
                  animate={{width: "8vw"}}
                  transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                  className="bg-red-500 mr-[1vw] rounded-md w-[8vw] h-[5.7vw] relative top-[0.5vw]"></motion.div>
                )}
                <h1 className='uppercase text-[8vw] leading-[7vw] font-bold tracking-tighter font-["Founders Grotesk X Cond Lt"]'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
        <div className="border-t-[1px] border-zinc-800 mt-32 flex flex-wrap justify-between gap-3 items-center py-5 px-7 md:px-20">
          {[
            "For Public and Private Companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          ))}
          <div className="start flex items-center gap-5">
            <div className="w-full px-2 md:px-4 py-2 border-[1px] border-solid border-zinc-400 rounded-full uppercase font-md text-sm">
              Start the Project
            </div>
            <div className="w-8 h-8 p-2 md:w-10 md:h-10 flex items-center justify-center border-[1px] border-solid border-zinc-400 rounded-full">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
