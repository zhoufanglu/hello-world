const path = require('path');

const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')//webpack的可视化资源分析工具
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
//去除console.log
const TerserPlugin = require('terser-webpack-plugin')



const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV); //是否生产环境
const IS_DEV = ["development", "dev"].includes(process.env.NODE_ENV); //是否开发环境
const IS_GZIP = true; //是否开启Gzip压缩

module.exports = {
  // 基本路径
  /*publicPath: process.env.NODE_ENV === 'production'
    ? './production-sub-path/'
    : './',*/
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  productionSourceMap: true, //关闭SourceMap 不查看代码
  // webpack配置
  configureWebpack: (config) => {

    devtool: 'source-map',

    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/skeleton/entry-skeleton.js'),
        },
      },
      minimize: true,
      quiet: true,
      router: {
        mode: 'hash',
        routes: [
          {
            path: '/home',
            skeletonId: 'skeleton1'
          },
          {
            path: '/login',
            skeletonId: 'loginSkeleton'
          },
          {
            path: '/test',
            skeletonId: 'skeleton2'
          }
        ]
      }
    }))

    if (IS_GZIP && IS_PROD) {
      // 为生产环境修改配置...
      config.mode = 'production';
      //代码压缩
      const productionGzipExtensions = ['html', 'js', 'css']
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' + productionGzipExtensions.join('|') + ')$'
          ),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      )
      //去除console
      config.plugins.push(
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          }
        })
      )
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';
    }

    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components')
        }
      }
    });
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: true,
    // css预设器配置项
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/global.scss";`
      },
      postcss: {
        /*plugins: [
          require('postcss-plugin-px2rem')({
            rootValue : 32,
            exclude: /(node_modules)/, //不包括node_module
            minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
            selectorBlackList: ["el-", "html"]
          })
        ]*/
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    //public: '192.168.5.148:8081',
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    hot: true,
    proxy: {
        // 设置代理
        // proxy all requests starting with /api to jsonplaceholder
        '/api': {
            target: 'https://suggest.taobao.com', //设置你调用的接口域名和端口号
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'//这里理解成用‘/api’代替target里面的地址，
              // 后面组件中我们掉接口时直接用api代替
              // 比如我要调用'http://40.00.100.100:3002/user/add'，
              // 直接写‘/api/user/add’即可
            }
        }
    },
    before: (app) => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
  chainWebpack: config => {
    //webpack的可视化资源分析工具
    process.env.VUE_APP_ENV === "analyz" &&
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // 压缩图片
    config.module
      .rule("images")
      .test(/\.(gif|png|jpe?g|svg)$/i)
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        bypassOnDebug: true
      })
      .end();
  }
};
