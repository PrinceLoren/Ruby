import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'

export const MainContent = styled.div<SpaceProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.white};
  ${space}
`

export const Spacing = styled.div`
  margin: 0.2rem 0;
`

export const Filter = styled.div`
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;

  font-size: 1rem;
  background: ${(props) => props.theme.colors.gray};
`

export const Rare = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.red};
`
export const Check = styled.div`
  width: 1rem;
  height: 1rem;
  border: 0.1rem solid ${(props) => props.theme.colors.red};
`
