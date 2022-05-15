import React from 'react'
import { FlexDiv } from '~/SpacedElements'
import { Button } from '~/components/Button'
import { Nft } from '~/components/NFT'
import { CollectionText } from '~/components/Typography'
import { MainContent } from './styled'

export const Available = () => {
  const nftAvailable = [
    {
      name: 'OkayBears',
      number: '#1211',
      price: '21.0',
      floor: '+2.3 SOL',
      rank: '338/4420',
      grade: 'A',
      imageUrl: '/img/170.webp',
    },
    {
      name: 'OkayBears',
      number: '#1211',
      price: '21.0',
      floor: '+2.3 SOL',
      rank: '338/4420',
      grade: 'A',
      imageUrl: '/img/170.webp',
    },
    {
      name: 'OkayBears',
      number: '#1211',
      price: '21.0',
      floor: '+2.3 SOL',
      rank: '338/4420',
      grade: 'A',
      imageUrl: '/img/170.webp',
    },
  ]

  return (
    <>
      <FlexDiv justifyContent="space-between">
        <CollectionText>Top Available Snipes</CollectionText>
        <Button small bigrounded label="More" />
      </FlexDiv>
      <MainContent>
        {nftAvailable.map((nft) => (
          <Nft available key={Math.random()} {...nft} />
        ))}
      </MainContent>
    </>
  )
}
