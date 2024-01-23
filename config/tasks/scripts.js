import gulp from 'gulp'
const { src, dest } = gulp
import webpack from 'webpack-stream'
import { webpackProd, webpackProdMin } from '../webpack.config.prod.js'
import { webpackDev } from '../webpack.config.dev.js'
import { gulpPaths } from "../../config.js"

export function devScripts() {
   return src(`${gulpPaths.src.js}**/.js`)
      .pipe(webpack(webpackDev))
      .pipe(dest(gulpPaths.dist.js))
}

export function prodScripts() {
   return src(`${gulpPaths.dist.js}**/*.js`)
      .pipe(webpack(webpackProdMin))
      .pipe(dest(gulpPaths.build.js))
      .pipe(webpack(webpackProd))
      .pipe(dest(gulpPaths.build.js))
}
