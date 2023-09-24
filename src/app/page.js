import Image from 'next/image'

export const metadata = {
  title:'IMDb Clone',
  description:"IMDb clone website with Next.js and TailwindCSS",
  keyworkd:"Next.js, Tailwind CSS"
}

export default function Home() {
  return (
    <h1 className='text-red-400'>Home</h1>
  )
}
