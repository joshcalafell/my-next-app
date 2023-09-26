import React from 'react'

export interface LeftArrowProps {
  backgroundColor?: string

  /**
   * Optional click handler
   */
  arrowClick?: () => void
}
/**
 * Primary UI component for user interaction
 */
export const LeftArrow = ({ arrowClick }: LeftArrowProps) => {
  return (
    <>
      <button type="button" className="app-arrow" onClick={arrowClick}>
        {` < `}
      </button>
      <style jsx>{`'
    background-color: #fff;
    border: none;
    
    '`}</style>
    </>
  )
}
