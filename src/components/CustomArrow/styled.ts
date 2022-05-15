import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'
import { ICustomArrow } from '~/components/CustomArrow/index'

export const ArrowWrapper = styled.div<SpaceProps>`
  position: relative;
  ${space};
`

export const SmallArrow = styled.div<ICustomArrow>`
  width: ${(props) => (props.big ? '1.7rem' : '0.73rem')};
  height: ${(props) => (props.big ? '1.6rem' : '0.7rem')};
  color: ${(props) => props.theme.colors.primary};
  position: absolute;
  top: 50%;
  border-bottom: ${(props) => (props.big ? '0.35rem' : '0.25rem')} solid;
  border-left: ${(props) => (props.big ? '0.35rem' : '0.25rem')} solid;
  transform: translateZ(0)
    translateY(
      ${(props) => {
        if (props.right) {
          return '-45%'
        }
        if (props.left) {
          return '-60%'
        }
        if (props.up) {
          return '-40%'
        }
        return '-80%'
      }}
    )
    rotate(
      ${(props) => {
        if (props.right) {
          return '-135deg'
        }
        if (props.left) {
          return '45deg'
        }
        if (props.up) {
          return '-225deg'
        }
        return '-45deg'
      }}
    );
  transition: transform ${(props) => props.theme.transitionTimes.short} ease-in;
  will-change: transform;
`
