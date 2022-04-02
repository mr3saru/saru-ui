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
    <Heading {...props} className="heading">
      <style jsx>
        {`
          .heading {
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
