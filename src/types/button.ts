import { ButtonHTMLAttributes, ReactNode } from 'react'

type HTMLButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonTypes = {
  variant?: 'action' | 'positive' | 'base'
  children?: ReactNode | string | null
  disabled?: boolean
} & HTMLButtonTypes
