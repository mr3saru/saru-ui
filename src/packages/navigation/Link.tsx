import React from 'react'
import { LinkTypes } from 'types/navigation'

const Link = ({
  children,
  color = 'black',
  colorHover = 'action',
  ...props
}: LinkTypes) => {
  return (
    <a {...props}>
      <style jsx>
        {`
          a {
            position: relative;
            height: 100%;
            width: 100%;
          }
          span {
            transition: var(--transition-default);
            font-size: var(--font-large);
            color: var(--${color});
            font-weight: var(--font-bold);
          }
          span:hover {
            color: var(--${colorHover});
          }
        `}
      </style>
      <span>{children}</span>
    </a>
  )
}

export default Link
