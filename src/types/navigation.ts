import { HTMLAttributes } from 'react'
import { Children, ColorOptions } from './common'

type HTMLAnchorElementTypes = HTMLAttributes<HTMLAnchorElement>

export type LinkTypes = {
  children: Children
  color?: ColorOptions
  colorHover?: ColorOptions
} & HTMLAnchorElementTypes
