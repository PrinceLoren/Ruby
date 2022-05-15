import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { CustomArrow } from '~/components/CustomArrow'
import { useToggleMenu } from '~/context/menu'
import { OpenerWrapper } from './styled'

export const MenuOpener: FC = () => {
  const { isOpen, toggleMenu } = useToggleMenu()
  const { t } = useTranslation('common')
  return (
    <OpenerWrapper isOpen={isOpen} onClick={toggleMenu}>
      <p>{t('topBar.menu.title')}</p>
      <CustomArrow mt=".s3rem" mr=".6rem" up={!isOpen} down={isOpen} />
    </OpenerWrapper>
  )
}
