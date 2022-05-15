import React from 'react'
import { Available } from '~/screens/Home/containers/SniperSection/Top/containers/Avaliable'
import { TopCl } from '~/screens/Home/containers/SniperSection/Top/containers/TopCl'
import { Trending } from '~/screens/Home/containers/SniperSection/Top/containers/Trending'
import { MainContent } from './styled'

export const Top = () => {
  return (
    <MainContent>
      <Available />
      <Trending />
      <TopCl />
    </MainContent>
  )
}
