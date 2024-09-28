import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='' >
      <div>
        <span className=''>AnimeGen</span>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/tvseries'>TV Series</Link>
        <Link to='/mostpopular'>Most Popular</Link>
        <Link to='/topairing'>Top Airing</Link>
      </nav>
    </div>
  )
}

export default Navbar