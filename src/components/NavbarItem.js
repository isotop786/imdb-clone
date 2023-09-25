"use client"

import Link from 'next/link'
import React from 'react'
// import {useSearchParams} from "next/navigation"
import {useSearchParams} from "next/navigation"

const NavbarItem = ({title, param}) => {
    const searchParams = useSearchParams()
    const genre = searchParams.get("genre");
    // console.log(param)
  return (
    <div >
        <Link href={`/?genre=${param}`} className={`text-xl font-semibold hover:text-amber-500 cursor-pointer p-2 ${genre == param && 'underline underline-offset-8 text-gray-900 dark:text-amber-500 decoration-4 decoration-amber-500 rounded-lg'}`} >{title}</Link>
    </div>

  )
}

export default NavbarItem