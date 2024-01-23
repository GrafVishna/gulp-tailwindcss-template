import * as path from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import { gulpPaths } from "../config.js"

// =========================================================================================================================

// todo Path build JS
const paths = {
   build: path.resolve(new URL('.', import.meta.url).pathname, gulpPaths.build.js),
}

// todo Config JS
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

// todo Config CSS & SCSS
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

// todo Images
const configImages = {
   test: /\.(png|jpg|jpeg|gif|svg)$/,
   type: 'asset/resource',
   generator: {
      filename: 'images/[name][ext][query]',
   },
}

// todo Config Common
const commonConfig = {
   mode: 'production',
   entry: `${gulpPaths.src.js}app.js`,
   module: {
      rules: [configJs, configStyles, configImages],
   },
}

// No min =========================================================================================================================

const webpackProd = {
   ...commonConfig,
   cache: {
      type: 'filesystem',
   },
   output: {
      filename: 'scripts.js',
      pathinfo: false,
      path: paths.build,
      environment: {
         module: false,
      },
   },
   optimization: {
      minimize: false,
      minimizer: [new TerserPlugin({ extractComments: false })],
   },
}

// Min =========================================================================================================================

const webpackProdMin = {
   ...commonConfig,
   output: {
      filename: 'scripts.min.js',
      path: paths.build,
   },
   optimization: {
      minimize: true,
   },
}

export { webpackProd, webpackProdMin }
