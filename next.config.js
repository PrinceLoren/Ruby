/* eslint-disable @typescript-eslint/no-var-requires*/
const { i18n } = require('./next-i18next.config')
const withSvgr = require('next-plugin-svgr')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withSvgr], {
  i18n,
  webpack(config) {
    config.resolve.modules.push(__dirname)
    return config
  },
})
