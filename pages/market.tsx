import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config'
import { Market } from '../src/screens/Market'

export const getStaticProps: GetStaticProps = async (ctx) => ({
  props: {
    ...(await serverSideTranslations(
      ctx.locale ?? 'en',
      ['common'],
      nextI18NextConfig
    )),
  },
})

export default Market
