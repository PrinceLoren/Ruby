import React, { FC } from 'react'
import { useMediaQueries } from '~/common/mediaQueries'
import { TopBarInfo, TopBarText } from '~/components/Typography'
import { StatsContent } from './styled'

export const CryptoStats: FC = () => {
  const { isTablet } = useMediaQueries()
  return (
    <StatsContent>
      <TopBarText>Solana:</TopBarText>
      <TopBarInfo marginX="1rem">64.70 USD</TopBarInfo>
      {isTablet && (
        <>
          <TopBarText>Network:</TopBarText>
          <TopBarInfo marginX="1rem">2000 TPS</TopBarInfo>
          <TopBarText>Solana 24Hr:</TopBarText>
          <TopBarInfo marginX="1rem">+0.15%</TopBarInfo>
        </>
      )}
    </StatsContent>
  )
}
