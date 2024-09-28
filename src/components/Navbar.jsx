import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[5rem] bg-secondary flex justify-between items-center px-4 w-full sticky mb-8' >
      <div className='flex items-center h-full mr-4'>
        <span className='text-2xl font-bold'>AnimeGen</span>
      </div>
      <nav className='flex items-center justify-end w-full h-full text-lg'>
        <Link className='flex items-center h-full px-4 hover:bg-accent-1' to='/'>Home</Link>
        <Link className='flex items-center h-full px-4 hover:bg-accent-1' to='/movies'>Movies</Link>
        <Link className='flex items-center h-full px-4 hover:bg-accent-1' to='/tvseries'>TV Series</Link>
        <Link className='flex items-center h-full px-4 hover:bg-accent-1' to='/mostpopular'>Most Popular</Link>
        <Link className='flex items-center h-full px-4 hover:bg-accent-1' to='/topairing'>Top Airing</Link>
      </nav>
    </div>
  )
}

export default Navbar