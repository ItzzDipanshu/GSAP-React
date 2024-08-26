import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useRef } from "react";

const Header = () => {

    const header = useRef(null);

    useGSAP(()=>{
        gsap.from(header.current,{
            y: "100%",
            opacity: 0,
            rotate: "90deg",
            duration: 0.2,
            delay: 2,

        })
    })


  return (
    <div  className=" w-full flex flex-col items-center justify-center">
      <div className="w-[90%] flex items-center justify-center overflow-hidden">
        <h1 ref={header} className="text-[20vw] origin-left font-bold tracking-tighter leading-tight">Dipanshu</h1>
      </div>
      <div className="w-[80%] flex items-center justify-between">
        <div className="flex gap-3 items-center">
            <div className="h-[5vh] w-[5vh] flex items-center justify-center border rounded-full">
            <i className="ri-play-fill"></i>
            </div>
        <h1>
          Open <br />
          Resume
        </h1>
        </div>
        <div className="flex gap-20 items-center">
          <h1>
            Front-End <br />
            Developer
          </h1>
          <h1>
            Nagaur <br />
            Rajasthan
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
