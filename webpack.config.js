const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');




const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Дирректории входа(импорт) и выхода (экспорт)
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // Настройка devServer
  devServer: {
    contentBase: './dist'
  },

  // Модули и правила для обработки файлов
  module: {
    rules: [
      // Правило для CSS-файлов
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      // Правила для сборки SVG-спрайта
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true
          // symbolID: (path) => path.basename(path),
          // publicPath: '/'
        }
      },

      // Правило для SCSS-файлов
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader',
              'sass-loader']
          }
        )
      },

      // Правило для haml-файлов
      // {
      //   test: /\.haml$/,
      //   use: 'haml-loader'
      // },

      // Правило для PUG-файлов
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },

      // Правило для файлов изображений
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: './css/img/[name].[ext]'
        }
      },
      // Правило для обработки шрифтов
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: './css/fonts/[name].[ext]'
        }
      }
    ]
  },

  // Настройка плагинов
  plugins: [
    // Очистка директории выхода
    new CleanWebpackPlugin(['dist']),
    // Экспорт стилей
    new ExtractTextPlugin({filename: './style.css'}),
    // Настройка обработчика HTML
    new HtmlWebpackPlugin({
      // template: './src/index.pug'
      template: './src/index.pug'
    }),
    new SpriteLoaderPlugin({
      plainSprite: true,
      spriteAttrs: {
        id: 'import-svg',
        class: 'visually-hidden'
      }
      // spriteAttrs: {
      //   id: 'sprite-svg'
      // }
    })
  ]

};
