import { Theme } from '@emotion/react'
import { breakpoints } from './mediaQueries'

export const theme: Theme = {
  colors: {
    white: '#FFF',
    black: '#1d1d1d',
    gray: '#312f2f',
    primary: '#00169b',
    red: '#ff0000',
    green: '#1dc38c',
  },
  fonts: {
    default: "'Poppins', sans-serif",
    title: "'Lora', serif",
  },
  transitionTimes: {
    short: '0.2s',
    medium: '0.7s',
    long: '1.3s',
  },
  breakpoints: [
    breakpoints.mobile,
    breakpoints.tablet,
    breakpoints.laptop,
    breakpoints.desktop,
  ],
}
