import { ButtonHTMLAttributes } from 'react'
import { Children, ColorVariant } from './common'

type HTMLButtonElementTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonTypes = {
  variant?: ColorVariant
  children?: Children
  disabled?: boolean
} & HTMLButtonElementTypes
