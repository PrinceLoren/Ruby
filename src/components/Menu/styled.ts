import styled from '@emotion/styled'
import { mediaQueries } from '~/common/mediaQueries'

export const MenuContent = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  width: ${(props) => (props.isOpen ? '100vw' : 0)};
  background: ${(props) => props.theme.colors.red};
  transition: all ${(props) => props.theme.transitionTimes.short} ease-in;

  ${mediaQueries.tablet} {
    width: ${(props) => (props.isOpen ? '35rem' : 0)};
  }

  ${mediaQueries.laptop} {
    position: relative;
  }
`

export const CentredLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  align-items: center;
`

export const Logo = styled.div`
  display: block;
  width: 15rem;
  margin-top: 6rem;
  cursor: pointer;
  margin-bottom: 3rem;
`

export const Close = styled.div`
  position: absolute;
  cursor: pointer;
  top: 2rem;
  right: 2rem;
  width: 3rem;
`
