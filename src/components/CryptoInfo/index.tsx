import React, { FC } from 'react'
import { CryptoStats } from '~/components/CryptoInfo/components/CryptoStats'
import { SearchBar } from '~/components/CryptoInfo/components/SearchBar'
import { Wallet } from '~/components/CryptoInfo/components/Wallet'
import { MainContent } from './styled'

export const CryptoInfo: FC = () => (
  <MainContent>
    <CryptoStats />
    <Wallet />
    <SearchBar />
  </MainContent>
)
