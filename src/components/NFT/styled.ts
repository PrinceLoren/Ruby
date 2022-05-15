import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'

export const MainContent = styled.div<SpaceProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${space}
`

interface ITop {
  top?: boolean
}

export const StatsContent = styled.div<SpaceProps & ITop>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.top ? 'center' : 'space-between')};
  ${space}
`

export const ImageNftPlacholder = styled.div`
  position: relative;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
`

export const ButtonSmallWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
