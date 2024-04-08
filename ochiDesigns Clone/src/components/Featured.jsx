import React from 'react'

const Featured = () => {
  return (
    <div className='w-full py-10'>
        <div className="w-full px-16 border-b-[1px] border-zinc-700 pb-14">
            <div className="text-7xl tracking-tight">Featured Project</div>
        </div>

        <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
            <div className="card w-1/2 h-[80vh] relative">
                <div className="absolute left-full -translate-x-1/2 top-1/2 text-yellow-300 font-['impact'] sta -translate-y-1/2 text-[6vw] z-[99]">
                    {"VISE".split("").map((item,index)=>(<span>{item}</span>))}
                </div>
                <div className="img-container h-full w-full rounded-xl bg-green-800"></div>
            </div>
            <div className="card w-1/2 h-[80vh] relative">
            <div className="absolute right-full translate-x-1/2 top-1/2 text-yellow-300 font-['impact'] sta -translate-y-1/2 text-[6vw] z-[99]">
            {"VISE".split("").map((item,index)=>(<span>{item}</span>))}
            </div>
                <div className="img-container h-full rounded-xl w-full bg-green-800"></div>
            </div>
        </div>
        </div>
    </div>

  )
}

export default Featured