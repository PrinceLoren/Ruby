import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const MainContent = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: auto;
  grid-template-rows: auto;
  column-gap: 5rem;
  grid-template-areas:
    'filter'
    'sniper'
    'top';

  ${mediaQueries.tablet} {
    grid-template-columns: auto auto;
    grid-template-areas:
      'filter sniper'
      'top top';
  }

  ${mediaQueries.laptop} {
    grid-template-columns: 27rem auto auto;
    grid-template-areas: 'filter sniper top';
  }
`
