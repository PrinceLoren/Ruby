// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
// const path = require('path')

// module.exports = {
//   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//   ],
//   resolve: {
//     plugins: [
//       new TsconfigPathsPlugin({
//         configFile: path.resolve(__dirname, '../tsconfig.json')
//       }),
//     ],
//   },
//   framework: '@storybook/react',
// }

const { merge } = require('webpack-merge')
const path = require('path')
const fs = require('fs')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

/* Workaround for emotion v11 until its fixed by storybook
 * based on https://stackoverflow.com/questions/65894711/module-not-found-error-cant-resolve-emotion-styled-base-when-running-story
 */

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      )
    }
    currDir = dir
  }
}

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
  ],
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'next-i18next/serverSideTranslations$': path.resolve(
            __dirname,
            'i18n-mock/next-i18next-ssr.js'
          ),
          'next-i18next$': path.resolve(__dirname, 'i18n-mock/next-i18next.js'),
        },
        plugins: [
          new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, '../tsconfig.json'),
          }),
        ],
      },
      /* next-i18next storybook hot-fix - runs but translations dont work
       * https://github.com/isaachinman/next-i18next/issues/1012
       */
      node: {
        ...config.node,
        fs: 'empty',
      },
    })
  },
}
