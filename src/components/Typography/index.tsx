import styled from '@emotion/styled'
import CSS from 'csstype'
import {
  color,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'
import { mediaQueries } from '~/common/mediaQueries'

// There is a confict with styled-system's ColorProps, so we'll have our own type
// more https://stackoverflow.com/questions/53711454/styled-system-props-typing-with-typescript
export interface ICustomColorProps {
  color?: CSS.Property.Color
  backgroundColor?: CSS.Property.Color
}

type IBaseTestProps = SpaceProps & TypographyProps & ICustomColorProps

export const BaseText = styled('p')<IBaseTestProps>(
  (props) => ({
    'color': props.theme.colors.black,
    'fontFamily': props.theme.fonts.default,
    '&::selection': {
      color: props.theme.colors.white,
      backgroundColor: props.theme.colors.green,
    },
  }),
  color,
  space,
  typography
)

// Heading-01
export const H1 = styled(BaseText.withComponent('h1'))`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 5.2rem;
  line-height: 90%;
  letter-spacing: -0.025em;
  color: ${(props) => props.theme.colors.white};
`

export const TextMenu = styled(BaseText.withComponent('p'))`
  font-size: 3rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
`

export const BtnText = styled(BaseText.withComponent('p'))`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};

  ${mediaQueries.tablet} {
    font-size: 1.6rem;
  }
`

export const IText = styled(BaseText.withComponent('p'))`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.red};
`

export const TopBarText = styled(BaseText.withComponent('p'))`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.red};
`

export const TopBarInfo = styled(BaseText.withComponent('p'))`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
`

export const SText = styled(BaseText.withComponent('p'))`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
`

export const TextBody = styled(BaseText.withComponent('p'))`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
`

export const TextStat = styled(BaseText.withComponent('p'))`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
`

export const CollectionText = styled(BaseText.withComponent('p'))<{
  red?: boolean
}>`
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 600;
  color: ${(props) =>
    props.red ? props.theme.colors.red : props.theme.colors.white};

  ${mediaQueries.laptop} {
    font-size: 2.6rem;
  }
`

export const ClBody = styled(BaseText.withComponent('p'))`
  font-size: 2.1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
`

export const NftT = styled(BaseText.withComponent('p'))<{
  white?: boolean
  green?: boolean
  top?: boolean
}>`
  font-size: ${(props) => (props.top ? '1rem' : '1.2rem')};
  font-weight: 600;
  color: ${(props) => {
    if (props.white) {
      return props.theme.colors.white
    }
    if (props.green) {
      return props.theme.colors.green
    }

    return props.theme.colors.red
  }};
`
