import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'

interface IStyledButton {
  rounded?: boolean
  bigrounded?: boolean
}

export const StyledButton = styled.button<SpaceProps & IStyledButton>`
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.red};
  border-radius: ${(props) => {
    if (props.rounded) {
      return '1rem'
    }
    if (props.bigrounded) {
      return '2rem'
    }
    return 0
  }};

  ${space};
`
