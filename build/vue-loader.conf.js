//根据当前的开发环境对webpack中的vue-loader进行配置
'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  // 配置在.vue文件中的css相关处理规则
  loaders: utils.cssLoaders({
    // 根据所处环境是否生成sourceMap用于代码调试
    sourceMap: sourceMapEnabled,
    // 是否将单独的css文件（一般为引入的外部文件）进行提取单独打包
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
