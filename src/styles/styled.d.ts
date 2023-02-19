import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,
      third: string,
      background: string,
      text: string,
      button: string,
      dark_green: string,
      light: string,
      gray_300: string,
      gray_400: string,
      gray_500: string,
      gray_600: string,
      gray_700: string,
    }
  }
}