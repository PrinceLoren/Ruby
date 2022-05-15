import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { Button } from '~/components/Button'
import { Image } from '~/components/Image'
import { NftT } from '~/components/Typography'
import {
  ButtonSmallWrapper,
  ButtonWrapper,
  ImageNftPlacholder,
  MainContent,
  StatsContent,
} from './styled'

interface INft {
  imageUrl: string
  name: string
  number?: string
  price?: string
  rare?: string
  floor?: string
  rank?: string
  grade?: string
  snipeRank?: string
  available?: boolean
  trending?: boolean
  oneHfloor?: string
  oneHVolume?: string
  topCl?: boolean
}

// eslint-disable-next-line max-lines-per-function
export const Nft: FC<INft & SpaceProps> = ({
  imageUrl,
  snipeRank,
  oneHfloor,
  oneHVolume,
  rare,
  floor,
  topCl,
  trending,
  rank,
  available,
  grade,
  name,
  number,
  price,
  children,
  ...props
}) => {
  if (available) {
    return (
      <MainContent {...props}>
        <Image imageSrc={imageUrl} width={100} height={100} />
        <StatsContent top mt="1.5rem">
          <NftT white top>
            {name}
          </NftT>
          <NftT white top>
            {number}
          </NftT>
        </StatsContent>
        <StatsContent top>
          <NftT white top mr=".5rem">
            FloorDiff
          </NftT>
          <NftT green top>
            {floor}
          </NftT>
        </StatsContent>
        <StatsContent top>
          <NftT white top>
            Rank
          </NftT>
          <NftT white top>
            {rank}
          </NftT>
        </StatsContent>
        <StatsContent top>
          <NftT white top>
            Grade
          </NftT>
          <NftT white top>
            {grade}
          </NftT>
        </StatsContent>
        <ButtonSmallWrapper>
          <Button small bigrounded label="Snipe" />
        </ButtonSmallWrapper>
      </MainContent>
    )
  }

  if (trending) {
    return (
      <MainContent {...props}>
        <MainContent {...props}>
          <Image imageSrc={imageUrl} width={100} height={100} />
          <StatsContent top mt="1.5rem">
            <NftT white top>
              {name}
            </NftT>
          </StatsContent>
          <StatsContent top>
            <NftT white top mr=".5rem">
              1 HR Floor
            </NftT>
            <NftT green top>
              {oneHfloor}
            </NftT>
          </StatsContent>
          <StatsContent top>
            <NftT white top mr=".5rem">
              1HR Volume
            </NftT>
            <NftT green top>
              {oneHVolume}
            </NftT>
          </StatsContent>
        </MainContent>
      </MainContent>
    )
  }

  if (topCl) {
    return (
      <MainContent {...props}>
        <MainContent {...props}>
          <MainContent {...props}>
            <Image imageSrc={imageUrl} width={100} height={100} />
            <StatsContent top mt="1.5rem">
              <NftT white top>
                {name}
              </NftT>
            </StatsContent>
            <StatsContent top>
              <NftT white top>
                1 HR Floor
              </NftT>
              <NftT green top>
                {oneHfloor}
              </NftT>
            </StatsContent>
            <StatsContent top>
              <NftT white top>
                1HR Volume
              </NftT>
              <NftT green top>
                {oneHVolume}
              </NftT>
            </StatsContent>
          </MainContent>
        </MainContent>
      </MainContent>
    )
  }

  return (
    <MainContent {...props}>
      <ImageNftPlacholder>
        <Image imageSrc={imageUrl} width={30} height={25} />
        <ButtonWrapper>
          <Button small bigrounded label="Quick Buy" />
        </ButtonWrapper>
      </ImageNftPlacholder>

      <StatsContent mt="1.5rem">
        <NftT>{name}</NftT>
        <NftT white>{number}</NftT>
      </StatsContent>
      <StatsContent>
        <NftT>Price</NftT>
        <NftT white>{price}</NftT>
      </StatsContent>
      <StatsContent>
        <NftT>Rarity</NftT>
        <NftT white>{rare}</NftT>
      </StatsContent>
      <StatsContent>
        <NftT>Grade</NftT>
        <NftT white>{grade}</NftT>
      </StatsContent>
      <StatsContent>
        <NftT>FloorDiff</NftT>
        <NftT white>{floor}</NftT>
      </StatsContent>
      <StatsContent>
        <NftT>Rank</NftT>
        <NftT white>{rank}</NftT>
      </StatsContent>
      <StatsContent>
        <NftT>Snipe Rank</NftT>
        <NftT white>{snipeRank}</NftT>
      </StatsContent>
    </MainContent>
  )
}
