import React from 'react'
import { TextAreaTypes } from 'types/field'
import { commonStyles } from './styles'

const TextArea = ({ value, fontSize = 'medium', ...props }: TextAreaTypes) => {
  return (
    <>
      <style jsx>{commonStyles({ fontSize })}</style>
      <textarea {...props} disabled={props?.disabled || false} value={value} />
    </>
  )
}

export default TextArea
