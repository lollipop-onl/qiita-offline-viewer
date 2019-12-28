import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  modern: 'client',
  srcDir: 'src',
  head: {
    title: 'Qiita Offline Viewer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: [
    '@/assets/styles/global.scss'
  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  plugins: [
    '@/plugins/axios-logger'
  ],
  axios: {
    baseURL: 'https://qiita.com/api/v2'
  },
  styleResources: {
    scss: [
      '@/assets/styles/vars/*.scss'
    ]
  }
}

module.exports = config
