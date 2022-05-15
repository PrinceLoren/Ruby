import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config'
import { Home } from '../src/screens/Home'

export const getStaticProps: GetStaticProps = async (ctx) => ({
  props: {
    ...(await serverSideTranslations(
      ctx.locale ?? 'en',
      ['common'],
      nextI18NextConfig
    )),
  },
})

export default Home
