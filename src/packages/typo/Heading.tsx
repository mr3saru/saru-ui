import React, { useMemo } from 'react'

import { HeadingTypes } from 'types/typo'

const Heading = ({
  children,
  color = 'black',
  htmlTag = 'h1',
  fontSize = 'large',
  weight = 'normal',
  ...props
}: HeadingTypes) => {
  const Heading = useMemo(() => htmlTag, [htmlTag])

  return (
    <Heading {...props}>
      <style jsx>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: var(--${color});
            font-size: var(--font-${fontSize});
            font-weight: var(--font-${weight});
          }
        `}
      </style>
      {children}
    </Heading>
  )
}

export default Heading
