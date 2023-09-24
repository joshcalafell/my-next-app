'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Links } from './coponents/links'

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
        <div className="flex flex-col min-h-screen">
          {children}{' '}
          <FlyOutMenu
            isOpen={isOpen}
            onClose={handleClose}
            onOpen={handleOpen}
          />
        </div>
      </body>
    </html>
  )
}
