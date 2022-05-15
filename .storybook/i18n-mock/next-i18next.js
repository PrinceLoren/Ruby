import _ from 'lodash'
import common from '../../public/locales/en/common.json'

// export * from '../../node_modules/next-i18next'

const translations = {
  common,
}

export function useTranslation(namespace) {
  const namespaceTranslations = translations[namespace]

  const t = (path) => {
    return _.get(namespaceTranslations, path)
  }

  return { t }
}
