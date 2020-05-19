const lessToJs = require('less-vars-to-js')
const fs = require('fs')
const paletteLess = fs.readFileSync('./examples/assets/less/variables.less', 'utf8')
const globalVars = lessToJs(paletteLess, { resolveVariables: true, stripPrefix: true })
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isAnalyze = (process.env.NODE_ENV === 'production') // 是否启用bundleAnalyzer
const now = Date.now()

module.exports = {
  lintOnSave: false,
  // runtimeCompiler: true,
  assetsDir: 'static',
  pages: {
    puiDoc: {
      entry: './examples/pages/puiDoc/main.js',
      template: './examples/pages/puiDoc/index.html',
      filename: 'puiDoc/index.html'
    },
    puiDemo: {
      entry: 'examples/pages/puiDemo/main.js',
      template: './examples/pages/puiDemo/index.html',
      filename: 'puiDemo/index.html'
    }
  },
  css: {
    // css预设器配置项
    loaderOptions: {
      less: {
        globalVars
      }
    }
  },
  chainWebpack: config => {
    if (isAnalyze) {
      // 设置bundle-analyzer
      config.plugin('bundle-analyzer').use(
        new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: `../report/build-type-${now}.html`
      }))
    }
    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
      config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('@vant/markdown-loader')
      .loader('@vant/markdown-loader')
      .options({
        raw: true,
        // preventExtract: false,
        // wrapper: 'article'
      })
  },
  devServer: {
    // proxy: process.env.VUE_APP_API_BASE_URL,
    historyApiFallback: {
      rewrites: [
        { from: /demo/, to: '/puiDemo/index.html' },
        { from: /^\/[\s\S]*/, to: '/puiDoc/index.html' }
      ]
    } 
  }
}
