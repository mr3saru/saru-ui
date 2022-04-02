import { HTMLAttributes } from 'react'
import { Children, ColorVariant } from './common'

type HTMLAnchorElementTypes = HTMLAttributes<HTMLAnchorElement>

type ColorOptions = 'black' | 'white' | ColorVariant

export type LinkTypes = {
  children: Children
  color?: ColorOptions
  colorHover?: ColorOptions
} & HTMLAnchorElementTypes
