import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'

export const StyledLayout = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`

export const StyledMainContent = styled.div<SpaceProps>`
  display: flex;
  padding: 0 2rem;
  flex-direction: column;
  margin: 7rem auto;

  ${space}
`
