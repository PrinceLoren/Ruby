import React, { FC } from 'react'
import { SpaceProps } from 'styled-system'
import { StyledButton } from '~/components/Button/styled'
import { BtnText, SText } from '~/components/Typography'

interface IButton {
  label: string
  rounded?: boolean
  onClick?: VoidFunction
  small?: boolean
  bigrounded?: boolean
}

export const Button: FC<IButton & SpaceProps> = ({
  small,
  rounded,
  bigrounded,
  onClick,
  label,
  ...props
}) => (
  <StyledButton
    bigrounded={bigrounded}
    type="button"
    {...props}
    onClick={onClick}
    rounded={rounded}
    {...props}
  >
    {small ? <SText>{label}</SText> : <BtnText>{label}</BtnText>}
  </StyledButton>
)
