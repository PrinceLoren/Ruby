import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { useMediaQueries } from '~/common/mediaQueries'
import { Button } from '~/components/Button'
import { CryptoInfo } from '~/components/CryptoInfo'
import { useToggleMenu } from '~/context/menu'
import { MainContent } from './styled'

export const TobBar: FC = () => {
  const { toggleMenu } = useToggleMenu()
  const { isLaptop } = useMediaQueries()
  const { t } = useTranslation('common')
  return (
    <MainContent>
      <Button
        small={!isLaptop}
        onClick={toggleMenu}
        label={t('menu.openLabel')}
      />
      <CryptoInfo />
    </MainContent>
  )
}
