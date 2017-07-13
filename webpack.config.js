var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: {
    // "bundle": "./src/js/main.js",
    "bundle.min": "./src/js/main.js"
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "build/"),
    publicPath: "/build/",
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
      components: __dirname + '/src/js/components'
    }
  },
  devServer: {
    // contentBase: path.join(__dirname),
    compress: true,
    inline: true,
    port: 9000,
    watchOptions: {
      ignored: '/node_modules/'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015'],
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false,
        join_vars: true,
        drop_console: true
      },
      output: {
        comments: false
      } 
    })
  ]
}
