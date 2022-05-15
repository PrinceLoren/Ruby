import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'

export const MainContent = styled.div<SpaceProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 5rem;
  margin-top: 2rem;
  ${space}
`
