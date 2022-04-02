import React, { useMemo } from 'react'
import { TextTypes } from 'types/typo'

const Text = ({
  children,
  color = 'black',
  weight = 'normal',
  fontSize = 'medium',
  htmlTag = 'p'
}: TextTypes) => {
  const Element = useMemo(() => htmlTag, [htmlTag])

  return (
    <Element className="text">
      <style jsx>{`
        .text {
          color: var(--${color});
          font-weight: var(--font-${weight});
          font-size: var(--font-${fontSize});
        }
      `}</style>
      {children}
    </Element>
  )
}

export default Text
