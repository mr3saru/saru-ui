import { ButtonHTMLAttributes, ReactNode } from 'react'

type HTMLButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonTypes = {
  children?: ReactNode | string | null
} & HTMLButtonTypes
