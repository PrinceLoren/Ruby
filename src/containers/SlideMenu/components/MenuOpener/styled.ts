import styled from '@emotion/styled'

export const OpenerWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  z-index: 10000;
  cursor: pointer;
  background: ${(props) => props.theme.colors.white};
  padding: 0.5rem 2rem;
`
