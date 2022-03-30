import React from 'react'
import { ButtonTypes } from 'types/button'

const ButtonGhost = ({ children, ...props }: Omit<ButtonTypes, 'variant'>) => {
  return (
    <button {...props} disabled={props?.disabled || false}>
      <style jsx>{`
        button {
          border: none;
          cursor: pointer;
          background: transparent;
          width: fit-content;
          height: fit-content;
          transition: var(--transition-default);
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

export default ButtonGhost
