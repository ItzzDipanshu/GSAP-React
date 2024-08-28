import React from 'react'

const MenuRight = ({menu, setMenu}) => {

  const menuHandler = ()=>{
    setMenu(false)
  }

  return (
    <div className='h-full w-1/3 px-6 py-12'>
      <div className='text-right'>
        <h1 onClick={menuHandler} className='cursor-pointer'>Close</h1>
      </div>
      <div className='pt-20'>
        <div className='py-2'><h1 className='text-5xl'>About</h1></div>
        <div className='py-2'><h1 className='text-5xl'>Story</h1></div>
        <div className='py-2'><h1 className='text-5xl'>Projects</h1></div>
      </div>
    </div>
  )
}

export default MenuRight
