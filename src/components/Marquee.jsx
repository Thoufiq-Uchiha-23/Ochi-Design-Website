import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex items-center whitespace-nowrap overflow-hidden'>
            <h1 className='leading-none text-[10vw] uppercase -mb-[2vw] py-7 font-bold font-["Founders Grotesk"] mr-10'>we are ochi</h1>
            <h1 className='leading-none text-[10vw] uppercase -mb-[2vw] py-7 font-bold font-["Founders Grotesk"] '>we are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee