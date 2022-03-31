const path = require('path')

module.exports = {
  outputDir: './build',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
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
