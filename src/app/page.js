import Image from 'next/image'

export const metadata = {
  title:'THis is a very greate website with static title',
  description:"THis is a very greate website with static title",
  keyworkd:"Next.js, Tailwind CSS"
}

export default function Home() {
  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="bg-white dark:bg-gray-800">
      <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Lorem ipsum...
      </p>
    </div>
    </main>
  )
}
