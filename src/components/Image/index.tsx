import NextImage from 'next/image'
import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { StyledDiv } from './styled'

interface IImageProps {
  imageSrc: string
  width: number
  height: number
  alt?: string
}

export const Image: FC<IImageProps & SpaceProps> = ({
  imageSrc,
  width,
  height,
  alt,
  children,
}) => (
  <StyledDiv>
    {children}
    <NextImage
      alt={alt}
      src={imageSrc}
      width={width}
      height={height}
      priority
      layout="responsive"
    />
  </StyledDiv>
)
