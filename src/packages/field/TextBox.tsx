import React from 'react'
import { TextBoxTypes } from 'types/field'
import { commonStyles } from './styles'

const TextBox = ({ value, fontSize = 'medium', ...props }: TextBoxTypes) => {
  return (
    <>
      <style jsx>{commonStyles({ fontSize })}</style>
      <input {...props} disabled={props?.disabled || false} value={value} />
    </>
  )
}

export default TextBox
