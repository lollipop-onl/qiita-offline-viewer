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
  router: {
    mode: 'hash'
  },
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-client-init-module'
  ],
  plugins: [
    '@/plugins/axios-logger'
  ],
  axios: {
    baseURL: 'https://qiita.com/api/v2'
  },
  pwa: {
    workbox: {
      offline: true,
      offlineAssets: ['%STATIC_CACHE_FILES%']
    }
  },
  styleResources: {
    scss: [
      '@/assets/styles/vars/*.scss'
    ]
  }
}

module.exports = config
