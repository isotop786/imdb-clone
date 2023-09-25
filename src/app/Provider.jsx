"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

function Provider({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        <div className='dark:bg-zinc-950 dark:text-gray-200 text-gray-700
        transition-colors duration-300 min-h-screen select-none
        '>
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Provider