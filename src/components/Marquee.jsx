import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex items-center whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 3}} className='leading-none tracking-tighter text-[12vw] md:text-[10vw] pr-20 uppercase -mb-[2vw] py-7 font-bold font-["Founders Grotesk"]'>we are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 3}} className='leading-none tracking-tighter text-[12vw] md:text-[10vw] uppercase -mb-[2vw] py-7 font-bold font-["Founders Grotesk"] '>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee