export interface RightArrowProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string

  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */

export const RightArrow = ({
  primary = false,
  backgroundColor = '#333333',
}: RightArrowProps) => {
  return (
    <button type="button" className={`'arrow'`}>
      <svg
        viewBox="0 0 14 14"
        width="8px"
        height="14px"
        style={{
          marginLeft: '4px',
          display: 'inline-block',
          shapeRendering: 'inherit',
          verticalAlign: 'middle',
          fill: 'currentColor',
        }}
      >
        <path d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" />
      </svg>
    </button>
  )
}

export default RightArrow
