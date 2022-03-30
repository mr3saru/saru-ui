import React from 'react'
import { ButtonTypes } from 'types/button'

const Ghost = ({ children, ...props }: ButtonTypes) => {
  return (
    <button {...props} disabled={props?.disabled || false}>
      <style jsx>{`
        button {
          border: none;
          cursor: pointer;
          background: transparent;
          width: fit-content;
          height: fit-content;
        }

        button:disabled {
          cursor: not-allowed;
        }
        button:disabled:hover {
          opacity: 0.5;
        }
      `}</style>
      {children}
    </button>
  )
}

export default Ghost
