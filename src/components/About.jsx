import React from 'react'

function About() {
  return (
    <div id="about" className='w-full p-[50px] md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue Montreal'] text-[7vw] md:text-[4vw] font-semibold tracking-tight leading-[7vw] md:leading-[4.5vw] ">
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full flex md:flex-nowrap flex-wrap gap-5 border-t-[1px] mt-20 border-[#98a370]'>
          <div className='w-1/2 pt-10'>
            <h1 className='text-5xl md:text-6xl font-semibold'>Our Approach</h1>
            <button className='px-5 md:px-10 flex flex-nowrap gap-10 uppercase items-center py-3 mt-10 bg-zinc-900 rounded-full text-white'>Read More
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
          <div className='w-full md:w-1/2 h-[60vh] rounded-3xl mt-10 relative'>
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className='rounded-3xl'/>
          </div>
        </div>
    </div>
  )
}

export default About