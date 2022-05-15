import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { TextBody } from '~/components/Typography'
import { Check, Filter, MainContent, Rare } from './styled'

interface IFilterRow {
  name: string
  filter?: string
  rare?: string
  checked?: boolean
}

export const FilterRow: FC<IFilterRow & SpaceProps> = ({
  name,
  filter,
  rare,
  checked,
  ...props
}) => (
  <MainContent {...props}>
    <TextBody mr="1.2rem">{name}</TextBody>
    {filter && <Filter>{filter}</Filter>}
    {rare && <Rare>{rare}</Rare>}
    {checked && <Check />}
  </MainContent>
)
