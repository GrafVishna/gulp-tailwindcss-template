import pkg from 'gulp'
const { src, dest } = pkg
import webphtml from 'gulp-webp-html-nosvg'
import fileinclude from 'gulp-file-include'
import { config, gulpPaths } from "../../config.js"
import { replaceAliasHTML } from "./replaceHtml.js"

//========================================================================================================================================================

/**
 * Produces the HTML file in dev mode.
 *
 * @return {object} The Gulp stream
 */
export function devHTML() {
   /*
   * Reads the source HTML file
   * Includes partials (header, footer, etc.)
   * Writes the resulting HTML file to the dist directory
   * */
   return src([`${gulpPaths.src.base}*.html`, `${gulpPaths.src.components}**/*.htm`])
      .pipe(fileinclude({ ...config.include }))
      .pipe(replaceAliasHTML())
      .pipe(dest(gulpPaths.dist.base))
}

//========================================================================================================================================================

/**
 * Produces the HTML file with webp images in dist directory.
 *
 * @return {object} The Gulp stream
 */
export function prodHTML() {
   /*
    * Reads the source HTML file.
    * Includes partials (header, footer, etc.)
    * Converts the images to webp and injects them into the HTML
    * Writes the resulting HTML to the dist directory
    */
   return src(`${gulpPaths.src.base}*.html`)
      .pipe(fileinclude({ ...config.include }))
      .pipe(replaceAliasHTML())
      .pipe(webphtml())
      .pipe(dest(gulpPaths.build.base))
}
//========================================================================================================================================================

/**
 * Produces the HTML file without webp images in dist directory.
 *
 * This function is used for generating a version of the HTML file without
 * the webp images in case the user doesn't have a browser that supports webp.
 *
 * @return {object} The Gulp stream
 */
export function prodHTMLNoWebp() {
   /*
   * Reads the source HTML file.
   * Includes partials (header, footer, etc.)
   * Writes the resulting HTML file to the dist directory without webp images
   */
   return src(`${gulpPaths.src.base}*.html`)
      .pipe(includePartials())  // include partials
      .pipe(fileinclude({ ...config.include }))
      .pipe(dest(gulpPaths.dist.base))  // write resulting HTML to dist
}
//========================================================================================================================================================