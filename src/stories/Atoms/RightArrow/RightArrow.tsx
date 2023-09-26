import React from 'react'

export interface RightArrowProps {
  backgroundColor?: string

  /**
   * Optional click handler
   */
  arrowClick?: () => void
}
/**
 * Primary UI component for user interaction
 */
export const RightArrow = ({ arrowClick }: RightArrowProps) => {
  return (
    <>
      <button
        type="button"
        className="app-arrow"
        onClick={arrowClick}
      >{` > `}</button>
      <style jsx>{`'
  background-color: #ffffff;
  border: none;
  
  '`}</style>
    </>
  )
}
