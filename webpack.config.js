const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = (env) => {
  console.log(env)

  const output = {
    filename: 'infra.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'infra-[chunkhash].js',
  }

  let config = null
  if (env.expose) {
    config = {
      entry: './src/components/Components.js',
      output: {
        ...output,
        publicPath: '/javascripts/infra/',
        library: 'infra',
        libraryTarget: 'umd',
      },
      externals: [
        '@watermarkinsights/ripple-react',
        'react',
        'react-dom',
        'react-router',
        'classnames'
      ],
      plugins: [],
    }
  } else {
    config = {
      entry: './src/index.jsx',
      output: output,
      plugins: [htmlWebpackPlugin],
    }
  }

  if (env.analyze) {
    config.plugins.push(new BundleAnalyzerPlugin())
  }

  config.module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {extensions: ['.js', '.jsx']},
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              importLoaders: 1,
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /(.jpg|.jpeg|.png|.gif|.tiff|.ico|.svg|.eot|.otf|.ttf|.woff|.woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: 'src/',
              name: '[name]-[contenthash].[ext]',
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  }

  config.devtool = 'eval-source-map'

  console.log(config)

  return config
}
