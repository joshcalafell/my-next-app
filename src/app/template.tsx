'use client'

import { Header } from '@/stories/Header'
import { Links } from './coponents/links'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
