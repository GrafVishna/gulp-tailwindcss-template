import * as path from 'path'
import { gulpPaths } from "../config.js"

// =========================================================================================================================
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

// =========================================================================================================================

const webpackDev = {
   mode: 'development',
   cache: true,
   devtool: 'eval-cheap-source-map',
   entry: `${gulpPaths.src.js}app.js`,
   output: {
      filename: 'scripts.js',
      path: path.resolve(new URL('.', import.meta.url).pathname, gulpPaths.dist.js),
   },
   module: {
      rules: [configJs, configStyles, configImages],
   },
}

export { webpackDev }
