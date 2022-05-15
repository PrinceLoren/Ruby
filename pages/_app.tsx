import { Global, ThemeProvider } from '@emotion/react'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import React from 'react'
import { theme } from '../src/common/theme'
import { MenuProvider } from '../src/context/menu'
import { globalStyles } from '../src/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <Global styles={globalStyles(theme)} />
        <Component {...pageProps} />
      </MenuProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
