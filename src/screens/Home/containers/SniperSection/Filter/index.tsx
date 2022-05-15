import React from 'react'
import { Button } from '~/components/Button'
import { FilterComp } from '~/components/FilterComp'
import { IText, TextBody } from '~/components/Typography'
import { Flexable, MainContent, Selector } from './styled'

export const Filter = () => {
  return (
    <MainContent>
      <Flexable>
        <TextBody>Sniper Filters</TextBody>
        <Button
          ml={['0rem', '0rem', '0rem', '1rem']}
          mt={['1rem', '1rem', '1rem', '0rem']}
          bigrounded
          small
          label="Grade Guide"
        />
      </Flexable>
      <TextBody mt="2rem">Collection</TextBody>
      <Selector mt="1rem">
        <IText>
          <img
            src="/img/3div.png"
            alt="3div"
            width="14rem"
            style={{ marginRight: '.5rem' }}
          />
          Smoke Heads
        </IText>
      </Selector>
      <FilterComp />
    </MainContent>
  )
}
