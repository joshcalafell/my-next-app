// components/FlyOutMenu.tsx
import React, { useState } from 'react'
import './FlyOutMenu.css' // You can create the CSS file for styling
import { Links } from '../app/coponents/links'

export interface FlyOutMenuProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const FlyOutMenu: React.FC<FlyOutMenuProps> = ({ isOpen, onClose, onOpen }) => {
  const menuStyle = {
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
  }

  return (
    <div
      className={`fly-out-menu ${isOpen ? 'open' : 'closed'}`}
      style={menuStyle}
    >
      {isOpen ? (
        <div>
          <button onClick={onClose} className="close-button">
            Close
          </button>
          <Links />
        </div>
      ) : (
        <div>
          <button onClick={onOpen} className="open-button">
            Open
          </button>
        </div>
      )}
    </div>
  )
}

export default FlyOutMenu
