import React, { FC } from 'react'
import { FilterRow } from '~/components/FilterComp/components/FilterRow'
import { MainContent } from './styled'

export const FilterComp: FC = () => {
  const data = [
    { name: 'Price', filter: '25 Max' },
    { name: 'Rank', filter: '900 Max' },
    { name: 'Grade', filter: 'B - Min' },
    { name: 'Rarity', rare: 'Rare+' },
    { name: 'Auto Snipe', check: true },
    { name: 'Snipe Limit', filter: '2 Max' },
    { name: 'Show All Item', check: true },
  ]

  return (
    <MainContent>
      {data.map((filter) => (
        <FilterRow key={filter.name} mt="1rem" {...filter} />
      ))}
    </MainContent>
  )
}
