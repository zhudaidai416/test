const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/statics/js/index.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../command/base/zh-cn/code'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader?limit=10&name=font/[hash:6].[ext]'
      },
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: 'img/[name]_[hash:6].[ext]'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        // loader: 'style-loader!css-loader!less-loader',
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader', 'less-loader']
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '主页',
      filename: 'index.html',
      template: './src/statics/index.html',
      chunks: ['index']
    }),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()

  ],
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    publicPath: "/",
    // contentBase : '../lzlb/base/zh-cn/code',
    // contentBase : './dist',
    watchContentBase: true,
    compress: true,
    port: 8089,
    hot: true,
    open: true,
    proxy: {
      '/apis': {
        target: 'http://192.168.1.119:8082/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      },
    }
  }
}
