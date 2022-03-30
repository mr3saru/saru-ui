import React from 'react'
import { ButtonTypes } from 'types/button'

const Button = ({ variant = 'action', children, ...props }: ButtonTypes) => {
  return (
    <button {...props} disabled={props?.disabled || false}>
      <style jsx>{`
        button {
          border: none;
          cursor: pointer;
          background: var(--${variant});
          color: var(--white);
          width: 100%;
          height: 4rem;
          display: block;
          margin: 0 auto;
          font-weight: var(--font-bold);
          transition: var(--transition-default);
        }
        button:hover {
          filter: brightness(1.2);
        }
        button:active {
          filter: brightness(0.9);
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

export default Button
