import React from 'react'
import { FlexDiv } from '~/SpacedElements'
import { Button } from '~/components/Button'
import { Nft } from '~/components/NFT'
import { ClBody, CollectionText, TextStat } from '~/components/Typography'
import { ButtonPos, MainContent, NftBlock, StatsBlock } from './styled'

export const Collection = () => {
  const nftData = [
    {
      name: 'OkayBears',
      number: '#1211',
      price: '21.0',
      rare: 'Epic',
      floor: '+2.3',
      rank: '338/4420',
      grade: 'A',
      snipeRank: '1',
      imageUrl: '/img/170.webp',
    },
    {
      name: 'OkayBears',
      number: '#1211',
      price: '21.0',
      rare: 'Epic',
      floor: '+2.3',
      rank: '338/4420',
      grade: 'A',
      snipeRank: '1',
      imageUrl: '/img/170.webp',
    },
    {
      name: 'OkayBears',
      number: '#1211',
      price: '21.0',
      rare: 'Epic',
      floor: '+2.3',
      rank: '338/4420',
      grade: 'A',
      snipeRank: '1',
      imageUrl: '/img/170.webp',
    },
    {
      name: 'OkayBears',
      number: '#1211',
      price: '21.0',
      rare: 'Epic',
      floor: '+2.3',
      rank: '338/4420',
      grade: 'A',
      snipeRank: '1',
      imageUrl: '/img/170.webp',
    },
    {
      name: 'OkayBears',
      number: '#1211',
      price: '21.0',
      rare: 'Epic',
      floor: '+2.3',
      rank: '338/4420',
      grade: 'A',
      snipeRank: '1',
      imageUrl: '/img/170.webp',
    },
    {
      name: 'OkayBears',
      number: '#1211',
      price: '21.0',
      rare: 'Epic',
      floor: '+2.3',
      rank: '338/4420',
      grade: 'A',
      snipeRank: '1',
      imageUrl: '/img/170.webp',
    },
  ]

  return (
    <MainContent>
      <CollectionText red>Collection</CollectionText>
      <CollectionText>Smoke Heads</CollectionText>
      <ButtonPos>
        <Button small mr="1rem" rounded label="More Stats" />
      </ButtonPos>
      <FlexDiv mt="1rem">
        <ClBody mr="2rem">Stats</ClBody>
        <StatsBlock>
          <TextStat>
            Floor: 18.7 SOL | 3HR Volume: 430 SOL | 1HR Volume: 126 SOL |
            Listed: 108
          </TextStat>
        </StatsBlock>
      </FlexDiv>
      <NftBlock>
        {nftData.map((nft) => (
          <Nft key={nft.number} {...nft} />
        ))}
      </NftBlock>
    </MainContent>
  )
}
