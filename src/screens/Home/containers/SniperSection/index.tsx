import React from 'react'
import { Collection } from '~/screens/Home/containers/SniperSection/Collection'
import { Filter } from '~/screens/Home/containers/SniperSection/Filter'
import { Top } from '~/screens/Home/containers/SniperSection/Top'
import { MainContent } from '~/screens/Home/containers/SniperSection/styled'

export const SniperSection = () => (
  <MainContent>
    <Filter />
    <Collection />
    <Top />
  </MainContent>
)
