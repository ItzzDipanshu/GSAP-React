import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef } from 'react'

const Nav = () => {

  const nav = useRef(null);

  useGSAP(()=>{
    gsap.from(nav.current,{
      opacity: 0,
      duration: 1,
      stagger: 1,
      delay: 0.8
    })
  })

  return (
    <div ref={nav} className='w-full h-[10%]'>
      <div className='flex item-center justify-between '>
      <img src="/logo.svg" alt="" />
      <h1>Menu</h1>
      </div>
    </div>
  )
}

export default Nav
