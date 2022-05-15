import { useTranslation } from 'next-i18next'
import React from 'react'
import { Layout } from '~/components/Layout'
import { H1 } from '~/components/Typography'

export const Market = () => {
  const { t } = useTranslation('common')

  return (
    <>
      {/*<SlideMenu />*/}
      <Layout>
        <H1>{t('hello Market')}! 👋</H1>
      </Layout>
    </>
  )
}
