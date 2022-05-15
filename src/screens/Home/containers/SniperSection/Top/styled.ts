import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'

export const MainContent = styled.div<SpaceProps>`
  display: flex;
  flex-direction: column;
  grid-area: top;
  width: 100%;
  ${space}
`
