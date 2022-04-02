import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { fontSizeOptions } from './common'

type InputElementTypes = InputHTMLAttributes<HTMLInputElement>

export type CommomTypes = {
  fontSize: fontSizeOptions
  disabled?: boolean
}

export type TextBoxTypes = CommomTypes & InputElementTypes

type TextAreaElementTypes = TextareaHTMLAttributes<HTMLTextAreaElement>

export type TextAreaTypes = CommomTypes & TextAreaElementTypes
