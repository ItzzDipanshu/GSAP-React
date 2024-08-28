import React, { useState } from 'react'
import Home from './components/Home'
import 'remixicon/fonts/remixicon.css';
import Loader from './components/partials/Loader';
import Menu from './components/partials/menu/Menu';

const App = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className='relative text-white h-screen w-full bg-[url(/bg.jpg)] bg-cover overflow-hidden'>

      <Loader />
      <Home menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
    </div>
  )
}

export default App
