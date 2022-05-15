import React, { FC } from 'react'
import { SlideMenu } from '~/containers/SlideMenu'
import { TobBar } from '~/containers/TopBar'
import { StyledLayout, StyledMainContent } from './styled'

export const Layout: FC = ({ children, ...props }) => (
  <StyledLayout {...props}>
    <TobBar />
    <SlideMenu />
    <StyledMainContent>{children}</StyledMainContent>
  </StyledLayout>
)
