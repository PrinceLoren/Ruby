
import React from 'react'
import { globalStyles } from '../src/styles/global'
import { ThemeProvider, Global } from '@emotion/react'
import { theme } from '../src/common/theme'


export const decorators = [
  (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
          <Story />
      </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}