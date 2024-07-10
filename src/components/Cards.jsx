import React from 'react'

function Cards() {
  return (
    <div id='insights' className='w-full flex flex-wrap lg:flex-nowrap gap-5 items-center px-[50px] bg-zinc-900'>
        <div className='cardcontainer w-full lg:w-1/2 h-[30vh] lg:h-[50vh]'>
            <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]'>
                <img className='w-25 md:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute text-xs md:text-xl px-5 py-1 border-2 border-solid left-5 md:left-10 rounded-full bottom-5 md:bottom-10 text-[#CDEA68] border-[#CDEA68]'>&copy; 2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer flex flex-wrap lg:flex-nowrap gap-5 w-full lg:w-1/2 h-[30vh] lg:h-[50vh]'>
            <div className='card relative flex items-center justify-center gap-20 rounded-xl w-full h-full bg-[#192826]'>
                <img className='w-25 md:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute text-xs md:text-md px-5 py-1 border-2 border-solid text-center md:text-[12px] rounded-full bottom-5 md:bottom-10 uppercase'>Rating 5.0 on Clutch</button>
            </div>
            <div className='card relative flex items-center justify-center rounded-xl gap-20 w-full h-full bg-[#192826]'>
                <img className='w-12 md:w-[80px]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute text-xs md:text-md px-5 py-1 border-2 border-solid text-center md:text-[12px] rounded-full bottom-5 md:bottom-10 uppercase'>Business Bootcamp Alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards