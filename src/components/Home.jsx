import React from 'react'
import Nav from './partials/Nav'
import Header from './partials/Header'


const Home = ({menu, setMenu}) => {
  return (
    <div className='w-full h-full p-5'>
      <Nav menu={menu} setMenu={setMenu} />
      <Header />
      
    </div>
  )
}

export default Home
