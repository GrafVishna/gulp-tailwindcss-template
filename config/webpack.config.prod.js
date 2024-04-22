import * as path from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import { gulpPaths } from "../config.js"

const paths = {
   build: path.resolve(new URL('.', import.meta.url).pathname, gulpPaths.dist.js),
}


const configJs = {
   test: /\.js$/,
   exclude: /node_modules/,
   loader: 'babel-loader',
}

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

const configImages = {
   test: /\.(png|jpg|jpeg|gif|svg)$/,
   type: 'asset/resource',
}

const commonConfig = {
   mode: 'production',
   entry: `${gulpPaths.src.js}app.js`,
   module: {
      rules: [configJs, configStyles, configImages],
   },
}

const webpackProd = {
   ...commonConfig,
   cache: {
      type: 'filesystem',
   },
   output: {
      filename: 'scripts.js',
      path: paths.build,
   },
}

const webpackProdMin = {
   ...commonConfig,
   output: {
      filename: 'scripts.min.js',
      path: paths.build,
   },
   optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({ extractComments: false })],
   },
}

export { webpackProd, webpackProdMin }

