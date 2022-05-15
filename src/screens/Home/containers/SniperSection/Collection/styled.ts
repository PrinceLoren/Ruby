import styled from '@emotion/styled'

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: sniper;
  margin-top: 3rem;
`

export const ButtonPos = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StatsBlock = styled.div`
  display: flex;
  padding: 0.1rem 1rem;
  align-items: center;
  background: ${(props) => props.theme.colors.red};
`

export const NftBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 1.5rem;
  margin-top: 2rem;
`
