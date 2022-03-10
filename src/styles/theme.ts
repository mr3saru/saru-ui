export default {
  container: {
    medium: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem',
    rounded: '2.4rem'
  },
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#4B1F37',
    secondary: '#810121',
    success: '#6DB437',
    white: '#F8F7FB',
    black: '#222222',
    dark: '#38130B',
    disabled: '#DBDBDB',
    gray: {
      lightest: '#F4F4F9',
      lighter: '#EFF0F9',
      base: '#E6E6E6',
      dark: '#B3B3B3',
      darker: '#999999',
      darkest: '#808080',
      xdarkest: '#4D4D4D'
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadow: {
    inner: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
  }
} as const
