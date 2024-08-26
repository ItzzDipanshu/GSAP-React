import React from 'react'
import Home from './components/Home'
import 'remixicon/fonts/remixicon.css';
import Loader from './components/partials/Loader';
import Menu from './components/partials/menu/Menu';

const App = () => {
  return (
    <div className='text-white h-screen w-full bg-[url(/bg.jpg)] bg-cover'>

      <Loader />
      <Home />
      <Menu />
    </div>
  )
}

export default App
