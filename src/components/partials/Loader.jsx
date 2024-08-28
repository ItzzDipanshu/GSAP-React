import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef } from 'react'

const Loader = () => {

    const loader = useRef(null);
    const tl = gsap.timeline();

    useGSAP(()=>{
        tl.to(loader.current,{
            width: '100%',
            duration: 1.5,
            delay: 0.8,
            ease: "power4.out"
        })
        tl.to(loader.current,{
          height: 0
        })
    })


  return (
    <div ref={loader} className='fixed w-0 h-[2px] bg-white'>
      
    </div>
  )
}

export default Loader
