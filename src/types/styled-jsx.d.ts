import 'react'

declare module 'react' {
  interface StyleHTMLAttributes {
    jsx?: boolean
    global?: boolean
  }
}
