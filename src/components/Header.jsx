import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from  'react-icons/ai'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

function Header() {
  return (
    <div className='py-6 flex justify-between items-center mx-2 max-w-6xl sm:mx-auto'>
        <div className='flex flex-row space-x-3 mx-4 lg:mx-6'>
            <MenuItem title="Home" address="/" Icon={AiFillHome}/>
            <MenuItem title="About" address="/about" Icon={AiFillInfoCircle}/>
        </div>

        <div className='flex space-x-5 items-center'>
            <DarkModeSwitch/>
            <Link href={"/"}  >
                <h2 className='text-2xl '><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-2 dark:text-gray-900'>IMDb</span>
                <span className='text-xl hidden sm:inline '>Clone</span></h2>
            </Link>
        </div>

    </div>
  )
}

export default Header