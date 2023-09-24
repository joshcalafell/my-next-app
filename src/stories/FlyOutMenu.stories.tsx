// stories/FlyOutMenu.stories.tsx
import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import FlyOutMenu from './FlyOutMenu'

export default {
  title: 'FlyOutMenu',
  component: FlyOutMenu,
} as Meta

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={toggleMenu}>Open Menu</button>
      <FlyOutMenu isOpen={isOpen} onClose={toggleMenu} onOpen={toggleMenu} />
    </div>
  )
}
