/* eslint-disable */
module.exports = {
  configureWebpack: {
    resolve: {
      extensions:[],
      alias: {
        'common': '@/common',
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
