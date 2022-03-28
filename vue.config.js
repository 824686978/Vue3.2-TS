const path = require('path')

module.exports = {
  outputDir: './build',
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        /* options */
      }),
      require('unplugin-auto-import/webpack')({
        /* options */
      })
    ]
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
  }
}
