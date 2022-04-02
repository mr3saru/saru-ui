import { HTMLAttributes } from 'react'
import { Children, ColorOptions, fontSizeOptions } from './common'

type HTMLHeadingElementTypes = HTMLAttributes<HTMLHeadingElement>

export type HeadingTypes = {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: Children
  color?: ColorOptions
  fontSize?: fontSizeOptions | 'xlarge' | 'xxlarge'
  weight?: 'light' | 'bold' | 'normal'
} & HTMLHeadingElementTypes
