import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef } from 'react'

const Loader = () => {

    const loader = useRef(null);

    useGSAP(()=>{
        gsap.to(loader.current,{
            width: '100%',
            duration: 2,
            delay: 0.8,
            ease: "power4.out"
        })
    })


  return (
    <div ref={loader} className='fixed w-0 h-[2px] bg-white'>
      
    </div>
  )
}

export default Loader
