import React, { useRef } from 'react'
import Menuleft from './Menuleft'
import MenuRight from './MenuRight'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';

const Menu = ({menu,setMenu}) => {

  const menuDiv = useRef(null);

  useGSAP(()=>{
    if(menu){
      gsap.to(menuDiv.current,{
        top: 0,
        ease: "power4.inOut"
      })
    }
    else{
      gsap.to(menuDiv.current,{
        top: '100%',
        ease: "power4.inOut"

      })
    }
  },[menu])

  return (
    <div ref={menuDiv} className='absolute top-full w-full h-screen bg-[#696D6C] flex'>
      <Menuleft />
      <MenuRight menu={menu} setMenu={setMenu} />
    </div>
  )
}

export default Menu
