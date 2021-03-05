const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

let plugins = process.env.npm_config_report ? [
  new BundleAnalyzerPlugin()
] : []

// 反向代理
const ProxyList = [
  // 正式环境
  { url: '/api/rest', port: '8001', isWs: false },
  { url: '/ISAPI', port: '80', isWs: true },

]

const BeixiApi = {
  ht: 'https://data.sznane.com:',
  ws: 'http://admin:zab88888@192.168.0.67:',
}
const TargetObj = {}
// map循环方式
ProxyList.map(item => {
  const url = item.isWs ? BeixiApi.ws : item.isCam ? BeixiApi.cam : item.face ? BeixiApi.face : BeixiApi.ht
  const target = url + item.port
  const subValue = {
    target: target,
    secure: false,
    changeOrigin: true
  }
  TargetObj[item.url] = subValue
})

module.exports = {
  lintOnSave: false,
  publicPath: '/',
  // outputDir: 'dist/smartcloud',
  assetsDir: 'assets',
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8084,
    https: false,
    // 反向代理（测试环境）
    proxy: TargetObj
  },
  // webpack配置
  configureWebpack: {
    // 警告 webpack 的性能提示
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    },
    plugins: [
      ...plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|ja/)
    ],
    module: {
      rules: [
      ]
    }
  },
  chainWebpack: (config) => {
    // 配置图片路径别名  使用例子 background: url("~img/indexbg.jpg") center no-repeat; 通过 ~ 来让webpack识别使用别名
    config.resolve.alias
      // .set('img', resolve('smartcloud/img'))
      .set('img', resolve('src/assets/img'))
    // 忽略/moment/locale下的所有文件
    // config.plugin('ignore')
    //   .use(new webpack.IgnorePlugin(/^\.\/(zh-cn)$/, /moment[\\\/]locale$/))
    // config.plugin('ignore')
    //   .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  }
}
