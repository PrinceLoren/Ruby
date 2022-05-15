import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { ROUTES } from '~/common/routes'
import { TextMenu } from '~/components/Typography'
import { useToggleMenu } from '~/context/menu'
import { CentredLinks, Close, Logo, MenuContent } from './styled'

export const Menu: FC = () => {
  const { isOpen, toggleMenu } = useToggleMenu()

  return (
    <MenuContent isOpen={isOpen} id="menu">
      <CentredLinks>
        <Close onClick={toggleMenu}>
          <Image
            src="/img/closer.png"
            width="2rem"
            height="2rem"
            layout="responsive"
          />
        </Close>
        <Logo>
          <Image
            src="/img/logo.png"
            width="10rem"
            height="10rem"
            layout="responsive"
          />
        </Logo>
        <Link href={ROUTES.home}>
          <TextMenu>Home</TextMenu>
        </Link>
        <Link href={ROUTES.market}>
          <TextMenu>Market</TextMenu>
        </Link>
        <Link href={ROUTES.trade}>
          <TextMenu>Trade</TextMenu>
        </Link>
      </CentredLinks>
    </MenuContent>
  )
}
