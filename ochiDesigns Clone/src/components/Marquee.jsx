import { animate, motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-500 overflow-hidden flex whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[12vw] font-[Founders_Grotesk_X-Condensed] font-semibold'> WE ARE OCHI </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[12vw] font-[Founders_Grotesk_X-Condensed] font-semibold'> WE ARE OCHI </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[12vw] font-[Founders_Grotesk_X-Condensed] font-semibold'> WE ARE OCHI </motion.h1>
        </div>
    </div>
  )
}

export default Marquee