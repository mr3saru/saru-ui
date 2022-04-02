import { HTMLAttributes } from 'react'
import {
  Children,
  ColorOptions,
  fontSizeOptions,
  fontWeightOptions,
  TextColorOptions
} from './common'

type HTMLHeadingElementTypes = HTMLAttributes<HTMLHeadingElement>

type HTMLTextElementTypes = HTMLAttributes<
  HTMLDivElement | HTMLParamElement | HTMLSpanElement
>

export type HeadingTypes = {
  htmlTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: Children
  color?: ColorOptions
  fontSize?: fontSizeOptions | 'xlarge' | 'xxlarge'
  weight?: fontWeightOptions | 'xxsmall' | 'xsmall'
} & HTMLHeadingElementTypes

export type TextTypes = {
  children: Children
  color?: TextColorOptions
  weight?: fontWeightOptions
  fontSize?: fontSizeOptions
  htmlTag?: 'p' | 'span' | 'div'
} & HTMLTextElementTypes
