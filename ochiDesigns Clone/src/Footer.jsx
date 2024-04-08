import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 flex p-16">
      <div className="w-1/2 h-full flex flex-col justify-between font-['impact']">
        <div>
          <h1 className="text-[9vw] leading-none mt-10">EYE-</h1>
          <h1 className="text-[9vw] leading-none">OPENING</h1>
        </div>
        <h3 className="font-[arial] text-[20px]">OCHI</h3>
      </div>
      <div className="w-1/2 h-full flex flex-col  font-['impact']">
        <h1 className="text-[7vw] leading-none mt-10">PRESENTATIONS</h1>
        <div className=" w-full flex h-full">
          <div className="w-1/2 h-full ">
            <div className="flex flex-col mt-6 ">
              {["S:","Facebook", "Instagram ", "Twitter"].map((item, index) => (
                <a
                  key={index}
                  className={`text-[18px] mt-2 capitalize  font-[arial] font-light  ${
                    index === 0 && "mb-[10px]"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col mt-6 ">
              {["L:","2022-1965W 4th Ave", "Vancouver,Canada", "Twitter"].map((item, index) => (
                <a
                  key={index}
                  className={`text-[18px] mt-2 capitalize  font-[arial] font-light  ${
                    index === 0 && "mb-[10px]"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="mt-10 font-['arial'] text-zinc-500">&copy;Ochi Designs 2024</p>
          </div>
          <div className="w-1/2 h-full flex flex-col pt-32">
          {["M:","Home", "Services", "Our Works","About us","Cntact Us"].map((item, index) => (
                <a
                  key={index}
                  className={`text-[18px] mt-2 capitalize  font-[arial] font-light  ${
                    index === 0 && "mb-[10px]"
                  }`}
                >
                  {item}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
