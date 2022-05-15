import React, { FC } from 'react'
import { useMediaQueries } from '~/common/mediaQueries'
import { Button } from '~/components/Button'
import { WalletContent } from './styled'

export const Wallet: FC = () => {
  const { isLaptop } = useMediaQueries()
  return (
    <WalletContent>
      {/*<TopBarText>Wallet:</TopBarText>*/}
      {/*<TopBarInfo marginX="1rem">20 SOL</TopBarInfo>*/}
      <Button small={!isLaptop} label="Connect" />
    </WalletContent>
  )
}
