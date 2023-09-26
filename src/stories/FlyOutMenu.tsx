// components/FlyOutMenu.tsx
import React, { useState } from 'react'
import './FlyOutMenu.css' // You can create the CSS file for styling
import { Links } from '../app/coponents/links'
import { Button } from '../stories/Atoms/Buttons/Button'

export interface FlyOutMenuProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const FlyOutMenu: React.FC<FlyOutMenuProps> = ({ isOpen, onClose, onOpen }) => {
  return (
    <div className={`fly-out-menu ${isOpen ? 'open' : 'closed'}`}>
      {isOpen ? (
        <div className="menu-title">
          <h2>Menu</h2>
          <Button
            primary={false}
            size="medium"
            label="Close"
            onClick={onClose}
          />
        </div>
      ) : (
        <div className="menu-title">
          <h1></h1>
          <Button primary={false} size="medium" label="Open" onClick={onOpen} />
        </div>
      )}
      <Links />
    </div>
  )
}

export default FlyOutMenu
