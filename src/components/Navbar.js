"use client" 
import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
    // React.useEffect(()=>{
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //           accept: 'application/json',
    //           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTRkNTJmZTY2YjhjZjdkMDA5ZTFhODA3MjdlOTMxMSIsInN1YiI6IjY1MTFiMjMzZTFmYWVkMDBhZTMxMjFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KGO6wNIq3exdZfAKTNLdcCgqN9uhPfNDKznjhsMfu1U'
    //         }
    //       };
          
    //       fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err));
    // },[])
  return (
    <div className='flex justify-center py-3 space-x-6 dark:bg-gray-500 bg-amber-100'>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navbar

