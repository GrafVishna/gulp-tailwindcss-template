import { src, dest } from 'gulp'
import webpack from 'webpack-stream'
import { webpackProd, webpackProdMin } from '../webpack.config.prod.js'
import { webpackDev } from '../webpack.config.dev.js'
import { gulpPaths } from "../../config.js"

//========================================================================================================================================================

/**
 * Task: Build JavaScript (dev)
 * ----------------------------------------------------------------------------
 * Transpile and bundle JS using Webpack, in development mode.
 *
 * Gulp will look for all JS files in the source directory (defined in gulpPaths.src.js)
 * and their subdirectories, and pass them through Webpack to create a single
 * concatenated JS file that is saved to the destination directory (defined in
 * gulpPaths.dist.js).
 */
export function devScripts() {
   return src(`${gulpPaths.src.js}**/*.js`) // Globbing pattern to grab all JS files in src/js and their subdirectories
      .pipe(webpack(webpackDev))
      .pipe(dest(gulpPaths.dist.js)) // Save the resulting JS file to the destination directory
}
//========================================================================================================================================================

/**
 * Task: Build JavaScript (prod)
 * ----------------------------------------------------------------------------
 * Transpile and bundle JS using Webpack, in production mode with minification.
 *
 * Gulp will look for all JS files in the source directory (defined in gulpPaths.src.js)
 * and their subdirectories, and pass them through Webpack to create a single
 * minified JS file that is saved to the destination directory (defined in
 * gulpPaths.dist.js).
 */
export function prodScripts() {
   return src(`${gulpPaths.src.js}/**/*.js`) // Globbing pattern to grab all JS files in src/js and their subdirectories
      .pipe(webpack(webpackProdMin)) // Pass them through Webpack in production mode with minification
      .pipe(dest(gulpPaths.dist.js)) // Save the resulting minified JS file to the destination directory
}
//========================================================================================================================================================



// .pipe(webpack(webpackProd))
// .pipe(dest(gulpPaths.build.js))
// .pipe(src(`${gulpPaths.src.js}/**/*.js`))