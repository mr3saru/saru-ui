import { InputHTMLAttributes } from 'react'

type InputTypes = InputHTMLAttributes<HTMLInputElement>

export type TextBoxTypes = {
  fontSize?: 'small' | 'medium' | 'large'
  disabled?: boolean
} & InputTypes
