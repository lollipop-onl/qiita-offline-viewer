import { Plugin } from '@nuxt/types'
import AxiosLogger from '@lollipop-onl/axios-logger'

const plugin: Plugin = ({ $axios }) => {
  const logger = new AxiosLogger({
    baseURL: 'https://qiita.com'
  })

  $axios.onResponse(logger.log)
  $axios.onResponseError(logger.log)
}

export default plugin;
