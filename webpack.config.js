var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var NODE_ENV = process.env.NODE_ENV || 'production';
console.log('run as '+NODE_ENV);

module.exports = {
  devtool: NODE_ENV == 'production' ? false : 'cheap-module-eval-source-map',
  entry: NODE_ENV == 'production' ? ['babel-polyfill', './src/index'] : [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: NODE_ENV == 'production' ? './dist/' : '/static/'
  },
  plugins: NODE_ENV == 'production' ? [
    new CleanWebpackPlugin('./dist/*'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    }),
    // new webpack.DefinePlugin({
    //   NODE_ENV: JSON.stringify(NODE_ENV)
    // })
  ] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.DefinePlugin({
    //   NODE_ENV: JSON.stringify(NODE_ENV)
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: NODE_ENV == 'production' ? ["babel-loader", "eslint-loader",] : [
          "react-hot-loader",
          "babel-loader",
          "eslint-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => NODE_ENV == 'production' ? [
                require('precss')(),
                require('autoprefixer')(),
                require('cssnano')()
              ] : [
                require('precss')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|woff)$/,
        use: 'url-loader?name=[path][name].[ext]&limit=4096'
      },
    ],
    loaders: [
      {
        loaders: NODE_ENV == 'production' ? [ 'babel-loader'] : ['react-hot-loader', 'babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/,
      },
    ]
  },
}
