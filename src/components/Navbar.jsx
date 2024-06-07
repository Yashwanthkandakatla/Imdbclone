import React from 'react'
import Logo from '../movie-svgrepo-com.svg' 
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-3'>
        <img className='w-[50px] p-[4px]' src={Logo} alt=''/>

        <Link className='text-blue-500 text-3xl font-mono font-bold' to='/'>Movies</Link>
        <Link className='text-blue-500 text-3xl font-bold font-mono' to='/Watchlist'>Watchlist</Link>

    </div>
  )
}

export default Navbar