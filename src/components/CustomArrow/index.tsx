import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { ArrowWrapper, SmallArrow } from './styled'

export interface ICustomArrow {
  down?: boolean
  up?: boolean
  left?: boolean
  right?: boolean
  big?: boolean
}

export const CustomArrow: FC<ICustomArrow & SpaceProps> = ({
  down,
  up,
  left,
  big,
  right,
  ...props
}) => (
  <ArrowWrapper {...props}>
    <SmallArrow big={big} down={down} up={up} left={left} right={right} />
  </ArrowWrapper>
)
