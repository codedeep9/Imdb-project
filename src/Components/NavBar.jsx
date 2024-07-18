import React from 'react'
import logo from '../assets/AppLogo.jpg';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div className='flex  p-4 space-x-8 items-center justify-start ' style={{backgroundColor:'#120e0e'}}>
      <img className='w-[100px]' src={logo}/>
      <Link to='/' className='text-white font-bold text-xl nav'>Movies</Link>
      <Link to='/watchlist' className='text-white font-bold text-xl nav'>Watchlist</Link>
    </div>
  )
}

export default NavBar