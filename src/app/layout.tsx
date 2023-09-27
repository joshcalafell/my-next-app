'use client'

import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { useState } from 'react'
import FlyOutMenu, { FlyOutMenuProps } from '@/stories/FlyOutMenu'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose: FlyOutMenuProps['onClose'] = () => {
    setIsOpen(false)
  }

  const handleOpen: FlyOutMenuProps['onOpen'] = () => {
    setIsOpen(true)
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">{children} </div>
      </body>
    </html>
  )
}
