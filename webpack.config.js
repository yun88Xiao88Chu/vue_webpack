
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpackCopyPlugin = require('copy-webpack-plugin');
const SRC_DIR = './src08_Ul/';
function resolve(dir){
  return path.resolve(__dirname,dir);
}
module.exports = {
  // 入口:指定js入口
  // entry: resolve('src/index.js')
  entry:{
    xxx:resolve( SRC_DIR +'/index.js')
  },
  // 出口
  output:{
    path: resolve('dist'),
    filename:'js/[name].js',
    publicPath:'/'   //生成的引用路径左边都有一个/
  },
  // 模块打包器
  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        // exclude: /(node_modules)/,
        include: [resolve(SRC_DIR)],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins:[
              [   
                "component",  //配置babel-plugin-component
                {
                  "libraryName":"element-ui", //针对的是element-ui库的组件
                  "styleLibraryName":"theme-chalk"  //自动引入组件对应的样式文件
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      }, 
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 8,
              name: 'img/[name].[ext]' // 相对于output.path
            }
          }
        ]
      }, 
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,  //字体
        use:[
          {
            loader: 'url-loader',
            options:{
              limit: 10240,
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      }
           
    ]
  },
  // 插件(功能)
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    // 将public下的所有全局资源拷贝到dist下!
    new webpackCopyPlugin([
      { from: resolve('public'), 
        to: resolve('dist'),
        ignore:['index.html'] 
      },
    ]),
  ],
  devServer:{
    open:true, 
    port:8080,
    // stats:"errors-only" //只输出错误日志
    proxy: {
      // 处理以/api开头路径的请求
      // '/api': 'http://localhost:4000'
      // http://localhost:4000/api/search/users   
      '/api': {
        target: 'http://localhost:4000', // 转发的目标地址
        pathRewrite: {
          '^/api' : ''  // 转发请求时去除路径前面的/api
        },
        changeOrigin: true,// 支持跨域, 如果协议/主机也不相同, 必须加上
      },
    },
    historyApiFallback:true  //请求404时返回index页面
  },
  // source-map调试
  devtool:"cheap-module-eval-source-map",
  resolve:{
      extensions:['.js','.vue','.json'],
      alias:{
        // 'vue$': 'vue/dist/vue.esm.js', 
        '@': resolve(SRC_DIR),
        '@components': resolve(`${SRC_DIR}/components`)
      }
  }

}