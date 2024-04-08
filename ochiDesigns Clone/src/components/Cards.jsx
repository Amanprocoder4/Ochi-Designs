import React from 'react'

const cards = () => {
  return (
    <div className='w-full h-screen flex items-center px-20 gap-5 bg-zinc-100'>
        <div className="cardContainer h-[50vh] w-1/2">
            <div className="card relative rounded-xl w-full h-full bg-[#004d43] flex justify-center items-center">
              <h2 className='text-yellow-300 text-[40px] font-["impact"]'>OCHI</h2>
              <button className='absolute px-7 py-1 border-[1px] left-10 bottom-8 rounded-full'>&copy; 2019-2022</button>
            </div>
        </div>
        <div className="cardContainer flex h-[50vh] gap-5 w-1/2">
            <div className="card rounded-xl w-1/2 h-full bg-zinc-900 relative flex justify-center items-center">
            <h2 className='text-zinc-300 text-[40px] font-["arial"]'>Clutch</h2>
            <button className='absolute px-7 py-1 border-[1px] left-8 bottom-8 rounded-full'>Rating 5.0 on Clutch</button>
            </div>
            <div className="card rounded-xl w-1/2 h-full bg-zinc-800 relative flex justify-center items-center">
            <h2 className='bg-zinc-300 h-[80px] w-[80px] rounded-full'></h2>
            <button className='absolute px-7 py-1 border-[1px] left-8 bottom-8 rounded-full'>Rating 5.0 on Clutch</button>
            </div>
        </div>
    </div>
  )
}

export default cards