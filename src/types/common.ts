import { ReactNode } from 'react'

export type Children = ReactNode | string | null

export type ColorVariant = 'action' | 'positive' | 'base'

export type ColorOptions = 'black' | 'white' | ColorVariant

export type fontSizeOptions = 'small' | 'medium' | 'large'

export type fontWeightOptions = 'light' | 'bold' | 'normal'

export type TextColorOptions =
  | 'black'
  | 'dark'
  | 'gray'
  | 'light'
  | 'lighter'
  | 'white'
