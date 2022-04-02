import { ReactNode } from 'react'

export type Children = ReactNode | string | null

export type ColorVariant = 'action' | 'positive' | 'base'

export type ColorOptions = 'black' | 'white' | ColorVariant

export type fontSizeOptions = 'small' | 'medium' | 'large'
