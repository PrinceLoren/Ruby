import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'
import { mediaQueries } from '~/common/mediaQueries'

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  grid-area: filter;
`

export const Selector = styled.div<SpaceProps>`
  padding: 0.3rem 1rem;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 2rem;
  width: 100%;
  ${space}
`

export const Flexable = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.laptop} {
    flex-direction: row;
  }
`
