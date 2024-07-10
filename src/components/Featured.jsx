import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
  const cards = [useAnimation(), useAnimation()]  
  const handleHover = (index) => {
    cards[index].start({ y: "0" })
  }

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" })
  }

  return (
    <div id="work" className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-4xl md:text-6xl font=["Neue Montreal"] tracking-tight'>Featured projects</h1>
        </div>
        <div className='px-[30px]'>
            <div className='cards w-full flex md:flex-nowrap flex-wrap gap-[30px] md:gap-10 mt-10'>
                <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardcontainer relative w-full md:w-1/2 h-auto'>
                    <h1
                     className='absolute z-[9] text-8xl leading-none tracking-tighter flex overflow-hidden left-[50%] md:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]'>
                        {"FYDE".split('').map((item, index) => 
                        <motion.span 
                        initial={{y: "100%"}} 
                        animate={cards[0]} 
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                        className='inline-block translate-y-full'>{item}</motion.span> )}
                     </h1>
                    <div className='card w-full md:h-full rounded-2xl overflow-hidden '>
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </motion.div>
                <motion.div 
                onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)}
                className='cardcontainer relative w-full md:w-1/2 h-auto'>
                    <h1 className='absolute z-[9] text-8xl flex overflow-hidden leading-none tracking-tighter right-[50%] md:right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]'>
                        {"VISE".split('').map((item, index) => 
                        <motion.span 
                        initial={{y: "100%"}} 
                        animate={cards[1]} 
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                        className='inline-block translate-y-full'>{item}</motion.span> )}
                    </h1>
                    <div className='card w-full md:h-full rounded-2xl  overflow-hidden '>
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
        
    </div>
  )
}

export default Featured