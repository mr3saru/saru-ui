import React from 'react'
import { TextBoxTypes } from 'types/field'

const TextBox = ({ value, fontSize = 'medium', ...props }: TextBoxTypes) => {
  return (
    <>
      <style jsx>{`
        input {
          display: block;
          padding: var(--spacing-compact);
          border: 1px solid var(--light);
          color: var(--black);
          font-size: var(--font-${fontSize});
        }
        input {
          height: fit-content;
          width: 100%;
        }
        input:disabled {
          background: var(--lighter);
          color: var(--gray);
        }
        ::placeholder {
          color: var(--gray);
        }
      `}</style>
      <input {...props} disabled={props?.disabled || false} value={value} />
    </>
  )
}

export default TextBox
