import React from 'react'
import Menuleft from './Menuleft'
import MenuRight from './MenuRight'

const Menu = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 flex'>
      <Menuleft />
      <MenuRight />
    </div>
  )
}

export default Menu
