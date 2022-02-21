module.exports = {
  lintOnSave: false,
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //      .set('@', resolve('src'))
  //     // 需要重启 IDE
  //     .set('styles',resolve('src/assets/styles'))
  //     // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  // }
  configureWebpack: {
    resolve: {
      alias: {
        'src':'@',
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

