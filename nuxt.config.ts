import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  modern: 'client',
  srcDir: 'src',
  css: [
    '@/assets/styles/global.scss'
  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '@/assets/styles/vars/*.scss'
    ]
  }
}

module.exports = config
