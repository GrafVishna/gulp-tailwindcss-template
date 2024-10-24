import * as path from 'path'
import { gulpPaths } from '../config.js'

// Config JS
const configJs = {
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
      loader: 'babel-loader',
      options: {
         presets: ['@babel/preset-env'],
      },
   },
}

const srcFolder = 'src'
const distFolder = '.tmp'
const paths = {
   src: path.resolve(srcFolder),
   dist: path.resolve(distFolder),
}

// Config CSS & SCSS
const configStyles = {
   test: /\.(scss|css)$/,
   exclude: path.resolve(new URL('.', import.meta.url).pathname, gulpPaths.src.fonts),
   use: [
      'style-loader',
      {
         loader: 'css-loader',
         options: {
            sourceMap: true,
            importLoaders: 1,
            modules: false,
            url: {
               filter: (url, resourcePath) => {
                  return !(url.includes('img/') || url.includes('fonts/'))
               },
            },
         },
      },
      {
         loader: 'sass-loader',
         options: {
            sourceMap: true,
         },
      },
   ],
}

// Config Images
const configImages = {
   test: /\.(png|jpg|jpeg|gif|svg)$/,
   type: 'asset/resource',
   generator: {
      filename: 'images/[name][ext][query]',
   },
}

// Webpack Configuration
const webpackDev = {
   mode: 'development',
   cache: true,
   // devtool: 'eval-cheap-source-map',
   entry: [
      `${paths.src}/js/app.js`
   ],
   module: {
      rules: [configJs, configStyles, configImages],
   },
   output: {
      filename: 'app.js',
      path: paths.dist, // Шлях до вихідного каталогу
   },
   performance: {
      hints: false,
   },
}

export { webpackDev }
