import { motion } from 'framer-motion'
import React from 'react'

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900  pt-1">
        <div className="textstructure mt-40 px-20 font-['Impact']">
            {["WE CREATE " , "EYE OPENING" , "PRESENTATIONS"].map((item , index)=>{
                return <div className="masker">
                    <div className="w-fit flex items-center">
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width:["9vw"]}} transition={{ease:[0.76, 0, 0.24, 1]}} className='w-[10.5vw] h-[6.7vw] bg-red-900 rounded-md mr-[1vw]'></motion.div>)}
                    <h1 className='text-[8vw] leading-[7.6vw]'>{item}</h1>
                 </div>
            </div>
            })}
        </div>
        <div className="border-t-2 border-zinc-800 mt-32 flex justify-between items-center px-5 py-5">
            {["For public and private companies","from the first pitch to IPO"].map((item , index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
            <div className="start flex align-center gap-2">
                <div className="px-5 py-1 border-[1px] rounded-full border-zinc-500 font-light text.sm uppercase">start the project</div>
                <div className="w-8 h-8 rounded-full border-[1px] rounded-full border-zinc-500  "></div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage