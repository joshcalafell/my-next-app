import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

interface PageTitle {
  label: string
  size: 'medium' | 'large'
}

/**
 * Primary UI component for user interaction
 */
export const PageTitle = ({ label }: PageTitle) => {
  return <h1 className={inter.className}>{label}</h1>
}
