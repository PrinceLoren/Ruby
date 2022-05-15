import React from 'react'
import { FlexDiv, SpacedDiv } from '~/SpacedElements'
import { Button } from '~/components/Button'
import { Nft } from '~/components/NFT'
import { CollectionText } from '~/components/Typography'
import { MainContent } from '../Avaliable/styled'

export const TopCl = () => {
  const nftCl = [
    {
      name: 'OkayBears',
      oneHfloor: '+80%',
      oneHVolume: '380 SOL',
      imageUrl: '/img/170.webp',
    },
    {
      name: 'OkayBears',
      oneHfloor: '+80%',
      oneHVolume: '380 SOL',
      imageUrl: '/img/170.webp',
    },
    {
      name: 'OkayBears',
      oneHfloor: '+80%',
      oneHVolume: '380 SOL',
      imageUrl: '/img/170.webp',
    },
  ]

  return (
    <SpacedDiv mt="3rem">
      <FlexDiv justifyContent="space-between">
        <CollectionText>Top Available Snipes</CollectionText>
        <Button small bigrounded label="More" />
      </FlexDiv>
      <MainContent>
        {nftCl.map((nft) => (
          <Nft topCl key={Math.random()} {...nft} />
        ))}
      </MainContent>
    </SpacedDiv>
  )
}
