import { useTranslation } from 'next-i18next'
import React from 'react'
import { Layout } from '~/components/Layout'
import { H1 } from '~/components/Typography'
import { SniperSection } from '~/screens/Home/containers/SniperSection'

export const Home = () => {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <H1>{t('ruby')}</H1>
      <SniperSection />
    </Layout>
  )
}
