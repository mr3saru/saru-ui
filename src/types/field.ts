import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputElementTypes = InputHTMLAttributes<HTMLInputElement>

export type CommomTypes = {
  fontSize: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export type TextBoxTypes = CommomTypes & InputElementTypes

type TextAreaElementTypes = TextareaHTMLAttributes<HTMLTextAreaElement>

export type TextAreaTypes = CommomTypes & TextAreaElementTypes
