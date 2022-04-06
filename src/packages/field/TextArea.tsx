import React from 'react'
import { TextAreaTypes } from 'types/field'

const TextArea = ({ value, fontSize = 'medium', ...props }: TextAreaTypes) => {
  return (
    <>
      <style jsx>{`
        textarea {
          display: block;
          padding: var(--spacing-compact);
          border: 1px solid var(--light);
          color: var(--black);
          font-size: var(--font-${fontSize});
        }

        textarea {
          height: fit-content;
          width: 100%;
        }

        textarea:disabled {
          background: var(--lighter);
          color: var(--gray);
        }
        textarea::placeholder {
          color: var(--gray);
        }
      `}</style>
      <textarea {...props} disabled={props?.disabled || false} value={value} />
    </>
  )
}

export default TextArea
