import '@emotion/react'
import CSS from 'csstype'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Theme {
    colors: {
      white: CSS.Property.Color
      black: CSS.Property.Color
      gray: CSS.Property.Color
      primary: CSS.Property.Color
      red: CSS.Property.Color
      green: CSS.Property.Color
    }
    fonts: {
      default: string
      title: string
    }
    transitionTimes: {
      short: string
      medium: string
      long: string
    }
    breakpoints: CSS.Property.Width[]
  }
}
