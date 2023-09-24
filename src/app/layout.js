import './globals.css'

import Header from '@/components/Header'

export const metadata = {
  title: 'IMDB Clone',
  description: 'IMDB clone webstie with Next.js and TailwindCSS ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >

      {/* Header */}
      <Header/>
      {/* Navbar */}

      {/* Search */}

       {children}
      </body>
    </html>
  )
}
