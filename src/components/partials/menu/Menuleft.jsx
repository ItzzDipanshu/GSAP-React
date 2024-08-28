import React from 'react'
import { Tilt } from '@jdion/tilt-react'

const Menuleft = () => {
  return (
    <div className='h-full w-2/3 p-12 overflow-hidden'>
        <Tilt className='h-full w-full relative'>
            <img className='w-full h-full absolute scale-[0.97] opacity-[30%] object-cover' src="/tiltEff.jpg" alt="" />
            <img className='w-full h-full absolute scale-[0.98] opacity-[40%] object-cover' src="/tiltEff.jpg" alt="" />
            <img className='w-full h-full absolute scale-[0.96] opacity-[60%] object-cover' src="/tiltEff.jpg" alt="" />
            <img className='w-full h-full absolute scale-[0.99] opacity-[50%] object-cover' src="/tiltEff.jpg" alt="" />
            <img className='w-full h-full absolute scale-[0.95] opacity-[70%] object-cover' src="/tiltEff.jpg" alt="" />
        </Tilt>
      
    </div>
  )
}

export default Menuleft;
