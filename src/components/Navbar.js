import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className='flex justify-center py-3 space-x-6 dark:bg-gray-500 bg-amber-100'>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navbar